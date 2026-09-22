---
title: Timeline & playback
---

# Timeline & playback

Each camera's **timeline** scrubs through its recorded footage, with marks where events happened.

<Shot src="/img/recording/timeline.png" alt="Recording timeline and scrubber" />

## Reviewing footage

- **Scrub** along the timeline. Scrubbing uses the low-resolution stream.
- **Play and pause**, skip 30 seconds back or forward, and change the **speed** between 0.25x and 8x.
- **Event marks** show a thumbnail. Click one to jump to that moment.
- **Rings and alarms.** A doorbell press, siren, security system or contact event shows as a full event bar with its own icon and a snapshot, even when the camera saw nothing. A ring during a running motion event appears right away, not after the motion ends.
- **Filter by event type.** The filter button picks which event types show on the timeline and in the detections list. The choice is remembered.
- **Filter by zone.** In the filter, turn on **Filter by zone** and mark areas on the camera picture to keep only events detected inside them.
- **Zoom** from an overview down to seconds. At the deepest level scrubbing is frame-accurate and the timeline shows a **Fine Scrubbing** badge.
- **Jump to a day** with the calendar. Days with footage are highlighted.

## Playback quality

Each camera has a **Playback source** in its [settings](/cameras/settings), under **Interface**: **Auto**, **High**, **Mid** or **Low**. Auto is the default and the one to keep.

A recording can have a hole in one quality and not in another, for example when the high stream dropped out while the low one kept going. On Auto, playback takes the best quality that has footage at that spot, with a badge naming it while it is not the top one, and switches back once the high recording resumes. A pinned quality stays put, hole included.

## When a camera was not recording

Bands under the timeline say what the camera was doing when there is no footage:

- **offline** means the camera recorded nothing at all.
- **recording without high** (or another quality) means only that stream stopped. There is still footage, just not in every quality, and Auto plays it.

A band spans exactly from where the recording stopped to where it resumed. Blips shorter than 15 seconds paint no band.

When an outage has phases (the high stream goes first, the rest follows, one comes back before the other), they sit side by side in one band, each in its own color, labeled with the total duration. Hover it to read the phases.

## Timeline or detections

The panel on the camera page switches between **Timeline** and **Detections**, a list of what was detected: day, time, duration, a preview image and icons for the detected types. Click an entry to jump to it.

## Several cameras at once

In [Camview](/cameras/camview), the timeline follows the camera you open and shows its recordings and events. Only that camera decodes, so scrubbing stays fast in a busy layout. The event filter can show the other cameras' events too, and clicking one jumps to it.

## Trimming

**Export** on the timeline turns on trimming: drag the handles to set start and end, then export the selection. See [Export & download](/recording/export).

## Deleting a range

Admins can delete footage from the timeline: **Delete recordings**, drag the handles over the span, then **Delete selection**. The footage and every event inside it are removed for good, per minute, on every open device. The most recent minutes are still being written and can't be deleted yet.

