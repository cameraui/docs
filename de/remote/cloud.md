---
title: camera.ui Cloud
---

# camera.ui Cloud

camera.ui Cloud lässt dich deinen Server von überall erreichen, ohne am Router etwas zu ändern. Dein Server registriert sich bei der Cloud, und du verbindest dich über dein camera.ui-Konto. Das ist kostenlos und getrennt vom Aufnahme-Abo.

## Dein Server bleibt deiner

camera.ui Cloud ist ein Weg, deinen eigenen Server zu erreichen, keine Kopie davon. Deine Kameras, Aufnahmen, Einstellungen und die Oberfläche bleiben alle auf deinem Server. Die einzige Aufgabe der Cloud ist es, deiner App und deinem Server beim Verbinden zu helfen, und deine Session läuft dann direkt zu deiner eigenen Instanz. Dein Video, deine Zugangsdaten und andere Daten gehen direkt zu deinem Server und sind für camera.ui niemals einsehbar.

## Aktivieren

<Shot src="/img/remote/remote-settings.png" alt="Die Cloud-Karte unter Einstellungen, Remote" />

Öffne unter **Einstellungen → Remote** die **Cloud**-Karte und schalte **Aktiviert** ein. Gib dem Server einen **Namen**; so erscheint er in deinem Cloud-Dashboard, was praktisch ist, sobald du mehrere hast.

Die **Status**-Zeile zeigt, ob der Server **Registriert** ist, und eine **Tunnel**-Anzeige zeigt die Live-Verbindung. Um einen Server zu verbinden, wähle **Server registrieren** und schließe die Kopplung ab. Zeigt der Status **Neu-Authentifizierung nötig**, hat der Server seine Cloud-Zugangsdaten verloren: wähle **Neu verbinden** und koppel erneut. Einen registrierten Server nimmst du mit **Server deregistrieren** wieder aus deinem Konto. Denselben Ablauf auf dem Handy beschreibt [Mobile Apps koppeln](/de/remote/pairing).

## Cloud hält die direkte Verbindung aktiv

Solange die Cloud aktiv ist, behält dein Server zusätzlich eine öffentliche Adresse, damit die Apps ihn erreichen. Deshalb ist der Schalter **Aktiviert** in der Karte **Direkte Verbindung** fest eingeschaltet, und die Zeile **Externe URL** zeigt die verwendete Adresse.

Wenn du keine direkte Adresse eingerichtet hast oder die konfigurierte nicht erreichbar ist, startet camera.ui stattdessen einen temporären Cloudflare-Tunnel. In beiden Fällen musst du am Router nichts ändern. Wenn du lieber deine eigene Adresse nutzt, richte sie unter [Direkte Verbindung](/de/remote/) ein.

## Das Cloud-Dashboard

Mit der Anmeldung an deinem camera.ui-Konto bekommst du ein Dashboard, das alle deine registrierten Server beim Namen auflistet. Von dort wählst du einen Server zum Verbinden. Du kannst einen Server auch per Einladung mit einem anderen camera.ui-Konto **teilen**, sodass Familienmitglieder mit eigenem Login zugreifen.

## Ausschalten

Den Cloud-Zugriff zu deaktivieren beendet aktive Remote-Sitzungen. Lokale Verbindungen in deinem Netzwerk laufen weiter.
