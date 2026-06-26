---
title: Custom domain
---

# Custom domain

If you'd rather expose the server yourself, point your own domain at it. In **Settings → Remote**, set the **direct connection** method to **Custom domain** and enter the **URL** where the server is reachable, for example `https://nvr.example.com`.

This assumes you've already made the server reachable at that address, through your own DNS and a reverse proxy or port-forwarding on your router. camera.ui doesn't change your network for you here; it records the public address to use.

Use **Test connection** to confirm it works.

::: tip
If you don't run your own domain or reverse proxy, [camera.ui Cloud](/remote/cloud) or a [Cloudflare tunnel](/remote/cloudflare) is simpler, since neither needs router changes.
:::
