---
title: Troubleshooting
---

# Troubleshooting

When something isn't working, this page covers the most common issues and where to look. The **[Logs](/admin/logs)** are the best place to see what the server is actually doing.

## A camera won't connect

If a camera shows offline or won't load:

- Check the camera's **[sources](/cameras/settings)**. The Sources tab shows each stream's live status, detected codecs, and URL.
- Make sure the **stream URL and credentials** are correct. Testing the RTSP URL in a player like VLC confirms the camera itself is reachable.
- Confirm the camera is on the **same network** as the server, or otherwise reachable from it.
- For brand or discovery-based cameras, check the relevant **[protocol](/cameras/protocols)** or [plugin](/plugins/).

## Live view is black or won't play

- Check the source's **codec** in the Sources tab; very unusual codecs may need transcoding.
- Try a different **streaming mode** in the camera's [interface settings](/cameras/settings).
- Enable **[hot mode and preload](/cameras/add-camera#source-options)** on the source for faster, more reliable opening.

## Detection isn't firing

- Make sure a **motion engine** and, for objects, an **[AI backend](/detection/ai-backends)** are assigned to the camera. See [Set up sensors](/sensors/setup).
- Lower the **confidence** or **motion sensitivity** in [Settings → Detection](/cameras/settings) if events are missed.
- Check your **[zones](/cameras/zones-and-masks)** aren't excluding the area.
- Remember the **cascade**: object, face, and plate detection only run after motion or another trigger. See [Detection](/detection/).

## No notifications

- Check the **[notification settings](/notifications/)** on the device: the master switch, quiet hours, and whether the device is registered.
- Check the **camera's** notification settings: which objects, sounds, and sensors it alerts on.
- For **push to a phone**, confirm [camera.ui Cloud](/remote/cloud) is set up; push needs the subscription.

## Recording isn't working

- Recording needs an **active subscription**. See [Recording](/recording/).
- Confirm the camera's **recording mode** is set, either continuous or event.
- Check **[storage](/recording/storage)**: a full disk with **Strict** retention pauses recording until you free space.
- If **Settings → Recordings** warns that the storage volume is small, recordings are on a small disk and rotate away quickly. Either the disk really is that small, or a storage mount you expected never mounted. Check the path in **[storage](/recording/storage)**.

## Can't reach the server remotely

- In **[Settings → Remote](/remote/)**, confirm cloud access is **enabled** and the server is **registered**, with the tunnel connected.
- For a direct connection, use **Test connection** to check the address is reachable.
- The mobile apps need [camera.ui Cloud](/remote/cloud) to connect from outside your network.

## Getting more detail

- Open the **[Logs](/admin/logs)** and filter or search for the issue. You can download the log to share when asking for help.
- For deeper inspection, the **Terminal** gives a shell on the server.

## OpenVino plugin GPU detection fails

UBUNTU Bare Metal Instalation.

This error on openvino plugin logs.
ERROR: .....libOpenCL.so.1: cannot open shared object file: No such file or directory

The reason is the file libOpenCL.so.1 is not loaded and therefore wont allow the intell igpu to start
this fix is to run the followong code to install libOpenCL.so.1
 
Step 1: Install the OpenCL Loader & Intel GPU Drivers
Run the following commands in your host terminal to install libOpenCL.so.1 and the Intel Compute Runtime:
```bash
sudo apt update
sudo apt install -y ocl-icd-libopencl1 intel-opencl-icd
ocl-icd-libopencl1: Provides the missing libOpenCL.so.1 file.
```
intel-opencl-icd: Enables hardware acceleration specifically for Intel iGPUs / GPUs.

Step 2: Ensure User Permissions for the GPU
To allow the user running @camera.ui (in your case, cameraui) to access the Intel GPU rendering device, add the user to the render and video groups:
```bash
sudo gpasswd -a cameraui render
sudo gpasswd -a cameraui video
```
(If you are logged in directly as cameraui, replace cameraui with $USER).

Step 3: Refresh and Restart
Refresh the dynamic linker cache:
```bash
sudo ldconfig
```
Restart the @camera.ui process or reboot the machine for group permissions to take full effect:
```bash
sudo reboot
```

## Still stuck?

Ask the community on [Discord](https://discord.gg/bBGnGcbz8N) or [Reddit](https://www.reddit.com/r/cameraui/), or open an issue on [GitHub](https://github.com/cameraui/camera.ui). Include your logs and the steps that led to the problem.
