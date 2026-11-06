---
title: Import from Home Assistant
---

# Import from Home Assistant

The **Home Assistant plugin** brings cameras, sensors and controls from Home Assistant into camera.ui. It is the reverse of the [integration](/home-assistant/integration): Home Assistant devices come into camera.ui, where you can assign them to cameras and use them as detection triggers.

## Setup

Install and enable the **Home Assistant** plugin from the [Plugins](/plugins/) page, then open its settings:

- **Home Assistant URL.** The address of your Home Assistant, for example `http://homeassistant.local:8123`.
- **Access Token.** A long-lived access token from your Home Assistant profile, under **Security**.

Running camera.ui as the [Home Assistant app](/home-assistant/app)? Leave both empty. The plugin connects to Home Assistant on its own, no token needed.

## What you can import

The plugin offers every Home Assistant entity it can map, under **Discovered** on the [Sensors page](/sensors/setup#the-sensors-page), with its name, entity id, type and room. Nothing comes over until you pick it.

- **Sensors.** Motion, occupancy, contact, doorbell, smoke, leak, gas, carbon monoxide, and other supported types become camera.ui [sensors](/sensors/).
- **Controls.** Locks, garage doors, alarm panels, switches, lights, and sirens come in as controls. Operating one in camera.ui operates it in Home Assistant.

Sensors that belong to a camera come in with their meaning: person, vehicle and animal as object detection instead of motion, sounds such as breaking glass as audio with the sound's name, a Reolink visitor sensor as doorbell. Binary sensors with the device class Sound come in as audio sensors. Home Assistant has no doorbell class for binary sensors, so a doorbell button exposed as one goes under **Doorbell Entities** in the plugin settings, comma-separated. It is then offered as a doorbell that rings when the sensor turns on.

Unsupported entity types never show up. Entities you don't want can be [hidden](/sensors/setup#the-sensors-page) in the Discovered list.

## Cameras

Cameras that other integrations add to Home Assistant show up under **Discovered** on the [Cameras page](/cameras/add-camera#discover-a-camera), and you add them like any discovered camera. The picture comes through Home Assistant over WebRTC, live view, detection and recording run in camera.ui.

- **Which cameras.** Every camera Home Assistant can stream over WebRTC, natively or through its go2rtc integration, which is part of the default setup. Cameras that only deliver still images don't show up, among them those from HomeKit Device (Aqara G2H and G3, for example), Blink, Bosch, motionEye, ZoneMinder and Agent DVR.
- **Sources.** The streams of one device become the sources of one camera: Clear, Balanced and Fluent for Reolink, High, Medium and Low for UniFi Protect, HD and SD for Imou. A second lens becomes a camera of its own, for example the telephoto lens of a Reolink TrackMix or the package camera of a UniFi G4 Doorbell Pro. ONVIF gives one camera per profile. A stream that Home Assistant ships disabled, for Reolink usually Clear, comes along once you enable its entity in Home Assistant and add the camera again.
- **Sensors.** The camera's own entities in Home Assistant become sensors of the camera and no longer show up as separate sensors: motion, person, vehicle, animal, doorbell, battery, siren and light, and sounds such as breaking glass or a crying baby where the integration reports them. The camera's other entities, its switches for example, stay under **Discovered** on the Sensors page.
- **Two-way audio.** camera.ui shows the microphone when Home Assistant's answer allows talking. Officially Home Assistant needs the preview feature **Two-way audio** under Settings > System > Labs and an integration that supports it, such as Reolink or Matter. If talking does not work for a camera, turn on **Disable two-way audio** for its source.

While Home Assistant restarts, the stream pauses and comes back on its own. If camera.ui has a [plugin](/plugins/) for the camera's brand, that plugin usually gives more: native events, two-way audio without Home Assistant, PTZ.[^cloud]

## Using imported sensors

Adopted sensors show up in the [Sensors](/sensors/) view like any other. Assigned to a camera, one works as a detection trigger like a native sensor: a Home Assistant motion detector or door contact can start a camera event. Imported controls appear in the camera's Overview and in [automations](/automations/). On the [Sensors page](/sensors/setup#the-sensors-page) each imported sensor shows its Home Assistant entity id as its **ID**, to tell apart entities with the same friendly name and to search by. The entity id is only a label: camera.ui identifies the entity by its registry id, so renaming it in Home Assistant keeps the sensor and its assignments. If you delete the entity in Home Assistant, the sensor stays and is marked as removed until you delete it here too; if Home Assistant is down, it just shows as unavailable.

Adopted entities are remembered by camera.ui, not by the plugin, so they survive restarts of both.

## Running the integration too

You can import from Home Assistant and run the [integration](/home-assistant/integration) at the same time. The plugin never re-imports the cameras and sensors that camera.ui itself exports to Home Assistant.

**Imported sensors are never sent back.** A sensor pulled in from Home Assistant is never exported to Home Assistant again, not by this plugin and not by the [integration](/home-assistant/integration), even if you export it to another bridge like HomeKit.

[^cloud]: Cloud cameras such as Ring or battery-powered Nest cameras end their streams after a few minutes, they are not meant for continuous recording.
