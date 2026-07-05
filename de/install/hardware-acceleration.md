---
title: Hardware-Beschleunigung
---

# Hardware-Beschleunigung

camera.ui beschleunigt zwei Dinge: die **Video-Pipeline** (Dekodieren der Kamera-Streams für Erkennung, Live-Ansicht und Snapshots sowie Enkodieren fürs Streaming) und die **KI-Inferenz** (Objekterkennung und alles, was darauf aufbaut).

**Video-Beschleunigung ist auf jeder Plattform automatisch.** camera.ui prüft die Hardware zur Laufzeit, wählt das beste verfügbare Backend und fällt auf Software zurück, wenn keins da ist, sodass es nichts zu konfigurieren gibt. Auch KI-Beschleuniger arbeiten automatisch, sobald die Hardware erreichbar ist; unter Docker heißt das: das Device einmal durchreichen (siehe unten).

## Was läuft wo

| Plattform | Video-Pipeline (automatisch) | KI-Backends |
|---|---|---|
| **macOS** (Desktop-App, Intel & Apple Silicon) | VideoToolbox (Apple GPU + Media Engine) | CoreML (Apple GPU + **Neural Engine**), ONNX |
| **Windows** (Desktop-App, x64) | NVIDIA (CUDA/NVENC), Intel (QSV) und jede GPU via Direct3D 11/12 | OpenVINO (Intel GPU/NPU), ONNX (NVIDIA CUDA) |
| **Linux x64** (Docker, bare-metal, Proxmox) | NVIDIA (CUDA/NVENC), Intel (VA-API/QSV), AMD (VA-API), dazu Vulkan/OpenCL | OpenVINO (Intel GPU/NPU), ONNX (CUDA/TensorRT), NCNN (Vulkan), Coral, Hailo |
| **Linux arm64** (Raspberry Pi, Rockchip) | Rockchip (RKMPP), VA-API, Vulkan | Coral, Hailo, NCNN |

Die Tabelle zeigt, was camera.ui nutzen **kann**. Der passende GPU-Treiber muss trotzdem auf dem Host installiert sein. camera.ui probiert beim Start jedes Backend aus und wählt nur, was wirklich funktioniert; alles, dessen Treiber fehlt, wird still übersprungen und erzeugt nie einen Fehler.

Auf der **Desktop-App** gibt es nichts einzurichten: macOS bringt die Video-Beschleunigung als Teil des Betriebssystems mit, und unter Windows kommt der Grafiktreiber mit dem System. Die Hardware wird automatisch erkannt, und die Erkennungs-Plugins loggen, was sie gefunden haben (`Available devices: …`) und worauf jedes Modell läuft.

Der Rest dieser Seite ist für **Linux und Docker**, wo Hardware die Container-Grenze überwinden muss. Das sind immer dieselben drei Schritte:

1. **Host-Treiber.** Der kernelseitige Treiber muss auf dem Host installiert sein (der einzige Teil, den ein Docker-Image nie mitliefern kann).
2. **Device-Passthrough.** Der Device-Node kommt in den `devices:`-Abschnitt deiner Compose-Datei.
3. **Verifizieren.** Der Container sagt dir, was tatsächlich angekommen ist.

