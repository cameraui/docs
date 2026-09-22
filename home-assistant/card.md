---
title: Dashboard cards
---

# Dashboard cards

Three cards put camera.ui on a Home Assistant dashboard: a camera, a saved [camview](/cameras/camview) view, and a strip of recent events. A click opens the camera.ui dialog with the live picture and the timeline, inside Home Assistant.

The cards are served by your camera.ui server, so they always match the version you run. Home Assistant keeps a copy, so a dashboard still renders while the server is down.

<Shot src="/img/home-assistant/cards.png" alt="A Home Assistant dashboard with the events strip, three camera cards and a camview view" />

## Before you start

Set up the [integration](/home-assistant/integration) first. It registers the cards for you, so they appear in the card picker with no resource to add by hand.

Who may use them is an integration option: **Administrators only** by default, or all Home Assistant users. See [card access](/home-assistant/integration#card-access).

## camera.ui Camera

One camera, as the snapshot tile you know from the home view or as the full live player.

```yaml
type: custom:cameraui-card
entity: camera.front_door
mode: snapshot
click: popup
```

- **entity.** Required. A camera.ui camera entity.
- **mode.** `snapshot` (default) shows the tile with its refreshing picture, `live` runs the player.
- **click.** What a click does: `popup` (default) opens the camera.ui dialog, `ha` jumps to the camera in the sidebar panel, `none` does nothing.
- **title.** Overrides the name shown on the card.
- **fit.** `contain` (default) shows the whole picture, `cover` fills the card and crops.
- **controls** and **toolbar.** Turn the player controls or the toolbar above them off.
- **detection_indicator.** Turn off the marker that lights up while the camera detects something.

## camera.ui View

A camview view as a widget: the cameras you arranged there, in the same layout.

```yaml
type: custom:cameraui-view-card
view: Garden
```

- **view.** The name of the view to show. Without it the card asks you to pick one.
- **rearrange.** Set to `false` to hide the rearrange button, so the layout cannot be changed from the dashboard.

## camera.ui Events

The recent events strip, with thumbnails. A click opens the event.

```yaml
type: custom:cameraui-events-card
entities:
  - camera.front_door
  - camera.driveway
```

- **entities.** Limits the strip to these cameras. Left out, it shows every camera.

## Next steps

- **[Home Assistant integration](/home-assistant/integration)** — entities, automations, card access and the media browser.
- **[Camview](/cameras/camview)** — build the views the view card shows.
