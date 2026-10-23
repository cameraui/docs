---
title: Worker setup
---

# Worker setup

How the snippet from [Pair a worker](/admin/workers#pair-a-worker) gets onto the worker depends on its installation.

## Docker

A worker runs from the same image as the server. Save this as `docker-compose.worker.yml` on the second machine, with your master's address and the pairing code:

```yaml
name: cameraui-worker

services:
  cameraui-worker:
    image: ghcr.io/cameraui/camera.ui:latest
    container_name: cameraui-worker
    restart: unless-stopped
    stop_grace_period: 30s
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

The master address takes a hostname or IP, without a scheme. `CAMERA_UI_WORKER_API_PORT` is only needed if the master's HTTPS port is not 3443, a desktop app as master listens on 3543. To give the worker a GPU, see [Hardware acceleration](#hardware-acceleration) below.

## Desktop app

A machine with the [desktop app](/install/desktop) joins as a worker when you choose **Worker** in the mode picker on first start (or later via **Switch mode…** in the tray menu) and enter the master's address and the pairing code, or without the picker from the [command line](/install/desktop#starting-without-the-picker). The app then shows only a status window. If the address is wrong or the code has expired, the picker reopens with the error.

Three tray options: **Open At Login** starts the app with the system, minimized to the tray, **Close to tray** keeps the worker running in the background when the window is closed,[^trayopts] and **Keep Computer Awake** (on by default) keeps the computer from sleeping while the worker runs cameras or plugins; the display can still turn off. If the computer sleeps anyway, the worker stops its work first and the master takes over until it is back. The address takes a hostname or IP, with `:port` only when the master's HTTPS port differs from the default.

[^trayopts]: Open At Login is offered on Windows and macOS. Close to tray is offered on Windows and Linux; on macOS, closing the window leaves the app running anyway.

## Linux (bare-metal)

Paste the snippet into `camera.ui.yaml` in the worker machine's storage directory, then start it with `cameraui --worker run`. To keep the machine a worker across reboots, install it as a service instead: `cameraui --worker install` (the flag is stored with the service, see [Linux (bare-metal)](/install/linux)).

## Hardware acceleration

In **Docker**, the override files from the main deployment do not fit: they patch the service `cameraui`, not `cameraui-worker`, so layering one on top starts a second, unrelated container. Put the [image flavor](/install/docker#hardware-acceleration) that matches the hardware and the device into the worker file itself:

```yaml
services:
  cameraui-worker:
    image: ghcr.io/cameraui/camera.ui:intel # or :nvidia, :amd
    devices:
      - /dev/dri:/dev/dri
```

For NVIDIA, take the `environment` and `deploy` blocks from the [NVIDIA override](/install/docker#hardware-acceleration) as well, and install the NVIDIA Container Toolkit on the worker machine. On **bare-metal** and in the **desktop app** there is nothing to pass through, the host driver is all it takes.

Which decoder a camera actually uses on a worker is set per camera, under **Frame Worker** in its [settings](/cameras/settings). The second selection there applies while the camera runs on a worker, so master and worker can sit on different hardware. [Hardware acceleration](/install/hardware-acceleration) covers host drivers and how to check what the container really got.

### Docker Swarm

Swarm services can't pass devices: `devices:` is ignored, and a device mounted as a volume shows up in the container but can't be opened. The container logs it as `blocked`, and detection falls back to the CPU. Run each worker as a plain container on its machine with the [compose file](#docker) above. Swarm scheduling is not needed, the master assigns the work.

To keep a worker in the stack anyway, start it through a launcher service such as [swarm-launcher](https://gitlab.com/egos-tech/swarm-launcher). It runs the worker file as a normal compose project on the node, `devices:` included, and removes it when the service stops:

```yaml
configs:
  worker-3:
    file: ./docker-compose.worker.yml

services:
  worker-3:
    image: registry.gitlab.com/egos-tech/swarm-launcher:latest
    configs:
      - source: worker-3
        target: /docker-compose.yml
    environment:
      LAUNCH_PROJECT_NAME: cameraui-worker-3
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    stop_grace_period: 40s
    deploy:
      placement:
        constraints:
          - node.hostname == swarm3
```

Keep `LAUNCH_PROJECT_NAME` fixed, the worker's data volume belongs to that project. Bind mounts in the worker file need absolute host paths.

## Environment variables

The snippet values can also be set as environment variables. `CAMERA_UI_WORKER=true` starts worker mode without the `--worker` option, and `CAMERA_UI_WORKER_MASTER`, `CAMERA_UI_WORKER_API_PORT`, `CAMERA_UI_WORKER_PAIRING_CODE`, `CAMERA_UI_WORKER_NAME` and `CAMERA_UI_WORKER_CAPABILITIES` (comma-separated) cover the rest of the snippet. No `camera.ui.yaml` is needed then, and if you set both, the environment variable wins.

Without capabilities the worker offers everything; the master still only assigns what you give it. Set them to restrict a worker to one job, for example only hosting plugins.
