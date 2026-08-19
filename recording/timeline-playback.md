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

## Playback quality

Each camera has a **Playback source** in its [settings](/cameras/settings), under **Interface**: **Auto**, **High**, **Mid** or **Low**. Auto is the default and the one to keep.

A recording can have a hole in one quality and not in another, for example when the high stream dropped out for a few minutes while the low one kept going. On Auto, playback takes the best quality that actually has footage for the spot you are at, and a badge names the quality on screen while it is not the top one. Once the high recording resumes, it switches back on its own. Pin a quality instead of Auto and playback stays on it, hole included.

## When a camera was not recording

Bands under the timeline say what the camera was doing when there is no footage:

- **offline** means the camera recorded nothing at all.
- **recording without high** (or another quality) means only that one stream stopped, so there is still footage, just not in every quality. This is where Auto above earns its keep.

A band starts where the recording really stopped and ends where it resumed, so it lines up with the recording bars instead of the moment camera.ui noticed. Blips shorter than 15 seconds paint no band, a reconnect does not litter the timeline.

An outage often rolls through phases: the high stream goes first, then the rest follows, then one comes back before the other. Those phases sit next to each other in one band, each with its own color, labeled with how long the whole thing lasted. Point at it to read the phases one by one.

## Timeline or detections

On the camera page the panel has two views you can switch between. **Timeline** is the scale you scrub. **Detections** replaces it with a list of what was detected: day, time, duration, a preview image and icons for the detected types. Click an entry to jump straight to it.

## Several cameras at once

In [Camview](/cameras/camview), the timeline follows the camera you open. Only that camera decodes, so scrubbing stays fast even in a busy layout, and the timeline shows its recordings and events. The event filter can bring the other cameras' events back into view; with all shown, click another camera's event to jump to it.

## Trimming

Select the **Export** button on the timeline to turn on trimming. Drag the handles to set the start and end, then export the selection. See [Export & download](/recording/export).

## Deleting a range

Admins can delete recorded footage straight from the timeline. Select **Delete recordings**, drag the handles over the span you want gone, then **Delete selection**. The footage and every event inside it are removed for good, worked out per minute, and the change shows on every open device. The most recent minutes are still being written and can't be deleted yet, so wait a bit and try again.

[^conf]: For these events to also pass the **Only with recording** and confidence filters under Recordings, needs a current camera-ui-nvr.
