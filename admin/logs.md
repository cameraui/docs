---
title: Logs & console
---

# Logs & console

When something isn't working, the **Logs** view (in the menu, admins only) shows what the server is doing.

<Shot src="/img/admin/logs.png" alt="The Logs view" />

## Reading the logs

Logs stream live. You can:

- Filter by source: **All**, a system component (**Server**, **go2rtc**, **nats**, **tunnel**), a specific **camera**, or a specific **plugin**.
- **Search** the visible lines.
- **Download** the log to share when asking for help, **copy all** of it to the clipboard, or **delete** it.
- Zoom the text in and out.

## Console

The **Console** (in the menu, available to every user) shows the log of the app itself, not the server. Use it when the app misbehaves: a view stays empty, a stream won't play, a button does nothing.

It only collects entries while **Record logs** is on, and tells you when it isn't. Turn it on in **Settings → Appearance**. The same section has **Verbose logging**, which adds debug-level entries.

In the Console you can:

- Filter by level with the **Levels** menu: Debug, Log, Info, Warning, Error.
- **Search** the visible lines.
- **Copy** the output, **Export / share** it as a text file, or **Clear** it.

For problems with the app, the Console export is the useful thing to attach. For problems with the server, the Logs download.

## Terminal

There's also a **Terminal** in the menu, an interactive shell on the server for advanced troubleshooting. It's available on server installations, not in the desktop app.
