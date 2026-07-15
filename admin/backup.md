---
title: Backup & restore
---

# Backup & restore

You can back up your camera.ui setup and restore it later, on any platform. It's in **Settings → Backup** (admins only).

## Creating a backup

Choose **Download backup archive** to save a single archive of your camera.ui storage directory: configuration, database, user accounts, and media. Keep it somewhere safe.[^ignore]

## Restoring

Upload an archive and choose **Restore backup archive**, then confirm with **Restore and restart**. This replaces the current configuration, so be sure you want to roll back to the archive's state.

A **Restoring backup** overlay covers the screen while it works and walks through three steps: uploading the archive (with a progress bar), restoring, and restarting the server. Leave the window open until it's done. camera.ui logs you out at the end, so sign in again once the server is back.

Archives larger than 200 MB are rejected on upload. If yours is too big, exclude media folders from the backup and create a new one.[^ignore]

## Scheduled backups

<Shot src="/img/admin/backup-scheduler.png" alt="The Backup scheduler card" />

The **Backup scheduler** card creates backups automatically and keeps only the newest archives.

Turn on the toggle, then set:

- **Frequency.** Daily, Weekly, or Monthly.
- **Time.** The time of day the backup runs, as HH:mm (default `03:00`).
- **Weekday.** Shown only when Frequency is Weekly.
- **Day of month.** Shown only when Frequency is Monthly, 1-28.
- **Keep backups.** How many of the newest archives to retain, 1-60 (default 7). Older archives are deleted automatically after each run.
- **Destination folder.** An absolute path on the server, for example a NAS mount. Leave it empty to use the default folder inside your storage directory. A relative path is rejected.

Use **Run now** to trigger a backup immediately without waiting for the schedule. A **Last run** line shows the timestamp and result (success or error) of the most recent scheduled run, or "never" if none has run yet.

Scheduled archives are written to the destination folder on the server, unlike a manual download, which saves the archive to your browser. Everything the scheduler has created appears under **Available backups**, with the filename, date, and size, and a Download or Remove action for each entry.

[^ignore]: To exclude a folder from the backup (for example a large media folder), place an empty file named `.backupignore` in it.
