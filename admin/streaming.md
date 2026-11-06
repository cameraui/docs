---
title: Streaming
---

# Streaming

**Settings → Streaming** (admins only) sets what the streaming engine offers other apps: the camera streams over RTSP, the ONVIF export, WebRTC for live view and two more ports. Most changes apply while everything keeps running. A new RTSP or WebRTC port restarts the streaming engine, the page asks first, and live views and recordings pause for a few seconds. Without host networking in Docker, publish a changed port as well.

## RTSP

Other apps take each camera stream over RTSP, on port 2001 by default.[^desktop] The camera's **Sources** tab shows the **RTSP URL** of every stream.

- **Username** and **Password.** The login other apps use for the streams. A new installation starts with the username `cameraui` and a random password. An older one may still use `admin` and `admin`, which anyone on your network can guess, so change it there. Apps that use the old login need the new one.
- **Default query.** What an app gets when its RTSP URL asks for nothing else: **Video and audio** by default. The other choices narrow it to the video or to MP4 codecs, or widen it to every audio track or every track. **Own query** takes any query the streaming engine understands.

## ONVIF

**ONVIF export** starts the ONVIF server, on port 2005 by default, and **Address** shows what other apps enter. See [ONVIF export](/cameras/onvif-export).

## WebRTC

**Port** is where live view over WebRTC connects, 2004 by default. **Addresses** adds addresses with port that the apps try as well, a hostname or a second IP for example. `stun:2004` adds the server's public address. The **STUN** and **TURN** servers on the same card are explained under [Remote access](/remote/#webrtc).

## Other ports

**SRTP (HomeKit)** carries the video of the [HomeKit](/plugins/homekit) plugin, port 2002 by default. **RTMP** is for apps that send or take RTMP streams, port 2003 by default. Each port has to be free on the machine.

## Advanced

**Edit go2rtc.yaml** opens the streaming engine's file for what the page doesn't cover. The save asks first and restarts the streaming engine when a change needs it. camera.ui writes the camera streams and the ONVIF camera list into the file itself, edits there don't last.

[^desktop]: The desktop app adds 100 to every default port, so RTSP is on 2101, WebRTC on 2104 and so on.
