---
title: Browsing & filters
---

# Browsing & filters

The **Recordings** view lists past events across your cameras, ordered by when something last happened in them. An event that runs for hours shows while it runs, with its newest span on the card. Related events across cameras can appear as an **episode** card, and a recording that belongs to one shows **Open episode**. See [Episodes](/detection/episodes).

When the list says recordings are unavailable, the NVR plugin is not running. The list fills once the plugin answers again.

## Filtering

**Show** at the top of the sidebar picks what the list holds: **All**, only **Events**, or only **Episodes**. Episodes have no detections of their own, so in that view only camera and time range narrow them down.

<Shot src="/img/recording/recordings-filters.png" alt="The filter sidebar with the Show switch, search and the room and camera filters" />

The other filters:

- **Camera and time range.**
- **Rooms.** Selects the cameras placed in those rooms on the [floor plan](/cameras/floor-plan).
- **Only with recording.** On by default. Turn it off to also see events where a trigger fired but nothing was recorded. Those events can't be downloaded or previewed.
- **Labels.** Person, vehicle, animal, or other.
- **Trigger.** Motion, a doorbell, a sensor, or an audio alarm.
- **Attributes.** Events that contain a face or a license plate.
- **Confidence.** Hide low-confidence detections.
- **Favorites only.** Admins only, see below.
- **Grid search.** With a single camera selected, draw a region on its snapshot to only show events detected inside that part of the frame.

You can also search by text across detected labels, faces, and plates.

## View options

Behind the gear, top right:

- **Ungroup.** One card per moment instead of one card per event. Only events with several moments split, most have one. Episodes stay, pick **Events** under **Show** to hide them. Off by default. Your choice is saved to your account, so it follows you to other devices.
- **Only with recording.** The same filter as in the sidebar.

## Reading a card

Each card is one moment.

- **Time and camera.** Selecting the card opens playback at that moment.
- **Faces and plates.** When a moment also has a recognized face or a read plate, arrows step through its pictures in place, with the name or plate shown. The small tiles at the bottom jump to one. With several people in one moment, the main picture lists every name and counts the unknown faces, like Azra +1.
- **Grouped cards.** A grouped card shows the event's other moments as small previews at the bottom. Each opens its own moment.
- **Split cards.** With **Ungroup** on, each card shows its place in the event, like 2/3. Hovering one highlights the other cards of the same event.
- **The dots menu.** Holds what the card does not show itself: the [detection trace](/detection/events-and-detections#the-detection-trace), **Ask the assistant**, the download, and [**Correct person**](/detection/faces#correcting-a-recognition) when a face picture is on screen.
- **Hold to preview.** On a phone or tablet, hold a card to play its short preview (lift to stop, tap to open). On a computer it plays on hover. The preview is zoomed to what the moment was about, with a clock for the frame's time. **No preview** means there is no playable footage. An episode card previews its cut: each camera in turn, with name and time.

## Favorites

The star on a recording or episode card keeps that moment: automatic [cleanup](/recording/storage) skips it, so its footage stays playable however old it gets and however tight the disk. **Favorites only** in the filter sidebar lists them. Both are admin-only.

## Selecting and deleting

Admins can delete events here: the dots button in the corner enters select mode for single events, several, or all loaded ones. Deleted events disappear everywhere at once: Home, the timeline, this list, and every open browser.[^delete-disk]

## AI search

**AI Search** finds moments by description, like "a person carrying a package". See [Semantic search](/detection/semantic-search).

## Ask the assistant

With the [assistant](/assistant/) set up, the filter sidebar starts with **Ask the assistant**. Type the search in your own words ("cars in the driveway yesterday", "favorites with the doorbell", "episodes from the entrance in the last hour") and it sets the filters below: cameras and rooms, time range, event types, sensors, favorites, and an AI Search when the words describe a scene the labels cannot. A note under the box says what the filters cannot express, an exact day for example.

## Heatmap

A **heatmap** shows where activity was concentrated over a period. See [Object detection](/detection/ai-backends).

[^delete-disk]: Deleting an event removes it from the list and its detections. The video file is left in place and removed later by the storage cleanup on its normal schedule.
