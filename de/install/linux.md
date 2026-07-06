---
title: Linux (Bare-Metal)
---

# Linux (Bare-Metal)

Für Always-on-Server ohne Docker: camera.ui wird über npm installiert und läuft als systemd-Service. Ubuntu 24.04 (oder neuer) ist die getestete Basis. Siehe [Systemanforderungen](/de/intro/requirements).

## Voraussetzungen

- 64-bit-Linux (x64 oder arm64) mit systemd
- **Node.js 24**, z.B. via [NodeSource](https://github.com/nodesource/distributions):

  ```bash
  curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

Das war's. Alles andere (FFmpeg, go2rtc und eine portable Python-Runtime für die Erkennungs-Plugins) lädt und verwaltet camera.ui selbst.

## Installation

```bash
sudo npm install -g camera.ui
sudo cameraui install --user cameraui
```

`cameraui install` legt den Service-User an, falls er nicht existiert, registriert einen systemd-Service namens `cameraui` und startet ihn beim Boot. Der erste Start lädt und installiert den Server, gib ihm also ein paar Minuten und schau mit `cameraui logs` zu. Die Web-UI läuft danach auf `https://<host>:3443`.

Braucht der Service-User GPU-Zugriff für Hardware-Beschleunigung, füge ihn den `video`/`render`-Gruppen deiner Distribution hinzu (per `--group` beim Install oder danach mit `usermod -aG`).

## Service verwalten

```bash
cameraui status     # Service-Zustand
cameraui logs       # Logs verfolgen
cameraui restart    # ebenso: start / stop
sudo cameraui update-server            # auf das neueste Server-Release aktualisieren
sudo cameraui update-server 1.2.3      # oder eine bestimmte Version pinnen
```

camera.ui aktualisiert den Server auch über die Web-UI; `update-server` ist das CLI-Pendant.

## Daten

Alles liegt im Home des Service-Users unter `~/.camera.ui` (Config, Datenbank, Aufnahmen, TLS-Zertifikate). Das ist das Verzeichnis fürs Backup. Ein anderer Ort lässt sich beim Install mit `-H <pfad>` setzen.

## Hardware-Beschleunigung

Video-Beschleunigung ist [automatisch](/de/install/hardware-acceleration), auf Bare-Metal liefert aber der Host die Treiber, die die Docker-Images sonst mitbringen:

- **Intel-GPU:** `sudo apt install intel-media-va-driver-non-free` (VA-API/QSV)
- **AMD-GPU:** `sudo apt install mesa-va-drivers`
- **NVIDIA:** nur der normale Treiber (z.B. `sudo ubuntu-drivers install`); das Container Toolkit ist Docker-spezifisch, hier nicht nötig
- **Coral Edge TPU:** die `libedgetpu`-Runtime plus (bei PCIe/M.2) der gasket-Kernel-Treiber, siehe [Coral-Abschnitt](/de/install/hardware-acceleration#coral-edge-tpu)
- **Hailo:** der Kernel-Treiber, siehe [Hailo-Abschnitt](/de/install/hardware-acceleration#hailo-8-hailo-8l)

Device-Passthrough braucht es nirgends. Bare-Metal sieht die Hardware direkt, und camera.ui greift sie automatisch ab. Die Erkennungs-Plugins loggen, was sie gefunden haben (`Available devices: …`).

## Deinstallation

```bash
sudo cameraui uninstall        # entfernt den systemd-Service
sudo npm remove -g camera.ui
```

Das Datenverzeichnis (`~/.camera.ui`) bleibt unangetastet.
