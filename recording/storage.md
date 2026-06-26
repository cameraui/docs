---
title: Storage & retention
---

# Storage & retention

Recordings can use a lot of disk, so camera.ui gives you control over where they're stored and how long they're kept.

## Where recordings are stored

By default, recordings live with the rest of camera.ui's data. For more than a couple of cameras, put them on a **dedicated local disk**, not the system disk and not a network share. See [System requirements](/intro/requirements#storage-for-recordings).

## How long they're kept

Two limits decide when old footage is removed:

- **Retention (days).** Keep footage for up to this many days (0 means no day limit).
- **Max storage (GB).** Cap the total space recordings may use (0 means no cap).

When a limit is reached, what happens depends on the **retention mode**:

- **Overwrite** (default). The oldest recordings are deleted to make room, so recording never stops.
- **Strict.** Nothing is deleted beyond the retention window. If the disk fills, recording pauses until you free space.

## Keeping an eye on usage

![Storage usage statistics](/img/recording/storage-stats.png)

camera.ui shows how much space is used and free, and a breakdown per camera, including each camera's recording rate (megabytes per hour) and how many days of footage it holds. This helps you size storage and spot a camera recording more than expected.
