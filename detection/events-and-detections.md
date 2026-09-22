---
title: Events & detections
---

# Events & detections

When detection fires, camera.ui groups what it finds into an **event**.

<Shot src="/img/detection/event-detections.png" alt="An event with its detections" />

## The pieces

- **Event.** Everything that happens during one continuous burst of activity at a camera. An event has a start and an end, and can update as it goes.
- **Segment.** A stretch of an event where the AI kept seeing objects, with its own thumbnail. Objects leaving and coming back start a new segment, and an event where the AI never sees an object, like a doorbell press with nobody in view, has none.
- **Detection.** Something the AI found in a segment, such as a person or a vehicle, with a confidence score.
- **Attribute.** Extra detail on a detection, such as a recognized face, a license plate, or a semantic (CLIP) embedding used for search.

## Triggers vs detections

- A **trigger** is a signal that something happened: motion, a doorbell, a contact sensor, an alarm sound. A trigger can start an event on its own.
- A **detection** is what the AI actually recognized in the video, like an object, a face, or a plate.

You can filter and alert on a doorbell press (a trigger) or only when a person is seen (a detection).

## The picture an event carries

Every card, push and AI description shows one picture for the moment, and camera.ui picks the frame and the crop for it. It frames the subject, so a person arrives as a whole person, not as a close-up of a shoulder. When a face is recognized later in the same event, the "Unknown" crop is dropped rather than kept alongside the name.

A camera that reports detections without saying where in the frame they were, many Reolink and ONVIF cameras, gives nothing to frame. The moving part of the picture is framed instead, which is less precise. An [object assist](/detection/ai-backends#object-assist) plugin gives those cameras real boxes.

## Stationary objects

**Ignore stationary objects** is on by default in a camera's [Settings → Detection](/cameras/settings): once an object (a parked car, a bin) has held still for a while, camera.ui stops counting it as a detection, across later events too. Its box still shows in the live view. It counts again once it moves off the spot, or if the camera pans or tilts.

## The detection trace

Every event keeps a record of what the detector actually saw. The dots menu on a card in [Recordings](/recording/browsing), and the trace icon in the event dialog, opens it. Opened from a card it starts at the moment the card shows, from the camera view at the moment on screen. For an event that ran for hours, type a clock time above the frame strip to jump there; **Earlier frames** loads what came before.

It steps through the event frame by frame with pictures from the recording, keeping only a few frames around each activity, and shows per frame the objects and the tracks they belong to, the motion boxes, the raw detections before any filtering, the camera's own detection reports, and the zones as they stood at the time. Where something was seen but did not become an event, the trace names the reason: under the confidence threshold, inside a privacy zone, outside the object zones, a label the zone does not accept, or a track too young to be confirmed. Every track carries its state, from tentative through active, stationary and lost to departed.

Frames zoom like the live view (wheel, pinch, double tap). An event without a recording shows its detection data without frames. If the browser cannot decode the main stream, the pictures come from the smaller one and are matched by time instead of exactly.

**Download bundle** packs the whole trace into one file for a bug report.

## Where events show up

Events drive the rest of camera.ui:

- **[Recordings](/recording/browsing)** — browse and filter past events.
- **[Notifications](/notifications/)** — get alerted about the ones that matter.
- **[Semantic search](/detection/semantic-search)** — find events by describing them.
