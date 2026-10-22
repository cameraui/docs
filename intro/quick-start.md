---
title: Quick start
---

# Quick start

The short path from install to a camera that detects and records. Each step links to the page with the details.

## 1. Install

- **macOS or Windows.** The [desktop app](/install/desktop).
- **Linux.** [Docker](/install/docker): save the compose file from that page and run `docker compose up -d`. Proxmox users take the [Proxmox](/install/proxmox) script.

The desktop app opens camera.ui by itself. Otherwise open `https://<server-ip>:3443`. The certificate is self-signed, so the browser warns on the first visit.

## 2. Sign in

Sign in with `admin` / `admin`. The setup wizard asks for theme and language, then for your own username and password, which replace the default account. Sign in again with the new account. See [Getting started](/intro/getting-started).

## 3. Add a camera

Open **Cameras**. Cameras found on your network show up under **Discovered**: select one, enter its username and password, confirm. Discovery needs ONVIF turned on in the camera. A camera that isn't found is added with **Add camera** and its RTSP URL. Without an RTSP URL, a brand plugin from the store brings the camera in, Reolink for example:[^cloud] install it, set it up on its page, and its cameras appear under **Discovered**. See [Adding a camera](/cameras/add-camera).

## 4. Install the detection plugins

The NVR plugin for recording is already installed. Under **Plugins → Search plugins** add:

- **A motion engine.** **Rust Motion** fits most setups.
- **An AI backend** for your hardware: **CoreML** on Apple Silicon, **OpenVINO** on Intel, **ONNX** on everything else.

See [Object detection & AI backends](/detection/ai-backends) for the other options.

## 5. Link the server to your account

Recording and the mobile apps run on a camera.ui account, created at [cloud.cameraui.com](https://cloud.cameraui.com/).

1. **Settings → Remote Access → Register server**, then sign in. The same screen pairs the [mobile apps](/remote/pairing).
2. **Settings → Recordings**, card **License & Cloud**: click the cloud icon and sign in. The license activates on its own.

See [Turning on recording](/recording/#turning-on-recording).

## 6. Turn on detection

In the camera's settings, open the **Plugins** tab and the **Detection** category. Set **Motion** to Rust Motion and **Object** to your AI backend. Detection starts right away, sensitivity and confidence are under **Detection** in the same settings. See [Set up sensors](/sensors/setup).

## 7. Check recording

With an active license every camera records around the clock in all stream qualities, as long as your plan has a free camera slot. To record only events, switch the camera to **Event** in its recording settings. See [Recording modes](/recording/#recording-modes).

## Next steps

- **[Live view](/cameras/live-view)** — watch your cameras
- **[Notifications](/notifications/)** — pushes for what your cameras see
- **[Zones & privacy](/cameras/zones-and-masks)** — limit where detection counts
- **[Remote access](/remote/)** — reach camera.ui from outside your network

[^cloud]: There are also plugins for cameras that depend on a vendor cloud, such as Eufy, Tuya, Wyze or Ring. They work, but these cameras are **not recommended** and **not covered by support**. Use local RTSP / ONVIF cameras for a reliable experience.
