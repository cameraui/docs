---
title: Streaming
---

# Streaming

**Einstellungen → Streaming** (nur Admins) legt fest, was die Streaming-Engine anderen Apps anbietet: die Kamerastreams über RTSP, den ONVIF-Export, WebRTC für die Live-Ansicht und zwei weitere Ports. Die meisten Änderungen gelten, während alles weiterläuft. Ein neuer RTSP- oder WebRTC-Port startet die Streaming-Engine neu, die Seite fragt vorher, und Live-Ansichten und Aufnahmen setzen ein paar Sekunden aus. Läuft Docker ohne Host-Netzwerk, gib einen geänderten Port auch dort frei.

## RTSP

Andere Apps holen sich jeden Kamerastream über RTSP, standardmäßig auf Port 2001.[^desktop] Der Tab **Quellen** der Kamera zeigt die **RTSP-URL** jedes Streams.

- **Benutzername** und **Passwort.** Die Anmeldung, mit der andere Apps die Streams holen. Eine neue Installation startet mit dem Benutzernamen `cameraui` und einem zufälligen Passwort. Eine ältere nutzt eventuell noch `admin` und `admin`, das kann jeder in deinem Netzwerk erraten, ändere es dort also. Apps mit der alten Anmeldung brauchen die neue.
- **Standard-Query.** Was eine App bekommt, wenn ihre RTSP-URL nichts anderes verlangt: standardmäßig **Video und Ton**. Die übrigen Optionen beschränken das auf das Video oder auf MP4-Codecs oder erweitern es auf alle Tonspuren oder alle Spuren. **Eigene Query** nimmt jede Query, die die Streaming-Engine versteht.

## ONVIF

**ONVIF-Export** startet den ONVIF-Server, standardmäßig auf Port 2005, und **Adresse** zeigt, was andere Apps eintragen. Siehe [ONVIF-Export](/de/cameras/onvif-export).

## WebRTC

**Port** ist der Port, über den die Live-Ansicht per WebRTC verbindet, standardmäßig 2004. **Adressen** ergänzt Adressen mit Port, die die Apps zusätzlich probieren, etwa einen Hostnamen oder eine zweite IP. `stun:2004` ergänzt die öffentliche Adresse des Servers. Die **STUN-Server** und **TURN-Server** derselben Karte erklärt [Remote-Zugriff](/de/remote/#webrtc).

## Weitere Ports

**SRTP (HomeKit)** trägt das Video des [HomeKit](/de/plugins/homekit)-Plugins, standardmäßig Port 2002. **RTMP** ist für Apps, die RTMP-Streams senden oder holen, standardmäßig Port 2003. Jeder Port muss auf dem Rechner frei sein.

## Erweitert

**go2rtc.yaml bearbeiten** öffnet die Datei der Streaming-Engine für alles, was die Seite nicht abdeckt. Das Speichern fragt vorher und startet die Streaming-Engine neu, wenn eine Änderung es braucht. camera.ui schreibt die Kamerastreams und die ONVIF-Kameraliste selbst in die Datei, Änderungen dort bleiben nicht.

[^desktop]: Die Desktop-App zählt zu jedem Standardport 100 dazu, RTSP liegt dort also auf 2101, WebRTC auf 2104 und so weiter.
