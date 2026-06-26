---
title: Speicher & Aufbewahrung
---

# Speicher & Aufbewahrung

Aufnahmen können viel Speicher belegen, daher gibt dir camera.ui Kontrolle darüber, wo sie liegen und wie lange sie behalten werden.

## Wo Aufnahmen liegen

Standardmäßig liegen Aufnahmen bei den übrigen camera.ui-Daten. Ab mehr als ein paar Kameras lege sie auf eine **dedizierte lokale Disk**, nicht auf die System-Disk und nicht auf eine Netzwerkfreigabe. Siehe [Systemanforderungen](/de/intro/requirements#speicher-fur-aufnahmen).

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
