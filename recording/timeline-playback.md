---
title: Timeline & playback
---

# Timeline & playback

Open a camera and use its **timeline** to scrub through recorded footage. Drag along the timeline to move through time; marks show where events happened.

<Shot src="/img/recording/timeline.png" alt="Recording timeline and scrubber" />

## Reviewing footage

- **Scrub** smoothly along the timeline. camera.ui uses the low-resolution stream for scrubbing, so it stays fast.
- **Play and pause**, skip 30 seconds back or forward, and change the **speed** between 0.25x and 8x.
- **See what happened** at a glance. Event marks on the timeline show a thumbnail. Click one to jump to that moment.
- **Spot rings and alarms.** A doorbell press, siren, security system or contact event shows as a full event bar with its own icon and a snapshot, even when the camera saw nothing. It stands out instead of hiding between motion marks. A ring during an already-running motion event appears right away, not after the motion ends.[^conf]
- **Filter by event type.** The filter button picks which event types show, on the timeline and in the detections list. The choice sticks between visits.
- **Filter by zone.** In the filter, turn on **Filter by zone** and mark areas on the camera picture to keep only events detected inside them.
- **Zoom** the timeline in and out, from a broad overview down to seconds-level detail. At the deepest zoom level scrubbing becomes frame-accurate and the timeline shows a **Fine Scrubbing** badge.
- **Jump to a day** with the calendar, which highlights the days that have footage.

## Timeline or detections

On the camera page the panel has two views you can switch between. **Timeline** is the scale you scrub. **Detections** replaces it with a list of what was detected: day, time, duration, a preview image and icons for the detected types. Click an entry to jump straight to it.

## Several cameras at once

In [Camview](/cameras/camview), the timeline follows the camera you open. Only that camera decodes, so scrubbing stays fast even in a busy layout, and the timeline shows its recordings and events. The event filter can bring the other cameras' events back into view; with all shown, click another camera's event to jump to it.

## Trimming

Select the **Export** button on the timeline to turn on trimming. Drag the handles to set the start and end, then export the selection. See [Export & download](/recording/export).

## Deleting a range

Admins can delete recorded footage straight from the timeline. Select **Delete recordings**, drag the handles over the span you want gone, then **Delete selection**. The footage and every event inside it are removed for good, worked out per minute, and the change shows on every open device. The most recent minutes are still being written and can't be deleted yet, so wait a bit and try again.

[^conf]: For these events to also pass the **Only with recording** and confidence filters under Recordings, update the NVR plugin.
