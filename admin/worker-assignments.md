---
title: Worker assignments
---

# Worker assignments

Cameras and plugins run on the machine you assign them to under **Workers**. The status dot at the start of each row shows where the camera or plugin runs right now, for example while it installs on a worker, waits for one that restarts, or runs on the main server during a [failover](#failover). Its tooltip names the state and the reason. Changes in both tables take effect when you click **Save** below the table. The camera's settings show the same under **Frame Worker**, a plugin's status dot on its card.

## Cameras

Under **Camera Assignments**, choose which worker decodes each camera; cameras left as **Local** stay on the main server.

Decoding runs where the camera is assigned, detection runs where the detection plugin runs. When a camera and a detection plugin that analyses its frames run on different machines, every analysed frame crosses the network: per active camera about 2.3 Mbit/s for motion and 12 to 74 Mbit/s for object detection at a 320 px model input, four times that at 640 px. A warning icon next to the camera's name shows when its frames take this path. Keep a camera and its detection plugins on the same machine.

## Plugins

Under **Plugin Assignments**, an entire plugin can run on a worker instead of the main server. Only workers whose capabilities allow the job are listed, and a worker whose platform does not fit the plugin can't be chosen. Moving a plugin asks first: files it keeps on its machine stay there, such as downloaded models, and it starts without them on the new one. The worker installs and runs the plugin; it's still configured normally in the UI. A plugin version built for a plugin API the worker doesn't support is refused before the install, and the message says whether to update the worker or pick another plugin version.

A plugin update installs the new version on the worker next to the running one and then switches with one restart. If that install fails, the worker keeps the previous version. Uninstalling the plugin removes it from the worker too, its data included when you choose to remove it.

A plugin on a worker uses the worker's own network addresses, not the **Server addresses** of the main server. Choose them with **Edit Worker** in the workers list; left empty, the plugin listens on all of them. Changing them restarts the plugins on that worker.

Some plugins serve the camera video on their own machine, Reolink for example. On a worker, the worker sends that video to the master's HTTPS port, nothing has to be opened for it.

The NVR plugin stores its recordings on the machine it runs on, on a worker that is the worker's disk. Recordings from a time it ran elsewhere, during a [failover](#failover) for example, stay on that machine; the timeline marks the time with a band that names it.

## Failover

Workers check in with the master every 5 seconds. A worker the master has not heard from for 15 seconds shows as not reachable, but its cameras and plugins stay where they are. After 25 seconds without an answer they fall back to the main server. A plugin the main server's platform can't run, one for macOS only for example, waits for the worker instead, and its status says so. A worker that loses the master stops its cameras and plugins after 20 seconds, so nothing runs on two machines at once. A shorter drop changes nothing: cameras and plugins keep running and exchange the sensor states that changed in between once the link is back. Once the worker has answered for a minute, its cameras and plugins move back to it one after the other; a worker that keeps dropping out waits longer, up to 10 minutes.

Turn off **Fallback** next to an assignment to keep a camera or plugin on its worker. It then waits for the worker as well, also after a failure there, and starts on it as soon as the worker is back. That suits a plugin that keeps files on the worker, or a main server that could not carry the load. While a camera waits, camera.ui does not analyse its video; live view and recording keep running.

Restarting or updating the main server leaves the workers running: their cameras and plugins carry on without a restart once the main server is back. Older versions of Go plugins like Reolink restart once instead. A worker that restarts or updates tells the master first, and its cameras and plugins wait for it (up to 30 seconds for a restart, 2 minutes for an update) before they fall back.
