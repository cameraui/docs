---
title: Import aus Home Assistant
---

# Import aus Home Assistant

Das **Home-Assistant-Plugin** holt Home Assistants eigene Sensoren und Steuerungen nach camera.ui. Es ist die Gegenrichtung zur [Integration](/de/home-assistant/integration): Home-Assistant-Geräte kommen nach camera.ui, wo du sie Kameras zuweisen und als Erkennungs-Trigger nutzen kannst.

## Einrichtung

Installiere und aktiviere das **Home Assistant**-Plugin auf der [Plugins](/de/plugins/)-Seite und öffne dann seine Einstellungen:

- **Home Assistant URL.** Die Adresse deines Home Assistant, zum Beispiel `http://homeassistant.local:8123`.
- **Access Token.** Ein Long-Lived Access Token aus deinem Home-Assistant-Profil, unter **Sicherheit**.

Läuft camera.ui als [Home-Assistant-App](/de/home-assistant/app)? Lass beide leer. Das Plugin verbindet sich von selbst mit Home Assistant, kein Token nötig.

## Was du importieren kannst

Das Plugin bietet jede Home-Assistant-Entität an, die es abbilden kann, unter **Entdeckt** auf der [Sensoren-Seite](/de/sensors/setup#die-sensoren-seite), mit Name, Entity-ID, Typ und Raum. Herüber kommt nichts, bevor du es auswählst.

- **Sensoren.** Bewegung, Belegung, Kontakt, Türklingel, Rauch, Wasser, Gas, Kohlenmonoxid und weitere unterstützte Typen werden zu camera.ui-[Sensoren](/de/sensors/).
- **Steuerungen.** Schlösser, Garagentore, Alarmanlagen, Schalter, Lichter und Sirenen kommen als Steuerungen herein. Bedienst du eine in camera.ui, bedienst du sie in Home Assistant.

Nicht unterstützte Entitätstypen tauchen gar nicht erst auf. Um bestimmte Entitäten auch aus dem Angebot herauszuhalten, trage sie unter **Excluded Entities** ein.

## Importierte Sensoren nutzen

Übernommene Sensoren erscheinen in der [Sensoren](/de/sensors/)-Ansicht wie alle anderen. Einer Kamera zugewiesen, ist er ein Erkennungs-Trigger wie ein nativer Sensor: Ein Home-Assistant-Bewegungsmelder oder Türkontakt kann ein Kamera-Ereignis starten. Importierte Steuerungen erscheinen in der Übersicht der Kamera und in [Automationen](/de/automations/). Auf der [Sensoren-Seite](/de/sensors/setup#die-sensoren-seite) zeigt jeder importierte Sensor seine Home-Assistant-Entity-ID als **ID**, damit du Entitäten mit gleichem Anzeigenamen unterscheiden und danach suchen kannst. Die Entity-ID ist nur ein Etikett: camera.ui erkennt die Entität an ihrer Registry-ID, ein Umbenennen in Home Assistant behält also den Sensor und seine Zuweisungen. Löschst du die Entität in Home Assistant, bleibt der Sensor und wird als entfernt markiert, bis du ihn auch hier löschst; ist Home Assistant nicht erreichbar, steht er nur auf nicht verfügbar.

Übernommene Entitäten merkt sich camera.ui, nicht das Plugin, sie überstehen also Neustarts von beiden.

## Die Integration parallel betreiben

Du kannst aus Home Assistant importieren und gleichzeitig die [Integration](/de/home-assistant/integration) betreiben. Das Plugin importiert nie die Kameras und Sensoren, die camera.ui selbst nach Home Assistant exportiert.

**Importierte Sensoren werden nie zurückgeschickt.** Ein aus Home Assistant geholter Sensor wird nie wieder nach Home Assistant exportiert, weder von diesem Plugin noch von der [Integration](/de/home-assistant/integration), selbst wenn du ihn an eine andere Bridge wie HomeKit freigibst.

