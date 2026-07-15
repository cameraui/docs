---
title: Zones & lines
---

# Zones & lines

Zones let you control where detection happens, ignore parts of the frame, and detect when something crosses a line. You edit them per camera, and they act on the camera's [detection](/detection/), so it needs detection set up.

## Opening the editor

Open a camera's [settings](/cameras/settings) and go to the **Settings** tab. Under **Zones** you see the zones and lines already on the camera, each with its colour, name and type (Zone, Ignore zone or Line crossing). The pencil on an entry opens the editor on it, the bin deletes it. With nothing configured yet, you only see "No zones or lines on this camera yet."

Below the list, **Edit zones** opens the editor over the camera image with two tabs: **Zones** and **Lines**.

<Shot src="/img/cameras/zone-editor.png" alt="Zone editor in the Zones tab" />

## Detection zones

On the **Zones** tab, draw a polygon by adding points on the image. A zone limits where detections count:

- **Include.** Only detections inside the zone trigger.
- **Exclude.** Detections inside the zone are ignored, for example a busy road or a swaying tree.

You can limit a zone to specific **object types** (its labels), so it reacts only to people or only to vehicles. Careful: object types are collected across all zones of a camera and act as one allow-list. As soon as any zone is limited to vehicles, person detections are dropped on the whole camera, including inside zones that have no object types set. If you only want to limit the area, leave the object types empty on every zone.

A zone also has a match mode. **Contain** is the default: a detection only counts when its whole box is inside the zone. **Intersect** counts it as soon as the box overlaps the zone at all. The mode applies to include and exclude zones alike.

## Ignore zones

Turn a zone into an **ignore zone** to leave an area out of detection completely. Detections that sit fully inside it are dropped, so they never trigger an event, which is useful for a busy road or a neighbour's window. Something that only partly overlaps it still counts. An ignore zone has no detection settings of its own.

An ignore zone does not change the video.[^noblackout] The area stays visible in live view and in recordings, and it is still recorded.

[^noblackout]: camera.ui has no way to black out part of the picture. If a neighbour's window must not be filmed at all, point the camera elsewhere, or use your camera's own privacy mask if it has one, which blanks the area before the picture reaches camera.ui.

## Lines (line-crossing)

On the **Lines** tab, draw a line across the image to detect when something crosses it. Each line has a **direction**:

- **A → B** or **B → A** triggers on a crossing in one direction.
- **A ↔ B** triggers in either direction.

Like zones, a line can be limited to specific object types. A crossing fires an event only when something actually moves across the line in the chosen direction, so you can alert on someone coming through a gate rather than just appearing in view.
