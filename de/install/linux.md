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

`cameraui install` legt den Service-User an, falls er nicht existiert, registriert einen systemd-Service namens `cameraui` und startet ihn beim Boot. Der erste Start lädt und installiert den Server, gib ihm also ein paar Minuten und schau in einem zweiten Terminal mit `sudo cameraui logs --user cameraui` zu. Die Web-UI läuft danach auf `https://<host>:3443`.

Braucht der Service-User GPU-Zugriff für Hardware-Beschleunigung, füge ihn den `video`/`render`-Gruppen deiner Distribution hinzu. `--group video` greift nur, wenn der Install den User anlegt. Existiert der User schon, führe `sudo usermod -aG video cameraui` aus und starte den Service neu.

## Worker-Modus

Damit diese Maschine als [Worker](/de/admin/instances-workers) für einen anderen camera.ui-Server läuft, hänge `--worker` an den Install-Befehl:

```bash
sudo cameraui install --user cameraui --worker
```

Das Flag wird mit dem Service gespeichert, die Maschine kommt nach einem Reboot also wieder als Worker hoch. Erzeuge auf dem Haupt-Server einen Pairing-Code, trag das Snippet wie auf der [Worker-Seite](/de/admin/instances-workers#einen-worker-koppeln) beschrieben in die Config dieser Maschine ein und führe dann `sudo cameraui restart --user cameraui` aus.

## Service verwalten

```bash
cameraui status                          # Service-Zustand
sudo cameraui logs --user cameraui       # Logs verfolgen
sudo cameraui restart --user cameraui    # ebenso: start / stop
sudo cameraui update-server              # auf das neueste Server-Release aktualisieren
sudo cameraui update-server 1.2.3        # oder eine bestimmte Version pinnen
```

Der Service läuft unter einem eigenen User, alles außer `status` braucht also sudo und dasselbe `--user`, mit dem du installiert hast. Hast du mit `-H <pfad>` installiert, gib stattdessen das an.

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
