---
title: Blueprints & Store
---

# Blueprints & Store

Ein **Blueprint** ist eine Automation als Datei gespeichert, sodass du sie sichern, zwischen Servern verschieben oder mit jemandem teilen kannst.

## Exportieren

Öffne eine Automation und wähle **Blueprint exportieren**. camera.ui lädt eine `.blueprint.json`-Datei herunter, die die Nodes und Verbindungen des Ablaufs enthält, aber nicht seine Geheimnisse wie Webhook-Schlüssel.

## Importieren

Wähle in der **Automations**-Liste **Blueprint importieren** und nimm eine `.blueprint.json`-Datei. Sie kommt als neue Automation dazu, **deaktiviert**. Importierte Abläufe bekommen frische interne IDs, sodass es beim doppelten Import desselben Blueprints keine Konflikte gibt.

## Teilen

Exportiere die Automation und schick die Datei; die andere Person importiert sie auf ihrem Server.

## Community-Blueprints

<Shot src="/img/automations/blueprint-store.png" alt="Der Community-Automatisierungen-Store" />

**Community-Automatisierungen durchsuchen** in der **Automations**-Liste öffnet den Store mit Blueprints der camera.ui-Community.

Die Seite eines Blueprints listet, was er braucht: erforderliche Plugins (mit einem Link zum Plugin-Store, falls eines fehlt) und benötigte Eingaben wie eine Kamera, Benachrichtigungsempfänger oder einen Sensor. **Importieren** fragt dann nach deinen eigenen Kameras, Sensoren, Plugins und Empfängern, dazu nach einfachen Werten wie einem MQTT-Topic, manche mit Vorschlag vorausgefüllt. Diese Textfelder stehen nicht auf der Seite, erwarte beim Import also ein paar Felder mehr. Ein Blueprint ohne Referenzen zum Verknüpfen wird direkt importiert. In beiden Fällen landet er **deaktiviert**.

Der Store ist ein öffentliches Repository, [cameraui/automations](https://github.com/cameraui/automations), das camera.ui zur Laufzeit liest. Aus der App heraus kann man nichts hochladen: Um eines beizusteuern, öffne einen Pull Request gegen dieses Repository mit deinem exportierten Blueprint.
