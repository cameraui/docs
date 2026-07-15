---
title: Sensors & accessories
---

# Sensors & accessories

A **sensor** is any non-video capability attached to a camera: a detection, an environmental reading, or a controllable accessory. Most sensors come from [plugins](/plugins/), and one camera can carry sensors from several plugins at once. The exception is virtual sensors, which you create yourself.

## Types of sensor

- **Detection.** Motion, object, audio, face, license plate, and semantic (CLIP). These are covered under [Detection & AI](/detection/).
- **Environmental & state.** Contact (open/closed), temperature, humidity, occupancy, smoke, leak, and battery. These are read-only.
- **Accessories.** Light, switch, lock, siren, garage, security system, and doorbell. These can be controlled.
- **PTZ.** Pan, tilt, and zoom. See [PTZ & autotrack](/sensors/ptz).

## Setting up and using sensors

Most sensors are provided by plugins and enabled per camera. See **[Set up sensors](/sensors/setup)** to add them to a camera, and **[Controls & states](/sensors/controls)** to read their state and operate accessories.

Virtual sensors are the exception: you create them yourself, no plugin involved. See **[Virtual sensors](/sensors/virtual)**.

## In automations

Sensors can also drive [automations](/automations/). For example, trigger an action when a contact sensor opens, or turn on a light when motion is detected.
