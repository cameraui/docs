---
title: Integration
---

# Home Assistant Integration

The **camera.ui integration** connects an existing camera.ui server to Home Assistant. Your cameras, their sensors, motion and object detection, PTZ controls and the full camera.ui interface all show up inside Home Assistant.

It talks to the server directly over your local network, so events arrive by push the moment they happen. You don't need an MQTT broker or any cloud service.

This page covers the custom integration (domain `cameraui`). If you run Home Assistant OS and want camera.ui to run as a managed add-on instead, see the [Add-on](/home-assistant/add-on) page.

## Install

The integration is distributed through [HACS](https://hacs.xyz) as a custom repository.

1. In HACS, add `cameraui/hass-integration` as a custom **Integration** repository.
2. Install **camera.ui** from HACS.
3. Restart Home Assistant.

## Connecting

Once installed, Home Assistant needs to find your server and authenticate against it.

### Discovery

camera.ui advertises itself on the local network over mDNS (`_camera-ui._tcp.local.`). When Home Assistant sees it, a **camera.ui found** card appears under **Settings → Devices & services**. Open it and enter your API token; the host and port are filled in from discovery.

### Manual setup

If discovery doesn't reach the server (a different subnet, for example), add it by hand:

1. Go to **Settings → Devices & services → Add integration** and search for **camera.ui**.
2. Enter the **Host**, **Port** (default `3443`) and your **API token**.

### API token

Both paths need an API token. Create one in camera.ui under **Settings → Account → API tokens**, then paste it into the integration.

Home Assistant checks the token against the server before finishing. If the token is rejected you'll see an authentication error; if the server can't be reached you'll see a connection error instead.[^ssl]

[^ssl]: The server is reached over HTTPS. The integration does not verify the certificate, so a self-signed camera.ui certificate works without extra setup.

## What you get

The integration creates **one Home Assistant device per camera** and keeps the list in sync. It re-reads the camera list every 60 seconds, and a camera you remove in camera.ui is removed from Home Assistant automatically.

### Cameras

Each camera device carries a **camera entity** that streams live and serves snapshots. The device is labelled with the manufacturer `camera.ui` and links back to the server's web interface.

### Sensors

Every sensor you've set up on a camera in camera.ui is mirrored into Home Assistant on the matching platform:

| camera.ui sensor | Home Assistant platform |
|---|---|
| Binary / contact | `binary_sensor` |
| Measurement | `sensor` |
| Switch | `switch` |
| Light | `light` |
| Siren | `siren` |
| Lock | `lock` |
| Cover | `cover` |
| Alarm system | `alarm_control_panel` |

The controllable ones work both ways: a **switch** and a **siren** turn on and off, a **light** turns on and off (and dims, if it reports brightness), a **cover** opens and closes, a **lock** locks and unlocks, and an **alarm panel** arms home, away or night and disarms. Commands are sent straight to camera.ui.

This surface is driven live. Add, rename or remove a sensor on a camera in camera.ui and the matching Home Assistant entity appears, updates its name or disappears without a restart.

### Motion and object detection

Every camera gets a **motion** binary sensor that turns on while a detection is active.

Cameras with object detection also get one binary sensor each for **person**, **vehicle**, **animal** and **package**. Each turns on while that object is in view and clears when the detection ends.[^objectclass]

[^objectclass]: Motion and object binary sensors are registered with the `motion` device class, so they present in Home Assistant as motion sensors rather than as a per-object class.

### Recognition sensors

Cameras with the matching detector get value sensors for **face**, **license plate** and **classification**. The sensor's value is the recognized labels, and the raw detections are available in its attributes.

## PTZ

Pan, tilt and zoom is exposed as a **service**, `cameraui.ptz`, rather than as an entity. Target one or more camera entities and pick an action:

- **continuous.** Move at a set speed until stopped, using `pan`, `tilt` and `zoom` as speeds.
- **stop.** Stop a continuous move.
- **move.** Move by a relative step.
- **absolute.** Go to an absolute position.
- **home.** Return to the home position.
- **preset.** Recall a saved preset by name.

The `pan`, `tilt` and `zoom` fields run from `-1` to `1`. The `preset` action needs a preset name. If none of the targeted cameras has PTZ, the service reports an error.

```yaml
action:
  - service: cameraui.ptz
    target:
      entity_id: camera.driveway
    data:
      action: preset
      preset: gate
```

## Automations

### Device triggers

Each camera device offers three triggers in the automation editor:

- **Detection started.** A detection began on the camera.
- **Detection ended.** The detection cleared.
- **Object recognized.** A face, plate or classification was recognized during a detection.

### The event bus

The integration also fires a `cameraui_event` on the Home Assistant event bus. Unlike a single "something was detected" event, several of these fire across one detection's lifecycle:

| `state` | When |
|---|---|
| `start` | A detection begins. |
| `object` | A new object label appears during the detection. |
| `recognized` | A face, plate or classification is recognized during the detection. |
| `end` | The detection clears. |

Each event carries these fields:

| Field | Contents |
|---|---|
| `camera_id` | The camera's id. |
| `camera_name` | The camera's name. |
| `state` | One of the values above. |
| `detection_types` | The detection types involved. |
| `event_id` | The id shared by all events of one detection. |
| `labels` | Object labels seen. |
| `faces` | Recognized faces. |
| `plates` | Recognized license plates. |
| `classifications` | Other recognized attributes. |
| `attributes` | The full raw attribute list. |

Filter on `state` to act on a specific point in the lifecycle:

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

The device triggers cover `start`, `end` and `recognized`. There is no device trigger for the `object` state, so use the event bus for that one.[^objecttrigger]

[^objecttrigger]: The three device triggers map to `start`, `end` and `recognized`. To react to a specific object label appearing mid-detection, listen for `cameraui_event` with `state: object` as shown above.

## Sidebar panel

Setup adds a **camera.ui** entry to the Home Assistant sidebar that embeds the full camera.ui interface. The panel is **admin only**: it appears for administrator accounts and stays hidden for everyone else.

## Lovelace card

A camera.ui Lovelace card ships with the integration and registers itself as a resource, so it's ready to add to a dashboard without a manual install. The bundle provides a single-camera card and a grid card.

See the [Lovelace card](/home-assistant/card) page for the card options and layouts.

## Next steps

- **[Add-on](/home-assistant/add-on)** — run camera.ui itself as a Home Assistant OS add-on.
- **[Lovelace card](/home-assistant/card)** — configure the bundled dashboard cards.
- **[Sensors](/sensors/setup)** — assign sensors to a camera so they reach Home Assistant.
