---
title: Home Assistant
---

# Home Assistant

camera.ui arbeitet auf zwei Wegen mit Home Assistant zusammen, die nichts miteinander zu tun haben. Du kannst **camera.ui in Home Assistant laufen lassen**, über das App, und du kannst **ein bestehendes camera.ui mit Home Assistant verbinden**, über die Integration. Das sind getrennte Aufgaben, du kannst also das eine oder das andere oder beides machen: Das App betreibt den Server, die Integration bringt seine Kameras und Sensoren als HA-Entitäten herein.

<Shot src="/img/home-assistant/devices.png" alt="camera.ui-Geräte und Entitäten in Home Assistant" />

## Betreiben vs. verbinden

- **Das App betreibt camera.ui.** Es installiert den camera.ui-Server als Home-Assistant-OS-App, deine Kameras, Aufnahmen und die Erkennung liegen also auf derselben Maschine wie HA. Das ist nur eine Art, camera.ui zu hosten, mehr nicht.
- **Die Integration verbindet camera.ui.** Sie spricht mit einem camera.ui-Server (dem App oder einer Docker-/Desktop-Installation irgendwo im Netz) und legt pro Kamera ein HA-Gerät mit Live-Stream, Sensoren und PTZ an. So tauchen die Entitäten in HA auf.

Läuft das App, fügst du trotzdem die Integration hinzu, um Entitäten nach Home Assistant zu bekommen. Läuft dein camera.ui schon woanders, brauchst du nur die Integration.

## Entitäten hereinholen: einen Transport wählen

Es gibt zwei unabhängige Wege, camera.ui-Kameras und -Sensoren als Entitäten nach Home Assistant zu bekommen:

1. **Die Integration** (empfohlen). Ein Custom Component, das Entitäten über eine lokale Verbindung an HA pusht. Kein Broker nötig.
2. **MQTT discovery**. Eine Option auf der MQTT-Bridge des camera.ui-Servers, die Home-Assistant-Discovery-Konfigurationen an deinen Broker veröffentlicht.

Diese beiden werden **nicht** zusammengeführt. Home Assistant behandelt sie als unabhängig, betreibst du also beide, hast du am Ende von jeder Kamera zwei Kopien: zwei Geräte, zwei Bewegungssensoren, von allem zwei. Wähle eines.

::: danger Nicht beide betreiben
Die Integration und MQTT discovery duplizieren sich gegenseitig. Wähle eines. Nimm die Integration, außer du willst camera.ui bewusst über einen bestehenden MQTT-Broker leiten.
:::

## Die Integration

Für die meisten Setups empfohlen. Sie verbindet sich direkt mit camera.ui, ohne MQTT-Broker. Live-Änderungen der Kameras kommen per Push, und als Rückfall prüft sie einmal pro Minute die Kameraliste.

Du bekommst pro Kamera:

- **Eine Live-Kamera-Entität** mit Streaming. Snapshots und die Live-Quelle (RTSP high, mid oder low) kommen direkt aus camera.ui.
- **Bewegungs- und Objekterkennungssensoren.** Die Objektsensoren decken die Labels person, vehicle, animal und package ab.
- **Sensoren** in den Domains `binary_sensor`, `sensor`, `switch`, `light`, `siren`, `lock`, `cover` und `alarm_control_panel`. Switches, Lights, Sirens, Locks, Covers und Alarm-Panels sind aus Home Assistant steuerbar; Kontakt- und Messsensoren sind read-only.
- **Einen PTZ-Dienst**, `cameraui.ptz`, für continuous, stop, move, absolute, preset und home.

Dazu registriert die Integration die Lovelace-Ressource `cameraui-card`, bettet die komplette camera.ui-Web-UI als Seitenleisten-Panel ein und feuert für jede Erkennung ein `cameraui_event` auf dem HA-Event-Bus, mit Geräte-Triggern für den Automatisierungs-Editor. Die Einrichtung kann über zeroconf starten: camera.ui kündigt sich per mDNS an, Host und Port sind also vorausgefüllt und du gibst nur einen Access Token ein.

Siehe **[Integration](/de/home-assistant/integration)** für die vollständige Einrichtung.

## MQTT discovery

Nimm das nur, wenn du schon einen MQTT-Broker betreibst und camera.ui darüber sprechen lassen willst. Der einzige echte Vorteil: Es braucht kein Custom Component und kein HACS. Der camera.ui-Server veröffentlicht retained Discovery-Konfigurationen, und die eingebaute MQTT-Integration von Home Assistant greift sie auf.

Du schaltest es in den MQTT-Einstellungen des camera.ui-Servers ein (HA discovery aktivieren). Du bekommst Status-, Bewegungs- und Objekt-Binärsensoren, ein Snapshot-Kamerabild und dieselben steuerbaren Sensor-Domains wie die Integration. Was du nicht bekommst: einen Live-Stream (nur Snapshot), den PTZ-Dienst, das Seitenleisten-Panel, die automatisch registrierte Card oder die `cameraui_event`-Bus-Events. Eine Sache macht MQTT anders als die Integration: einen eigenen Konnektivitätssensor pro Kamera.

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
| Lovelace-Card automatisch registriert | Ja | Nein |
| `cameraui_event` + Geräte-Trigger | Ja | Nein |
| Discovery | zeroconf (mDNS) | über MQTT |

## Die Lovelace-Card

Die `cameraui-card` zeigt den Live-Stream einer Kamera mit PTZ-Overlay auf deinen Dashboards. Mit der Integration wird sie automatisch registriert, du fügst sie nur noch zu einer Ansicht hinzu.

Siehe **[Lovelace-Card](/de/home-assistant/card)** für Platzierung und Konfiguration.

## Nächste Schritte

- **[App](/de/home-assistant/app)** — den camera.ui-Server in Home Assistant OS laufen lassen.
- **[Integration](/de/home-assistant/integration)** — einen camera.ui-Server verbinden und Kameras, Sensoren und PTZ als HA-Entitäten bekommen.
- **[Lovelace-Card](/de/home-assistant/card)** — eine Kamera mit PTZ aufs Dashboard bringen.

