---
title: System & Netzwerk
---

# System & Netzwerk

Die Seite **Einstellungen → System** (nur Admins) kümmert sich um die Version des Servers, die Ports, auf denen er lauscht, die Protokollierung und ein paar Server-Aktionen.

## Version und Updates

Sie zeigt die **Server**-Version, und in der Desktop- und der mobilen App die **App**-Version. Installiert wird auf der [Updates-Seite](/de/install/updating#die-updates-seite); hier bleiben **Verwalten**, das jede veröffentlichte Version zum gezielten Installieren auflistet, und **Beta-Updates**, der Schalter oben auf der Seite, der entscheidet, ob Vorabversionen überhaupt angeboten werden. Braucht eine installierte Version einen Neustart, zeigt die Versionszeile beide an und bietet **Neustart**. Siehe [Aktualisieren](/de/install/updating), wie Updates plattformübergreifend funktionieren.

## Server

- **HTTPS-Port.** Der Port für die Weboberfläche und die Apps, standardmäßig 3443.[^desktop]
- **HTTP-Port.** Ein zusätzlicher Port ohne Verschlüsselung, für einen [Reverse-Proxy](/de/remote/reverse-proxy#stattdessen-reines-http) auf derselben Maschine. Leer öffnet keinen.
- **Adresse.** Wo camera.ui lauscht: **Alle Adressen**, **Nur dieser Computer** oder eine Adresse der Maschine.
- **Im Netzwerk auffindbar.** Apps und Home Assistant in deinem Netzwerk finden den Server von selbst.

Ein neuer HTTPS-Port oder eine neue Adresse startet camera.ui neu, die Seite fragt vorher. Eine Seite, die direkt über den HTTPS-Port geöffnet ist, zieht auf die neue Adresse um, sobald der Server dort antwortet. HTTP-Port und Auffindbarkeit gelten ohne Neustart. In Docker setzen `CAMERA_UI_PORT` und `CAMERA_UI_INSECURE_PORT` die Ports stattdessen, die Felder nennen dann die Variable und bleiben gesperrt.

## Protokollierung

Wie ausführlich camera.ui und die Streaming-Engine ins [Log](/de/admin/logs) schreiben, von **Schwere Fehler** bis **Trace**. Debug und Trace sind für die Fehlersuche gedacht. Die Stufe von camera.ui gilt sofort, Plugins übernehmen sie bei ihrem nächsten Start. Eine neue Stufe für die Streaming-Engine startet sie neu.

## Erweitert

**camera.ui.yaml bearbeiten** öffnet die Konfigurationsdatei des Servers für alles, was die Seiten nicht abdecken. Speichern startet camera.ui neu.

## Server-Aktionen

- **Server neustarten.** Startet camera.ui neu.
- **Server zurücksetzen.** Setzt die Konfiguration auf Standard zurück und entfernt alle Einstellungen und Daten. Das kann nicht rückgängig gemacht werden und ist dem Master-Konto vorbehalten.

## Zertifikate

**Zertifikat** lädt das eigene Zertifikat des Servers herunter, etwa um es in den Zertifikatsspeicher eines Geräts zu legen. **Eigenes Zertifikat** nimmt ein Zertifikat, das du für deine Domain besorgt hast, und liefert es für die Namen aus, die es abdeckt. Siehe [Zertifikat](/de/remote/certificate).

::: tip
Suchst du den Servernamen oder die Netzwerk-Adressen? Die liegen unter [Remote-Zugriff](/de/remote/). Design und Sprache liegen unter **Erscheinungsbild**.
:::

[^desktop]: Die Desktop-App nutzt 3543.
