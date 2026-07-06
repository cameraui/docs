---
title: Linux (bare-metal)
---

# Linux (bare-metal)

For always-on servers without Docker: camera.ui installs from npm and runs as a systemd service. Ubuntu 24.04 (or newer) is the tested baseline. See [System requirements](/intro/requirements).

## Prerequisites

- 64-bit Linux (x64 or arm64) with systemd
- **Node.js 24**, e.g. via [NodeSource](https://github.com/nodesource/distributions):

  ```bash
  curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

That's it. Everything else (FFmpeg, go2rtc, and a portable Python runtime for the detection plugins) camera.ui downloads and manages itself.

## Install

```bash
sudo npm install -g camera.ui
sudo cameraui install --user cameraui
```

`cameraui install` creates the service user if it doesn't exist, registers a systemd service named `cameraui` and starts it on boot. The first start downloads and installs the server, so give it a few minutes and follow along with `cameraui logs`. The web UI then runs on `https://<host>:3443`.

If the service user needs GPU access for hardware acceleration, add it to your distribution's `video`/`render` groups (either via `--group` during install or `usermod -aG` afterwards).

## Managing the service

```bash
cameraui status     # service state
cameraui logs       # tail the logs
cameraui restart    # also: start / stop
sudo cameraui update-server            # update to the latest server release
sudo cameraui update-server 1.2.3      # or pin a specific version
```

camera.ui also updates the server from the web UI; `update-server` is the CLI equivalent.

## Data

Everything lives in the service user's home under `~/.camera.ui` (config, database, recordings, TLS certs). That's the directory to back up. A different location can be set with `-H <path>` during install.

## Hardware acceleration

Video acceleration is [automatic](/install/hardware-acceleration), but on bare metal the host provides the drivers that the Docker images would otherwise bundle:

- **Intel GPU:** `sudo apt install intel-media-va-driver-non-free` (VA-API/QSV)
- **AMD GPU:** `sudo apt install mesa-va-drivers`
- **NVIDIA:** just the regular driver (e.g. `sudo ubuntu-drivers install`); the Container Toolkit is Docker-only, you don't need it here
- **Coral Edge TPU:** the `libedgetpu` runtime plus (for PCIe/M.2) the gasket kernel driver, see the [Coral section](/install/hardware-acceleration#coral-edge-tpu)
- **Hailo:** the kernel driver, see the [Hailo section](/install/hardware-acceleration#hailo-8-hailo-8l)

No device passthrough is needed anywhere. Bare metal sees the hardware directly, and camera.ui picks it up automatically. The detection plugins log what they found (`Available devices: …`).

## Uninstall

```bash
sudo cameraui uninstall        # removes the systemd service
sudo npm remove -g camera.ui
```

The data directory (`~/.camera.ui`) is left untouched.
