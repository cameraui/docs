---
title: PTZ & autotrack
---

# PTZ & autotrack

PTZ cameras (pan, tilt, zoom) can be moved from camera.ui, and with **autotrack** they follow detected objects on their own.

PTZ is a [sensor](/sensors/) a plugin provides, the [ONVIF plugin](/plugins/) for example, enabled in the camera's [settings](/cameras/settings) under the **Plugins** tab. Only the moves the plugin reports (pan, tilt, zoom, presets and home) are shown.

## Controlling a PTZ camera

Hovering a PTZ camera's player shows a bar at the top right:

- **Go to home.** Send the camera back to its home position. Shown when the camera has one.
- **Presets.** Jump to a position saved on the camera. Shown when the camera reports at least one. camera.ui reads presets from the camera but cannot create or delete them.
- **PTZ.** Show the on-screen controls: the zoom slider on the left, the pan and tilt joystick on the right.

The bar is for admins, needs a player at least 350 pixels wide, and hides while the timeline or a recording is open.

<Shot src="/img/sensors/ptz-joystick.png" alt="PTZ joystick control" />

## Autotrack

Autotrack lets a PTZ camera **follow detected objects automatically** using pan and tilt. It needs [object detection](/detection/) on the camera.

In the camera's [settings](/cameras/settings), under **Autotrack**:

- **Enable autotrack.** Turn tracking on.
- **Target labels.** Which object types the camera should follow, such as people or vehicles.
- **Minimum confidence.** Only track detections above this confidence score.
- **Dead zone.** A central area where a target can move without the camera adjusting.
- **Tracking speed.** How aggressively the camera moves to re-center the target. Higher is snappier, lower is smoother.
- **Motion prediction.** Aims ahead of a moving target by this many milliseconds, covering the time the camera needs to move and settle. Lower it if the camera overshoots, raise it for fast targets. The prediction fades out as the target slows down. Set it to 0 to turn it off.
- **Pan-rate calibration.** Calibrates how far each move step travels on your camera. Lower it if the camera stops short of the target, raise it if it overshoots.
- **Return to home.** Move the camera back to its home position when no target is seen for a while.
- **Wait before returning.** How long to wait without a target before returning home.
- **Smallest object.** Ignore objects that take up less than this share of the picture height. 0 turns the limit off.
- **Largest object.** Stop following once an object fills more than this share of the picture height. The camera holds its position until the object backs off. 0 turns the limit off.
- **Only during these hours.** Run autotrack between two times, for example at night. The times are read in the timezone of the browser you set them in, and a window that ends before it starts runs across midnight. Outside the window the camera stays where it is, and goes home if **Return to home** is on. Off means all day.

The size limits apply when autotrack picks a target. A target it is already following stays followed as it gets smaller, and a target that grows past the largest size keeps its place while the camera waits.

If you move the camera yourself, with the joystick or your camera's own app, autotrack pauses for 45 seconds, counted from when you stop moving.

<Shot src="/img/sensors/ptz-autotrack.png" alt="PTZ autotrack settings" />
