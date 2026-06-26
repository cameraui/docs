---
title: HomeKit
---

# HomeKit

The HomeKit plugin adds your cameras to **Apple Home**, so you can view them and get recordings through the Home app and across your Apple devices. It bridges each camera along with the sensors you've assigned to it, such as motion, a doorbell, or a contact sensor.

![HomeKit camera settings with pairing QR code](/img/plugins/homekit-pairing.png)

## Setup

1. On the **Plugins** page, search for and install the **HomeKit** plugin, then enable it.
2. Assign it to the cameras you want in Home, on the plugin's **Cameras** tab or from a [camera's Plugins tab](/sensors/setup).
3. Open a camera's **HomeKit settings**. Each camera is added to Home individually and has its own **QR code** and **PIN**.
4. In the Apple **Home** app, choose **Add Accessory** and scan the camera's QR code, or enter its PIN. Repeat for each camera.

Once added, the camera streams in Home and supports **HomeKit Secure Video** recording if you've set that up in Home.

## Fast streaming

Opening a camera in Home is near-instant, taking only a few milliseconds, whether the camera uses H.264 or H.265. This relies on the source being kept ready, so enable [hot mode and preload](/cameras/add-camera#performance-options) on the cameras you bridge.

## Settings

Each camera's HomeKit settings include:

- **QR code and PIN.** The pairing details for that camera.
- **Hardware acceleration and transcoding.** Tune how the stream is prepared for Home.
- **Port and mDNS advertiser.** Advanced networking options; the defaults are usually fine.
- **Reset pairing.** Generate a new code and re-add the camera if pairing breaks.

## Good to know

- Each camera is its own HomeKit accessory, not one shared bridge, so you add them one at a time.
- The sensors that come across into Home are the ones assigned to the camera: motion, doorbell, battery, light, contact, siren, security system, switch, and audio.
