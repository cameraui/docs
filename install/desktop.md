# Desktop app

The desktop app is the recommended way to run camera.ui on **macOS and Windows**. One download installs the server and the viewer together, so you have a working setup in a couple of clicks. It also runs on Linux, though there a [Docker](/install/docker) or [Proxmox](/install/proxmox) server is the better choice (see [Which installation?](/install/)).

## Download

Download the installer for your platform from the [download page](https://cameraui.com).

<!-- TODO: confirm the final public download URL — the download page was "Coming Soon" at the time of writing -->

| Platform | File |
|---|---|
| macOS (Apple Silicon) | `.dmg` (arm64) |
| macOS (Intel) | `.dmg` (x64) |
| Windows 10 / 11 | `.exe` installer |
| Linux | `.deb` or `.AppImage` |

Apple Silicon and Intel Macs use separate downloads. Pick the one that matches your Mac.

![camera.ui download page](/img/install/desktop-download.png)

## Install

### macOS

Open the downloaded `.dmg` and drag **camera.ui** into your Applications folder, then launch it from there. The app is signed and notarized by Apple, so it opens without extra warnings.

### Windows

Run the downloaded `.exe`. The installer lets you choose where to install and sets up the app for the current user, so no administrator rights are needed.

Windows may show a **SmartScreen** warning, because the app is not code-signed yet. Select **More info → Run anyway** to continue.

### Linux

Install the `.deb` with your package manager:

```bash
sudo apt install ./camera.ui-*.deb
```

Or make the `.AppImage` executable and run it:

```bash
chmod +x camera.ui-*.AppImage
./camera.ui-*.AppImage
```

::: tip Pick the `.AppImage` if you want automatic updates
Only the `.AppImage` updates itself. A `.deb` install stays on its version — update it by downloading and installing the new `.deb`.
:::

## First launch: choose how to run

The first time you open the app, it asks **"How should camera.ui run?"** and offers three modes:

- **Server.** Runs the camera.ui server on this machine. This is the all-in-one option, and what most people on macOS and Windows pick.
- **Viewer · Direct.** Connects to an existing server by address, for example another machine on your network.
- **Viewer · Cloud.** Signs in via cloud.cameraui.com to reach a server through [camera.ui Cloud](/remote/cloud).

![Desktop first-launch mode picker](/img/install/desktop-mode-picker.png)

In **Server** mode the app starts the server, opens the interface, and guides you through [first-run setup](/intro/getting-started). In a **Viewer** mode it connects to a server you already have.

You can change this anytime from the tray icon (**Switch mode…**), without reinstalling.

![Desktop tray menu](/img/install/desktop-tray-menu.png)


## macOS permissions

On macOS 15 and newer, the system asks for **local network** access on first launch. Allow it, otherwise the app can't reach cameras on your network. The first time you use two-way talk, macOS also asks for **microphone** access, and the first time you use the geofence trigger's "My location" button in [Automations](/automations/), it asks for **location** access.

## Updates

The desktop app keeps itself up to date. It checks for updates when it starts and periodically while running, then downloads and installs them for you. In Server mode it also updates the bundled server before starting it, so the app and the server stay in sync.

One exception on Linux: only the `.AppImage` updates itself. If you installed the `.deb`, update by downloading and installing the new `.deb` from the [download page](https://cameraui.com).

## Where your data lives

In Server mode, your settings and recordings are stored in a `camera.ui/volume` folder inside the app's per-user data directory:

- **macOS:** `~/Library/Application Support/camera.ui/camera.ui/volume`
- **Windows:** `%APPDATA%\camera.ui\camera.ui\volume`
- **Linux:** `~/.config/camera.ui/camera.ui/volume`

See [Backup & restore](/admin/backup) to keep a copy.
