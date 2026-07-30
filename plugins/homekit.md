---
title: HomeKit
---

# HomeKit

The HomeKit plugin adds your cameras and sensors to **Apple Home**. Cameras stream and record through the Home app across your Apple devices; sensors appear as accessories you can see and control there.

<Shot src="/img/plugins/homekit-pairing.png" alt="HomeKit camera settings with pairing QR code" />

## Setup

1. On the **Plugins** page, search for and install the **HomeKit** plugin, then enable it.
2. Assign it to the cameras you want in Home, on the plugin's **Cameras** tab or from a [camera's Plugins tab](/sensors/setup).
3. Open a camera's **HomeKit settings**. Each camera is added to Home individually and has its own **QR code** and **PIN**.
4. In the Apple **Home** app, choose **Add Accessory** and scan the camera's QR code, or enter its PIN. Repeat for each camera.

Once added, the camera streams in Home and supports **HomeKit Secure Video** recording if you've set that up in Home.

## What ends up where

A camera comes across as one accessory with everything that belongs to it: its motion sensor, doorbell button, spotlight, siren, and battery.

Every other [exposed sensor](/sensors/) (contact, occupancy, smoke, leak, temperature, humidity, lock, garage, switch, security system, standalone lights and sirens) lives behind a single **camera.ui Bridge** accessory. The bridge appears as soon as the first such sensor is exposed; pair it once and every sensor you expose later joins automatically. Its QR code and PIN sit in the plugin's settings.

Whether a sensor comes across at all is the **Expose sensor** toggle on the [Sensors page](/sensors/setup#the-sensors-page).

## Fast streaming

Opening a camera in Home is near-instant, taking only a few milliseconds, whether the camera uses H.264 or H.265. This relies on the source being kept ready, so enable [hot mode and preload](/cameras/add-camera#source-options) on the cameras you bridge.

## Settings

Each camera's HomeKit settings include:

- **QR code and PIN.** The pairing details for that camera.
- **Hardware acceleration.** Uses the GPU, if one is available, for HomeKit Secure Video recordings. On by default.
- **Adaptive stream source.** On by default. When you're away from home on a slow connection, camera.ui picks the source that matches the size Home asks for: high, mid, or low resolution. Turn it off to always use the primary source.
- **Port and mDNS advertiser.** Advanced networking options; the defaults are usually fine.
- **Reset pairing.** Generate a new code and re-add the camera if pairing breaks.

The plugin's own settings hold the same set for the sensor bridge: its QR code, PIN, port, mDNS advertiser, and a **Reset Bridge Pairing** button.

## Good to know

- Each camera is its own HomeKit accessory, so you add cameras one at a time. Standalone sensors share the one bridge and only need a single pairing.
- Cameras that support two-way audio can be talked to from the Home app.
