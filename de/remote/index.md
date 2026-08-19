---
title: Remote-Zugriff
---

# Remote-Zugriff

Standardmäßig ist camera.ui in deinem lokalen Netzwerk erreichbar. Um deine Kameras von unterwegs anzusehen, richtest du Remote-Zugriff ein. Er ist kostenlos enthalten und braucht das Aufnahme-Abo nicht.[^free]

Remote-Zugriff ist eine Admin-Einstellung unter **Einstellungen → Remote Zugriff**. Die Seite zeigt deinen aktuellen **Verbindungsstatus** (lokal, lokales Netzwerk, remote oder Cloud) und die Adresse, über die du verbunden bist. Der Info-Button daneben öffnet die **Verbindungsdetails**: die Adresse, die diese App nutzt, was der Server von seiner Seite sieht, und jede Adresse, die die App beim letzten Versuch probiert hat, mit Dauer und Fehlergrund. **Details kopieren** legt alles in die Zwischenablage, etwa für eine Support-Nachricht. Auf derselben Seite liegt die Karte **Netzwerk**, wo du wählst, welche IP-Adressen des Servers Apps nutzen dürfen, und ihm eine **Lokale Adresse** in deinem eigenen Netzwerk geben kannst.

Du musst diese Seite gar nicht öffnen, um zu wissen, wo du bist. Beim Verbinden sagt ein kurzer Hinweis unten am Bildschirm **Verbunden über lokales Netzwerk**, **Verbunden über Internet** oder **Verbunden über Cloud**, und er kommt wieder, sobald sich der Pfad ändert, etwa wenn du nach Hause kommst und die App vom Internet-Pfad wegwechselt. Nach ein paar Sekunden verschwindet er von selbst.

<Shot src="/img/remote/remote-settings.png" alt="Remote-Zugriff-Seite mit Verbindungsstatus und Info-Button" />

## Wie du dich verbindest

Es gibt zwei Ansätze:

- **[camera.ui Cloud](/de/remote/cloud).** Die einfachste Option. Anmelden, Server registrieren und von überall erreichen, ohne Router-Einrichtung oder Port-Forwarding. Für die meisten empfohlen und für die [Mobile-Apps](/de/remote/pairing) von unterwegs erforderlich.
- **Direkte Verbindung.** Den Server mit einer eigenen öffentlichen Adresse bereitstellen, entweder über einen **[Cloudflare-Tunnel](/de/remote/cloudflare)** oder deine **[eigene Domain](/de/remote/custom-domain)**. Für Nutzer, die ihre eigene Infrastruktur verwenden wollen.

Du kannst den Zugriff auch **nur lokal** halten, indem du Remote-Zugriff aus lässt.

[^free]: Remote-Zugriff und Kamera-Freigaben sind kostenlos enthalten. Das Abo deckt [Aufnahmen (NVR)](/de/recording/) ab, nicht den Remote-Zugriff.
