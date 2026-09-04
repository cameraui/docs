---
title: Model training
---

# Model training

camera.ui's detection models are trained on real footage from real installations, contributed by the community. The **Training** view collects sample frames from your cameras, you label and verify them, and you decide which ones go to the shared training pool. Nothing is uploaded on its own.

<Shot src="/img/detection/training-view.png" alt="Training view with candidate frames" />

## How frames are collected

During detection events each camera saves a few representative frames, spread out so a long event doesn't flood the list. camera.ui keeps at most 200 frames per camera: once full, the oldest unreviewed frames make room, and unreviewed frames are deleted after 14 days either way. Verified frames stay until you submit or delete them.

Collection is on by default and stays on your disk. To stop it, open the gear menu in the Training view and turn off **Collect candidates**. The view is only visible to admins.

## Labeling frames

Opening a frame starts the editor. Drag to draw a box, tap a box or its label to change it, double tap to zoom. On a keyboard, the question mark button in the editor lists the shortcuts.

<Shot src="/img/detection/training-editor.png" alt="Training editor with labeled boxes" />

What makes a frame useful:

- **Label everything you see.** Every person, vehicle, animal and package in the frame, not just what triggered the event. An unlabeled object teaches the model that it isn't one.
- **Keep boxes tight.** The box hugs the object, without a margin.
- **Include hidden parts.** Box a partly hidden object in full, as far as you can judge its extent.
- **Faces and license plates get their own boxes**, on top of the person or vehicle box.
- **Type the plate text.** With a license plate box selected, a text field takes the plate as printed. Optional, and the ground truth for plate reading.
- **False alarms are valuable.** If the frame shows none of the objects, delete all boxes and verify it empty. That is exactly how the model unlearns a false trigger.

**Verify** marks the frame as done. Only verified frames can be submitted.

## Submitting to the pool

**Select candidates** in the floating button group in the corner starts the selection, then tick the verified frames and submit them with the cloud button. The upload runs in the background, a banner shows the progress, and each submitted frame leaves the local list. Submitting requires your server to be signed in to [camera.ui Cloud](/remote/cloud).

**My contributions** in the toolbar lists everything you have submitted, with the frame, its labels, and whether it is still waiting (**Submitted**) or already used (**In training**). Images and labels are tied to your cameraui.com account; deleting a contribution removes it from the pool.
