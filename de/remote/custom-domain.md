---
title: Eigene Domain
---

# Eigene Domain

Setze unter **Einstellungen → Remote Zugriff** die Methode der **direkten Verbindung** auf **Benutzerdefinierte Domain** und gib die **URL** ein, unter der der Server erreichbar ist, zum Beispiel `https://nvr.example.com`.

Der Server muss unter dieser Adresse bereits erreichbar sein, über dein eigenes DNS und einen Reverse-Proxy oder Port-Forwarding: camera.ui merkt sich nur die Adresse und ändert nichts an deinem Netzwerk. Port-Forwarding leitet auf **3443**, und der Server antwortet dort mit seinem eigenen selbstsignierten Zertifikat, Browser und Apps zeigen also eine Warnung. Ein Reverse-Proxy mit echtem Zertifikat vermeidet das, und [Zertifikat](/de/remote/certificate) beschreibt, wie du eines direkt in camera.ui hinterlegst. [Reverse-Proxy](/de/remote/reverse-proxy) beschreibt, was ein Proxy weiterleiten muss.

Über diesen einen Port laufen Oberfläche, API und MSE-Wiedergabe. WebRTC-Medien gehen getrennt über Port **2004** (UDP, mit TCP auf demselben Port als Fallback), leite den für den latenzarmen Weg von außen also mit weiter. Ohne ihn fällt die Live-Ansicht auf MSE zurück.

**Verbindung testen** prüft die gespeicherte Adresse, also erst **Speichern**. Der Test ruft die Adresse vom Server aus auf, was bei Routern ohne Hairpin-NAT oder mit Split-DNS fehlschlägt, auch wenn die Adresse von außen einwandfrei funktioniert. Der Remote-Zugriff läuft trotzdem weiter, camera.ui gibt eine eigene Domain erst auf, wenn der Name öffentlich nicht mehr auflöst.

::: tip
Wenn du keine eigene Domain oder keinen Reverse-Proxy betreibst, ist [camera.ui Cloud](/de/remote/cloud) oder ein [Cloudflare-Tunnel](/de/remote/cloudflare) einfacher, da keiner Router-Änderungen braucht.
:::
