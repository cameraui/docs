---
title: HomeKit
---

# HomeKit

The HomeKit plugin adds your cameras and sensors to **Apple Home**. Cameras stream and record through the Home app across your Apple devices; sensors appear as accessories you can see and control there.

<Shot src="/img/plugins/homekit-pairing.png" alt="HomeKit camera settings with pairing QR code" />

## Setup

1. Install and enable the **HomeKit** plugin.
2. Assign it to the cameras you want in Home, on the plugin's **Cameras** tab or from a [camera's Plugins tab](/sensors/setup).
3. Open a camera's **HomeKit settings**. Each camera is added to Home individually and has its own **QR code** and **PIN**.
4. In the Apple **Home** app, choose **Add Accessory** and scan the camera's QR code, or enter its PIN.

To pair on the device camera.ui is open on, choose **More options** in the Home app and type the PIN; the copy button next to it copies the PIN.

**HomeKit Secure Video** recording works once you've set it up in Home.

## Secure Video on iOS 27

Cameras with an HEVC (H.265) main stream use Apple's newer secure video services. Live view at home and away, recording and two-way audio all run on the camera's own HEVC stream without transcoding, so a 4K camera doesn't cost a CPU core. This needs iOS 27 or tvOS 27 on the devices you watch on and on the home hub.

Cameras with an H.264 main stream stay on the classic HomeKit camera services, because Apple's new remote view only takes HEVC. The plugin picks the path from the main stream's codec when the camera is published.

If your home stays on iOS 26 or older, turn on **Force legacy path** in the camera's advanced settings. The camera then uses the classic services and its HEVC stream is transcoded to H.264.

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

Opening a camera in Home takes a few milliseconds, with H.264 or H.265, as long as the source is kept ready: enable [hot mode and preload](/cameras/add-camera#source-options) on the cameras you bridge.

## Settings

Each camera's HomeKit settings include:

- **QR code and PIN.** The pairing details for that camera.
- **Force legacy path.** Keeps the camera on the classic HomeKit services, see [Secure Video on iOS 27](#secure-video-on-ios-27). Off by default.
- **Use Hardware Acceleration.** Uses the GPU, if one is available, when a stream has to be transcoded. On by default.
- **Use Hardware Acceleration for HKSV.** The same for HomeKit Secure Video recordings. On by default; turn it off for a camera whose recordings break up.
- **Port and mDNS advertiser.** Advanced networking options; the defaults are usually fine.
- **Reset pairing.** Generate a new code and re-add the camera if pairing breaks.

The plugin's own settings hold the same set for the sensor bridge: its QR code, PIN, port, mDNS advertiser, and a **Reset Bridge Pairing** button.

## Good to know

- Each camera is its own HomeKit accessory, so you add cameras one at a time. Standalone sensors share the one bridge and only need a single pairing.
- Cameras that support two-way audio can be talked to from the Home app.
