---
title: Import aus Home Assistant
---

# Import aus Home Assistant

Das **Home-Assistant-Plugin** holt Home Assistants eigene Sensoren und Steuerungen nach camera.ui. Das ist die Gegenrichtung zur [Integration](/de/home-assistant/integration): Die Integration schickt camera.uis Kameras und Sensoren nach Home Assistant, dieses Plugin zieht Home Assistants Geräte nach camera.ui, wo du sie Kameras zuweisen und als Erkennungs-Trigger nutzen kannst.

## Einrichtung

Installiere und aktiviere das **Home Assistant**-Plugin auf der [Plugins](/de/plugins/)-Seite und öffne dann seine Einstellungen:

- **Home Assistant URL.** Die Adresse deines Home Assistant, zum Beispiel `http://homeassistant.local:8123`.
- **Access Token.** Ein Long-Lived Access Token aus deinem Home-Assistant-Profil, unter **Sicherheit**.

Läuft camera.ui als [Home-Assistant-App](/de/home-assistant/app)? Lass beide leer. Das Plugin verbindet sich von selbst mit Home Assistant, kein Token nötig.

## Was importiert wird

Jede Home-Assistant-Entität eines unterstützten Typs wird automatisch importiert:

- **Sensoren.** Bewegung, Belegung, Kontakt, Türklingel, Rauch, Wasser, Gas, Kohlenmonoxid und weitere unterstützte Typen werden zu camera.ui-[Sensoren](/de/sensors/).
- **Steuerungen.** Schlösser, Garagentore, Alarmanlagen, Schalter, Lichter und Sirenen kommen als Steuerungen herein. Bedienst du eine in camera.ui, bedienst du sie in Home Assistant.

Nicht unterstützte Entitätstypen werden übersprungen. Um bestimmte Entitäten fernzuhalten, trage sie unter **Excluded Entities** ein.

## Importierte Sensoren nutzen

Importierte Sensoren erscheinen in der [Sensoren](/de/sensors/)-Ansicht wie alle anderen. Weist du einen einer Kamera zu, wird er zu einem Erkennungs-Trigger für diese Kamera, genau wie ein nativer Sensor: Ein Home-Assistant-Bewegungsmelder oder Türkontakt kann dann ein Kamera-Ereignis starten. Importierte Steuerungen erscheinen in der Übersicht der Kamera und in [Automationen](/de/automations/).

## Die Integration parallel betreiben

Du kannst aus Home Assistant importieren und gleichzeitig die [Integration](/de/home-assistant/integration) betreiben. Sie kommen sich nicht in die Quere: Das Plugin importiert nie die Kameras und Sensoren, die camera.ui selbst nach Home Assistant exportiert, es entsteht also keine Schleife.
