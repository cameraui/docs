---
title: Sicherheit & 2FA
---

# Sicherheit & 2FA

Jedes Konto hat eigene Sicherheits-Einstellungen unter **Einstellungen → Konto**. Sie gelten für deinen eigenen Login, also kann jeder Benutzer sie einrichten.

## Zwei-Faktor-Authentifizierung

<Shot src="/img/admin/2fa-setup.png" alt="Einrichtung der Zwei-Faktor-Authentifizierung" />

Die Zwei-Faktor-Authentifizierung (2FA) ergänzt dein Passwort um einen Code aus einer Authenticator-App, etwa Google Authenticator oder Authy.

**2FA einrichten** zeigt einen QR-Code für deine App (oder einen Code zum Abtippen); bestätige mit dem 6-stelligen Code. Die danach angezeigten **Backup-Codes** sind dein Weg zurück, falls du dein Handy verlierst.

Einmal aktiviert, kannst du **Backup-Codes neu generieren** oder **2FA deaktivieren**, beides verlangt einen aktuellen Code.

### Remote-Instanzen

Ist am Konto einer entfernten [Instanz](/de/admin/instances) 2FA aktiviert, fragt camera.ui nach dem 6-stelligen Code, wenn du diese Instanz hinzufügst, ihre Zugangsdaten änderst oder zu ihr wechselst. Hier funktioniert nur der Code aus deiner Authenticator-App, Backup-Codes werden nicht akzeptiert.

Brichst du beim Hinzufügen oder Bearbeiten ab, wird die Instanz trotzdem gespeichert, ihre Karte zeigt dann **Zwei-Faktor-Bestätigung ausstehend**. Wähle **Code eingeben** im Menü der Karte, um es abzuschließen. Ein Abbruch beim Wechseln stoppt nur den Wechsel.

## Biometrische Anmeldung (Mobile App)

Auf einem Telefon oder Tablet mit Face ID oder Touch ID bietet die App beim ersten erfolgreichen Anmelden an, deine Zugangsdaten im sicheren Speicher des Geräts zu speichern. Wählst du **Nicht jetzt**, fragt die App für diesen Server nicht noch einmal.

Einmal aktiviert, bietet der Login-Bildschirm **Mit Face ID anmelden** an. Der Schalter **Face ID / Touch ID verwenden** unter **Einstellungen → Konto** schaltet die biometrische Anmeldung nur aus: Er entfernt die gespeicherten Zugangsdaten, und die App bietet beim nächsten Anmelden wieder an, sie zu speichern.

## Aktive Sitzungen

Die Liste **Aktive Sitzungen** zeigt jedes an deinem Konto angemeldete Gerät, das aktuelle markiert. Du kannst ein einzelnes Gerät **abmelden** oder alle anderen auf einmal.

## API-Tokens

Integrationen, die selbst mit camera.ui sprechen, etwa die [Home-Assistant-Integration](/de/home-assistant/integration) und die [Apple-TV-App](/de/install/tv), melden sich mit einem Token statt mit deinem Passwort an. Erstelle eines unter **Einstellungen → Account → API-Tokens** und kopiere es sofort, es wird nur einmal angezeigt.

Ein Token hat vollen Zugriff auf dein Konto, behandle es also wie ein Passwort. Die Liste zeigt, wann jedes zuletzt genutzt wurde, und **Widerrufen** macht eines sofort ungültig.

## Passwort

Ändere dein Passwort unter **Konto**. Das Ändern, auch deines Benutzernamens, meldet dich überall ab.
