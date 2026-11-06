---
title: ONVIF-Export
---

# ONVIF-Export

camera.ui kann seine Kameras als ONVIF-Gerät an andere Apps weitergeben: an ein anderes NVR, einen ONVIF-Client oder die ONVIF-Integration von Home Assistant.[^h265] Jede Kamera wird zu einer Videoquelle, ihre Streams zu Profilen, von hoher zu niedriger Auflösung. Snapshot-Quellen und deaktivierte Kameras bleiben außen vor.

## Einschalten

Der ONVIF-Server ist standardmäßig aus. Schalte **ONVIF-Export** unter **Einstellungen → [Streaming](/de/admin/streaming)** ein und speichere. Füge in der anderen App eine ONVIF-Kamera mit der Adresse des camera.ui-Servers und Port 2005 hinzu. Will eine App die vollständige Adresse, nimmt sie die aus **Adresse**, `http://<server>:2005/onvif/device_service`.

Die Kameraliste hält camera.ui selbst aktuell: Hinzufügen, Umbenennen, Deaktivieren oder Entfernen einer Kamera ändert sie ohne Neustart. Ein Stream bleibt aus den Profilen seiner Kamera heraus, wenn du für ihn im Tab **Quellen** der Kamera **ONVIF-Export** ausschaltest.

## Anmeldung

Der ONVIF-Server fragt keine Anmeldung ab: Wer den Port erreicht, sieht die Namen aller Kameras. Lass den Port deshalb nur im eigenen Netz erreichbar.

Das Video selbst läuft über RTSP und braucht **Benutzername** und **Passwort** aus der Karte **RTSP** auf derselben Seite. Trage sie in der anderen App als Zugangsdaten der Kamera ein. Stehen dort noch `admin` und `admin`, ändere sie, bevor du den Export einschaltest. Was ein RTSP-Client ohne eigene Query bekommt, legt **Standard-Query** fest, Video und Ton, solange du es nicht änderst.

[^h265]: Die ONVIF-Integration von Home Assistant nimmt nur H.264-Streams und lässt die H.265-Profile einer Kamera weg.
