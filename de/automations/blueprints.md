---
title: Blueprints & Store
---

# Blueprints & Store

Ein **Blueprint** ist eine Automation als Datei gespeichert, sodass du sie sichern, zwischen Servern verschieben oder mit jemandem teilen kannst.

## Exportieren

Öffne eine Automation und wähle **Blueprint exportieren**. camera.ui lädt eine `.blueprint.json`-Datei herunter, die die Nodes und Verbindungen des Ablaufs enthält, aber nicht seine Geheimnisse wie Webhook-Schlüssel.

## Importieren

Wähle in der **Automations**-Liste **Blueprint importieren** und nimm eine `.blueprint.json`-Datei. camera.ui fügt sie als neue Automation hinzu, **deaktiviert**, sodass du sie prüfen und anpassen kannst, bevor du sie einschaltest. Importierte Abläufe bekommen frische interne IDs, sodass es beim doppelten Import desselben Blueprints keine Konflikte gibt.

## Teilen

Um eine Automation zu teilen, exportiere sie und sende die Datei. Die andere Person importiert sie auf ihrem eigenen Server.

## Community-Blueprints

Ein Community-Blueprint-Store, in dem du Automationen anderer direkt aus der App durchsuchen und kopieren kannst, ist geplant.[^store]

[^store]: Der Community-Blueprint-Store ist noch nicht verfügbar.
