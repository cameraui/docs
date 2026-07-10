---
title: Proxmox
---

# Proxmox

camera.ui läuft auf Proxmox VE in einem LXC-Container, der Docker beherbergt. Ein Befehl auf dem Proxmox-Host richtet alles ein: Container, Docker und camera.ui.

::: tip Warum ein LXC und keine VM?
Ein LXC kann die iGPU **teilen**: `/dev/dri` bleibt gleichzeitig für den Host und andere Container nutzbar, während eine VM mit PCIe-Passthrough die GPU monopolisiert. Zusammen mit dem geringeren Overhead ist das das Standard-Muster für NVRs auf Proxmox. Für NVIDIA-Karten ist eine VM die bessere Wahl (siehe unten).
:::

## Schnellstart

Auf dem Proxmox-Host (als root) ausführen:

```bash
curl -fsSLO https://raw.githubusercontent.com/cameraui/docker/main/proxmox/install-cameraui-lxc.sh
bash install-cameraui-lxc.sh
```

Das Script lädt das Ubuntu-24.04-LXC-Template, erstellt einen **unprivilegierten** Container mit Nesting (der empfohlene Weg für Docker auf Proxmox, da privilegierte Container auf aktuellen Proxmox-Versionen Dockers AppArmor-Profil nicht mehr laden können), installiert Docker darin, deployt camera.ui via Docker Compose und gibt die URL der Web-UI aus. Getestet mit Proxmox VE 9.

Alles ist über Umgebungsvariablen einstellbar:

| Variable | Default | Bedeutung |
|---|---|---|
| `CTID` | nächste freie ID | Container-ID |
| `CT_HOSTNAME` | `cameraui` | Container-Hostname |
| `CORES` / `RAM_MB` / `DISK_GB` | `4` / `4096` / `16` | Container-Ressourcen |
| `BRIDGE` | `vmbr0` | Netzwerk-Bridge (Container bekommt seine IP per DHCP) |
| `STORAGE` | auto-detect | rootfs-Storage (nimmt den ersten aktiven Storage, der ein Container-rootfs aufnehmen kann) |
| `FLAVOR` | `cpu` | `cpu`, `intel` oder `amd` (wählt den [Image-Flavor](/de/install/docker#hardware-beschleunigung)) |
| `GPU_PASSTHROUGH` | `1` wenn Flavor ≠ cpu | reicht `/dev/dri` in den Container |
| `TZ` | Zeitzone des Hosts | Zeitzone im Container |

Beispiel für eine Intel-Maschine: `FLAVOR=intel bash install-cameraui-lxc.sh`

## Hardware-Beschleunigung

- **Intel / AMD iGPU.** `FLAVOR=intel` (oder `amd`) setzen. Das Script reicht den GPU-Render-Node über Proxmox' Device-Passthrough in den Container und verdrahtet ihn bis zu Docker durch. Sonst nichts zu konfigurieren; die Details stehen auf der Seite [Hardware-Beschleunigung](/de/install/hardware-acceleration).
- **NVIDIA.** Nutze eine **VM mit PCIe-Passthrough** statt eines LXC. In der VM hast du ein normales Linux und folgst dem Standard-[Docker-Setup](/de/install/docker) mit dem `nvidia`-Flavor. Ein LXC würde erfordern, den NVIDIA-Treiber auf dem Proxmox-Host und die Userspace-Bibliotheken im Container dauerhaft versionsgleich zu halten. Eine VM vermeidet das komplett, und Proxmox' VM-Passthrough ist ausgezeichnet. Der Trade-off: Die VM monopolisiert die Karte. Brauchen andere Dienste auf dem Host dieselbe GPU (Ollama, Jellyfin), geht NVIDIA auch im LXC: die `/dev/nvidia*`-Device-Nodes durchreichen, im Container exakt die Treiberversion des Hosts mit `--no-kernel-module` installieren und für Docker das NVIDIA Container Toolkit im LXC ergänzen. Jedes Treiber-Update muss danach auf Host und Container gleichzeitig nachgezogen werden; deshalb automatisiert das Install-Script diesen Weg nicht.
- **KI-Beschleuniger (Coral, Hailo).** Gleiches Muster wie überall: den [Host-Treiber](/de/install/hardware-acceleration#host-prüfen) auf dem Proxmox-Host installieren, dann den Device-Node (`/dev/apex_0`, `/dev/hailo0`) in den Container reichen.

## Aufnahmen auf einer dedizierten Platte oder einem NAS

Aufnahmen landen standardmäßig auf dem eigenen Volume des Containers. Für eine größere Platte, ein NAS-Share oder einen zusammengefassten Pool reichst du diesen Speicher in den Container und setzt den NVR-Speicherpfad darauf.

Unprivilegierte Container können NFS/CIFS-Shares nicht selbst mounten. Mounte das Share auf dem **Proxmox-Host** und reiche es als Mountpoint in den Container:

```bash
pct set <CTID> -mp0 /mnt/nas/recordings,mp=/mnt/recordings
```

Setze dann den NVR-**Speicherpfad** auf `/mnt/recordings` (Einstellungen → Aufnahmen → Speicher), oder siehe den [Speicher-Abschnitt](/de/install/docker#speicher-für-aufnahmen) der Docker-Seite.

::: warning FUSE-Mounts (mergerfs, rclone) brauchen Sonderbehandlung
Ein FUSE-Mount — etwa ein **mergerfs**-Pool, der mehrere Platten zusammenfasst — propagiert **nicht** wie ein normales Dateisystem in einen (unprivilegierten) Container. Ist der FUSE-Mount nicht **vor dem Container-Start** auf dem Host aktiv, sieht der Container den leeren Mountpoint auf der Root-Disk des Hosts statt den Pool. Aufnahmen landen dann auf der kleinen OS-Platte und werden innerhalb von Minuten wieder rotiert — obwohl der Pool Terabytes frei hat.

Mounte den Pool auf dem Host **vor** dem Container-Start (z.B. per fstab-Eintrag oder systemd-Unit mit `Before=pve-container@<CTID>.service`) und stelle sicher, dass der Mount in den Container geteilt wird. Danach immer **aus dem Container heraus verifizieren**.
:::

## Speichergröße verifizieren

Nach dem Setzen eines eigenen Speicherpfads prüfen, ob der Container wirklich das volle Volume sieht — dieser eine Check fängt fast jedes Mount-Problem ab:

```bash
pct exec <CTID> -- df -h /mnt/recordings
```

Die angezeigte Größe muss zu deiner echten Platte oder deinem Pool passen. Zeigt sie stattdessen die kleine Container-Root-Größe, ist der Mount nicht propagiert — dann die Schritte oben erneut prüfen. Der NVR loggt seinen aufgelösten Speicher samt Größe außerdem bei jedem Start und zeigt in **Einstellungen → Aufnahmen** eine Warnung, wenn das Volume unerwartet klein ist.

## Verifizieren

Bei jedem Start loggt der Container, welche Devices tatsächlich angekommen sind. Siehe [Aus dem Container verifizieren](/de/install/hardware-acceleration#aus-dem-container-verifizieren). Die camera.ui-UI ist unter `https://<container-ip>:3443` erreichbar (das Script gibt die IP am Ende aus; der Container taucht außerdem mit seinem Hostnamen in der Geräteliste deines Routers auf).
