---
title: System & network
---

# System & network

The **Settings → System** page (admins only) handles the server's version, the ports it listens on, logging and a few power actions.

## Version and updates

It shows the **server** version, and the **app** version in the desktop and mobile apps. Installing updates happens on the [Updates page](/install/updating#the-updates-page); what stays here is **Manage**, which lists every published version to install a specific one, and **Beta updates**, the toggle at the top of the page that decides whether pre-releases are offered at all. When an installed version needs a restart to take effect, the version line shows both and offers **Restart**. See [Updating](/install/updating) for how updates work across platforms.

## Server

- **HTTPS port.** The port for the web interface and the apps, 3443 by default.[^desktop]
- **HTTP port.** An extra port without encryption, for a [reverse proxy](/remote/reverse-proxy#plain-http-instead) on the same machine. Empty opens none.
- **Address.** Where camera.ui listens: **All addresses**, **Only this computer**, or one address of the machine.
- **Local discovery.** Apps and Home Assistant in your network find the server on their own.

A new HTTPS port or address restarts camera.ui, the page asks first. A page opened straight on the HTTPS port moves to the new address once the server answers there. The HTTP port and local discovery apply without a restart. In Docker, `CAMERA_UI_PORT` and `CAMERA_UI_INSECURE_PORT` set the ports instead, the fields then name the variable and stay locked.

## Logging

How much camera.ui and the streaming engine write to the [log](/admin/logs), from **Fatal errors** to **Trace**. Debug and Trace are for tracking down a problem. The camera.ui level applies at once, plugins pick it up at their next start. A new level for the streaming engine restarts it.

## Advanced

**Edit camera.ui.yaml** opens the server's configuration file for what the pages don't cover. Saving restarts camera.ui.

## Server actions

- **Restart server.** Restarts camera.ui.
- **Reset server.** Wipes the configuration back to defaults, removing all settings and data. It can't be undone and is limited to the master account.

## Certificates

**Certificate** downloads the server's own certificate, for adding it to a device's trust store. **Own certificate** takes a certificate you obtained for your domain and serves it for the names it covers. See [Certificate](/remote/certificate).

::: tip
Looking for the server name or network addresses? Those are under [Remote access](/remote/). Theme and language are under **Appearance**.
:::

[^desktop]: The desktop app uses 3543.
