---
title: Instances
---

# Instances

<Shot src="/img/admin/instances.png" alt="The instances list" />

An **instance** is another camera.ui server saved here, so you can switch to it without logging in again. Manage them in **Instances** (in the menu). Instances are separate, full servers; to make a second machine share the load of *this* server instead, see [Workers](/admin/workers).

- **Add an instance** with a name, its URL, and a username and password for it.
- **Two-factor accounts.** If the account on that server uses two-factor authentication, camera.ui asks for the 6-digit code from your authenticator app when you add the instance or switch to it.[^backupcodes] Until you enter it, the card shows a **2FA** tag and **Two-factor confirmation pending**. Use **Enter code** in the card's menu to finish.
- Each instance card shows its status: version, uptime, cameras, whether it's online and recording, and resource use.

[^backupcodes]: The prompt takes the 6-digit code from the app only, not a backup code.

When you have more than one, an **instance switcher** appears in the top bar. Pick a server to jump to it, or return to "This Server".

::: warning
Switching to an instance over plain HTTP passes your session in the address, so camera.ui warns you first. Use HTTPS where you can.
:::
