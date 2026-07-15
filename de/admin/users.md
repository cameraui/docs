---
title: Benutzer & Rollen
---

# Benutzer & Rollen

camera.ui unterstützt mehrere Benutzerkonten, jedes mit einer Rolle, die bestimmt, was es darf. Verwalte sie unter **Einstellungen → Benutzer** (nur Admins).

## Rollen

Es gibt drei Rollen:

- **Benutzer.** Alltäglicher Zugriff: Live-Ansicht, Aufnahmen, Kameransicht und die eigenen Konto-Einstellungen.
- **Admin.** Alles, was ein Benutzer kann, plus Verwalten von Kameras, Plugins, Automatisierungen, Benutzern und allen Server-Einstellungen.
- **Master.** Das Hauptkonto. Wie ein Admin, plus es kann den Server zurücksetzen. Es kann nicht gelöscht werden, und seine Rolle lässt sich nicht ändern, auch nicht von ihm selbst. Nur der Master kann seinen eigenen Benutzernamen, sein Passwort und seinen Avatar bearbeiten; andere Admins bekommen dabei einen Fehler.

Der Zugriff wird über die Rolle bestimmt, nicht pro Kamera; es gibt keine kamerabezogenen Berechtigungen.

## Benutzer verwalten

<Shot src="/img/admin/users.png" alt="Die Liste registrierter Benutzer" />

Unter **Einstellungen → Benutzer** zeigt die Liste **Registrierte Benutzer** alle an. Von dort kannst du:

- **Einen neuen Benutzer anlegen**, mit Benutzername, Passwort und Rolle (Benutzer oder Admin).
- Einen Benutzer **bearbeiten**, um Details oder Rolle zu ändern.
- Einen Benutzer **entfernen**.

## Das erste Konto

camera.ui startet mit einem einzigen Master-Konto (Benutzername `admin`, Passwort `admin`). Ändere dessen Passwort sofort; beim ersten Login wirst du dazu aufgefordert.
