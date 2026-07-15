---
title: Set up sensors
---

# Set up sensors

Most sensors come from [plugins](/plugins/). To give a camera a sensor, you enable the plugin that provides it and turn the sensor on, all from the camera's settings. Virtual sensors are the exception: you create those yourself, no plugin involved. Both need admin.

## Open the Plugins tab

Open a camera's [settings](/cameras/settings) and go to the **Plugins** tab. It is grouped into categories:

- **Detection.** The detectors: motion, object, audio, face, and license plate.
- **Accessories.** Controllable accessories and state sensors, such as lights, locks, switches, sirens, and contact sensors.
- **Core.** Single-provider sensors such as PTZ and battery.
- **Hub.** Smart-home and platform integrations, such as a HomeKit bridge.
- **More.** Enable or disable whole plugins for this camera.

A camera added through a plugin (such as ONVIF or a cloud camera) also has a category for that plugin, holding its settings.

<Shot src="/img/sensors/plugins-tab.png" alt="Camera settings Plugins tab" />

## Assign and enable sensors

Within a category, pick a **sensor type**, then choose the **plugin** that should provide it. Detection types take one provider at a time; accessories can come from several plugins. Each enabled sensor appears in the **Sensors** list, where you can rename it.

## Configure settings

Many plugins and sensors have their own options, shown right there as a form: plugin settings that apply to this camera, and per-sensor settings. Changes take effect immediately.

Once enabled, sensors show up in the camera's Overview and on the video. See [Controls & states](/sensors/controls) to use them, and [PTZ & autotrack](/sensors/ptz) for PTZ cameras.

## Virtual sensors

Some sensors have no plugin behind them: you create them yourself on the camera's **Settings** tab. See [Virtual sensors](/sensors/virtual).
