---
title: Audio detection
---

# Audio detection

Audio detection listens to a camera's audio for specific sounds, such as glass breaking, an alarm, or a dog barking. It runs alongside video detection and can trigger events and notifications on its own. The camera needs to provide an audio stream.

## Setup

Enable the audio plugin for a camera in [Settings → Plugins](/cameras/settings) (see [Set up sensors](/sensors/setup)). That is the whole setup: the plugin has no settings of its own, it listens for the standard sound list and takes its confidence from the camera.

The sounds it recognizes are glass breaking, screaming, gunshots, alarms (smoke, car, siren), a doorbell, knocking, a dog bark, a cat, a baby crying, and speech.[^yamnet]

## Settings on the camera

Audio detection is tuned in [Settings → Detection](/cameras/settings), per camera:

- **Min. volume (dBFS).** Audio frames below this level are skipped, so quiet background noise is never analysed. Ranges from -100 (silence) to 0 (maximum), default -40.
- **Audio confidence.** Sounds the detector is less sure about than this are dropped (0 to 1, default 0.7). Raise it if you get false glass-break or gunshot alarms, lower it if real ones are missed.
- **Audio timeout.** How long an audio event stays active after the last trigger (minimum 10 seconds).

[^yamnet]: Needs camera-ui-audio-yamnet 1.2.4 or newer.
