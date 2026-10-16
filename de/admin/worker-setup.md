---
title: Worker einrichten
---

# Worker einrichten

Wie der Ausschnitt aus [Einen Worker koppeln](/de/admin/workers#einen-worker-koppeln) auf den Worker kommt, hängt von seiner Installation ab.

## Docker

Ein Worker läuft aus demselben Image wie der Server. Speichere das hier als `docker-compose.worker.yml` auf der zweiten Maschine, mit der Adresse deines Masters und dem Pairing-Code:

```yaml
name: cameraui-worker

services:
  cameraui-worker:
    image: ghcr.io/cameraui/camera.ui:latest
    container_name: cameraui-worker
    restart: unless-stopped
    stop_grace_period: 30s
    network_mode: host
    environment:
      - TZ=Europe/Berlin
      - CAMERA_UI_WORKER=true
      - CAMERA_UI_WORKER_MASTER=192.168.1.10
      - CAMERA_UI_WORKER_PAIRING_CODE=XXXX-XXXX
      - CAMERA_UI_WORKER_NAME=worker-1
    volumes:
      - cameraui-worker-data:/data

volumes:
  cameraui-worker-data:
```

Dann starte ihn:

```bash
docker compose -f docker-compose.worker.yml up -d
```

Die Master-Adresse nimmt einen Hostnamen oder eine IP an, ohne Schema. `CAMERA_UI_WORKER_API_PORT` brauchst du nur, wenn der HTTPS-Port des Masters nicht 3443 ist, eine Desktop-App als Master hört auf 3543. Wie der Worker eine GPU bekommt, steht unten unter [Hardware-Beschleunigung](#hardware-beschleunigung).

## Desktop-App

Eine Maschine mit der [Desktop-App](/de/install/desktop) tritt als Worker bei, wenn du beim ersten Start **Worker** im Modus-Dialog wählst (oder später über **Modus wechseln…** im Tray-Menü) und Adresse des Masters und Pairing-Code eingibst, oder ohne Dialog über die [Kommandozeile](/de/install/desktop#ohne-auswahl-starten). Die App zeigt dann nur ein Statusfenster. Stimmt die Adresse nicht oder ist der Code abgelaufen, öffnet sich der Dialog erneut mit dem Fehler.

Drei Tray-Optionen: **Beim Anmelden öffnen** startet die App mit dem System, minimiert in den Tray, **In den Tray schließen** lässt den Worker im Hintergrund weiterlaufen, wenn das Fenster geschlossen wird,[^trayopts] und **Computer wach halten** (standardmäßig an) hält den Computer vom Ruhezustand ab, solange der Worker Kameras oder Plugins betreibt; der Bildschirm darf trotzdem ausgehen. Schläft der Computer doch ein, stoppt der Worker vorher seine Arbeit und der Master übernimmt, bis er zurück ist. Die Adresse nimmt einen Hostnamen oder eine IP an, mit `:Port` nur, wenn der HTTPS-Port des Masters vom Standard abweicht.

[^trayopts]: Beim Anmelden öffnen gibt es unter Windows und macOS. In den Tray schließen gibt es unter Windows und Linux; unter macOS läuft die App beim Schließen des Fensters ohnehin weiter.

## Linux (Bare-Metal)

Füge den Ausschnitt in die `camera.ui.yaml` im Speicherverzeichnis der Worker-Maschine ein und starte sie dann mit `cameraui --worker run`. Damit die Maschine auch nach einem Neustart Worker bleibt, installiere sie stattdessen als Service: `cameraui --worker install` (das Flag wird mit dem Service gespeichert, siehe [Linux (Bare-Metal)](/de/install/linux)).

## Hardware-Beschleunigung

Unter **Docker** passen die Override-Dateien des Haupt-Deployments nicht: Sie ergänzen den Dienst `cameraui`, nicht `cameraui-worker`, eine darübergelegte Datei startet also einen zweiten, unabhängigen Container. Trag die [Image-Variante](/de/install/docker#hardware-beschleunigung) passend zur Hardware und das Gerät direkt in die Worker-Datei ein:

```yaml
services:
  cameraui-worker:
    image: ghcr.io/cameraui/camera.ui:intel # oder :nvidia, :amd
    devices:
      - /dev/dri:/dev/dri
```

Für NVIDIA kommen die Blöcke `environment` und `deploy` aus dem [NVIDIA-Override](/de/install/docker#hardware-beschleunigung) dazu, und auf der Worker-Maschine muss das NVIDIA Container Toolkit installiert sein. Auf **Bare Metal** und in der **Desktop-App** gibt es nichts durchzureichen, der Treiber auf dem Host genügt.

Welchen Dekoder eine Kamera auf einem Worker nutzt, legst du pro Kamera unter **Frame Worker** in ihren [Einstellungen](/de/cameras/settings) fest. Die zweite Auswahl dort gilt, solange die Kamera auf einem Worker läuft, Master und Worker können also unterschiedliche Hardware nutzen. [Hardware-Beschleunigung](/de/install/hardware-acceleration) behandelt die Treiber auf dem Host und wie du prüfst, was im Container wirklich ankommt.

## Umgebungsvariablen

Die Werte des Ausschnitts lassen sich auch als Umgebungsvariablen setzen. `CAMERA_UI_WORKER=true` startet den Worker-Modus ohne die Option `--worker`, und `CAMERA_UI_WORKER_MASTER`, `CAMERA_UI_WORKER_API_PORT`, `CAMERA_UI_WORKER_PAIRING_CODE`, `CAMERA_UI_WORKER_NAME` sowie `CAMERA_UI_WORKER_CAPABILITIES` (kommagetrennt) decken den Rest des Ausschnitts ab. Eine `camera.ui.yaml` ist dann nicht nötig, und wenn du beides setzt, gewinnt die Umgebungsvariable.

Ohne Capabilities bietet der Worker alles an; der Master weist trotzdem nur zu, was du ihm gibst. Setze sie, um einen Worker auf eine Aufgabe zu beschränken, etwa nur das Hosten von Plugins.
