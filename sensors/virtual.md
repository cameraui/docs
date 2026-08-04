---
title: Virtual sensors
---

# Virtual sensors

A **virtual sensor** is a sensor with no plugin behind it. You create it yourself, camera.ui holds its state, and you set that state from the UI or from an [automation](/automations/).

Use one to mirror an external device or a state into camera.ui: a doorbell you trigger from an automation, a contact you flip when a message arrives over MQTT, a switch that stands for something no plugin reports. Once created, a virtual sensor behaves like any other [sensor](/sensors/). You can assign it to cameras, place it on the video as a [shortcut](/cameras/shortcuts), export it to your smart home, and use it as an automation trigger.

Creating, renaming, and deleting virtual sensors needs admin.

## Create a virtual sensor

Open the **Sensors** page and click **Create virtual sensor**. Fill in:

- **Type.** What the sensor represents. Pick it once, it can't be changed later.
- **Name.** How the sensor appears in camera.ui, for example "Front Door". Two virtual sensors of the same type can't share a name.

The sensor starts in its idle state: off, closed, locked, or disarmed, depending on the type. It belongs to no camera yet; click its row to assign cameras and it shows up in their Overview right away.[^cameradelete]

<Shot src="/img/sensors/virtual-sensors-list.png" alt="Virtual sensors on the Sensors page" />

## Available types

There are 23 types:

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
- **Gas.** Clear or triggered.
- **Carbon Monoxide.** Clear or triggered.
- **Heat.** Clear or triggered.
- **Cold.** Clear or triggered.
- **Vibration.** Clear or triggered.
- **Tamper.** Clear or triggered.
- **Problem.** Clear or triggered.
- **Power.** Clear or triggered.
- **Illuminance.** A light-level reading in lux.
- **CO₂.** A carbon dioxide reading in ppm.

## Control it

On an assigned camera's **Overview** tab, Doorbell, Switch, Light, Siren, Lock, Garage, and Security System sit there with their controls and work the same as the plugin-provided ones, see [Controls & states](/sensors/controls). The same controls appear in the sensor's edit dialog on the **Sensors** page, which also covers sensors assigned to no camera.

Contact, Occupancy, Smoke, Leak, Temperature, Humidity, Gas, Carbon Monoxide, Heat, Cold, Vibration, Tamper, Problem, Power, Illuminance, and CO₂ are read-only. Their value comes from an automation.

Lock, Garage, and Security System follow what you set immediately. There is no hardware to report back, so they never sit in a "locking" or "opening" state.

camera.ui remembers the last state of a virtual sensor, so it survives a restart.

## Control it from an automation

In the [automation editor](/automations/), a **Control sensor** action sets a virtual sensor, and a **Sensor change** trigger reacts when its state changes. For the read-only types this is the only way to set a value: an automation that receives an MQTT message, for example, can put that value on a virtual temperature sensor.

## Rename or delete

Both happen on the **Sensors** page: click the row to rename the sensor, use the delete button on the row to remove it.[^delete]

Renaming changes the name everywhere, in the Overview, on shortcuts, and in automations. Automations that use the sensor keep working.

[^cameradelete]: Deleting a camera only removes the assignment. The sensor itself stays and can be assigned to other cameras.

[^delete]: Deleting a virtual sensor stops any automation that references it. Creating a new sensor with the same type and name does not restore the link, since it is a new sensor. Point the automation at it again.
