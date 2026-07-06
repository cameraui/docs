---
title: Recording (NVR)
---

# Recording (NVR)

camera.ui records your cameras so you can go back and watch what happened. Recording and everything in this section need an active camera.ui subscription.[^license]

## Turning on recording

Recording comes from the **camera.ui NVR** plugin, which is installed by default, and runs on a subscription tied to your camera.ui account. To turn it on:

1. In **Settings → Remote**, choose **Register Server** and sign in with your camera.ui account. This links the server to your account; you don't need to enable remote cloud access for it.
2. Open **Settings → Recordings** and, in the **License & Cloud** card, click the **cloud icon** and sign in. It's grey when you're not connected and turns green once you are.
3. Your license then activates automatically. If the status doesn't update, use the **Refetch License** button.

## Recording modes

<Shot src="/img/recording/recording-modes.png" alt="Recording mode settings" />

Each camera records in one of three modes, set in its recording settings:

- **Continuous.** Records around the clock. You always have footage, at the cost of the most storage.
- **Event.** Records only when something happens (motion, an object, a sensor). A **pre-buffer** keeps a few seconds before each trigger, so you don't miss the lead-up.
- **Ad-hoc.** Connects to the camera only when an event fires. Useful for cameras that stop sending events while a stream is open, such as some battery cameras.

## Quality

You choose which stream qualities to record, **high**, **mid**, or **low**, and can keep more than one. Recording a low-resolution stream as well makes scrubbing the [timeline](/recording/timeline-playback) fast and smooth.

## Next

- **[Storage & retention](/recording/storage)** — where recordings live and how long they're kept.
- **[Timeline & playback](/recording/timeline-playback)** — review footage.
- **[Export & download](/recording/export)** — save a clip.
- **[Browsing & filters](/recording/browsing)** — find past events.

[^license]: Recording (NVR) requires an active camera.ui subscription.
