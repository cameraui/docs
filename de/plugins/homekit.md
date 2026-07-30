---
title: HomeKit
---

# HomeKit

Das HomeKit-Plugin fügt deine Kameras und Sensoren zu **Apple Home** hinzu. Kameras streamen und zeichnen über die Home-App auf deinen Apple-Geräten auf; Sensoren erscheinen als Zubehör, das du dort sehen und steuern kannst.

<Shot src="/img/plugins/homekit-pairing.png" alt="HomeKit-Kamera-Einstellungen mit Kopplungs-QR-Code" />

## Einrichtung

1. Suche und installiere auf der **Plugins**-Seite das **HomeKit**-Plugin und aktiviere es.
2. Weise es den Kameras zu, die du in Home willst, im **Cameras**-Tab des Plugins oder über den [Plugins-Tab einer Kamera](/de/sensors/setup).
3. Öffne die **HomeKit-Einstellungen** einer Kamera. Jede Kamera wird einzeln zu Home hinzugefügt und hat ihren eigenen **QR-Code** und **PIN**.
4. Wähle in der Apple-**Home**-App **Gerät hinzufügen** und scanne den QR-Code der Kamera, oder gib ihren PIN ein. Wiederhole das für jede Kamera.

Einmal hinzugefügt, streamt die Kamera in Home und unterstützt **HomeKit Secure Video**-Aufnahmen, wenn du das in Home eingerichtet hast.

## Was wo landet

Eine Kamera kommt als ein Zubehör mit allem, was zu ihr gehört: ihrem Bewegungssensor, ihrer Klingeltaste, ihrem Spotlight, ihrer Sirene und ihrer Batterie.

Jeder andere [freigegebene Sensor](/de/sensors/) (Kontakt, Belegung, Rauchmelder, Wassersensor, Temperatur, Feuchtigkeit, Schloss, Garagentor, Schalter, Alarmanlage, eigenständige Lichter und Sirenen) liegt hinter einem einzelnen Zubehör **camera.ui Bridge**. Die Bridge erscheint, sobald der erste solche Sensor freigegeben ist; kopple sie einmal, und jeder später freigegebene Sensor kommt automatisch dazu. Ihr QR-Code und PIN stecken in den Einstellungen des Plugins.

Ob ein Sensor überhaupt rüberkommt, entscheidet der Schalter **Sensor freigeben** auf der [Sensoren-Seite](/de/sensors/setup#die-sensoren-seite).

## Schnelles Streaming

Eine Kamera in Home zu öffnen geht nahezu sofort und dauert nur wenige Millisekunden, egal ob die Kamera H.264 oder H.265 nutzt. Das setzt voraus, dass die Quelle bereitgehalten wird, aktiviere also [Hot Modus und Vorladen](/de/cameras/add-camera#quellen-optionen) an den Kameras, die du bridgest.

## Einstellungen

Die HomeKit-Einstellungen jeder Kamera umfassen:

- **QR-Code und PIN.** Die Kopplungs-Details dieser Kamera.
- **Use Hardware Acceleration.** Nutzt die GPU für HomeKit Secure Video Aufnahmen, sofern eine vorhanden ist. Standardmäßig an.
- **Adaptive Stream Source.** Standardmäßig an. Wenn du unterwegs bist und die Verbindung langsam ist, wählt camera.ui die Quelle passend zur Größe, die Home anfragt: hohe, mittlere oder niedrige Auflösung. Schalte es aus, um immer die primäre Quelle zu nutzen.
- **Port und mDNS advertiser.** Erweiterte Netzwerk-Optionen; die Standardwerte passen meist.
- **Reset Pairing.** Einen neuen Code erzeugen und die Kamera neu hinzufügen, falls die Kopplung bricht.

Die Einstellungen des Plugins selbst halten dasselbe Set für die Sensor-Bridge: ihren QR-Code, PIN, Port, mDNS advertiser und einen Button **Reset Bridge Pairing**.

## Gut zu wissen

- Jede Kamera ist ihr eigenes HomeKit-Zubehör, du fügst Kameras also einzeln hinzu. Eigenständige Sensoren teilen sich die eine Bridge und brauchen nur eine einzige Kopplung.
- Kameras mit Zwei-Wege-Audio kannst du aus der Home-App ansprechen.
