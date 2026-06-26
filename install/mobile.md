# Mobile apps

The mobile apps are companion viewers for iOS and Android. They let you watch your cameras, browse recordings, and receive notifications on the go. The server runs elsewhere (on your [desktop](/install/desktop) or a [server install](/install/)); the mobile app connects to it.

![The camera.ui mobile app](/img/install/mobile-app.png)

## Download

Get camera.ui from the [App Store](https://cameraui.com) (iOS) and [Google Play](https://cameraui.com) (Android).

<!-- TODO: confirm final App Store + Google Play links — apps may still be in beta (TestFlight / Play testing) at the time of writing -->

| Platform | Requirement |
|---|---|
| iOS / iPadOS | 17.4 or newer |
| Android | 8.0 or newer (API 26) |

## Connecting to your server

The mobile apps connect to your server through **camera.ui Cloud**. Sign in with your camera.ui account (Google, Apple, or email), and your paired servers appear.

This needs two things on the server side:

- [Remote access via camera.ui Cloud](/remote/cloud) enabled.
- The server [paired](/remote/pairing) to your account.

Unlike the [desktop app](/install/desktop), the mobile apps don't connect directly over the local network. They always go through camera.ui Cloud.

## Notifications

With the app installed and signed in, you can receive push notifications for events directly on your phone. See [Notifications](/notifications/) to choose what you're alerted about.[^license]

## Updates

The apps update through the App Store and Google Play like any other app, and also receive over-the-air updates to the interface. See [Updating](/install/updating).

[^license]: Recording (NVR) and push notifications require an active camera.ui subscription.
