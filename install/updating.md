# Updating

camera.ui has two parts that update: the **server** (the core that does the work) and the **app** you installed it with. **Updates** in the navigation is where all of it happens, whichever way you installed.

## The Updates page

**Updates** in the navigation collects everything that can be updated, in three sections: **Server**, **Plugins** and **Workers**. Every row names its installed version and whether it is up to date, and a row with a newer version opens that version's release notes. The header says when the list was last refreshed, and **Check for updates** looks again. Admins only.

**Update all** installs everything in one go, in the order that survives a restart: workers first, then plugins, and the server last, because installing the server restarts it. You see which item is running and how far along the run is, and a failed item can be retried on its own. Only one run happens at a time, so the button waits if you already started a plugin or worker update by hand.

<Shot src="/img/admin/updates.png" alt="Updates page with the server and plugin sections" />

A row can also say why it cannot be updated from here. **Updates with the desktop app** means an app too old to install its own updates remotely, so update it on its machine. **Update it once on its own machine** means a worker on a version before 2.1.0, which does not understand the update command yet, see [Workers](/admin/workers).

camera.ui checks for new versions every 10 minutes and tells you when the server, a plugin or a worker has one. Those notifications, and the dot on the navigation entry, lead here.

## Updating the server

The server is the most important part to keep current. How you update it depends on how you installed it:

- **Docker or bare-metal.** The **Updates** page installs the new version and restarts the server. Pulling a new Docker image does not do this: the launcher keeps the server version already in the volume. Only a worker still on a version before 2.1.0 needs one manual round, run `cameraui update-server -H /data` in its container and restart it.
- **Desktop app.** The app and the server move together, so the **Server** row is the app itself. See [Updating the desktop app](#updating-the-desktop-app).

The notification names the version, for example "camera.ui 2.1.9 is available". A pre-release arrives with the title **Beta update**.

## Beta updates

To try pre-release versions early, turn on **Beta updates** in **Settings → [System](/admin/system)**. The server then offers pre-release versions, and **Manage** on that page lists them so you can install a specific one. The switch reaches everything that follows this server: the desktop app moves to the beta feed, a server on a beta pulls its desktop workers onto the matching beta, and on the mobile app it also turns on beta over-the-air updates of the interface. Pre-release builds can be less stable, so use this only if you want to help test. Once you are on a pre-release, the server keeps offering the next beta even if you turn the switch back off. Install a stable version from **Manage** to leave the beta track.

<Shot src="/img/install/system-update.png" alt="Beta updates and the server version on the System page" />

## Updating the desktop app

The [desktop app](/install/desktop) keeps itself up to date. It installs updates on its own at startup, and while it runs it keeps checking. When it finds one, the **Updates** page offers it as the **Server** row: installing it downloads the app update, installs it and relaunches. You can do that from another device, so a mini PC in a cupboard running the app does not need a keyboard. The update also installs on the next start if you leave it.

One exception on Linux: only the `.AppImage` updates itself. If you installed the `.deb`, update by downloading and installing the new `.deb` from the [download page](https://cameraui.com).

## Updating the Docker image

The server and the image update separately. Updating the server from the UI does not change the [Docker](/install/docker) image, and pulling a new image does not change the server: the launcher installs the server into the volume on first start, then keeps that version across every later pull.

To update the **image** itself (the base OS, GPU libraries, and launcher), pull the latest and recreate the container:

```bash
docker compose pull
docker compose up -d
```

To update the **server**, use the **Updates** page, or run `cameraui update-server -H /data` in the container and restart it. The `-H /data` matters: without it the update lands outside the data volume and the restart boots the old version again.

## Updating the mobile apps

The [mobile apps](/install/mobile) update through the App Store and Google Play like any other app (during the beta, through TestFlight on iOS and the Play Store testing track on Android), and also receive over-the-air updates to the interface.
