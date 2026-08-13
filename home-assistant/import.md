---
title: Import from Home Assistant
---

# Import from Home Assistant

The **Home Assistant plugin** brings Home Assistant's own sensors and controls into camera.ui. This is the opposite direction from the [integration](/home-assistant/integration): the integration sends camera.ui's cameras and sensors to Home Assistant, this plugin pulls Home Assistant's devices into camera.ui, where you can assign them to cameras and use them as detection triggers.

## Setup

Install and enable the **Home Assistant** plugin from the [Plugins](/plugins/) page, then open its settings:

- **Home Assistant URL.** The address of your Home Assistant, for example `http://homeassistant.local:8123`.
- **Access Token.** A long-lived access token from your Home Assistant profile, under **Security**.

Running camera.ui as the [Home Assistant app](/home-assistant/app)? Leave both empty. The plugin connects to Home Assistant on its own, no token needed.

## What gets imported

Every Home Assistant entity of a supported kind is imported automatically:

- **Sensors.** Motion, occupancy, contact, doorbell, smoke, leak, gas, carbon monoxide, and other supported types become camera.ui [sensors](/sensors/).
- **Controls.** Locks, garage doors, alarm panels, switches, lights, and sirens come in as controls. Operating one in camera.ui operates it in Home Assistant.

Unsupported entity types are skipped. To keep specific entities out, list them under **Excluded Entities**.

## Using imported sensors

Imported sensors show up in the [Sensors](/sensors/) view like any other. Assign one to a camera and it becomes a detection trigger for that camera, exactly like a native sensor: a Home Assistant motion detector or door contact can then start a camera event. Imported controls appear in the camera's Overview and in [automations](/automations/). On the [Sensors page](/sensors/setup#the-sensors-page) each imported sensor shows its Home Assistant entity id as its **ID**, so you can tell two entities with the same friendly name apart, and search by it.

## Running the integration too

You can import from Home Assistant and run the [integration](/home-assistant/integration) at the same time. They don't clash: the plugin never re-imports the cameras and sensors that camera.ui itself exports to Home Assistant, so nothing loops back on itself.

**Imported sensors are never sent back.** A sensor pulled in from Home Assistant is never exported to Home Assistant again, not by this plugin and not by the [integration](/home-assistant/integration), even if you export it to another bridge like HomeKit. There is no loop in either direction.[^stray]

[^stray]: Coming from an older setup? Reload the camera.ui integration in Home Assistant once so any stray camera.ui devices from before this fix disappear.
