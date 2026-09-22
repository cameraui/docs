---
title: Apple TV
---

# Apple TV

Die Apple-TV-App bringt deine Kameras auf den großen Bildschirm: eine Live-Wand, deine Ereignisse mit Wiedergabe und deine Sensoren.[^license] Sie verbindet sich mit einem Server, der woanders läuft (der [Desktop-App](/de/install/desktop) oder einer [Server-Installation](/de/install/)).

<Shot src="/img/install/tv-app.png" alt="Die camera.ui Apple-TV-App" />

## Download

Derzeit in der **Beta**. Tritt über [TestFlight](https://testflight.apple.com/join/XWw3pmVN) bei: Apples TestFlight-App auf dem Apple TV installieren, dann die Einladung öffnen.[^appstore]

| Plattform | Voraussetzung |
|---|---|
| Apple TV | tvOS 17 oder neuer |

## Mit deinem Server verbinden

Die App verbindet sich direkt mit deinem Server, nicht über camera.ui Cloud.

Im selben Netzwerk listet die App deinen Server von selbst. Du kannst auch einen per Adresse hinzufügen:

- **Im lokalen Netzwerk.** Gib die lokale Adresse des Servers ein, zum Beispiel `https://192.168.1.20:3443`.
- **Von überall.** Gib deine eigene öffentliche Adresse ein, eingerichtet mit einer [eigenen Domain](/de/remote/custom-domain) und einem [Reverse-Proxy](/de/remote/reverse-proxy).

Melde dich mit Benutzername und Passwort an, dazu einem Zwei-Faktor-Code, falls du einen nutzt, oder füge einen API-Token ein.[^token]

Du kannst mehrere Server hinzufügen und zwischen ihnen wechseln.

## Rund um die App

- **Home.** Oben die neueste Aktivität, dazu Kamera- und Speicher-Status und die heutige Ereigniszahl. Eine Benachrichtigung öffnet ihre Aufnahme.
- **Camview.** Eine Live-Wand deiner Kameras. Raster oder gemischtes Layout, umsortierbare Kacheln, Vollbild pro Kamera. **Fill wall** lässt die Ränder weg und füllt den Bildschirm, **Whole picture** passt jede Kamera mit Balken in ihre Kachel ein, statt sie zu beschneiden. Beides bleibt pro Ansicht gespeichert.
- **Ereignisse.** Deine Ereignisse nach Tag gruppiert, mit Filtern für Personen, Gesichter, Fahrzeuge, Tiere, Türklingel, Sensoren, Geräusche und Bewegung. Ein Ereignis spielt ab diesem Moment ab.
- **Episoden.** [Episoden](/de/detection/episodes) erscheinen als Mosaik-Karten zwischen deinen Ereignissen und auf dem Home-Screen. Öffnest du eine, spielt sie die ganze Story und wechselt von selbst zwischen den Kameras. Links und rechts springen zwischen den Kameras.
- **Gegensprechen.** Im Vollbild-Player spricht der Mikrofon-Button über die Kamera, sofern sie Gegensprechen unterstützt.
- **PTZ.** Eine Kamera, die schwenken, neigen oder zoomen kann, bekommt im Player einen Bewegen-Button. Halte eine Richtung, um weiter zu fahren, ein kurzer Druck rückt ein Stück. Home-Position und Presets erscheinen, wenn die Kamera sie hat. Siehe [PTZ & Autotrack](/de/sensors/ptz).

Die Wiedergabe folgt der [Wiedergabe-Quelle](/de/recording/timeline-playback#wiedergabequalität) jeder Kamera, Episoden eingeschlossen. Bei Auto spielt eine Lücke in der High-Aufnahme die nächste Qualität mit Material, genau wie im Webinterface.

### Sensoren

Die Sensoren-Seite legt jeden Sensor als Kachel an, nach Typ gruppiert, mit seinem aktuellen Zustand.[^sensors]

- **Klick zum Umschalten.** Lichter, Schalter, Sirenen, Schlösser und Garagentore schalten beim Auswählen um.
- **Halten für mehr.** Auswahltaste halten oder Play/Pause öffnet Helligkeit, Lautstärke, Alarmmodi oder Schloss- und Garagensteuerung.
- **Live.** Sensoren und Zustände aktualisieren sich, sobald sie sich auf dem Server ändern.

## Updates

Während der Beta aktualisiert sich die App über TestFlight.

Ist der Server oder sein Aufnahme-Plugin älter als die App braucht, zeigt die App einen **Update needed**-Screen, der nennt, was zu aktualisieren ist. Aktualisiere es auf dem Server und öffne die App erneut.

[^license]: Ein aktives camera.ui-Abo deckt Aufnahmen (NVR) und die darauf aufbauenden Funktionen ab, etwa Wiedergabe. Die Live-Ansicht ist kostenlos.
[^appstore]: Mit dem öffentlichen Release wechselt die App in den App Store.
[^token]: Erstelle einen [API-Token](/de/admin/security#api-tokens) in camera.ui unter Einstellungen, Account, API-Tokens.
[^sensors]: Das sind dieselben Sensoren wie auf der Web-Sensoren-Seite. Erkennungssensoren, die an eine einzelne Kamera gebunden sind, bleiben hier ausgeblendet.