GPUs wählst du über den passenden [Image-Flavor](/de/install/docker#hardware-beschleunigung); KI-Beschleuniger (Coral, Hailo, Intel NPU) funktionieren mit **jedem** Flavor, da die Laufzeit-Bibliotheken bereits in jedem Image enthalten sind.

## Host prüfen

Das [`cameraui/docker`](https://github.com/cameraui/docker)-Repository enthält einen Host-Helfer, der deine Maschine diagnostiziert und die Treiber installiert, die mehr als einen Paketmanager brauchen:

```bash
curl -fsSLO https://raw.githubusercontent.com/cameraui/docker/main/scripts/host/cameraui-host.sh
sudo bash cameraui-host.sh check     # read-only: Treiber, Docker-Runtime, Device-Nodes
sudo bash cameraui-host.sh nvidia    # NVIDIA Container Toolkit installieren
sudo bash cameraui-host.sh hailo     # Hailo-PCIe-Kernel-Treiber bauen + installieren
sudo bash cameraui-host.sh coral     # gasket/apex-Treiber installieren (PCIe/M.2-Coral)
```

`check` gibt für jede Beschleuniger-Klasse eine ✓/✗-Zeile mit dem passenden Fix aus. Führe es zuerst aus. Es sagt dir, welche der folgenden Abschnitte deine Maschine betreffen.

## Aus dem Container verifizieren

Bei jedem Start loggt der Container, welche Device-Nodes er tatsächlich sieht:

```
[setup] accelerator devices: /dev/dri ✓ · /dev/kfd ✗ · /dev/accel ✗ · /dev/apex_0 ✓ · /dev/hailo0 ✗ · /dev/bus/usb ✗ · nvidia ✗
```

Zeigt ein Device hier `✗`, existiert aber auf dem Host, fehlt es in deiner Compose-`devices:`-Liste. Die Erkennungs-Plugins loggen zusätzlich, was sie gefunden haben (`Available devices: …`) und worauf jedes Modell wirklich läuft (`Loaded model: … (AUTO -> CPU)`), und zeigen es unter **Active Hardware** in ihren Plugin-Einstellungen.

## Schnellreferenz

| Hardware | Beschleunigt | Host-Treiber | An den Container durchreichen |
|---|---|---|---|
| Intel / AMD GPU | Video (VA-API/QSV) + OpenCL/Vulkan-Inferenz | im Kernel (i915/amdgpu) | `/dev/dri` |
| NVIDIA GPU | Video (NVENC/NVDEC) + CUDA | NVIDIA-Treiber + Container Toolkit | über die Toolkit-Runtime |
| Coral Edge TPU (PCIe/M.2) | Objekterkennung | gasket/apex (`coral`-Befehl) | `/dev/apex_0` |
| Coral Edge TPU (USB) | Objekterkennung | keiner | `/dev/bus/usb` |
| Hailo-8 / Hailo-8L | Objekterkennung | hailo_pci + Firmware (`hailo`-Befehl) | `/dev/hailo0` |
| Intel NPU (Core Ultra) | OpenVINO-Inferenz | [intel/linux-npu-driver](https://github.com/intel/linux-npu-driver) | `/dev/accel` |
| AMD ROCm | Compute | ROCm-Stack | `/dev/kfd` + `/dev/dri` |

## Intel / AMD GPU

Der Treiber ist Teil des Linux-Kernels, auf dem Host ist also nichts zu installieren. Nutze den `intel`- oder `amd`-Flavor und reiche `/dev/dri` durch:

```yaml
    devices:
      - /dev/dri:/dev/dri
```

::: tip Ältere Intel-iGPUs (vor Gen12, z. B. Apollo Lake)
Die Video-Dekodierung, die die Detection-Pipeline mit Frames versorgt, ist auch auf alten iGPUs voll beschleunigt. Intels OpenCL-Compute-Runtime unterstützt diese Generationen aber nicht mehr, daher fällt **OpenVINO- und OpenCL-Inferenz dort auf die CPU zurück**, und die Plugins loggen das. Für schnelle Erkennung auf solchen Maschinen ergänze einen Coral oder Hailo.
:::

## NVIDIA GPU

Zwei host-seitige Bausteine: der NVIDIA-Treiber (z. B. `sudo ubuntu-drivers install`) und das Container Toolkit, das die Treiber-Bibliotheken in Container injiziert. `sudo bash cameraui-host.sh nvidia` installiert das Toolkit und registriert es bei Docker. Nutze dann das `nvidia`-Flavor-Override von der [Docker-Seite](/de/install/docker#hardware-beschleunigung). `NVIDIA_DRIVER_CAPABILITIES=all` aktiviert auch die OpenCL- und Vulkan-Pfade, die die Erkennungs-Plugins nutzen können.

## Coral Edge TPU

Die Laufzeit-Bibliothek (`libedgetpu`) ist bereits in jedem Image-Flavor enthalten. Nur die Host-Seite unterscheidet sich je nach Bauform:

- **PCIe / M.2.** Braucht den gasket/apex-Kernel-Treiber. `sudo bash cameraui-host.sh coral` installiert ihn (ein gepflegter Community-Build, da Googles Original-Paket auf Kerneln ≥ 6.13 nicht mehr kompiliert). Danach das Device durchreichen:

  ```yaml
      devices:
        - /dev/apex_0:/dev/apex_0
  ```

- **USB.** Kein Treiber nötig, nur den USB-Bus durchreichen:

  ```yaml
      devices:
        - /dev/bus/usb:/dev/bus/usb
  ```

Ohne erreichbaren TPU läuft das Coral-Plugin auf der CPU und sagt das in seinem Log. Prüfe seine `Available devices:`-Zeile, falls die Erkennung langsam wirkt.

## Hailo-8 / Hailo-8L

Der Kernel-Treiber wird auf dem Host aus dem Quellcode gebaut: `sudo bash cameraui-host.sh hailo` installiert die Build-Abhängigkeiten, kompiliert den Treiber und installiert Firmware und udev-Regeln. **Danach neu starten**, damit die Firmware lädt, dann das Device durchreichen:

```yaml
    devices:
      - /dev/hailo0:/dev/hailo0
```

Die Userspace-Runtime liefert das Hailo-Plugin selbst mit. Sonst ist nichts zu installieren.

## Intel NPU (Core Ultra)

Die NPU braucht einen Host-Treiber von [intel/linux-npu-driver](https://github.com/intel/linux-npu-driver). Sobald `/dev/accel` auf dem Host existiert, durchreichen:

```yaml
    devices:
      - /dev/accel:/dev/accel
```

Das OpenVINO-Plugin listet dann `NPU` in seiner `Available devices:`-Log-Zeile und in seiner Device-Einstellung.
