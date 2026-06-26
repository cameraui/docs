---
title: Live view
---

# Live view

Open any camera to watch it live.

![Live view player with the control bar](/img/cameras/live-view.png)

## Player controls

- **Play / pause** the live stream.
- **Volume / mute** for cameras with audio.
- **Two-way talk** to speak through the camera (see below).
- **Fullscreen** and **Picture-in-Picture** to pop the video into a floating window.
- **Digital zoom** by scrolling or pinching, up to 5×, with a minimap. Drag to pan when zoomed in.
- **Quality** switches the source resolution (**High**, **Mid**, or **Low Resolution**).
- **Open camera** opens the full camera page with recordings and the timeline.

When you review recordings, the player also offers rewind, fast-forward, and playback speed. See [Timeline & playback](/recording/timeline-playback).

## Two-way talk

The **Intercom** button sends audio from your device's microphone to the camera's speaker, so you can talk through a doorbell or camera. It is available on cameras that support two-way audio, and your browser or the app asks for microphone access the first time.

## Streaming modes

camera.ui can stream live video in a few ways. You set the default per camera in its [settings](/cameras/settings), and can switch on the fly from the player:

- **Auto** picks the best mode for your device and network, and is the simplest choice.
- **WebRTC** gives the lowest latency.
- **MSE** is a broadly compatible fallback.

## Activity mode: Always On and Standby

Each camera has an **Activity mode** that controls when its stream runs, balancing responsiveness against resource use:

- **Always On** keeps the stream live at all times, for instant viewing.
- **Standby** pauses the stream after a short idle and resumes it when you open the camera. A paused camera shows "Stream paused to conserve resources."
- **Activity** keeps the stream running while there is activity and lets it rest otherwise.

## Shortcuts

**Shortcuts** are controls you place on the video to jump to another camera or operate a sensor. Turn on **Edit Shortcuts** on the player to add them. See [Shortcuts](/cameras/shortcuts) for the full feature.

## More options

The options menu (the dots) gives quick access to a camera's **Detections**, **Zones**, **Heatmap**, and **AI descriptions**, plus **Export**. A **PTZ** button appears on cameras that support pan, tilt, and zoom. See [PTZ & autotrack](/sensors/ptz) and [Detection & AI](/detection/).

## The camera page

**Open camera** (or selecting a camera from the list) opens its full page: the live player, a **Recordings** tab, a list to switch between **Cameras**, **Shares** for admins, and a **Timeline** panel for jumping through footage. The **Settings** cog (admins) opens the [camera settings](/cameras/settings) drawer, where a camera's sources, zones, PTZ, detection, and more live.

To watch several cameras at once, use [Camview](/cameras/camview).
