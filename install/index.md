# Which installation?

camera.ui has one **server** that does the work, and **apps** (desktop, mobile, browser) that view it. You install the server once, and everything else just connects to it.

The best way to install depends mostly on **which platform** you'll run it on.

## The quick answer

- **macOS or Windows** → the **[desktop app](/install/desktop)** (recommended). A one-click install that runs the server and the viewer together, suitable for continuous 24/7 operation.
- **Linux** → **[Docker](/install/docker)** (or **[Proxmox](/install/proxmox)** if you run it). This is the recommended way to run a dedicated Linux server, with GPU acceleration.
- **Just want to watch on your phone?** → the **[mobile apps](/install/mobile)**. You'll still need a server running somewhere.

The desktop app is both the simplest way to get started and a fully capable always-on server.

## Choose a method

| Method | Runs on | Recommended for |
|---|---|---|
| **[Desktop app](/install/desktop)** | macOS, Windows, Linux | **macOS & Windows.** The easiest way; server + viewer in one |
| **[Docker](/install/docker)** | Linux (x86-64 / arm64) | **Linux** servers, mini-PCs, NAS, and homelabs, with GPU acceleration |
| **[Proxmox](/install/proxmox)** | Proxmox VE | Homelabs already running Proxmox |
| **[Linux (bare-metal)](/install/linux)** | Linux | A Linux box without Docker |
| **[Mobile apps](/install/mobile)** | iOS, Android | Watching on the go (connects to your server) |

::: tip Known-good hardware
For always-on recording, a small **Intel N100** mini-PC (with [Docker](/install/docker)) or an **Apple Silicon Mac** (with the [desktop app](/install/desktop)) are both well-suited as low-power servers. See [System requirements](/intro/requirements).
:::

## A few notes

- **One server is enough.** The desktop app, the mobile apps, and a browser are all viewers of the same server. Install the server once, then connect from anywhere with [remote access](/remote/).
- **The desktop app can also be just a viewer.** If you already run a server elsewhere, install the desktop app in Viewer mode to watch it. See [Desktop app](/install/desktop).
