---
title: Camera settings
---

# Camera settings

Every camera has a settings drawer where you configure how it connects, what it detects, and how it behaves. Open it with the **Settings** (cog) button on the camera. It is available to admins.

<Shot src="/img/cameras/settings-drawer.png" alt="Camera settings drawer" />

The drawer has four tabs.

## Overview

The camera's status and device info, plus a live view of its sensors and accessories. Read-only sensors (contact, temperature, motion, and so on) show their current state, and you can operate the controllable ones right here, such as turning a light on, locking a door, or arming a security system.

## Sources

Add, change, and remove the camera's stream [sources](/cameras/add-camera#sources-and-roles) here, just like when [adding a camera](/cameras/add-camera): each source's name, role (high, mid, low resolution, or snapshot), stream URLs, and options such as hot mode, preload, and mute audio (drops the audio track from that source). Each source also shows its live status, detected codecs, and stream URL.

## Settings

The main configuration form, grouped into sections:

- **General.** Name, room, camera type, and whether the camera is disabled (also where you remove a camera).
- **Branding.** Manufacturer, model, and other device details.
- **Interface.** Everything about how this camera is shown and played: the [streaming mode and source](/cameras/live-view#streaming-modes), the [playback source](/recording/timeline-playback#playback-quality) for recordings, the [activity mode](/cameras/live-view#activity-mode-always-on-and-standby), and the display aspect ratio. For the ratio, pick a preset (16:9, 4:3, 1:1, and more) or type a custom `width:height` like `21:9`, with a live preview of the camera framed at that ratio.
- **Detection.** Per-camera tuning for motion, object, audio, face, license plate and sensor detection: sensitivity, confidence, timeouts, triggers and stationary-object handling, plus a snooze switch. The confidence values the AI backends use come from here, so a change applies right away. Which object types the camera reports is set in **Zones**. See [Detection & AI](/detection/).
- **Recording.** Whether and how this camera is recorded: the mode, the pre-buffer, and which streams go to disk. An installed NVR plugin does the recording. See [Recording](/recording/).
- **Notifications.** What this camera pushes to your phone: the camera's own on/off switch, video in push, which sounds and sensors notify, the cooldown and the notification speed. Which detections notify you is set in **Zones**, on the alert zones. See [Notifications](/notifications/).
- **Autotrack.** Let a PTZ camera follow detected objects automatically. See [PTZ & autotrack](/sensors/ptz).
- **Snapshot.** How still images are refreshed and cached (auto-refresh, cache time, and refresh interval).
- **Zones.** Draw motion, object, alert and privacy zones, and crossing lines. See [Zones & privacy](/cameras/zones-and-masks).
- **Frame Worker.** Picks the decoder hardware (CUDA, VAAPI, Quick Sync, and more) and device for this camera. Auto chooses the best available. A second decoder selection applies while the camera decodes on an assigned [worker](/admin/workers), so host and worker can use different GPUs; on Same as server the worker uses the first selection. **Main stream without GPU** forces detection onto the high-resolution stream on CPU-only systems, where it costs real processing power; with a hardware decoder the high-resolution stream is already analysed when something is detected, so leave it off.

## Plugins

Enable plugins for this camera and choose which provides each of its [sensors and accessories](/sensors/). This is also where you turn individual sensors on or off and adjust the settings a plugin offers per camera. See [Set up sensors](/sensors/setup) for the full walkthrough.
