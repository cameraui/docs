---
title: Eigene Domain
---

# Eigene Domain

Wenn du den Server lieber selbst bereitstellst, richte deine eigene Domain darauf. Setze unter **Einstellungen → Remote Zugriff** die Methode der **direkten Verbindung** auf **Benutzerdefinierte Domain** und gib die **URL** ein, unter der der Server erreichbar ist, zum Beispiel `https://nvr.example.com`.

Das setzt voraus, dass du den Server bereits unter dieser Adresse erreichbar gemacht hast, über dein eigenes DNS und einen Reverse-Proxy oder Port-Forwarding an deinem Router. camera.ui ändert hier nichts an deinem Netzwerk; es merkt sich die zu verwendende öffentliche Adresse. Port-Forwarding leitet auf **3443**, und der Server antwortet dort mit seinem eigenen selbstsignierten Zertifikat, Browser und Apps zeigen also eine Warnung. Ein Reverse-Proxy mit echtem Zertifikat vermeidet das. Wenn du den Weg über einen Reverse-Proxy gehst, beschreibt [Reverse-Proxy](/de/remote/reverse-proxy), was der Proxy weiterleiten muss.

Wähle **Speichern**, um die Adresse zu sichern, und nutze dann **Verbindung testen**. Getestet wird die gespeicherte Adresse, eine nur eingetippte URL wird also noch nicht berücksichtigt. Der Test ruft die Adresse vom Server aus auf, was bei Routern ohne Hairpin-NAT oder mit Split-DNS fehlschlägt, auch wenn die Adresse von außen einwandfrei funktioniert. Der Remote-Zugriff läuft trotzdem weiter, camera.ui gibt eine eigene Domain erst auf, wenn der Name öffentlich nicht mehr auflöst.

::: tip
Wenn du keine eigene Domain oder keinen Reverse-Proxy betreibst, ist [camera.ui Cloud](/de/remote/cloud) oder ein [Cloudflare-Tunnel](/de/remote/cloudflare) einfacher, da keiner Router-Änderungen braucht.
:::
