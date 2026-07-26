---
title: Audio-Erkennung
---

# Audio-Erkennung

Audio-Erkennung hört auf den Ton einer Kamera nach bestimmten Geräuschen, etwa Glasbruch, einem Alarm oder Hundebellen. Sie läuft neben der Video-Erkennung und kann allein Ereignisse und Benachrichtigungen auslösen. Die Kamera muss dafür einen Audio-Stream liefern.

## Einrichtung

Aktiviere das Audio-Plugin für eine Kamera unter [Einstellungen → Plugins](/de/cameras/settings) (siehe [Sensoren einrichten](/de/sensors/setup)). In seinen Einstellungen:

- **Listen Labels.** Wähle, welche Geräusche erkannt werden.
- **Konfidenzschwelle.** Wie sicher es sein muss, bevor es ein Geräusch meldet (0,1 bis 1).

Zu den erkennbaren Geräuschen gehören Glasbruch, Schreien, Schüsse, Alarme (Rauch, Auto, Sirene), eine Türklingel, Klopfen, Hundebellen, eine Katze, Babyweinen und Sprache.

## Lautstärke-Gate und Timeout

Drei weitere Einstellungen liegen an der Kamera selbst, unter [Einstellungen → Detection](/de/cameras/settings):

- **Min. Lautstärke (dBFS).** Audio-Frames unterhalb dieses Pegels werden übersprungen, sodass leise Hintergrundgeräusche nie analysiert werden. Reicht von -100 (Stille) bis 0 (Maximum), Standard -40.
- **Audio-Konfidenz.** Erkannte Geräusche, bei denen der Detektor unsicherer ist als dieser Wert, zählen nicht als Ereignis und lösen keine Automationen aus (0 bis 1, Standard 0,7). Sie liegt über dem eigenen Schwellwert des Plugins, sodass das Plugin empfindlich bleiben kann und trotzdem nur sichere Geräusche auslösen. Erhöhe sie bei falschen Glasbruch- oder Schuss-Alarmen.
- **Audio-Timeout.** Wie lange ein Audio-Ereignis nach dem letzten Trigger „aktiv" bleibt (mindestens 10 Sekunden).
