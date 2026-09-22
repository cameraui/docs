# Desktop app

The desktop app is the recommended way to run camera.ui on **macOS and Windows**. One download installs server and viewer together. It also runs on Linux, though there a [Docker](/install/docker) or [Proxmox](/install/proxmox) server is the better choice (see [Which installation?](/install/)).

## Download

Installers are below and on the [download page](https://cameraui.com/#download). The links always point to the latest release.

| Platform | Download |
|---|---|
| macOS (Apple Silicon) | [`camera.ui-arm64.dmg`](https://downloads.cameraui.com/latest/camera.ui-arm64.dmg) |
| macOS (Intel) | [`camera.ui-x64.dmg`](https://downloads.cameraui.com/latest/camera.ui-x64.dmg) |
| Windows 10 / 11 | [`camera.ui-x64.exe`](https://downloads.cameraui.com/latest/camera.ui-x64.exe) |
| Linux (AppImage) | [`x64`](https://downloads.cameraui.com/latest/camera.ui-x86_64.AppImage) · [`arm64`](https://downloads.cameraui.com/latest/camera.ui-arm64.AppImage) |
| Linux (.deb) | [`amd64`](https://downloads.cameraui.com/latest/camera.ui-amd64.deb) · [`arm64`](https://downloads.cameraui.com/latest/camera.ui-arm64.deb) |

<Shot src="/img/install/desktop-download.png" alt="camera.ui download page" />

## Install

### macOS

Drag **camera.ui** from the `.dmg` into Applications. The app is signed and notarized, so it opens without warnings.

### Windows

The `.exe` installs for the current user, no administrator rights needed.

The app is not code-signed yet, so **SmartScreen** may warn. Select **More info → Run anyway**.

### Linux

Install the `.deb`:

```bash
sudo apt install ./camera.ui-*.deb
```

Or make the `.AppImage` executable and run it:

```bash
chmod +x camera.ui-*.AppImage
./camera.ui-*.AppImage
```

::: tip Pick the `.AppImage` if you want automatic updates
Only the `.AppImage` updates itself. A `.deb` install stays on its version until you install a newer `.deb`.
:::

## First launch: choose how to run

On first launch the app asks **"How should camera.ui run?"**:

- **Server.** Runs the camera.ui server on this machine. The all-in-one option.
- **Worker.** Takes on part of the work for another camera.ui server on your network. Needs the main server's address and a pairing code from its **Workers** settings. See [Workers](/admin/workers#worker-with-the-desktop-app).
- **Viewer · Direct.** Connects to an existing server by address.
- **Viewer · Cloud.** Signs in via cloud.cameraui.com to reach a server through [camera.ui Cloud](/remote/cloud).

<Shot src="/img/install/desktop-mode-picker.png" alt="Desktop first-launch mode picker" />

**Server** mode continues with [first-run setup](/intro/getting-started). **Worker** mode has no window, only the tray icon and a status screen.

## The tray icon

The tray icon holds the app's own settings:

- **Open At Login.** Starts camera.ui at login, straight to the tray without a window.[^autostart]
- **Close to tray.** Off by default. When on, closing the window only hides it and a server on this machine keeps running.[^closetotray]
- **Switch mode….** Changes how the app runs, without reinstalling.
- **Quit.** Stops the app, and in Server mode the server with it.

On Windows, left-click the tray icon to open the window, right-click for the menu.

GNOME shows a tray icon only with the AppIndicator extension. **Switch mode…** also sits in the app menu under **File**, and starting the app with `--switch-mode` opens the mode picker: in the running instance if one is up, otherwise on that launch. Both also work for a worker, which has no window of its own.

<Shot src="/img/install/desktop-tray-menu.png" alt="Desktop tray menu" />

[^autostart]: macOS and Windows only.
[^closetotray]: Windows and Linux only. On macOS the app stays in the tray when you close the window anyway, so the option isn't there.


## macOS permissions

On macOS 15 and newer, allow **local network** access on first launch, otherwise the app can't reach your cameras. Two-way talk asks for **microphone** access, and the geofence trigger's "My location" button in [Automations](/automations/) for **location** access.

## Updates

The app checks for updates at startup and periodically while running, and installs them itself. In Server mode it updates the bundled server before starting it. The [Updates page](/install/updating#the-updates-page) triggers an update from any device.

On Linux only the `.AppImage` updates itself; a `.deb` is updated from the [download page](https://cameraui.com).

## Where your data lives

In Server mode, settings and recordings live in the app's per-user data directory:

- **macOS:** `~/Library/Application Support/camera.ui/camera.ui/volume`
- **Windows:** `%APPDATA%\camera.ui\camera.ui\volume`
- **Linux:** `~/.config/camera.ui/camera.ui/volume`

The recording settings can move recordings to another disk, an external drive for example. Avoid a network share, see [Storage & retention](/recording/storage#where-recordings-are-stored).

See [Backup & restore](/admin/backup) to keep a copy.
