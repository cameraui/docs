---
title: Sign-in through a proxy
---

# Sign-in through a proxy

Behind Authelia, Authentik, oauth2-proxy or another login proxy, camera.ui can take over the user the proxy signed in and skip its own login form. The proxy names the user in a header, and camera.ui signs in the account with exactly that username, capitals included. It creates no accounts: everyone the proxy lets through needs an account in **Settings → [Users](/admin/users)**.

## Setup

Add a `proxyAuth` block to `camera.ui.yaml` in your storage directory and restart the server:

```yaml
proxyAuth:
  port: 8082
  trust:
    - 10.0.0.5
```

camera.ui opens a separate plain HTTP port for the proxy, bound to the same address as the main port. Point the proxy at `http://10.0.0.27:8082` instead of the main port, with WebSockets and long timeouts as on [Reverse proxy](/remote/reverse-proxy). Only this port reads the header. Sent to the main port, the plain HTTP port or through camera.ui Cloud, it does nothing.

| Field | Environment variable | Meaning |
|---|---|---|
| `port` | `CAMERA_UI_PROXY_AUTH_PORT` | Port the proxy connects to. |
| `header` | `CAMERA_UI_PROXY_AUTH_HEADER` | Header with the username, `Remote-User` by default. |
| `trust` | `CAMERA_UI_PROXY_AUTH_TRUST` | Addresses of the proxy, as IP addresses or ranges like `10.0.0.0/24`. In the variable, separated by commas. |
| `secret` | `CAMERA_UI_PROXY_AUTH_SECRET` | At least 16 characters the proxy sends as `X-Proxy-Secret` on every request. |
| `logoutUrl` | `CAMERA_UI_PROXY_AUTH_LOGOUT_URL` | Logout page of the proxy, see [Signing out](#signing-out). |

A variable takes precedence over the file. The port needs `trust`, `secret` or both, and with both set a request has to pass both. A setting camera.ui can't use keeps the port closed, and the log says why.

## Which header

| Proxy | Header | Logout page |
|---|---|---|
| Authelia | `Remote-User` | `https://auth.example.com/logout` |
| Authentik | `X-authentik-username` | `https://nvr.example.com/outpost.goauthentik.io/sign_out` |
| oauth2-proxy | `X-Forwarded-Preferred-Username` | `https://nvr.example.com/oauth2/sign_out` |

With forward auth, the web server has to copy the header from the auth response onto the request: `copy_headers` in Caddy, `authResponseHeaders` in Traefik, `auth_request_set` plus `proxy_set_header` in nginx.

## Who may sign in

Whoever connects from a trusted address, or with the secret, can sign in as any user, master included. camera.ui's password and two-factor authentication don't apply on this port, the proxy's login does. So trust only the proxy:

- **Docker.** camera.ui sees the proxy's address on the shared Docker network. Give the proxy a fixed address there (`ipv4_address` in Compose) or use the secret instead of `trust`. The log names every address it turned away.
- **Same machine.** A proxy next to a bare-metal install connects over `127.0.0.1`. Trusting that address lets every program on the machine sign in, plugins included, so set a secret as well.
- **Paths without a login.** The proxy has to replace the header on every request it passes on. If it lets a path through without asking for a login, it must not forward a header of that name sent by the browser. Put camera.ui behind the login as a whole, or have the proxy remove the header.

## In the app

The browser opens camera.ui signed in. All browsers of one user share one session, listed as **Reverse proxy** under **Logged in users**. A request without the header gets the normal login form.

If the proxy names a user camera.ui doesn't have, the browser shows an error instead of the app and the log names the username. Since camera.ui finds the account by its username, the account settings hide the username while you are signed in through the proxy. If an admin renames the account, change the name on the proxy side too.

## Signing out

Without `logoutUrl`, the menu has no **Logout**, since the proxy would sign you back in at once. With `logoutUrl`, **Logout** ends the camera.ui session and opens that page, which ends the session at the proxy.

## Next steps

**[Reverse proxy](/remote/reverse-proxy)** — WebSockets, timeouts and certificates for the proxy.
**[Users & roles](/admin/users)** — create the accounts the proxy signs in.
