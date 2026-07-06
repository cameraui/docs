---
title: Proxmox
---

# Proxmox

camera.ui runs on Proxmox VE inside an LXC container that hosts Docker. One command on the Proxmox host sets up everything: the container, Docker, and camera.ui.

::: tip Why an LXC and not a VM?
An LXC can **share** the iGPU: `/dev/dri` stays available to the host and other containers at the same time, while a VM with PCIe passthrough monopolizes the GPU. Add the lower overhead and this is the standard pattern for NVRs on Proxmox. A VM is the better choice for NVIDIA cards (see below).
:::

## Quick start

Run this on the Proxmox host (as root):

```bash
curl -fsSLO https://raw.githubusercontent.com/cameraui/docker/main/proxmox/install-cameraui-lxc.sh
bash install-cameraui-lxc.sh
```

The script downloads the Ubuntu 24.04 LXC template, creates an **unprivileged** container with nesting (the recommended way to run Docker on Proxmox, since privileged containers can no longer load Docker's AppArmor profile on current Proxmox releases), installs Docker inside it, deploys camera.ui via Docker Compose and prints the URL of the web UI. Tested with Proxmox VE 9.

Everything is tunable via environment variables:

| Variable | Default | Meaning |
|---|---|---|
| `CTID` | next free ID | container ID |
| `CT_HOSTNAME` | `cameraui` | container hostname |
| `CORES` / `RAM_MB` / `DISK_GB` | `4` / `4096` / `16` | container resources |
| `BRIDGE` | `vmbr0` | network bridge (container gets its IP via DHCP) |
| `STORAGE` | `local-lvm` | rootfs storage |
| `FLAVOR` | `cpu` | `cpu`, `intel` or `amd` (picks the [image flavor](/install/docker#hardware-acceleration)) |
| `GPU_PASSTHROUGH` | `1` when flavor ≠ cpu | pass `/dev/dri` into the container |

Example for an Intel machine: `FLAVOR=intel bash install-cameraui-lxc.sh`

## Hardware acceleration

- **Intel / AMD iGPU.** Set `FLAVOR=intel` (or `amd`). The script passes the GPU render node into the container via Proxmox's device passthrough and wires it through to Docker. Nothing else to configure; the details live on the [Hardware acceleration](/install/hardware-acceleration) page.
- **NVIDIA.** Use a **VM with PCIe passthrough** instead of an LXC. Inside the VM you get a plain Linux machine and follow the standard [Docker setup](/install/docker) with the `nvidia` flavor. An LXC would require keeping the NVIDIA driver on the Proxmox host and the user-space libraries inside the container in permanent version lockstep. A VM avoids that entirely, and Proxmox's VM passthrough is excellent.
- **AI accelerators (Coral, Hailo).** Same pattern as everywhere: install the [host driver](/install/hardware-acceleration#check-your-host) on the Proxmox host, then pass the device node (`/dev/apex_0`, `/dev/hailo0`) into the container.

## Recordings on a NAS

Unprivileged containers cannot mount NFS/CIFS shares themselves. Mount the share on the **Proxmox host** and hand it into the container as a mount point:

```bash
pct set <CTID> -mp0 /mnt/nas/recordings,mp=/mnt/recordings
```

Then bind `/mnt/recordings` into the camera.ui container (see the [storage section](/install/docker#storage-for-recordings) of the Docker page).

## Verify

On every start the container logs which devices actually arrived. See [Verify from the container](/install/hardware-acceleration#verify-from-the-container). The camera.ui UI is available at `https://<container-ip>:3443` (the script prints the IP at the end; the container also shows up with its hostname in your router's device list).
