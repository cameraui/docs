---
title: Dashboard-Karten
---

# Dashboard-Karten

Die camera.ui-Integration bringt zwei eigene Lovelace-Karten für deine Home-Assistant-Dashboards mit:

- **camera.ui Card.** Eine Live-Ansicht für eine einzelne Kamera.
- **camera.ui Grid.** Ein Raster aus Live-Kacheln, klick eine Kachel an, um live zu gehen.

Beide Karten streamen über Home Assistant, zeigen ein Snapshot-Standbild bis du live gehst, und bieten Steuerung für Auflösung, Transport und PTZ, sofern die Kamera das unterstützt.

<Shot src="/img/home-assistant/card.png" alt="camera.ui-Einzelkamera-Karte mit Live-Stream und Player-Steuerung" />

## Bevor du startest

Richte zuerst die [camera.ui-Integration](/de/home-assistant/integration) ein. Beim Laden der Integration wird das Karten-Bundle bereitgestellt und für dich als Lovelace-Ressource registriert. Ein manueller Ressourcen-Schritt entfällt: Die Karten stehen im Karten-Picker zur Verfügung, sobald die Integration läuft.[^resource]

## Karte hinzufügen

1. Öffne ein Dashboard, wähle **Dashboard bearbeiten** und dann **Karte hinzufügen**.
2. Suche im Karten-Picker nach **camera.ui Card** oder **camera.ui Grid**.
3. Wähle die Karte, setze die Entität (oder die Kameraliste beim Grid) und speichere.

Du kannst eine Karte auch im YAML-Modus hinzufügen. Die `type:`-Werte der Karten sind `cameraui-card` und `cameraui-grid-card`.

Die Einzel-Card prüft ihre Entität und zeigt statt eines Streams eine Meldung, wenn etwas nicht passt: **No entity configured**, **Entity not found** oder **Not a camera.ui camera entity**, falls die Entität keine camera.ui-Kamera ist. Die Grid-Card überspringt jede Entität, die sie nicht auflösen kann, und zeigt **No cameras configured**, wenn keine übrig bleibt.

## camera.ui Card

Die Karte für eine einzelne Kamera. `entity` ist erforderlich.

```yaml
type: cameraui-card
entity: camera.front_door
title: Haustür
source: high-resolution
mode: auto
autostart: false
snapshot_interval: 10
```

Optionen:

- **entity.** Erforderlich. Die camera.ui-Kamera-Entität, die angezeigt werden soll.
- **title.** Titel im Overlay. Standard ist der Anzeigename oder Kameraname der Entität.
- **source.** Auf welcher Auflösungsrolle gestartet wird: `high-resolution`, `mid-resolution` oder `low-resolution`. Standard ist `high-resolution`.
- **mode.** Streaming-Transport: `auto`, `webrtc` oder `mse`. Standard ist `auto`, das WebRTC oder MSE für dich auswählt.
- **autostart.** Sofort live gehen, statt zuerst das Standbild zu zeigen. Standard ist `false`.
- **snapshot_interval.** Wie oft das Snapshot-Standbild aktualisiert wird, in Sekunden. Standard `10`, Minimum `2`.

## camera.ui Grid

Die Grid-Karte zeigt mehrere Kameras als Live-Kacheln. `cameras` ist erforderlich.

```yaml
type: cameraui-grid-card
cameras:
  - camera.front_door
  - camera.driveway
  - camera.garden
columns: 3
source: high-resolution
mode: auto
autostart: false
```

Optionen:

- **cameras.** Erforderlich. Eine Liste von camera.ui-Kamera-entity_ids.
- **columns.** Anzahl der Spalten. Lässt du sie weg, nutzt das Raster 1 Spalte für eine einzelne Kamera, 2 für bis zu vier, und 3 darüber.
- **source, mode, autostart.** Gleiche Bedeutung wie bei der Einzelkarte, angewendet auf jede Kachel.

## Streaming

Die Karte zeigt ein Snapshot-Standbild, bis du live gehst. Ein kleines Badge unten links zeigt, wie alt der Snapshot ist (`Jetzt`, Sekunden, Minuten oder Stunden). Klick den Play-Button, oder setze `autostart: true`, um den Live-Stream zu öffnen.

Der Live-Stream läuft über die Streaming-Engine per WebRTC oder MSE, geproxyt durch Home Assistant, sodass nichts direkt nach außen freigegeben werden muss. Mit `mode: auto` wählt die Karte den Transport; über das Modus-Pill kannst du während des Ansehens **AUTO → WebRTC → MSE** durchschalten. H.265-Kameras werden ebenfalls unterstützt.[^backend]

Hat eine Kamera mehr als eine Auflösungsrolle, schaltet ein Auflösungs-Pill zwischen **HD**, **MD** und **SD** um. Beim Überfahren mit der Maus erscheinen die Steuerelemente: Pause und Play, Stummschalten, Bild-in-Bild und Vollbild. Schmale Karten blenden die zusätzlichen Steuerelemente aus, damit das Video frei bleibt.[^responsive]

## PTZ-Steuerung

Kameras mit PTZ erhalten ein Overlay über dem Video, sobald die Karte breit genug ist: einen Zoom-Schieber links und ein Pan/Tilt-Pad rechts. Ein gehaltenes Steuerelement sendet eine kontinuierliche Bewegung; beim Loslassen stoppt sie. Hat die Kamera ein Home-Preset, sendet ein Tippen auf das Pad sie zur Home-Position. Das Overlay zeigt nur die Steuerelemente, die die Kamera tatsächlich unterstützt.

<Shot src="/img/home-assistant/card-ptz.png" alt="camera.ui-Karte mit PTZ-Overlay: Zoom-Schieber und Pan/Tilt-Pad" />

Im Hintergrund ruft das Overlay den Dienst `cameraui.ptz` auf, sodass du dieselbe Kamera auch aus deinen eigenen Automationen steuern kannst.

## Was die Karten nicht können

Die Karten sind reine Live-Ansicht. Sie zeichnen keine Erkennungs-Boxen oder Objekt-Sensor-Badges, und es gibt keine Aufnahmen- oder Ereignis-Timeline in der Karte. Für Objekt-Sensoren, Geräte-Trigger und das `cameraui_event`-Bus-Ereignis siehe die [Integrations-Seite](/de/home-assistant/integration).

[^resource]: In Dashboards im Speicher-Modus legt die Integration die Lovelace-Ressource mit einer inhaltsgehashten URL an oder aktualisiert sie. In Dashboards im YAML-Modus wird das Skript stattdessen für die Sitzung eingefügt. So oder so fügst du keine Ressource von Hand hinzu.
[^backend]: Das Stream-Backend ist go2rtc, geproxyt durch Home Assistant. Die Codec-Verarbeitung, inklusive H.265, liegt in der gemeinsam genutzten Streaming-Komponente, die die Karte einbettet.
[^responsive]: Die Pills werden unter 300px Kartenbreite ausgeblendet, Bild-in-Bild unter 260px, Stummschalten unter 200px, und das PTZ-Overlay braucht mindestens 340px.

## Nächste Schritte

- **[Home-Assistant-Integration](/de/home-assistant/integration)** — Integration, Objekt-Sensoren und Automationen einrichten.
