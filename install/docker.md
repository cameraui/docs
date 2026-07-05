# Docker

Docker is the recommended way to run the camera.ui server on Linux. The image is built on Ubuntu 24.04 and stays small: on first start it downloads and installs the server itself, so updates don't need a new image. There is one image per hardware target, published as `ghcr.io/cameraui/camera.ui`.

## Before you start

You need a **Linux host** with Docker Engine and the Compose plugin.

::: warning Docker Desktop won't work
Docker Desktop on macOS and Windows can't use host networking, which camera.ui relies on for mDNS and WebRTC. On those platforms, use the [desktop app](/install/desktop) instead.
:::

## Quick start

Save this as `docker-compose.yml`:

```yaml
name: cameraui

services:
  cameraui:
    image: ghcr.io/cameraui/camera.ui:latest
    container_name: cameraui
    restart: unless-stopped
    network_mode: host
    environment:
      - TZ=Europe/Berlin
      - CAMERAUI_DOCKER_AVAHI=true
    volumes:
      - cameraui-data:/data

volumes:
  cameraui-data:
```

Start it:

```bash
docker compose up -d
```

Then open `https://<host>:3443`. The first boot downloads and installs the server, which takes a few minutes. Follow along with `docker compose logs -f`.

Your browser shows a self-signed certificate warning on first visit, and the app then walks you through first-run setup. See [Getting started](/intro/getting-started) for what comes next.

::: tip First boot needs internet
On first start the container downloads the server from the npm registry. If your host can't resolve it, add public DNS resolvers (`1.1.1.1`, `8.8.8.8`) to the service.
:::

## Hardware acceleration

The default image (`latest`) runs detection and video processing in software. For better performance, pick the flavor that matches your hardware and layer its override on top of the base file.

| Flavor | Tag | Hardware acceleration | Arch |
|---|---|---|---|
| CPU | `latest` | software | amd64 + arm64 |
| Intel | `intel` | Quick Sync / VA-API + OpenCL | amd64 |
| NVIDIA | `nvidia` | NVENC / NVDEC + CUDA | amd64 |
| AMD | `amd` | Mesa VA-API + OpenCL | amd64 |

Save the matching override next to your `docker-compose.yml`:

::: code-group

```yaml [docker-compose.intel.yml]
name: cameraui
services:
  cameraui:
    image: ghcr.io/cameraui/camera.ui:intel
    devices:
      - /dev/dri:/dev/dri
```

```yaml [docker-compose.nvidia.yml]
name: cameraui
services:
  cameraui:
    image: ghcr.io/cameraui/camera.ui:nvidia
    environment:
      - NVIDIA_VISIBLE_DEVICES=all
      - NVIDIA_DRIVER_CAPABILITIES=all
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu, compute, video, utility]
```

```yaml [docker-compose.amd.yml]
name: cameraui
services:
  cameraui:
    image: ghcr.io/cameraui/camera.ui:amd
    devices:
      - /dev/dri:/dev/dri
```

:::

Then start both files together (Intel shown here):

```bash
docker compose -f docker-compose.yml -f docker-compose.intel.yml up -d
```

The NVIDIA flavor also requires the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) on the host. Ready-made compose files for every flavor are in the [`cameraui/docker`](https://github.com/cameraui/docker) repository.

Host drivers, device passthrough for AI accelerators (Coral, Hailo, Intel NPU) and how to verify it all works are covered on the [Hardware acceleration](/install/hardware-acceleration) page.

## Networking

Host networking (the compose default) is recommended. camera.ui uses it for mDNS / Bonjour (HomeKit pairing, ONVIF discovery) and for WebRTC live view. If you can't use host networking, publish the [ports](#ports) below explicitly instead.

## Storage for recordings

By default, recordings live in the `/data` volume alongside everything else. To keep them on a separate, dedicated disk, bind-mount it and point the NVR at it:

```yaml
    volumes:
      - cameraui-data:/data
      - /mnt/recordings:/recordings
    environment:
      - CAMERAUI_PLUGIN_NVR_STORAGE_PATH=/recordings
```

Use a dedicated local disk for `/recordings`, not a network share. See [System requirements](/intro/requirements#storage-for-recordings).

## Ports

camera.ui uses these ports (already covered by host networking):

| Port | Proto | Purpose |
|---|---|---|
| 3443 | tcp | HTTPS UI / API |
| 2000 | tcp | go2rtc |
| 2001 | tcp | RTSP |
| 2002 | tcp | SRTP |
| 2003 | tcp | RTMP |
| 2004 | tcp / udp | WebRTC |

## Data & backups

All state lives in the `cameraui-data` volume: config, database, recordings, and TLS certificates. Back up that volume to keep a copy. See [Backup & restore](/admin/backup).

## Updating

The server updates itself from within the app, and the version you choose persists across image pulls. To update the image itself (OS, GPU libraries, and launcher), pull and recreate the container:

```bash
docker compose pull
docker compose up -d
```

See [Updating](/install/updating) for details.
