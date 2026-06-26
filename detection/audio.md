---
title: Audio detection
---

# Audio detection

Audio detection listens to a camera's audio for specific sounds, such as glass breaking, an alarm, or a dog barking. It runs alongside video detection and can trigger events and notifications on its own. The camera needs to provide an audio stream.

## Setup

Enable the audio plugin for a camera in [Settings → Plugins](/cameras/settings) (see [Set up sensors](/sensors/setup)). In its settings:

- **Listen labels.** Choose which sounds to detect.
- **Confidence threshold.** How sure it must be before reporting a sound (0 to 1).

The sounds it can recognise include glass breaking, screaming, gunshots, alarms (smoke, car, siren), a doorbell, knocking, a dog bark, a baby crying, and speech.

## Volume gate

A camera also has a **minimum volume** setting in [Settings → Detection](/cameras/settings), so quiet background noise is ignored. Below that level, nothing is analysed.
