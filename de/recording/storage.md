---
title: Speicher & Aufbewahrung
---

# Speicher & Aufbewahrung

## Wo Aufnahmen liegen

Standardmäßig liegen Aufnahmen bei den übrigen camera.ui-Daten. Ab mehr als ein paar Kameras lege sie auf eine **dedizierte lokale Disk**, getrennt von der System-Disk. Siehe [Systemanforderungen](/de/intro/requirements#speicher-für-aufnahmen).

Eine lokale Disk oder ein Symlink darauf ist in Ordnung. Eine **Netzwerkfreigabe (NAS, SMB, NFS) nicht**: Erkennungs-Ereignisse, Timeline-Markierungen und Suchindex liegen als Datenbanken neben dem Material, und die brauchen Dateisperren, die Netzwerk-Dateisysteme nicht zuverlässig bereitstellen. Kaputt geht dort die Ereignis-Datenbank, nicht das Video. Liegt dein Speicher auf einem NAS, lass camera.ui auf dem NAS laufen und nimm dort lokal auf.

Ein Verbund lokaler Disks mit mergerfs funktioniert. Mit `cache.files=off`, der Vorgabe seit mergerfs 2.41, öffnen sich diese Datenbanken nur mit mergerfs ab 2.41 auf Linux ab 6.6. Sonst meldet das NVR-Plugin beim Start `disk I/O error: no such device`. Nimm dort `cache.files=partial`.

Fehlt beim Start eine Disk des Verbunds, nennt das Log die betroffene Datei und dass eine Disk fehlen kann. Das NVR-Plugin entfernt dann keine Reste aus dieser Datei, bis die Disk wieder da ist. Kommt die Meldung mit allen Disks bei jedem Start wieder, bleibt das so. Kaputt geht nichts, die Reste belegen nur Platz.

## Aufnahmen auf eine andere Platte umziehen

Den Speicherpfad zu ändern zieht deine Aufnahmen nicht um: camera.ui fängt am neuen Ort bei null an, der alte Ordner bleibt, wie er ist. Einen neuen Pfad, den camera.ui nicht anlegen oder beschreiben kann, übernimmt es nicht, die Aufnahme bleibt im alten Ordner und eine Benachrichtigung nennt den Grund. So ziehst du die Daten um:

1. Stoppe den Server.
2. Verschiebe den kompletten Speicherordner auf die neue Platte, einschließlich der Ordner `events` und `clip`. Darin liegen Ereignisse, Zeitleisten-Marker und Suchindex zu diesem Material.
3. Starte den Server und trag den neuen Pfad unter **Einstellungen → Aufnahmen** ein.

Nichts darin speichert einen absoluten Pfad, am neuen Ort funktioniert also alles ohne Neuaufbau. Ohne `events` und `clip` kommt nur das nackte Material an, und aus den Videodateien lassen sie sich nicht wiederherstellen. Hinterlegte Gesichter liegen außerhalb des Aufnahmeordners und sind nicht betroffen.

## Grobe Dimensionierung

Bei durchgehender Aufnahme richtet sich die Größe nach der Bitrate des Streams:

**GB pro Tag, pro Kamera ≈ Bitrate in Mbit/s × 10,8**

| Stream | Bitrate | Durchgehend, pro Tag | Pro Kamera, 7 Tage |
|---|---|---|---|
| 1080p H.264 | 4 Mbit/s | ~43 GB | ~300 GB |
| 4K H.264 | 8 Mbit/s | ~86 GB | ~600 GB |
| H.265 (HEVC) | etwa halbe Bitrate | grob die Hälfte davon | grob die Hälfte davon |
| 720p MJPEG, 15 fps | ~4 Mbit/s | ~40 GB | ~280 GB |

MJPEG hat keine feste Bitrate, sie folgt Auflösung, Bildrate und JPEG-Qualität der Kamera.

Ereignis-Aufnahme braucht einen Bruchteil davon, je nachdem wie belebt die Szene ist. Im Zweifel ein Aufbewahrungs-Fenster oder eine Speichergrenze setzen und die Pro-Kamera-Rate (unten) eine Woche beobachten.

## Wie lange sie behalten werden

- **Retention (Days).** Material bis zu so vielen Tagen behalten (0 bedeutet keine Tagesgrenze).
- **Max Storage (GB).** Den gesamten Platz begrenzen, den Aufnahmen nutzen dürfen (0 bedeutet keine Grenze). Darüber werden die ältesten Aufnahmen gelöscht, auch mit **Strict**.

Wird der Platz auf der Disk knapp, entscheidet der **Retention Mode**:

- **Overwrite** (Standard). Die ältesten Aufnahmen werden gelöscht, um Platz zu schaffen. Die Aufnahme pausiert nur, wenn andere Daten die Disk füllen und keine älteren Aufnahmen mehr zu löschen sind.
- **Strict.** Nichts, was jünger als das Aufbewahrungs-Fenster ist, wird gelöscht. Läuft die Disk voll, pausiert die Aufnahme, bis du Platz freigibst.

Die Bereinigung nimmt die ältesten Stunden aller Kameras nebeneinander, eine ruhige Kamera verliert also nicht ihren ganzen Verlauf, während eine belebte alles behält, und sie hört auf, sobald genug Platz frei ist. [Favoriten](/de/recording/browsing#favoriten) bleiben ausgespart und abspielbar, egal wie alt sie sind.

Ereignisse folgen der Aufbewahrung ebenfalls, auch bei einer Kamera, die nichts aufnimmt. Favoriten bleiben auch hier.

### Grenzen pro Kamera

Mit **Own Storage Limits** in den Einstellungen einer Kamera bekommt sie eigene Werte für **Retention (Days)** und **Max Storage (GB)**. Ihre Aufbewahrung ersetzt die globale, kürzer oder länger, und ihre Ereignisse gehen mit ihren Aufnahmen. Ihre Grenze löscht nur ihre eigenen ältesten Aufnahmen, auch mit **Strict**. Das globale **Max Storage** und der freie Speicher gelten weiter für alle Kameras, eine längere Aufbewahrung hält also nur, solange beide Platz lassen.

## Freier Speicher

Unabhängig von diesen Grenzen hält **Min Free Space (GB)** einen Teil der Disk frei: Die Bereinigung hält mindestens so viel verfügbar. Unter der Hälfte davon löscht sie schneller, und die Aufnahme pausiert dort bei **Strict**, bei **Overwrite** erst, wenn nichts mehr zu löschen ist. Bei 0 ist die Reserve ein Anteil am ganzen Volume.

Setz einen eigenen Wert, wenn die Aufnahmen sich eine Disk mit anderen Daten teilen, sonst kann die abgeleitete Reserve auf einer großen Disk lange vor deiner Speichergrenze Aufnahmen löschen oder bei **Strict** die Aufnahme pausieren. Werte unter 10 GB zählen als 10, oder als ein Viertel der Disk, wenn das weniger ist.

## Aufnahmen entfernter Kameras

Wenn du eine Kamera löschst oder die Zuweisung des NVR aufhebst, bleiben ihre Aufnahmen auf der Disk. Sie zählen weiterhin zu **Max Storage** und werden wie bei einer aktiven Kamera gealtert und bereinigt.

Um das Material zu behalten, lege eine leere Datei namens `.cameraui-keep` in den Ordner der Kamera in deinem Aufnahmeverzeichnis. camera.ui lässt den Ordner dann unangetastet: nicht mitgezählt, nicht gelöscht, auch nicht bei knappem Platz.[^keepmarker]

[^keepmarker]: Die Datei wirkt nur bei Kameras, die camera.ui nicht mehr kennt. Der Ordner einer aktiven Kamera folgt so oder so der Aufbewahrung und der Speichergrenze.

## Verbrauch im Blick behalten

<Shot src="/img/recording/storage-stats.png" alt="Speicher-Nutzungsstatistik" />

**Metrics → Speicher** zeigt die Belegung in der **Speicherübersicht** und pro Kamera in der Tabelle **Kameraspeicher**: Größe auf der Disk, gehaltene Tage Material, Aufnahme-Rate pro Tag, Modus und ihre eigenen Grenzen.

Ist die Aufnahme einer Kamera aus, löscht **Aufnahmen löschen** am Ende ihrer Zeile ihre Aufnahmen. Mit **Ereignisse auch löschen** gehen auch alle ihre Ereignisse, Favoriten eingeschlossen, sonst bleiben sie ohne Aufnahme. Was nach deiner Bestätigung aufgenommen wird, bleibt.

Eine Warnung, dass das Speichervolumen klein ist, heißt: Es bleibt wenig Platz für Aufnahmen, sie rotieren schnell heraus. Meist ist die größere Disk, die du nutzen wolltest, nicht gemountet, prüfe den Speicherpfad. Eigene Warnungen erscheinen, wenn der freie Speicher unter 8% fällt und sobald die Aufnahme aus Platzmangel pausiert.

Hatte ein eigener Speicherpfad schon Aufnahmen und fehlt seine Disk beim Start, nimmt camera.ui bis zum nächsten Start im Standardordner auf statt im leeren Mount-Punkt und markiert das auf der Timeline. Fällt die Disk während der Aufnahme weg, pausiert die Aufnahme, Admins bekommen eine Benachrichtigung, und die Aufnahme läuft von selbst weiter, sobald der Pfad wieder da ist.

## NVR deinstallieren

Beim Deinstallieren des NVR-Plugins mit **Gespeicherte Daten ebenfalls löschen** werden dessen Einstellungen, Datenbanken und Caches entfernt, dein Aufnahmeordner bleibt, geschützt durch eine Datei `.cameraui-keep` darin. Sollen die Aufnahmen mit weg, lösche zuerst diese Datei und deinstalliere dann.
