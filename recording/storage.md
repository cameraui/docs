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

- **Retention (Days).** Keep footage for up to this many days (0 means no day limit).
- **Max Storage (GB).** Cap the total space recordings may use (0 means no cap).

When a limit is reached, what happens depends on the **Retention Mode**:

- **Overwrite** (default). The oldest recordings are deleted to make room, so recording never stops.
- **Strict.** Nothing is deleted beyond the retention window. If the disk fills, recording pauses until you free space.

## Footage from removed cameras

If you delete a camera, or unassign the NVR from it, its recordings stay on disk. They still count towards **Max Storage**, and retention and cleanup still remove them when the disk gets tight, like an active camera's recordings.

To keep that footage instead, put an empty file named `.cameraui-keep` into the camera's folder in your recordings directory. camera.ui then leaves the folder alone: not counted, not aged out, not touched when space runs low.[^keepmarker]

[^keepmarker]: The marker only applies to cameras camera.ui no longer knows. The folder of an active camera follows retention and the storage cap either way.

## Keeping an eye on usage

<Shot src="/img/recording/storage-stats.png" alt="Storage usage statistics" />

camera.ui shows how much space is used and free, and a breakdown per camera, including each camera's recording rate (megabytes per hour) and how many days of footage it holds. This helps you size storage and spot a camera recording more than expected.

If the page warns that the storage volume is small, most of the volume is kept free as headroom, so recordings rotate out quickly. That usually means the larger disk you meant to use isn't mounted, so check the storage path. A separate warning appears when free disk space drops below 8%. Below 5%, recording pauses.

## Uninstalling the NVR

Uninstalling the NVR plugin with **Also delete stored data** removes its settings, databases and caches, but leaves your recordings folder in place. The folder is protected by a `.cameraui-keep` file inside it. If the recordings should go with the plugin, delete that file first, then uninstall.
