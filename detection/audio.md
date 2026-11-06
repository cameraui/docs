---
title: Audio detection
---

# Audio detection

Audio detection listens to a camera's audio for specific sounds, such as glass breaking, an alarm, or a dog barking. It runs alongside video detection and can trigger events and notifications on its own. The camera needs to provide an audio stream.

## Setup

Enable the audio plugin for a camera in [Settings → Plugins](/cameras/settings) (see [Set up sensors](/sensors/setup)). The plugin has no settings of its own: it listens for the sounds selected on the camera and takes its confidence from there.

The sounds it recognizes are glass breaking, screaming, gunshots, alarms (smoke, car, siren), a doorbell, knocking, a dog bark, a cat, a baby crying, and speech.

## Settings on the camera

Audio detection is tuned in [Settings → Detection](/cameras/settings), per camera:

- **Sounds.** Which sounds count for events and automations. All are selected by default. **Other sounds** covers everything outside the list, including the plain audio alarm some cameras report. With nothing selected, no sound counts.
- **Min. volume (dBFS).** Audio frames below this level are skipped. Ranges from -100 (silence) to 0 (maximum), default -40.
- **Audio confidence.** Sounds the detector is less sure about than this are dropped (0 to 1, default 0.7).
- **Audio timeout.** How long an audio event stays active after the last trigger (minimum 10 seconds).

