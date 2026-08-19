---
title: Apple TV
---

# Apple TV

The Apple TV app puts your cameras on the big screen: a live wall, your events with playback, and your sensors.[^license] It's a viewer, so the server runs elsewhere (on your [desktop](/install/desktop) or a [server install](/install/)) and the app connects to it.

<Shot src="/img/install/tv-app.png" alt="The camera.ui Apple TV app" />

## Download

Currently in **beta**. Join through [TestFlight](https://testflight.apple.com/join/XWw3pmVN): install Apple's TestFlight app on your Apple TV, then open the invite.[^appstore]

| Platform | Requirement |
|---|---|
| Apple TV | tvOS 17 or newer |

## Connecting to your server

The app connects straight to your server, not through camera.ui Cloud.

On the same network, the app finds your server on its own, just pick it from the list. You can also add one by address:

- **On your network.** Enter the server's local address, for example `https://192.168.1.20:3443`.
- **From anywhere.** Enter your own public address, set up with a [custom domain](/remote/custom-domain) and a [reverse proxy](/remote/reverse-proxy).

Sign in with your username and password, plus a two-factor code if you use one, or paste an API token.[^token]

You can add more than one server and switch between them, handy if you run separate servers at home and elsewhere.

## Around the app

- **Home.** The latest activity up top, plus camera and storage status and today's event count. Select a notification to jump straight to the recording.
- **Camview.** A live wall of your cameras. Pick a grid or a mixed layout, rearrange the tiles, or open any camera fullscreen. **Fill wall** drops the borders and fills the screen with the wall.
- **Events.** Your events grouped by day, with filters for persons, faces, vehicles, animals, doorbell, sensors, sounds, and motion. Select one to play it back from that moment. Keep scrolling to reach older days.
- **Episodes.** [Episodes](/detection/episodes) show up as mosaic cards among your events and on the Home screen. Opening one plays the whole story and switches cameras on its own. Left and right jump between cameras.
- **Sensors.** Your sensors as tiles, live from the server.
- **Talk back.** In the fullscreen player, the microphone button speaks through the camera, if the camera supports two-way audio.

Playback follows each camera's [playback source](/recording/timeline-playback#playback-quality), episodes included. On Auto a gap in the high recording plays the next quality that has footage, the same as in the web interface.

### Sensors

The Sensors page lays out every sensor as a tile, grouped by type, with its current state.[^sensors]

- **Click to toggle.** Select a light, switch, siren, lock, or garage to flip it.
- **Hold for more.** Hold the select button, or press play/pause, to open a panel with brightness, volume, alarm modes, or lock and garage controls.
- **Stays in sync.** New sensors show up on their own, removed ones disappear, and states update as they change.

## Updates

The app updates through TestFlight during the beta, like any other Apple TV app.

If your server or its recording plugin is older than the app needs, the app shows an **Update needed** screen naming exactly what to bring up to date, instead of empty lists and missing pictures. Update camera.ui on the server, then reopen the app. The current beta needs camera.ui 2.1.6 or newer and the recording plugin at 1.3.13 or newer.

[^license]: An active camera.ui subscription covers recording (NVR) and the features built on it, such as playback. Live view is free.
[^appstore]: The app moves to the App Store with the public release.
[^token]: Create an [API token](/admin/security#api-tokens) in camera.ui under Settings, Account, API tokens.
[^sensors]: These are the same sensors as the web Sensors page. Detection sensors tied to a single camera stay hidden here.
