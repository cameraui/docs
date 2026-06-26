---
title: HomeKit
---

# HomeKit

Das HomeKit-Plugin fügt deine Kameras zu **Apple Home** hinzu, sodass du sie über die Home-App und auf deinen Apple-Geräten ansehen und Aufnahmen erhalten kannst. Es bridged jede Kamera samt der ihr zugewiesenen Sensoren, etwa Bewegung, eine Türklingel oder einen Kontaktsensor.

![HomeKit-Kamera-Einstellungen mit Kopplungs-QR-Code](/img/plugins/homekit-pairing.png)

## Einrichtung

1. Suche und installiere auf der **Plugins**-Seite das **HomeKit**-Plugin und aktiviere es.
2. Weise es den Kameras zu, die du in Home willst, im **Cameras**-Tab des Plugins oder über den [Plugins-Tab einer Kamera](/de/sensors/setup).
3. Öffne die **HomeKit-Einstellungen** einer Kamera. Jede Kamera wird einzeln zu Home hinzugefügt und hat ihren eigenen **QR-Code** und **PIN**.
4. Wähle in der Apple-**Home**-App **Gerät hinzufügen** und scanne den QR-Code der Kamera, oder gib ihren PIN ein. Wiederhole das für jede Kamera.

Einmal hinzugefügt, streamt die Kamera in Home und unterstützt **HomeKit Secure Video**-Aufnahmen, wenn du das in Home eingerichtet hast.

## Schnelles Streaming

Eine Kamera in Home zu öffnen geht nahezu sofort und dauert nur wenige Millisekunden, egal ob die Kamera H.264 oder H.265 nutzt. Das setzt voraus, dass die Quelle bereitgehalten wird, aktiviere also [Hot Modus und Vorladen](/de/cameras/add-camera#performance-optionen) an den Kameras, die du bridgest.

## Einstellungen

Die HomeKit-Einstellungen jeder Kamera umfassen:

- **QR-Code und PIN.** Die Kopplungs-Details dieser Kamera.
- **Hardware-Beschleunigung und Transcoding.** Justieren, wie der Stream für Home aufbereitet wird.
- **Port und mDNS-Advertiser.** Erweiterte Netzwerk-Optionen; die Standardwerte passen meist.
- **Kopplung zurücksetzen.** Einen neuen Code erzeugen und die Kamera neu hinzufügen, falls die Kopplung bricht.

## Gut zu wissen

- Jede Kamera ist ihr eigenes HomeKit-Zubehör, nicht eine geteilte Bridge, daher fügst du sie einzeln hinzu.
- Die nach Home übernommenen Sensoren sind die der Kamera zugewiesenen: Bewegung, Türklingel, Batterie, Licht, Kontakt, Sirene, Alarmanlage, Schalter und Audio.
