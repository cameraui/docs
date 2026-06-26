---
title: Audio-Erkennung
---

# Audio-Erkennung

Audio-Erkennung hört auf den Ton einer Kamera nach bestimmten Geräuschen, etwa Glasbruch, einem Alarm oder Hundebellen. Sie läuft neben der Video-Erkennung und kann allein Ereignisse und Benachrichtigungen auslösen. Die Kamera muss dafür einen Audio-Stream liefern.

## Einrichtung

Aktiviere das Audio-Plugin für eine Kamera unter [Einstellungen → Plugins](/de/cameras/settings) (siehe [Sensoren einrichten](/de/sensors/setup)). In seinen Einstellungen:

- **Listen Labels.** Wähle, welche Geräusche erkannt werden.
- **Konfidenzschwelle.** Wie sicher es sein muss, bevor es ein Geräusch meldet (0 bis 1).

Zu den erkennbaren Geräuschen gehören Glasbruch, Schreien, Schüsse, Alarme (Rauch, Auto, Sirene), eine Türklingel, Klopfen, Hundebellen, Babyweinen und Sprache.

## Lautstärke-Gate

Eine Kamera hat zusätzlich eine **Mindest-Lautstärke** unter [Einstellungen → Detection](/de/cameras/settings), sodass leise Hintergrundgeräusche ignoriert werden. Unter diesem Pegel wird nichts analysiert.
