---
title: Zones & privacy
---

# Zones & privacy

Zones mark parts of the camera picture and give that area a job. There are five kinds, each with one job and its own tab in the editor: **Motion**, **Objects**, **Alerts**, **Privacy** and **Lines**.

One rule runs through all of them: **a kind only narrows things down once it exists.** No motion zone means motion counts everywhere, no object zone means every object type counts everywhere, no alert zone means everything that is detected may alert you. You only draw the kind you actually want to limit.

::: warning Cameras that detect on their own
Reolink AI, Eufy, ONVIF events and plugins that report detections tell camera.ui **what** they saw, usually without saying **where**. Without a box there is nothing to place, so no zone can judge such a report and only the type lists still apply:

- **Motion zones** don't limit them. Their motion counts everywhere on that camera.
- **Object zones** still drop the types you left off, but the area has no effect.
- **Alert zones** shrink to a type selection. "Vehicles in the driveway" is not possible for such a camera, "vehicles" is.
- **Lines** never apply, a crossing needs tracking and there is nothing to track.

Two ways out. Let camera.ui detect for the camera: pick an [AI backend](/detection/ai-backends) as its object sensor instead of the camera's own detection, if your hardware carries the extra stream. Or keep the camera as the sensor and add an [object assist](/detection/ai-backends#object-assist) plugin, which finds the reported object in the frame. Either way the detection has a box from then on and every zone works as described here. Cameras that do send coordinates are not affected.
:::

## Opening the editor

Open a camera's [settings](/cameras/settings) and go to the **Settings** tab. Under **Zones** you see what the camera already has, each with its colour, name and type (Motion zone, Object zone, Alert zone, Privacy zone or Line crossing). The pencil on an entry opens the editor on that tab, the bin deletes it.

Below the list, **Edit zones** opens the editor over the camera image.

<Shot src="/img/cameras/zone-editor.png" alt="Zone editor with its five tabs, open on Motion" />

Motion, object and alert zones start out covering the whole image, so you drag the corners inward instead of drawing from scratch. A privacy zone is the exception: you click its points yourself, because a full-image privacy zone would black out everything.

## Motion zones

Motion zones say **where motion counts**. They have no object types, since motion is not an object.

- **Only inside this zone counts.** Motion is picked up in the zone and nowhere else.
- **Everything inside is dropped.** Motion in the zone is ignored, the rest of the picture still counts.

Motion is always judged by touch: as soon as movement reaches the zone, it counts. Without a motion zone the whole image counts.

## Object zones

Object zones say **which object types count, and where**. Each zone carries a list of types (person, vehicle, animal, package) plus the same two modes as motion zones.

A new object zone starts with no types selected, which means it applies to every type.

<Shot src="/img/cameras/zone-editor-objects.png" alt="Zone editor in the Objects tab" />

### Combining zones

Draw several include zones and a detection counts when it is in any one of them. Draw several exclude zones and each one cuts its area out.

If you mix both, **exclude wins**: a detection inside an exclude zone is dropped even when it also sits in an include zone. That is what lets you carve a hole out of a larger include zone, for example watching the whole front yard but not the pavement running through it.

Once an include zone exists, being outside every exclude zone is no longer enough, a detection also has to be inside an include zone.

### Which types survive

The types you list add up to what the camera reports. Once every include zone carries a type list, those lists together are what the camera detects: a type that appears on none of them is dropped everywhere on that camera. Leave one include zone without any types and this stops applying, because that zone already covers every type.

So there are two ways to use object zones. List types on them to say what the camera detects and where. Or leave the types empty to only limit the area and keep every type.

### Match mode

**Counts as inside when** decides what makes a detection count for the zone:

- **The object touches the zone.** Any overlap is enough. This is the default.
- **The object is fully inside.** The whole box has to sit in the zone. A car that just clips the edge no longer triggers it.

## Alert zones

A detection zone decides what gets detected. An **alert zone** decides what gets you notified, and changes nothing else. Detection, events and recordings carry on as before.

Without an alert zone the camera alerts on everything it detects. Draw one to narrow that down.

<Shot src="/img/cameras/zone-editor-alerts.png" alt="Zone editor in the Alerts tab" />

Once a camera has an alert zone, the zones decide its alerts:

- A type listed on a zone alerts while it is inside that zone.
- The same type outside that zone stays quiet.
- A type that no alert zone lists stays quiet everywhere on the camera.

Draw one alert zone over the driveway with person and vehicle on it, and someone on the road still lands on the timeline and in the recording, while only the driveway rings your phone. Watch the third point: animal is then on no zone, so animals stop alerting on that camera. Give a type a zone covering the whole image if it should keep alerting everywhere.

