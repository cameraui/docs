---
title: Audio-Erkennung
---

# Audio-Erkennung

Audio-Erkennung hört auf den Ton einer Kamera nach bestimmten Geräuschen, etwa Glasbruch, einem Alarm oder Hundebellen. Sie läuft neben der Video-Erkennung und kann allein Ereignisse und Benachrichtigungen auslösen. Die Kamera muss dafür einen Audio-Stream liefern.

## Einrichtung

Aktiviere das Audio-Plugin für eine Kamera unter [Einstellungen → Plugins](/de/cameras/settings) (siehe [Sensoren einrichten](/de/sensors/setup)). Das Plugin hat keine eigenen Einstellungen: Es hört auf die Standard-Geräuschliste und nimmt seine Konfidenz von der Kamera.

Erkannt werden Glasbruch, Schreien, Schüsse, Alarme (Rauch, Auto, Sirene), eine Türklingel, Klopfen, Hundebellen, eine Katze, Babyweinen und Sprache.

## Einstellungen an der Kamera

Die Audio-Erkennung wird pro Kamera unter [Einstellungen → Erkennung](/de/cameras/settings) eingestellt:

- **Min. Lautstärke (dBFS).** Audio-Frames unterhalb dieses Pegels werden übersprungen. Reicht von -100 (Stille) bis 0 (Maximum), Standard -40.
- **Audio-Konfidenz.** Geräusche, bei denen der Detektor unsicherer ist als dieser Wert, werden verworfen (0 bis 1, Standard 0,7).
- **Audio-Timeout.** Wie lange ein Audio-Ereignis nach dem letzten Trigger „aktiv" bleibt (mindestens 10 Sekunden).

