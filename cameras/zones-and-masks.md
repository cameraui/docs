---
title: Zones, masks & lines
---

# Zones, masks & lines

Zones let you control where detection happens, hide parts of the frame, and detect when something crosses a line. You edit them per camera, and they act on the camera's [detection](/detection/), so it needs detection set up.

## Opening the editor

Open a camera's [settings](/cameras/settings), go to the **Settings** tab, and select **Edit zones** under **Zones**. The editor opens over the camera image with two tabs: **Zones** and **Lines**.

![Zone editor in the Zones tab](/img/cameras/zone-editor.png)

## Detection zones

On the **Zones** tab, draw a polygon by adding points on the image. A zone limits where detections count:

- **Include.** Only detections inside the zone trigger.
- **Exclude.** Detections inside the zone are ignored, for example a busy road or a swaying tree.

You can limit a zone to specific **object types** (its labels), so it reacts only to people or only to vehicles. **Intersect** mode triggers when a detection's box merely overlaps the zone, instead of needing its centre inside.

## Privacy masks

Turn a zone into a **privacy mask** to black out part of the frame. Masked areas are hidden in live view and recordings, which is useful for a neighbour's window or a public sidewalk. A privacy mask only hides; it has no detection settings.

## Lines (line-crossing)

On the **Lines** tab, draw a line across the image to detect when something crosses it. Each line has a **direction**:

- **A → B** or **B → A** triggers on a crossing in one direction.
- **A ↔ B** triggers in either direction.

Like zones, a line can be limited to specific object types. A crossing fires an event only when something actually moves across the line in the chosen direction, so you can alert on someone coming through a gate rather than just appearing in view.
