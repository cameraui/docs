---
title: Eigene Domain
---

# Eigene Domain

Wenn du den Server lieber selbst bereitstellst, richte deine eigene Domain darauf. Setze unter **Einstellungen → Remote** die Methode der **direkten Verbindung** auf **Custom domain** und gib die **URL** ein, unter der der Server erreichbar ist, zum Beispiel `https://nvr.example.com`.

Das setzt voraus, dass du den Server bereits unter dieser Adresse erreichbar gemacht hast, über dein eigenes DNS und einen Reverse-Proxy oder Port-Forwarding an deinem Router. camera.ui ändert hier nichts an deinem Netzwerk; es merkt sich die zu verwendende öffentliche Adresse.

Nutze **Verbindung testen**, um zu bestätigen, dass es funktioniert.

::: tip
Wenn du keine eigene Domain oder keinen Reverse-Proxy betreibst, ist [camera.ui Cloud](/de/remote/cloud) oder ein [Cloudflare-Tunnel](/de/remote/cloudflare) einfacher, da keiner Router-Änderungen braucht.
:::
