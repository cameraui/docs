---
title: Kamera-Einstellungen
---

# Kamera-Einstellungen

Jede Kamera hat einen Einstellungs-Drawer, in dem du konfigurierst, wie sie sich verbindet, was sie erkennt und wie sie sich verhält. Öffne ihn mit der **Einstellungen**-Schaltfläche (Zahnrad) an der Kamera. Sie steht Admins zur Verfügung.

![Kamera-Einstellungs-Drawer](/img/cameras/settings-drawer.png)

Der Drawer hat vier Tabs.

## Übersicht

Status und Geräteinfo der Kamera, plus eine Live-Ansicht ihrer Sensoren und ihres Zubehörs. Read-only-Sensoren (Kontakt, Temperatur, Bewegung usw.) zeigen ihren aktuellen Status, und die steuerbaren bedienst du direkt hier, etwa ein Licht einschalten, eine Tür verriegeln oder eine Alarmanlage scharf schalten.

## Quellen

Hier fügst du die Stream-[Quellen](/de/cameras/add-camera#quellen-und-rollen) der Kamera hinzu, änderst und entfernst sie, genau wie beim [Kamera hinzufügen](/de/cameras/add-camera): Name jeder Quelle, Rolle (Hohe, Mittlere, Niedrige Auflösung oder Snapshot), Stream-URLs und Optionen wie Hot Modus und Vorladen. Jede Quelle zeigt außerdem ihren Live-Status, die erkannten Codecs und die Stream-URL.

## Einstellungen

Das Haupt-Konfigurationsformular, gegliedert in Bereiche:

- **Allgemein.** Name, Raum, Kameratyp und ob die Kamera deaktiviert ist (hier entfernst du auch eine Kamera).
- **Branding.** Hersteller, Modell und weitere Gerätedetails.
- **Interface.** [Streaming-Modus und -Quelle](/de/cameras/live-view#streaming-modi) sowie das Seitenverhältnis.
- **Erkennung.** Feinabstimmung pro Kamera für Bewegungs-, Objekt-, Audio- und Sensor-Erkennung (Empfindlichkeit, Confidence, Timeouts und Trigger), plus ein Snooze-Schalter. Siehe [Erkennung & KI](/de/detection/).
- **Autotrack.** Eine PTZ-Kamera erkannten Objekten automatisch folgen lassen. Siehe [PTZ & Autotrack](/de/sensors/ptz).
- **Zonen.** Erkennungszonen, Privatsphäre-Masken und Überquerungslinien zeichnen. Siehe [Zonen, Masken & Linien](/de/cameras/zones-and-masks).
- **Snapshot.** Wie Standbilder aktualisiert und zwischengespeichert werden (Auto-Refresh, Cache-Zeit und Aktualisierungsintervall).
- **Frame Worker.** Die für die Analyse genutzte Bildrate sowie ob Event-Thumbnails aus dem höchstauflösenden Stream erzeugt werden.

## Plugins

Aktiviere Plugins für diese Kamera und wähle, welches die einzelnen [Sensoren und das Zubehör](/de/sensors/) bereitstellt. Hier schaltest du auch einzelne Sensoren an oder ab und passt die Einstellungen an, die ein Plugin pro Kamera anbietet. Die vollständige Anleitung findest du unter [Sensoren einrichten](/de/sensors/setup).
