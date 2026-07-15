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
- **Vollbild** und **Bild-in-Bild**, um das Video in ein schwebendes Fenster zu lösen.
- **Digitaler Zoom** per Scrollen oder Pinch, bis 5×, mit Minimap. Im Zoom ziehst du zum Verschieben.
- **Qualität** wechselt die Quellen-Auflösung (**Hohe**, **Mittlere** oder **Niedrige Auflösung**).
- **Kamera öffnen** öffnet die volle Kameraseite mit Aufnahmen und Zeitleiste.

Beim Durchsehen von Aufnahmen bietet der Player außerdem Zurückspulen, Vorspulen und Wiedergabegeschwindigkeit. Siehe [Timeline & Wiedergabe](/de/recording/timeline-playback).

## Gegensprechen

Die **Gegensprechanlage**-Schaltfläche sendet Audio vom Mikrofon deines Geräts an den Lautsprecher der Kamera, sodass du durch eine Türklingel oder Kamera sprechen kannst. Sie ist bei Kameras mit Zwei-Wege-Audio verfügbar, und dein Browser oder die App fragt beim ersten Mal nach Mikrofon-Zugriff.

## Zweiter Stream als Overlay

Wenn eine Quelle in den [Kamera-Einstellungen](/de/cameras/settings) (Tab „Quellen“) eine **Bild-in-Bild Quelle** hat, bekommt der Player den Button **PiP ein-/ausblenden**. Der zweite Stream wird dann klein über dem Video angezeigt. Ein Klick auf das Overlay tauscht die beiden Streams.

## Streaming-Modi

camera.ui kann Live-Video auf mehrere Arten streamen. Den Modus legst du pro Kamera in ihren [Einstellungen](/de/cameras/settings) fest. Der Player hat außerdem einen Button, mit dem du beim Zuschauen zwischen WebRTC und MSE wechselst.

- **Auto** wählt den besten Modus für dein Gerät und Netzwerk und ist die einfachste Wahl.
- **WebRTC** bietet die geringste Latenz.
- **MSE** ist ein breit kompatibler Fallback.
- **webrtc/tcp** überträgt WebRTC nur über TCP. Wähle das in den Kamera-Einstellungen, wenn Netzwerke die Ports blockieren, die WebRTC sonst nutzt. Über den Button im Player ist es nicht erreichbar.

## Aktivitätsmodus: Immer An und Standby

Jede Kamera hat einen **Aktivitätsmodus**, der steuert, wann ihr Stream läuft, und Reaktionsfreude gegen Ressourcenverbrauch abwägt:

- **Immer An** hält den Stream jederzeit live, für sofortige Ansicht.
- **Standby** startet den Stream, wenn du die Kamera öffnest, und stoppt ihn wenige Sekunden später wieder. Der Player zeigt dann „Stream pausiert, um Ressourcen zu schonen. Klicken Sie auf den Stream, um fortzufahren.“ Klick aufs Video, um weiterzuschauen.
- **Aktivität** lässt den Stream laufen, während Aktivität herrscht, und ruhen, wenn nicht.

## Shortcuts

**Shortcuts** sind Bedienelemente, die du aufs Video legst, um zu einer anderen Kamera zu springen oder einen Sensor zu bedienen. Aktiviere **Shortcuts bearbeiten** im Player, um sie hinzuzufügen. Siehe [Shortcuts](/de/cameras/shortcuts) für das vollständige Feature.

## Weitere Optionen

Das Optionen-Menü (die Punkte) schaltet **Zonen**, **Heatmap** und **Shortcuts bearbeiten** um, dazu **Erkennungen** bei Kameras mit Bewegungs- oder Objekterkennung. **KI-Beschreibungen** erscheint, wenn das NVR-Plugin installiert ist. **Export** erscheint, sobald die Zeitleiste offen ist, und sichert den Bereich, den du dort zuschneidest. Eine **PTZ**-Schaltfläche erscheint bei Kameras, die Schwenken, Neigen und Zoomen unterstützen. Siehe [PTZ & Autotrack](/de/sensors/ptz) und [Erkennung & KI](/de/detection/).

## Die Kameraseite

**Kamera öffnen** (oder eine Kamera aus der Liste wählen) öffnet ihre volle Seite: den Live-Player, einen **Aufnahmen**-Tab, eine Liste zum Wechseln zwischen **Kameras**, **Freigaben** für Admins und ein **Zeitleiste**-Panel zum Durchspringen des Materials. Das **Einstellungen**-Zahnrad (Admins) öffnet den [Kamera-Einstellungen](/de/cameras/settings)-Drawer, in dem Quellen, Zonen, PTZ, Erkennung und mehr einer Kamera leben.

Um mehrere Kameras gleichzeitig anzusehen, nutze [Camview](/de/cameras/camview).