An alert zone with no types selected alerts on every type from inside it.

If you put a type on an alert zone that your object zones filter out, the editor says so. The camera would never detect that type, so the alert zone could never fire for it.

### Match mode

Alert zones offer a third option on top of the two above:

- **The object stands in the zone.** Only the bottom centre of the box has to be in the zone. Good for a driveway seen at an angle, where a tall person leans well past the edge.
- **The object touches the zone.** Any overlap is enough.
- **The object is fully inside.** The whole box has to sit in the zone. This is the default.

Once a type has been inside during a stretch of activity, that whole stretch alerts. Someone who crosses the driveway and then waits on the road still gets you the alert for that visit.

Some cameras report only that they saw a person, without saying where. There is no box to place, so no zone can judge it and the alert goes out. Add an [object assist](/detection/ai-backends#object-assist) plugin if you want those detections placed in a zone.

### What still applies

Alert zones are the only place where you pick which objects notify you. The master switch, **Known Faces Only**, the cooldown and quiet hours keep working as before.

A doorbell press, a contact sensor, a siren or an audio alert is not an object detection, so an alert zone never holds it back.[^alertplugin]

[^alertplugin]: Alert zones need the NVR plugin at 1.3.15 or newer. On an older plugin the zones are saved, but the camera keeps using its old object list.

## Privacy zones

A privacy zone covers an area in black, for example a neighbour's window or a public pavement. It is always black and has no colour of its own.

**Detections inside** decides what happens to detections there:

- **Are dropped.** Nothing in the area is detected. This is the default.
- **Still count.** The area is hidden but still watched, so a person walking behind it is detected without being shown.

<Shot src="/img/cameras/zone-editor-privacy.png" alt="Zone editor in the Privacy tab" />

### What is hidden, and what is not

The black area is not burned into the video. camera.ui paints it over the pictures it produces and over its own player, so what it covers depends on where you look.

Hidden:

- Event and recording thumbnails, moment cards, face and plate crops, and episode mosaics.
- Pictures attached to push notifications.
- Snapshots: camera tiles, the camera list, the overview, the snapshot API, MQTT, HomeKit stills and the Home Assistant camera image.
- Live view and playback in the camera.ui web interface, and in the mobile apps, which run that same interface. The area is drawn black on top of the video.
- Live view, playback and the episode player in the Apple TV app, and the clip that loops on its Home screen, where the app draws the area black on top of the video.
- The preview that plays while you hover an event or a recording, and a picture you take with the camera button in the player.

Not hidden:

- The recording on disk, and anything you export or download from it.
- Video clips attached to push notifications.
- RTSP, and everything that reads it: HomeKit live and HomeKit recordings, the Home Assistant stream, and other apps.
- Picture-in-picture, which pops the bare video out of the page and leaves the black area behind.

So a privacy zone hides the area from someone looking at the screen, and from the pictures camera.ui sends out. It does not hide it from someone who has the stream. If an area must never be filmed at all, point the camera elsewhere, or use the camera's own privacy mask if it has one, which blanks the area before the picture reaches camera.ui.

### When a picture cannot be covered

Sometimes camera.ui cannot paint the mask, for example on a hardware frame it could not read back, or a pixel format it does not know. The camera-wide setting decides what happens then:

- **Send it anyway.** The picture goes out uncovered. This is the default.
- **Send no picture.** No picture is produced at all.

Set it to **Send no picture** if an uncovered picture would be worse than none.

## Lines (line-crossing)

On the **Lines** tab, draw a line across the image to detect when something crosses it. **Crossing direction** picks when it fires:

- **A ↔ B both ways** triggers in either direction.
- **A → B** or **B → A** triggers on a crossing in one direction.

<Shot src="/img/cameras/zone-editor-lines.png" alt="Zone editor in the Lines tab, with a line across a gateway" />

Like object zones, a line can be limited to specific types; a new line starts with all four selected. A crossing fires an event only when something actually moves across the line in the chosen direction, so you can alert on someone coming through a gate rather than just appearing in view. A line never filters detection, it only reports crossings.

## Your existing zones after the update

Zones you drew before this update are split up automatically, because one zone used to do several of these jobs at once:

- A privacy mask becomes a **privacy zone**, with detections inside still dropped.
- A zone that watched motion becomes a **motion zone**.
- A zone that listed object types becomes an **object zone** with those types.
- A zone that did both shows up twice, once under Motion and once under Objects, keeping its name. That is expected, and you can delete the half you do not need.

Alert zones and lines are carried over unchanged. The camera-wide object type list that used to live in the camera settings is gone; object zones do that job now.
