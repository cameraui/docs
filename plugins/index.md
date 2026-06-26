---
title: Plugins
---

# Plugins

Plugins extend camera.ui. Most of what it does beyond live view comes from plugins you install: the [AI backends and motion engines](/detection/) that power detection, audio detection, smart-home bridges like [HomeKit](/plugins/homekit), and integrations for various camera brands. Managing plugins is an admin task.

## Two things, kept separate

- **Installing a plugin** adds it to your server, once. That's what this section covers.
- **Assigning a plugin** to a camera decides which camera uses it, for example which motion engine a camera runs. That's done per camera, in [Set up sensors](/sensors/setup).

## Managing plugins

![The Plugins page](/img/plugins/plugins-list.png)

Open **Plugins** from the menu to see everything installed, each as a card with a live status (ready, started, stopped, error). From a card you can:

- **Enable or disable** it, and **start, stop, or restart** its process.
- **Update** it when a new version is available, or pick a **specific version**.
- **Open its settings**, or view its **logs** if something's wrong.
- **Uninstall** it, optionally removing its stored data.

Plugins run as their own process, so one misbehaving plugin won't take down the rest. They can be written in Node, Python, or Go; a small badge on each card shows which.

## Installing a plugin

Choose **Search plugins** to find ones to install. camera.ui looks up published plugins (any package on npm tagged as a camera.ui plugin), so the catalog isn't a fixed list. Pick one and install it, choosing the version if you like. Once installed, enable it and assign it where it's needed.

## Settings

A plugin's own settings live on its page, under **Settings**, and apply server-wide. Settings that affect a single camera are edited in that [camera's settings](/cameras/settings) instead. Recording-plugin settings are kept with the rest of [recording](/recording/).

## Setup guides

- **[HomeKit](/plugins/homekit)** — add your cameras to Apple Home.
