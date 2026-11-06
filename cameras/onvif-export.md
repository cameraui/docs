---
title: ONVIF export
---

# ONVIF export

camera.ui can hand its cameras to other apps as an ONVIF device: another NVR, an ONVIF client, or the ONVIF integration of Home Assistant.[^h265] Each camera becomes a video source with its streams as profiles, from high to low resolution. Snapshot sources and disabled cameras are left out.

## Turning it on

The ONVIF server is off by default. Switch on **ONVIF export** under **Settings → [Streaming](/admin/streaming)** and save. In the other app, add an ONVIF camera with the address of the camera.ui server and port 2005. An app that asks for the full address takes the one in **Address**, `http://<server>:2005/onvif/device_service`.

camera.ui keeps the camera list up to date on its own: adding, renaming, disabling or removing a camera changes it without a restart. A stream stays out of its camera's profiles when you switch off **ONVIF export** for it in the camera's **Sources** tab.

## Login

The ONVIF server asks for no login: anyone who reaches the port sees the names of all cameras. Keep the port inside your own network.

The video itself runs over RTSP and needs the **Username** and **Password** of the **RTSP** card on the same page. Enter them as the camera's login in the other app. If they are still `admin` and `admin`, change them before you turn the export on. What an RTSP client gets without a query of its own is set by **Default query**, video and audio unless you changed it.

[^h265]: Home Assistant's ONVIF integration only takes H.264 streams and leaves out a camera's H.265 profiles.
