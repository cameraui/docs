# Docker

Docker ist die empfohlene Art, den camera.ui-Server auf Linux zu betreiben. Das Image basiert auf Ubuntu 24.04 und lädt den Server beim ersten Start selbst, Server-Updates brauchen also kein neues Image. Es gibt ein Image pro Hardware-Ziel, veröffentlicht als `ghcr.io/cameraui/camera.ui`.

## Bevor du startest

Du brauchst einen **Linux-Host** mit Docker Engine und dem Compose-Plugin.

::: warning Docker Desktop funktioniert nicht
Docker Desktop auf macOS und Windows kann kein Host-Networking nutzen, auf das camera.ui für mDNS und WebRTC angewiesen ist. Nutze auf diesen Plattformen stattdessen die [Desktop-App](/de/install/desktop).
:::

## Schnellstart

Speichere dies als `docker-compose.yml`:

```yaml
name: cameraui

services:
  cameraui:
    image: ghcr.io/cameraui/camera.ui:latest
    container_name: cameraui
    restart: unless-stopped
    network_mode: host
    environment:
      - TZ=Europe/Berlin
      - CAMERAUI_DOCKER_AVAHI=true
    volumes:
      - cameraui-data:/data

volumes:
  cameraui-data:
```

Starte es:

```bash
docker compose up -d
```

Öffne dann `https://<host>:3443`. Der erste Boot lädt den Server und dauert ein paar Minuten (`docker compose logs -f` zeigt den Fortschritt). Das Zertifikat ist selbstsigniert, der Browser warnt also beim ersten Besuch. Weiter geht es unter [Erste Schritte](/de/intro/getting-started).

::: tip Erster Boot braucht Internet
Beim ersten Start lädt der Container den Server aus der npm-Registry. Falls dein Host sie nicht auflösen kann, füge dem Service öffentliche DNS-Resolver hinzu (`1.1.1.1`, `8.8.8.8`).
:::

## Hardware-Beschleunigung

Das Standard-Image (`latest`) führt Erkennung und Video-Verarbeitung in Software aus. Für Beschleunigung legst du das Override des Flavors, der zu deiner Hardware passt, über die Basisdatei.

| Flavor | Tag | Hardware-Beschleunigung | Arch |
|---|---|---|---|
| CPU | `latest` | Software | amd64 + arm64 |
| Intel | `intel` | Quick Sync / VA-API + OpenCL | amd64 |
| NVIDIA | `nvidia` | NVENC / NVDEC + CUDA 13 | amd64 |
| NVIDIA (TensorRT) | `nvidia-tensorrt` | NVENC / NVDEC + CUDA 13 + TensorRT | amd64 |
| NVIDIA (CUDA 12) | `nvidia-cuda12` | NVENC / NVDEC + CUDA 12 | amd64 |
| AMD | `amd` | Mesa VA-API + OpenCL | amd64 |

Speichere das passende Override neben deiner `docker-compose.yml`:

::: code-group

```yaml [docker-compose.intel.yml]
name: cameraui
services:
  cameraui:
    image: ghcr.io/cameraui/camera.ui:intel
    devices:
      - /dev/dri:/dev/dri
```

```yaml [docker-compose.nvidia.yml]
name: cameraui
services:
  cameraui:
    image: ghcr.io/cameraui/camera.ui:nvidia
    environment:
      - NVIDIA_VISIBLE_DEVICES=all
      - NVIDIA_DRIVER_CAPABILITIES=all
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu, compute, video, utility]
```

```yaml [docker-compose.amd.yml]
name: cameraui
services:
  cameraui:
    image: ghcr.io/cameraui/camera.ui:amd
    devices:
      - /dev/dri:/dev/dri
```

:::

Beide Dateien zusammen starten (hier Intel):

```bash
docker compose -f docker-compose.yml -f docker-compose.intel.yml up -d
```

