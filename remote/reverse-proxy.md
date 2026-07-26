---
title: Reverse proxy
---

# Reverse proxy

If you put camera.ui behind Apache, nginx, Traefik or any other reverse proxy, the proxy has to carry more than plain HTTP. Live video, events and the camera list all travel over WebSocket connections. A proxy that forwards only ordinary requests gives you a UI that loads and then stays empty.

## What the server expects

**The main port serves HTTPS.** camera.ui listens on port `3443` by default, using a certificate it generates itself. A proxy pointed at that port has to connect with `https://` and skip certificate verification, because a self-generated certificate has no public issuer to check against. There is also a [plain HTTP port](#plain-http-instead) you can switch on if you'd rather avoid that.

**WebSocket upgrades have to reach the server.** They use the same host and port as the rest of the app, so the simplest working setup forwards everything under `/` and lets upgrades pass through.

**Connections stay open for a long time.** A live stream holds one connection for as long as you watch. Proxy timeouts in the low seconds will cut the picture at regular intervals.

## Apache

Enable `proxy`, `proxy_http`, `proxy_wstunnel`, `ssl` and `headers`, then use this virtual host. Replace the host name and the backend address with your own.

```apache
<VirtualHost *:443>
  ServerName nvr.example.com

  ProxyPreserveHost On
  ProxyRequests Off

  SSLProxyEngine On
  SSLProxyVerify none
  SSLProxyCheckPeerCN off
  SSLProxyCheckPeerName off
  SSLProxyCheckPeerExpire off

  ProxyTimeout 300

  ProxyPass        "/" "https://10.0.0.27:3443/" upgrade=websocket timeout=300
  ProxyPassReverse "/" "https://10.0.0.27:3443/"

  RequestHeader set X-Forwarded-Proto "https"
  RequestHeader set X-Forwarded-Port "443"
</VirtualHost>
```

The `upgrade=websocket` option needs Apache 2.4.47 or newer. Check with `apachectl -v`. On older versions, drop that option and route the upgrades with `mod_rewrite` instead:

```apache
  ProxyPass        "/" "https://10.0.0.27:3443/"
  ProxyPassReverse "/" "https://10.0.0.27:3443/"

  RewriteEngine On
  RewriteCond %{HTTP:Upgrade} =websocket [NC]
  RewriteCond %{HTTP:Connection} upgrade [NC]
  RewriteRule /(.*) wss://10.0.0.27:3443/$1 [P,L]
```

Note the `wss://` in the rewrite target. `ws://` is the usual mistake here: it sends an unencrypted handshake to a TLS port, Apache logs `error reading status line from remote server`, and every WebSocket fails with a 502 while normal pages keep loading fine.

## nginx

```nginx
map $http_upgrade $connection_upgrade {
  default upgrade;
  ''      close;
}

server {
  listen 443 ssl;
  server_name nvr.example.com;

  client_max_body_size 100m;

  location / {
    proxy_pass https://10.0.0.27:3443;
    proxy_ssl_verify off;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;

    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    proxy_buffering off;
    proxy_read_timeout 300s;
  }
}
```

`client_max_body_size` matters if you restore a backup through the proxy, since nginx rejects uploads over 1 MB by default.

## Plain HTTP instead

If the TLS settings above are more trouble than they're worth, camera.ui can open a second listener that speaks plain HTTP and forwards everything, WebSockets included, to the main port for you. Add a port to `camera.ui.yaml` in your storage directory:

```yaml
insecurePort: 8081
```

In Docker you can set `CAMERA_UI_INSECURE_PORT=8081` instead. Restart the server, then point the proxy at `http://10.0.0.27:8081` and drop the `SSLProxy*` lines or `proxy_ssl_verify`. Everything else stays the same.

This listener binds to the same address as the main port, so it is unencrypted on your whole network. Only use it where that traffic stays trusted, for example a proxy on the same machine or a network segment you control.

## When the interface loads but stays empty

Cameras show a placeholder, the event row never fills, and nothing updates. That is a WebSocket problem, not an authentication problem. Open your browser's developer tools, reload, and filter the network tab by WS. A failing entry with status 502 or 400 confirms it, and your proxy's error log will name the reason.

## Telling camera.ui about the address

Once the proxy works, enter the public address under **Settings → Remote** as described in [Custom domain](/remote/custom-domain).

The server checks that address by requesting it itself, from the inside. If your router does not support hairpin NAT, that request leaves the network and never comes back, so the check fails even though the address works perfectly from outside. Pointing your internal DNS at the proxy resolves it.

## Next steps

**[Custom domain](/remote/custom-domain)** — enter the public address in camera.ui.
**[camera.ui Cloud](/remote/cloud)** — remote access without touching your network.
