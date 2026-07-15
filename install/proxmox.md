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
| `STORAGE` | auto-detect | rootfs storage (prefers `local-lvm`, `local-zfs`, `local`, otherwise the first active storage that can hold a container rootfs) |
| `TEMPLATE_STORAGE` | `local` | storage the LXC template is downloaded to (needs content type "Container template") |
| `FLAVOR` | `cpu` | `cpu`, `intel` or `amd` (picks the [image flavor](/install/docker#hardware-acceleration)); `nvidia` is [experimental](#nvidia-in-an-lxc-experimental) |
| `GPU_PASSTHROUGH` | `1` when flavor ≠ cpu | pass `/dev/dri` into the container |
| `TZ` | host timezone | timezone inside the container |

Example for an Intel machine: `FLAVOR=intel bash install-cameraui-lxc.sh`

## Hardware acceleration

- **Intel / AMD iGPU.** Set `FLAVOR=intel` (or `amd`). The script passes the GPU render node into the container via Proxmox's device passthrough and wires it through to Docker. Nothing else to configure; the details live on the [Hardware acceleration](/install/hardware-acceleration) page.
- **NVIDIA.** Use a **VM with PCIe passthrough** instead of an LXC. Inside the VM you get a plain Linux machine and follow the standard [Docker setup](/install/docker) with the `nvidia` flavor. An LXC would require keeping the NVIDIA driver on the Proxmox host and the user-space libraries inside the container in permanent version lockstep. A VM avoids that entirely, and Proxmox's VM passthrough is excellent. The trade-off: the VM monopolizes the card. If other services on the host need the same GPU (Ollama, Jellyfin), see [NVIDIA in an LXC](#nvidia-in-an-lxc-experimental) below.
- **AI accelerators (Coral, Hailo).** Same pattern as everywhere: install the [host driver](/install/hardware-acceleration#check-your-host) on the Proxmox host, then pass the device node (`/dev/apex_0`, `/dev/hailo0`) into the container.

### NVIDIA in an LXC (experimental)

`FLAVOR=nvidia` shares the card between the container and other services on the host, which a VM cannot do. The catch is a hard version coupling: the NVIDIA user-space libraries inside the container must exactly match the host's kernel driver, after every driver update.

It needs a working NVIDIA driver on the Proxmox host first (`.run` installer with `--dkms` plus `pve-headers`; `nvidia-smi` on the host must work), and the installed driver version must exist on `download.nvidia.com`. Then:

```bash
FLAVOR=nvidia bash install-cameraui-lxc.sh
```

The script passes all `/dev/nvidia*` device nodes into the container, installs the matching user-space driver (`--no-kernel-module`) plus the NVIDIA Container Toolkit (with `no-cgroups=true`, because an unprivileged container cannot manage device cgroups), and registers a boot-time sync service that re-installs the matching user space after host driver updates. Verify with:

```bash
pct exec <CTID> -- docker exec cameraui nvidia-smi
```

::: warning Experimental
This path depends on NVIDIA's installer archive and on the host driver staying healthy; after a host driver update the container needs a reboot to re-sync. If it breaks, the VM route always works. Reports and fixes are welcome in the [docker repo](https://github.com/cameraui/docker).
:::

## Recordings on a dedicated disk or NAS

Recordings default to the container's own volume. Point them at a bigger disk, a NAS share, or a merged pool by handing that storage into the container and setting the NVR's storage path to it.

Unprivileged containers cannot mount NFS/CIFS shares themselves. Mount the share on the **Proxmox host** and hand it into the container as a mount point:

```bash
pct set <CTID> -mp0 /mnt/nas/recordings,mp=/mnt/recordings
```

Then set the NVR **Storage Path** to `/mnt/recordings` (Settings → Recordings → Storage), or see the [storage section](/install/docker#storage-for-recordings) of the Docker page.

::: warning FUSE mounts (mergerfs, rclone) need extra care
A FUSE mount (such as a **mergerfs** pool merging several drives) does not propagate into an (unprivileged) container the way a normal filesystem does. If the FUSE mount isn't active on the host **before the container starts**, the container sees the empty mountpoint on the host's root disk instead of the pool. Recordings then land on the small OS disk and get rotated away within minutes, even though the pool has terabytes free.

Mount the pool on the host **before** the container starts (e.g. via an fstab entry or a systemd unit ordered `Before=pve-container@<CTID>.service`), and make sure the mount is shared into the container. Then always **verify from inside the container**.
:::

## Verify your storage size

After setting a custom storage path, confirm the container really sees the full volume. This one check catches almost every mount problem:

```bash
pct exec <CTID> -- df -h /mnt/recordings
```

The reported size must match your real disk or pool. If it shows the small container root size instead, the mount didn't propagate. Recheck the steps above. The NVR also logs its resolved storage and size on every start, and shows a warning in **Settings → Recordings** when the volume is unexpectedly small.

## Verify

On every start the container logs which devices actually arrived. See [Verify from the container](/install/hardware-acceleration#verify-from-the-container). The camera.ui UI is available at `https://<container-ip>:3443` (the script prints the IP at the end; the container also shows up with its hostname in your router's device list).
