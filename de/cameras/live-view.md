---
title: Live-Ansicht
---

# Live-Ansicht

Öffne eine Kamera, um sie live anzusehen.

<Shot src="/img/cameras/live-view.png" alt="Live-Player mit Steuerleiste" />

## Player-Steuerung

- **Wiedergabe / Pause** des Live-Streams.
- **Stumm / Stummschalten aufheben** bei Kameras mit Audio.
- **Gegensprechen**, um über die Kamera zu sprechen (siehe unten).
- **Vollbild** und **Bild-in-Bild**, um das Video in ein schwebendes Fenster zu lösen. Im Vollbild schalten die Punkte in der Steuerleiste **Shortcuts**, die **Zeitleiste** über dem Video, die **Bild-in-Bild Quelle** und **Bild-in-Bild**.
- **Digitaler Zoom** per Scrollen oder Pinch, bis 5×, mit Minimap. Im Zoom ziehst du zum Verschieben. Der Ausschnitt bleibt beim Scrubben auf der Zeitleiste erhalten, bis du ins Bild doppelklickst oder wieder herauszoomst.
- **Qualität** wechselt die Quellen-Auflösung (**Hohe**, **Mittlere** oder **Niedrige Auflösung**).
- **Kamera öffnen** öffnet die volle Kameraseite mit Aufnahmen und Zeitleiste.

Beim Durchsehen von Aufnahmen bietet der Player außerdem Zurückspulen, Vorspulen und Wiedergabegeschwindigkeit. Siehe [Timeline & Wiedergabe](/de/recording/timeline-playback).

## Erkennungsboxen

Ist **Erkennungen** an, zeichnet der Player um alles, was die Kamera gerade sieht, eine Box mit Typ, Konfidenz und Track-Nummer. Eine Kamera, die eine Erkennung ohne Position meldet, bekommt keine Box.

Ein Objekt, das sich niedergelassen hat, ein geparktes Auto in der Einfahrt oder eine abgestellte Mülltonne, behält seine Box, bekommt aber ein blasses Label und einen Timer, der zeigt, wie lange es dort schon steht. Ein niedergelassenes Objekt löst keine neuen Ereignisse und keine Benachrichtigungen aus, siehe [unbewegte Objekte](/de/detection/events-and-detections#unbewegte-objekte). Bewegt es sich wieder, wird die Box wieder normal. Auf einer kleinen Karte fallen die Labels weg und nur die Box bleibt.

## Gegensprechen

Die **Gegensprechanlage**-Schaltfläche sendet dein Mikrofon an den Lautsprecher der Kamera, bei Kameras mit Zwei-Wege-Audio.

## Zweiter Stream als Overlay

Wenn eine Quelle in den [Kamera-Einstellungen](/de/cameras/settings) (Tab „Quellen“) eine **Bild-in-Bild Quelle** hat, bekommt der Player den Button **PiP ein-/ausblenden**. Der zweite Stream wird dann klein über dem Video angezeigt. Ein Klick auf das Overlay tauscht die beiden Streams.

Die Bild-in-Bild Quelle kann auch ein Stream einer anderen Kamera sein, die Liste gruppiert sie nach Kamera. Das passt für ein zweites Objektiv desselben Geräts, etwa das Tele-Objektiv einer Dual-Lens-Kamera, das als eigene Kamera angelegt ist. Ein Klick auf dieses Overlay öffnet die andere Kamera mit ihrer Zeitleiste und ihren Aufnahmen, beim Durchsehen von Aufnahmen am selben Zeitpunkt, und die Kamera, von der du kommst, wird ihr Overlay.

## Streaming-Modi

Den Streaming-Modus legst du pro Kamera in ihren [Einstellungen](/de/cameras/settings) fest, eine neue Kamera startet auf **Auto**. Der Player hat außerdem einen Button, mit dem du beim Zuschauen zwischen WebRTC und MSE wechselst.

- **Auto** startet WebRTC und MSE gleichzeitig und behält, was zuerst zustande kommt, ein Netz, das WebRTC blockiert, bekommt also trotzdem ein Bild. Kann der Codec der Kamera nicht über WebRTC laufen, geht es direkt auf MSE.
- **WebRTC** bietet die geringste Latenz.
- **MSE** ist ein breit kompatibler Fallback.
- **webrtc/tcp** überträgt WebRTC nur über TCP. Wähle das in den Kamera-Einstellungen, wenn Netzwerke die Ports blockieren, die WebRTC sonst nutzt. Über den Button im Player ist es nicht erreichbar.

Die Einstellung gilt für die Kameraansicht. Die kleinen Player an anderen Stellen, der Zonen-Editor, Shortcut-Vorschauen, das Livebild im Grundriss und der Ereignis-Dialog laufen immer auf Auto.

## Aktivitätsmodus: Immer An und Standby

Jede Kamera hat einen **Aktivitätsmodus**, der steuert, wann ihr Stream läuft:

- **Immer An** hält den Stream jederzeit live.
- **Standby** startet den Stream, wenn du die Kamera öffnest, und stoppt ihn wenige Sekunden später wieder. Ein Klick aufs Video setzt ihn fort.
- **Aktivität** lässt den Stream laufen, während Aktivität herrscht, und ruhen, wenn nicht.

## Shortcuts

**Shortcuts** sind Bedienelemente, die du aufs Video legst, um zu einer anderen Kamera zu springen oder einen Sensor zu bedienen. Aktiviere **Shortcuts bearbeiten** im Player, um sie hinzuzufügen. Siehe [Shortcuts](/de/cameras/shortcuts).

## Weitere Optionen

Das Optionen-Menü (die Punkte) schaltet **Zonen**, **Heatmap** und **Shortcuts bearbeiten** um, dazu **Erkennungen** bei Kameras mit Bewegungs- oder Objekterkennung. **KI-Beschreibungen** erscheint, wenn das NVR-Plugin installiert ist. **Export** erscheint, sobald die Zeitleiste offen ist, und sichert den Bereich, den du dort zuschneidest. Siehe [Erkennung & KI](/de/detection/).

Kameras mit Schwenken, Neigen und Zoomen bekommen oben rechts im Player eine eigene Leiste, mit der Home-Position, den auf der Kamera gespeicherten Positionen und der **PTZ**-Schaltfläche für die Steuerung. Siehe [PTZ & Autotrack](/de/sensors/ptz).

## Die Kameraseite

**Kamera öffnen** (oder eine Kamera aus der Liste wählen) öffnet ihre volle Seite: den Live-Player, einen **Aufnahmen**-Tab, eine Liste zum Wechseln zwischen **Kameras**, **Freigaben** für Admins und ein **Zeitleiste**-Panel zum Durchspringen des Materials. Das **Einstellungen**-Zahnrad (Admins) öffnet den [Kamera-Einstellungen](/de/cameras/settings)-Drawer, in dem Quellen, Zonen, PTZ, Erkennung und mehr einer Kamera leben.

Um mehrere Kameras gleichzeitig anzusehen, nutze [Camview](/de/cameras/camview).
