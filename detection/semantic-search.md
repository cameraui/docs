---
title: Semantic search
---

# Semantic search

Semantic search lets you find moments in your recordings by **describing them in plain words**, like "person with a red jacket" or "delivery truck", instead of filtering by type. It is powered by CLIP.

## What you need

Semantic search needs an AI backend that provides **CLIP** (CoreML, OpenVINO, or ONNX) enabled on your cameras. As those cameras record, camera.ui builds a searchable understanding of each event.[^license]

## Searching

<Shot src="/img/detection/ai-search.png" alt="AI Search results in Recordings" />

In [Recordings](/recording/browsing), open **AI Search** and describe what you're looking for. camera.ui ranks events by how well they match, and you can raise the **minimum match score** to keep only close matches.

[^license]: Semantic search builds on recording, which requires an active camera.ui subscription.
