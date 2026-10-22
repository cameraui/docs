---
title: Cloudflare-Tunnel
---

# Cloudflare-Tunnel

Ein Cloudflare-Tunnel gibt deinem Server eine öffentliche Adresse über Cloudflares Netzwerk, ohne Ports am Router zu öffnen. Setze unter **Einstellungen → Remote Zugriff** bei **Direkte Verbindung** die Methode auf **Cloudflare** und wähle dann eine Variante:

- **Quick Tunnel.** Eine temporäre Adresse, ohne Cloudflare-Konto. Gut für einen schnellen Test. Die Adresse ändert sich jedes Mal, und ab etwa vier gleichzeitigen Zuschauern von unterwegs läuft ein Named Tunnel stabiler.
- **Named Tunnel (Token).** Mit eigener Domain. Erstelle einen Tunnel in deinem Cloudflare-Dashboard und gib ihm einen öffentlichen Hostnamen, der auf deinen Server zeigt, zum Beispiel `https://192.168.1.10:3443`. Der Server nutzt ein selbstsigniertes Zertifikat, aktiviere daher **No TLS Verify** in den Origin-Einstellungen des Tunnels. Trage dann hier **Hostname** und **Tunnel Token** ein. Deine Domain muss bereits eine Zone in deinem Cloudflare-Konto sein.
- **Named Tunnel (OAuth).** Mit eigener Domain, wobei camera.ui die Einrichtung übernimmt. Gib einen Hostnamen ein, wähle **Cloudflare verbinden**, melde dich an, um deine Zone zu autorisieren, und camera.ui erstellt Tunnel und DNS-Eintrag für dich.

Mit aktiviertem Cloud-Zugriff hält camera.ui jederzeit eine öffentliche Adresse bereit. Verbindet sich dein benannter Tunnel nicht mehr, startet es einen Quick Tunnel, damit der Server erreichbar bleibt, und versucht deinen Tunnel nach zehn Minuten erneut, danach jeweils nach der doppelten Wartezeit, bis höchstens alle vier Stunden. Speicherst du die Einstellungen unter **Remote Zugriff**, beginnt es wieder bei zehn Minuten. Jeder fehlgeschlagene Versuch hinterlässt eine neue Quick-Tunnel-Adresse, und die Apps brauchen kurz, um den Server wiederzufinden.

Jede Variante verbindet sich nach außen zu Cloudflare per TCP auf Port 7844. Hinter einer Firewall, die ausgehenden Verkehr filtert, gib TCP auf diesem Port frei.

Für QUIC trag `cloudflaredProtocol: quic` in der `camera.ui.yaml` in deinem Speicherverzeichnis ein und starte den Server neu. In Docker macht `CAMERA_UI_CLOUDFLARED_PROTOCOL` unter `environment:` dasselbe. `quic` braucht UDP auf Port 7844, `auto` versucht QUIC und weicht auf TCP aus. Über QUIC können ein paar hängende Zuschauer, etwa ein gesperrtes Handy mit offenen Live-Kameras, den Tunnel für alle einfrieren.
