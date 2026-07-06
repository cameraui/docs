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

<Shot src="/img/automations/blueprint-store.png" alt="Der Community-Automatisierungen-Store" />

Wähle in der **Automations**-Liste **Community-Automatisierungen durchsuchen**, um den Store zu öffnen. Er listet Blueprints, die von der camera.ui-Community geteilt wurden, mit Suche, einem Kategoriefilter und einer Reihe empfohlener Blueprints.

Öffnest du einen Blueprint, siehst du vor dem Import, was er benötigt: erforderliche Plugins (mit einem Link zum Plugin-Store, falls eines fehlt) und benötigte Eingaben wie eine Kamera, Benachrichtigungsempfänger oder einen Sensor. Über **Importieren** verknüpfst du diese Schritt für Schritt mit deinen eigenen Kameras, Plugins und Benutzern; nichts ist vorausgefüllt. Enthält der Blueprint keine Referenzen zum Verknüpfen, wird er direkt importiert. In beiden Fällen landet er **deaktiviert** in deiner Automations-Liste, genau wie beim manuellen Import einer Datei.
