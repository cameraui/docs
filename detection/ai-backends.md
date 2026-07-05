---
title: Object detection & AI backends
---

# Object detection & AI backends

Object detection finds **people, vehicles, animals, and packages** in the frame, and is the basis for faces, license plates, and semantic search. It runs on an **AI backend** you choose to match your hardware.

## Choosing a backend

camera.ui ships six AI backends as plugins. Pick the one for your hardware and enable it per camera in [Settings → Plugins](/cameras/settings) (see [Set up sensors](/sensors/setup)):

- **CoreML.** For Apple Silicon Macs; uses the GPU and Neural Engine.
- **OpenVINO.** For Intel CPUs and GPUs.
- **ONNX.** Cross-platform, on CPU or a supported GPU.
- **NCNN.** A lightweight backend for supported hardware. (No semantic search.)
- **Coral.** For a Coral Edge TPU, with a CPU fallback. Linux only.
- **Hailo.** For a Hailo-8 / Hailo-8L accelerator. Linux only.

CoreML, OpenVINO, ONNX, and NCNN provide object, face, and license-plate detection. CoreML, OpenVINO, and ONNX also provide CLIP for [semantic search](/detection/semantic-search). Coral and Hailo are edge-AI accelerator backends that provide object detection only, and only for **person, vehicle, and animal**[^edge] (no packages, faces, license plates, or CLIP).

[^edge]: Coral and Hailo run a fixed object model that reports three classes. The other backends detect the full set of object types described above.

## Models and confidence

In a backend's plugin settings you choose a **model** for each task (object, face, license plate, CLIP) and a **confidence threshold**, which is how sure the AI must be before it reports a detection. Larger models are more accurate but heavier; higher confidence means fewer false alarms but more missed detections. camera.ui downloads the models it needs automatically.

There is also a per-camera **Object confidence** in [Settings → Detection](/cameras/settings); set it to 0 to skip object detection on that camera.

## What you get

Detected objects appear on the live view as boxes, drive [notifications](/notifications/), and become events you can [browse](/recording/browsing) and filter by type. They also feed [face recognition](/detection/faces), [license plates](/detection/license-plates), and [semantic search](/detection/semantic-search). A **heatmap** overlay on the player shows where objects were detected most often over a time window.
