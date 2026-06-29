# Adding a camera

There are two ways to add a camera: let camera.ui **discover** it, or **add it manually** with its stream URL. Both start from the **Cameras** page (open it from the menu, or select **Get started** on the home screen when you have no cameras yet).

## Before you start

- Power on the camera and connect it to the same network as your server.
- For network discovery, enable **ONVIF** in the camera's own settings.
- Have the camera's **username and password** ready. For a manual add, also have its **RTSP URL** (from the camera's manual or app).

## Discover a camera

The Cameras page lists devices that have been **discovered**, ready for you to add. A camera shows up here when camera.ui's built-in discovery finds it on your network (ONVIF and other protocols), or when a [plugin](/plugins/) that manages cameras reports one. Either way, you add it the same way. Cameras you have already added appear under **Adopted cameras**.

1. Open **Cameras**. Discovery runs automatically. If a camera on your network doesn't appear, select **Rescan** and check that it's powered on and on the same network.
2. Select a camera under **Discovered**. A **Connect** dialog opens.
3. Some cameras need credentials. If asked, enter the **username** and **password** (a few use a PIN instead), then select **Connect**. Others need no details and connect right away.
4. The status changes to **Connecting…**, and on success the camera moves to **Adopted cameras** and shows up in your live view.

You can hide devices you don't want to see with the eye icon, and bring them back later with **Show hidden devices**.

![Cameras page with discovered devices](/img/cameras/discovered-devices.png)
![Connect dialog with username and password](/img/cameras/connect-dialog.png)

## Add a camera manually

Use this for cameras that aren't discovered, or to set up streams yourself. Select **Add camera** on the Cameras page.

1. Give the camera a **Name**, and optionally assign it to a **Room**.
2. Under **Sources**, set up at least one stream:
   - Enter a **Source name**.
   - Pick a **Source role**: **High Resolution**, **Mid Resolution**, or **Low Resolution** for streaming, or **Snapshot** for stills. At least one streaming role is required.
   - Choose the **protocol** (RTSP is the default and works with most IP cameras) and enter the stream **URL**. Use the **(i)** button for protocol-specific help, or **Test camera source** to preview a frame.
3. Add more URLs to a source, or **Add source** to add another role (for example a low-resolution stream for fast scrubbing).
4. Save. The camera appears in your Cameras list and live view.

![Add camera dialog with sources and roles](/img/cameras/add-camera-dialog.png)

### Sources and roles

A camera can have several **sources**, each with a **role**:

- **High / Mid / Low Resolution** are streaming tiers. camera.ui uses the one that fits the situation, such as a low-resolution stream in a multi-camera grid and a high-resolution one at full screen.
- **Snapshot** provides still images.

One source is enough to get started. Adding a lower-resolution stream later improves performance for grids and playback.

### Performance options

Each source has a few options that trade a little memory for a faster, smoother experience:

- **Hot mode.** Keeps the connection to the camera always active, so there's no reconnect delay when a stream is opened.
- **Preload.** Preloads the stream so the camera view opens with minimal delay.

With hot mode and preload on, opening a stream is near-instant, whether the camera uses H.264 or H.265.

## Connection protocols

camera.ui supports many connection types. **RTSP** works with almost any IP camera and is the usual choice, while **ONVIF** powers discovery. The protocol list also covers specific brands and systems, some of which connect directly and others through a [plugin](/plugins/). The **(i)** button next to the protocol field shows instructions for the one you picked. See [Connection protocols](/cameras/protocols) for the full list.[^cloud]

[^cloud]: Cameras that depend on a vendor cloud (such as Ring or Nest) can be connected, either directly or through a plugin, but they are **not recommended** and **not covered by support**. Use local RTSP / ONVIF cameras for a reliable experience.
