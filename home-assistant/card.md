---
title: Dashboard Cards
---

# Dashboard Cards

The camera.ui integration ships two custom Lovelace cards for your Home Assistant dashboards:

- **camera.ui Card.** A single-camera live view.
- **camera.ui Grid.** A grid of live tiles, click any tile to go live.

Both cards stream through Home Assistant, show a snapshot poster until you go live, and expose resolution, transport and PTZ controls for cameras that support them.

<Shot src="/img/home-assistant/card.png" alt="camera.ui single-camera card with a live stream and player controls" />

## Before you start

Set up the [camera.ui integration](/home-assistant/integration) first. When the integration loads, it serves the card bundle and registers it as a Lovelace resource for you. There is no manual resource step: the cards are available in the card picker as soon as the integration is running.[^resource]

## Add a card

1. Open a dashboard and choose **Edit dashboard**, then **Add card**.
2. In the card picker, search for **camera.ui Card** or **camera.ui Grid**.
3. Pick the card, set the entity (or the camera list for the grid), and save.

You can also add a card in YAML mode. The card `type:` values are `cameraui-card` and `cameraui-grid-card`.

The single card checks its entity and shows an inline message instead of a stream when something is off: **No entity configured**, **Entity not found**, or **Not a camera.ui camera entity** if the entity isn't a camera.ui camera. The grid card skips any entity it can't resolve and shows **No cameras configured** when none are left.

## camera.ui Card

The single-camera card. `entity` is required.

```yaml
type: cameraui-card
entity: camera.front_door
title: Front Door
source: high-resolution
mode: auto
autostart: false
snapshot_interval: 10
```

Options:

- **entity.** Required. The camera.ui camera entity to show.
- **title.** Overlay title. Defaults to the entity's friendly name or camera name.
- **source.** Which resolution role to start on: `high-resolution`, `mid-resolution` or `low-resolution`. Defaults to `high-resolution`.
- **mode.** Streaming transport: `auto`, `webrtc` or `mse`. Defaults to `auto`, which picks WebRTC or MSE for you.
- **autostart.** Go live immediately instead of showing the poster first. Defaults to `false`.
- **snapshot_interval.** How often the snapshot poster refreshes, in seconds. Defaults to `10`, minimum `2`.

## camera.ui Grid

The grid card shows several cameras as live tiles. `cameras` is required.

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

Options:

- **cameras.** Required. A list of camera.ui camera entity ids.
- **columns.** Number of columns. When you leave it out, the grid uses 1 column for a single camera, 2 for up to four, and 3 above that.
- **source, mode, autostart.** Same meaning as on the single card, applied to every tile.

## Streaming

The card shows a snapshot poster until you go live. A small badge in the bottom-left corner shows how old the snapshot is (`now`, seconds, minutes or hours). Click the play button, or set `autostart: true`, to open the live stream.

The live stream runs through the streaming engine over WebRTC or MSE, proxied through Home Assistant so nothing needs to be exposed directly. With `mode: auto` the card picks the transport; the mode pill lets you cycle **AUTO → WebRTC → MSE** while watching. H.265 cameras are supported too.[^backend]

When a camera has more than one resolution role, a resolution pill switches between **HD**, **MD** and **SD**. Controls appear on hover: pause and play, mute, picture-in-picture, and fullscreen. Narrow cards hide the extra controls to keep the video clear.[^responsive]

## PTZ controls

Cameras that expose PTZ get an on-video overlay when the card is wide enough: a zoom slider on the left and a pan/tilt pad on the right. Holding a control sends a continuous move; releasing stops it. If the camera has a home preset, tapping the pad sends it home. The overlay only shows the controls the camera actually supports.

<Shot src="/img/home-assistant/card-ptz.png" alt="camera.ui card with the PTZ overlay showing a zoom slider and a pan and tilt pad" />

Under the hood the overlay calls the `cameraui.ptz` service, so you can drive the same camera from your own automations.

## What the cards do not do

The cards are live view only. They do not draw detection boxes or object-sensor badges, and there is no recordings or events timeline inside the card. For object sensors, device triggers and the `cameraui_event` bus event, see the [integration page](/home-assistant/integration).

[^resource]: In storage-mode dashboards the integration creates or updates the Lovelace resource with a content-hashed URL. In YAML-mode dashboards it injects the script for the session instead. Either way, you do not add a resource by hand.
[^backend]: The stream backend is go2rtc, proxied through Home Assistant. Codec handling, including H.265, lives in the shared streaming component the card embeds.
[^responsive]: The pills hide below 300px card width, picture-in-picture below 260px, mute below 200px, and the PTZ overlay needs at least 340px.

## Next steps

- **[Home Assistant integration](/home-assistant/integration)** — set up the integration, object sensors and automations.
