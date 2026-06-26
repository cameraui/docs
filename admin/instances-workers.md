---
title: Instances & workers
---

# Instances & workers

Two admin features help when you run more than one machine: **instances** for managing several servers, and **workers** for sharing the load of one.

## Instances

![The instances list](/img/admin/instances.png)

An **instance** is another camera.ui server saved here, so you can switch to it without logging in again. Manage them in **Instances** (in the menu).

- **Add an instance** with a name, its URL, and a username and password for it.
- Each instance card shows its status: version, uptime, cameras, whether it's online and recording, and resource use.

When you have more than one, an **instance switcher** appears in the top bar. Pick a server to jump to it, or return to "This server".

::: warning
Switching to an instance over plain HTTP passes your session in the address, so camera.ui warns you first. Use HTTPS where you can.
:::

## Workers

A **worker** is a second machine that takes on some of a server's processing, such as decoding and detection for busy cameras. Manage them in **Workers** (in the menu).

To connect one, copy the server's **auth token** into the worker machine's agent. Once it connects, it appears in the **Workers** list with its live CPU and memory. Then, under **Camera assignments**, you choose which camera each worker handles; cameras left as **Local** stay on the main server.

Regenerating the auth token disconnects existing workers until they're reconfigured.
