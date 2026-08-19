---
title: Remote access
---

# Remote access

By default, camera.ui is reachable on your local network. To view your cameras while you're away, you set up remote access. It's included for free and doesn't need the recording subscription.[^free]

Remote access is an admin setting, under **Settings → Remote Access**. The page shows your current **connection status** (local, local network, remote, or cloud) and the address you're connected on. The info button next to it opens **Connection details**: the address this app is using, what the server sees from its side, and every address the app tried in its last attempt with the time it took and why it failed. **Copy details** puts all of it on the clipboard for a support message. The same page holds the **Network** card, where you pick which of the server's IP addresses apps may use and can give it a **Local address** on your own network.

You do not have to open that page to know where you are. On connecting, a short notice at the bottom of the screen says **Connected via local network**, **Connected via internet** or **Connected via cloud**, and it comes back whenever the path changes, for example when you walk into the house and the app moves off the internet path. It disappears after a few seconds on its own.

<Shot src="/img/remote/remote-settings.png" alt="Remote access page with the connection status and its info button" />

## Choosing how to connect

There are two approaches:

- **[camera.ui Cloud](/remote/cloud).** The easiest option. Sign in, register your server, and reach it from anywhere with no router setup or port-forwarding. Recommended for most people, and required for the [mobile apps](/remote/pairing) when away from home.
- **Direct connection.** Expose your server with a public address of your own, either through a **[Cloudflare tunnel](/remote/cloudflare)** or your **[own domain](/remote/custom-domain)**. For users who want to use their own infrastructure.

You can also keep access **local only** by leaving remote access off.

[^free]: Remote access and camera sharing are included at no cost. The subscription covers [recording (NVR)](/recording/), not remote access.
