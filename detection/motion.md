---
title: Motion detection
---

# Motion detection

Motion is the first and cheapest layer of [detection](/detection/). It watches for change in the frame and, when it sees movement, wakes the heavier AI. On its own it can also trigger recordings and notifications.

## Choosing a motion engine

camera.ui offers several motion plugins, so you can match CPU use to your hardware. Enable one for a camera in its [settings](/cameras/settings) under the Plugins tab (see [Set up sensors](/sensors/setup)):

- **Rust Motion.** Fast and efficient; a good default for most setups.
- **OpenCV.** Several algorithms with fine-grained tuning.
- **OpenCL.** GPU-accelerated, for very low CPU use.
- **WASM Motion.** Cross-platform WebAssembly.
- **Pam Diff.** Lightweight pixel-difference.
- **SMTP.** For cameras that send motion alerts by email instead of analysing the video.

## Tuning sensitivity

![Per-camera detection settings](/img/detection/detection-settings.png)

Each engine exposes its own settings (such as area, threshold, and blur) in its plugin settings, with a reset to defaults. Two settings live on the camera itself, in [Settings → Detection](/cameras/settings):

- **Motion resolution.** Low is fastest, medium is balanced, high is most accurate.
- **Motion timeout.** How long motion stays "active" after movement stops (minimum 10 seconds).

If a camera is too sensitive (a busy road, a swaying tree), limit where motion counts with [zones](/cameras/zones-and-masks).

## The cascade

When motion fires, it triggers the heavier detectors (object, face, and so on). You can also let other sensors start this cascade, for example a door contact sensor triggering object detection, under **Sensor triggers** in the camera's detection settings.
