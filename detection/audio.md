---
title: Audio detection
---

# Audio detection

Audio detection listens to a camera's audio for specific sounds, such as glass breaking, an alarm, or a dog barking. It runs alongside video detection and can trigger events and notifications on its own. The camera needs to provide an audio stream.

## Setup

Enable the audio plugin for a camera in [Settings → Plugins](/cameras/settings) (see [Set up sensors](/sensors/setup)). In its settings:

- **Listen labels.** Choose which sounds to detect.
- **Confidence threshold.** How sure it must be before reporting a sound (0.1 to 1).

The sounds it can recognise include glass breaking, screaming, gunshots, alarms (smoke, car, siren), a doorbell, knocking, a dog bark, a cat, a baby crying, and speech.

## Volume gate and timeout

Two more settings live on the camera itself, in [Settings → Detection](/cameras/settings):

- **Min. volume (dBFS).** Audio frames below this level are skipped, so quiet background noise is never analysed. Ranges from -100 (silence) to 0 (maximum), default -40.
- **Audio timeout.** How long an audio event stays active after the last trigger (minimum 10 seconds).
