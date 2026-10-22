---
title: Schnellstart
---

# Schnellstart

Der kurze Weg von der Installation zu einer Kamera, die erkennt und aufnimmt. Jeder Schritt verlinkt die Seite mit den Details.

## 1. Installieren

- **macOS oder Windows.** Die [Desktop-App](/de/install/desktop).
- **Linux.** [Docker](/de/install/docker): die Compose-Datei von dieser Seite speichern und `docker compose up -d` ausführen. Unter Proxmox nimmst du das [Proxmox](/de/install/proxmox)-Skript.

Die Desktop-App öffnet camera.ui von selbst. Sonst öffne `https://<server-ip>:3443`. Das Zertifikat ist selbstsigniert, daher warnt der Browser beim ersten Besuch.

## 2. Anmelden

Melde dich mit `admin` / `admin` an. Der Einrichtungs-Assistent fragt nach Theme und Sprache, dann nach deinem eigenen Benutzernamen und Passwort, die das Standard-Konto ersetzen. Danach meldest du dich mit dem neuen Konto an. Siehe [Erste Schritte](/de/intro/getting-started).

## 3. Kamera hinzufügen

Öffne **Kameras**. Kameras aus deinem Netzwerk stehen unter **Entdeckt**: eine auswählen, Benutzername und Passwort eingeben, bestätigen. Für die Suche muss ONVIF in der Kamera eingeschaltet sein. Eine Kamera, die nicht gefunden wird, fügst du mit **Kamera hinzufügen** und ihrer RTSP-URL hinzu. Ohne RTSP-URL bringt ein Marken-Plugin aus dem Store die Kamera mit, etwa Reolink:[^cloud] installieren, auf seiner Seite einrichten, dann stehen seine Kameras unter **Entdeckt**. Siehe [Kamera hinzufügen](/de/cameras/add-camera).

## 4. Erkennungs-Plugins installieren

Das NVR-Plugin für Aufnahmen ist schon installiert. Unter **Plugins → Plugins suchen** kommen dazu:

- **Eine Bewegungserkennung.** **Rust Motion** passt für die meisten.
- **Ein KI-Backend** für deine Hardware: **CoreML** auf Apple Silicon, **OpenVINO** auf Intel, **ONNX** auf allem anderen.

Die übrigen Optionen stehen unter [Objekterkennung & KI-Backends](/de/detection/ai-backends).

## 5. Server mit deinem Konto verbinden

Aufnahmen und die mobilen Apps laufen über ein camera.ui-Konto, das du unter [cloud.cameraui.com](https://cloud.cameraui.com/) anlegst.

1. **Einstellungen → Remote Zugriff → Server registrieren**, dann anmelden. Derselbe Bildschirm koppelt auch die [mobilen Apps](/de/remote/pairing).
2. **Einstellungen → Aufnahmen**, Karte **Lizenz & Cloud**: auf das Cloud-Icon klicken und anmelden. Die Lizenz aktiviert sich von selbst.

Siehe [Aufnahmen aktivieren](/de/recording/#aufnahmen-aktivieren).

## 6. Erkennung einschalten

Öffne in den Einstellungen der Kamera den Tab **Plugins** und dort die Kategorie **Erkennung**. Stelle **Bewegung** auf Rust Motion und **Objekt** auf dein KI-Backend. Die Erkennung startet sofort, Empfindlichkeit und Konfidenz findest du unter **Erkennung** in denselben Einstellungen. Siehe [Sensoren einrichten](/de/sensors/setup).

## 7. Aufnahme prüfen

Mit aktiver Lizenz nimmt jede Kamera rund um die Uhr in allen Stream-Qualitäten auf, solange dein Tarif einen freien Kamera-Slot hat. Soll nur bei Ereignissen aufgenommen werden, stell die Kamera in ihren Aufnahme-Einstellungen auf **Event**. Siehe [Aufnahme-Modi](/de/recording/#aufnahme-modi).

## Nächste Schritte

- **[Live-Ansicht](/de/cameras/live-view)** — deine Kameras live sehen
- **[Benachrichtigungen](/de/notifications/)** — Pushes für das, was deine Kameras sehen
- **[Zonen & Privatsphäre](/de/cameras/zones-and-masks)** — begrenzen, wo die Erkennung zählt
- **[Fernzugriff](/de/remote/)** — camera.ui von außerhalb deines Netzwerks erreichen

[^cloud]: Es gibt auch Plugins für Kameras, die von einer Hersteller-Cloud abhängen, etwa Eufy, Tuya, Wyze oder Ring. Sie funktionieren, diese Kameras sind aber **nicht empfehlenswert** und **nicht durch den Support abgedeckt**. Nutze lokale RTSP-/ONVIF-Kameras für ein zuverlässiges Erlebnis.
