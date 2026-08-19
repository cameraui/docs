---
title: Semantic search
---

# Semantic search

Semantic search lets you find moments in your recordings by **describing them in plain words**, like "person with a red jacket" or "delivery truck", instead of filtering by type. It is powered by CLIP.

## What you need

Semantic search needs an AI backend that provides **CLIP** (CoreML, OpenVINO, or ONNX) enabled on your cameras. As those cameras record, camera.ui makes every person, vehicle and animal it detects searchable. Events without one of those, like plain motion, won't show up in the results.[^license]

## Searching

<Shot src="/img/detection/ai-search.png" alt="AI Search results in Recordings" />

In [Recordings](/recording/browsing), open **AI Search** and describe what you're looking for. camera.ui ranks events by how well they match, and you can raise **Min. Match Score** to keep only close matches.

Each CLIP model has its own range of raw scores, so the percentage is scaled per model. A close match reads high whichever model you use, and a **Min. Match Score** you set once means the same thing after a model change.

## Changing the CLIP model

A backend's plugin settings offer more than one CLIP model. Embeddings are only comparable within the model that produced them, so a search only looks at events embedded with a model your enabled CLIP plugins still serve. Older events stay on disk but drop out of the results until they are re-embedded.

**Reindex search**, bottom left in [Recordings](/recording/browsing) and admins only, does that. It picks the events whose embeddings came from a model none of your plugins serves any more and works through them in the background. Search keeps working while it runs, and you can leave the page. **Stop** ends it after the current event, and starting it again continues where it stopped. Events whose pictures are gone cannot be re-embedded and are counted as failed.[^reindex]

[^license]: Semantic search builds on recording, which requires an active camera.ui subscription.

[^reindex]: Needs camera-ui-nvr 1.3.16 or newer. Without a CLIP plugin the button does not appear.
