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

A community blueprint store, where you can browse and copy automations others have made directly from the app, is planned.[^store]

[^store]: The community blueprint store is not available yet.
