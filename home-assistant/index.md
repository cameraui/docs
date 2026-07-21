---
title: Home Assistant
---

# Home Assistant

camera.ui works with Home Assistant in two ways that have nothing to do with each other. You can **run camera.ui inside Home Assistant** with the app, and you can **connect an existing camera.ui to Home Assistant** with the integration. They are separate jobs, so you can do either or both: the app runs the server, the integration surfaces its cameras and sensors as HA entities.

<Shot src="/img/home-assistant/devices.png" alt="camera.ui devices and entities in Home Assistant" />

## Running vs connecting

- **The app runs camera.ui.** It installs the camera.ui server as a Home Assistant OS app, so your cameras, recordings, and detection live on the same box as HA. This is a way to host camera.ui, nothing more.
- **The integration connects camera.ui.** It talks to a camera.ui server (the app, or a Docker/desktop install anywhere on your network) and creates one HA device per camera with live streams, sensors, and PTZ. This is how entities show up in HA.

If you run the app, you still add the integration to get entities into Home Assistant. If your camera.ui already runs elsewhere, you only need the integration.

## Getting entities in: pick one transport

There are two independent ways to get camera.ui cameras and sensors into Home Assistant as entities:

1. **The integration** (recommended). A custom component that pushes entities to HA over a local connection. No broker needed.
2. **MQTT discovery**. An opt-in on the camera.ui server's MQTT bridge that publishes Home Assistant discovery configs to your broker.

These two do **not** merge. Home Assistant treats them as unrelated, so running both leaves you with two copies of every camera: two devices, two motion sensors, two of everything. Pick one.

::: danger Do not run both
The integration and MQTT discovery duplicate each other. Pick one. Use the integration unless you specifically want to route camera.ui through an existing MQTT broker.
:::

## The integration

Recommended for most setups. It connects straight to camera.ui with no MQTT broker involved. Live camera changes arrive by push, and it re-checks the camera list once a minute as a backstop.

You get, per camera:

- **A live camera entity** with streaming. Snapshots and the live source (high, mid, or low RTSP) come straight from camera.ui.
- **Motion and object-detection sensors.** Object sensors cover the labels person, vehicle, animal, and package.
- **Sensors** across the `binary_sensor`, `sensor`, `switch`, `light`, `siren`, `lock`, `cover`, and `alarm_control_panel` domains. Switches, lights, sirens, locks, covers, and alarm panels are controllable from Home Assistant; contact and measurement sensors are read-only.
- **A PTZ service**, `cameraui.ptz`, for continuous, stop, move, absolute, preset, and home actions.

On top of that, the integration registers the `cameraui-card` Lovelace resource, embeds the full camera.ui web UI as a sidebar panel, and fires a `cameraui_event` on the HA event bus for every detection, with device triggers wired up for the automation editor. Setup can start from zeroconf: camera.ui advertises itself over mDNS, so host and port are pre-filled and you only enter an access token.

See **[Integration](/home-assistant/integration)** for the full setup.

## MQTT discovery

Use this only if you already run an MQTT broker and want camera.ui to speak through it. Its one real advantage is that it needs no custom component and no HACS: the camera.ui server publishes retained discovery configs, and Home Assistant's built-in MQTT integration picks them up.

You turn it on in the camera.ui server's MQTT settings (enable HA discovery). You get status, motion, and object binary sensors, a snapshot camera image, and the same controllable sensor domains as the integration. What you do not get: a live stream (snapshot only), the PTZ service, the sidebar panel, the auto-registered card, or the `cameraui_event` bus events. MQTT does add one thing the integration handles differently: a dedicated per-camera connectivity sensor.

MQTT discovery is documented with the rest of the broker settings on the [MQTT admin page](/admin/mqtt).

## Integration vs MQTT discovery

| | Integration | MQTT discovery |
|---|---|---|
| Needs an MQTT broker | No | Yes |
| Custom component / HACS | Required | Not needed |
| Live camera stream | Yes | Snapshot only |
| Motion & object sensors | Yes | Yes |
| Controllable sensors | Yes | Yes |
| PTZ service | Yes | No |
| Per-camera connectivity sensor | No separate one | Yes |
| Embedded web UI panel | Yes | No |
| Lovelace card auto-registered | Yes | No |
| `cameraui_event` + device triggers | Yes | No |
| Discovery | zeroconf (mDNS) | over MQTT |

## The Lovelace card

The `cameraui-card` shows a camera's live stream with a PTZ overlay on your dashboards. With the integration it is registered for you automatically; you just add it to a view.

See **[Lovelace card](/home-assistant/card)** for how to place and configure it.

## Next steps

- **[App](/home-assistant/app)** — run the camera.ui server inside Home Assistant OS.
- **[Integration](/home-assistant/integration)** — connect a camera.ui server and get cameras, sensors, and PTZ as HA entities.
- **[Lovelace card](/home-assistant/card)** — put a camera with PTZ on your dashboard.

