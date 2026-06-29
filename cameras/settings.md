---
title: Camera settings
---

# Camera settings

Every camera has a settings drawer where you configure how it connects, what it detects, and how it behaves. Open it with the **Settings** (cog) button on the camera. It is available to admins.

![Camera settings drawer](/img/cameras/settings-drawer.png)

The drawer has four tabs.

## Overview

The camera's status and device info, plus a live view of its sensors and accessories. Read-only sensors (contact, temperature, motion, and so on) show their current state, and you can operate the controllable ones right here, such as turning a light on, locking a door, or arming a security system.

## Sources

Add, change, and remove the camera's stream [sources](/cameras/add-camera#sources-and-roles) here, just like when [adding a camera](/cameras/add-camera): each source's name, role (high, mid, low resolution, or snapshot), stream URLs, and options such as hot mode and preload. Each source also shows its live status, detected codecs, and stream URL.

## Settings

The main configuration form, grouped into sections:

- **General.** Name, room, camera type, and whether the camera is disabled (also where you remove a camera).
- **Branding.** Manufacturer, model, and other device details.
- **Interface.** The [streaming mode and source](/cameras/live-view#streaming-modes), and the aspect ratio.
- **Detection.** Per-camera tuning for motion, object, audio, and sensor detection (sensitivity, confidence, timeouts, and triggers), plus a snooze switch. See [Detection & AI](/detection/).
- **Autotrack.** Let a PTZ camera follow detected objects automatically. See [PTZ & autotrack](/sensors/ptz).
- **Zones.** Draw detection zones, privacy masks, and crossing lines. See [Zones, masks & lines](/cameras/zones-and-masks).
- **Snapshot.** How still images are refreshed and cached (auto-refresh, cache time, and refresh interval).
- **Frame Worker.** The frame rate used for analysis.

## Plugins

Enable plugins for this camera and choose which provides each of its [sensors and accessories](/sensors/). This is also where you turn individual sensors on or off and adjust the settings a plugin offers per camera. See [Set up sensors](/sensors/setup) for the full walkthrough.
