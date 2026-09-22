---
title: Logs & console
---

# Logs & console

The **Logs** view (in the menu, admins only) shows the server log.

<Shot src="/img/admin/logs.png" alt="The Logs view" />

## Reading the logs

Logs stream live. Filter by source (**All**, a system component such as **Server**, **go2rtc**, **nats**, **tunnel**, a **camera** or a **plugin**), **search** the visible lines, or **download**, **copy all** or **delete** the log.

## Console

The **Console** (in the menu, available to every user) shows the log of the app itself, not the server: the place to look when a view stays empty, a stream won't play or a button does nothing.

It only collects entries while **Record logs** is on, in **Settings → Appearance**. The same section has **Verbose logging**, which adds debug-level entries.

The **Levels** menu filters by Debug, Log, Info, Warning and Error. **Export / share** saves the output as a text file.

For problems with the app, the Console export is the useful thing to attach. For problems with the server, the Logs download.

## Terminal

There's also a **Terminal** in the menu, an interactive shell on the server for advanced troubleshooting. It's available on server installations, not in the desktop app.
