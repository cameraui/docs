# Connection protocols

When you [add a camera manually](/cameras/add-camera#add-a-camera-manually), each stream URL begins with a **protocol**. camera.ui reads it from the URL and shows it under the field. The **(i)** button next to the field opens help for that protocol, with URL formats and examples.

A URL with an unsupported protocol won't save. The **(i)** help only appears once camera.ui recognizes the protocol, which makes it a quick check for a URL.

## RTSP (recommended)

**RTSP** is the universal choice and what most cameras provide. A URL looks like this:

```
rtsp://username:password@192.168.1.123:554/path
```

The path after the address is camera-specific; the camera's manual or app has it. Many cameras offer a main (high-resolution) and a sub (low-resolution) stream; you can add each as a separate [source](/cameras/add-camera#sources-and-roles).

## Other common protocols

| Protocol | Use it for |
|---|---|
| **ONVIF** | A standard most cameras support. Connects without knowing the RTSP path, and powers discovery. |
| **HTTP / HTTPS** | Snapshot (JPEG), MJPEG, HTTP-FLV, or MPEG-TS streams. |
| **RTMP** | RTMP streams. |
| **FFmpeg** | Wrap any source FFmpeg can read. |

## NVR and DVR systems

| Protocol | Use it for |
|---|---|
| **ISAPI** | Hikvision two-way audio (add it alongside an RTSP source). |
| **DVRIP** | Dahua and compatible recorders (also known as NetSurveillance / Sofia / XMeye). |

## Brand and smart-home integrations

camera.ui also recognizes brand- and app-specific URLs, such as **Tapo**, **Kasa**, **Doorbird**, **GoPro**, **Home Assistant**, **HomeKit**, **Ring**, **Nest**, **Wyze**, and **Tuya**. Many of these depend on a vendor cloud.[^cloud] Paste the URL and use the **(i)** help for the exact setup of each.

## Tips

- You can give one source **multiple URLs**. camera.ui combines them, which helps when streams carry different codecs (for example video on one and backchannel audio on another).
- If you don't know your camera's URLs, try **ONVIF** or [auto-discovery](/cameras/add-camera#discover-a-camera) first.

[^cloud]: Cameras that depend on a vendor cloud (such as Ring or Nest) can be connected, either directly or through a plugin, but they are **not recommended** and **not covered by support**. Use local RTSP / ONVIF cameras for a reliable experience.
