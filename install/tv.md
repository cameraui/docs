---
title: Apple TV
---

# Apple TV

The Apple TV app puts your cameras on the big screen: live view, events, and recordings with playback.[^license] It's a viewer, so the server runs elsewhere (on your [desktop](/install/desktop) or a [server install](/install/)) and the app connects to it.

<Shot src="/img/install/tv-app.png" alt="The camera.ui Apple TV app" />

## Download

Currently in **beta**. Join through [TestFlight](https://testflight.apple.com/join/XWw3pmVN): install Apple's TestFlight app on your Apple TV, then open the invite.[^appstore]

| Platform | Requirement |
|---|---|
| Apple TV | tvOS 17 or newer |

## Connecting to your server

The app connects straight to your server, not through camera.ui Cloud. Add a server by its address and sign in:

- **On your network.** Enter the server's local address, for example `https://192.168.1.20:3443`.
- **From anywhere.** Enter your own public address, set up with a [custom domain](/remote/custom-domain) and a [reverse proxy](/remote/reverse-proxy).

You can add more than one server and switch between them, handy if you run separate servers at home and elsewhere.

## Updates

The app updates through TestFlight during the beta, like any other Apple TV app.

[^license]: An active camera.ui subscription covers recording (NVR) and the features built on it, such as playback. Live view is free.
[^appstore]: The app moves to the App Store with the public release.
