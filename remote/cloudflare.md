---
title: Cloudflare tunnel
---

# Cloudflare tunnel

A Cloudflare tunnel gives your server a public address through Cloudflare's network, without opening ports on your router. In **Settings → Remote**, set the **Direct connection** method to **Cloudflare**, then pick a variant:

- **Quick Tunnel.** A temporary address with no Cloudflare account needed. Good for a quick test. The address changes each time.
- **Named Tunnel (Token).** Use your own domain. Create a tunnel in your Cloudflare dashboard and give it a public hostname that points at your server, for example `https://192.168.1.10:3443`. The server uses a self-signed certificate, so turn on **No TLS Verify** in the tunnel's origin settings. Then paste **Hostname** and **Tunnel Token** here. Your domain must already be a zone in your Cloudflare account.
- **Named Tunnel (OAuth).** Use your own domain, with camera.ui doing the setup. Enter a hostname, choose **Connect Cloudflare**, sign in to authorise your zone, and camera.ui creates the tunnel and DNS record for you.

Use **Test connection** to confirm the server is reachable.
