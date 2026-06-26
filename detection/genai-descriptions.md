---
title: AI descriptions
---

# AI descriptions

camera.ui can use a generative-AI model to write a short, readable summary of each event: a title, a description of what happened, a notification-friendly summary, and a threat level. It names people, plates, and detected movement.

![An AI-generated event description](/img/detection/genai-description.png)

## Choosing a provider

In the [NVR settings](/recording/), turn on **AI descriptions** and pick a provider:

- **Ollama.** Runs a model locally on your own hardware. Set the **API base URL** (for example `http://localhost:11434`).
- **OpenAI** or **Gemini.** Use a cloud model. Set your **API key**.

Then set the **model** (such as `llava`, `gpt-4o`, or `gemini-2.5-flash`), an optional **description language**, and how many images per event to send. **Test connection** checks it works. Enable it per camera with the camera's **AI descriptions** toggle.

## Privacy

With Ollama, everything stays on your own hardware. With OpenAI or Gemini, event snapshots are sent to that provider to generate the description.[^license]

[^license]: AI descriptions build on recording, which requires an active camera.ui subscription.
