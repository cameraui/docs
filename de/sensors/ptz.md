---
title: PTZ & Autotrack
---

# PTZ & Autotrack

PTZ-Kameras (Schwenken, Neigen, Zoomen) lassen sich in camera.ui bewegen, und mit **Autotrack** folgen sie erkannten Objekten von selbst.

PTZ ist ein [Sensor](/de/sensors/), den ein Plugin einer Kamera bereitstellt. Das [ONVIF-Plugin](/de/plugins/) kann zum Beispiel PTZ für eine ONVIF-Kamera bereitstellen. Du aktivierst es für die Kamera in ihren [Einstellungen](/de/cameras/settings) unter dem **Plugins**-Tab. Die Kamera zeigt dann nur die Bewegungen, die das Plugin meldet (Schwenken, Neigen, Zoomen, Presets und Home).

## Eine PTZ-Kamera steuern

Öffne eine PTZ-Kamera und wähle im Player die **PTZ**-Schaltfläche, um die Steuerung einzublenden:

- **Schwenken und Neigen.** Mit dem Joystick auf dem Bildschirm.
- **Zoomen.** Die Kamera hinein- und herauszoomen.
- **Presets.** Zu einer gespeicherten Position springen, falls deine Kamera Presets unterstützt.
- **Home.** Mit **Zurück zur Startposition** zur Home-Position zurückkehren.

<Shot src="/img/sensors/ptz-joystick.png" alt="PTZ-Joystick-Steuerung" />

## Autotrack

Autotrack lässt eine PTZ-Kamera **erkannten Objekten automatisch folgen**, über Schwenken und Neigen. Da sie Erkennungen folgt, braucht sie eingerichtete [Objekterkennung](/de/detection/) auf der Kamera.

Konfiguriere es in den [Einstellungen](/de/cameras/settings) der Kamera unter **Autotrack**:

- **Autotrack aktivieren.** Verfolgung einschalten.
- **Ziel-Labels.** Welchen Objekttypen die Kamera folgen soll, etwa Personen oder Fahrzeuge.
- **Minimale Konfidenz.** Nur Erkennungen über diesem Konfidenz-Wert verfolgen.
- **Totzone.** Ein zentraler Bereich, in dem sich ein Ziel bewegen kann, ohne dass die Kamera nachregelt, was ständige kleine Bewegungen vermeidet.
- **Verfolgungsgeschwindigkeit.** Wie energisch die Kamera nachzieht, um das Ziel zu zentrieren. Höher ist schneller, niedriger ist sanfter.
- **Bewegungsvorhersage.** Zielt einem bewegten Objekt um so viele Erkennungs-Frames voraus, damit die Kamera mithält statt hinterherzuhängen. Auf 0 gesetzt schaltet die Vorhersage ab.
- **Schwenkraten-Kalibrierung.** Kalibriert, wie weit ein Bewegungsschritt bei deiner Kamera schwenkt. Kleiner, wenn die Kamera vor dem Ziel stoppt, größer, wenn sie überschießt.
- **Zur Home-Position zurückkehren.** Die Kamera zur Home-Position zurückfahren, wenn länger kein Ziel erkannt wird.
- **Wartezeit vor Rückkehr.** Wie lange ohne Ziel gewartet wird, bevor die Kamera zurückkehrt.

Wenn du die Kamera selbst bewegst, per Joystick oder mit der App deiner Kamera, pausiert Autotrack für 45 Sekunden und kommt dir nicht in die Quere. Die Zeit beginnt, sobald du aufhörst zu bewegen.

<Shot src="/img/sensors/ptz-autotrack.png" alt="PTZ-Autotrack-Einstellungen" />
