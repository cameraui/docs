# Desktop app

The desktop app is the recommended way to run camera.ui on **macOS and Windows**. One download installs the server and the viewer together, so you have a working setup in a couple of clicks. It also runs on Linux, though there a [Docker](/install/docker) or [Proxmox](/install/proxmox) server is the better choice (see [Which installation?](/install/)).

## Download

Download the installer for your platform, directly below or from the [download page](https://cameraui.com/#download). The links always point to the latest release.

| Platform | Download |
|---|---|
| macOS (Apple Silicon) | [`camera.ui-arm64.dmg`](https://downloads.cameraui.com/latest/camera.ui-arm64.dmg) |
| macOS (Intel) | [`camera.ui-x64.dmg`](https://downloads.cameraui.com/latest/camera.ui-x64.dmg) |
| Windows 10 / 11 | [`camera.ui-x64.exe`](https://downloads.cameraui.com/latest/camera.ui-x64.exe) |
| Linux (AppImage) | [`x64`](https://downloads.cameraui.com/latest/camera.ui-x86_64.AppImage) · [`arm64`](https://downloads.cameraui.com/latest/camera.ui-arm64.AppImage) |
| Linux (.deb) | [`amd64`](https://downloads.cameraui.com/latest/camera.ui-amd64.deb) · [`arm64`](https://downloads.cameraui.com/latest/camera.ui-arm64.deb) |

Apple Silicon and Intel Macs use separate downloads. Pick the one that matches your Mac.

<Shot src="/img/install/desktop-download.png" alt="camera.ui download page" />

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
Only the `.AppImage` updates itself. A `.deb` install stays on its version. Update it by downloading and installing the new `.deb`.
:::

## First launch: choose how to run

The first time you open the app, it asks **"How should camera.ui run?"** and offers four modes:

- **Server.** Runs the camera.ui server on this machine. This is the all-in-one option, and what most people on macOS and Windows pick.
- **Worker.** Takes on part of the work for another camera.ui server on your network. Enter the address of the main server and a pairing code from its **Workers** settings. See [Instances & workers](/admin/instances-workers).
- **Viewer · Direct.** Connects to an existing server by address, for example another machine on your network.
- **Viewer · Cloud.** Signs in via cloud.cameraui.com to reach a server through [camera.ui Cloud](/remote/cloud).

<Shot src="/img/install/desktop-mode-picker.png" alt="Desktop first-launch mode picker" />

In **Server** mode the app starts the server, opens the interface, and guides you through [first-run setup](/intro/getting-started). In a **Viewer** mode it connects to a server you already have. In **Worker** mode there is no window, only the tray icon and a status screen.

## The tray icon

The tray icon holds the app's own settings:

- **Open.** Brings the window back.
- **Open At Login.** Starts camera.ui when you log in. It goes straight to the tray: no window, no splash. Open it from the tray icon when you need it.[^autostart]
- **Close to tray.** Off by default. Turn it on and closing the window only hides it, so a server on this machine keeps running.[^closetotray]
- **Switch mode….** Changes how the app runs, without reinstalling.
- **Quit.** Stops the app, and in Server mode the server with it.

On Windows, left-click the tray icon to open the window, right-click for the menu.

<Shot src="/img/install/desktop-tray-menu.png" alt="Desktop tray menu" />

[^autostart]: macOS and Windows only.
[^closetotray]: Windows and Linux only. On macOS the app stays in the tray when you close the window anyway, so the option isn't there.


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
