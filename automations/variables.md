---
title: Automation variables
---

# Automation variables

Every trigger fills a set of variables that later steps use as <span v-pre>`{{event.label}}`</span>, in a notification, the body of an **HTTP Request**, or a condition. Every value is text: numbers come as digits, lists as comma-separated text, objects as JSON. How to wire steps and name your own variables is on [Building automations](/automations/#passing-values-between-steps).

**If / Else** and **Switch** suggest the values a variable can take for the trigger or sensor you picked.

## Detection event

| Variable | Value |
|---|---|
| `event.id` | ID of the event |
| `event.cameraId` | ID of the camera |
| `event.state` | `active`, or `ended` on **Event End** |
| `event.types` | Everything the event contained so far, comma-separated[^types] |
| `event.type` | First entry of `event.types`, usually what started the event: `motion` or `audio` |
| `event.label` | The detected object (`person`, `vehicle`, `animal`), otherwise the audio event, otherwise `event.type` |
| `event.confidence` | Best score from `0` to `1`, `0` when nothing reported one (plain motion) |
| `event.faces` | Recognized names, comma-separated |
| `event.plates` | Recognized license plates, comma-separated |

Faces, plates and the detected object travel with the **segments**, the stretches in which an object is tracked. **Event Start**, **Event Update** and **Event End** don't carry them: `event.faces` and `event.plates` stay empty and `event.label` falls back to the audio event or `event.type`. To send who or what was seen, set **Trigger on** to **Segment Start**, **Segment Update** or **Segment End**.

Audio events are `doorbell`, `glass_break`, `siren`, `speaking`, `gunshot`, `dog_bark`, `baby_cry`, `alarm`, `scream`, `cat`, `car_alarm` and `smoke_alarm`.

## Sensor change

| Variable | Value |
|---|---|
| `sensor.property` | The property that changed, one of the sensor's **Properties** |
| `sensor.value` | The new value: `true` or `false` for on/off and detected states, a number for levels and readings, text for names and labels |
| `sensor.previousValue` | The value before the change |
| `sensor.sensorType` | The kind of sensor, such as `contact`, `motion`, `object`, `face`, `licensePlate` or `temperature` |
| `sensor.sensorId` | ID of the sensor |
| `sensor.assignedCameraIds` | IDs of the cameras the sensor belongs to, comma-separated |

A value with several parts also appears field by field: a PTZ position as `sensor.value.pan`, a list of recognized names as `sensor.value.0`, `sensor.value.1` and `sensor.value.length`.

## System event

`system.eventType` holds the event picked in the trigger: `system:started`, `system:shutdown`, `camera:added`, `camera:removed`, `camera:connected`, `camera:disconnected`, `camera:frameworker:started`, `camera:frameworker:stopped`, `camera:property:changed`, `sensor:added`, `sensor:deleted`, `plugin:started`, `plugin:stopped`, `plugin:error` or `plugin:notification`.

| Variable | Set by | Value |
|---|---|---|
| `system.cameraId`, `system.cameraName` | Camera events | The camera |
| `system.property` | **Property Changed** | The settings group that changed: `name`, `sources`, `detectionSettings`, `ptzAutotrack`, `recordingSettings`, `notificationSettings`, `zones`, `frameWorkerSettings` or `interfaceSettings` |
| `system.pluginId`, `system.pluginName` | Plugin events | The plugin |
| `system.status` | **Plugin Started**, **Plugin Stopped**, **Plugin Error** | `started`, `stopped` or `error` |
| `system.sensorId`, `system.sensorType`, `system.sensorName` | **Sensor Added**, **Sensor Deleted** | The sensor |

**Plugin sends a notification** adds `system.title`, `system.subtitle`, `system.body`, `system.tag`, `system.severity` (`info`, `warn`, `error` or `critical`) and every data field the plugin attaches. The NVR plugin sets `system.type` to `detection`, `episode`, `text-alert`, `text-alert-end`, `camera_online`, `camera_offline`, `storage_paused`, `storage_resumed` or `cloud_reauth`, and depending on the type `system.cameraId`, `system.cameraName`, `system.eventId`, `system.episodeId`, `system.alertId` and `system.alertTitle`.

## Webhook

A webhook is called with `POST` and a JSON object as body.

| Variable | Value |
|---|---|
| `webhook.body` | The whole body as JSON text |
| `webhook.<field>` | Each top-level text, number or true/false field: <span v-pre>`{"room": "hall"}`</span> gives `webhook.room` with `hall` |
| `webhook.headers` | The request headers as JSON |
| `webhook.method` | `POST` |

## MQTT message

| Variable | Value |
|---|---|
| `mqtt.topic` | The topic the message arrived on, useful with wildcards |
| `mqtt.payload` | The payload as text |
| `mqtt.<field>` | Each top-level text, number or true/false field of a JSON object payload |

## Geofence

| Variable | Value |
|---|---|
| `geo.event` | `enter` or `leave` |
| `geo.user` | The user who moved |
| `geo.zone` | Name of the zone |
| `geo.lat`, `geo.lon` | The reported position |
| `geo.distance` | Distance to the zone's center in meters, rounded |

**Schedule** and **Manual** start a flow without variables.

## Results of actions

| Variable | Step | Value |
|---|---|---|
| `snapshot` | **Capture Snapshot** | The JPEG as base64 |
| `snapshot.base64` | **Capture Snapshot** | The JPEG as a data URL, `data:image/jpeg;base64,…` |
| `http.status` | **HTTP Request** | Status code, such as `200` |
| `http.body` | **HTTP Request** | The response as text, base64 for images and other binary data |
| `http.base64` | **HTTP Request** | A binary response as a data URL |
| `http.json`, `http.<field>` | **HTTP Request** | A JSON response as text, and each of its top-level fields |
| `plugin.detected` | **Plugin Call** | `true` or `false` |
| `plugin.labels` | **Plugin Call** | Found labels, comma-separated |
| `plugin.detections`, `plugin.result` | **Plugin Call** | The detections and the full result as JSON |
| `plugin.durationMs` | **Plugin Call** | Run time in milliseconds |
| `assistant.answer` | **Ask the assistant** | The answer as text |
| `assistant.replied` | **Ask the assistant** | `false` when the assistant found nothing worth telling |
| `camera.id`, `camera.name` | **Camera Control** | The camera it changed |
| `previous.success` | Most actions | `true` or `false` for the last step that ran |
| `previous.result` | Most actions | `snapshot_captured`, `snapshot_failed`, `detected`, `not_detected`, `no_response`, `assistant_replied` or `assistant_silent` |

## Time and arithmetic

<span v-pre>`{{time.now}}`</span> is the current time in milliseconds since 1970, in any flow.

<span v-pre>`{{= … }}`</span> calculates with numbers: <span v-pre>`{{= event.confidence * 100 }}`</span> gives the confidence in percent. It knows `+`, `-`, `*`, `/`, `%` and parentheses, rounds results with decimals to two places, and counts a variable that isn't a number as `0`.

[^types]: `motion` and `audio`, the objects `person`, `vehicle` and `animal`, `face` and `license_plate`, a classifier result such as `bird`, and the event types a camera reports itself: `contact`, `doorbell`, `switch`, `light`, `siren`, `security_system`, `line-crossing`, `occupancy`, `smoke`, `leak`, `gas`, `carbonMonoxide`, `heat`, `cold`, `vibration`, `tamper`, `problem`, `power`, `lock` and `garage`.
