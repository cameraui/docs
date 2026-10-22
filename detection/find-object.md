---
title: Find an object
---

# Find an object

Open **Find** in the timeline, tap a person or a vehicle in the picture, and camera.ui lists the moments that show it.[^license]

## Picking an object

While the **Find** view of the [timeline](/recording/timeline-playback#timeline-detections-and-find) is open, every picture can be picked. A tap or a click freezes the picture at that frame, pauses the player and picks the object at that spot with the detection assigned to the camera. Outlines then mark every person and vehicle in the frozen picture, and each further tap adds a pick.

- **Find this object** in the player's control bar (in the dots menu on a small player) or <kbd>F</kbd> opens and closes the view. In [Camview](/cameras/camview#find-objects-across-the-grid) <kbd>F</kbd> also opens the grid's timeline.
- **Press and hold** a picture, with a finger or the mouse, to freeze it and pick from any view, then Find opens.

A frozen picture plays on with **Continue** at its top, play, going live, a match you open, <kbd>Esc</kbd> or **End search**. The picks stay unless you end the search. Scrubbing the timeline moves a frozen picture to the new moment, so you can pick a better frame of someone who looked away.

Only admins can pick, and only with the NVR plugin and object detection assigned to the camera. A camera without object detection has no **Find**, in Camview its tile says **No object detection** while Find is open. The picture is read with the models and confidences set for the camera. When the camera's own detection cannot read a picture, the AI backend set as its **Object Assist** reads it; without one the search says so.

With an AI backend as **Segmentation** in the camera's **Plugins** tab, the object gets its outline instead of a box, and where people or vehicles overlap, a click picks the one under the pointer.

## What a search goes by

A search goes by everything the picture offers at once and lists each moment once.

- **A person.** By name when the face was recognized, otherwise by the face compared with the faces of other moments. Also by clothing and build, which finds people who look alike: this needs an AI backend as **Person Re-ID** in the camera's **Plugins** tab and finds the moments of cameras that have one. Someone in other clothes looks like someone else to it, and moments from before the camera had Person Re-ID have no clothing to compare. Cameras that report their objects themselves (with or without **Object Assist**) store no clothing either.
- **A vehicle.** By its plate when one was read, with plates read one character off, and by its look: vehicles that look alike. The look needs a CLIP backend, see [Semantic search](/detection/semantic-search#what-you-need).

How well people are found by name depends on [face recognition](/detection/faces).

## The matches

The Find view shows each pick with its crop and the matches of all picks in one list, one card per moment, the surest first: the name or the plate, then the face, then the look-alikes by clothing or look, best match first. With several picks each card shows the pick it came from. Where a match is a comparison, a slider from **More precise** to **Broader** sets how close it has to be. Removing a pick drops its matches, **End search** removes all of them.

While a search runs, the timeline shows only the matching events. Turning off **Matches only** in the timeline's filter menu shows all events again.

- **A card of a camera on screen** plays that moment there.
- **A card of another camera** opens that camera at the moment, with its pick in Find.
- **In the episode player** Find is a column beside the player (on a phone below it). A match inside the episode plays there, one outside opens as a recording.

**Show all in Recordings** lists the matches of all picks in [Recordings](/recording/browsing), where the camera, room and time range filters narrow them and **End search** returns to the normal list.

## Search by picture

In [Recordings](/recording/browsing#search), **Search by picture** (admins only) takes a picture of a person or a vehicle: drop it on the field or anywhere on the list, or choose one. Click the person or the vehicle in it, and the list shows the matches as above. The picture is read with the plugins and models of the camera that has most of them assigned.

## Trying the models

The AI backend's plugin page has a **Person Re-ID** and a **Segmentation** tab. Person Re-ID takes a picture of a person and searches the recordings for people who look alike, Segmentation outlines every person, vehicle and animal in a picture.

## Vehicle color and type

**Vehicles** in the Recordings filters narrows the list to colors and types: car, van, truck, bus, motorcycle, bicycle. camera.ui reads both from the picture of every vehicle it records, older recordings included, and needs CLIP for it. A reading can be wrong, a gray car in the shade may count as black.

[^license]: Finding objects and the vehicle filter build on recording, which requires an active camera.ui subscription.
