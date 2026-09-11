---
title: Events & detections
---

# Events & detections

When detection fires, camera.ui groups what it finds into an **event**. Knowing the pieces helps when you browse recordings, set up notifications, or search.

<Shot src="/img/detection/event-detections.png" alt="An event with its detections" />

## The pieces

- **Event.** Everything that happens during one continuous burst of activity at a camera. An event has a start and an end, and can update as it goes.
- **Segment.** A stretch of an event where the AI kept seeing objects, with its own thumbnail. Objects leaving and coming back start a new segment, and an event where the AI never sees an object, like a doorbell press with nobody in view, has none.
- **Detection.** Something the AI found in a segment, such as a person or a vehicle, with a confidence score.
- **Attribute.** Extra detail on a detection, such as a recognized face, a license plate, or a semantic (CLIP) embedding used for search.

## Triggers vs detections

Two things can start or shape an event:

- A **trigger** is a signal that something happened: motion, a doorbell, a contact sensor, an alarm sound. A trigger can start an event on its own.
- A **detection** is what the AI actually recognized in the video, like an object, a face, or a plate.

The difference matters for filtering and notifications: you can alert on a doorbell press (a trigger) or only when a person is seen (a detection).

## The picture an event carries

Every card, push and AI description shows one picture for the moment, and camera.ui picks the frame and the crop for it. It frames the subject, so a person arrives as a whole person, not as a close-up of a shoulder. When a face is recognized later in the same event, the "Unknown" crop is dropped rather than kept alongside the name.

A camera that reports detections without saying where in the frame they were, most Reolink AI and ONVIF cameras, gives nothing to frame. The moving part of the picture is framed instead. That is less precise than a real box, so an [object assist](/detection/ai-backends#object-assist) plugin is the better answer if you want those cameras placed properly.

## Stationary objects

A car parked in the driveway or a bin left in view would otherwise be detected again every time something moves. **Ignore stationary objects** is on by default in a camera's [Settings → Detection](/cameras/settings): once an object has held still for a while, camera.ui stops counting it as a detection, and it stays ignored across later events. You still see its box in the live view. It counts again once it moves off the spot, or if the camera pans or tilts.

## The detection trace

Every event keeps a record of what the detector actually saw. The dots menu on a card in [Recordings](/recording/browsing), and the trace icon in the event dialog, opens it.

It steps through the event frame by frame, with the pictures taken from the recording, and shows what was found on each one, keeping only a few frames around each activity so a long quiet stretch does not bury the interesting part: the objects and the tracks they belong to, the motion boxes, the raw detections before any filtering, and the zones as they stood at the time. Where something was seen but did not become an event, the trace names the reason: under the confidence threshold, inside a privacy zone, outside the object zones, a label the zone does not accept, or a track too young to be confirmed. Every track carries its state, from tentative through active, stationary and lost to departed.

Mouse wheel, pinch or a double tap zoom into a frame, the same as in the live view, so a distant animal stays readable. The pictures come from the recording, so an event without one still shows its detection data, just without frames. If the browser cannot decode the main stream, the pictures come from the smaller one and are matched by time instead of exactly.

**Download bundle** packs the whole trace into one file for a bug report.

## Where events show up

Events drive the rest of camera.ui:

- **[Recordings](/recording/browsing)** — browse and filter past events.
- **[Notifications](/notifications/)** — get alerted about the ones that matter.
- **[Semantic search](/detection/semantic-search)** — find events by describing them.
