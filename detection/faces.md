---
title: Face recognition
---

# Face recognition

Face recognition spots faces on your cameras, recognises people you have enrolled, and groups the ones it doesn't know yet. It builds on [object detection](/detection/ai-backends), so it needs an AI backend with face support enabled on the camera.

![Faces view with known and unknown faces](/img/detection/faces-view.png)

## Enrolling a known face

Open the **Faces** view. It has two sections: **Known Faces** and **Unknown Faces**.

To add someone:

1. Select **Add Face**.
2. Enter a **name**, pick the **face detection plugin**, and drop in a clear photo of the person.
3. camera.ui checks that it can find a face, then select **Enroll**.

The person is now recognised in future events, with their name shown as an attribute on detections.

![Enroll face dialog](/img/detection/faces-enroll.png)

## Unknown faces

Faces that don't match anyone enrolled collect under **Unknown Faces**, grouped automatically so the same person's shots cluster together.

- **Assign a group** to a person to enrol everyone in it at once, or assign a single face.
- **Discard** groups or faces you don't care about, or clear all ungrouped faces.

## Settings

In the [NVR settings](/recording/), face recognition has:

- **Match threshold.** How strict face matching is (0.3 to 0.8).
- **Max training images.** How many photos to keep per person (5 to 15); camera.ui keeps the best ones.

## Rescanning

Enrolled someone new? Select **Rescan existing events** to re-check past recordings and tag them with the newly known face.
