# Mobile apps

The mobile apps are companion viewers for iOS and Android. They let you watch your cameras, browse recordings, and receive notifications on the go. The server runs elsewhere (on your [desktop](/install/desktop) or a [server install](/install/)); the mobile app connects to it.

<Shot src="/img/install/mobile-app.png" alt="The camera.ui mobile app" />

## Download

- **iOS / iPadOS.** Currently in **beta**. Join through [TestFlight](https://testflight.apple.com/join/wbzK69Wu): install Apple's TestFlight app, then open the invite link on your device.[^appstore]
- **Android.** Coming soon.

<!-- TODO: swap the TestFlight invite for the App Store link once released; add the Google Play link when the Android app ships -->

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

## Biometric login

In **Settings → Account**, turn on **Biometric login** to sign in with Face ID or Touch ID instead of your password. camera.ui saves your credentials in the device's secure storage; sign out and back in once after enabling it to store them. Turning the toggle off removes the saved credentials.

## App lock

For an extra layer on the device itself, turn on **App lock with Face ID / Fingerprint** in the app's settings. With it on, the app asks for biometric authentication (or your device passcode as a fallback) every time you open it, so someone holding your unlocked phone still can't see your cameras. It's separate from biometric login: login saves you typing your password, app lock re-checks who's holding the phone each time you open the app.

## Updates

The apps update through the App Store and Google Play (during the beta, through TestFlight) like any other app, and also receive over-the-air updates to the interface. See [Updating](/install/updating).

[^license]: An active camera.ui subscription covers recording (NVR) and the features built on it, such as playback, export, face recognition, semantic search, and AI descriptions, plus push notifications. Live view and real-time detection are free.
[^appstore]: The app moves to the App Store with the public release.
