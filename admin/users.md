---
title: Users & roles
---

# Users & roles

Every account has a role that decides what it can do. Accounts are managed in **Settings → Users** (admins only).

## Roles

- **User.** Day-to-day access: the camera list, live view, recordings, Camview, and their own account settings. The Cameras page opens as a plain list to tap through to any camera; discovery, adding cameras, and camera settings stay with admins.
- **Admin.** Everything a user can do, plus managing cameras, plugins, automations, users, and all server settings.
- **Master.** The main account. The same as an admin, plus it can reset the server. It can't be deleted, and its role can't be changed, not even by itself. Only the master can edit its own username, password and avatar; other admins get an error if they try.

Access is decided by role, not per camera; there are no per-camera permissions.

## Managing users

<Shot src="/img/admin/users.png" alt="The registered users list" />

The **Registered users** list creates, edits and removes accounts. A new account gets the role user or admin.

## Logged in users

Below the registered users, the **Logged in users** list shows every active session across all accounts, with the device, its address, and type. **Sign out** on a row ends that session.

## The first account

camera.ui starts with a single master account (username `admin`, password `admin`). You're prompted to change the password on first login.
