---
title: License plates
---

# License plates

License-plate recognition reads plate numbers from vehicles. It builds on [object detection](/detection/ai-backends): a vehicle is detected, then its plate is located and read by OCR. Enable an AI backend with license-plate support on the camera.

## Setup

In the backend's plugin settings, license plates use two models, a **detector** that finds the plate and an **OCR model** that reads the characters, plus a confidence threshold. camera.ui downloads them automatically.

## Where plates appear

A read plate is attached to its vehicle as an **attribute**. You'll find it:

- On the event, alongside the vehicle.
- In [Recordings](/recording/browsing), where you can filter by the **License plate** attribute or search for a specific plate.
- In [notifications](/notifications/) and [AI descriptions](/detection/genai-descriptions), for example "Plate ABC-123".
