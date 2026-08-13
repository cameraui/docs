---
title: PTZ & autotrack
---

# PTZ & autotrack

PTZ cameras (pan, tilt, zoom) can be moved from camera.ui, and with **autotrack** they follow detected objects on their own.

PTZ is a [sensor](/sensors/) that a plugin provides to a camera. The [ONVIF plugin](/plugins/), for example, can provide PTZ for an ONVIF camera. You enable it for the camera in its [settings](/cameras/settings), under the **Plugins** tab. The camera then shows only the moves the plugin reports (pan, tilt, zoom, presets, and home).

## Controlling a PTZ camera

Hover a PTZ camera's player and a small bar appears at the top right, next to the other player controls:

- **Go to home.** Send the camera back to its home position. Shown when the camera has one.
- **Presets.** Open the list of positions saved on the camera and jump to one. Shown when the camera reports at least one. camera.ui reads the presets from the camera, it cannot create or delete them.
- **PTZ.** Show the on-screen controls: the zoom slider on the left, the pan and tilt joystick on the right. The button stays highlighted while they are open.

The bar is for admins, needs a player at least 350 pixels wide, and hides while the timeline or a recording is open.

<Shot src="/img/sensors/ptz-joystick.png" alt="PTZ joystick control" />

## Autotrack

Autotrack lets a PTZ camera **follow detected objects automatically** using its pan and tilt. Because it follows detections, it needs [object detection](/detection/) set up on the camera.

Configure it in the camera's [settings](/cameras/settings), under **Autotrack**:

- **Enable autotrack.** Turn tracking on.
- **Target labels.** Which object types the camera should follow, such as people or vehicles.
- **Minimum confidence.** Only track detections above this confidence score.
- **Dead zone.** A central area where a target can move without the camera adjusting, which avoids constant small movements.
- **Tracking speed.** How aggressively the camera moves to re-center the target. Higher is snappier, lower is smoother.
- **Motion prediction.** Aims ahead of a moving target by this many milliseconds, covering the time the camera needs to move and settle. Lower it if the camera overshoots, raise it for fast targets. The prediction fades out as the target slows down. Set it to 0 to turn it off.
- **Pan-rate calibration.** Calibrates how far each move step travels on your camera. Lower it if the camera stops short of the target, raise it if it overshoots.
- **Return to home.** Move the camera back to its home position when no target is seen for a while.
- **Wait before returning.** How long to wait without a target before returning home.
- **Smallest object.** Ignore objects that take up less than this share of the picture height. They are usually too far away to be worth a move. 0 turns the limit off.
- **Largest object.** Stop following once an object fills more than this share of the picture height. That close the picture says little, so the camera holds its position until the object backs off. 0 turns the limit off.
- **Only during these hours.** Run autotrack between two times, for example at night. The times are read in the timezone of the browser you set them in, and a window that ends before it starts runs across midnight. Outside the window the camera stays where it is, and goes home if **Return to home** is on. Off means all day.

The size limits apply when autotrack picks a target. A target it is already following stays followed as it gets smaller, and a target that grows past the largest size keeps its place while the camera waits.

If you move the camera yourself, with the joystick or your camera's own app, autotrack pauses for 45 seconds so it doesn't fight you. The countdown starts when you stop moving.

<Shot src="/img/sensors/ptz-autotrack.png" alt="PTZ autotrack settings" />
