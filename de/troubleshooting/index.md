---
title: Fehlerbehebung
---

# Fehlerbehebung

Wenn etwas nicht funktioniert, deckt diese Seite die häufigsten Probleme ab und wo du nachsiehst. Die **[Logs](/de/admin/logs)** sind der beste Ort, um zu sehen, was der Server tatsächlich tut.

## Eine Kamera verbindet sich nicht

Wenn eine Kamera offline zeigt oder nicht lädt:

- Prüfe die **[Quellen](/de/cameras/settings)** der Kamera. Der Sources-Tab zeigt für jeden Stream den Live-Status, die erkannten Codecs und die URL.
- Stelle sicher, dass **Stream-URL und Zugangsdaten** stimmen. Die RTSP-URL in einem Player wie VLC zu testen bestätigt, dass die Kamera selbst erreichbar ist.
- Bestätige, dass die Kamera im **selben Netzwerk** wie der Server ist oder von ihm erreichbar.
- Prüfe bei Marken- oder Discovery-basierten Kameras das passende **[Protokoll](/de/cameras/protocols)** oder [Plugin](/de/plugins/).

## Live-Ansicht ist schwarz oder spielt nicht

- Prüfe den **Codec** der Quelle im Sources-Tab; sehr ungewöhnliche Codecs brauchen eventuell Transcoding.
- Probiere einen anderen **Streaming-Modus** in den [Interface-Einstellungen](/de/cameras/settings) der Kamera.
- Aktiviere **[Hot Modus und Vorladen](/de/cameras/add-camera#performance-optionen)** für die Quelle, für schnelleres, zuverlässigeres Öffnen.

## Erkennung löst nicht aus

- Stelle sicher, dass eine **Bewegungs-Engine** und, für Objekte, ein **[KI-Backend](/de/detection/ai-backends)** der Kamera zugewiesen sind. Siehe [Sensoren einrichten](/de/sensors/setup).
- Senke **Confidence** oder **Bewegungs-Empfindlichkeit** unter [Einstellungen → Detection](/de/cameras/settings), wenn Ereignisse verpasst werden.
- Prüfe, dass deine **[Zonen](/de/cameras/zones-and-masks)** den Bereich nicht ausschließen.
- Denk an die **Kaskade**: Objekt-, Gesichts- und Kennzeichen-Erkennung laufen erst nach Bewegung oder einem anderen Trigger. Siehe [Erkennung](/de/detection/).

## Keine Benachrichtigungen

- Prüfe die **[Benachrichtigungs-Einstellungen](/de/notifications/)** auf dem Gerät: Hauptschalter, Ruhezeiten und ob das Gerät registriert ist.
- Prüfe die Benachrichtigungs-Einstellungen der **Kamera**: welche Objekte, Geräusche und Sensoren sie meldet.
- Für **Push aufs Handy** bestätige, dass [camera.ui Cloud](/de/remote/cloud) eingerichtet ist; Push braucht das Abo.

## Aufnahme funktioniert nicht

- Aufnahmen brauchen ein **aktives Abo**. Siehe [Aufnahmen](/de/recording/).
- Bestätige, dass der **Aufnahme-Modus** der Kamera gesetzt ist, Continuous oder Event.
- Prüfe den **[Speicher](/de/recording/storage)**: eine volle Disk mit **Strict**-Retention pausiert die Aufnahme, bis du Platz freigibst.

## Server remote nicht erreichbar

- Bestätige unter **[Einstellungen → Remote](/de/remote/)**, dass der Cloud-Zugriff **aktiviert** und der Server **registriert** ist, mit verbundenem Tunnel.
- Nutze bei einer direkten Verbindung **Verbindung testen**, um zu prüfen, ob die Adresse erreichbar ist.
- Die Mobile-Apps brauchen [camera.ui Cloud](/de/remote/cloud), um von außerhalb deines Netzwerks zu verbinden.

## Mehr Details bekommen

- Öffne die **[Logs](/de/admin/logs)** und filtere oder suche nach dem Problem. Du kannst das Log herunterladen, um es bei einer Anfrage um Hilfe zu teilen.
- Für tiefere Inspektion gibt das **Terminal** eine Shell auf dem Server.

## Immer noch hängen geblieben?

Frag die Community auf [Discord](https://discord.gg/bBGnGcbz8N) oder im [Reddit](https://www.reddit.com/r/cameraui/), oder öffne ein Issue auf [GitHub](https://github.com/cameraui/camera.ui). Füge deine Logs und die Schritte bei, die zum Problem geführt haben.
