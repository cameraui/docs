---
title: AI descriptions
---

# AI descriptions

camera.ui can use a generative-AI model to describe what happens on camera. It writes a short summary of each moment in an event: a title, what happened, a notification-friendly line, and a threat level. It names people, plates, and detected movement.

Names and plates come from what [face recognition](/detection/faces) and [plate reading](/detection/license-plates) actually confirmed, not from what the model thinks it can read in the picture. A description will not put a plate on a car that was never read.

<Shot src="/img/detection/genai-description.png" alt="An AI-generated event description" />

## Choosing a provider

The model comes from **Settings → [Assistant](/admin/assistant-setup)**: allow the NVR plugin under **Plugin access** and pick one of your models. The plugin sends its requests to camera.ui, so the key stays on the server. Any provider the assistant supports works, as long as the model reads pictures; the picture test in the model list tells you.

Descriptions are written in the **Answer language** of the assistant settings, in English when it follows the interface, and look at up to four pictures per event. Enable them per camera with the camera's **AI descriptions** toggle.

## Moments and Episodes

The model feeds two features, each with its own tab in the recording settings:

- **Moments.** Turn on **Enabled** here to get AI descriptions of what happens in an event. **Custom Instructions** takes free-text guidance added to the built-in prompt, for example what to pay attention to or how to phrase things. **Model Timeout** is how long a description may take before the push goes out without it: 60 seconds by default, raise it for a slow local model. How the descriptions reach your phone is set per camera, see [Notifications](/notifications/#pushes-with-an-ai-description).
- **Episodes.** Bundles related events across cameras into one story, with its own **Custom Instructions**. See [Episodes](/detection/episodes).

## Privacy

With Ollama, everything stays on your own hardware. With a cloud provider, event snapshots are sent to that provider to generate the description.[^license]

A drawn floor plan adds text context to the prompts: how the rooms connect, walking times between cameras, and what nearby sensors read at the time.

[^license]: AI descriptions build on recording, which requires an active camera.ui subscription.

