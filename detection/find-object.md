---
title: Find an object
---

# Find an object

Pause the live picture or a recording, click a person or a vehicle, and camera.ui lists the moments that show it.[^license]

## Picking an object

**Find this object** sits in the control bar of the camera player, the recording player and the episode player (in the dots menu on a small player). It pauses the picture. Click a person or a vehicle: camera.ui looks at that spot with the detection assigned to the camera, frames the object it finds there, reads its face, clothing, plate or look, and lists the matches. The search stays on for the next click until you turn it off with the same button or <kbd>Esc</kbd>, then the picture plays on.

Without the NVR plugin, or without object detection assigned to the camera, the button does not appear. The picture is read with the models and confidences set for the camera. When the camera's own detection cannot read a picture, the AI backend set as its **Object Assist** reads it; without one the search says so.

With an AI backend as **Segmentation** in the camera's **Plugins** tab, the object gets its outline instead of a box, and where people or vehicles overlap, a click picks the one under the pointer.

## What a search goes by

A search goes by everything the picture offers at once and lists each moment once.

- **A person.** By name when the face was recognized, otherwise by the face compared with the faces of other moments. Also by clothing and build, which finds people who look alike: this needs an AI backend as **Person Re-ID** in the camera's **Plugins** tab and finds the moments of cameras that have one. Someone in other clothes looks like someone else to it, and moments from before the camera had Person Re-ID have no clothing to compare. Cameras that report their objects themselves (with or without **Object Assist**) store no clothing either.
- **A vehicle.** By its plate when one was read, with plates read one character off, and by its look: vehicles that look alike. The look needs a CLIP backend, see [Semantic search](/detection/semantic-search#what-you-need).

How well people are found by name depends on [face recognition](/detection/faces).

## The matches

One card per moment, the surest first: the name or the plate, then the face, then the look-alikes by clothing or look, best match first. Where a match is a comparison, a slider from **More precise** to **Broader** sets how close it has to be.

- **On the camera page** the matches replace the recordings below the player (on a phone in the sheet), and the timeline shows only the matching events. Turning off **Matches only** in the timeline's filter menu shows all events again. A card on this camera shows that moment as a still for the next click, a card of another camera opens that camera at the moment, with the matches still open.
- **In the recording and the episode player** the matches open in a column beside the player (on a phone in place of the timeline). A card shows the moment in the same window, on the same camera as a still for the next click. A match outside the episode opens there as a recording.

**Show all in Recordings** lists the matches in [Recordings](/recording/browsing), where the camera, room and time range filters narrow them and **End search** returns to the normal list.

## Search by picture

In [Recordings](/recording/browsing#search), **Search by picture** takes a picture of a person or a vehicle: drop it on the field or anywhere on the list, or choose one. Click the person or the vehicle in it, and the list shows the matches as above. The picture is read with the plugins and models of the camera that has most of them assigned.

## Trying the models

The AI backend's plugin page has a **Person Re-ID** and a **Segmentation** tab. Person Re-ID takes a picture of a person and searches the recordings for people who look alike, Segmentation outlines every person, vehicle and animal in a picture.

## Vehicle color and type

**Vehicles** in the Recordings filters narrows the list to colors and types: car, van, truck, bus, motorcycle, bicycle. camera.ui reads both from the picture of every vehicle it records, older recordings included, and needs CLIP for it. A reading can be wrong, a gray car in the shade may count as black.

[^license]: Finding objects and the vehicle filter build on recording, which requires an active camera.ui subscription.
