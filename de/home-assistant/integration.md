---
title: Integration
---

# Home Assistant Integration

Die **camera.ui Integration** verbindet einen bestehenden camera.ui Server mit Home Assistant. Deine Kameras, ihre Sensoren, Bewegungs- und Objekterkennung, PTZ-Steuerung und die komplette camera.ui Oberfläche erscheinen direkt in Home Assistant.

Sie spricht den Server direkt über dein lokales Netzwerk an, Ereignisse kommen also per Push in dem Moment an, in dem sie passieren. Du brauchst keinen MQTT-Broker und keinen Cloud-Dienst.

Diese Seite behandelt die Custom-Integration (Domain `cameraui`). Wenn du Home Assistant OS nutzt und camera.ui stattdessen als verwaltetes Add-on laufen lassen willst, siehe die Seite [Add-on](/de/home-assistant/add-on).

## Installation

Die Integration wird über [HACS](https://hacs.xyz) als Custom-Repository verteilt.

1. Füge in HACS `cameraui/hass-integration` als Custom-**Integration**-Repository hinzu.
2. Installiere **camera.ui** aus HACS.
3. Starte Home Assistant neu.

## Verbinden

Nach der Installation muss Home Assistant deinen Server finden und sich an ihm anmelden.

### Erkennung

camera.ui kündigt sich im lokalen Netz über mDNS an (`_camera-ui._tcp.local.`). Sobald Home Assistant den Server sieht, erscheint unter **Einstellungen → Geräte & Dienste** eine **camera.ui gefunden**-Karte. Öffne sie und gib deinen API-Token ein, Host und Port kommen aus der Erkennung.

### Manuelle Einrichtung

Wenn die Erkennung den Server nicht erreicht (zum Beispiel in einem anderen Subnetz), füge ihn von Hand hinzu:

1. Gehe zu **Einstellungen → Geräte & Dienste → Integration hinzufügen** und suche nach **camera.ui**.
2. Gib **Host**, **Port** (Standard `3443`) und deinen **API-Token** ein.

### API-Token

Beide Wege brauchen einen API-Token. Erstelle einen in camera.ui unter **Settings → Account → API tokens** und füge ihn in die Integration ein.

Home Assistant prüft den Token vor dem Abschluss gegen den Server. Wird der Token abgelehnt, siehst du einen Authentifizierungsfehler, ist der Server nicht erreichbar, stattdessen einen Verbindungsfehler.[^ssl]

[^ssl]: Der Server wird über HTTPS erreicht. Die Integration prüft das Zertifikat nicht, ein selbstsigniertes camera.ui Zertifikat funktioniert also ohne zusätzliche Einrichtung.

## Was du bekommst

Die Integration legt **ein Home Assistant Gerät pro Kamera** an und hält die Liste aktuell. Sie liest die Kameraliste alle 60 Sekunden neu, und eine Kamera, die du in camera.ui entfernst, wird automatisch aus Home Assistant entfernt.

### Kameras

Jedes Kameragerät trägt eine **Kamera-Entität**, die live streamt und Snapshots liefert. Das Gerät ist mit dem Hersteller `camera.ui` gekennzeichnet und verlinkt zurück auf die Weboberfläche des Servers.

### Sensoren

Jeder Sensor, den du an einer Kamera in camera.ui eingerichtet hast, wird auf der passenden Plattform in Home Assistant gespiegelt:

| camera.ui Sensor | Home Assistant Plattform |
|---|---|
| Binär / Kontakt | `binary_sensor` |
| Messwert | `sensor` |
| Schalter | `switch` |
| Licht | `light` |
| Sirene | `siren` |
| Schloss | `lock` |
| Abdeckung | `cover` |
| Alarmanlage | `alarm_control_panel` |

Die steuerbaren funktionieren in beide Richtungen: ein **switch** und eine **siren** schalten an und aus, ein **light** schaltet an und aus (und dimmt, wenn es Helligkeit meldet), ein **cover** öffnet und schließt, ein **lock** ver- und entriegelt, und ein **alarm_control_panel** aktiviert Home, Away oder Night und deaktiviert. Befehle gehen direkt an camera.ui.

Diese Oberfläche wird live gepflegt. Fügst du an einer Kamera in camera.ui einen Sensor hinzu, benennst ihn um oder entfernst ihn, erscheint die passende Home Assistant Entität, aktualisiert ihren Namen oder verschwindet, ohne Neustart.

### Bewegungs- und Objekterkennung

Jede Kamera bekommt einen **motion**-Binärsensor, der eingeschaltet ist, solange eine Erkennung aktiv ist.

Kameras mit Objekterkennung bekommen zusätzlich je einen Binärsensor für **person**, **vehicle**, **animal** und **package**. Jeder ist eingeschaltet, solange das Objekt im Bild ist, und geht aus, wenn die Erkennung endet.[^objectclass]

[^objectclass]: Bewegungs- und Objekt-Binärsensoren werden mit der Geräteklasse `motion` registriert, sie erscheinen in Home Assistant also als Bewegungssensoren und nicht als eigene Objektklasse.

### Erkennungssensoren

Kameras mit dem passenden Detektor bekommen Wert-Sensoren für **face**, **license plate** und **classification**. Der Wert des Sensors sind die erkannten Labels, die rohen Erkennungen liegen in seinen Attributen.

## PTZ

Schwenken, Neigen und Zoomen wird als **Dienst** bereitgestellt, `cameraui.ptz`, nicht als Entität. Wähle eine oder mehrere Kamera-Entitäten als Ziel und eine Aktion:

- **continuous.** Mit fester Geschwindigkeit bewegen, bis gestoppt wird, `pan`, `tilt` und `zoom` sind dabei Geschwindigkeiten.
- **stop.** Eine laufende Bewegung stoppen.
- **move.** Um einen relativen Schritt bewegen.
- **absolute.** Zu einer absoluten Position fahren.
- **home.** Zur Home-Position zurückkehren.
- **preset.** Ein gespeichertes Preset per Name aufrufen.

Die Felder `pan`, `tilt` und `zoom` reichen von `-1` bis `1`. Die Aktion `preset` braucht einen Preset-Namen. Hat keine der Zielkameras PTZ, meldet der Dienst einen Fehler.

```yaml
action:
  - service: cameraui.ptz
    target:
      entity_id: camera.driveway
    data:
      action: preset
      preset: gate
```

## Automatisierungen

### Geräte-Trigger

Jedes Kameragerät bietet drei Trigger im Automatisierungs-Editor:

- **Detection started.** Eine Erkennung hat an der Kamera begonnen.
- **Detection ended.** Die Erkennung ist beendet.
- **Object recognized.** Ein Gesicht, Kennzeichen oder eine Klassifizierung wurde während einer Erkennung erkannt.

### Der Event-Bus

Die Integration feuert außerdem ein `cameraui_event` auf dem Home Assistant Event-Bus. Anders als ein einzelnes "etwas wurde erkannt"-Ereignis feuern mehrere davon über den Verlauf einer Erkennung:

| `state` | Wann |
|---|---|
| `start` | Eine Erkennung beginnt. |
| `object` | Ein neues Objekt-Label taucht während der Erkennung auf. |
| `recognized` | Ein Gesicht, Kennzeichen oder eine Klassifizierung wird während der Erkennung erkannt. |
| `end` | Die Erkennung endet. |

Jedes Ereignis trägt diese Felder:

| Feld | Inhalt |
|---|---|
| `camera_id` | Die id der Kamera. |
| `camera_name` | Der Name der Kamera. |
| `state` | Einer der Werte oben. |
| `detection_types` | Die beteiligten Erkennungstypen. |
| `event_id` | Die id, die alle Ereignisse einer Erkennung teilen. |
| `labels` | Gesehene Objekt-Labels. |
| `faces` | Erkannte Gesichter. |
| `plates` | Erkannte Kennzeichen. |
| `classifications` | Weitere erkannte Attribute. |
| `attributes` | Die vollständige rohe Attributliste. |

Filtere auf `state`, um auf einen bestimmten Punkt im Verlauf zu reagieren:

```yaml
automation:
  - alias: Notify on recognized face
    trigger:
      - platform: event
        event_type: cameraui_event
        event_data:
          state: recognized
    action:
      - service: notify.mobile_app
        data:
          message: >-
            {{ trigger.event.data.faces | join(', ') }}
            seen at {{ trigger.event.data.camera_name }}
```

```yaml
automation:
  - alias: Turn on light when a person appears
    trigger:
      - platform: event
        event_type: cameraui_event
        event_data:
          state: object
    condition:
      - "{{ 'person' in trigger.event.data.labels }}"
    action:
      - service: light.turn_on
        target:
          entity_id: light.driveway
```

Die Geräte-Trigger decken `start`, `end` und `recognized` ab. Für den Zustand `object` gibt es keinen Geräte-Trigger, nutze dafür den Event-Bus.[^objecttrigger]

[^objecttrigger]: Die drei Geräte-Trigger entsprechen `start`, `end` und `recognized`. Um auf ein bestimmtes Objekt-Label mitten in einer Erkennung zu reagieren, lausche wie oben gezeigt auf `cameraui_event` mit `state: object`.

## Sidebar-Panel

Die Einrichtung fügt der Home Assistant Seitenleiste einen **camera.ui**-Eintrag hinzu, der die komplette camera.ui Oberfläche einbettet. Das Panel ist **nur für Admins**: Es erscheint für Administrator-Konten und bleibt für alle anderen verborgen.

## Lovelace-Card

Eine camera.ui Lovelace-Card kommt mit der Integration und registriert sich selbst als Ressource, sie ist also ohne manuelle Installation bereit für ein Dashboard. Das Bundle bringt eine Einzelkamera-Card und eine Grid-Card mit.

Details zu Optionen und Layouts findest du auf der Seite [Lovelace-Card](/de/home-assistant/card).

## Nächste Schritte

- **[Add-on](/de/home-assistant/add-on)** — camera.ui selbst als Home Assistant OS Add-on betreiben.
- **[Lovelace-Card](/de/home-assistant/card)** — die mitgelieferten Dashboard-Cards konfigurieren.
- **[Sensoren](/de/sensors/setup)** — einer Kamera Sensoren zuweisen, damit sie Home Assistant erreichen.
