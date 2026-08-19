---
title: Plugins
---

# Plugins

Plugins extend camera.ui. Most of what it does beyond live view comes from plugins you install: the [AI backends and motion engines](/detection/) that power detection, audio detection, smart-home bridges like [HomeKit](/plugins/homekit), and integrations for various camera brands. Managing plugins is an admin task.

## Two things, kept separate

- **Installing a plugin** adds it to your server, once. That's what this section covers.
- **Assigning a plugin** to a camera decides which camera uses it, for example which motion engine a camera runs. That's done per camera, in [Set up sensors](/sensors/setup).

## Managing plugins

<Shot src="/img/plugins/plugins-list.png" alt="The Plugins page" />

Open **Plugins** from the menu to see everything installed, each as a card with a live status (ready, started, stopped, error). From a card you can:

- **Enable or disable** it, and **start, stop, or restart** its process.
- **Update** it when a new version is available: the card shows an update button that starts right away, no dialog. Click it again while it runs to see the live install output. For release notes or a **specific version**, use the card menu.
- **Open its settings**, or view its **logs** if something's wrong.
- **Uninstall** it, optionally removing its stored data.

Recordings are the exception: if you delete a recording plugin's stored data, its footage is kept.

When plugins are out of date, an **Update all** button in the toolbar updates every one and reports the result.

The gear button next to the search bar holds two settings, both off by default:

- **Beta versions.** Shows pre-release versions in the version picker and offers beta releases as updates.
- **Allow plugin build scripts.** Lets plugins run install scripts and native builds while installing or updating. Only turn this on for plugins you trust.

Switch between the cards and a compact **table view** with the button near the plus; the table lists each plugin with its status, version, and per-row actions, and your choice is remembered. Both views show the package name under the display name.

Installs, updates, and uninstalls run through a queue on the server, two at a time, so updating many at once won't overload a small box. Every open browser sees what's waiting and what's running, whoever started it.

Plugins run as their own process, so one misbehaving plugin won't take down the rest. They can be written in Node, Python, or Go; a small badge on each card shows which. A plugin built for a different plugin API won't start into cryptic errors: its card says whether the plugin or camera.ui needs an update, and you get a notification.

### Managing several at once

The select button starts a selection in either view. Pick the plugins you want, then update, enable, disable, or uninstall all of them in one step, with a short summary of what worked and what didn't.

## Installing a plugin

<Shot src="/img/plugins/plugin-store.png" alt="The plugin store" />

Choose **Search plugins** to open the store. The list comes from npm, so any package published as a camera.ui plugin can appear and it isn't a fixed catalog, but camera.ui curates what you see on top of it:

- **Trust.** Each plugin is marked **Official** (published by camera.ui), **Verified** (a community plugin the camera.ui team has reviewed), or **Community** (published by anyone, not reviewed). You can filter by trust level.
- **Safety.** Plugins known to be malicious or compromised are blocked: they don't show up, can't be installed, and one you already have is disabled automatically if it's later blocked.
- **Compatibility.** The store flags a plugin that needs a newer camera.ui, and installing a version that can't run on your server is refused with the reason.
- **Browsing.** Filter by category, start from the featured plugins, and sort by name, weekly downloads, or last update. Each entry shows its logo, a short description, and its download numbers.

Pick a plugin and install it, choosing a specific version if you like. Once installed, enable it and assign it where it's needed.

## Settings

A plugin's own settings live on its page, under **Settings**, and apply server-wide. Settings that affect a single camera are edited in that [camera's settings](/cameras/settings) instead. Recording-plugin settings are kept with the rest of [recording](/recording/).

## Setup guides

- **[HomeKit](/plugins/homekit)** — add your cameras to Apple Home.
- **[Home Assistant](/home-assistant/)** — cameras, sensors and detection events as Home Assistant entities.
- **Google Home and Alexa** — not available yet, both are on the roadmap.
