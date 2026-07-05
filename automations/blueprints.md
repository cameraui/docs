---
title: Blueprints & store
---

# Blueprints & store

A **blueprint** is an automation saved as a file, so you can back it up, move it between servers, or share it with someone else.

## Exporting

Open an automation and choose **Export blueprint**. camera.ui downloads a `.blueprint.json` file containing the flow's nodes and connections, but not its secrets, such as webhook keys.

## Importing

On the **Automations** list, choose **Import blueprint** and pick a `.blueprint.json` file. camera.ui adds it as a new automation, **disabled**, so you can review and adjust it before turning it on. Imported flows get fresh internal IDs, so importing the same blueprint twice won't clash.

## Sharing

To share an automation, export it and send the file. The other person imports it on their own server.

## Community blueprints

![The community automations store](/img/automations/blueprint-store.png)

On the **Automations** list, choose **Browse community automations** to open the store. It lists blueprints shared by the camera.ui community, with search, a category filter, and a featured row.

Opening a blueprint shows what it needs before you import it: required plugins (with a link to the plugin store if one is missing) and required inputs such as a camera, notification recipients, or a sensor. Choosing **Import** walks you through binding each of those to your own cameras, plugins, and users; nothing is pre-filled. If the blueprint has no references to bind, it imports directly. Either way it lands in your automations list **disabled**, same as a manually imported file.
