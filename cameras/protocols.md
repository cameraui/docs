# Connection protocols

When you [add a camera manually](/cameras/add-camera#add-a-camera-manually), each stream URL begins with a **protocol** that tells camera.ui how to connect. RTSP is the default and works with almost any IP camera. In the add-camera dialog, the **(i)** button next to the protocol field opens help for the selected protocol, with URL formats and examples.

## RTSP (recommended)

**RTSP** is the universal choice and what most cameras provide. A URL looks like this:

```
rtsp://username:password@192.168.1.123:554/path
```

The path after the address is specific to your camera, so check its manual or app for the exact RTSP URL. Many cameras offer a main (high-resolution) and a sub (low-resolution) stream; you can add each as a separate [source](/cameras/add-camera#sources-and-roles).

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

The protocol picker also includes brand- and app-specific options, such as **Tapo**, **Kasa**, **Doorbird**, **GoPro**, **Home Assistant**, **HomeKit**, **Ring**, **Nest**, **Wyze**, and **Tuya**. Many of these depend on a vendor cloud.[^cloud] Use the **(i)** help for the exact setup of each.

## Tips

- You can give one source **multiple URLs**. camera.ui combines them, which helps when streams carry different codecs (for example video on one and backchannel audio on another).
- If you don't know your camera's URLs, try **ONVIF** or [auto-discovery](/cameras/add-camera#discover-a-camera) first.

[^cloud]: Cameras that depend on a vendor cloud (such as Ring or Nest) can be connected, either directly or through a plugin, but they are **not recommended** and **not covered by support**. Use local RTSP / ONVIF cameras for a reliable experience.
