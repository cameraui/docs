---
title: PTZ & autotrack
---

# PTZ & autotrack

PTZ cameras (pan, tilt, zoom) can be moved from camera.ui, and with **autotrack** they follow detected objects on their own.

PTZ is a [sensor](/sensors/) that a plugin provides to a camera. The [ONVIF plugin](/plugins/), for example, can provide PTZ for an ONVIF camera. You enable it for the camera in its [settings](/cameras/settings), under the **Plugins** tab. The camera then shows only the moves the plugin reports (pan, tilt, zoom, presets, and home).

## Controlling a PTZ camera

Open a PTZ camera and select the **PTZ** button in the player to show the controls:

- **Pan and tilt.** Use the on-screen joystick.
- **Zoom.** Zoom the camera in and out.
- **Presets.** Jump to a saved position, if your camera supports presets.
- **Home.** Return to the home position with **Go to home**.

<Shot src="/img/sensors/ptz-joystick.png" alt="PTZ joystick control" />

## Autotrack

Autotrack lets a PTZ camera **follow detected objects automatically** using its pan and tilt. Because it follows detections, it needs [object detection](/detection/) set up on the camera.

Configure it in the camera's [settings](/cameras/settings), under **Autotrack**:

- **Enable autotrack.** Turn tracking on.
- **Target labels.** Which object types the camera should follow, such as people or vehicles.
- **Minimum confidence.** Only track detections above this confidence score.
- **Dead zone.** A central area where a target can move without the camera adjusting, which avoids constant small movements.
- **Tracking speed.** How aggressively the camera moves to re-center the target. Higher is snappier, lower is smoother.
- **Motion prediction.** Aims ahead of a moving target by this many detection frames, so the camera keeps pace instead of trailing. Set it to 0 to turn prediction off.
- **Pan-rate calibration.** Calibrates how far each move step travels on your camera. Lower it if the camera stops short of the target, raise it if it overshoots.
- **Return to home.** Move the camera back to its home position when no target is seen for a while.
- **Wait before returning.** How long to wait without a target before returning home.

If you move the camera yourself, with the joystick or your camera's own app, autotrack pauses for 45 seconds so it doesn't fight you. The countdown starts when you stop moving.

<Shot src="/img/sensors/ptz-autotrack.png" alt="PTZ autotrack settings" />
