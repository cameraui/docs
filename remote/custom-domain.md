---
title: Custom domain
---

# Custom domain

If you'd rather expose the server yourself, point your own domain at it. In **Settings → Remote Access**, set the **direct connection** method to **Custom domain** and enter the **URL** where the server is reachable, for example `https://nvr.example.com`.

This assumes you've already made the server reachable at that address, through your own DNS and a reverse proxy or port-forwarding on your router. camera.ui doesn't change your network for you here; it records the public address to use. Forwarding a port sends traffic to **3443**, and the server answers it with its own self-signed certificate, so browsers and apps show a warning. A reverse proxy with a real certificate avoids that. If you go the reverse-proxy route, [Reverse proxy](/remote/reverse-proxy) covers what the proxy has to forward.

Choose **Save** to store the address, then use **Test connection**. The test checks the saved address, so a URL you've typed but not saved yet won't be picked up. It requests the address from the server itself, which fails on routers without hairpin NAT or with split DNS even when the address works fine from outside. Remote access keeps running either way, camera.ui only gives up a custom domain when the name stops resolving publicly.

::: tip
If you don't run your own domain or reverse proxy, [camera.ui Cloud](/remote/cloud) or a [Cloudflare tunnel](/remote/cloudflare) is simpler, since neither needs router changes.
:::
