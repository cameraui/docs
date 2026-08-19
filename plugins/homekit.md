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

Pairing from the same device camera.ui is open on? There is nothing to scan then, so use **More options** in the Home app and type the PIN. The copy button next to it puts the PIN on your clipboard.

Once added, the camera streams in Home and supports **HomeKit Secure Video** recording if you've set that up in Home.

## What ends up where

A camera is always its own accessory, with a motion sensor on it. That motion sensor is fed by camera.ui's detection, so it works whether or not a motion sensor is assigned.

What a sensor turns into depends on its [camera assignment](/sensors/setup):

**Assigned to a camera**, the sensor becomes part of that camera's accessory instead of a separate tile:

- **Motion** feeds the camera's motion sensor and gets no accessory of its own.
- **Doorbell** adds the doorbell button to the camera.
- **Battery** adds the charge level and the low-battery warning.
- **Spotlight and siren** become controls on the camera, as long as they are the camera's own hardware.

**Not assigned to a camera**, the sensor becomes its own accessory behind the single **camera.ui Bridge**: contact, occupancy, smoke, leak, temperature, humidity, lock, garage door, switch and security system always land here, and so do motion sensors, doorbells, lights and sirens that belong to no camera. A standalone light or siren stays on the bridge even if you assign it to a camera; only hardware built into the camera moves onto it.

The bridge runs as soon as the plugin does, with or without sensors. Pair it once and every sensor you expose later joins automatically. Its QR code and PIN sit in the plugin's settings.

Whether a sensor comes across at all is the **Expose sensor** toggle on the [Sensors page](/sensors/setup#the-sensors-page). Camera hardware has no toggle, it always follows its camera.

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
