---
title: Live view
---

# Live view

Open any camera to watch it live.

<Shot src="/img/cameras/live-view.png" alt="Live view player with the control bar" />

## Player controls

- **Play / pause** the live stream.
- **Mute / unmute** for cameras with audio.
- **Two-way talk** to speak through the camera (see below).
- **Fullscreen** and **Picture-in-Picture** to pop the video into a floating window. In fullscreen the control bar also has **Shortcuts** and a timeline button that lays the timeline over the video.
- **Digital zoom** by scrolling or pinching, up to 5×, with a minimap. Drag to pan when zoomed in. The crop holds while you scrub the timeline, until you double-click the picture or zoom back out.
- **Quality** switches the source resolution (**High**, **Mid**, or **Low Resolution**).
- **Open camera** opens the full camera page with recordings and the timeline.

When you review recordings, the player also offers rewind, fast-forward, and playback speed. See [Timeline & playback](/recording/timeline-playback).

## Detection boxes

With **Detections** on, the player draws a box around everything the camera currently sees, with the type, the confidence and the track number. A camera that reports a detection without a position gets no box.

An object that has settled, a car parked in the driveway or a bin left at the kerb, keeps its box but gets a faded label and a timer counting how long it has been standing there. A settled object triggers no new events and no notifications, see [stationary objects](/detection/events-and-detections#stationary-objects). It goes back to a normal box as soon as it moves again. On a small card the labels are left out and only the box remains.

## Two-way talk

The **Intercom** button sends your microphone to the camera's speaker, on cameras that support two-way audio.

## Second stream overlay

Give a source a **PiP Source** in the camera [settings](/cameras/settings) (Sources tab) and the player gets a **Toggle PiP** button. It shows that second stream as a small overlay on the video. Click the overlay to swap the two streams.

## Streaming modes

You set the streaming mode per camera in its [settings](/cameras/settings), where a new camera starts on **Auto**. The player also has a button to switch between WebRTC and MSE while you watch.

- **Auto** starts WebRTC and MSE together and keeps whichever connects first, so a network that blocks WebRTC still gets a picture. When the camera's codec cannot travel over WebRTC it goes straight to MSE.
- **WebRTC** gives the lowest latency.
- **MSE** is a broadly compatible fallback.
- **webrtc/tcp** sends WebRTC over TCP only. Pick it in the camera settings if some networks block the ports WebRTC normally uses. It is not available from the player button.

The setting applies to the camera view. The small players elsewhere, the zone editor, shortcut previews, the floor plan hover and the event dialog, always run on Auto.

## Activity mode: Always On and Standby

Each camera has an **Activity mode** that controls when its stream runs:

- **Always On** keeps the stream live at all times.
- **Standby** starts the stream when you open the camera and stops it again a few seconds later. Click the video to resume.
- **Activity** keeps the stream running while there is activity and lets it rest otherwise.

## Shortcuts

**Shortcuts** are controls you place on the video to jump to another camera or operate a sensor. Turn on **Edit Shortcuts** on the player to add them. See [Shortcuts](/cameras/shortcuts).

## More options

The options menu (the dots) toggles **Zones**, **Heatmap** and **Edit Shortcuts**, plus **Detections** on cameras that run motion or object detection. **AI descriptions** appears when the NVR plugin is installed. **Export** appears once the timeline is open, and saves the range you trim there. See [Detection & AI](/detection/).

Cameras with pan, tilt and zoom get their own bar at the top right of the player, with the home position, the presets saved on the camera, and the **PTZ** button for the on-screen controls. See [PTZ & autotrack](/sensors/ptz).

## The camera page

**Open camera** (or selecting a camera from the list) opens its full page: the live player, a **Recordings** tab, a list to switch between **Cameras**, **Shares** for admins, and a **Timeline** panel for jumping through footage. The **Settings** cog (admins) opens the [camera settings](/cameras/settings) drawer, where a camera's sources, zones, PTZ, detection, and more live.

To watch several cameras at once, use [Camview](/cameras/camview).
