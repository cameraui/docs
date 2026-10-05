---
title: Benutzer & Rollen
---

# Benutzer & Rollen

Jedes Konto hat eine Rolle, die bestimmt, was es darf. Verwaltet werden die Konten unter **Einstellungen → Benutzer** (nur Admins).

## Rollen

- **Benutzer.** Alltäglicher Zugriff: die Kameraliste, Live-Ansicht, Aufnahmen, Kameransicht und die eigenen Konto-Einstellungen. Die **Kameras**-Seite öffnet als schlichte Liste zum Antippen jeder Kamera; Entdeckung, Hinzufügen und Kamera-Einstellungen bleiben bei Admins. Ein Benutzer-Konto sieht die Quell-Adressen einer Kamera nur als Protokoll, Host und Port, ohne Zugangsdaten, Pfade oder Tokens.
- **Admin.** Alles, was ein Benutzer kann, plus Verwalten von Kameras, Plugins, Automatisierungen, Benutzern und allen Server-Einstellungen.
- **Master.** Das Hauptkonto. Wie ein Admin, plus es kann den Server zurücksetzen. Es kann nicht gelöscht werden, und seine Rolle lässt sich nicht ändern, auch nicht von ihm selbst. Nur der Master kann seinen eigenen Benutzernamen, sein Passwort und seinen Avatar bearbeiten; andere Admins bekommen dabei einen Fehler.

Der Zugriff wird über die Rolle bestimmt, nicht pro Kamera; es gibt keine kamerabezogenen Berechtigungen.

## Benutzer verwalten

<Shot src="/img/admin/users.png" alt="Die Liste registrierter Benutzer" />

In der Liste **Registrierte Benutzer** legst du Konten an, bearbeitest und entfernst sie. Ein neues Konto bekommt die Rolle Benutzer oder Admin. Konten mit `ha-` am Anfang legt das [Home-Assistant-App](/de/home-assistant/app#das-camera-ui-app) an, eines pro Home-Assistant-Benutzer ohne Admin-Rechte, der sein Panel geöffnet hat. Ein Konto zu löschen oder ihm die Admin-Rechte zu nehmen, wirkt sofort, auch auf Geräten, auf denen es gerade angemeldet ist.

## Derzeit angemeldete Benutzer

Unter den registrierten Benutzern zeigt die Liste **Derzeit angemeldete Benutzer** jede aktive Sitzung über alle Konten hinweg, mit Gerät, Adresse und Typ. **Abmelden** in einer Zeile beendet diese Sitzung.

## Verbindungslimit

Jede Anmeldung, also ein Browser oder eine App, mit der du dich angemeldet hast, oder ein [API-Token](/de/admin/security#api-tokens), kann bis zu 64 Live-Streams und etwa 32 camera.ui-Tabs oder -Fenster gleichzeitig offen haben. Darüber lehnt der Server neue Verbindungen ab, bis andere geschlossen werden.

## Das erste Konto

camera.ui startet mit einem einzigen Master-Konto (Benutzername `admin`, Passwort `admin`). Beim ersten Login wirst du aufgefordert, das Passwort zu ändern.
