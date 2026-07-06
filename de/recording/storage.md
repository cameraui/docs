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

- **Retention (Tage).** Material bis zu so vielen Tagen behalten (0 bedeutet keine Tagesgrenze).
- **Max Storage (GB).** Den gesamten Platz begrenzen, den Aufnahmen nutzen dürfen (0 bedeutet keine Grenze).

Wenn eine Grenze erreicht ist, hängt das Weitere vom **Retention-Modus** ab:

- **Overwrite** (Standard). Die ältesten Aufnahmen werden gelöscht, um Platz zu schaffen, sodass die Aufnahme nie stoppt.
- **Strict.** Nichts wird über das Aufbewahrungs-Fenster hinaus gelöscht. Läuft die Disk voll, pausiert die Aufnahme, bis du Platz freigibst.

## Verbrauch im Blick behalten

![Speicher-Nutzungsstatistik](/img/recording/storage-stats.png)

camera.ui zeigt, wie viel Platz belegt und frei ist, sowie eine Aufschlüsselung pro Kamera, inklusive der Aufnahme-Rate jeder Kamera (Megabyte pro Stunde) und wie viele Tage Material sie hält. Das hilft, den Speicher zu dimensionieren und eine Kamera zu erkennen, die mehr aufnimmt als erwartet.
