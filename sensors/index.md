---
title: Sensors & accessories
---

# Sensors & accessories

A **sensor** is any non-video capability in camera.ui: a detection, an environmental reading, or a controllable accessory. Most sensors come from [plugins](/plugins/); virtual sensors you create yourself.

Every sensor is its own entity. It keeps its name, settings, and history no matter which cameras it is attached to, and it can be assigned to one camera, to several, or to none at all.

## Types of sensor

- **Detection.** Motion, object, audio, face, license plate, and semantic (CLIP). These are covered under [Detection & AI](/detection/).
- **Environmental & state.** Contact, temperature, humidity, occupancy, smoke, leak, battery, gas, carbon monoxide, CO₂, heat, cold, vibration, tamper, problem, power, and illuminance. These are read-only. The binary ones (like gas or tamper) can trigger a camera's detection the same way a contact sensor does.
- **Accessories.** Light, switch, lock, siren, garage, security system, and doorbell. These can be controlled.
- **PTZ.** Pan, tilt, and zoom. See [PTZ & autotrack](/sensors/ptz).

## Camera hardware and standalone sensors

Sensors come in two flavors:

- **Camera hardware.** A camera's own plugin registers them on that camera: its doorbell button, spotlight, siren, or battery. The assignment is fixed; you can't move them to another camera.
- **Standalone.** Everything else, from a smart plug brought in by an integration to a virtual sensor you created. You decide which cameras it belongs to, on the **Sensors** page. An assigned sensor shows up on those cameras and can trigger their detection.

## Setting up and using sensors

Plugin sensors are enabled per camera from the camera's settings, and every sensor in the system is managed on the **Sensors** page. See **[Set up sensors](/sensors/setup)** for both, and **[Controls & states](/sensors/controls)** to read state and operate accessories.

Virtual sensors are the exception: you create them yourself, no plugin involved. See **[Virtual sensors](/sensors/virtual)**.

## Export to your smart home

Each sensor has an **Expose sensor** toggle. Exposed sensors show up in HomeKit, Home Assistant, and MQTT; turn the toggle off to keep a sensor local to camera.ui. Camera-fixed types such as PTZ and battery are always handled by their camera and have no toggle.

## In automations

Sensors can also drive [automations](/automations/). For example, trigger an action when a contact sensor opens, or turn on a light when motion is detected.
