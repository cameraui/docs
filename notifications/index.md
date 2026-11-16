---
title: Notifications
---

# Notifications

## Where alerts arrive

- **In the app.** Every alert lands in the bell and in the [notification list](#the-notification-list), on every device.
- **Desktop app.** While it's running, including in the tray, it shows native system notifications for the server it's connected to, except while its window is in front. No cloud or account needed.
- **Phone (push).** The [mobile app](/install/mobile) gets push even when it's closed, delivered end-to-end encrypted through camera.ui Cloud.[^license]

## The notification list

The bell shows the newest alerts, **Show all** opens the full list. What the bell lists and counts is set under **Bell** in your [notification settings](#your-notification-settings). Opening an alert marks it read, and a push without a target of its own opens the alert in the list.

The list keeps the last 100 alerts per camera, per plugin, per automation and for camera.ui itself. Alerts from the same camera a few minutes apart fold into one row. Search covers the texts, camera and source names, and the filter narrows the list to **Unread**, **Warnings and errors**, **Cameras**, **Plugins**, **System** or **Automations**. With **Cameras** or **Plugins**, a second button next to the filter narrows the list to one camera or plugin. A system notification or plugin you switch off in your [notification settings](#your-notification-settings) stays out of the list too.

- **Plugin warnings and errors.** When a plugin logs warnings or errors, admins get an entry per plugin or camera that collects them, with how often each message came and when. Once the plugin has been quiet for a while or has restarted, the next warning starts a new entry. **Open log** opens the log of that plugin or camera at the last message and highlights the warnings and errors of that second. If the log no longer reaches back that far, a note says where it starts.
- **Alerts in a loop.** A plugin or automation that sends far more alerts than usual is held back for a short while, and one entry says how many were held back.

Both kinds of entries stay in the list and never push.

## Getting push on your phone

Phone push needs all of these. If one is missing, alerts only land in the in-app bell:

1. **The native app.** Push only reaches the [mobile app](/install/mobile) from the App Store or Play Store. A browser or the web app (PWA) shows the in-app bell, but never push.
2. **camera.ui Cloud.** Push is delivered through [camera.ui Cloud](/remote/cloud), so the server needs it enabled and [paired](/remote/pairing) to your account. The app opens the server through that account, a server added with [Connect directly](/install/mobile#directly) gets no push. It also needs an active subscription.
3. **Turned on.** In the app, open **Settings → Notifications** and turn the master switch on. Once the app may send notifications, the phone signs up for push with the server by itself. If you removed the phone from the device list, tap **Sync this device** to get push again.

**Push repairs itself after a reinstall.** Reinstalling the app, clearing its data or a new phone resets the push token, and the app re-registers with the server in the background. If it can't (the phone's notification permission is off, say), a **Push notifications stopped working** note with a **Fix** button appears on any screen. **Re-sync** in **Settings → Notifications** does the same. The **This device** row only asks for a sync when the server really doesn't know this phone.

**Mute from the push.** Press and hold a camera push and pick **Mute this camera for 1 hour** or **Mute all cameras for 1 hour**. Both apply to this phone only, and alerts about camera.ui itself still come through.

## Push stays private

Alerts are end-to-end encrypted before they leave your server. camera.ui Cloud, Google and Apple only forward them and cannot read them. Your phone loads pictures and clips, also with **Video in Push**, straight from your own server, so the cloud never sees a frame.

## Your notification settings

<Shot src="/img/notifications/notification-settings.png" alt="Notification settings" />

**Settings → Notifications** belongs to your account and applies on every device you sign in on.[^device]

- **Master switch.** All notifications on or off. Off for a new account, and the other sections only appear once it's on.
- **This device.** On a phone, shows whether it gets push. **Sync this device** sets it up again after you removed it from the device list. In the desktop app, this switches native notifications on or off for that computer alone.
- **Live View on Events.** Desktop app only, its own card. See [Live view on the desktop](#live-view-on-the-desktop).
- **Quiet hours.** Silence non-critical alerts during a daily window. Critical alerts still come through, and the in-app list stays current.
- **Bell.** What the bell lists and counts: **Warnings and errors**, **Cameras**, **Plugins**, **System** and **Automations**, each with its own switch. Warnings and errors follow only their own switch, wherever they come from. What you switch off still reaches your devices and stays in the full list.
- **System notifications.** Alerts about camera.ui itself: server and app updates, plugin updates, an update that failed, a plugin crashing or recovering, a worker with cameras or plugins that is offline for two minutes and comes back, remote access that is down for ten minutes and comes back,[^remote] and a [scheduled backup](/admin/backup#scheduled-backups) that failed. Each one has its own switch.[^admin]
- **Plugin notifications.** Alerts that plugins send, such as a camera going offline or storage filling up. Each plugin has its own switch. Tapping a camera offline or online alert opens that camera's log, where the reason for the outage is usually shown. The NVR's storage, license and cloud sign-in alerts open **Settings → Recordings**.
- **Devices.** The phones and other targets your alerts go to. Rename one, switch **Active** off to pause it, or remove it to unregister it for good. Admins also see the devices of the other accounts and the targets of the whole installation, such as the notify targets of Home Assistant. Those follow the admins' settings.

Alerts arrive in the [instance language](/admin/system#instance-language), the same for every account.

## Live view on the desktop

In the desktop app, the **Live View on Events** card in **Settings → Notifications** opens a camera live in a small window in a screen corner when an alert for it arrives. The window shows over other apps, full-screen apps included, and does not take the focus. It does not open while the app's window is in front, and it closes once the camera has seen nothing for a few seconds.[^popup]

- **Position**, **Size** and **Display.** The corner, the window size, and whether the windows go on the main display or on the one the app window is on.
- **Windows.** How many cameras show side by side. Further cameras stack in the last window, their pictures sit in its lower corner, and a click on one switches to it. Closing a window brings up the next camera from the stack.
- **Sound.** Off by default. **Doorbell only** or **Every event** starts the window with sound, the speaker button in the window switches it.
- **Cameras.** Which cameras may open a window. Empty means all of them.
- **Show preview** opens the windows with your cameras, so you see where they go.

A window stays open while the mouse is over it, the pin keeps it open for good, a double-click opens the camera in the app. With several windows or a stack, **Close all** closes everything at once. The camera name fades after a few seconds and comes back on hover. The tray icon pauses the windows for one or eight hours. While the app runs, the computer also shows up in the **Play on another screen** list of the player on your other devices, and a camera sent there opens in such a window until you close it. Sending takes an admin account.

## What each camera alerts you about

Each camera has its own notification settings, in the camera's [settings](/cameras/settings) under **Notifications**:[^nvr]

- **Send notifications.** The camera's own switch. Off means this camera never pushes, while its events still land on the timeline and in the app. On by default.
- **Which objects alert you.** Set by the camera's [alert zones](/cameras/zones-and-masks#alert-zones), not here. Without an alert zone the camera alerts on everything it detects. Draw one to narrow it down by type and by area.
- **Cameras without object detection.** They push **Motion Detected** with a picture instead, once per event. Their [motion zones](/cameras/zones-and-masks#motion-zones) decide where motion counts, and the cooldown applies.
- **Which faces and plates alert you.** Also set by the [alert zones](/cameras/zones-and-masks#who-exactly-and-which-plate). A zone can name the people it pushes for, with entries for unknown faces and for anyone enrolled, and the same for plates. Nothing selected notifies for everyone.
- **Notify for sounds.** Which sounds, such as alarms or glass breaking.
- **Notify for sensors.** Which sensor triggers push, such as a doorbell, a contact, a lock or a smoke sensor. Switches, lights and power push when they turn on.
- **Notification speed.** How long to wait for a good picture. **Immediate** sends right away, with a picture only if one is ready. **Balanced** (the default) waits up to 2 seconds, **Best** up to 4. A recognized face always sends immediately, and the picture is updated quietly afterwards.
- **Cooldown (seconds).** A quiet period after an alert. 30 seconds by default, up to 600. Doorbell and alarms bypass it.
- **Video in push.** Attach a short clip of the moment to the push. On iPhone it plays right in the notification, on Android the expanded notification animates the clip frame by frame,[^androidframes] and the in-app alert opens with a player. Uses the lowest recorded quality. Off by default.

## Pushes with an AI description

With [AI descriptions](/detection/genai-descriptions) on, the alert carries what the AI saw instead of the bare "person detected".[^ai] This is **Moment Pushes** in the camera's settings, and the alert waits for the description. Doorbell rings and alarms still arrive immediately, and when the model does not answer in time the plain detection push goes out instead.

**Push Timing** decides how often a busy event reaches you:

- **Per Moment.** Each moment pushes as its description is ready. This is the default.
- **Per Event.** The descriptions collect and one push goes out after the scene has been quiet for a while. Tapping it opens the beginning of the event.

An alert that is already on your lock screen is updated quietly when something better arrives, a recognized name or a sharper picture, without buzzing again.

## Critical alerts

**Critical alerts**, like a doorbell ring or an alarm, are delivered immediately and ignore both the cooldown and quiet hours.

[^license]: Push notifications to the mobile apps require an active camera.ui subscription.
[^device]: The **This device** row and the **Live View on Events** card are the exception. They only affect the phone or computer you are on.
[^popup]: Only while the app runs. On Windows and Linux, closing the window quits the app unless [Close to tray](/install/desktop#the-tray-icon) is on.
[^admin]: Only admins see the system notifications section.
[^remote]: camera.ui checks its connection to the camera.ui Cloud and its own Cloudflare tunnel. A custom domain behind your own proxy is not checked.
[^nvr]: Sending the push is the NVR plugin's job, so a camera without one saves the settings and starts using them once a plugin is installed.
[^ai]: AI descriptions come from the NVR plugin. Turn them on in its settings.
[^androidframes]: Android notifications cannot play video, so the current app pulls frames from the clip and cycles them. Tapping still opens the recording.
