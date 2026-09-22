# Which installation?

camera.ui has one **server** that does the work, and **apps** (desktop, mobile, browser) that connect to it. Which install method fits depends on the platform the server runs on.

## The quick answer

- **macOS or Windows** → the **[desktop app](/install/desktop)** (recommended). Runs the server and the viewer together, fit for 24/7 operation.
- **Linux** → **[Docker](/install/docker)** (or **[Proxmox](/install/proxmox)**), with GPU acceleration.
- **Phone only** → the **[mobile apps](/install/mobile)**. They still need a server running somewhere.

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

- **One server is enough.** Desktop app, mobile apps and browser all view the same server. From outside your network, use [remote access](/remote/).
- **The desktop app can also be just a viewer.** Install it in Viewer mode to watch a server running elsewhere. See [Desktop app](/install/desktop).
