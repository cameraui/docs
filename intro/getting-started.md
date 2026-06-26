# Getting started

This guide takes you from a fresh install to your first camera. It assumes the camera.ui server is already running. If not, start with [Installation](/install/).

## 1. Open camera.ui

camera.ui runs over **HTTPS**. How you open it depends on how you installed it:

- **Desktop app.** It opens automatically when you launch it (in Server mode it starts the server for you).
- **Server** (Docker, Proxmox, bare-metal). Open `https://<server-ip>:3443` in your browser, or `https://localhost:3443` on the same machine.

::: warning First-visit certificate warning
camera.ui secures the connection with a **self-signed certificate**, so your browser shows a "your connection is not private" warning the first time. This is expected on your local network. Choose **Advanced → Proceed** to continue. You can remove the warning later by installing the certificate from **Settings → System → Certificate**.
:::

![Browser certificate warning](/img/getting-started/cert-warning.png)

## 2. Sign in

The first time, sign in with the default account:

- **Username:** `admin`
- **Password:** `admin`

You'll replace these in the next step.

![camera.ui login screen](/img/getting-started/login.png)

## 3. First-run setup

On first sign-in, camera.ui walks you through a short setup wizard:

**Welcome → Appearance → Account → Finish**

### Welcome

Choose how to start:

- **New Installation.** Set up a fresh server. This is what most people pick.
- **Restore from Backup.** Moving from another camera.ui install? Upload your backup archive, and camera.ui restores your settings and restarts.

![Onboarding welcome step](/img/getting-started/onboarding-welcome.png)

### Appearance

Pick your **theme** (light, dark, or follow the system) and your **language**. You can change both anytime later.

### Account

Set up your own account. This replaces the default `admin` / `admin`:

- A **username**
- A **password** (entered twice)
- Optionally, an avatar

::: tip Choose a strong password
This is an administrator account. Use a strong, unique password, especially if you ever plan to reach camera.ui from outside your local network.
:::

![Onboarding account step](/img/getting-started/onboarding-account.png)

### Finish

Select **Enjoy!** to save. camera.ui signs you out so the new account takes effect, then sign back in with the **username and password you just set**.

## 4. Add your first camera

After signing in you land on the **Home** screen. Select **Get started**, or open **Cameras**.

The **Cameras** page scans your network and lists the cameras it finds under **Discovered**. Select one, enter its username and password, and it's added. If your camera isn't found, use **Add camera** to enter its stream details by hand.

![Cameras page with discovered cameras](/img/getting-started/cameras-page.png)

For the full walkthrough, see **[Adding a camera](/cameras/add-camera)**.

## Next steps

Once your camera is connected:

- **[Live view](/cameras/live-view)** — watch your cameras live
- **[Recording (NVR)](/recording/)** — turn on 24/7 or event recording
- **[Detection & AI](/detection/)** — add motion and object detection
- **[Remote access](/remote/)** and the **[mobile apps](/install/mobile)** — reach your cameras from anywhere
