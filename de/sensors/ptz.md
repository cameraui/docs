---
title: PTZ & Autotrack
---

# PTZ & Autotrack

PTZ-Kameras (Schwenken, Neigen, Zoomen) lassen sich in camera.ui bewegen, und mit **Autotrack** folgen sie erkannten Objekten von selbst.

PTZ ist ein [Sensor](/de/sensors/), den ein Plugin einer Kamera bereitstellt. Das [ONVIF-Plugin](/de/plugins/) kann zum Beispiel PTZ für eine ONVIF-Kamera bereitstellen. Du aktivierst es für die Kamera in ihren [Einstellungen](/de/cameras/settings) unter dem **Plugins**-Tab. Die Kamera zeigt dann nur die Bewegungen, die das Plugin meldet (Schwenken, Neigen, Zoomen, Presets und Home).

## Eine PTZ-Kamera steuern

Fahre mit der Maus über den Player einer PTZ-Kamera, dann erscheint oben rechts eine kleine Leiste neben den übrigen Player-Steuerungen:

- **Zurück zur Startposition.** Schickt die Kamera zurück auf ihre Home-Position. Erscheint, wenn die Kamera eine hat.
- **Positionen.** Öffnet die Liste der auf der Kamera gespeicherten Positionen und springt zu einer. Erscheint, wenn die Kamera mindestens eine meldet. camera.ui liest die Positionen von der Kamera, anlegen oder löschen kann es sie nicht.
- **PTZ.** Blendet die Steuerung ein: den Zoom-Regler links, den Schwenk- und Neige-Joystick rechts. Der Button bleibt hervorgehoben, solange sie offen ist.

Die Leiste ist für Admins, braucht einen mindestens 350 Pixel breiten Player und verschwindet, solange die Zeitleiste oder eine Aufnahme offen ist.

<Shot src="/img/sensors/ptz-joystick.png" alt="PTZ-Joystick-Steuerung" />

## Autotrack

Autotrack lässt eine PTZ-Kamera **erkannten Objekten automatisch folgen**, über Schwenken und Neigen. Da sie Erkennungen folgt, braucht sie eingerichtete [Objekterkennung](/de/detection/) auf der Kamera.

Konfiguriere es in den [Einstellungen](/de/cameras/settings) der Kamera unter **Autotrack**:

- **Autotrack aktivieren.** Verfolgung einschalten.
- **Ziel-Labels.** Welchen Objekttypen die Kamera folgen soll, etwa Personen oder Fahrzeuge.
- **Minimale Konfidenz.** Nur Erkennungen über diesem Konfidenz-Wert verfolgen.
- **Totzone.** Ein zentraler Bereich, in dem sich ein Ziel bewegen kann, ohne dass die Kamera nachregelt, was ständige kleine Bewegungen vermeidet.
- **Verfolgungsgeschwindigkeit.** Wie energisch die Kamera nachzieht, um das Ziel zu zentrieren. Höher ist schneller, niedriger ist sanfter.
- **Bewegungsvorhersage.** Zielt einem bewegten Objekt um so viele Millisekunden voraus, passend zu der Zeit, die die Kamera zum Fahren und Einschwingen braucht. Kleiner, wenn die Kamera überschießt, größer bei schnellen Zielen. Die Vorhersage klingt aus, wenn das Ziel langsamer wird. Auf 0 gesetzt schaltet sie ab.
- **Schwenkraten-Kalibrierung.** Kalibriert, wie weit ein Bewegungsschritt bei deiner Kamera schwenkt. Kleiner, wenn die Kamera vor dem Ziel stoppt, größer, wenn sie überschießt.
- **Zur Home-Position zurückkehren.** Die Kamera zur Home-Position zurückfahren, wenn länger kein Ziel erkannt wird.
- **Wartezeit vor Rückkehr.** Wie lange ohne Ziel gewartet wird, bevor die Kamera zurückkehrt.
- **Kleinstes Objekt.** Objekte ignorieren, die weniger als diesen Anteil der Bildhöhe einnehmen. Sie sind meist zu weit weg, als dass sich eine Fahrt lohnt. 0 schaltet die Grenze ab.
- **Größtes Objekt.** Nicht mehr folgen, sobald ein Objekt mehr als diesen Anteil der Bildhöhe füllt. So nah sagt das Bild wenig, die Kamera hält ihre Position, bis das Objekt wieder zurückweicht. 0 schaltet die Grenze ab.
- **Nur in diesen Stunden.** Autotrack zwischen zwei Uhrzeiten laufen lassen, etwa nachts. Die Zeiten gelten in der Zeitzone des Browsers, in dem du sie gesetzt hast, und ein Fenster, das vor seinem Start endet, läuft über Mitternacht. Außerhalb bleibt die Kamera, wo sie ist, und fährt heim, wenn **Zur Home-Position zurückkehren** an ist. Aus heißt den ganzen Tag.

Die Größengrenzen greifen, wenn Autotrack ein Ziel auswählt. Ein Ziel, dem es bereits folgt, bleibt verfolgt, wenn es kleiner wird, und ein Ziel, das die obere Grenze überschreitet, behält seinen Platz, während die Kamera wartet.

Wenn du die Kamera selbst bewegst, per Joystick oder mit der App deiner Kamera, pausiert Autotrack für 45 Sekunden und kommt dir nicht in die Quere. Die Zeit beginnt, sobald du aufhörst zu bewegen.

<Shot src="/img/sensors/ptz-autotrack.png" alt="PTZ-Autotrack-Einstellungen" />
