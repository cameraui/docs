# Docker

Docker ist die empfohlene Art, den camera.ui-Server auf Linux zu betreiben. Das Image basiert auf Ubuntu 24.04 und bleibt klein: Beim ersten Start lädt und installiert es den Server selbst, sodass Updates kein neues Image brauchen. Es gibt ein Image pro Hardware-Ziel, veröffentlicht als `ghcr.io/cameraui/camera.ui`.

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

Öffne dann `https://<host>:3443`. Der erste Boot lädt und installiert den Server, was ein paar Minuten dauert. Verfolge das mit `docker compose logs -f`.

Dein Browser zeigt beim ersten Besuch eine Warnung wegen des selbstsignierten Zertifikats, und die App führt dich anschließend durch die Ersteinrichtung. Was danach kommt, steht unter [Erste Schritte](/de/intro/getting-started).

::: tip Erster Boot braucht Internet
Beim ersten Start lädt der Container den Server aus der npm-Registry. Falls dein Host sie nicht auflösen kann, füge dem Service öffentliche DNS-Resolver hinzu (`1.1.1.1`, `8.8.8.8`).
:::

## Hardware-Beschleunigung

Das Standard-Image (`latest`) führt Erkennung und Video-Verarbeitung in Software aus. Für mehr Leistung wählst du den Flavor, der zu deiner Hardware passt, und legst sein Override über die Basisdatei.

| Flavor | Tag | Hardware-Beschleunigung | Arch |
|---|---|---|---|
| CPU | `latest` | Software | amd64 + arm64 |
| Intel | `intel` | Quick Sync / VA-API + OpenCL | amd64 |
| NVIDIA | `nvidia` | NVENC / NVDEC + CUDA | amd64 |
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

Starte dann beide Dateien zusammen (hier Intel):

```bash
docker compose -f docker-compose.yml -f docker-compose.intel.yml up -d
```

Der NVIDIA-Flavor benötigt zusätzlich das [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) auf dem Host. Fertige compose-Dateien für jeden Flavor liegen im Repository [`cameraui/docker`](https://github.com/cameraui/docker).

Host-Treiber, Device-Passthrough für KI-Beschleuniger (Coral, Hailo, Intel NPU) und wie du verifizierst, dass alles funktioniert, findest du auf der Seite [Hardware-Beschleunigung](/de/install/hardware-acceleration).

## Netzwerk

Host-Networking (der compose-Standard) wird empfohlen. camera.ui nutzt es für mDNS / Bonjour (HomeKit-Pairing, ONVIF-Suche) und für die WebRTC-Live-Ansicht. Falls du kein Host-Networking nutzen kannst, veröffentliche stattdessen die [Ports](#ports) unten explizit.

## Speicher für Aufnahmen

Standardmäßig liegen Aufnahmen im `/data`-Volume neben allem anderen. Um sie auf einer separaten, dedizierten Disk zu halten, binde diese ein und richte den NVR darauf aus:

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

Aktiviere Workers zuerst auf dem Hauptserver und generiere dort einen Pairing-Code. Die compose-Datei für die Worker-Maschine, ihre Umgebungsvariablen und wie du ihr Kameras zuweist, stehen unter [Worker](/de/admin/workers#worker-in-docker).

`CAMERA_UI_WORKER_CAPABILITIES` legt fest, was der Worker übernimmt: `frameDecoding` für Decoding und Erkennung, `pluginHost` für das Ausführen von Plugins. Setze mindestens einen Wert, sonst startet der Worker nicht.

## Ports

camera.ui nutzt diese Ports (durch Host-Networking bereits abgedeckt):

| Port | Proto | Zweck |
|---|---|---|
| 3443 | tcp | HTTPS UI / API |
| 2000 | tcp | go2rtc |
| 2001 | tcp | RTSP |
| 2002 | tcp | SRTP |
| 2003 | tcp | RTMP |
| 2004 | tcp | WebRTC |
| 1883 | tcp | MQTT-Broker, nur wenn du den eingebauten aktivierst |

WebRTC nutzt zusätzlich UDP auf Ports, die pro Verbindung gewählt werden. Ohne Host-Networking läuft die Live-Ansicht über TCP auf 2004.

## Daten & Backups

Der gesamte Zustand liegt im `cameraui-data`-Volume: Konfiguration, Datenbank, Aufnahmen und TLS-Zertifikate. Sichere dieses Volume, um eine Kopie zu behalten. Siehe [Backup & Wiederherstellung](/de/admin/backup).

## Aktualisieren

Der Server aktualisiert sich innerhalb der App selbst, und die gewählte Version bleibt über Image-Pulls hinweg erhalten. Um das Image selbst zu aktualisieren (OS, GPU-Bibliotheken und Launcher), ziehe es neu und erstelle den Container neu:

```bash
docker compose pull
docker compose up -d
```

Details unter [Aktualisieren](/de/install/updating).
