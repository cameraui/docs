# What is camera.ui?

**camera.ui** is a self-hosted platform for your security cameras. It combines live viewing, continuous and event-based recording, on-device AI detection, and smart-home integration in one modern interface, all on hardware you own.

Because everything runs on your own server, your footage stays on hardware you control. There is no mandatory cloud, and no third party holds a copy of your recordings. Remote access is available when you want it, always on your terms.

::: tip New here?
Head to **[Getting started](/intro/getting-started)** for a guided first run, or jump straight to **[Installation](/install/)**.
:::

## What you can do

- **Watch live.** Low-latency streaming over WebRTC and MSE, multi-camera grids, two-way talk, PTZ control, and snapshots.
- **Record around the clock.**[^license] Continuous, event-based, or ad-hoc recording, with a scrubbable timeline, synchronized multi-camera playback, and MP4 / timelapse export.
- **Detect what matters.** Motion, object, face, license-plate, and audio detection, all running locally on your own hardware, plus semantic search and AI-generated event descriptions.
- **Stay informed.**[^license] Per-camera push notifications, known-faces-only alerts, quiet hours, and critical alerts that always get through.
- **Connect your cameras.** Add cameras over ONVIF and dozens of other protocols, and bridge them into your smart home via Apple HomeKit[^smarthome].
- **Extend it.** A plugin system lets you add cameras, detectors, and integrations from an in-app store.

## Live demo

Want to look around before installing? Take a look at the **[live demo](https://demo.cameraui.com/)**.

## Run it your way

camera.ui adapts to your setup:

- **Desktop app** for macOS, Windows, and Linux. The easiest way to get started, running the server and viewer in one app.
- **Server** for always-on setups: Docker, Proxmox, or bare-metal Linux.
- **Mobile apps** for iOS and Android, to keep an eye on your cameras while you're out.

Not sure which to pick? See **[Which installation?](/install/)**.

## How it works

A single server does the heavy lifting. It connects to your cameras, records footage, runs detection, and serves the web interface, while the desktop and mobile apps act as viewers. For the bigger picture, read **[How it works](/intro/architecture)**.

## Next steps

- **[Getting started](/intro/getting-started)** — set up camera.ui for the first time
- **[Add a camera](/cameras/add-camera)** — connect your first camera
- **[Recording (NVR)](/recording/)** — configure 24/7 and event recording
- **[Detection & AI](/detection/)** — set up motion and object detection

[^license]: An active camera.ui subscription covers recording (NVR) and the features built on it, such as playback, export, face recognition, semantic search, and AI descriptions, plus push notifications. Live view and real-time detection are free.
[^smarthome]: Google Home and Alexa support is planned.
