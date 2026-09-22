# Docker

Docker is the recommended way to run the camera.ui server on Linux. The image is built on Ubuntu 24.04 and downloads the server itself on first start, so server updates don't need a new image. There is one image per hardware target, published as `ghcr.io/cameraui/camera.ui`.

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

Then open `https://<host>:3443`. The first boot downloads the server and takes a few minutes (`docker compose logs -f` shows progress). The certificate is self-signed, so the browser warns on first visit. Next: [Getting started](/intro/getting-started).

::: tip First boot needs internet
On first start the container downloads the server from the npm registry. If your host can't resolve it, add public DNS resolvers (`1.1.1.1`, `8.8.8.8`) to the service.
:::

## Hardware acceleration

The default image (`latest`) runs detection and video processing in software. For acceleration, layer the override of the flavor that matches your hardware on top of the base file.

| Flavor | Tag | Hardware acceleration | Arch |
|---|---|---|---|
| CPU | `latest` | software | amd64 + arm64 |
| Intel | `intel` | Quick Sync / VA-API + OpenCL | amd64 |
| NVIDIA | `nvidia` | NVENC / NVDEC + CUDA 13 | amd64 |
| NVIDIA (TensorRT) | `nvidia-tensorrt` | NVENC / NVDEC + CUDA 13 + TensorRT | amd64 |
| NVIDIA (CUDA 12) | `nvidia-cuda12` | NVENC / NVDEC + CUDA 12 | amd64 |
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

Start both files together (Intel shown):

```bash
docker compose -f docker-compose.yml -f docker-compose.intel.yml up -d
```

The NVIDIA flavors also require the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) on the host. `nvidia` ships CUDA 13 and needs an NVIDIA driver 580 or newer, which covers RTX 50xx cards. `nvidia-cuda12` keeps CUDA 12 for older drivers and pairs with the ONNX Legacy plugin. `nvidia-tensorrt` adds the TensorRT runtime (about 2 GB) for the ONNX plugin's tensorrt provider. Ready-made compose files for every flavor are in the [`cameraui/docker`](https://github.com/cameraui/docker) repository.

Host drivers, device passthrough for AI accelerators (Coral, Hailo, Intel NPU) and verification: [Hardware acceleration](/install/hardware-acceleration).

## Networking

Host networking (the compose default) is recommended: camera.ui needs it for mDNS / Bonjour (HomeKit pairing, ONVIF discovery) and WebRTC live view. Without it, publish the [ports](#ports) explicitly.

## Storage for recordings

By default, recordings live in the `/data` volume. For a separate disk, bind-mount it and point the NVR at it:

```yaml
    volumes:
      - cameraui-data:/data
      - /mnt/recordings:/recordings
    environment:
      - CAMERAUI_PLUGIN_NVR_STORAGE_PATH=/recordings
```

Use a dedicated local disk for `/recordings`, not a network share. See [System requirements](/intro/requirements#storage-for-recordings).

## Workers

A worker is a second machine that takes over camera work (decoding, detection, plugins) from your main server. It runs no UI and no streaming engine of its own. It uses the same image as the server, started in worker mode with `CAMERA_UI_WORKER=true`.

Enable workers on the main server and generate a pairing code there first. Compose file, environment variables and camera assignment: [Workers](/admin/workers#worker-in-docker).

`CAMERA_UI_WORKER_CAPABILITIES` narrows what the worker takes on: `frameDecoding` for decoding and detection, `pluginHost` for running plugins. Leave it unset and the worker offers both.

## Ports

camera.ui uses these ports (already covered by host networking):

| Port | Proto | Purpose |
|---|---|---|
| 3443 | tcp | HTTPS UI / API |
| 2000 | tcp | go2rtc |
| 2001 | tcp | RTSP |
| 2002 | tcp | SRTP |
| 2003 | tcp | RTMP |
| 2004 | tcp/udp | WebRTC |
| 1883 | tcp | MQTT broker, only if you enable the built-in one |

WebRTC media runs over UDP on 2004, with TCP on the same port as fallback. Without host networking, map both.

## Data & backups

All state lives in the `cameraui-data` volume: config, database, recordings, and TLS certificates. See [Backup & restore](/admin/backup).

To install plugins from a private registry or a mirror, mount your `.npmrc` to `/root/.npmrc`, see [Private registry or mirror](/plugins/#private-registry-or-mirror).

## Updating

Pulling a new image updates only the image (OS, GPU libraries, launcher), not the server installed in the volume. Update the server from the [Updates page](/install/updating#the-updates-page), or run `cameraui update-server -H /data` in the container and restart it. The image:

```bash
docker compose pull
docker compose up -d
```

See [Updating](/install/updating) for details.
