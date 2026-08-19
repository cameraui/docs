---
title: Recording (NVR)
---

# Recording (NVR)

camera.ui records your cameras so you can go back and watch what happened. Recording and everything in this section need an active camera.ui subscription.[^license]

::: info Trying recording during the beta
Subscriptions aren't open for purchase yet. To test recording, create your camera.ui account at [cloud.cameraui.com](https://cloud.cameraui.com/), then ask for a trial on our [Discord](https://discord.gg/bBGnGcbz8N).
:::


## Turning on recording

Recording comes from the **camera.ui NVR** plugin, which is installed by default, and runs on a subscription tied to your camera.ui account. To turn it on:

1. In **Settings → Remote Access**, choose **Register server** and sign in with your camera.ui account. This links the server to your account; you don't need to enable remote cloud access for it.
2. Open **Settings → Recordings** and, in the **License & Cloud** card, click the **cloud icon** and sign in.
3. Your license then activates automatically. If the status doesn't update, use the **Refetch License** button.

Once the license is active, cameras you add start recording on their own, as long as your subscription still has a free camera slot. A new camera records continuously in every stream quality. You can change the mode, pick which qualities to record, or turn recording off in the camera's recording settings.

### Camera slots

The **License** card in **Settings → Recordings** shows how many recording slots your plan includes, how many cameras are active, and how many currently use a slot.

Slots go to your enabled cameras in order. A camera past the limit keeps detecting, keeps its events and its live view, and simply does not record, without a warning of its own, so check the numbers on that card if footage is missing from one camera. Turning off recording on a camera you care less about frees its slot for another.

If your subscription lapses, recording stops and playback, export, face recognition and search ask for a valid license. **Nothing on disk is deleted**, it all comes back when the license is valid again. A failed cloud check is not the same thing: recording carries on while camera.ui retries.

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
