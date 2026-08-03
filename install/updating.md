# Updating

camera.ui has two parts that update: the **server** (the core that does the work) and the **app** you installed it with. Most updates are automatic or a single click. You can check the current versions and run updates from **Settings → [System](/admin/system)**.

## Updating the server

The server is the most important part to keep current. How you update it depends on how you installed it:

- **Desktop app.** The app updates the server for you automatically, before it starts. There is nothing to do.
- **Docker or bare-metal.** When a new server version is available, **Settings → [System](/admin/system)** shows an **Update** button. Select it, and the server installs the update and restarts. Pulling a new Docker image does not do this: the launcher keeps the server version already in the volume. [Workers](/admin/workers) update from the master's Workers page; only a worker still on a version before 2.1.0 needs one manual round, run `cameraui update-server -H /data` in its container and restart it.

## Beta updates

To try pre-release versions early, turn on **Beta updates** in **Settings → [System](/admin/system)**. The server then offers pre-release versions, and **Manage** lists them so you can pick a specific one. On the mobile app the same switch also turns on beta over-the-air updates of the interface. Pre-release builds can be less stable, so use this only if you want to help test.[^beta-desktop]

[^beta-desktop]: The desktop app does not show the switch, because it updates the server together with the app.

## Updating the desktop app

The [desktop app](/install/desktop) keeps itself up to date. It installs updates on its own at startup. While the app is running it keeps checking, and when a new version is found it tells you and shows an **Update** button in **Settings → [System](/admin/system)**. The update installs when you select it, or on the next start. Because Server mode also updates the bundled server, the app and the server stay in sync.

One exception on Linux: only the `.AppImage` updates itself. If you installed the `.deb`, update by downloading and installing the new `.deb` from the [download page](https://cameraui.com).

## Updating the Docker image

The server and the image update separately. Updating the server from the UI does not change the [Docker](/install/docker) image, and pulling a new image does not change the server: the launcher installs the server into the volume on first start, then keeps that version across every later pull. A fresh image starts your existing server, not a newer one, which is why re-pulling never bumps the version.

To update the **image** itself (the base OS, GPU libraries, and launcher), pull the latest and recreate the container:

```bash
docker compose pull
docker compose up -d
```

To update the **server**, use the **Update** button above, or run `cameraui update-server -H /data` in the container and restart it. The `-H /data` matters: without it the update lands outside the data volume and the restart boots the old version again.

## Updating the mobile apps

The [mobile apps](/install/mobile) update through the App Store and Google Play like any other app (during the beta, through TestFlight on iOS and the Play Store testing track on Android), and also receive over-the-air updates to the interface.

<Shot src="/img/install/system-update.png" alt="Settings then System update button" />
