# What is camera.ui?

**camera.ui** is a self-hosted platform for your security cameras. It combines live viewing, continuous and event-based recording, on-device AI detection, and smart-home integration in one interface, all on hardware you own.

There is no mandatory cloud, and no third party holds a copy of your recordings. Remote access is optional.

::: tip New here?
Head to **[Getting started](/intro/getting-started)** for a guided first run, or jump straight to **[Installation](/install/)**.
:::

::: info Work in progress
If something is missing or unclear, tell us on [Discord](https://discord.gg/bBGnGcbz8N) or open an issue on [GitHub](https://github.com/cameraui/docs/issues).
:::

## What you can do

- **Watch live.** Low-latency streaming over WebRTC and MSE, multi-camera grids, two-way talk, PTZ control, and snapshots. A floor plan of your home shows which camera is seeing something right now.
- **Record around the clock.**[^license] Continuous, event-based, or ad-hoc recording, with a scrubbable timeline, synchronized multi-camera playback, and MP4 / timelapse export.
- **Detect what matters.** Motion, object, face, license-plate, and audio detection, all running locally on your own hardware, plus semantic search and AI-generated event descriptions.
- **Stay informed.**[^license] Per-camera push notifications, alerts limited by area, object type or the people you name, quiet hours, and critical alerts that always get through.
- **Connect your cameras.** Add cameras over ONVIF and dozens of other protocols, and bridge them into your smart home via Apple HomeKit or Home Assistant (over MQTT)[^smarthome].
- **Extend it.** A plugin system lets you add cameras, detectors, and integrations from an in-app store.

## Live demo

Try the **[live demo](https://demo.cameraui.com/)** before installing.

## Run it your way

- **Desktop app** for macOS, Windows, and Linux. The easiest way to get started, running the server and viewer in one app.
- **Server** for always-on setups: Docker, Proxmox, or bare-metal Linux.
- **Mobile apps** for iOS and Android.

Not sure which to pick? See **[Which installation?](/install/)**.

## How it works

One server connects to your cameras, records, runs detection and serves the web interface. The desktop and mobile apps are viewers. More in **[How it works](/intro/architecture)**.

## Next steps

- **[Getting started](/intro/getting-started)** — set up camera.ui for the first time
- **[Add a camera](/cameras/add-camera)** — connect your first camera
- **[Recording (NVR)](/recording/)** — configure 24/7 and event recording
- **[Detection & AI](/detection/)** — set up motion and object detection

[^license]: An active camera.ui subscription covers recording (NVR) and the features built on it, such as playback, export, face recognition, semantic search, and AI descriptions, plus push notifications. Live view and real-time detection are free.
[^smarthome]: Google Home and Alexa support is planned.
