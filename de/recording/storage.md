---
title: Speicher & Aufbewahrung
---

# Speicher & Aufbewahrung

Aufnahmen können viel Speicher belegen, daher gibt dir camera.ui Kontrolle darüber, wo sie liegen und wie lange sie behalten werden.

## Wo Aufnahmen liegen

Standardmäßig liegen Aufnahmen bei den übrigen camera.ui-Daten. Ab mehr als ein paar Kameras lege sie auf eine **dedizierte lokale Disk**, getrennt von der System-Disk. Siehe [Systemanforderungen](/de/intro/requirements#speicher-fur-aufnahmen).

Eine an die Maschine angeschlossene Disk ist in Ordnung, ebenso ein Speicherpfad, der ein Symlink darauf ist. Eine **Netzwerkfreigabe (NAS, SMB, NFS) nicht**, und den Grund lohnt es zu kennen: In dem Ordner liegt mehr als Video. Erkennungs-Ereignisse, die Timeline-Markierungen und der Suchindex liegen als Datenbanken neben dem Material, damit sie mitwandern, wenn du die Disk umziehst. Diese Datenbanken brauchen Dateisperren, die Netzwerk-Dateisysteme nicht zuverlässig bereitstellen. Kaputt geht dort also die Ereignis-Datenbank, nicht ein Videobild. Liegt dein Speicher auf einem NAS, lass camera.ui stattdessen auf dem NAS laufen und nimm dort lokal auf.

## Aufnahmen auf eine andere Platte umziehen

Den Speicherpfad zu ändern nimmt deine Aufnahmen nicht mit. camera.ui fängt am neuen Ort bei null an, und der alte Ordner behält Material und Ereignisse dort, wo sie sind. Zieh die Daten selbst um:

1. Stoppe den Server.
2. Verschiebe den kompletten Speicherordner auf die neue Platte, einschließlich der Ordner `events` und `clip` neben dem Material. Darin liegen deine Ereignisse, die Marker der Zeitleiste und der Suchindex, und sie gehören zu genau diesem Material.
3. Starte den Server und trag den neuen Pfad unter **Einstellungen → Aufnahmen** ein.

Nichts darin speichert einen absoluten Pfad, Zeitleiste, Ereignisse und Suche funktionieren am neuen Ort also ohne Neuaufbau. Lässt du `events` und `clip` zurück, kommt das Material ohne sie an, und aus den Videodateien lassen sie sich nicht wiederherstellen. Hinterlegte Gesichter sind so oder so nicht betroffen, sie liegen außerhalb des Aufnahmeordners.

## Grobe Dimensionierung

Durchgehende Aufnahme schreibt den aufgezeichneten Stream auf die Disk, die Größe richtet sich also nach dessen Bitrate. Als Faustregel:

**GB pro Tag, pro Kamera ≈ Bitrate in Mbit/s × 10,8**

| Stream | Bitrate | Durchgehend, pro Tag | Pro Kamera, 7 Tage |
|---|---|---|---|
| 1080p H.264 | 4 Mbit/s | ~43 GB | ~300 GB |
| 4K H.264 | 8 Mbit/s | ~86 GB | ~600 GB |
| H.265 (HEVC) | etwa halbe Bitrate | grob die Hälfte davon | grob die Hälfte davon |

Ereignis-Aufnahme schreibt nur rund um Bewegung oder Erkennungen und braucht daher nur einen Bruchteil davon, je nachdem wie belebt die Szene ist. Im Zweifel mit einem Aufbewahrungs-Fenster oder einer Speichergrenze starten und die Pro-Kamera-Rate (unten) eine Woche beobachten.

## Wie lange sie behalten werden

Zwei Grenzen entscheiden, wann altes Material entfernt wird:

- **Retention (Days).** Material bis zu so vielen Tagen behalten (0 bedeutet keine Tagesgrenze).
- **Max Storage (GB).** Den gesamten Platz begrenzen, den Aufnahmen nutzen dürfen (0 bedeutet keine Grenze).

Wenn eine Grenze erreicht ist, hängt das Weitere vom **Retention Mode** ab:

- **Overwrite** (Standard). Die ältesten Aufnahmen werden gelöscht, um Platz zu schaffen, sodass die Aufnahme nie stoppt.
- **Strict.** Nichts wird über das Aufbewahrungs-Fenster hinaus gelöscht. Läuft die Disk voll, pausiert die Aufnahme, bis du Platz freigibst.

## Aufnahmen entfernter Kameras

Wenn du eine Kamera löschst oder die Zuweisung des NVR aufhebst, bleiben ihre Aufnahmen auf der Disk. Sie zählen weiterhin zu **Max Storage**, und Aufbewahrung und Bereinigung entfernen sie weiterhin, wenn der Platz knapp wird, wie bei einer aktiven Kamera.

Wenn du das Material stattdessen behalten willst, lege eine leere Datei namens `.cameraui-keep` in den Ordner der Kamera in deinem Aufnahmeverzeichnis. camera.ui lässt den Ordner dann unangetastet: nicht mitgezählt, nicht gelöscht, auch nicht bei knappem Platz.[^keepmarker]

[^keepmarker]: Die Datei wirkt nur bei Kameras, die camera.ui nicht mehr kennt. Der Ordner einer aktiven Kamera folgt so oder so der Aufbewahrung und der Speichergrenze.

## Verbrauch im Blick behalten

<Shot src="/img/recording/storage-stats.png" alt="Speicher-Nutzungsstatistik" />

Öffne **Metrics → Speicher**. Die **Speicherübersicht** zeigt, wie viel Disk belegt und frei ist, sowie den Anteil des NVR daran. Die Tabelle **Kameraspeicher** schlüsselt es pro Kamera auf: Größe auf der Disk, gehaltene Tage Material, die Aufnahme-Rate pro Tag und den Modus. Das hilft, den Speicher zu dimensionieren und eine Kamera zu erkennen, die mehr aufnimmt als erwartet.

Wenn die Seite warnt, dass das Speichervolumen klein ist, wird der größte Teil des Volumes als Reserve freigehalten, Aufnahmen rotieren also schnell heraus. Meist ist dann die größere Disk, die du nutzen wolltest, nicht gemountet, prüfe also den Speicherpfad. Eine eigene Warnung erscheint, wenn der freie Speicher unter 8% fällt. Unter 5% pausiert die Aufnahme.

## NVR deinstallieren

Beim Deinstallieren des NVR-Plugins mit **Gespeicherte Daten ebenfalls löschen** werden dessen Einstellungen, Datenbanken und Caches entfernt, dein Aufnahmeordner bleibt aber liegen. Er ist durch eine Datei `.cameraui-keep` darin geschützt. Sollen die Aufnahmen mit dem Plugin verschwinden, lösche zuerst diese Datei und deinstalliere dann.
