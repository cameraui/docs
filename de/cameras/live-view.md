---
title: Live-Ansicht
---

# Live-Ansicht

Öffne eine Kamera, um sie live anzusehen.

<Shot src="/img/cameras/live-view.png" alt="Live-Player mit Steuerleiste" />

## Player-Steuerung

- **Wiedergabe / Pause** des Live-Streams.
- **Lautstärke / Stumm** bei Kameras mit Audio.
- **Gegensprechen**, um über die Kamera zu sprechen (siehe unten).
- **Vollbild** und **Bild-in-Bild**, um das Video in ein schwebendes Fenster zu lösen.
- **Digitaler Zoom** per Scrollen oder Pinch, bis 5×, mit Minimap. Im Zoom ziehst du zum Verschieben.
- **Qualität** wechselt die Quellen-Auflösung (**Hohe**, **Mittlere** oder **Niedrige Auflösung**).
- **Kamera öffnen** öffnet die volle Kameraseite mit Aufnahmen und Timeline.

Beim Durchsehen von Aufnahmen bietet der Player außerdem Zurückspulen, Vorspulen und Wiedergabegeschwindigkeit. Siehe [Timeline & Wiedergabe](/de/recording/timeline-playback).

## Gegensprechen

Die **Gegensprechen**-Schaltfläche sendet Audio vom Mikrofon deines Geräts an den Lautsprecher der Kamera, sodass du durch eine Türklingel oder Kamera sprechen kannst. Sie ist bei Kameras mit Zwei-Wege-Audio verfügbar, und dein Browser oder die App fragt beim ersten Mal nach Mikrofon-Zugriff.

## Streaming-Modi

camera.ui kann Live-Video auf mehrere Arten streamen. Den Standard legst du pro Kamera in ihren [Einstellungen](/de/cameras/settings) fest und kannst ihn im Player spontan umschalten:

- **Auto** wählt den besten Modus für dein Gerät und Netzwerk und ist die einfachste Wahl.
- **WebRTC** bietet die geringste Latenz.
- **MSE** ist ein breit kompatibler Fallback.

## Aktivitätsmodus: Immer An und Standby

Jede Kamera hat einen **Aktivitätsmodus**, der steuert, wann ihr Stream läuft, und Reaktionsfreude gegen Ressourcenverbrauch abwägt:

- **Immer An** hält den Stream jederzeit live, für sofortige Ansicht.
- **Standby** pausiert den Stream nach kurzer Inaktivität und setzt ihn fort, wenn du die Kamera öffnest. Eine pausierte Kamera zeigt „Stream paused to conserve resources".
- **Aktivität** lässt den Stream laufen, während Aktivität herrscht, und ruhen, wenn nicht.

## Shortcuts

**Shortcuts** sind Bedienelemente, die du aufs Video legst, um zu einer anderen Kamera zu springen oder einen Sensor zu bedienen. Aktiviere **Shortcuts bearbeiten** im Player, um sie hinzuzufügen. Siehe [Shortcuts](/de/cameras/shortcuts) für das vollständige Feature.

## Weitere Optionen

Das Optionen-Menü (die Punkte) bietet schnellen Zugriff auf **Erkennungen**, **Zonen**, **Heatmap** und **KI-Beschreibungen** einer Kamera, plus **Export**. Eine **PTZ**-Schaltfläche erscheint bei Kameras, die Schwenken, Neigen und Zoomen unterstützen. Siehe [PTZ & Autotrack](/de/sensors/ptz) und [Erkennung & KI](/de/detection/).

## Die Kameraseite

**Kamera öffnen** (oder eine Kamera aus der Liste wählen) öffnet ihre volle Seite: den Live-Player, einen **Aufnahmen**-Tab, eine Liste zum Wechseln zwischen **Kameras**, **Shares** für Admins und ein **Zeitleiste**-Panel zum Durchspringen des Materials. Das **Settings**-Zahnrad (Admins) öffnet den [Kamera-Einstellungen](/de/cameras/settings)-Drawer, in dem Quellen, Zonen, PTZ, Erkennung und mehr einer Kamera leben.

Um mehrere Kameras gleichzeitig anzusehen, nutze [Camview](/de/cameras/camview).
