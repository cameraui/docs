---
title: Sicherheit & 2FA
---

# Sicherheit & 2FA

Jedes Konto hat eigene Sicherheits-Einstellungen unter **Einstellungen → Konto**. Sie gelten für deinen eigenen Login, also kann jeder Benutzer sie einrichten.

## Zwei-Faktor-Authentifizierung

<Shot src="/img/admin/2fa-setup.png" alt="Einrichtung der Zwei-Faktor-Authentifizierung" />

Die Zwei-Faktor-Authentifizierung (2FA) ergänzt dein Passwort um einen Code aus einer Authenticator-App, etwa Google Authenticator oder Authy.

Zum Einschalten wähle **2FA einrichten**, scanne den QR-Code mit deiner App (oder gib den Code von Hand ein) und gib dann den 6-stelligen Code zur Bestätigung ein. camera.ui zeigt anschließend eine Reihe **Backup-Codes**; bewahre sie sicher auf, denn sie sind dein Weg zurück, falls du dein Handy verlierst.

Einmal aktiviert, kannst du **Backup-Codes neu generieren** oder **2FA deaktivieren**, beides verlangt einen aktuellen Code.

### Remote-Instanzen

Ist am Konto einer entfernten [Instanz](/de/admin/instances) 2FA aktiviert, fragt camera.ui nach dem 6-stelligen Code, wenn du diese Instanz hinzufügst, ihre Zugangsdaten änderst oder zu ihr wechselst. Hier funktioniert nur der Code aus deiner Authenticator-App, Backup-Codes werden nicht akzeptiert. Bei einem falschen Code fragt die App einfach erneut.

Brichst du beim Hinzufügen oder Bearbeiten ab, wird die Instanz trotzdem gespeichert, ihre Karte zeigt dann **Zwei-Faktor-Bestätigung ausstehend**. Wähle **Code eingeben** auf der Karte, um es abzuschließen. Ein Abbruch beim Wechseln stoppt nur den Wechsel.

## Biometrische Anmeldung (Mobile App)

Auf einem Telefon oder Tablet mit Face ID oder Touch ID bietet die App beim ersten erfolgreichen Anmelden an, deine Zugangsdaten im sicheren Speicher des Geräts zu speichern. Wähle **Aktivieren**, um sie einzuschalten. Wählst du **Nicht jetzt**, fragt die App für diesen Server nicht noch einmal.

Einmal aktiviert, erscheint auf dem Login-Bildschirm die Schaltfläche **Mit Face ID anmelden**, sodass du auf diesem Gerät dein Passwort nicht mehr eingeben musst. Der Schalter **Face ID / Touch ID verwenden** unter **Einstellungen → Konto** schaltet die biometrische Anmeldung nur aus: Er entfernt die gespeicherten Zugangsdaten, und die App bietet beim nächsten Anmelden wieder an, sie zu speichern.

## Aktive Sitzungen

Die Liste **Aktive Sitzungen** zeigt jedes an deinem Konto angemeldete Gerät, das aktuelle markiert. Du kannst ein einzelnes Gerät **abmelden** oder alle anderen auf einmal, praktisch, wenn du dich irgendwo angemeldet hast, dem du nicht mehr traust.

## Passwort

Ändere dein Passwort unter **Konto**. Das Ändern, auch deines Benutzernamens, meldet dich überall ab, sodass du dich mit den neuen Daten neu anmeldest.
