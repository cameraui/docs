---
title: MQTT
---

# MQTT

The **Settings → MQTT** page (admins only) connects camera.ui to an MQTT broker. Once connected, camera.ui publishes server events, camera states, detections, snapshots and sensor values as MQTT topics, and accepts commands for your sensors. It's off by default.

<Shot src="/img/admin/mqtt.png" alt="The MQTT settings page" />

## Turning it on

Switch **Enabled** on, pick a mode, fill in the connection, and **Save**. Every save restarts the connection, so a wrong value shows up right away in the status card at the top of the page.

## Mode

**Mode** decides where the broker lives.

- **External broker.** camera.ui connects to a broker you already run (Mosquitto, the Home Assistant Mosquitto add-on, and so on).
- **Built-in broker.** camera.ui runs its own broker and connects to it locally.

### Built-in broker

There's nothing to install. camera.ui starts the broker on **Port** (default `1883`) and shows the **Broker address** as a read-only field with a copy button, in the form `mqtt://<server host>:<port>`. Point your MQTT devices at that address.

The credentials next to it are what those devices need:

- **Username.** Defaults to `cameraui`.
- **Password.** Generated randomly on first start. It has its own copy button, and you can replace it with your own.[^anon]

### External broker

- **Host.** The broker's hostname or IP, for example `192.168.1.10`.
- **Port.** Defaults to `1883`.
- **Protocol.** `mqtt:// (TCP)` or `mqtts:// (TLS)`. Default is `mqtt://`.
- **Username** and **Password.** Leave both empty for an anonymous broker. The password field stays masked after saving. Leave it empty to keep the stored one, type a new one to replace it.

## Client ID and topic prefix

Both apply to either mode.

- **Client ID.** The name camera.ui registers with at the broker. Defaults to `cameraui`. Change it if something else on your network already uses that ID.
- **Topic prefix.** Everything camera.ui publishes lives below this prefix. Defaults to `cameraui`. Letters, numbers, `_`, `-` and `/` separators only.

## TLS

The TLS fields appear for an external broker on `mqtts://`.

- **Verify server certificate.** On by default. Turn it off only for a broker with a self-signed certificate.
- **CA certificate (PEM).** The certificate authority that signed the broker's certificate.
- **Client certificate (PEM)** and **Client key (PEM).** For brokers that require client certificates.

## Testing and status

**Test connection** opens a short-lived, separate connection with the values currently in the form and reports back as a toast. It doesn't save anything. For the built-in broker, save first: the test connects to the running broker, so it fails while the broker isn't up yet.[^test]

The status card at the top shows the live state of the connection:

| State | Meaning |
|---|---|
| Disabled | MQTT is off, or an external broker has no host set |
| Connecting… | The connection is being established |
| Connected | Connected to the broker |
| Reconnecting… | The connection dropped, camera.ui is retrying |
| Error | The last attempt failed · the card shows the broker's message |

When the built-in broker is running, the card says so along with its port.

## Topic reference

`<prefix>` below is your topic prefix, `<id>` the camera's ID, `<stableId>` a sensor's ID. In topic segments, `#`, `+`, `/` and whitespace are replaced with `-`.

State topics are retained, so a subscriber that connects later still gets the current value. Events are not retained.

### What camera.ui publishes

| Topic | Payload | Retained |
|---|---|---|
| `<prefix>/status` | `online` · `offline` | yes |
| `<prefix>/server/state` | JSON with the server version and a timestamp | yes |
| `<prefix>/server/event` | JSON, `started` or `shutdown` with a timestamp | no |
| `<prefix>/server/notification` | JSON, system notifications | no |
| `<prefix>/plugin/<name>/status` | `started` · `stopped` · `error` · `crashed` | yes |
| `<prefix>/camera/<id>/status` | `online` · `offline` | yes |
| `<prefix>/camera/<id>/frameworker` | `online` · `offline` | yes |
| `<prefix>/camera/<id>/meta` | JSON: id, name, room, type, disabled, camera info | yes |
| `<prefix>/camera/<id>/event` | JSON detection event, start to end | no |
| `<prefix>/camera/<id>/motion` | `ON` · `OFF` | yes |
| `<prefix>/camera/<id>/detection/<label>` | `ON` · `OFF`, one topic per detected label | yes |
| `<prefix>/camera/<id>/snapshot` | JPEG of the last event thumbnail | yes |
| `<prefix>/camera/<id>/sensor/<stableId>/meta` | JSON: stable ID, type, name, display name, plugin | yes |
| `<prefix>/camera/<id>/sensor/<stableId>/<property>` | the property's value as JSON | yes |

`<prefix>/status` is also the last will: if camera.ui goes away without saying goodbye, the broker publishes `offline` for it.

The motion topic goes `ON` when an event includes motion, a label topic when that label is first detected. Both go back to `OFF` when the event ends. The event payload carries the detection details without any image data. The image goes to the snapshot topic.

### What camera.ui subscribes to

| Topic | Purpose |
|---|---|
| `<prefix>/camera/<id>/sensor/<stableId>/<property>/set` | Set a sensor property |

Publish to a `/set` topic to control a sensor: `ON` and `OFF` become true and false, anything else is read as JSON and falls back to plain text. Detection sensors ignore commands, their values come from the camera.

Automations with an MQTT trigger subscribe to their own topics on top of this.

## Home Assistant discovery

**Home Assistant discovery** makes Home Assistant create the devices and entities for you, no YAML. It's off by default.

::: warning Pick one path, not both
MQTT discovery is one of two ways to get camera.ui entities into Home Assistant. The other is the [Home Assistant integration](/home-assistant/integration), which needs no broker. The two do not merge: run both and every device shows up twice. Use MQTT discovery if you already run a broker, otherwise use the integration.
:::

Turn it on and check the **Discovery prefix**. It has to match the discovery prefix configured in Home Assistant, which is `homeassistant` unless you changed it.

Home Assistant then builds one device per camera, using the camera's name, plus its model and firmware version when camera.ui knows them. Each device gets:

- **Status.** A connectivity sensor, listed under diagnostics.
- **Motion.** A motion sensor.
- **Snapshot.** A camera entity fed by the snapshot topic.
- **Person, Vehicle, Animal, Package.** Detection sensors, only for cameras that have object detection.

A [sensor](/sensors/) on the camera joins the same device when its type maps to a Home Assistant one: contact, occupancy, smoke and leak sensors, doorbells, temperature, humidity and battery readings, switches, lights (with brightness where the light supports it), sirens, locks, garage doors and security systems. Switches, lights, sirens, locks, garage doors and security systems are controllable from Home Assistant.[^detsensors]

Entities stay available only while both camera.ui and the camera are online. Status is the exception: it follows camera.ui alone, so it can still report the camera as offline. Turning discovery back off, turning MQTT off, or changing the discovery prefix or topic prefix removes the entities camera.ui created.

## Next steps

- **[Automations](/automations/)** — react to an incoming MQTT message, or publish one as an action.
- **[Sensors](/sensors/)** — the sensors that show up on the camera's topics and in Home Assistant.

[^detsensors]: Detection sensors (motion, object, audio, face, license plate and the like) get no entity of their own. They feed the Motion and detection entities above.
[^anon]: Clearing the username or the password lets the built-in broker accept any client without credentials.
[^test]: Testing the built-in broker before it's ever been saved reports that the broker isn't running.
