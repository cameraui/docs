---
title: Home Assistant
---

# Home Assistant

camera.ui und Home Assistant kommen auf zwei unabhängigen Wegen zusammen: Das App **lässt camera.ui in Home Assistant laufen**, die Integration **verbindet einen camera.ui-Server mit Home Assistant** und bringt seine Kameras und Sensoren als HA-Entitäten herein. Nutze eines oder beides.

<Shot src="/img/home-assistant/devices.png" alt="camera.ui-Geräte und Entitäten in Home Assistant" />

## Betreiben vs. verbinden

- **Das App betreibt camera.ui.** Es installiert den camera.ui-Server als Home-Assistant-OS-App, deine Kameras, Aufnahmen und die Erkennung liegen also auf derselben Maschine wie HA.
- **Die Integration verbindet camera.ui.** Sie spricht mit einem camera.ui-Server (dem App oder einer Docker-/Desktop-Installation irgendwo im Netz) und legt pro Kamera ein HA-Gerät mit Live-Stream, Sensoren und PTZ an.

Das App allein legt keine Entitäten an: füge zusätzlich die Integration hinzu. Läuft camera.ui schon woanders, brauchst du nur die Integration.

## Entitäten hereinholen: einen Transport wählen

Zwei unabhängige Transporte bringen camera.ui-Kameras und -Sensoren nach Home Assistant:

1. **Die Integration** (empfohlen). Ein Custom Component, das Entitäten über eine lokale Verbindung an HA pusht. Kein Broker nötig.
2. **MQTT discovery**. Eine Option auf der MQTT-Bridge des camera.ui-Servers, die Home-Assistant-Discovery-Konfigurationen an deinen Broker veröffentlicht.

::: danger Nicht beide betreiben
Die beiden werden **nicht** zusammengeführt: Betreibst du beide, hast du jede Kamera, jedes Gerät und jeden Sensor doppelt. Nimm die Integration, außer du willst camera.ui bewusst über einen bestehenden MQTT-Broker leiten.
:::

## Die Integration

Live-Änderungen der Kameras kommen per Push, und als Rückfall prüft sie einmal pro Minute die Kameraliste.

Du bekommst pro Kamera:

- **Eine Live-Kamera-Entität** mit Streaming. Snapshots und die Live-Quelle (RTSP high, mid oder low) kommen direkt aus camera.ui.
- **Bewegungs- und Objekterkennungssensoren.** Die Objektsensoren decken die Labels person, vehicle, animal und package ab.
- **Sensoren** in den Domains `binary_sensor`, `sensor`, `switch`, `light`, `siren`, `lock`, `cover` und `alarm_control_panel`. Switches, Lights, Sirens, Locks, Covers und Alarm-Panels sind aus Home Assistant steuerbar; Kontakt- und Messsensoren sind read-only.
- **Einen PTZ-Dienst**, `cameraui.ptz`, für continuous, stop, move, absolute, preset und home.

Dazu registriert die Integration ihre Dashboard-Karten, bettet die komplette camera.ui-Web-UI als Seitenleisten-Panel ein und feuert für jede Erkennung ein `cameraui_event` auf dem HA-Event-Bus, mit Geräte-Triggern für den Automatisierungs-Editor. Die Einrichtung kann über zeroconf starten: camera.ui kündigt sich per mDNS an, Host und Port sind also vorausgefüllt und du gibst nur einen Access Token ein.

Siehe **[Integration](/de/home-assistant/integration)** für die vollständige Einrichtung.

## MQTT discovery

Für Setups, die schon einen MQTT-Broker betreiben. Es braucht kein Custom Component und kein HACS. Der camera.ui-Server veröffentlicht retained Discovery-Konfigurationen, und die eingebaute MQTT-Integration von Home Assistant greift sie auf.

Du schaltest es in den MQTT-Einstellungen des camera.ui-Servers ein (HA discovery aktivieren). Du bekommst Status-, Bewegungs- und Objekt-Binärsensoren, ein Snapshot-Kamerabild und dieselben steuerbaren Sensor-Domains wie die Integration. Was du nicht bekommst: einen Live-Stream (nur Snapshot), den PTZ-Dienst, das Seitenleisten-Panel, die automatisch registrierten Karten oder die `cameraui_event`-Bus-Events. Dafür gibt es einen eigenen Konnektivitätssensor pro Kamera.

MQTT discovery ist zusammen mit den übrigen Broker-Einstellungen auf der [MQTT-Admin-Seite](/de/admin/mqtt) dokumentiert.

## Integration vs. MQTT discovery

| | Integration | MQTT discovery |
|---|---|---|
| Braucht einen MQTT-Broker | Nein | Ja |
| Custom Component / HACS | Erforderlich | Nicht nötig |
| Live-Kamera-Stream | Ja | Nur Snapshot |
| Bewegungs- & Objektsensoren | Ja | Ja |
| Steuerbare Sensoren | Ja | Ja |
| PTZ-Dienst | Ja | Nein |
| Konnektivitätssensor pro Kamera | Kein eigener | Ja |
| Eingebettetes Web-UI-Panel | Ja | Nein |
| Dashboard-Karten automatisch registriert | Ja | Nein |
| `cameraui_event` + Geräte-Trigger | Ja | Nein |
| Discovery | zeroconf (mDNS) | über MQTT |

## Home-Assistant-Sensoren hereinholen

Integration und MQTT schicken camera.ui beide nach Home Assistant hinaus. Das **Home-Assistant-Plugin** geht den umgekehrten Weg: Es importiert Home Assistants eigene Sensoren und Steuerungen nach camera.ui, wo du sie Kameras zuweisen und als Erkennungs-Trigger nutzen kannst. Es kommt keinem der beiden Transporte in die Quere.

Siehe **[Import aus Home Assistant](/de/home-assistant/import)** für die Einrichtung.

## Die Dashboard-Karten

Drei Karten bringen eine Kamera, eine Camview-Ansicht oder die letzten Ereignisse auf deine Dashboards, ein Klick öffnet den camera.ui-Dialog mit der Zeitleiste. Die Integration meldet sie an.

Siehe **[Dashboard-Karten](/de/home-assistant/card)** für die Optionen.

## Nächste Schritte

- **[App](/de/home-assistant/app)** — den camera.ui-Server in Home Assistant OS laufen lassen.
- **[Integration](/de/home-assistant/integration)** — einen camera.ui-Server verbinden und Kameras, Sensoren und PTZ als HA-Entitäten bekommen.
- **[Dashboard-Karten](/de/home-assistant/card)** — Kameras, eine Ansicht oder die letzten Ereignisse aufs Dashboard bringen.
- **[Import aus Home Assistant](/de/home-assistant/import)** — die eigenen Sensoren und Steuerungen von Home Assistant in camera.ui holen.

