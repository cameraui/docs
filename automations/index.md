---
title: Building automations
---

# Building automations

Automations connect what happens at your cameras to actions: drag **nodes** onto a canvas and wire them into a flow. Automations are an admin feature.

<Shot src="/img/automations/editor-canvas.png" alt="Automation editor canvas" />

## How a flow works

A flow runs from left to right: a **trigger** starts it, optional **conditions** decide whether it continues, and **actions** do something. **Utilities** help pass data between steps.

A new flow (**+** on the **Automations** page) starts empty and disabled.

## Triggers

A flow can have more than one trigger.

- **Detection event.** Something detected at a camera: motion, a person, vehicle, or animal, an audio event like a doorbell or glass breaking, a recognized face, or a license plate. Filter by object, confidence, and event phase (start, update, end).
- **Sensor change.** A sensor's state changes, like a contact sensor opening. This also covers your cameras' detection sensors: motion, objects, faces, license plates, and classifiers. Face, plate, and classifier sensors carry what was recognized, so a flow can react to a specific person, car, plate, or result, for example a bird classifier that reports the species.[^detvssensor]
- **Schedule.** A recurring time, set with a cron expression.
- **System event.** Something in camera.ui itself, such as a camera connecting or disconnecting, a plugin starting or stopping, or a plugin sending a notification. The last one turns every plugin push into a trigger, a text alert of the NVR plugin for example: the title and the notification's data fields are available as <span v-pre>`{{system.title}}`, `{{system.type}}`, `{{system.alertTitle}}`</span> and so on, so an **If/Else** condition can pick the one you mean.
- **Webhook.** An external service calls a URL to start the flow.
- **MQTT message.** A message arrives on an MQTT topic. Set the topic (`+` and `#` wildcards work) and choose how to match: any message, an exact payload, or a value at a JSON path like `params.switch:0.output`. Needs the MQTT connection set up in Settings.
- **Geofence.** A user enters or leaves a location you define.
- **Manual.** Started with the **Run** button, for testing.

[Virtual sensors](/sensors/virtual) are set with a **Control sensor** action and trigger through **Sensor change**.

## Conditions

- **If / else.** Branch on a comparison.
- **Switch.** Branch on several possible values.
- **Sensor state.** Check one or more sensors, combined with AND or OR. Each value can be a fixed value or a variable from an earlier step. For a detection sensor you can check a specific value, like a recognized name, a plate, or a classifier label. When a sensor holds several values at once, the check passes if any one matches, and matching ignores upper and lower case.
- **Time.** Only continue within a time-of-day range and on chosen days.

## Actions

- **Send notification.** Push an alert with a title, message, and severity.
- **Notifications on/off.** Mute or unmute push. Under **Applies to** pick **Everyone**, **One camera**, or **One user**. Muting one camera leaves the others notifying. Muted alerts still land in the in-app bell and the events still show up on the timeline. Critical alerts always come through.
- **Capture snapshot.** Take a fresh image from a camera.
- **Control sensor.** Set an accessory, such as turning on a light or locking a door. Values can be fixed or taken from a variable.
- **Camera control.** Change one or more of a camera's settings in one step: snooze detections, disable the camera, recording (on/off, mode, pre-buffer, and which streams it records), detection thresholds and timeouts, PTZ autotrack (on/off, which object types it tracks, return to home, minimum confidence), and snapshot refresh.
- **HTTP request.** Call an external service.
- **MQTT publish.** Send a message to an MQTT topic. Set the topic and the payload, and turn on **Retain** if the broker should keep the message for anyone subscribing later. Wildcards aren't allowed in the topic. Needs the MQTT connection set up in Settings.
- **Plugin call.** Run a detection or analysis plugin on an image.
- **Ask the assistant.** Hand the situation to the [assistant](/assistant/) and use its answer: pick the user it answers for, write the question with the flow's variables, optionally pass a picture, and deliver it as push, as a conversation, or only as a variable for the next steps.
- **Set variable** and **delay.** Hold a value, or wait before the next step.

## Utilities

- **Image input.** Load an image (from a URL, a variable, or an upload) for an action to use.
- **Output.** Collect results to view after the flow runs.

## Passing values between steps

Steps hand values on through **variables**. A node that produces something offers **Add output variable** in its settings: name it, and every step wired after it can use the value. **Variables** on a step lists what is available; if it is empty, the source node isn't connected yet.

Write a variable as <span v-pre>`{{name}}`</span> in any text field. Fields that only take one value, like a sensor value or a condition, let you pick the variable from a list instead of typing it.

**Set variable** stores a value for steps further down. **Alias** on a node prefixes its output variables, so `result` from two different plugins becomes `cam1.result` and `cam2.result` instead of clashing.

A misspelled name is caught on save, with **Unknown variable** naming the one it could not resolve.

## Options and running

The toolbar holds the name, **Enabled**, and two behaviors:

- **Ignore repeated events**, so a burst of triggers runs the flow once.
- **Wait for completion**, so a new trigger waits until the current run finishes.

camera.ui disables an automation automatically if it points at a camera or sensor you've removed, with a notice to fix it. The list shows each automation's last run and lets you enable, disable or delete several at once.

To share automations, see [Blueprints & store](/automations/blueprints).

[^detvssensor]: A Detection event fires on each raw event as it happens. A Sensor change reacts to the sensor's own state, which keeps the recognized names, plates, or labels for as long as the subject stays in view.
