---
title: Face recognition
---

# Face recognition

Face recognition spots faces on your cameras, recognizes people you have enrolled, and groups the ones it doesn't know yet.[^license] It builds on [object detection](/detection/ai-backends), so it needs an AI backend with face support enabled on the camera. If the camera detects objects itself without reporting where they are (many Reolink models), enable [Object Assist](/detection/ai-backends#object-assist) so faces get a proper crop.

<Shot src="/img/detection/faces-view.png" alt="Faces view with known and unknown faces" />

## Enrolling a known face

Open the **Faces** view. It has two sections: **Known Faces** and **Unknown Faces**.

To add someone:

1. Select **Add Face**.
2. Enter a **name**, pick the **face detection plugin**, and drop in a clear photo of the person.
3. Select **Enroll**. camera.ui checks the photo for a face and tells you if it can't find one.

The person is now recognized in future events, with their name shown as an attribute on detections.

<Shot src="/img/detection/faces-enroll.png" alt="Enroll face dialog" />

## Unknown faces

Faces that don't match anyone enrolled collect under **Unknown Faces**, grouped automatically so the same person's shots cluster together.

- **Assign a group** to a person to enroll everyone in it at once, or assign a single face.
- **Discard** groups or faces you don't care about, or clear all ungrouped faces.

## Ignoring a face

Some faces you never want to see again, like a passing stranger or the mail carrier. Ignore one and camera.ui stops collecting them.[^nvrupdate]

- **Ignore a face or a whole group.** Each unknown face has an ignore button, and every group has one for all its faces at once. In selection mode you can ignore several at a time.
- **New sightings are dropped.** Once someone is ignored, their later shots don't come back as unknown faces.
- **Ignored faces sit in their own list.** They collect under **Ignored Faces** at the bottom of the Unknown Faces section.
- **Restore to undo.** **Restore** on an ignored face lets that person show up again.

## Settings

In **Settings → [Recordings](/recording/)**, face recognition has:

- **Max training images.** How many photos to keep per person (5 to 15); camera.ui keeps the best ones.
- **Max unknown people.** How many unknown groups are kept (10 to 500). Once the limit is hit, the group that was seen longest ago is dropped. Raise it for busy outdoor cameras.

Per camera, [Settings → Detection](/cameras/settings) has two face settings:

- **Face confidence.** Faces the AI is less sure about than this are ignored for events and automations (0 to 1, default 0.5).
- **Match threshold.** How certain the match against your enrolled people has to be before someone is named (0.3 to 0.95, default 0.55). Higher means fewer wrong names, lower means the camera recognizes people more often. A camera looking down the street can demand more than the one at the door.[^perc]

[^perc]: Needs camera-ui-nvr 1.3.16 or newer.

## Rescanning

After enrolling someone new, select **Rescan existing events** to re-check past recordings and tag them with the newly known face.

[^license]: Face recognition (matching faces against your enrolled people) builds on recording and requires an active camera.ui subscription. Detecting that a face is present is part of the free detection.
[^nvrupdate]: Needs a current camera-ui-nvr. Update it if the ignore button is missing.
