---
title: Remote access
---

# Remote access

Without remote access, camera.ui is reachable on your local network only. Remote access is free and doesn't need the recording subscription.[^free]

Remote access is an admin setting, under **Settings → Remote Access**. The page shows your current **connection status** (local, local network, remote, or cloud) and the address you're connected on. The info button next to it opens **Connection details**: the address this app is using, what the server sees from its side, and every address the app tried in its last attempt with the time it took and why it failed. **Copy details** copies all of it for a support message. The same page holds the **Network** card, where you pick which of the server's IP addresses apps may use and can give it a **Local address** on your own network. Its list holds VPN addresses such as WireGuard too, but leaves out container and VM networks.

On connecting, and whenever the path changes (you get home and the app leaves the internet path, say), a short notice at the bottom says **Connected via local network**, **Connected via internet** or **Connected via cloud**.

<Shot src="/img/remote/remote-settings.png" alt="Remote access page with the connection status and its info button" />

## Choosing how to connect

- **[camera.ui Cloud](/remote/cloud).** Register your server and reach it from anywhere, no router setup or port forwarding. Recommended for most people, and required for the [mobile apps](/remote/pairing) when away from home.
- **Direct connection.** Expose your server with a public address of your own, either through a **[Cloudflare tunnel](/remote/cloudflare)** or your **[own domain](/remote/custom-domain)**.

You can also keep access **local only** by leaving remote access off.

## WebRTC

The interface, the API and MSE playback use the connection you chose above. WebRTC live view and two-way audio open a path of their own. The server and the app look up their public addresses with a STUN server, the server offers its address with port **2004**, and both try to open a direct path through their routers. Usually that works without any router setup. Behind some routers and behind carrier-grade NAT, common on mobile networks, no direct path forms. A camera on [Auto](/cameras/live-view#streaming-modes) then plays over MSE, one set to **WebRTC** shows no picture, and two-way audio does not connect.

Two things help:

- **Forward port 2004.** UDP, with TCP on the same port as fallback, to the server. The address the server offers is then reachable from anywhere.
- **A TURN server.** It relays the media when no direct path forms, and it is the only way when the server's own line sits behind carrier-grade NAT (DS-Lite, for example) and no port can be forwarded. camera.ui brings none, run your own (coturn, for example) or use a hosted one.

The **WebRTC** card under **Settings → [Streaming](/admin/streaming#webrtc)** sets the port and the **STUN servers** and **TURN servers**, for the server and for the apps. Each TURN server gets its own addresses, **Username** and **Password**, add more with **Add TURN server**. With the STUN list empty neither side looks up a public address, and from outside WebRTC then needs a TURN server. The button at the end of the STUN field brings back the default STUN servers, they apply after **Save**.

[^free]: Remote access and camera sharing are included at no cost. The subscription covers [recording (NVR)](/recording/), not remote access.
