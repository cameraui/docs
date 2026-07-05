# Systemanforderungen

Was camera.ui braucht, hängt davon ab, **wie du es betreibst** und **was du von ihm verlangst**. Ein paar Kameras live ansehen ist leichtgewichtig. Viele Kameras rund um die Uhr mit KI-Erkennung aufzunehmen braucht echte Hardware. Nutze die Tabelle unten als Orientierung und skaliere mit Kameraanzahl, Aufnahme und Erkennung nach oben.

## Auf einen Blick

| | Minimum | Empfohlen |
|---|---|---|
| CPU | 4 moderne Kerne | Apple Silicon (M1+), Intel N100 oder besser |
| RAM | 8 GB | 16 GB |
| Hardware-Beschleunigung | keine (Software) | eine aktuelle GPU / Beschleuniger oder Apple Silicon |
| Disk (App) | ~16 GB SSD | SSD |
| Aufnahmen | eine eigene, dedizierte Disk, passend zu deinen Kameras und der Aufbewahrung | |

::: tip Bewährte Hardware
Ein kleiner **Intel N100** Mini-PC oder ein **Apple-Silicon-Mac (M1 oder neuer)** bewältigt ein typisches Setup (mehrere Kameras mit Aufnahme und KI-Erkennung) bei geringem Stromverbrauch. Beide eignen sich gut als leise Always-on-Server.
:::

Was den Bedarf erhöht: mehr Kameras, höhere Auflösungen, durchgehende Aufnahme und besonders **KI-Erkennung**, die mit einer unterstützten GPU, einem Beschleuniger oder Apple Silicon deutlich leichter läuft (siehe unten).

## Den Server betreiben

Du kannst den camera.ui-Server auf **Linux, macOS oder Windows** betreiben:

- **Linux.** In [Docker](/de/install/docker), auf [Proxmox](/de/install/proxmox) oder [Bare-Metal](/de/install/linux). Ubuntu 24.04 (oder neuer) ist die getestete Basis. Eine Bare-Metal-Installation benötigt Node.js 24 und Python 3.11; die Docker-Images bringen alles mit.
- **macOS.** Über die [Desktop-App](/de/install/desktop) im Server-Modus. Apple-Silicon-Macs (M1 und neuer) passen hervorragend: geringer Stromverbrauch, mit voller Hardware-Beschleunigung inklusive Neural Engine.
- **Windows.** Über die [Desktop-App](/de/install/desktop) im Server-Modus.

### Hardware-Beschleunigung

Erkennung und Video-Verarbeitung laufen auf jeder CPU in Software, aber eine GPU, ein Beschleuniger oder Apple Silicon senkt die CPU-Last deutlich, was zählt, sobald du mehrere Kameras hast oder KI-Erkennung nutzt.

| Plattform | Beschleunigung | Hinweis |
|---|---|---|
| Apple Silicon | GPU + Neural Engine + VideoToolbox | macOS, über die Desktop-App |
| Windows | Native GPU-Videobeschleunigung | Desktop-App · x86-64 |
| Intel | Quick Sync / VA-API (+ OpenCL) | `intel`-Docker-Flavor · x86-64 |
| NVIDIA | NVENC / NVDEC + CUDA | `nvidia`-Docker-Flavor · x86-64 |
| AMD | Mesa VA-API (+ OpenCL) | `amd`-Docker-Flavor · x86-64 |
| Nur CPU | Software | `cpu`-Flavor · x86-64 + arm64 |
| Coral Edge TPU | dedizierte TPU | über das Coral-Plugin · Linux · x64 + arm64 |
| Hailo-8 / Hailo-8L | dedizierte NPU | über das Hailo-Plugin · Linux · x64 + arm64 |

Wähle auf Linux den [Docker-Flavor](/de/install/docker), der zu deiner GPU passt. Auf macOS und Windows nutzt die Desktop-App automatisch deine GPU für hardware-beschleunigtes Video. Dein [KI-Erkennungs-Plugin](/de/detection/ai-backends) sollte zu deiner Hardware passen: CoreML auf Apple Silicon, ein Intel-/NVIDIA-Backend oder ein Coral-/Hailo-Edge-Beschleuniger unter Linux.

## Speicher für Aufnahmen

[Aufnahmen](/de/recording/storage) können groß werden. Wie viel Platz du brauchst, hängt von Kameraanzahl, Auflösung und Bitrate, [Aufnahme-Modus](/de/recording/) und der Aufbewahrungsdauer ab.

Nutze für Aufnahmen eine **dedizierte lokale Disk**, getrennt von der System-Disk und keine Netzwerkfreigabe (NAS). Durchgehende Aufnahme schreibt permanent, und eine lokale Disk ist dafür deutlich zuverlässiger und reaktionsschneller.

camera.ui zeigt für jede Kamera die Aufnahme-Bandbreite (MB pro Stunde) und lässt dich den Verbrauch mit einem **Speicher-Kontingent** und einem **Aufbewahrungs**-Zeitfenster begrenzen, damit der Speicher nie unerwartet volläuft.

## Desktop-App

Die [Desktop-App](/de/install/desktop) läuft auf **macOS, Windows und Linux**. Auf macOS wird Version 15 oder neuer empfohlen, da das Betriebssystem sie verlangt, damit die App Kameras in deinem lokalen Netzwerk erreichen kann. Im Server-Modus betreibt die Desktop-App den vollen Server, dann gelten die obigen Anforderungen; als Viewer ist sie leichtgewichtig.

## Mobile Apps

Die [Mobile-Apps](/de/install/mobile) sind Viewer mit minimalen Anforderungen:

- **iOS** 17.4 oder neuer
- **Android** 8.0 oder neuer (API 26)

## Kameras

Nahezu jede IP-Kamera funktioniert: alles, was einen **RTSP**- oder **ONVIF**-Stream liefert (H.264 oder H.265). Lokale Kameras wie diese liefern die besten Ergebnisse. Die vollständige Liste findest du unter [Verbindungs-Protokolle](/de/cameras/protocols).[^cloud]

[^cloud]: Kameras, die von einer Hersteller-Cloud abhängen (etwa Ring oder Nest), lassen sich verbinden, entweder direkt oder über ein Plugin, sind aber **nicht empfehlenswert** und **nicht durch den Support abgedeckt**. Nutze lokale RTSP-/ONVIF-Kameras für ein zuverlässiges Erlebnis.
