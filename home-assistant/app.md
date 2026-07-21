---
title: Home Assistant app
---

# Home Assistant app

You can run the full camera.ui server inside Home Assistant OS as an app, with no separate machine to maintain. There are two apps in the repository: **camera.ui**, the full server with its own panel in the Home Assistant sidebar, and **camera.ui Worker**, a helper that lends this machine's compute to a camera.ui server running elsewhere. Both are supported on `amd64` and `aarch64` hosts.

## Install

1. In Home Assistant, open **Settings → Apps → App Store**.
2. From the store's menu (top right), choose **Repositories** and add the camera.ui app repository URL.
3. Find **camera.ui** in the store and click **Install**.

<Shot src="/img/home-assistant/app-store.png" alt="The camera.ui app in the Home Assistant App Store" />

## The camera.ui app

The **camera.ui** app runs the complete server: the UI, the streaming engine, the NVR, and any plugins you install. It runs on the host network, which it needs for WebRTC live view, HomeKit pairing, and camera discovery.

Once started, the app adds a **camera.ui** entry to the Home Assistant sidebar. That panel, and the app's **Open Web UI** button, both open the interface through Home Assistant's ingress proxy, so there is no separate login and no certificate warning.[^direct]

On **first start** the app downloads the camera.ui server and the default plugin, which needs an internet connection and takes a few minutes. Later starts are fast.[^firstboot] Follow the first boot in the app's **Log** tab.

[^direct]: The app also listens on `https://<host>:3443` directly over the host network. Reaching it that way shows a self-signed certificate warning once, while the sidebar panel and Open Web UI button do not.

[^firstboot]: If first boot fails to fetch the server, check that the host can reach the internet and resolve DNS.

## Options

The camera.ui app has three options.

- **default_plugins.** Comma-separated plugins installed on first boot. Defaults to `@camera.ui/camera-ui-nvr`, the NVR plugin.
- **recordings_path.** Where the NVR plugin writes recordings. Defaults to `/media/camera.ui`. Paths under `/media` show up in the Home Assistant media browser.
- **internal_avahi.** Runs the app's own mDNS stack for HomeKit pairing and camera discovery. On by default. Turn it off to use the host's mDNS instead.

## Hardware acceleration

The app passes GPU, AI accelerator, and codec devices through to the container. What is usable depends on your architecture and hardware.

- **Intel / AMD (VA-API).** VA-API drivers ship on `amd64` only, covering Intel Quick Sync and AMD Mesa VA-API decoding. `aarch64` hosts do not get VA-API.
- **Coral Edge TPU.** The Coral runtime is included for both architectures. USB Coral works through the app's USB access; PCIe Coral uses the passed-through `/dev/apex_*` devices.
- **Hailo.** The Hailo device (`/dev/hailo0`) is passed through, but the Hailo runtime is not part of the image. It comes with the Hailo plugin.[^hailo]
- **NVIDIA.** Not available in the Home Assistant app. Use [Docker](/install/docker) on a plain Linux host for an NVIDIA setup.

The [Hardware acceleration](/install/hardware-acceleration) page explains how the streaming engine picks a device and how to check that it works.


[^hailo]: Install the Hailo plugin to add the runtime. The app image itself only passes the device through.

## Recordings and the media browser

The `/media` directory is mapped into the app with read-write access. With the default `recordings_path` of `/media/camera.ui`, recordings written by the NVR appear in Home Assistant's **Media** browser alongside your other media.

## Backups and updates

Home Assistant backs up the app's `/data` directory, which holds your configuration, database, and TLS certificates. Three subtrees are **excluded** from backups: the downloaded server, the Python environment, and installed plugins. These are re-downloaded on restore, so restoring a backup needs an internet connection, the same as a first start.

The server updates itself from within the app, so day-to-day updates do not need a new app image. Update the app itself when a new version is published to refresh the base image (OS, drivers, and launcher).

Leave the supervisor's **Watchdog** toggle on for the app so Home Assistant restarts it if it stops unexpectedly.[^watchdog]

[^watchdog]: Watchdog is a Home Assistant setting on the app's info page, not a camera.ui option.

## Worker app

The **camera.ui Worker** app turns this Home Assistant machine into a [worker](/admin/workers) for a camera.ui server (the master) running somewhere else. It lends this machine's CPU, GPU, and Coral to the master for decoding, detection, and plugins. It has no UI and no sidebar panel of its own; it dials out to the master and waits for work. It passes through the same hardware as the full app.

Set it up on the master first, then here:

1. On the **master**, enable workers and set the master address, then generate a one-time pairing code. Generating a code and pairing both fail unless workers are enabled there. See [Workers](/admin/workers).
2. Install the **camera.ui Worker** app on this machine.
3. Set **master_address** to the master's IP or hostname and **pairing_code** to the code you just generated.
4. Start the app. It exchanges the code for its own credentials on first connect and reconnects on its own afterwards, so the code is entered only once.

<Shot src="/img/home-assistant/worker-options.png" alt="The camera.ui Worker app options" />

The worker app has four options.

- **master_address.** IP or hostname of the camera.ui master. Required.
- **pairing_code.** The one-time code generated on the master. Required for the first connection. A code is valid for 15 minutes and can be used once.
- **worker_name.** Name shown for this worker on the master. Optional. Defaults to `worker`.
- **master_api_port.** The master's HTTPS API port. Optional. Only needed if the master's API runs on a non-default port; the default is `3443`.

## Next steps

- **[Hardware acceleration](/install/hardware-acceleration)** — how the streaming engine uses your GPU and accelerators, and how to verify it.
- **[Workers](/admin/workers)** — the full picture of masters, workers, and camera assignments.
- **[Docker](/install/docker)** — run the server outside Home Assistant, including NVIDIA setups.
