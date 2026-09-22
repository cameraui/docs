# Mobile apps

The iOS and Android apps are viewers for live view, recordings and notifications. They connect to a server running elsewhere (the [desktop app](/install/desktop) or a [server install](/install/)).

<Shot src="/img/install/mobile-app.png" alt="The camera.ui mobile app" />

## Download

- **iOS / iPadOS.** Currently in **beta**. Join through [TestFlight](https://testflight.apple.com/join/wbzK69Wu): install Apple's TestFlight app, then open the invite link on your device.[^appstore]
- **Android.** Currently in **beta**. Join the [beta group](https://groups.google.com/a/cameraui.com/g/cameraui-beta) with the Google account you use in the Play Store, become a [tester](https://play.google.com/apps/testing/com.cameraui.app), then install from [Google Play](https://play.google.com/store/apps/details?id=com.cameraui.app).[^androidbeta]

<!-- TODO: swap the beta links (TestFlight, Play Store testing) for the public App Store and Play Store listings on release -->

| Platform | Requirement |
|---|---|
| iOS / iPadOS | 17.4 or newer |
| Android | 8.0 or newer (API 26) |

## Connecting to your server

Sign in with your camera.ui account (Google, Apple, or email) and your paired servers appear. The app picks the route itself:

- **At home.** On the server's network it connects directly, so live view starts faster. It trusts the server's certificate for local addresses automatically.
- **Away.** Off the network, it goes through **camera.ui Cloud**.

On the server side this needs:

- [Remote access via camera.ui Cloud](/remote/cloud) enabled.
- The server [paired](/remote/pairing) to your account.

## Notifications

A signed-in app receives push notifications for events. What you get alerted about is set under [Notifications](/notifications/).[^license]

## Biometric login

**Settings → Account → Biometric login** signs you in with Face ID or Touch ID instead of your password. The credentials are kept in the device's secure storage; sign out and back in once after enabling it so they get stored. Turning it off removes them.

## App lock

**App lock with Face ID / Fingerprint** in the app's settings asks for biometrics (or the device passcode as fallback) at every start, and again after a few minutes in the background. A brief switch away doesn't re-prompt. It is independent of biometric login.

## Updates

The apps update through the App Store and Google Play (during the beta: TestFlight on iOS, the Play Store testing track on Android), plus over-the-air updates to the interface. See [Updating](/install/updating).

[^license]: An active camera.ui subscription covers recording (NVR) and the features built on it, such as playback, export, face recognition, semantic search, and AI descriptions, plus push notifications. Live view and real-time detection are free.
[^appstore]: The app moves to the App Store with the public release.
[^androidbeta]: Google requires testers to stay enrolled for at least 14 days before the app can go public, so please stay opted in. For beta builds, turn on **Beta updates** under **Settings → System** in the app.
