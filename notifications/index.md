---
title: Notifications
---

# Notifications

camera.ui alerts you when something happens at a camera, with a thumbnail and a link to open the moment.

## Where alerts arrive

- **In the app.** Every alert appears in the in-app list (the bell), on any device, always up to date.
- **Desktop app.** While it's running, including in the tray, it shows native system notifications for the server it's connected to. It stays quiet while the window is in front, since the bell already shows the alert. No cloud or account is needed.
- **Phone (push).** The [mobile apps](/install/mobile) receive push notifications through camera.ui Cloud, so they reach you even when the app is closed. Turn notifications on in **Settings → Notifications** on the phone, then tap **Sync this device** once. Do that on every phone, for every server you connect to.[^license]

## Your notification settings

<Shot src="/img/notifications/notification-settings.png" alt="Notification settings" />

Open **Settings → Notifications** to control your alerts. These settings belong to your account, so they apply on every device you sign in on.[^device]

- **Master switch.** Turn every notification on or off. It's off for a new account, so turn it on first. The other sections only appear once it's on.
- **This device.** On a phone, tap **Sync this device** once to start receiving push. In the desktop app, this switches native notifications on or off for that computer alone.
- **Quiet hours.** Silence non-critical alerts during a daily window. Critical alerts still come through, and the in-app list stays current.
- **System notifications.** Alerts about camera.ui itself: server and app updates, plugin updates, and a plugin crashing or recovering. Each one has its own switch.[^admin]
- **Plugin notifications.** Alerts that plugins send, such as a camera going offline or storage filling up. You can switch each plugin on or off.
- **Devices.** The phones and other targets your alerts go to. Rename one, switch **Active** off to pause it, or remove it to unregister it for good.

## What each camera alerts you about

Each camera has its own notification settings, so you only get pinged for what matters there:[^nvr]

- **Notify for Objects.** Which to notify on (people and vehicles by default).
- **Known Faces Only.** For people, only alert on a recognised [face](/detection/faces).
- **Notify for Audio.** Which sounds, such as alarms or glass breaking.
- **Notify for Sensors.** A doorbell, a contact sensor, a siren, or a security system.
- **Cooldown (Seconds).** A quiet period after an alert, so one busy scene doesn't flood you.
- **Fast Notifications.** Send the alert the instant something is detected, before the image is ready.

## Critical alerts

Some events are too important to hold back. **Critical alerts**, like a doorbell ring or an alarm, are delivered immediately and ignore both the cooldown and quiet hours.

[^license]: Push notifications to the mobile apps require an active camera.ui subscription.
[^device]: The **This device** row is the exception. It only affects the phone or computer you are on.
[^admin]: Only admins see the system notifications section.
[^nvr]: These per-camera controls come from the NVR plugin, the same plugin that handles recording.
