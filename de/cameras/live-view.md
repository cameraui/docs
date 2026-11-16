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
- **Vollbild** und **Bild-in-Bild**, um das Video in ein schwebendes Fenster zu lösen. Im Vollbild schalten die Punkte in der Steuerleiste **Shortcuts**, die **Zeitleiste** über dem Video und die **Bild-in-Bild Quelle**. Auf einem hochkant gehaltenen Handy sitzt die Zeitleiste am unteren Bildschirmrand, unter dem Bild.
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

- **Auto** startet WebRTC und MSE gleichzeitig und behält, was zuerst zustande kommt, ein Netz, das WebRTC blockiert, bekommt also trotzdem ein Bild. Nach dem Wechsel auf MSE versucht es WebRTC ab und zu im Hintergrund erneut und übernimmt, sobald es verbindet. Kann der Codec der Kamera nicht über WebRTC laufen, geht es direkt auf MSE.
- **WebRTC** bietet die geringste Latenz.
- **MSE** ist ein breit kompatibler Fallback.
- **webrtc/tcp** überträgt WebRTC nur über TCP. Wähle das in den Kamera-Einstellungen, wenn Netzwerke die Ports blockieren, die WebRTC sonst nutzt. Über den Button im Player ist es nicht erreichbar.

Die Einstellung gilt für die Kameraansicht. Die kleinen Player an anderen Stellen, der Zonen-Editor, Shortcut-Vorschauen, das Livebild im Grundriss und der Ereignis-Dialog laufen immer auf Auto.

Eine **MJPEG**-Kamera läuft in jedem Modus als MJPEG, im Browser, in den Mobil-Apps und in der Apple-TV-App. Das Bild kommt als einzelne JPEG-Frames, der Ton, sofern die Kamera welchen hat, über MSE. Die [Aufnahme](/de/recording/) nimmt MJPEG so auf, wie es kommt.

## Aktivitätsmodus: Immer An und Standby

Jede Kamera hat einen **Aktivitätsmodus**, der steuert, wann ihr Stream läuft:

- **Immer An** hält den Stream live, solange der Player im Bild ist.
- **Standby** lässt den Stream aus, bis du aufs Video klickst. Er stoppt wenige Sekunden nach deinem letzten Klick oder nach dem ersten Bild wieder, je nachdem, was später kommt. Solange Gegensprechen, PTZ-Steuerung, Vollbild oder Bild-in-Bild aktiv sind oder ein Menü des Players offen ist, bleibt er an.
- **Aktivität** lässt den Stream laufen, während Aktivität herrscht, und ruhen, wenn nicht.

