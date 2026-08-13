---
title: Building automations
---

# Building automations

Automations connect what happens at your cameras to actions camera.ui can take. You build them visually: drag **nodes** onto a canvas and connect them into a flow. Automations are an admin feature.

<Shot src="/img/automations/editor-canvas.png" alt="Automation editor canvas" />

## How a flow works

A flow runs from left to right: a **trigger** starts it, optional **conditions** decide whether it continues, and **actions** do something. **Utilities** help pass data between steps.

Open **Automations** from the menu, then create one with the **+** button. A new flow starts empty and disabled, so you can build it before it runs.

## Triggers

A trigger is what starts a flow. You can use more than one.

- **Detection event.** Something detected at a camera: motion, a person, vehicle, or animal, an audio event like a doorbell or glass breaking, a recognised face, or a license plate. Filter by object, confidence, and event phase (start, update, end).
- **Sensor change.** A sensor's state changes, like a contact sensor opening. This also covers your cameras' detection sensors: motion, objects, faces, license plates, and classifiers. Face, plate, and classifier sensors carry what was recognised, so a flow can react to a specific person, car, plate, or result, for example a bird classifier that reports the species.[^detvssensor]
- **Schedule.** A recurring time, set with a cron expression.
- **System event.** Something in camera.ui itself, such as a camera connecting or disconnecting, or a plugin starting or stopping.
- **Webhook.** An external service calls a URL to start the flow.
- **MQTT message.** A message arrives on an MQTT topic. Set the topic (`+` and `#` wildcards work) and choose how to match: any message, an exact payload, or a value at a JSON path like `params.switch:0.output`. Needs the MQTT connection set up in Settings.
- **Geofence.** A user enters or leaves a location you define.
- **Manual.** You run the flow yourself with the Run button, useful while building and testing.

[Virtual sensors](/sensors/virtual) work here too. You create them on the Sensors page, then set them with a **Control sensor** action and react to them with a **Sensor change** trigger.

## Conditions

Conditions decide whether a flow continues:

- **If / else.** Branch on a comparison.
- **Switch.** Branch on several possible values.
- **Sensor state.** Check one or more sensors, combined with AND or OR. Each value can be a fixed value or a variable from an earlier step. For a detection sensor you can check a specific value, like a recognised name, a plate, or a classifier label. When a sensor holds several values at once, the check passes if any one matches, and matching ignores upper and lower case.
- **Time.** Only continue within a time-of-day range and on chosen days.

## Actions

Actions are what the flow does:

- **Send notification.** Push an alert with a title, message, and severity.
- **Notifications on/off.** Mute or unmute push. Under **Applies to** pick **Everyone**, **One camera**, or **One user**. Muting one camera stops its push while every other camera keeps notifying, so you can silence the street camera during the day and turn it back on at night. Muted alerts still land in the in-app bell and the events still show up on the timeline. Critical alerts always come through.
- **Capture snapshot.** Take a fresh image from a camera.
- **Control sensor.** Set an accessory, such as turning on a light or locking a door. Values can be fixed or taken from a variable.
- **Camera control.** Change one or more of a camera's settings in one step: snooze detections, disable the camera, recording (on/off, mode, pre-buffer, and which streams it records), detection thresholds and timeouts, PTZ autotrack (on/off, which object types it tracks, return to home, minimum confidence), and snapshot refresh. So "record just the main stream while the disk is full" is an automation.
- **HTTP request.** Call an external service.
- **MQTT publish.** Send a message to an MQTT topic. Set the topic and the payload, and turn on **Retain** if the broker should keep the message for anyone subscribing later. Wildcards aren't allowed in the topic. Needs the MQTT connection set up in Settings.
- **Plugin call.** Run a detection or analysis plugin on an image.
- **Set variable** and **delay.** Hold a value, or wait before the next step.

## Utilities

- **Image input.** Load an image (from a URL, a variable, or an upload) for an action to use.
- **Output.** Collect results to view after the flow runs.

## Options and running

In the toolbar you can name the flow, turn it **Enabled** on or off, and set two behaviours:

- **Ignore repeated events**, so a burst of triggers runs the flow once.
- **Wait for completion**, so a new trigger waits until the current run finishes.

Save with the **Save** button. If your flow has a **Manual** trigger, a **Run** button lets you test it. In the list, each automation shows when it last ran, and camera.ui disables one automatically if it points at a camera or sensor you've removed, with a notice to fix it. On the list you can select several automations at once to enable, disable, or delete them together.

To share automations, see [Blueprints & store](/automations/blueprints).

[^detvssensor]: A Detection event fires on each raw event as it happens. A Sensor change reacts to the sensor's own state, which keeps the recognised names, plates, or labels for as long as the subject stays in view.
