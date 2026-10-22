---
title: Cloudflare tunnel
---

# Cloudflare tunnel

A Cloudflare tunnel gives your server a public address through Cloudflare's network, without opening ports on your router. In **Settings → Remote Access**, set the **Direct connection** method to **Cloudflare**, then pick a variant:

- **Quick Tunnel.** A temporary address with no Cloudflare account needed. Good for a quick test. The address changes each time, and from about four people watching remotely at once a named tunnel holds up better.
- **Named Tunnel (Token).** Use your own domain. Create a tunnel in your Cloudflare dashboard and give it a public hostname that points at your server, for example `https://192.168.1.10:3443`. The server uses a self-signed certificate, so turn on **No TLS Verify** in the tunnel's origin settings. Then paste **Hostname** and **Tunnel Token** here. Your domain must already be a zone in your Cloudflare account.
- **Named Tunnel (OAuth).** Use your own domain, with camera.ui doing the setup. Enter a hostname, choose **Connect Cloudflare**, sign in to authorise your zone, and camera.ui creates the tunnel and DNS record for you.

With cloud access on, camera.ui keeps a public address up at all times. If your named tunnel stops connecting, it starts a Quick Tunnel so the server stays reachable and tries your tunnel again after ten minutes, then after twice the wait each time, up to every four hours. Saving the settings under **Remote Access** starts over at ten minutes. Each failed retry leaves you on a new Quick Tunnel address, and the apps need a moment to find the server again.

Every variant connects out to Cloudflare over TCP on port 7844. Behind a firewall that filters outgoing traffic, allow TCP on that port.

To use QUIC instead, add `cloudflaredProtocol: quic` to `camera.ui.yaml` in your storage directory and restart the server. In Docker, `CAMERA_UI_CLOUDFLARED_PROTOCOL` under `environment:` does the same. `quic` needs UDP on port 7844, `auto` tries QUIC and falls back to TCP. Over QUIC, a few stalled viewers, a locked phone with live cameras open for example, can freeze the tunnel for everyone.
