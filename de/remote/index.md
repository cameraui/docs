---
title: Remote-Zugriff
---

# Remote-Zugriff

Ohne Remote-Zugriff ist camera.ui nur in deinem lokalen Netzwerk erreichbar. Remote-Zugriff ist kostenlos und braucht das Aufnahme-Abo nicht.[^free]

Remote-Zugriff ist eine Admin-Einstellung unter **Einstellungen → Remote Zugriff**. Die Seite zeigt deinen aktuellen **Verbindungsstatus** (lokal, lokales Netzwerk, remote oder Cloud) und die Adresse, über die du verbunden bist. Der Info-Button daneben öffnet die **Verbindungsdetails**: die Adresse, die diese App nutzt, was der Server von seiner Seite sieht, und jede Adresse, die die App beim letzten Versuch probiert hat, mit Dauer und Fehlergrund. **Details kopieren** kopiert alles, etwa für eine Support-Nachricht. Auf derselben Seite liegt die Karte **Netzwerk**, wo du wählst, welche IP-Adressen des Servers Apps nutzen dürfen, und ihm eine **Lokale Adresse** in deinem eigenen Netzwerk geben kannst. Die Liste enthält auch VPN-Adressen wie die von WireGuard, aber keine Container- und VM-Netze.

Beim Verbinden und wann immer sich der Pfad ändert (etwa wenn du nach Hause kommst und die App vom Internet-Pfad wegwechselt), sagt ein kurzer Hinweis unten **Verbunden über lokales Netzwerk**, **Verbunden über Internet** oder **Verbunden über Cloud**.

<Shot src="/img/remote/remote-settings.png" alt="Remote-Zugriff-Seite mit Verbindungsstatus und Info-Button" />

## Wie du dich verbindest

- **[camera.ui Cloud](/de/remote/cloud).** Server registrieren und von überall erreichen, ohne Router-Einrichtung oder Port-Forwarding. Für die meisten empfohlen und für die [Mobile-Apps](/de/remote/pairing) von unterwegs erforderlich.
- **Direkte Verbindung.** Den Server mit einer eigenen öffentlichen Adresse bereitstellen, entweder über einen **[Cloudflare-Tunnel](/de/remote/cloudflare)** oder deine **[eigene Domain](/de/remote/custom-domain)**.

Du kannst den Zugriff auch **nur lokal** halten, indem du Remote-Zugriff aus lässt.

## WebRTC

Oberfläche, API und MSE-Wiedergabe laufen über die Verbindung, die du oben gewählt hast. WebRTC-Live-Ansicht und Gegensprechen öffnen einen eigenen Weg. Server und App ermitteln ihre öffentlichen Adressen über einen STUN-Server, der Server bietet seine mit Port **2004** an, und beide versuchen, einen direkten Weg durch ihre Router zu öffnen. Das klappt meist ohne Router-Einstellungen. Hinter manchen Routern und hinter Carrier-Grade-NAT, wie es im Mobilfunk üblich ist, kommt kein direkter Weg zustande. Eine Kamera auf [Auto](/de/cameras/live-view#streaming-modi) spielt dann über MSE, eine auf **WebRTC** zeigt kein Bild, und Gegensprechen verbindet nicht.

Zwei Dinge helfen:

- **Port 2004 weiterleiten.** UDP, mit TCP auf demselben Port als Fallback, auf den Server. Die Adresse, die der Server anbietet, ist dann von überall erreichbar.
- **Ein TURN-Server.** Er leitet die Medien weiter, wenn kein direkter Weg zustande kommt, und ist der einzige Weg, wenn der Anschluss des Servers selbst hinter Carrier-Grade-NAT liegt (etwa DS-Lite) und sich kein Port weiterleiten lässt. camera.ui bringt keinen mit, betreibe einen eigenen (etwa coturn) oder nutze einen gehosteten.

Die Karte **WebRTC** unter **Einstellungen → [Streaming](/de/admin/streaming#webrtc)** stellt den Port und die **STUN-Server** und **TURN-Server** ein, für den Server und für die Apps. Jeder TURN-Server bekommt eigene Adressen, **Benutzername** und **Passwort**, weitere kommen über **TURN-Server hinzufügen** dazu. Bleibt die STUN-Liste leer, ermittelt keine Seite eine öffentliche Adresse, und von außen braucht WebRTC dann einen TURN-Server. Der Button am Ende des STUN-Felds holt die Standard-STUN-Server zurück, sie gelten nach **Speichern**.

[^free]: Remote-Zugriff und Kamera-Freigaben sind kostenlos enthalten. Das Abo deckt [Aufnahmen (NVR)](/de/recording/) ab, nicht den Remote-Zugriff.
