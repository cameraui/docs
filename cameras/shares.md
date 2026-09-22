---
title: Shares
---

# Shares

A share lets someone watch a single camera's live stream without a camera.ui account, using a link and an access code. Creating and managing shares is for admins.

## Creating a share

From a camera, select **Share Camera** in the player toolbar, then set:

- **Source.** Which stream quality to share (high, mid, or low resolution).
- **Expires after.** How long the link stays valid.
- **Max Viewers.** How many people can watch at the same time, or unlimited.
- **Label.** An optional name to recognize the share later.

Select **Create**. camera.ui gives you a **Share Link** and an **Access Code**. The access code is shown only once, so copy it before closing.

The viewer page starts with the sound off. The recipient can turn it on, and on cameras with two-way audio, use the microphone button to talk back.

::: tip Requires camera.ui Cloud
Sharing needs your server connected to **camera.ui Cloud** ([Settings → Remote](/remote/cloud)) and online. The cloud hosts the link and helps the viewer find your server, but the video travels over a **direct, end-to-end-encrypted connection** between the viewer and your server. It never passes through camera.ui's servers, and the access code is checked only on your own server.
:::

<Shot src="/img/cameras/share-dialog.png" alt="Share dialog with link and access code" />

## Managing shares

A camera's **Shares** tab lists its active share links: the label, the shared source, when each was created, when it expires, and how many people are watching against the viewer limit. The link can be copied again, the access code can't be retrieved. Select **Revoke** to end a share immediately.
