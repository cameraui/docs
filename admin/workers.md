---
title: Workers
---

# Workers

<Shot src="/img/admin/workers.png" alt="The Workers settings" />

A **worker** is a second machine that takes on part of a server's processing. The main server (the **master**) keeps the UI, the settings and the recordings; workers contribute compute. Manage them in **Workers** (in the menu).

Typical reasons for a worker:

- **Busy cameras.** Decoding and detection for selected cameras move to the worker, freeing the master's CPU and GPU for the rest.
- **Hardware the master lacks.** An entire plugin can run on a worker, for example a detection backend that needs a GPU the master doesn't have, or a plugin the master's platform can't load.
- **Growing setups.** When you add cameras, add a worker instead of replacing the server.

## How workers work

A worker is a regular camera.ui installation started in worker mode. It has no UI of its own, holds no cameras and stores no recordings; it connects to the master and waits for work.

- **The worker connects outward.** Pairing goes to the master's HTTPS port, the running connection to the master's worker port (default `7422`). Only the master has to be reachable; nothing needs to be opened on the worker machine.
- **Paired once, then on its own.** A one-time pairing code is exchanged for the worker's own credentials. Nothing is shared between workers, each one can be revoked independently, and after the first start the worker reconnects by itself.
- **Assignments follow the worker.** Cameras and plugins you [assign](#camera-and-plugin-assignments) run on the worker, fall back to the master while it's offline, and move back when it returns (see [Failover](#failover)).

Master and worker don't need the same installation type, any mix works: a Docker server with an old laptop running the [desktop app](#worker-with-the-desktop-app) as its worker, a desktop-app server with a [Docker worker](#worker-in-docker) on a mini PC, a bare-metal Linux server with both. The camera.ui version should match across machines; the [workers list](#the-workers-list) warns when it doesn't.

## Enable workers

Turn on **Enable Workers** on the master and set a **Master Address**, the LAN IP or hostname other machines use to reach this server. Workers can't be enabled without an address. A **Worker Connection Port** (default `7422`) is also required; changing it later means already-paired workers must be re-paired.

## Pair a worker

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

The code can only be used once, and only for the first start: the worker exchanges it for its own credentials and reconnects by itself afterwards. How the snippet reaches the worker depends on the installation, see the next sections.

## Set up the worker machine

### Worker in Docker

A worker runs from the same image as the server, just started in worker mode. Save this as `docker-compose.worker.yml` on the second machine, with your master's address and the pairing code from above:

```yaml
name: cameraui-worker

services:
  cameraui-worker:
    image: ghcr.io/cameraui/camera.ui:latest
    container_name: cameraui-worker
    restart: unless-stopped
    network_mode: host
    environment:
      - TZ=Europe/Berlin
      - CAMERA_UI_WORKER=true
      - CAMERA_UI_WORKER_MASTER=192.168.1.10
      - CAMERA_UI_WORKER_PAIRING_CODE=XXXX-XXXX
      - CAMERA_UI_WORKER_NAME=worker-1
    volumes:
      - cameraui-worker-data:/data

volumes:
  cameraui-worker-data:
```

Then start it:

```bash
docker compose -f docker-compose.worker.yml up -d
```

The master address takes a hostname or IP, without a scheme. `CAMERA_UI_WORKER_API_PORT` is only needed if the master's HTTPS port differs from the default. To pass hardware through for decoding, use the same override files as the main deployment, see [Hardware acceleration](/install/hardware-acceleration).

### Worker with the desktop app

An old laptop or a mini PC with the [desktop app](/install/desktop) installed can join as a worker too. Choose **Worker** in the mode picker on first start (or later via **Switch mode…** in the tray menu), enter the master's address and the pairing code, and connect. Instead of the normal interface the app shows a small status window with the connection state. If the address is wrong or the code has expired, the picker reopens and shows what failed.

Two tray options make this hands-off: **Open At Login** starts the app with the system, minimized to the tray, and **Close to tray** keeps the worker running in the background when the window is closed.[^trayopts] The address takes a hostname or IP, with `:port` only when the master's HTTPS port differs from the default.

[^trayopts]: Open At Login is offered on Windows and macOS. Close to tray is offered on Windows and Linux; on macOS, closing the window leaves the app running anyway.

### Worker on Linux (bare-metal)

Paste the snippet into the worker machine's `config.yml`, then start it with `cameraui --worker run`. To keep the machine a worker across reboots, install it as a service instead: `cameraui --worker install` (the flag is stored with the service, see [Linux (bare-metal)](/install/linux)).

### Environment variables

You can pass the same values as environment variables instead, which is usually easier in a container. `CAMERA_UI_WORKER=true` starts worker mode without the `--worker` option, and `CAMERA_UI_WORKER_MASTER`, `CAMERA_UI_WORKER_API_PORT`, `CAMERA_UI_WORKER_PAIRING_CODE`, `CAMERA_UI_WORKER_NAME` and `CAMERA_UI_WORKER_CAPABILITIES` (comma-separated) cover the rest of the snippet. No `config.yml` is needed then, and if you set both, the environment variable wins.

Leave the capabilities unset and the worker offers everything, which is what most setups want; the master still only assigns what you give it. Set them to restrict a worker to a single job, for example only hosting plugins.

## The workers list

Once paired, a worker appears in the **Workers** list showing its online/offline status, platform (OS/architecture), process ID, version, and live CPU and memory use. A warning is shown if a worker's version differs from the master's.

## Camera and plugin assignments

Under **Camera Assignments**, choose which camera each worker decodes and detects on; cameras left as **Local** stay on the main server.

Under **Plugin Assignments**, an entire plugin can run on a worker instead of the main server, for example a detection backend that needs hardware the main server lacks. Only workers whose platform is compatible with the plugin are offered. The worker installs and runs the plugin; it's still configured normally in the UI.

## Failover

Workers send a heartbeat every 5 seconds and are considered offline after 15 seconds without one. If a worker disconnects, its assigned cameras and plugins fall back to the main server automatically (a plugin only falls back if the main server's platform can run it). When the worker reconnects, its cameras and plugins are automatically re-homed to it.

Removing a worker revokes its credentials and drops the connection; its assigned cameras and plugins fall back to the main server.
