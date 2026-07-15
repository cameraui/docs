---
title: Speicher & Aufbewahrung
---

# Speicher & Aufbewahrung

Aufnahmen können viel Speicher belegen, daher gibt dir camera.ui Kontrolle darüber, wo sie liegen und wie lange sie behalten werden.

## Wo Aufnahmen liegen

Standardmäßig liegen Aufnahmen bei den übrigen camera.ui-Daten. Ab mehr als ein paar Kameras lege sie auf eine **dedizierte lokale Disk**, nicht auf die System-Disk und nicht auf eine Netzwerkfreigabe. Siehe [Systemanforderungen](/de/intro/requirements#speicher-fur-aufnahmen).

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

camera.ui zeigt, wie viel Platz belegt und frei ist, sowie eine Aufschlüsselung pro Kamera, inklusive der Aufnahme-Rate jeder Kamera (Megabyte pro Stunde) und wie viele Tage Material sie hält. Das hilft, den Speicher zu dimensionieren und eine Kamera zu erkennen, die mehr aufnimmt als erwartet.

Wenn die Seite warnt, dass das Speichervolumen klein ist, wird der größte Teil des Volumes als Reserve freigehalten, Aufnahmen rotieren also schnell heraus. Meist ist dann die größere Disk, die du nutzen wolltest, nicht gemountet, prüfe also den Speicherpfad. Eine eigene Warnung erscheint, wenn der freie Speicher unter 8% fällt. Unter 5% pausiert die Aufnahme.

## NVR deinstallieren

Beim Deinstallieren des NVR-Plugins mit **Gespeicherte Daten ebenfalls löschen** werden dessen Einstellungen, Datenbanken und Caches entfernt, dein Aufnahmeordner bleibt aber liegen. Er ist durch eine Datei `.cameraui-keep` darin geschützt. Sollen die Aufnahmen mit dem Plugin verschwinden, lösche zuerst diese Datei und deinstalliere dann.
