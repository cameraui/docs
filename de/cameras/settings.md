---
title: Kamera-Einstellungen
---

# Kamera-Einstellungen

Jede Kamera hat einen Einstellungs-Drawer, in dem du konfigurierst, wie sie sich verbindet, was sie erkennt und wie sie sich verhält. Öffne ihn mit der **Einstellungen**-Schaltfläche (Zahnrad) an der Kamera. Sie steht Admins zur Verfügung.

<Shot src="/img/cameras/settings-drawer.png" alt="Kamera-Einstellungs-Drawer" />

Der Drawer hat vier Tabs.

## Übersicht

Status und Geräteinfo der Kamera, plus eine Live-Ansicht ihrer Sensoren und ihres Zubehörs. Read-only-Sensoren (Kontakt, Temperatur, Bewegung usw.) zeigen ihren aktuellen Status, und die steuerbaren bedienst du direkt hier, etwa ein Licht einschalten, eine Tür verriegeln oder eine Alarmanlage scharf schalten.

## Quellen

Hier fügst du die Stream-[Quellen](/de/cameras/add-camera#quellen-und-rollen) der Kamera hinzu, änderst und entfernst sie, genau wie beim [Kamera hinzufügen](/de/cameras/add-camera): Name jeder Quelle, Rolle (Hohe, Mittlere, Niedrige Auflösung oder Snapshot), Stream-URLs und Optionen wie Hot Modus, Vorladen und Audio stummschalten (entfernt die Audiospur dieser Quelle). Jede Quelle zeigt außerdem ihren Live-Status, die erkannten Codecs und die Stream-URL.

## Einstellungen

Das Haupt-Konfigurationsformular, gegliedert in Bereiche:

- **Allgemein.** Name, Raum, Kameratyp und ob die Kamera deaktiviert ist (hier entfernst du auch eine Kamera).
- **Branding.** Hersteller, Modell und weitere Gerätedetails.
- **Interface.** Alles dazu, wie diese Kamera angezeigt und abgespielt wird: [Streaming-Modus und -Quelle](/de/cameras/live-view#streaming-modi), die [Wiedergabe-Quelle](/de/recording/timeline-playback#wiedergabequalität) für Aufnahmen, der [Aktivitätsmodus](/de/cameras/live-view#aktivitätsmodus-immer-an-und-standby) und das Anzeige-Seitenverhältnis. Fürs Verhältnis wähle einen Preset (16:9, 4:3, 1:1 und mehr) oder gib ein eigenes `Breite:Höhe` wie `21:9` ein, mit einer Live-Vorschau der Kamera in diesem Verhältnis.
- **Erkennung.** Feinabstimmung pro Kamera für Bewegungs-, Objekt-, Audio-, Gesichts-, Kennzeichen- und Sensor-Erkennung: Empfindlichkeit, Konfidenz, Timeouts, Trigger und Umgang mit statischen Objekten, plus ein Snooze-Schalter. Die Konfidenzwerte, die die KI-Backends nutzen, kommen von hier, eine Änderung greift also sofort. Welche Objekttypen die Kamera meldet, legst du unter **Zonen** fest. Siehe [Erkennung & KI](/de/detection/).
- **Aufnahme.** Ob und wie diese Kamera aufgezeichnet wird: Modus, Vorpuffer und welche Streams auf die Disk gehen. Die Aufnahme übernimmt ein installiertes NVR-Plugin. Siehe [Aufnahmen](/de/recording/).
- **Benachrichtigungen.** Was diese Kamera aufs Handy schickt: der eigene An/Aus-Schalter der Kamera, Video in der Benachrichtigung, welche Geräusche und Sensoren melden, die Sperrzeit und die Geschwindigkeit. Welche Erkennungen dich benachrichtigen, legst du unter **Zonen** an den Alarmzonen fest. Siehe [Benachrichtigungen](/de/notifications/).
- **Autotrack.** Eine PTZ-Kamera erkannten Objekten automatisch folgen lassen. Siehe [PTZ & Autotrack](/de/sensors/ptz).
- **Snapshot.** Wie Standbilder aktualisiert und zwischengespeichert werden (Auto-Refresh, Cache-Zeit und Aktualisierungsintervall).
- **Zonen.** Bewegungs-, Objekt-, Alarm- und Privatzonen sowie Überquerungslinien zeichnen. Siehe [Zonen & Privatsphäre](/de/cameras/zones-and-masks).
- **Frame Worker.** Legt Decoder-Hardware (CUDA, VAAPI, Quick Sync und mehr) und Gerät für diese Kamera fest. Auto wählt die beste verfügbare. Eine zweite Decoder-Auswahl gilt, während die Kamera auf einem zugewiesenen [Worker](/de/admin/workers) decodiert, so können Host und Worker verschiedene GPUs nutzen; bei Wie Server verwendet der Worker die erste Auswahl. **Hauptstream ohne GPU** erzwingt die Erkennung auf dem hochauflösenden Stream auf Systemen ohne GPU, wo sie echte Rechenleistung kostet; mit einem Hardware-Decoder wird der hochauflösende Stream ohnehin analysiert, sobald etwas erkannt wird, lass ihn also aus.

## Plugins

Aktiviere Plugins für diese Kamera und wähle, welches die einzelnen [Sensoren und das Zubehör](/de/sensors/) bereitstellt. Hier schaltest du auch einzelne Sensoren an oder ab und passt die Einstellungen an, die ein Plugin pro Kamera anbietet. Die vollständige Anleitung findest du unter [Sensoren einrichten](/de/sensors/setup).
