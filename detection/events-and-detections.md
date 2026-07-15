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
- **Attribute.** Extra detail on a detection, such as a recognised face, a license plate, or a semantic (CLIP) embedding used for search.

## Triggers vs detections

Two things can start or shape an event:

- A **trigger** is a signal that something happened: motion, a doorbell, a contact sensor, an alarm sound. A trigger can start an event on its own.
- A **detection** is what the AI actually recognised in the video, like an object, a face, or a plate.

The difference matters for filtering and notifications: you can alert on a doorbell press (a trigger) or only when a person is seen (a detection).

## Stationary objects

A car parked in the driveway or a bin left in view would otherwise be detected again every time something moves. **Ignore stationary objects** is on by default in a camera's [Settings → Detection](/cameras/settings): once an object has held still for a while, camera.ui stops counting it as a detection, and it stays ignored across later events. You still see its box in the live view. It counts again once it moves off the spot, or if the camera pans or tilts.

## Where events show up

Events drive the rest of camera.ui:

- **[Recordings](/recording/browsing)** — browse and filter past events.
- **[Notifications](/notifications/)** — get alerted about the ones that matter.
- **[Semantic search](/detection/semantic-search)** — find events by describing them.
