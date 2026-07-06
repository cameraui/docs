---
title: Bewegungserkennung
---

# Bewegungserkennung

Bewegung ist die erste und günstigste Stufe der [Erkennung](/de/detection/). Sie achtet auf Veränderung im Bild und weckt, wenn sie Bewegung sieht, die schwerere KI. Für sich allein kann sie auch Aufnahmen und Benachrichtigungen auslösen.

## Eine Bewegungs-Engine wählen

camera.ui bietet mehrere Bewegungs-Plugins, sodass du die CPU-Last an deine Hardware anpassen kannst. Aktiviere eine pro Kamera in den [Einstellungen](/de/cameras/settings) unter dem Plugins-Tab (siehe [Sensoren einrichten](/de/sensors/setup)):

- **Rust Motion.** Schnell und effizient; ein guter Standard für die meisten Setups.
- **OpenCV.** Mehrere Algorithmen mit feiner Justierung.
- **OpenCL.** GPU-beschleunigt, für sehr geringe CPU-Last.
- **WASM Motion.** Plattformübergreifend per WebAssembly.
- **Pam Diff.** Leichtgewichtige Pixel-Differenz.
- **SMTP.** Für Kameras, die Bewegungsalarme per E-Mail senden, statt das Video zu analysieren.

## Empfindlichkeit justieren

<Shot src="/img/detection/detection-settings.png" alt="Erkennungs-Einstellungen pro Kamera" />

Jede Engine bietet eigene Einstellungen (etwa Fläche, Schwellwert und Weichzeichnung) in ihren Plugin-Settings, mit „Zurücksetzen". Zwei Einstellungen liegen an der Kamera selbst, unter [Einstellungen → Detection](/de/cameras/settings):

- **Bewegungs-Auflösung.** Niedrig ist am schnellsten, mittel ausgewogen, hoch am genauesten.
- **Bewegungs-Timeout.** Wie lange Bewegung nach dem Stillstand „aktiv" bleibt (mindestens 10 Sekunden).

Wenn eine Kamera zu empfindlich ist (eine viel befahrene Straße, ein schwankender Baum), begrenze mit [Zonen](/de/cameras/zones-and-masks), wo Bewegung zählt.

## Die Kaskade

Wenn Bewegung auslöst, startet sie die schwereren Detektoren (Objekt, Gesicht usw.). Du kannst diese Kaskade auch von anderen Sensoren starten lassen, etwa einem Tür-Kontaktsensor, der die Objekterkennung auslöst, unter **Sensor-Trigger** in den Erkennungs-Einstellungen der Kamera.
