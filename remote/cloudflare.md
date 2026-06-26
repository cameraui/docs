---
title: Cloudflare tunnel
---

# Cloudflare tunnel

A Cloudflare tunnel gives your server a public address through Cloudflare's network, without opening ports on your router. In **Settings → Remote**, set the **direct connection** method to **Cloudflare**, then pick a variant:

- **Quick tunnel.** A temporary address with no Cloudflare account needed. Good for a quick test. The address changes each time.
- **Named tunnel (token).** Use your own domain. Create a tunnel in your Cloudflare dashboard, then paste its **hostname** and **tunnel token** here. Your domain must already be a zone in your Cloudflare account.
- **Named tunnel (OAuth).** Use your own domain, with camera.ui doing the setup. Enter a hostname, choose **Connect Cloudflare**, sign in to authorise your zone, and camera.ui creates the tunnel and DNS record for you.

Use **Test connection** to confirm the server is reachable.
