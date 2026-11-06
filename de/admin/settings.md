---
title: Einstellungen-Überblick
---

# Einstellungen-Überblick

Die meiste Konfiguration liegt unter **Einstellungen** im Menü. Manche Einstellungen sind persönlich für dein Konto, andere serverweit und brauchen einen Admin.

## Persönliche Einstellungen

Für jeden verfügbar, der angemeldet ist:

- **Konto.** Dein Profil, Passwort, Zwei-Faktor-Authentifizierung und aktive Sitzungen. Siehe [Sicherheit](/de/admin/security).
- **Erscheinungsbild.** Thema, Sprache und Oberflächen-Optionen, inklusive ob die Settings-Seiten eine eigene Gruppe in der Seitenleiste bilden und welche Gruppen sich einklappen lassen.
- **Benachrichtigungen.** Wie und wann dieses Gerät dich alarmiert. Siehe [Benachrichtigungen](/de/notifications/).

## Administrator-Einstellungen

Für Admins verfügbar:

- **Benutzer.** Konten, Rollen und aktive Sitzungen. Siehe [Benutzer](/de/admin/users).
- **Aufnahmen.** Aufnahme- und Speicher-Optionen. Siehe [Aufnahmen](/de/recording/).
- **Remote Zugriff.** Den Server von außen erreichen, die Adressen, über die Apps ihn im eigenen Netzwerk erreichen, sowie Reverse-Proxy und Anmeldung über Proxy. Siehe [Remote-Zugriff](/de/remote/).
- **Streaming.** RTSP, ONVIF-Export, WebRTC und die übrigen Streaming-Ports. Siehe [Streaming](/de/admin/streaming).
- **MQTT.** Verbinde camera.ui mit einem MQTT-Broker. Siehe [MQTT](/de/admin/mqtt).
- **Assistent.** Modelle, Verhalten und Werkzeuge des Assistenten. Siehe [Assistent einrichten](/de/admin/assistant-setup).
- **Backup.** Dein Setup sichern und wiederherstellen, sowie wiederkehrende Backups planen. Siehe [Backup](/de/admin/backup).
- **System.** Version, Updates, Ports, Protokollierung und Server-Aktionen. Siehe [System](/de/admin/system).

## Admin-Werkzeuge

Das Menü hat weitere Admin-Werkzeuge:

- **Metrics** dazu, wie es dem Server und jeder Kamera geht, in drei Tabs: **Übersicht** mit den System- und Prozess-Tabellen, **Kameras** mit dem, was Erkennung pro Kamera kostet, und **Speicher** mit der Aufschlüsselung der Platte. Siehe [Was Erkennung kostet](/de/detection/ai-backends#was-erkennung-kostet).
- **[Updates](/de/install/updating#die-updates-seite)** für Server, Plugins und Worker in einer Liste.
- **[Automationen](/de/automations/)** zum Verbinden von Ereignissen mit Aktionen.
- **[Logs](/de/admin/logs)** und ein **Terminal** zur Fehlersuche.
- **[Instanzen](/de/admin/instances)** zum Wechseln zwischen mehreren Servern und **[Worker](/de/admin/workers)** zum Verteilen der Last dieses einen.
