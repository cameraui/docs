---
title: Zones & lines
---

# Zones & lines

Zones let you control where detection happens, ignore parts of the frame, alert only on the spot that matters, and detect when something crosses a line. You edit them per camera, and they act on the camera's [detection](/detection/), so it needs detection set up.

## Opening the editor

Open a camera's [settings](/cameras/settings) and go to the **Settings** tab. Under **Zones** you see the zones and lines already on the camera, each with its colour, name and type (Zone, Ignore zone, Alert zone or Line crossing). The pencil on an entry opens the editor on it, the bin deletes it. With nothing configured yet, you only see "No zones or lines on this camera yet."

Below the list, **Edit zones** opens the editor over the camera image with three tabs: **Zones**, **Alert zones** and **Lines**.

<Shot src="/img/cameras/zone-editor.png" alt="Zone editor in the Zones tab" />

## Detection zones

On the **Zones** tab, draw a polygon by adding points on the image. Each zone is either an include or an exclude zone:

- **Include.** Only detections inside the zone count. Everything else in the frame is ignored. Use it to watch one spot, like a driveway or a doorway.
- **Exclude.** Detections inside the zone are ignored, everything outside the zone still counts. Use it to cut out one troublesome corner, like a swaying tree, while the rest of the frame keeps working.

One exclude zone on its own is all you need to say "watch everything except this". You don't have to add an include zone around the rest.

### Combining zones

Draw several include zones and a detection counts when it is in any one of them. Draw several exclude zones and each one cuts its area out.

If you mix both, **exclude wins**: a detection inside an exclude zone is dropped even when it also sits in an include zone. That is what lets you carve a hole out of a larger include zone, for example watching the whole front yard but not the pavement running through it.

Note the change once an include zone exists: being outside every exclude zone is no longer enough, a detection now also has to be inside an include zone. That holds per object type, and only for the types the include zone is set to (see below). Only exclude zones on the camera means everything outside them counts.

### Match mode

Each zone has a mode that decides what counts as inside:

- **Object touches the zone.** A detection counts as soon as its box overlaps the zone at all. This is the default.
- **Object fully inside the zone.** A detection counts only when its whole box sits in the zone. A car that just clips the edge of the zone no longer triggers it.

The mode applies to include and exclude zones alike. With an exclude zone set to "object fully inside the zone", someone standing half in the excluded area is still detected. Switch it to "object touches the zone" if you want it gone the moment it touches the area.

### Object types

You can limit a zone to specific **object types**, so it reacts only to people or only to vehicles.

The selection is local to the zone. A zone applies only to the labels selected on it, and a label you leave out passes that zone unfiltered. Limit a zone to vehicles and person detections behave as if the zone were not there: neither confined by it when it includes, nor cut away by it when it excludes. A zone with nothing selected applies to every label.

This works per object type across the whole camera. If the only include zone on a camera is set to vehicles, vehicles have to be inside it while people still count anywhere in the frame. Add person to that zone, or draw a second include zone for it, if you want people confined too.

Every new zone starts with **motion, person, vehicle and animal** selected. Package is not in that default, so a package counts anywhere in the frame, also outside your include zones. Add **package** to the zone if it should be held to the same area.

A zone limits where an object type counts, it never switches one off. To drop a type entirely, use **Object labels** in the camera's [object detection settings](/detection/ai-backends#models-and-confidence).

## Ignore zones

Turn a zone into an **ignore zone** to leave an area out of detection completely, for example a neighbour's window or a public pavement. Detections that sit fully inside it are dropped and never trigger an event. Something that only partly overlaps it still counts.

An ignore zone has no settings of its own, and that is the point of it. It always uses the "fully inside" rule, and it drops whatever lands there no matter the object type, including types that no zone selects. When you want an area gone and nothing else, that makes it the safer choice over an exclude zone. Reach for an exclude zone instead when you need it to interact with your include zones, or when you want "object touches the zone" rather than "object fully inside the zone".

An ignore zone does not change the video.[^noblackout] The area stays visible in live view and in recordings, and it is still recorded.

[^noblackout]: camera.ui has no way to black out part of the picture. If a neighbour's window must not be filmed at all, point the camera elsewhere, or use your camera's own privacy mask if it has one, which blanks the area before the picture reaches camera.ui.

## Alert zones

A detection zone decides what gets detected. An **alert zone** decides what gets you notified, and changes nothing else. Detection, events and recordings carry on as before.

On the **Alert zones** tab, draw a polygon and pick the object types it should alert on: person, vehicle, animal or package. A new alert zone starts with **person** and **vehicle** selected.

<Shot src="/img/cameras/zone-editor-alerts.png" alt="Zone editor in the Alert zones tab" />

As soon as a camera has one alert zone with an object type on it, the zones take over that camera's alerts:

- A selected type alerts while it is inside a zone that lists it.
- The same type outside that zone stays quiet.
- A type that no alert zone lists stays quiet everywhere on the camera.

Draw one alert zone over the driveway with person and vehicle on it, and someone on the road still lands on the timeline and in the recording, while only the driveway rings your phone. Watch the third point: animal is now on no zone, so animals stop alerting on that camera. Give a type a zone covering the whole image if it should keep alerting everywhere.

An alert zone with no object types selected does nothing at all. It does not mean "all types", the way an empty selection does on a detection zone.

### Match mode

**Counts as inside when** decides what makes a detection count for the zone:

- **The object stands in the zone.** Only the bottom centre of the box has to be in the zone. Good for a driveway seen at an angle, where a tall person leans well past the edge.
- **The object touches the zone.** Any overlap is enough.
- **The object is fully inside.** The whole box has to sit in the zone. This is the default.

Once a type has been inside during a stretch of activity, that whole stretch alerts. Someone who crosses the driveway and then waits on the road still gets you the alert for that visit.

### What still applies

An alert zone replaces **Notify for Objects** on that camera, so the object list in the [notification settings](/notifications/#what-each-camera-alerts-you-about) no longer has a say there. The master switch, **Known Faces Only**, the cooldown and quiet hours keep working as before.

A doorbell press, a contact sensor, a siren or an audio alert is not an object detection, so an alert zone never holds it back.[^alertplugin]

[^alertplugin]: Alert zones need the NVR plugin at 1.3.14 or newer. Without it the zones are saved, but nothing acts on them.

## Lines (line-crossing)

On the **Lines** tab, draw a line across the image to detect when something crosses it. Each line has a **direction**:

- **A → B** or **B → A** triggers on a crossing in one direction.
- **A ↔ B** triggers in either direction.

Like zones, a line can be limited to specific object types. A crossing fires an event only when something actually moves across the line in the chosen direction, so you can alert on someone coming through a gate rather than just appearing in view.
