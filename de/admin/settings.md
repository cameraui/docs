---
title: Einstellungen-Überblick
---

# Einstellungen-Überblick

Das meiste, wie camera.ui konfiguriert wird, liegt unter **Einstellungen**, erreichbar über das Menü. Manche Einstellungen sind persönlich für dein Konto, andere serverweit und brauchen einen Admin.

## Persönliche Einstellungen

Für jeden verfügbar, der angemeldet ist:

- **Konto.** Dein Profil, Passwort, Zwei-Faktor-Authentifizierung und aktive Sitzungen. Siehe [Sicherheit](/de/admin/security).
- **Erscheinungsbild.** Thema, Sprache und Oberflächen-Optionen, inklusive ob die Settings-Seiten eine eigene Gruppe in der Seitenleiste bilden und welche Gruppen sich einklappen lassen.
- **Benachrichtigungen.** Wie und wann dieses Gerät dich alarmiert. Siehe [Benachrichtigungen](/de/notifications/).

## Administrator-Einstellungen

Für Admins verfügbar:

- **Benutzer.** Konten, Rollen und aktive Sitzungen. Siehe [Benutzer](/de/admin/users).
- **Aufnahmen.** Aufnahme- und Speicher-Optionen. Siehe [Aufnahmen](/de/recording/).
- **Remote Zugriff.** Den Server von außen erreichen, dazu die Adressen, über die Apps ihn im eigenen Netzwerk erreichen. Siehe [Remote-Zugriff](/de/remote/).
- **MQTT.** Verbinde camera.ui mit einem MQTT-Broker.
- **Backup.** Dein Setup sichern und wiederherstellen, sowie wiederkehrende Backups planen. Siehe [Backup](/de/admin/backup).
- **System.** Version, Updates und Server-Aktionen. Siehe [System](/de/admin/system).

## Admin-Werkzeuge

Über die Einstellungen hinaus hat das Menü weitere Admin-Werkzeuge:

- **Metrics** dazu, wie es dem Server und jeder Kamera geht, in drei Tabs, zwischen denen du am Handy auch wischen kannst: **Übersicht** mit den System- und Prozess-Tabellen, **Kameras** mit dem, was Erkennung pro Kamera kostet, und **Speicher** mit der Aufschlüsselung der Platte. Siehe [Was Erkennung kostet](/de/detection/ai-backends#was-erkennung-kostet).
- **[Updates](/de/install/updating#die-updates-seite)** für Server, Plugins und Worker in einer Liste.
- **[Automationen](/de/automations/)** zum Verbinden von Ereignissen mit Aktionen.
- **[Logs](/de/admin/logs)** und ein **Terminal** zur Fehlersuche.
- **[Instanzen](/de/admin/instances)** zum Wechseln zwischen mehreren Servern und **[Worker](/de/admin/workers)** zum Verteilen der Last dieses einen.
- Ein roher **Konfigurations**-Editor für fortgeschrittene Änderungen.