Die NVIDIA-Flavors benötigen zusätzlich das [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) auf dem Host. `nvidia` bringt CUDA 13 mit und braucht einen NVIDIA-Treiber ab 580, das deckt auch RTX-50xx-Karten ab. `nvidia-cuda12` bleibt für ältere Treiber bei CUDA 12 und gehört zum ONNX-Legacy-Plugin. `nvidia-tensorrt` bringt zusätzlich die TensorRT-Runtime mit (rund 2 GB) für den tensorrt-Provider des ONNX-Plugins. Fertige compose-Dateien für jeden Flavor liegen im Repository [`cameraui/docker`](https://github.com/cameraui/docker).

Host-Treiber, Device-Passthrough für KI-Beschleuniger (Coral, Hailo, Intel NPU) und die Prüfung: [Hardware-Beschleunigung](/de/install/hardware-acceleration).

## Netzwerk

Host-Networking (der compose-Standard) wird empfohlen: camera.ui braucht es für mDNS / Bonjour (HomeKit-Pairing, ONVIF-Suche) und die WebRTC-Live-Ansicht. Ohne veröffentlichst du die [Ports](#ports) explizit.

## Speicher für Aufnahmen

Standardmäßig liegen Aufnahmen im `/data`-Volume. Für eine eigene Disk bindest du sie ein und richtest den NVR darauf aus:

```yaml
    volumes:
      - cameraui-data:/data
      - /mnt/recordings:/recordings
    environment:
      - CAMERAUI_PLUGIN_NVR_STORAGE_PATH=/recordings
```

Nutze für `/recordings` eine dedizierte lokale Disk, keine Netzwerkfreigabe. Siehe [Systemanforderungen](/de/intro/requirements#speicher-fur-aufnahmen).

## Workers

Ein Worker ist eine zweite Maschine, die Kamera-Arbeit (Decoding, Erkennung, Plugins) von deinem Hauptserver übernimmt. Er hat keine eigene UI und keine eigene Streaming-Engine. Er nutzt dasselbe Image wie der Server, gestartet im Worker-Modus mit `CAMERA_UI_WORKER=true`.

Aktiviere zuerst Workers auf dem Hauptserver und generiere dort einen Pairing-Code. compose-Datei, Umgebungsvariablen und Kamera-Zuweisung: [Worker](/de/admin/workers#worker-in-docker).

`CAMERA_UI_WORKER_CAPABILITIES` legt fest, was der Worker übernimmt: `frameDecoding` für Decoding und Erkennung, `pluginHost` für das Ausführen von Plugins. Ohne den Wert bietet der Worker beides an.

## Ports

camera.ui nutzt diese Ports (durch Host-Networking bereits abgedeckt):

| Port | Proto | Zweck |
|---|---|---|
| 3443 | tcp | HTTPS UI / API |
| 2000 | tcp | go2rtc |
| 2001 | tcp | RTSP |
| 2002 | tcp | SRTP |
| 2003 | tcp | RTMP |
| 2004 | tcp/udp | WebRTC |
| 1883 | tcp | MQTT-Broker, nur wenn du den eingebauten aktivierst |

WebRTC-Medien laufen über UDP auf 2004, TCP auf demselben Port ist der Fallback. Ohne Host-Networking beide mappen.

## Daten & Backups

Der gesamte Zustand liegt im `cameraui-data`-Volume: Konfiguration, Datenbank, Aufnahmen und TLS-Zertifikate. Siehe [Backup & Wiederherstellung](/de/admin/backup).

Um Plugins aus einer privaten Registry oder einem Mirror zu installieren, mounte deine `.npmrc` nach `/root/.npmrc`, siehe [Private Registry oder Mirror](/de/plugins/#private-registry-oder-mirror).

## Aktualisieren

Ein neues Image aktualisiert nur das Image (OS, GPU-Bibliotheken, Launcher), nicht den Server im Volume. Aktualisiere den Server über die [Updates-Seite](/de/install/updating#die-updates-seite) oder führe `cameraui update-server -H /data` im Container aus und starte ihn neu. Das Image:

```bash
docker compose pull
docker compose up -d
```

Details unter [Aktualisieren](/de/install/updating).
