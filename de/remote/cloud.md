---
title: camera.ui Cloud
---

# camera.ui Cloud

camera.ui Cloud lässt dich deinen Server von überall erreichen, ohne am Router etwas zu ändern. Dein Server registriert sich bei der Cloud, und du verbindest dich über dein camera.ui-Konto. Das ist kostenlos und getrennt vom Aufnahme-Abo.

## Dein Server bleibt deiner

camera.ui Cloud ist ein Weg, deinen eigenen Server zu erreichen, keine Kopie davon. Deine Kameras, Aufnahmen, Einstellungen und die Oberfläche bleiben alle auf deinem Server. Die einzige Aufgabe der Cloud ist es, deiner App und deinem Server beim Verbinden zu helfen, und deine Session läuft dann direkt zu deiner eigenen Instanz. Dein Video, deine Zugangsdaten und andere Daten gehen direkt zu deinem Server und sind für camera.ui niemals einsehbar.

Push-Benachrichtigungen sind das Einzige, das tatsächlich durch die Cloud läuft, und sie sind Ende-zu-Ende-verschlüsselt: dein Server versiegelt jeden Alarm, nur dein Handy kann ihn öffnen, und die Cloud reicht den Umschlag weiter, ohne etwas zu speichern. Siehe [Benachrichtigungen](/de/notifications/).

## Aktivieren

<Shot src="/img/remote/remote-settings.png" alt="Die Cloud-Karte unter Einstellungen, Remote" />

Öffne unter **Einstellungen → Remote Zugriff** die **Cloud**-Karte und schalte **Aktiviert** ein. Unter seinem **Namen** erscheint der Server in deinem Cloud-Dashboard.

Die **Status**-Zeile zeigt, ob der Server **Registriert** ist, und eine **Tunnel**-Anzeige zeigt die Live-Verbindung. Um einen Server zu verbinden, wähle **Server registrieren** und schließe die Kopplung ab. Zeigt der Status **Neu-Authentifizierung nötig**, hat der Server seine Cloud-Zugangsdaten verloren: wähle **Neu verbinden** und koppel erneut. Einen registrierten Server nimmst du mit **Server deregistrieren** wieder aus deinem Konto. Denselben Ablauf auf dem Handy beschreibt [Mobile Apps koppeln](/de/remote/pairing).

## Cloud hält die direkte Verbindung aktiv

Solange die Cloud aktiv ist, behält dein Server zusätzlich eine öffentliche Adresse für die Apps. Deshalb ist der Schalter **Aktiviert** in der Karte **Direkte Verbindung** fest eingeschaltet, und **Externe URL** zeigt die verwendete Adresse.

Wenn du keine direkte Adresse eingerichtet hast oder die konfigurierte nicht erreichbar ist, startet camera.ui stattdessen einen temporären Cloudflare-Tunnel. Für eine eigene Adresse richte sie unter [Direkte Verbindung](/de/remote/) ein.

Der Rückfall ist nicht dauerhaft. camera.ui prüft deine eigene Adresse weiter und geht zurück, sobald sie antwortet, eine eigene Domain jede Minute, einen Cloudflare-Tunnel etwa alle zehn Minuten. Ein Neustart ist nicht nötig. Solange der Rückfall aktiv ist, zeigt **Externe URL** die temporäre Adresse, und ein erneut fehlgeschlagener Cloudflare-Versuch vergibt eine neue.

## Das Cloud-Dashboard

Das Dashboard listet deine registrierten Server beim Namen, dort wählst du einen zum Verbinden. Im Browser liegt es unter [cloud.cameraui.com](https://cloud.cameraui.com/), in den mobilen Apps ist es die Cloud-Server-Liste. Per Einladung kannst du einen Server mit einem anderen camera.ui-Konto **teilen**, das sich dann mit eigenem Login anmeldet.

Das Papierkorb-Symbol neben einem Server entfernt ihn aus deinem Konto, auch wenn du den Server selbst nicht mehr erreichst. Damit wird sein Platz in deinem Tarif frei, und ein neuer Server, der bei **Server-Limit deines Tarifs erreicht** hängen geblieben ist, lässt sich danach verbinden. Bei einem mit dir geteilten Server beendet der Papierkorb nur deinen eigenen Zugriff.

## Ausschalten

Den Cloud-Zugriff zu deaktivieren beendet aktive Remote-Sitzungen. Lokale Verbindungen in deinem Netzwerk laufen weiter.
