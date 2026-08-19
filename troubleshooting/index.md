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
- Check your **[zones](/cameras/zones-and-masks)** cover the area, and that the type you expect is listed on one of them.
- Remember the **cascade**: object, face, and plate detection only run after motion or another trigger. See [Detection](/detection/).

## OpenVINO can't find the GPU on bare metal

The OpenVINO plugin logs `libOpenCL.so.1: cannot open shared object file` when the host is missing Intel's OpenCL runtime. Install it with `sudo apt install ocl-icd-libopencl1 intel-opencl-icd`, and make sure the service user is in the `render` and `video` groups. See [Linux → Hardware acceleration](/install/linux#hardware-acceleration).

## No notifications

- Check the **[notification settings](/notifications/)** on the device: the master switch, quiet hours, and whether the device is registered.
- Check the **camera's** notification settings: which objects, sounds, and sensors it alerts on.
- For **push to a phone**, you need the native [mobile app](/install/mobile) (a browser gets no push), [camera.ui Cloud](/remote/cloud) set up, and a tap on **Sync this device**. If push worked before and went quiet, the app usually notices and shows a note with a **Fix** button; one tap sets the phone up again. See [Getting push on your phone](/notifications/#getting-push-on-your-phone).

## Recording isn't working

- Recording needs an **active subscription**. See [Recording](/recording/).
- Confirm the camera's **recording mode** is set, either continuous or event.
- Check **[storage](/recording/storage)**: a full disk with **Strict** retention pauses recording until you free space.
- If **Settings → Recordings** warns that the storage volume is small, recordings are on a small disk and rotate away quickly. Either the disk really is that small, or a storage mount you expected never mounted. Check the path in **[storage](/recording/storage)**.

## Can't reach the server remotely

- Open **[Settings → Remote Access](/remote/)** and select the info button next to the **connection status**. **Connection details** names the address in use, what the server sees, and every address that was tried with its timing and failure reason. **Copy details** copies the lot for a bug report.
- Confirm cloud access is **enabled** and the server is **registered**, with the tunnel connected.
- For a direct connection, use **Test connection** to check the address is reachable.
- The mobile apps need [camera.ui Cloud](/remote/cloud) to connect from outside your network.
- If the app connects over the internet while you're at home, check the **Network** card on the same page: an IP address missing from **Server addresses**, or a **Local address** that doesn't answer, sends the app out over the internet instead.

## I can't sign in

If you know the account but not the password, another administrator can set a new one in **Settings → [Users](/admin/users)**: open the user's menu, choose **Edit**, and enter a new password.

The **master** account is the exception. It can only be changed by itself, so nobody else can reset it, and there is no command-line way either. Restoring a [backup](/admin/backup) from a time when you still knew the password brings the old accounts back with it. Without such a backup the only way in is a fresh install, so keep the master password somewhere you will find it again.

## Getting more detail

- Open the **[Logs](/admin/logs)** and filter or search for the issue. You can download the log to share when asking for help.
- For deeper inspection, the **Terminal** gives a shell on the server.

## Still stuck?

Ask the community on [Discord](https://discord.gg/bBGnGcbz8N) or [Reddit](https://www.reddit.com/r/cameraui/), or open an issue on [GitHub](https://github.com/cameraui/camera.ui). Include your logs and the steps that led to the problem.
