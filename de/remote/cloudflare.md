---
title: Cloudflare-Tunnel
---

# Cloudflare-Tunnel

Ein Cloudflare-Tunnel gibt deinem Server eine öffentliche Adresse über Cloudflares Netzwerk, ohne Ports am Router zu öffnen. Setze unter **Einstellungen → Remote** bei **Direkte Verbindung** die Methode auf **Cloudflare** und wähle dann eine Variante:

- **Quick Tunnel.** Eine temporäre Adresse, ohne Cloudflare-Konto. Gut für einen schnellen Test. Die Adresse ändert sich jedes Mal.
- **Named Tunnel (Token).** Mit eigener Domain. Erstelle einen Tunnel in deinem Cloudflare-Dashboard und gib ihm einen öffentlichen Hostnamen, der auf deinen Server zeigt, zum Beispiel `https://192.168.1.10:3443`. Der Server nutzt ein selbstsigniertes Zertifikat, aktiviere daher **No TLS Verify** in den Origin-Einstellungen des Tunnels. Trage dann hier **Hostname** und **Tunnel Token** ein. Deine Domain muss bereits eine Zone in deinem Cloudflare-Konto sein.
- **Named Tunnel (OAuth).** Mit eigener Domain, wobei camera.ui die Einrichtung übernimmt. Gib einen Hostnamen ein, wähle **Cloudflare verbinden**, melde dich an, um deine Zone zu autorisieren, und camera.ui erstellt Tunnel und DNS-Eintrag für dich.

Nutze **Verbindung testen**, um die Erreichbarkeit des Servers zu bestätigen.
