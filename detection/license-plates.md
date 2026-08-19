---
title: License plates
---

# License plates

License-plate recognition reads plate numbers from vehicles. It builds on [object detection](/detection/ai-backends): a vehicle is detected, then its plate is located and read by OCR. Enable an AI backend with license-plate support on the camera. If the camera detects objects itself without reporting where they are (many Reolink models), enable [Object Assist](/detection/ai-backends#object-assist) so plates get a proper crop.

## Setup

In the backend's plugin settings, license plates use two models, a **detector** that finds the plate and an **OCR model** that reads the characters. camera.ui downloads them automatically. Both confidences are set on the camera.

Finding a plate and reading it are two jobs, so [Settings → Detection](/cameras/settings) has one confidence for each, plus a length filter:

- **Plate detection.** Plates found with less confidence than this are not read at all (0 to 1, default 0.3).
- **Plate reading.** Readings the OCR is less sure about than this are ignored (0 to 1, default 0.9).
- **Min. plate length.** Readings shorter than this are dropped as fragments (default 4 characters).

## Where plates appear

A read plate is attached to its vehicle as an **attribute**. You'll find it:

- On the event, alongside the vehicle.
- In [Recordings](/recording/browsing), where you can filter by the **License plate** attribute or search for a specific plate.
- In [notifications](/notifications/) and [AI descriptions](/detection/genai-descriptions), for example "Plate ABC-123".
