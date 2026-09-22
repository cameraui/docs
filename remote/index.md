---
title: Remote access
---

# Remote access

Without remote access, camera.ui is reachable on your local network only. Remote access is free and doesn't need the recording subscription.[^free]

Remote access is an admin setting, under **Settings → Remote Access**. The page shows your current **connection status** (local, local network, remote, or cloud) and the address you're connected on. The info button next to it opens **Connection details**: the address this app is using, what the server sees from its side, and every address the app tried in its last attempt with the time it took and why it failed. **Copy details** copies all of it for a support message. The same page holds the **Network** card, where you pick which of the server's IP addresses apps may use and can give it a **Local address** on your own network.

On connecting, and whenever the path changes (you get home and the app leaves the internet path, say), a short notice at the bottom says **Connected via local network**, **Connected via internet** or **Connected via cloud**.

<Shot src="/img/remote/remote-settings.png" alt="Remote access page with the connection status and its info button" />

## Choosing how to connect

- **[camera.ui Cloud](/remote/cloud).** Register your server and reach it from anywhere, no router setup or port forwarding. Recommended for most people, and required for the [mobile apps](/remote/pairing) when away from home.
- **Direct connection.** Expose your server with a public address of your own, either through a **[Cloudflare tunnel](/remote/cloudflare)** or your **[own domain](/remote/custom-domain)**.

You can also keep access **local only** by leaving remote access off.

[^free]: Remote access and camera sharing are included at no cost. The subscription covers [recording (NVR)](/recording/), not remote access.
