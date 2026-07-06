# System requirements

What camera.ui needs depends on **how you run it** and **what you ask it to do**. Live-viewing a couple of cameras is light. Recording many cameras around the clock with AI detection needs real hardware. Use the table below as a guide, and scale up with your camera count, recording, and detection.

## At a glance

| | Minimum | Recommended |
|---|---|---|
| CPU | 4 modern cores | Apple Silicon (M1+), Intel N100, or better |
| RAM | 8 GB | 16 GB |
| Hardware acceleration | none (software) | a recent GPU / accelerator, or Apple Silicon |
| Disk (app) | ~16 GB SSD | SSD |
| Recordings | a separate, dedicated disk, sized to your cameras and retention | |

::: tip Known-good hardware
A small **Intel N100** mini-PC or an **Apple Silicon Mac (M1 or newer)** comfortably runs a typical setup (several cameras with recording and AI detection) at low power. Both are well-suited as quiet, always-on servers.
:::

What pushes you higher: more cameras, higher resolutions, continuous recording, and especially **AI detection**, which is far lighter with a supported GPU, accelerator, or Apple Silicon (see below).

## Running the server

You can run the camera.ui server on **Linux, macOS, or Windows**:

- **Linux.** In [Docker](/install/docker), on [Proxmox](/install/proxmox), or [bare-metal](/install/linux). Ubuntu 24.04 (or newer) is the tested baseline. A bare-metal install only needs Node.js 24, since camera.ui manages everything else (FFmpeg, go2rtc, a portable Python runtime) itself; the Docker images bundle everything.
- **macOS.** Through the [desktop app](/install/desktop) in Server mode. Apple Silicon Macs (M1 and newer) are an excellent fit: low power, with full hardware acceleration including the Neural Engine.
- **Windows.** Through the [desktop app](/install/desktop) in Server mode.

### Hardware acceleration

Detection and video processing run in software on any CPU, but a GPU, accelerator, or Apple Silicon lowers CPU use significantly, which matters once you have several cameras or use AI detection.

| Platform | Acceleration | Notes |
|---|---|---|
| Apple Silicon | GPU + Neural Engine + VideoToolbox | macOS, via the desktop app |
| Windows | Native GPU video acceleration | desktop app · x86-64 |
| Intel | Quick Sync / VA-API (+ OpenCL) | `intel` Docker flavor · x86-64 |
| NVIDIA | NVENC / NVDEC + CUDA | `nvidia` Docker flavor · x86-64 |
| AMD | Mesa VA-API (+ OpenCL) | `amd` Docker flavor · x86-64 |
| CPU only | software | `cpu` flavor · x86-64 + arm64 |
| Coral Edge TPU | dedicated TPU | via the Coral plugin · Linux · x64 + arm64 |
| Hailo-8 / Hailo-8L | dedicated NPU | via the Hailo plugin · Linux · x64 + arm64 |

On Linux, pick the [Docker flavor](/install/docker) that matches your GPU. On macOS and Windows, the desktop app uses your GPU for hardware-accelerated video automatically. Your [AI detection plugin](/detection/ai-backends) should match your hardware: CoreML on Apple Silicon, an Intel / NVIDIA backend, or a Coral / Hailo edge accelerator on Linux.

## Storage for recordings

[Recordings](/recording/storage) can grow large. How much space you need depends on your camera count, resolution and bitrate, [recording mode](/recording/), and how long you keep footage.

Use a **dedicated local disk** for recordings, separate from the system disk and not a network share (NAS). Continuous recording writes constantly, and a local disk is far more reliable and responsive for it.

camera.ui shows each camera's recording bandwidth (MB per hour) and lets you cap usage with a **storage quota** and a **retention** window, so storage never fills up unexpectedly.

## Desktop app

The [desktop app](/install/desktop) runs on **macOS, Windows, and Linux**. On macOS, version 15 or newer is recommended, since the operating system requires it for the app to reach cameras on your local network. In Server mode the desktop app runs the full server, so the requirements above apply; as a viewer it's lightweight.

## Mobile apps

The [mobile apps](/install/mobile) are viewers with minimal requirements:

- **iOS** 17.4 or newer
- **Android** 8.0 or newer (API 26)

## Cameras

Almost any IP camera works: anything that provides an **RTSP** or **ONVIF** stream (H.264 or H.265). Local cameras like these give the best results. See [Connection protocols](/cameras/protocols) for the full list.[^cloud]

[^cloud]: Cameras that depend on a vendor cloud (such as Ring or Nest) can be connected, either directly or through a plugin, but they are **not recommended** and **not covered by support**. Use local RTSP / ONVIF cameras for a reliable experience.
