---
title: Import aus Home Assistant
---

# Import aus Home Assistant

Das **Home-Assistant-Plugin** holt Kameras, Sensoren und Steuerungen aus Home Assistant nach camera.ui. Es ist die Gegenrichtung zur [Integration](/de/home-assistant/integration): Home-Assistant-Geräte kommen nach camera.ui, wo du sie Kameras zuweisen und als Erkennungs-Trigger nutzen kannst.

## Einrichtung

Installiere und aktiviere das **Home Assistant**-Plugin auf der [Plugins](/de/plugins/)-Seite und öffne dann seine Einstellungen:

- **Home Assistant URL.** Die Adresse deines Home Assistant, zum Beispiel `http://homeassistant.local:8123`.
- **Access Token.** Ein Long-Lived Access Token aus deinem Home-Assistant-Profil, unter **Sicherheit**.

Läuft camera.ui als [Home-Assistant-App](/de/home-assistant/app)? Lass beide leer. Das Plugin verbindet sich von selbst mit Home Assistant, kein Token nötig.

## Was du importieren kannst

Das Plugin bietet jede Home-Assistant-Entität an, die es abbilden kann, unter **Entdeckt** auf der [Sensoren-Seite](/de/sensors/setup#die-sensoren-seite), mit Name, Entity-ID, Typ und Raum. Herüber kommt nichts, bevor du es auswählst.

- **Sensoren.** Bewegung, Belegung, Kontakt, Türklingel, Rauch, Wasser, Gas, Kohlenmonoxid und weitere unterstützte Typen werden zu camera.ui-[Sensoren](/de/sensors/).
- **Steuerungen.** Schlösser, Garagentore, Alarmanlagen, Schalter, Lichter und Sirenen kommen als Steuerungen herein. Bedienst du eine in camera.ui, bedienst du sie in Home Assistant.

Sensoren, die zu einer Kamera gehören, kommen mit ihrer Bedeutung herein: Person, Fahrzeug und Tier als Objekterkennung statt als Bewegung, Geräusche wie Glasbruch als Audio mit dem Namen des Geräuschs, ein Reolink-Besuchersensor als Türklingel. Binärsensoren mit der Geräteklasse Sound kommen als Audiosensoren herein. Home Assistant kennt keine Türklingel-Klasse für Binärsensoren, ein Klingelknopf, der als Binärsensor erscheint, gehört deshalb unter **Doorbell Entities** in den Plugin-Einstellungen, durch Kommas getrennt. Er wird dann als Türklingel angeboten, die klingelt, sobald der Sensor einschaltet.

Nicht unterstützte Entitätstypen tauchen gar nicht erst auf. Entitäten, die du nicht willst, kannst du in der Liste Entdeckt [ausblenden](/de/sensors/setup#die-sensoren-seite).

## Kameras

Kameras, die andere Integrationen zu Home Assistant hinzufügen, erscheinen unter **Entdeckt** auf der [Kameras-Seite](/de/cameras/add-camera#eine-kamera-entdecken), und du fügst sie hinzu wie jede entdeckte Kamera. Das Bild kommt über WebRTC durch Home Assistant, Live-Ansicht, Erkennung und Aufnahme laufen in camera.ui.

- **Welche Kameras.** Jede Kamera, die Home Assistant per WebRTC streamen kann, nativ oder über seine go2rtc-Integration, die zur Standardeinrichtung gehört. Kameras, die nur Standbilder liefern, erscheinen nicht, darunter die aus HomeKit Device (etwa Aqara G2H und G3), Blink, Bosch, motionEye, ZoneMinder und Agent DVR.
- **Quellen.** Die Streams eines Geräts werden die Quellen einer Kamera: Clear, Balanced und Fluent bei Reolink, High, Medium und Low bei UniFi Protect, HD und SD bei Imou. Ein zweites Objektiv wird eine eigene Kamera, etwa das Teleobjektiv einer Reolink TrackMix oder die Paketkamera einer UniFi G4 Doorbell Pro. ONVIF gibt eine Kamera pro Profil. Einen Stream, den Home Assistant deaktiviert ausliefert, bei Reolink meist Clear, bekommst du dazu, wenn du seine Entität in Home Assistant aktivierst und die Kamera neu hinzufügst.
- **Sensoren.** Die eigenen Entitäten der Kamera in Home Assistant werden Sensoren der Kamera und erscheinen nicht mehr als einzelne Sensoren: Bewegung, Person, Fahrzeug, Tier, Türklingel, Akku, Sirene und Licht, dazu Geräusche wie Glasbruch oder ein weinendes Baby, wo die Integration sie meldet. Die übrigen Entitäten der Kamera, etwa ihre Schalter, bleiben auf der Sensoren-Seite unter **Entdeckt**.
- **Gegensprechen.** camera.ui zeigt das Mikrofon, wenn die Antwort von Home Assistant das Sprechen erlaubt. Offiziell braucht Home Assistant dafür die Vorschaufunktion **Two-way audio** unter Einstellungen > System > Labs und eine Integration, die es unterstützt, etwa Reolink oder Matter. Klappt das Sprechen bei einer Kamera nicht, schalte für ihre Quelle **Gegensprechen deaktivieren** ein.

Startet Home Assistant neu, pausiert der Stream und kommt von selbst wieder. Gibt es für die Marke der Kamera ein camera.ui-[Plugin](/de/plugins/), bringt das meist mehr: native Ereignisse, Gegensprechen ohne Home Assistant, PTZ.[^cloud]

## Importierte Sensoren nutzen

Übernommene Sensoren erscheinen in der [Sensoren](/de/sensors/)-Ansicht wie alle anderen. Einer Kamera zugewiesen, ist er ein Erkennungs-Trigger wie ein nativer Sensor: Ein Home-Assistant-Bewegungsmelder oder Türkontakt kann ein Kamera-Ereignis starten. Importierte Steuerungen erscheinen in der Übersicht der Kamera und in [Automationen](/de/automations/). Auf der [Sensoren-Seite](/de/sensors/setup#die-sensoren-seite) zeigt jeder importierte Sensor seine Home-Assistant-Entity-ID als **ID**, damit du Entitäten mit gleichem Anzeigenamen unterscheiden und danach suchen kannst. Die Entity-ID ist nur ein Etikett: camera.ui erkennt die Entität an ihrer Registry-ID, ein Umbenennen in Home Assistant behält also den Sensor und seine Zuweisungen. Löschst du die Entität in Home Assistant, bleibt der Sensor und wird als entfernt markiert, bis du ihn auch hier löschst; ist Home Assistant nicht erreichbar, steht er nur auf nicht verfügbar.

Übernommene Entitäten merkt sich camera.ui, nicht das Plugin, sie überstehen also Neustarts von beiden.

## Die Integration parallel betreiben

Du kannst aus Home Assistant importieren und gleichzeitig die [Integration](/de/home-assistant/integration) betreiben. Das Plugin importiert nie die Kameras und Sensoren, die camera.ui selbst nach Home Assistant exportiert.

**Importierte Sensoren werden nie zurückgeschickt.** Ein aus Home Assistant geholter Sensor wird nie wieder nach Home Assistant exportiert, weder von diesem Plugin noch von der [Integration](/de/home-assistant/integration), selbst wenn du ihn an eine andere Bridge wie HomeKit freigibst.

[^cloud]: Cloud-Kameras wie Ring oder Nest-Kameras mit Akku beenden ihre Streams nach wenigen Minuten, für Daueraufnahme sind sie nicht gedacht.
