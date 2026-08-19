---
title: Browsing & filters
---

# Browsing & filters

The **Recordings** view is where you find past events across your cameras. Each event shows a thumbnail and what was detected, newest first. Related events across cameras can also appear as an **episode** card. A recording that belongs to one shows an **Open episode** button. See [Episodes](/detection/episodes).

<Shot src="/img/recording/recordings-view.png" alt="Recordings view with events and filters" />

## Filtering

Narrow the list to exactly what you're after:

- **Camera and time range.**
- **Only with recording.** On by default. Turn it off to also see events where a trigger fired but nothing was recorded. Those events can't be downloaded or previewed.
- **Labels.** Person, vehicle, animal, package, or other.
- **Trigger.** Motion, a doorbell, a sensor, or an audio alarm.
- **Attributes.** Events that contain a face or a license plate.
- **Confidence.** Hide low-confidence detections.
- **Grid search.** With a single camera selected, draw a region on its snapshot to only show events detected inside that part of the frame.

You can also search by text across detected labels, faces, and plates.

## View options

The gear in the top right opens view options.

- **Ungroup.** One card per moment instead of one card per event. Off by default. Your choice is saved to your account, so it follows you to other devices.
- **Only with recording.** The same filter as in the sidebar, kept here for quick access.

## Reading a card

Each card is one moment, newest first.

- **Time and camera.** Shown top left. Select the card to open playback at that moment.
- **Faces and plates.** When a moment has more than its scene picture, like a recognized face or a read license plate, arrows appear to step through the pictures in place, with the name or plate shown. The small tiles at the bottom mark and jump to one.
- **Grouped cards.** A grouped card shows the event's other moments as small previews at the bottom. Each opens its own moment.
- **Split cards.** With **Ungroup** on, each moment is its own card and shows its place in the event, like 2/3. Pointing at one highlights the other cards of the same event.
- **Hold to preview.** On a phone or tablet, rest your finger on a card to play the short preview clip. Lift your finger to stop, tap to open. On a computer the preview plays on hover. It steps through the clip zoomed to whatever the moment was about, with a clock showing the time of the frame you are looking at. A card with no playable footage behind it says **No preview**.

## Selecting and deleting

Admins can delete events from here. Select the dots button in the corner to enter select mode, then pick single events, several, or all the ones loaded, and delete them. They disappear everywhere at once: Home, the timeline, this list, and every open browser. The recorded video stays on disk until the normal cleanup removes it.[^delete-disk]

## AI search

To find moments by describing them, like "a person carrying a package", use **AI Search**. See [Semantic search](/detection/semantic-search).

## Heatmap

A **heatmap** shows where activity was concentrated over a period. See [Object detection](/detection/ai-backends).

[^delete-disk]: Deleting an event removes it from the list and its detections. The video file is left in place and removed later by the storage cleanup on its normal schedule.
