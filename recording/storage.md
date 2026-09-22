---
title: Storage & retention
---

# Storage & retention

## Where recordings are stored

By default, recordings live with the rest of camera.ui's data. For more than a couple of cameras, put them on a **dedicated local disk**, separate from the system disk. See [System requirements](/intro/requirements#storage-for-recordings).

A local disk, or a symlink to one, is fine. A **network share (NAS, SMB, NFS) is not**: detection events, timeline markers and the search index sit next to the footage as databases, and those need file locking that network filesystems do not provide reliably. What breaks there is the event database, not the video. If your storage lives on a NAS, run camera.ui on the NAS and record locally there.

## Moving recordings to another disk

Changing the storage path does not move your recordings: camera.ui starts fresh at the new location and the old folder stays as it is. To move the data:

1. Stop the server.
2. Move the whole storage folder to the new disk, including the `events` and `clip` folders. They hold your events, timeline markers and search index for that footage.
3. Start the server and set the new path in **Settings → Recordings**.

Nothing inside stores an absolute path, so everything works at the new location without a rebuild. Without `events` and `clip` the footage arrives bare, and they cannot be recreated from the video files. Enrolled faces live outside the recordings folder and are not affected.

## Rough sizing

Continuous recording size follows the stream's bitrate:

**GB per day, per camera ≈ bitrate in Mbit/s × 10.8**

| Stream | Bitrate | Continuous, per day | Per camera, 7 days |
|---|---|---|---|
| 1080p H.264 | 4 Mbit/s | ~43 GB | ~300 GB |
| 4K H.264 | 8 Mbit/s | ~86 GB | ~600 GB |
| H.265 (HEVC) | about half the bitrate | roughly half the above | roughly half the above |

Event recording uses a fraction of that, depending on how busy the scene is. When in doubt, set a retention window or storage cap and watch the per-camera rate (below) for a week.

## How long they're kept

- **Retention (Days).** Keep footage for up to this many days (0 means no day limit).
- **Max Storage (GB).** Cap the total space recordings may use (0 means no cap).

When a limit is reached, the **Retention Mode** decides:

- **Overwrite** (default). The oldest recordings are deleted to make room, so recording never stops.
- **Strict.** Nothing is deleted beyond the retention window. If the disk fills, recording pauses until you free space.

Cleanup takes the oldest hours of all cameras side by side, so a quiet camera cannot lose its whole history while a busy one keeps everything, and it stops once enough space is free. [Favorites](/recording/browsing#favorites) are skipped and stay playable however old they are.

## Free disk space

Independent of those limits, **Min Free Space (GB)** keeps part of the disk clear: cleanup works to keep at least that much available, and recording pauses at half of it. At 0 the reserve is a share of the whole volume.

Set your own value when the recordings share a disk with other data, otherwise the derived reserve on a large disk can pause recording long before your storage cap is reached. Values below 10 GB count as 10.

## Footage from removed cameras

If you delete a camera or unassign the NVR from it, its recordings stay on disk. They still count towards **Max Storage** and are aged out and cleaned up like an active camera's.

To keep that footage, put an empty file named `.cameraui-keep` into the camera's folder in your recordings directory. camera.ui then leaves the folder alone: not counted, not aged out, not touched when space runs low.[^keepmarker]

[^keepmarker]: The marker only applies to cameras camera.ui no longer knows. The folder of an active camera follows retention and the storage cap either way.

## Keeping an eye on usage

<Shot src="/img/recording/storage-stats.png" alt="Storage usage statistics" />

**Metrics → Storage** shows disk usage in the **Storage Overview** and, in the **Camera Storage** table, per camera: size on disk, days of footage held, recording rate per day, and mode.

A warning that the storage volume is small means most of it is held as headroom and recordings rotate out quickly. Usually the larger disk you meant to use isn't mounted, so check the storage path. Separate warnings appear when free space drops below 8% and once recording has paused for lack of space.

## Uninstalling the NVR

Uninstalling the NVR plugin with **Also delete stored data** removes its settings, databases and caches but keeps your recordings folder, which is protected by a `.cameraui-keep` file inside it. To delete the recordings too, remove that file first, then uninstall.
