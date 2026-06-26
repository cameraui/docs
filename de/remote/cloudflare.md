---
title: Cloudflare-Tunnel
---

# Cloudflare-Tunnel

Ein Cloudflare-Tunnel gibt deinem Server eine öffentliche Adresse über Cloudflares Netzwerk, ohne Ports am Router zu öffnen. Setze unter **Einstellungen → Remote** die Methode der **direkten Verbindung** auf **Cloudflare** und wähle dann eine Variante:

- **Quick Tunnel.** Eine temporäre Adresse, ohne Cloudflare-Konto. Gut für einen schnellen Test. Die Adresse ändert sich jedes Mal.
- **Named Tunnel (Token).** Mit eigener Domain. Erstelle einen Tunnel in deinem Cloudflare-Dashboard und füge hier seinen **Hostnamen** und **Tunnel-Token** ein. Deine Domain muss bereits eine Zone in deinem Cloudflare-Konto sein.
- **Named Tunnel (OAuth).** Mit eigener Domain, wobei camera.ui die Einrichtung übernimmt. Gib einen Hostnamen ein, wähle **Cloudflare verbinden**, melde dich an, um deine Zone zu autorisieren, und camera.ui erstellt Tunnel und DNS-Eintrag für dich.

Nutze **Verbindung testen**, um die Erreichbarkeit des Servers zu bestätigen.
