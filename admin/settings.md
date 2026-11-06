---
title: Settings overview
---

# Settings overview

Most configuration lives under **Settings** in the menu. Some settings are personal to your account; others are server-wide and need an admin.

## Personal settings

Available to everyone signed in:

- **Account.** Your profile, password, two-factor authentication, and active sessions. See [Security](/admin/security).
- **Appearance.** Theme, language, and interface options, including whether the settings pages form their own sidebar group and which groups can collapse.
- **Notifications.** How and when this device alerts you. See [Notifications](/notifications/).

## Administrator settings

Available to admins:

- **Users.** Accounts, roles, and active sessions. See [Users](/admin/users).
- **Recordings.** Recording and storage options. See [Recording](/recording/).
- **Remote access.** Reaching the server from outside, the addresses apps use on your own network, and the reverse proxy and proxy sign-in settings. See [Remote access](/remote/).
- **Streaming.** RTSP, ONVIF export, WebRTC and the other streaming ports. See [Streaming](/admin/streaming).
- **MQTT.** Connect camera.ui to an MQTT broker. See [MQTT](/admin/mqtt).
- **Assistant.** Models, behavior and tools of the assistant. See [Assistant setup](/admin/assistant-setup).
- **Backup.** Back up and restore your setup, and schedule recurring backups. See [Backup](/admin/backup).
- **System.** Version, updates, ports, logging and server actions. See [System](/admin/system).

## Admin tools

The menu has more admin tools:

- **Metrics** for how the server and each camera are doing, in three tabs: **Overview** with the system and process tables, **Cameras** with what detection costs per camera, and **Storage** with the disk breakdown. See [What detection costs](/detection/ai-backends#what-detection-costs).
- **[Updates](/install/updating#the-updates-page)** for the server, the plugins and the workers in one list.
- **[Automations](/automations/)** for connecting events to actions.
- **[Logs](/admin/logs)** and a **terminal** for troubleshooting.
- **[Instances](/admin/instances)** for switching between several servers, and **[Workers](/admin/workers)** for sharing the load of this one.
