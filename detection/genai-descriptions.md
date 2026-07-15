---
title: AI descriptions
---

# AI descriptions

camera.ui can use a generative-AI model to write a short, readable summary of each event: a title, a description of what happened, a notification-friendly summary, and a threat level. It names people, plates, and detected movement.

<Shot src="/img/detection/genai-description.png" alt="An AI-generated event description" />

## Choosing a provider

In the [NVR settings](/recording/), open the **GenAI** tab, turn on **Enabled** and pick a provider:

- **Ollama.** Runs a model locally on your own hardware. Set the **API Base URL** (for example `http://localhost:11434`).
- **OpenAI** or **Gemini.** Use a cloud model. Set your **API Key**.

Then set the **Model** (such as `llava`, `gpt-4o`, or `gemini-2.5-flash`), an optional **Description Language**, and how many images per event to send. **Request Timeout** is how long camera.ui waits for the provider, 60 seconds by default; local Ollama models often need more. **Test Connection** checks it works. Enable it per camera with the camera's **AI descriptions** toggle.

## Privacy

With Ollama, everything stays on your own hardware. With OpenAI or Gemini, event snapshots are sent to that provider to generate the description.[^license]

[^license]: AI descriptions build on recording, which requires an active camera.ui subscription.
