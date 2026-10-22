---
title: Variablen in Automationen
---

# Variablen in Automationen

Jeder Trigger füllt Variablen, die spätere Schritte als <span v-pre>`{{event.label}}`</span> nutzen, in einer Benachrichtigung, im Body einer **HTTP-Anfrage** oder in einer Bedingung. Jeder Wert ist Text: Zahlen kommen als Ziffern, Listen durch Kommas getrennt, Objekte als JSON. Wie du Schritte verbindest und eigene Variablen benennst, steht unter [Automationen erstellen](/de/automations/#werte-zwischen-schritten-weitergeben).

**Wenn / Sonst** und **Verzweigung** schlagen die Werte vor, die eine Variable für den gewählten Trigger oder Sensor annehmen kann.

## Erkennungsereignis

| Variable | Wert |
|---|---|
| `event.id` | ID des Ereignisses |
| `event.cameraId` | ID der Kamera |
| `event.state` | `active`, bei **Ereignisende** `ended` |
| `event.types` | Alles, was das Ereignis bisher enthielt, durch Kommas getrennt[^types] |
| `event.type` | Erster Eintrag von `event.types`, meist der Auslöser des Ereignisses: `motion` oder `audio` |
| `event.label` | Das erkannte Objekt (`person`, `vehicle`, `animal`), sonst das Audio-Ereignis, sonst `event.type` |
| `event.confidence` | Bester Wert von `0` bis `1`, `0`, wenn nichts einen gemeldet hat (reine Bewegung) |
| `event.faces` | Erkannte Namen, durch Kommas getrennt |
| `event.plates` | Erkannte Kennzeichen, durch Kommas getrennt |

Gesichter, Kennzeichen und das erkannte Objekt kommen mit den **Segmenten**, den Abschnitten, in denen ein Objekt verfolgt wird. **Ereignisstart**, **Ereignisaktualisierung** und **Ereignisende** tragen sie nicht: `event.faces` und `event.plates` bleiben leer, und `event.label` fällt auf das Audio-Ereignis oder `event.type` zurück. Um mitzuschicken, wer oder was zu sehen war, stell **Auslösen bei** auf **Segment Start**, **Segment Update** oder **Segment Ende**.

Audio-Ereignisse sind `doorbell`, `glass_break`, `siren`, `speaking`, `gunshot`, `dog_bark`, `baby_cry`, `alarm`, `scream`, `cat`, `car_alarm` und `smoke_alarm`.

## Sensoränderung

| Variable | Wert |
|---|---|
| `sensor.property` | Die geänderte Eigenschaft, eine der **Eigenschaften** des Sensors |
| `sensor.value` | Der neue Wert: `true` oder `false` für An/Aus und erkannt, eine Zahl für Stufen und Messwerte, Text für Namen und Labels |
| `sensor.previousValue` | Der Wert vor der Änderung |
| `sensor.sensorType` | Die Art des Sensors, etwa `contact`, `motion`, `object`, `face`, `licensePlate` oder `temperature` |
| `sensor.sensorId` | ID des Sensors |
| `sensor.assignedCameraIds` | IDs der Kameras, zu denen der Sensor gehört, durch Kommas getrennt |

Ein Wert aus mehreren Teilen steht zusätzlich Feld für Feld bereit: eine PTZ-Position als `sensor.value.pan`, eine Liste erkannter Namen als `sensor.value.0`, `sensor.value.1` und `sensor.value.length`.

## Systemereignis

`system.eventType` enthält das im Trigger gewählte Ereignis: `system:started`, `system:shutdown`, `camera:added`, `camera:removed`, `camera:connected`, `camera:disconnected`, `camera:frameworker:started`, `camera:frameworker:stopped`, `camera:property:changed`, `sensor:added`, `sensor:deleted`, `plugin:started`, `plugin:stopped`, `plugin:error` oder `plugin:notification`.

| Variable | Gesetzt bei | Wert |
|---|---|---|
| `system.cameraId`, `system.cameraName` | Kamera-Ereignissen | Die Kamera |
| `system.property` | **Eigenschaft geändert** | Der geänderte Einstellungsbereich: `name`, `sources`, `detectionSettings`, `ptzAutotrack`, `recordingSettings`, `notificationSettings`, `zones`, `frameWorkerSettings` oder `interfaceSettings` |
| `system.pluginId`, `system.pluginName` | Plugin-Ereignissen | Das Plugin |
| `system.status` | **Plugin gestartet**, **Plugin gestoppt**, **Plugin-Fehler** | `started`, `stopped` oder `error` |
| `system.sensorId`, `system.sensorType`, `system.sensorName` | **Sensor hinzugefügt**, **Sensor gelöscht** | Der Sensor |

**Plugin sendet eine Benachrichtigung** ergänzt `system.title`, `system.subtitle`, `system.body`, `system.tag`, `system.severity` (`info`, `warn`, `error` oder `critical`) und jedes Datenfeld, das das Plugin mitschickt. Das NVR-Plugin setzt `system.type` auf `detection`, `episode`, `text-alert`, `text-alert-end`, `camera_online`, `camera_offline`, `storage_paused`, `storage_resumed`, `storage_path_rejected` oder `cloud_reauth`, und je nach Typ `system.cameraId`, `system.cameraName`, `system.eventId`, `system.episodeId`, `system.alertId` und `system.alertTitle`.

## Webhook

Ein Webhook wird mit `POST` und einem JSON-Objekt als Body aufgerufen.

| Variable | Wert |
|---|---|
| `webhook.body` | Der ganze Body als JSON-Text |
| `webhook.<feld>` | Jedes Text-, Zahl- oder true/false-Feld der obersten Ebene: <span v-pre>`{"room": "hall"}`</span> ergibt `webhook.room` mit `hall` |
| `webhook.headers` | Die Header der Anfrage als JSON |
| `webhook.method` | `POST` |

## MQTT-Nachricht

| Variable | Wert |
|---|---|
| `mqtt.topic` | Das Topic, auf dem die Nachricht ankam, nützlich mit Wildcards |
| `mqtt.payload` | Die Payload als Text |
| `mqtt.<feld>` | Jedes Text-, Zahl- oder true/false-Feld der obersten Ebene, wenn die Payload ein JSON-Objekt ist |

## Geofence

| Variable | Wert |
|---|---|
| `geo.event` | `enter` oder `leave` |
| `geo.user` | Der Benutzer, der sich bewegt hat |
| `geo.zone` | Name der Zone |
| `geo.lat`, `geo.lon` | Die gemeldete Position |
| `geo.distance` | Abstand zur Mitte der Zone in Metern, gerundet |

**Zeitplan** und **Manuell** starten einen Ablauf ohne Variablen.

## Ergebnisse von Aktionen

| Variable | Schritt | Wert |
|---|---|---|
| `snapshot` | **Schnappschuss** | Das JPEG als Base64 |
| `snapshot.base64` | **Schnappschuss** | Das JPEG als Data-URL, `data:image/jpeg;base64,…` |
| `http.status` | **HTTP-Anfrage** | Statuscode, etwa `200` |
| `http.body` | **HTTP-Anfrage** | Die Antwort als Text, Base64 bei Bildern und anderen Binärdaten |
| `http.base64` | **HTTP-Anfrage** | Eine binäre Antwort als Data-URL |
| `http.json`, `http.<feld>` | **HTTP-Anfrage** | Eine JSON-Antwort als Text und jedes ihrer Felder der obersten Ebene |
| `plugin.detected` | **Plugin-Aufruf** | `true` oder `false` |
| `plugin.labels` | **Plugin-Aufruf** | Gefundene Labels, durch Kommas getrennt |
| `plugin.detections`, `plugin.result` | **Plugin-Aufruf** | Die Erkennungen und das ganze Ergebnis als JSON |
| `plugin.durationMs` | **Plugin-Aufruf** | Laufzeit in Millisekunden |
| `assistant.answer` | **Assistent fragen** | Die Antwort als Text |
| `assistant.replied` | **Assistent fragen** | `false`, wenn der Assistent nichts Mitteilenswertes fand |
| `camera.id`, `camera.name` | **Kamera-Steuerung** | Die geänderte Kamera |
| `previous.success` | Die meisten Aktionen | `true` oder `false` für den zuletzt ausgeführten Schritt |
| `previous.result` | Die meisten Aktionen | `snapshot_captured`, `snapshot_failed`, `detected`, `not_detected`, `no_response`, `assistant_replied` oder `assistant_silent` |

## Zeit und Rechnen

<span v-pre>`{{time.now}}`</span> ist die aktuelle Zeit in Millisekunden seit 1970, in jedem Ablauf.

<span v-pre>`{{= … }}`</span> rechnet mit Zahlen: <span v-pre>`{{= event.confidence * 100 }}`</span> ergibt die Konfidenz in Prozent. Es kennt `+`, `-`, `*`, `/`, `%` und Klammern, rundet Ergebnisse mit Nachkommastellen auf zwei Stellen und zählt eine Variable, die keine Zahl ist, als `0`.

[^types]: `motion` und `audio`, die Objekte `person`, `vehicle` und `animal`, `face` und `license_plate`, ein Klassifizierer-Ergebnis wie `bird` und die Ereignistypen, die eine Kamera selbst meldet: `contact`, `doorbell`, `switch`, `light`, `siren`, `security_system`, `line-crossing`, `occupancy`, `smoke`, `leak`, `gas`, `carbonMonoxide`, `heat`, `cold`, `vibration`, `tamper`, `problem`, `power`, `lock` und `garage`.
