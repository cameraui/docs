---
title: Hardware acceleration
---

# Hardware acceleration

camera.ui accelerates two things: the **video pipeline** (decoding camera streams for detection, live view and snapshots, and encoding for streaming) and **AI inference** (object detection and everything built on it).

**Video acceleration is automatic on every platform.** camera.ui probes the hardware at runtime, picks the best available backend and falls back to software if there is none, so there is nothing to configure. AI accelerators are automatic too once the hardware is reachable; on Docker that means passing the device through once (covered below).

## What runs where

| Platform | Video pipeline (automatic) | AI backends |
|---|---|---|
| **macOS** (desktop app, Intel & Apple Silicon) | VideoToolbox (Apple GPU + media engine) | CoreML (Apple GPU + **Neural Engine**), ONNX |
| **Windows** (desktop app, x64) | NVIDIA (CUDA/NVENC), Intel (QSV), and any GPU via Direct3D 11/12 | OpenVINO (Intel GPU/NPU), ONNX (NVIDIA CUDA) |
| **Linux x64** (Docker, bare-metal, Proxmox) | NVIDIA (CUDA/NVENC), Intel (VA-API/QSV), AMD (VA-API), plus Vulkan/OpenCL | OpenVINO (Intel GPU/NPU), ONNX (CUDA/TensorRT), NCNN (Vulkan), Coral, Hailo |
| **Linux arm64** (Rockchip) | Rockchip (RKMPP) | Coral, Hailo, NCNN (CPU/NEON) |

The table shows what camera.ui **can** use. The matching GPU driver still has to be installed on the host. camera.ui probes every backend at startup and only picks ones that actually work; anything whose driver is missing is skipped silently, never an error.

On the **desktop app** there is nothing to set up: macOS ships video acceleration as part of the OS, and on Windows the graphics driver comes with the system. Hardware is detected automatically. Each detection plugin logs what every model runs on (`Loaded model: …`) and shows it under **Active Hardware** in its plugin settings.

The rest of this page is for **Linux and Docker**, where hardware has to cross the container boundary. That always takes the same three steps:

1. **Host driver.** The kernel-side driver must be installed on the host (the only part a Docker image can never ship).
2. **Device passthrough.** The device node goes into the `devices:` section of your compose file.
3. **Verify.** The container tells you what actually arrived.

