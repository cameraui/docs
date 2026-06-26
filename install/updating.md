# Updating

camera.ui has two parts that update: the **server** (the core that does the work) and the **app** you installed it with. Most updates are automatic or a single click. You can check the current versions and run updates from **Settings → [System](/admin/system)**.

## Updating the server

The server is the most important part to keep current. How you update it depends on how you installed it:

- **Desktop app.** The app updates the server for you automatically, before it starts. There is nothing to do.
- **Docker or bare-metal.** When a new server version is available, **Settings → [System](/admin/system)** shows an **Update** button. Select it, and the server installs the update and restarts.

## Beta updates

Want to try pre-release versions early? In **Settings → [System](/admin/system)**, open **Manage** and choose a version to install, including pre-releases. On the mobile apps you can instead turn on **Beta updates** to receive them automatically. Pre-release builds can be less stable, so use this only if you want to help test.

## Updating the desktop app

The [desktop app](/install/desktop) keeps itself up to date. It checks when it starts and periodically while running, then downloads and installs updates on its own. Because Server mode also updates the bundled server, the app and the server stay in sync.

## Updating the Docker image

Updating the server from the UI does not change the [Docker](/install/docker) image. To update the image itself (the base OS, GPU libraries, and launcher), pull the latest and recreate the container:

```bash
docker compose pull
docker compose up -d
```

The server version you chose is stored separately and persists across image pulls, so an image update never resets it.

## Updating the mobile apps

The [mobile apps](/install/mobile) update through the App Store and Google Play like any other app, and also receive over-the-air updates to the interface.

![Settings then System update button](/img/install/system-update.png)
