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
- Aktiviere **[Hot Modus und Vorladen](/de/cameras/add-camera#quellen-optionen)** für die Quelle, für schnelleres, zuverlässigeres Öffnen.

## Erkennung löst nicht aus

- Stelle sicher, dass eine **Bewegungs-Engine** und, für Objekte, ein **[KI-Backend](/de/detection/ai-backends)** der Kamera zugewiesen sind. Siehe [Sensoren einrichten](/de/sensors/setup).
- Senke **Konfidenz** oder **Bewegungs-Empfindlichkeit** unter [Einstellungen → Erkennung](/de/cameras/settings), wenn Ereignisse verpasst werden.
- Prüfe, dass deine **[Zonen](/de/cameras/zones-and-masks)** den Bereich abdecken und dass der erwartete Typ auf einer davon steht.
- Denk an die **Kaskade**: Objekt-, Gesichts- und Kennzeichen-Erkennung laufen erst nach Bewegung oder einem anderen Trigger. Siehe [Erkennung](/de/detection/).

## OpenVINO findet die GPU auf Bare-Metal nicht

Das OpenVINO-Plugin loggt `libOpenCL.so.1: cannot open shared object file`, wenn dem Host Intels OpenCL-Runtime fehlt. Installiere sie mit `sudo apt install ocl-icd-libopencl1 intel-opencl-icd` und stelle sicher, dass der Service-User in den Gruppen `render` und `video` ist. Siehe [Linux → Hardware-Beschleunigung](/de/install/linux#hardware-beschleunigung).

## Keine Benachrichtigungen

- Prüfe die **[Benachrichtigungs-Einstellungen](/de/notifications/)** auf dem Gerät: Hauptschalter, Ruhezeiten und ob das Gerät registriert ist.
- Prüfe die Benachrichtigungs-Einstellungen der **Kamera**: welche Objekte, Geräusche und Sensoren sie meldet.
- Für **Push aufs Handy** brauchst du die native [Mobile-App](/de/install/mobile) (ein Browser bekommt keinen Push), eingerichtete [camera.ui Cloud](/de/remote/cloud) und einen Tipp auf **Dieses Gerät synchronisieren**. Kam Push vorher an und ist dann verstummt, merkt die App das meist selbst und zeigt einen Hinweis mit einem **Beheben**-Button; ein Tipp richtet das Handy wieder ein. Siehe [Push aufs Handy bekommen](/de/notifications/#push-aufs-handy-bekommen).

## Aufnahme funktioniert nicht

- Aufnahmen brauchen ein **aktives Abo**. Siehe [Aufnahmen](/de/recording/).
- Bestätige, dass der **Aufnahme-Modus** der Kamera gesetzt ist, Continuous oder Event.
- Prüfe den **[Speicher](/de/recording/storage)**: eine volle Disk mit **Strict**-Retention pausiert die Aufnahme, bis du Platz freigibst.
- Wenn **Einstellungen → Aufnahmen** warnt, dass das Speichervolumen klein ist, liegen die Aufnahmen auf einer kleinen Disk und rotieren schnell weg. Entweder ist die Disk wirklich so klein, oder ein erwarteter Speicher-Mount wurde nie eingehängt. Prüfe den Pfad unter **[Speicher](/de/recording/storage)**.

## Server remote nicht erreichbar

- Öffne **[Einstellungen → Remote Zugriff](/de/remote/)** und wähle den Info-Button neben dem **Verbindungsstatus**. Die **Verbindungsdetails** nennen die genutzte Adresse, was der Server sieht, und jede probierte Adresse mit Dauer und Fehlergrund. **Details kopieren** kopiert alles für einen Fehlerbericht.
- Bestätige, dass der Cloud-Zugriff **aktiviert** und der Server **registriert** ist, mit verbundenem Tunnel.
- Nutze bei einer direkten Verbindung **Verbindung testen**, um zu prüfen, ob die Adresse erreichbar ist.
- Die Mobile-Apps brauchen [camera.ui Cloud](/de/remote/cloud), um von außerhalb deines Netzwerks zu verbinden.
- Verbindet die App über das Internet, obwohl du zuhause bist, schau in die Karte **Netzwerk** auf derselben Seite: Eine bei **Server-Adressen** fehlende IP oder eine **Lokale Adresse**, die nicht antwortet, schickt die App nach draußen.

## Ich komme nicht rein

Kennst du das Konto, aber nicht das Passwort, kann ein anderer Administrator unter **Einstellungen → [Benutzer](/de/admin/users)** ein neues setzen: Menü des Benutzers öffnen, **Bearbeiten** wählen, neues Passwort eintragen.

Das **Master**-Konto ist die Ausnahme. Es kann nur sich selbst ändern, niemand sonst kann es zurücksetzen, und über die Kommandozeile geht es auch nicht. Ein [Backup](/de/admin/backup) aus einer Zeit, als du das Passwort noch kanntest, bringt die alten Konten mit zurück. Ohne so ein Backup hilft nur eine Neuinstallation, bewahre das Master-Passwort also dort auf, wo du es wiederfindest.

## Mehr Details bekommen

- Öffne die **[Logs](/de/admin/logs)** und filtere oder suche nach dem Problem. Du kannst das Log herunterladen, um es bei einer Anfrage um Hilfe zu teilen.
- Für tiefere Inspektion gibt das **Terminal** eine Shell auf dem Server.

## Immer noch hängen geblieben?

Frag die Community auf [Discord](https://discord.gg/bBGnGcbz8N) oder im [Reddit](https://www.reddit.com/r/cameraui/), oder öffne ein Issue auf [GitHub](https://github.com/cameraui/camera.ui). Füge deine Logs und die Schritte bei, die zum Problem geführt haben.
