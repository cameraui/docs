---
title: Notifications
---

# Notifications

camera.ui alerts you when something happens at a camera, with a thumbnail and a link to open the moment.

## Where alerts arrive

- **In the app.** Every alert appears in the in-app list (the bell), on any device, always up to date.
- **Desktop app.** While it's running, including in the tray, it shows native system notifications for the server it's connected to. No cloud or account is needed.
- **Phone (push).** The [mobile apps](/install/mobile) receive push notifications through camera.ui Cloud, so they reach you even when the app is closed.[^license]

## Per-device settings

![Notification settings](/img/notifications/notification-settings.png)

Open **Settings → Notifications** on a device to control its alerts:

- **Master switch.** Turn every notification on or off.
- **Quiet hours.** Silence non-critical alerts during a daily window. Critical alerts still come through, and the in-app list stays current.
- **System notifications.** Alerts about camera.ui itself, such as a camera going offline or storage filling up.
- **Plugin notifications.** Alerts that plugins send.

## What each camera alerts you about

Each camera has its own notification settings, so you only get pinged for what matters there:

- **Objects.** Which to notify on (people and vehicles by default).
- **Known faces only.** For people, only alert on a recognised [face](/detection/faces).
- **Audio.** Which sounds, such as alarms or glass breaking.
- **Sensors.** A doorbell, a contact sensor, a siren, or a security system.
- **Cooldown.** A quiet period after an alert, so one busy scene doesn't flood you.
- **Fast notifications.** Send the alert the instant something is detected, before the image is ready.

## Critical alerts

Some events are too important to hold back. **Critical alerts**, like a doorbell ring or an alarm, are delivered immediately and ignore both the cooldown and quiet hours.

[^license]: Push notifications to the mobile apps require an active camera.ui subscription.
