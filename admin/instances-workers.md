---
title: Instances & workers
---

# Instances & workers

Two admin features help when you run more than one machine: **instances** for managing several servers, and **workers** for sharing the load of one.

## Instances

<Shot src="/img/admin/instances.png" alt="The instances list" />

An **instance** is another camera.ui server saved here, so you can switch to it without logging in again. Manage them in **Instances** (in the menu).

- **Add an instance** with a name, its URL, and a username and password for it.
- Each instance card shows its status: version, uptime, cameras, whether it's online and recording, and resource use.

When you have more than one, an **instance switcher** appears in the top bar. Pick a server to jump to it, or return to "This server".

::: warning
Switching to an instance over plain HTTP passes your session in the address, so camera.ui warns you first. Use HTTPS where you can.
:::

## Workers

<Shot src="/img/admin/workers.png" alt="The Workers settings" />

A **worker** is a second machine that takes on some of a server's processing, such as decoding and detection for busy cameras, or hosting a plugin the main server can't run. Manage them in **Workers** (in the menu).

### Enable workers

Turn on **Enable Workers** and set a **Master Address**, the LAN IP or hostname other machines use to reach this server. Workers can't be enabled without an address. A **Worker Connection Port** (default `7422`) is also required; changing it later means already-paired workers must be re-paired.

### Pair a worker

Click **Generate Pairing Code** to create a one-time code (valid for 15 minutes). Along with it you get a ready-made configuration snippet:

```yaml
worker:
  master: <master address>
  apiPort: <api port>
  pairingCode: <code>
  name: my-worker
  capabilities:
    - frameDecoding
    - pluginHost
```

Paste the snippet into the worker machine's `config.yml`, then start it with `camera.ui --worker`. The worker exchanges the code for its own credentials; nothing is shared or reused between workers, and each one can be revoked independently. The pairing code can only be used once.

### The workers list

Once paired, a worker appears in the **Workers** list showing its online/offline status, platform (OS/architecture), process ID, version, and live CPU and memory use. A warning is shown if a worker's version differs from the master's.

### Camera and plugin assignments

Under **Camera Assignments**, choose which camera each worker decodes and detects on; cameras left as **Local** stay on the main server.

Under **Plugin Assignments**, an entire plugin can run on a worker instead of the main server, for example a detection backend that needs hardware the main server lacks. Only workers whose platform is compatible with the plugin are offered. The worker installs and runs the plugin; it's still configured normally in the UI.

### Failover

Workers send a heartbeat every 5 seconds and are considered offline after 15 seconds without one. If a worker disconnects, its assigned cameras and plugins fall back to the main server automatically (a plugin only falls back if the main server's platform can run it). When the worker reconnects, its cameras and plugins are automatically re-homed to it.

Removing a worker revokes its credentials and drops the connection; its assigned cameras and plugins fall back to the main server.