Die Einstellung gilt für die Kameraansicht und für die [Home-Assistant-Kamerakarte](/de/home-assistant/card#camera-ui-camera) im Modus `live`. [Camview](/de/cameras/camview) und die Home-Assistant-[Ansichtskarte](/de/home-assistant/card#camera-ui-view) folgen ihr ebenfalls, solange dort kein Modus für die ganze Ansicht gesetzt ist. Die kleinen Player an anderen Stellen bleiben immer an: Zonen-Editor, Shortcut-Vorschauen, Livebild im Grundriss und Ereignis-Dialog.

In jedem Modus stoppt ein Player, den du aus dem sichtbaren Bereich scrollst, nach etwa 10 Sekunden und zeigt sein letztes Bild, bis du zurückscrollst. Dann startet er wieder. Gegensprechen, PTZ-Steuerung, Vollbild, Bild-in-Bild und ein offenes Menü des Players halten ihn am Laufen, wie bei Standby.

## Shortcuts

**Shortcuts** sind Bedienelemente, die du aufs Video legst, um zu einer anderen Kamera zu springen oder einen Sensor zu bedienen. Aktiviere **Shortcuts bearbeiten** im Player, um sie hinzuzufügen. Siehe [Shortcuts](/de/cameras/shortcuts).

## Die Werkzeugleiste

Die Leiste unter dem Player enthält **Shortcuts**, **Assistenten fragen**, **Auf anderem Bildschirm abspielen** und für Admins **Einstellungen**, daneben zwei Menüs. **Ebenen** schaltet um, was über dem Bild liegt: **Erkennungen** bei Kameras mit Bewegungs- oder Objekterkennung, **Zonen**, **Heatmap** und **KI-Beschreibungen**, wenn das NVR-Plugin installiert ist. Unter den Punkten liegen **Snapshot aufnehmen** und für Admins **Kamera teilen** und während der Wiedergabe **Erkennungsverlauf anzeigen**. **Assistenten fragen** erscheint, sobald der [Assistent](/de/assistant/) eingerichtet ist, auf dem Handy auf der Zeitleiste neben dem Mikrofon. Siehe [Erkennung & KI](/de/detection/).

Kameras mit Schwenken, Neigen und Zoomen bekommen oben rechts im Player eine eigene Leiste, mit der Home-Position, den auf der Kamera gespeicherten Positionen und der **PTZ**-Schaltfläche für die Steuerung. Siehe [PTZ & Autotrack](/de/sensors/ptz).

## Symbole im Player

Symbole oben rechts im Player zeigen, wie es um den Stream steht. Fahr mit der Maus darüber oder tippe darauf, um ihren Text zu sehen. Solange die PTZ-Steuerung offen ist, sind sie ausgeblendet.

- **Roter Kreis.** Die Live-Ansicht ist nicht verfügbar, der Text nennt den Grund. Der Spinner zeigt, dass camera.ui es weiter versucht.
- **Rotes Info-Symbol.** Der Player zeigt eine andere Qualität als gewählt, etwa weil dieses Gerät kein H.265 abspielen kann.
- **Wolke.** Die Live-Ansicht läuft über das [Relay](/de/remote/#webrtc). Nur für Admins.
- **Weißes Info-Symbol.** Es kam keine direkte Verbindung zustande, die Live-Ansicht hat deshalb mehr Verzögerung. Das Relay einzuschalten kann helfen. Nur für Admins, solange das Relay aus ist.

## Die Kameraseite

**Kamera öffnen** (oder eine Kamera aus der Liste wählen) öffnet ihre volle Seite: den Live-Player, einen **Aufnahmen**-Tab, eine Liste zum Wechseln zwischen **Kameras**, **Freigaben** für Admins und ein **Zeitleiste**-Panel zum Durchspringen des Materials. Der Player nimmt höchstens die halbe Höhe, ein breites Bild weniger, die Tabs bekommen den Rest. Mit dem Griff zwischen Player und Tabs verteilst du die Höhe zwischen beiden, der Browser merkt sich die Aufteilung, ein Doppelklick auf den Griff setzt sie zurück. Das **Einstellungen**-Zahnrad (Admins) öffnet den [Kamera-Einstellungen](/de/cameras/settings)-Drawer, in dem Quellen, Zonen, PTZ, Erkennung und mehr einer Kamera leben.

Der **Aufnahmen**-Tab listet die Ereignisse der Kamera wie die Seite [Aufnahmen](/de/recording/browsing): Objekte, Sensoren und Alarmgeräusche, bei einer Kamera ohne Objekterkennung auch Bewegung. Der Filter-Button unten rechts grenzt die Liste ein, nach Text, Tag, Konfidenz, Label, den Sensoren und Geräuschen der Kamera sowie Farbe und Typ von Fahrzeugen. Ist ein Label, Sensor oder Geräusch gewählt, zeigt die Liste genau das, etwa **Bewegung**. Jede Kamera behält ihre Auswahl an deinem Konto, Text und Tag werden nicht gespeichert. Der Button darüber schaltet den Zonenfilter ein: Markiere Bereiche im Kamerabild, die Zeitleiste filtert nach derselben Zone.

Um mehrere Kameras gleichzeitig anzusehen, nutze [Camview](/de/cameras/camview).
