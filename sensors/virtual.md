---
title: Virtual sensors
---

# Virtual sensors

A **virtual sensor** is a sensor with no plugin behind it. You create it on a camera yourself, camera.ui holds its state, and you set that state from the camera's Overview tab or from an [automation](/automations/).

Use one to mirror an external device or a state into camera.ui: a doorbell you trigger from an automation, a contact you flip when a message arrives over MQTT, a switch that stands for something no plugin reports. Once created, a virtual sensor behaves like any other [sensor](/sensors/). It shows up in the camera's Overview, can be placed on the video as a [shortcut](/cameras/shortcuts), and works as an automation trigger.

Creating, renaming, and deleting virtual sensors needs admin.

## Create a virtual sensor

Open the camera's [settings](/cameras/settings), go to the **Settings** tab and expand **Virtual Sensors**. Click **Create Virtual Sensor** and fill in:

- **Type.** What the sensor represents. Pick it once, it can't be changed later.
- **Name.** How the sensor appears in camera.ui, for example "Front Door". Two sensors of the same type on one camera can't share a name.

The sensor belongs to that camera and shows up in its Overview right away.[^cameradelete] A new one starts in its idle state: off, closed, locked, or disarmed, depending on the type.

<Shot src="/img/sensors/virtual-sensors-list.png" alt="Virtual Sensors section in the camera settings" />

## Available types

There are 13 types:

- **Doorbell.** A ring you trigger. It resets itself two seconds later.
- **Switch.** On or off.
- **Contact.** Open or closed, for a door or window.
- **Occupancy.** Occupied or empty.
- **Smoke.** Clear or triggered.
- **Leak.** Clear or triggered.
- **Light.** On or off, with brightness.
- **Siren.** On or off, with volume.
- **Lock.** Locked or unlocked.
- **Garage.** Open or closed.
- **Security System.** Off, Home, Away, or Night.
- **Temperature.** A temperature reading.
- **Humidity.** A humidity reading.

## Control it from the Overview

Open the camera and go to the **Overview** tab. Doorbell, Switch, Light, Siren, Lock, Garage, and Security System sit there with their controls and work the same as the plugin-provided ones, see [Controls & states](/sensors/controls).

Contact, Occupancy, Smoke, Leak, Temperature, and Humidity are read-only in the Overview. Their value comes from an automation.

Lock, Garage, and Security System follow what you set immediately. There is no hardware to report back, so they never sit in a "locking" or "opening" state.

camera.ui remembers the last state of a virtual sensor, so it survives a restart.

## Control it from an automation

In the [automation editor](/automations/), a **Control sensor** action sets a virtual sensor, and a **Sensor change** trigger reacts when its state changes. For the read-only types this is the only way to set a value: an automation that receives an MQTT message, for example, can put that value on a virtual temperature sensor.

## Rename or delete

The **Virtual Sensors** list shows every virtual sensor on the camera with its type. Use the pencil to rename it, the red icon to delete it.[^delete]

Renaming changes the name everywhere, in the Overview, on shortcuts, and in automations. Automations that use the sensor keep working.

[^cameradelete]: Deleting a camera also deletes the virtual sensors you created on it.

[^delete]: Deleting a virtual sensor stops any automation that references it. Creating a new sensor with the same type and name does not restore the link, since it is a new sensor. Point the automation at it again.
