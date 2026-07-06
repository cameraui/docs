---
title: Storage & retention
---

# Storage & retention

Recordings can use a lot of disk, so camera.ui gives you control over where they're stored and how long they're kept.

## Where recordings are stored

By default, recordings live with the rest of camera.ui's data. For more than a couple of cameras, put them on a **dedicated local disk**, not the system disk and not a network share. See [System requirements](/intro/requirements#storage-for-recordings).

## Rough sizing

Continuous recording writes the recorded stream to disk, so the size follows its bitrate. A rough guide:

**GB per day, per camera ≈ bitrate in Mbit/s × 10.8**

| Stream | Bitrate | Continuous, per day | Per camera, 7 days |
|---|---|---|---|
| 1080p H.264 | 4 Mbit/s | ~43 GB | ~300 GB |
| 4K H.264 | 8 Mbit/s | ~86 GB | ~600 GB |
| H.265 (HEVC) | about half the bitrate | roughly half the above | roughly half the above |

Event recording only writes around motion or detections, so it uses a fraction of that, depending on how busy the scene is. When in doubt, start with a retention window or a storage cap and watch the per-camera rate (below) for a week.

## How long they're kept

Two limits decide when old footage is removed:

- **Retention (days).** Keep footage for up to this many days (0 means no day limit).
- **Max storage (GB).** Cap the total space recordings may use (0 means no cap).

When a limit is reached, what happens depends on the **retention mode**:

- **Overwrite** (default). The oldest recordings are deleted to make room, so recording never stops.
- **Strict.** Nothing is deleted beyond the retention window. If the disk fills, recording pauses until you free space.

## Keeping an eye on usage

<Shot src="/img/recording/storage-stats.png" alt="Storage usage statistics" />

camera.ui shows how much space is used and free, and a breakdown per camera, including each camera's recording rate (megabytes per hour) and how many days of footage it holds. This helps you size storage and spot a camera recording more than expected.
