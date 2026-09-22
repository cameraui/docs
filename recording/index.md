---
title: Recording (NVR)
---

# Recording (NVR)

Recording and everything in this section need an active camera.ui subscription.[^license]

::: info Preview phase
Subscriptions aren't open yet. While camera.ui is in preview, recording is free for everyone with a camera.ui account, no card needed: create one at [cloud.cameraui.com](https://cloud.cameraui.com/) and follow the steps below. If the license does not activate, ask on our [Discord](https://discord.gg/bBGnGcbz8N).
:::


## Turning on recording

Recording comes from the **camera.ui NVR** plugin, which is installed by default, and runs on a subscription tied to your camera.ui account. To turn it on:

1. In **Settings → Remote Access**, choose **Register server** and sign in with your camera.ui account. This links the server to your account; you don't need to enable remote cloud access for it.
2. Open **Settings → Recordings** and, in the **License & Cloud** card, click the **cloud icon** and sign in.
3. Your license then activates automatically. If the status doesn't update, use the **Refetch License** button.

With an active license, new cameras start recording on their own while a camera slot is free: continuously, in every stream quality. Mode, qualities and on/off are in the camera's recording settings.

### Camera slots

The **License & Cloud** card in **Settings → Recordings** shows how many recording slots your plan includes, how many cameras are active, and how many currently use a slot.

Slots go to your enabled cameras in order. A camera past the limit keeps detecting, its events and its live view, but does not record and shows no warning, so check that card if footage is missing from one camera. Turning off recording on a camera frees its slot for another.

If your subscription lapses, recording stops and playback, export, face recognition and search ask for a valid license. **Nothing on disk is deleted**, it all comes back when the license is valid again. A failed cloud check is not the same thing: recording carries on while camera.ui retries.

## Recording modes

<Shot src="/img/recording/recording-modes.png" alt="Recording mode settings" />

Each camera records in one of three modes, set in its recording settings:

- **Continuous.** Records around the clock. Uses the most storage.
- **Event.** Records only when something happens (motion, an object, a sensor). A **pre-buffer** keeps a few seconds before each trigger.
- **Ad-hoc.** Connects to the camera only when an event fires. For cameras that stop sending events while a stream is open, such as some battery cameras.

## Quality

Record one or more stream qualities: **high**, **mid**, **low**. Also recording the low stream makes scrubbing the [timeline](/recording/timeline-playback) fast.

## Next

- **[Storage & retention](/recording/storage)** — where recordings live and how long they're kept.
- **[Timeline & playback](/recording/timeline-playback)** — review footage.
- **[Export & download](/recording/export)** — save a clip.
- **[Browsing & filters](/recording/browsing)** — find past events.

[^license]: Recording (NVR) requires an active camera.ui subscription.
