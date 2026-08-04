---
title: Set up sensors
---

# Set up sensors

Most sensors come from [plugins](/plugins/). To give a camera a sensor, you enable the plugin that provides it and turn the sensor on, all from the camera's settings. Every sensor in the system, including ones that belong to no camera, is then managed on the **Sensors** page. Both need admin.

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

A doorbell sensor assigned to a camera starts a camera event on every ring automatically, no need to enable it under Detection. Doorbells you assigned before this release keep their current setting.

## Configure settings

Many plugins and sensors have their own options, shown right there as a form: plugin settings that apply to this camera, and per-sensor settings. Changes take effect immediately.

Once enabled, sensors show up in the camera's Overview and on the video. See [Controls & states](/sensors/controls) to use them, and [PTZ & autotrack](/sensors/ptz) for PTZ cameras.

## The Sensors page

The **Sensors** page lists the sensors you manage: plugin-provided and virtual. Sensors a camera brings itself, its motion, battery, or PTZ, are hidden by default; the settings button next to the search field brings them back. Each row shows the connection state, name, type, providing plugin, and assigned cameras. A camera-hardware row shows a lock next to its camera; a sensor hidden from your smart home carries a crossed-out eye next to its name. Two floating buttons switch between the table and a card view and start select mode, where you tick any number of sensors and hide, unhide, or delete them at once. A sensor's icon glows while it is active, so you can tell at a glance that motion is running, a door is open, a light is on, or a doorbell is ringing. Search and the sortable columns keep large setups manageable.

<Shot src="/img/sensors/sensors-page.png" alt="Sensors page listing all sensors" />

Click a row to edit the sensor:

- **Name.** How the sensor appears everywhere.
- **Assigned cameras.** Pick any number of cameras. The sensor shows up on those cameras and can trigger their detection. Camera hardware is fixed to its camera and can't be re-assigned.
- **Expose sensor.** Whether the sensor shows up in HomeKit, Home Assistant, and MQTT.

Controllable sensors can also be operated right in this dialog.

Each row offers a few actions:

- **History.** The sensor's recorded state changes.
- **Hide sensor.** Takes the row out of the list, for sensors you don't care about. **Show hidden** at the bottom brings them back; hiding changes nothing about the sensor itself.
- **Delete sensor.** Only virtual sensors and disconnected plugin leftovers can be deleted. A sensor whose plugin is connected would come back on the next reconnect anyway, so the button is disabled for those.[^delete]

## Virtual sensors

Some sensors have no plugin behind them: you create those yourself on the **Sensors** page. See [Virtual sensors](/sensors/virtual).

[^delete]: Deleting removes the sensor and its assignments. A deleted plugin sensor is recreated as a new sensor if its plugin registers it again, and anything that referenced the old one (automations, smart-home exports) must be pointed at the new sensor.