GPUs are matched by picking the right [image flavor](/install/docker#hardware-acceleration). AI accelerators work with **any** flavor: the Coral runtime is baked into every image, and the Hailo runtime ships with its plugin. The one exception is the Intel NPU, whose user-space driver is bundled in the **intel flavor** only.

## Check your host

The [`cameraui/docker`](https://github.com/cameraui/docker) repository ships a host helper that diagnoses your machine and installs the drivers that need more than a package manager:

```bash
curl -fsSLO https://raw.githubusercontent.com/cameraui/docker/main/scripts/host/cameraui-host.sh
sudo bash cameraui-host.sh check     # read-only: drivers, docker runtime, device nodes
sudo bash cameraui-host.sh nvidia    # install the NVIDIA Container Toolkit
sudo bash cameraui-host.sh hailo     # build + install the Hailo PCIe kernel driver
sudo bash cameraui-host.sh coral     # install the gasket/apex driver (PCIe/M.2 Coral)
```

`check` prints a ✓/✗ line for every accelerator class with the fix for anything missing. Run it first. It tells you which of the sections below apply to your machine.

## Verify from the container

On every start the container logs which device nodes it can actually see:

```
[setup] accelerator devices: /dev/dri ✓ · /dev/kfd ✗ · /dev/accel ✗ · /dev/apex_0 ✓ · /dev/hailo0 ✗ · /dev/bus/usb ✗ · nvidia ✗
```

If a device shows `✗` here but exists on the host, it is missing from your compose `devices:` list. The detection plugins additionally log what they found (`Available devices: …`) and what each model actually runs on (`Loaded model: … (AUTO -> CPU)`), and show it under **Active Hardware** in their plugin settings.

## Quick reference

| Hardware | Accelerates | Host driver | Pass to the container |
|---|---|---|---|
| Intel / AMD GPU | Video (VA-API/QSV) + OpenCL/Vulkan inference | in the kernel (i915/amdgpu) | `/dev/dri` |
| NVIDIA GPU | Video (NVENC/NVDEC) + CUDA | NVIDIA driver + Container Toolkit | via the toolkit runtime |
| Coral Edge TPU (PCIe/M.2) | Object detection | gasket/apex (`coral` command) | `/dev/apex_0` |
| Coral Edge TPU (USB) | Object detection | none | `/dev/bus/usb` |
| Hailo-8 / Hailo-8L | Object detection | hailo_pci + firmware (`hailo` command) | `/dev/hailo0` |
| Intel NPU (Core Ultra) | OpenVINO inference | `intel_vpu` kernel module + firmware | `/dev/accel` (intel flavor) |
| AMD ROCm | Compute | ROCm stack | `/dev/kfd` + `/dev/dri` |

## Intel / AMD GPU

The driver is part of the Linux kernel, so there is nothing to install on the host. Use the `intel` or `amd` flavor and pass `/dev/dri`:

```yaml
    devices:
      - /dev/dri:/dev/dri
```

::: tip Older Intel iGPUs (Gen8 to Gen11, e.g. UHD 630)
Intel's current OpenCL runtime only covers Gen12 and newer. The `intel` flavor therefore bundles Intel's legacy runtime alongside it, so **OpenVINO and OpenCL inference also work on Gen8 to Gen11 iGPUs** (Broadwell through Comet Lake). Only chips older than Gen8 (Haswell and earlier) have no OpenCL runtime at all: there inference falls back to CPU, and a Coral or Hailo is the way to fast detection. Video decoding is fully accelerated on all of them either way.
:::

## NVIDIA GPU

Two host-side pieces: the NVIDIA driver (e.g. `sudo ubuntu-drivers install`) and the Container Toolkit, which injects the driver libraries into containers. `sudo bash cameraui-host.sh nvidia` installs the toolkit and registers it with Docker. Then use the `nvidia` flavor override from the [Docker page](/install/docker#hardware-acceleration). Setting `NVIDIA_DRIVER_CAPABILITIES=all` also enables the OpenCL and Vulkan paths the detection plugins can use.

## Coral Edge TPU

The runtime library (`libedgetpu`) is already in every image flavor. Only the host side differs by form factor:

- **PCIe / M.2.** Needs the gasket/apex kernel driver. `sudo bash cameraui-host.sh coral` installs it (a maintained community build, since Google's original package no longer compiles on kernels ≥ 6.13). Then pass the device:

  ```yaml
      devices:
        - /dev/apex_0:/dev/apex_0
  ```

- **USB.** No driver needed, just pass the USB bus:

  ```yaml
      devices:
        - /dev/bus/usb:/dev/bus/usb
  ```

Without a reachable TPU the Coral plugin runs on CPU and says so in its log. Check its `Available devices:` line if detection seems slow.

## Hailo-8 / Hailo-8L

The kernel driver is built from source on the host: `sudo bash cameraui-host.sh hailo` installs build dependencies, compiles the driver, installs the firmware and udev rules. **Reboot afterwards** so the firmware loads, then pass the device:

```yaml
    devices:
      - /dev/hailo0:/dev/hailo0
```

The userspace runtime ships inside the Hailo plugin. Nothing else to install.

## Intel NPU (Core Ultra)

The **intel flavor** bundles the NPU user-space driver (Level Zero + the Intel NPU UMD and compiler); other flavors do not. On the host you need the `intel_vpu` kernel module (upstream since Linux 6.8) and its firmware; if `/dev/accel` is missing, see [intel/linux-npu-driver](https://github.com/intel/linux-npu-driver). Then pass the device through:

```yaml
    devices:
      - /dev/accel:/dev/accel
```

The OpenVINO plugin then lists `NPU` in its `Available devices:` log line and its device setting.
