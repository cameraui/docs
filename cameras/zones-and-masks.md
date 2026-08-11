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

On the **Zones** tab, draw a polygon by adding points on the image. Each zone is either an include or an exclude zone:

- **Include.** Only detections inside the zone count. Everything else in the frame is ignored. Use it to watch one spot, like a driveway or a doorway.
- **Exclude.** Detections inside the zone are ignored, everything outside the zone still counts. Use it to cut out one troublesome corner, like a swaying tree, while the rest of the frame keeps working.

One exclude zone on its own is all you need to say "watch everything except this". You don't have to add an include zone around the rest.

### Combining zones

Draw several include zones and a detection counts when it is in any one of them. Draw several exclude zones and each one cuts its area out.

If you mix both, **exclude wins**: a detection inside an exclude zone is dropped even when it also sits in an include zone. That is what lets you carve a hole out of a larger include zone, for example watching the whole front yard but not the pavement running through it.

Note the change once an include zone exists: being outside every exclude zone is no longer enough, a detection now also has to be inside an include zone. Only exclude zones on the camera means everything outside them counts.

### Match mode

Each zone has a mode that decides what counts as inside:

- **Object touches the zone.** A detection counts as soon as its box overlaps the zone at all. This is the default.
- **Object fully inside the zone.** A detection counts only when its whole box sits in the zone. A car that just clips the edge of the zone no longer triggers it.

The mode applies to include and exclude zones alike. With an exclude zone set to "object fully inside the zone", someone standing half in the excluded area is still detected. Switch it to "object touches the zone" if you want it gone the moment it touches the area.

### Object types

You can limit a zone to specific **object types**, so it reacts only to people or only to vehicles.

Object types are not local to the zone though. They are collected across all zones of a camera and act as one allow-list for the whole camera. Limit any zone to vehicles and person detections are dropped everywhere on that camera, including inside zones that have no object types of their own. That holds for exclude zones too, so an exclude zone set to vehicles switches off person detection on the entire camera, which is rarely what you want.

Every new zone starts with **motion, person, vehicle and animal** already selected. If you only want to limit the area and not the object types, clear the selection on each zone. Leaving the default in place also means package detections are dropped, since package is not part of it.

## Ignore zones

Turn a zone into an **ignore zone** to leave an area out of detection completely, for example a neighbour's window or a public pavement. Detections that sit fully inside it are dropped and never trigger an event. Something that only partly overlaps it still counts.

An ignore zone has no settings of its own, and that is the point of it. It always uses the "fully inside" rule, it drops whatever lands there no matter the object type, and it stays out of the camera-wide allow-list described above. When you want an area gone and nothing else, that makes it the safer choice over an exclude zone. Reach for an exclude zone instead when you need it to interact with your include zones, or when you want "object touches the zone" rather than "object fully inside the zone".

An ignore zone does not change the video.[^noblackout] The area stays visible in live view and in recordings, and it is still recorded.

[^noblackout]: camera.ui has no way to black out part of the picture. If a neighbour's window must not be filmed at all, point the camera elsewhere, or use your camera's own privacy mask if it has one, which blanks the area before the picture reaches camera.ui.

## Lines (line-crossing)

On the **Lines** tab, draw a line across the image to detect when something crosses it. Each line has a **direction**:

- **A → B** or **B → A** triggers on a crossing in one direction.
- **A ↔ B** triggers in either direction.

Like zones, a line can be limited to specific object types. A crossing fires an event only when something actually moves across the line in the chosen direction, so you can alert on someone coming through a gate rather than just appearing in view.
