---
title: Notifications
---

# Notifications

camera.ui alerts you when something happens at a camera, with a thumbnail and a link to open the moment.

## Where alerts arrive

- **In the app.** Every alert appears in the in-app list (the bell), on any device, always up to date.
- **Desktop app.** While it's running, including in the tray, it shows native system notifications for the server it's connected to. It stays quiet while the window is in front, since the bell already shows the alert. No cloud or account is needed.
- **Phone (push).** The [mobile app](/install/mobile) gets push even when it's closed, delivered end-to-end encrypted through camera.ui Cloud.[^license]

## Getting push on your phone

Phone push needs a few things in place. If any is missing, alerts still land in the in-app bell, but the phone stays quiet:

1. **The native app.** Push only reaches the [mobile app](/install/mobile) from the App Store or Play Store. A browser or the web app (PWA) shows the in-app bell, but never push.
2. **camera.ui Cloud.** Push is delivered through [camera.ui Cloud](/remote/cloud), so the server needs it enabled and [paired](/remote/pairing) to your account. It also needs an active subscription.
3. **On, and synced.** In the app, open **Settings → Notifications**, turn the master switch on, and tap **Sync this device** once. Repeat on every phone, for every server you connect to.

**Push repairs itself after a reinstall.** Reinstalling the app, clearing its data, or switching to a new phone resets the push token. The app checks with the server on its own and re-registers in the background. If it can't, for example because the phone's notification permission is off, a note saying **Push notifications stopped working** appears on any screen with a **Fix** button. One tap sets the phone up again. You can also open **Settings → Notifications** and tap **Re-sync**. The **This device** row only asks for a sync when the server really doesn't know this phone.

## Push stays private

Your server seals every alert before it leaves your network. camera.ui Cloud, Google and Apple only pass the sealed envelope along; the camera name, the alert text and the link inside are unreadable to all three.[^e2ee] The thumbnail takes no detour at all: your phone loads it straight from your server. When **Video in Push** is on, the clip is delivered the same way: it stays inside the sealed push and streams from your own server, so the cloud never sees a frame.

## Your notification settings

<Shot src="/img/notifications/notification-settings.png" alt="Notification settings" />

Open **Settings → Notifications** to control your alerts. These settings belong to your account, so they apply on every device you sign in on.[^device]

- **Master switch.** Turn every notification on or off. It's off for a new account, so turn it on first. The other sections only appear once it's on.
- **This device.** On a phone, tap **Sync this device** once to start receiving push. In the desktop app, this switches native notifications on or off for that computer alone.
- **Quiet hours.** Silence non-critical alerts during a daily window. Critical alerts still come through, and the in-app list stays current.
- **System notifications.** Alerts about camera.ui itself: server and app updates, plugin updates, and a plugin crashing or recovering. Each one has its own switch.[^admin]
- **Plugin notifications.** Alerts that plugins send, such as a camera going offline or storage filling up. You can switch each plugin on or off. Tapping a camera offline or online alert opens that camera's log, where the reason for the outage is usually shown.
- **Devices.** The phones and other targets your alerts go to. Rename one, switch **Active** off to pause it, or remove it to unregister it for good.

## What each camera alerts you about

Each camera has its own notification settings, in the camera's [settings](/cameras/settings) under **Notifications**, so you only get pinged for what matters there:[^nvr]

- **Send notifications.** The camera's own switch. Off means this camera never pushes, while its events still land on the timeline and in the app. On by default.
- **Which objects alert you.** Set by the camera's [alert zones](/cameras/zones-and-masks#alert-zones), not here. Without an alert zone the camera alerts on everything it detects. Draw one to narrow it down by type and by area.
- **Which faces and plates alert you.** Also set by the [alert zones](/cameras/zones-and-masks#who-exactly-and-which-plate). A zone can name the people it pushes for, with entries for unknown faces and for anyone enrolled, and the same for plates. Nothing selected notifies for everyone.
- **Notify for sounds.** Which sounds, such as alarms or glass breaking.
- **Notify for sensors.** A doorbell, a contact sensor, a siren, or a security system.
- **Notification speed.** How long to wait for a good picture. **Immediate** sends right away, with a picture only if one is ready. **Balanced** (the default) waits up to 2 seconds, **Best** up to 4. A recognized face always sends immediately, and the picture is updated quietly afterwards.
- **Cooldown (seconds).** A quiet period after an alert, so one busy scene doesn't flood you. 30 seconds by default, up to 600. Doorbell and alarms bypass it.
- **Video in push.** Attach a short clip of the moment to the push. On iPhone it plays right in the notification, on Android the expanded notification animates the clip frame by frame,[^androidframes] and the in-app alert opens with a player. Uses the lowest recorded quality. Off by default.

## AI descriptions arrive as one summary

With AI descriptions on, an event's texts collect and come through as a single summary, sent once the scene stays calm for a bit or the event ends.[^ai] You get the story of the whole visit instead of a buzz for every moment.

- **The first alert stays fast.** A person still pings you right away, and the name follows the moment a known face is recognized.
- **One alert, updated quietly.** Later moments refresh that same alert without buzzing again.
- **Tapping opens the start.** The summary takes you to the beginning of the event, not the last moment.

## Critical alerts

Some events are too important to hold back. **Critical alerts**, like a doorbell ring or an alarm, are delivered immediately and ignore both the cooldown and quiet hours.

[^license]: Push notifications to the mobile apps require an active camera.ui subscription.
[^e2ee]: End-to-end encryption needs a current mobile app and NVR plugin. Older versions keep receiving push, but without the encryption.
[^device]: The **This device** row is the exception. It only affects the phone or computer you are on.
[^admin]: Only admins see the system notifications section.
[^nvr]: Sending the push is the NVR plugin's job, so a camera without one saves the settings and starts using them once a plugin is installed. Needs camera-ui-nvr 1.3.16.
[^ai]: AI descriptions come from the NVR plugin. Turn them on in its settings.
[^androidframes]: Android notifications cannot play video, so the current app pulls frames from the clip and cycles them. Tapping still opens the recording.
