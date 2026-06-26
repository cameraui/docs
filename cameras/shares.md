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
- **Label.** An optional name to recognise the share later.

Select **Create**. camera.ui gives you a **Share Link** and an **Access Code**. Send both to the person you want to share with. The access code is shown only once, so copy it before closing.

The recipient opens the link, enters the code, and watches the live stream. They don't need a camera.ui account.

::: tip Requires camera.ui Cloud
Sharing needs your server connected to **camera.ui Cloud** ([Settings → Remote](/remote/cloud)) and online. The cloud hosts the link and helps the viewer find your server, but the video travels over a **direct, end-to-end-encrypted connection** between the viewer and your server. It never passes through camera.ui's servers, and the access code is checked only on your own server.
:::

![Share dialog with link and access code](/img/cameras/share-dialog.png)

## Managing shares

A camera's **Shares** tab lists its active share links, with the label, when each was created, when it expires, the viewer limit, and how many people are watching now. Select **Revoke** to end a share immediately.
