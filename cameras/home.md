---
title: Home
---

# Home

Home is the first screen after you sign in. It shows every camera you have access to as a card, with a still image of what the camera sees right now.

<Shot src="/img/cameras/home-grid.png" alt="Home screen with camera cards" />

Above the cards, **Recent Events** shows the latest detections as a row you can scroll sideways. Select an event to jump to it. See [Events & detections](/detection/events-and-detections).

If you have no cameras yet, Home says "No cameras available" and offers **Get started**, which takes admins to the Cameras page to [add one](/cameras/add-camera).

## Camera cards

Each card is one camera. The cards fill the width of the window, and on a phone they stack into a single column.

- **The picture.** A snapshot of the camera, not a live stream. To watch live, select the card.
- **The name.** Bottom left, over the image.
- **Status icons.** A red camera icon next to the name means the camera is disabled. An amber moon means detections are snoozed for it.
- **Disabled cameras.** The image is replaced by a dark tile with a crossed-out camera icon.

Selecting a card opens the camera page with the [live view](/cameras/live-view), recordings, and the timeline.

Three buttons sit in the bottom right of a card:

- **Refresh snapshot.** Pulls a new picture from the camera right away.
- **Log.** Opens that camera's log in a dialog, for admins. You can download it from there.
- **Settings.** Opens the [camera settings](/cameras/settings) drawer, for admins.

A disabled camera only offers Settings.

## Arranging the cards

A floating control in the corner appears once you have more than one camera:

- **Group by room** switches from one flat grid to sections per room, using the **Room** you set in the camera settings. Cameras without a room land in **Default**, which comes first, and the remaining rooms are sorted by name. **Show all cameras** switches back.
- **Enable drag** / **Disable drag** controls whether the cards can be moved. While drag is on, you can drag a card to a new spot, and the order is kept. In the grouped view you reorder within a room.

Cards you never moved are sorted by name.

## Snapshots and how they refresh

The picture on a card is a still image, taken from the camera and reused across the app, so opening Home again shows the picture that is already there instead of waiting for a new one. camera.ui refreshes it on its own, every 60 seconds by default. The **Snapshot** section of the [camera settings](/cameras/settings) turns auto refresh off or sets the interval, between 10 and 60 seconds. Disabled cameras are never asked for a new one.

Use **Refresh snapshot** on a card when you want a current picture immediately, for example after you moved a PTZ camera.

If a camera is offline or slow to answer, the card keeps the last picture it had rather than going blank.

## The snapshot age badge

The small badge in the top right corner of a card tells you how old the picture on that card is. It counts up every second, so you always know whether you are looking at something current or at a picture from a while ago.

It reads `now` for the first second, then seconds (`14s`), minutes (`3min`), hours (`2h`), days (`5d`), months (`2m`), and years (`1y`).

With auto refresh on, the badge resets every time a new picture arrives, so it stays around the camera's refresh interval. A badge climbing well past that means no new picture came in, usually because the camera is unreachable. With auto refresh off, it keeps counting up until you refresh the card yourself.[^badge]

## Selection mode

Admins can act on several cameras at once. Select the arrow button in the floating control to enter selection mode.

<Shot src="/img/cameras/home-selection-mode.png" alt="Home screen in selection mode with cameras selected" />

In selection mode, selecting a card no longer opens the camera. It ticks the circle in the card's top left corner instead. Dragging and the per-card buttons are off while you select.

The floating control now holds the bulk actions:

- **Cancel selection.** Leaves selection mode and clears what you picked.
- **Select all cameras** / **Deselect all cameras.** Ticks or unticks every card at once.
- **Disable selected cameras** / **Enable selected cameras.** Disabling stops a camera's live stream and its detection, and its card goes dark. The camera stays configured, so you can enable it again at any time. The button flips to Enable when everything you picked is already disabled.
- **Snooze detections for selected cameras** / **Resume detections for selected cameras.** Snoozing keeps the camera streaming but pauses its detection, so nothing new is detected for it. Handy while you are working in front of a camera. The moon icon on the card shows which cameras are snoozed.
- **Enable recording for selected cameras** / **Disable recording for selected cameras.** Turns recording on or off for the picked cameras. This button only appears when at least one camera on the page is set up for recording, and it only acts on those cameras. See [Recording](/recording/).
- **Remove selected cameras.** Deletes the cameras. camera.ui asks you to confirm and names how many cameras it is about to remove, then closes selection mode when it's done.

Bulk actions run through the cameras one after another, so with many cameras picked it takes a moment. A message tells you when it finished or what went wrong.

## Next steps

- **[Live view](/cameras/live-view)** — watch a camera, with the player controls.
- **[Camview](/cameras/camview)** — several cameras at once in a grid.
- **[Camera settings](/cameras/settings)** — sources, room, detection, and everything per camera.

[^badge]: The badge is only shown on the cards on Home, not in the player or in Camview.
