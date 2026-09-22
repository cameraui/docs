---
title: Benutzer & Rollen
---

# Benutzer & Rollen

Jedes Konto hat eine Rolle, die bestimmt, was es darf. Verwaltet werden die Konten unter **Einstellungen → Benutzer** (nur Admins).

## Rollen

- **Benutzer.** Alltäglicher Zugriff: die Kameraliste, Live-Ansicht, Aufnahmen, Kameransicht und die eigenen Konto-Einstellungen. Die **Kameras**-Seite öffnet als schlichte Liste zum Antippen jeder Kamera; Entdeckung, Hinzufügen und Kamera-Einstellungen bleiben bei Admins.
- **Admin.** Alles, was ein Benutzer kann, plus Verwalten von Kameras, Plugins, Automatisierungen, Benutzern und allen Server-Einstellungen.
- **Master.** Das Hauptkonto. Wie ein Admin, plus es kann den Server zurücksetzen. Es kann nicht gelöscht werden, und seine Rolle lässt sich nicht ändern, auch nicht von ihm selbst. Nur der Master kann seinen eigenen Benutzernamen, sein Passwort und seinen Avatar bearbeiten; andere Admins bekommen dabei einen Fehler.

Der Zugriff wird über die Rolle bestimmt, nicht pro Kamera; es gibt keine kamerabezogenen Berechtigungen.

## Benutzer verwalten

<Shot src="/img/admin/users.png" alt="Die Liste registrierter Benutzer" />

In der Liste **Registrierte Benutzer** legst du Konten an, bearbeitest und entfernst sie. Ein neues Konto bekommt die Rolle Benutzer oder Admin.

## Derzeit angemeldete Benutzer

Unter den registrierten Benutzern zeigt die Liste **Derzeit angemeldete Benutzer** jede aktive Sitzung über alle Konten hinweg, mit Gerät, Adresse und Typ. **Abmelden** in einer Zeile beendet diese Sitzung.

## Das erste Konto

camera.ui startet mit einem einzigen Master-Konto (Benutzername `admin`, Passwort `admin`). Beim ersten Login wirst du aufgefordert, das Passwort zu ändern.
