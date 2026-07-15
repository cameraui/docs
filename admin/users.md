---
title: Users & roles
---

# Users & roles

camera.ui supports multiple user accounts, each with a role that decides what they can do. Manage them in **Settings → Users** (admins only).

## Roles

There are three roles:

- **User.** Day-to-day access: live view, recordings, Camview, and their own account settings.
- **Admin.** Everything a user can do, plus managing cameras, plugins, automations, users, and all server settings.
- **Master.** The main account. The same as an admin, plus it can reset the server. It can't be deleted, and its role can't be changed, not even by itself. Only the master can edit its own username, password and avatar; other admins get an error if they try.

Access is decided by role, not per camera; there are no per-camera permissions.

## Managing users

<Shot src="/img/admin/users.png" alt="The registered users list" />

In **Settings → Users**, the **Registered users** list shows everyone. From there you can:

- **Create a new user**, setting a username, password, and role (user or admin).
- **Edit** a user to change their details or role.
- **Remove** a user.

## The first account

camera.ui starts with a single master account (username `admin`, password `admin`). Change its password right away; you're prompted to on first login.
