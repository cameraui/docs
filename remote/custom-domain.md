---
title: Custom domain
---

# Custom domain

In **Settings → Remote Access**, set the **direct connection** method to **Custom domain** and enter the **URL** where the server is reachable, for example `https://nvr.example.com`.

The server must already be reachable at that address through your own DNS and a reverse proxy or port forwarding: camera.ui only records the address, it does not change your network. Forwarding a port sends traffic to **3443**, and the server answers it with its own self-signed certificate, so browsers and apps show a warning. A reverse proxy with a real certificate avoids that, and [Certificate](/remote/certificate) covers uploading one to camera.ui itself. [Reverse proxy](/remote/reverse-proxy) covers what a proxy has to forward.

That one port carries the interface, the API and MSE playback. WebRTC media travels separately, over port **2004** (UDP, with TCP on the same port as fallback), so forward that too for the low-latency path from outside. Without it the live view falls back to MSE.

**Test connection** checks the saved address, so **Save** first. It requests the address from the server itself, which fails on routers without hairpin NAT or with split DNS even when the address works fine from outside. Remote access keeps running either way, camera.ui only gives up a custom domain when the name stops resolving publicly.

::: tip
If you don't run your own domain or reverse proxy, [camera.ui Cloud](/remote/cloud) or a [Cloudflare tunnel](/remote/cloudflare) is simpler, since neither needs router changes.
:::
