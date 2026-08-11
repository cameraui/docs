---
title: Apple TV
---

# Apple TV

Die Apple-TV-App bringt deine Kameras auf den großen Bildschirm: eine Live-Wand, deine Ereignisse mit Wiedergabe und deine Sensoren.[^license] Sie ist ein Viewer, der Server läuft also woanders (auf deinem [Desktop](/de/install/desktop) oder einer [Server-Installation](/de/install/)), und die App verbindet sich mit ihm.

<Shot src="/img/install/tv-app.png" alt="Die camera.ui Apple-TV-App" />

## Download

Derzeit in der **Beta**. Tritt über [TestFlight](https://testflight.apple.com/join/XWw3pmVN) bei: Apples TestFlight-App auf dem Apple TV installieren, dann die Einladung öffnen.[^appstore]

| Plattform | Voraussetzung |
|---|---|
| Apple TV | tvOS 17 oder neuer |

## Mit deinem Server verbinden

Die App verbindet sich direkt mit deinem Server, nicht über camera.ui Cloud.

Im selben Netzwerk findet die App deinen Server von selbst, wähl ihn einfach aus der Liste. Du kannst auch einen per Adresse hinzufügen:

- **Im lokalen Netzwerk.** Gib die lokale Adresse des Servers ein, zum Beispiel `https://192.168.1.20:3443`.
- **Von überall.** Gib deine eigene öffentliche Adresse ein, eingerichtet mit einer [eigenen Domain](/de/remote/custom-domain) und einem [Reverse-Proxy](/de/remote/reverse-proxy).

Melde dich mit Benutzername und Passwort an, dazu einem Zwei-Faktor-Code, falls du einen nutzt, oder füge einen API-Token ein.[^token]

Du kannst mehrere Server hinzufügen und zwischen ihnen wechseln, praktisch, wenn du zu Hause und woanders getrennte Server betreibst.

## Rund um die App

- **Home.** Oben die neueste Aktivität, dazu Kamera- und Speicher-Status und die heutige Ereigniszahl. Wähl eine Benachrichtigung, um direkt zur Aufnahme zu springen.
- **Camview.** Eine Live-Wand deiner Kameras. Wähl ein Raster oder ein gemischtes Layout, ordne die Kacheln um oder öffne eine Kamera im Vollbild.
- **Ereignisse.** Deine Ereignisse nach Tag gruppiert, mit Filtern für Personen, Gesichter, Fahrzeuge, Tiere, Pakete, Türklingel, Sensoren, Geräusche und Bewegung. Wähl eines, um es ab diesem Moment abzuspielen. Scroll weiter, um ältere Tage zu erreichen.
- **Sensoren.** Deine Sensoren als Kacheln, live vom Server.

### Sensoren

Die Sensoren-Seite legt jeden Sensor als Kachel an, nach Typ gruppiert, mit seinem aktuellen Zustand.[^sensors]

- **Klick zum Umschalten.** Wähl ein Licht, einen Schalter, eine Sirene, ein Schloss oder ein Garagentor, um es umzulegen.
- **Halten für mehr.** Halte die Auswahltaste, oder drück Play/Pause, um ein Panel mit Helligkeit, Lautstärke, Alarmmodi oder Schloss- und Garagensteuerung zu öffnen.
- **Bleibt synchron.** Neue Sensoren erscheinen von selbst, entfernte verschwinden, und Zustände aktualisieren sich, wenn sie sich ändern.

## Updates

Die App aktualisiert sich während der Beta über TestFlight, wie jede andere Apple-TV-App.

Ist dein Server oder sein Aufnahme-Plugin älter als die App braucht, zeigt die App einen **Update needed**-Screen, der genau nennt, was zu aktualisieren ist, statt leerer Listen und fehlender Bilder. Aktualisiere camera.ui auf dem Server und öffne die App erneut.

[^license]: Ein aktives camera.ui-Abo deckt Aufnahmen (NVR) und die darauf aufbauenden Funktionen ab, etwa Wiedergabe. Die Live-Ansicht ist kostenlos.
[^appstore]: Mit dem öffentlichen Release wechselt die App in den App Store.
[^token]: Erstelle einen Token in camera.ui unter Einstellungen, Konto, API-Tokens.
[^sensors]: Das sind dieselben Sensoren wie auf der Web-Sensoren-Seite. Erkennungssensoren, die an eine einzelne Kamera gebunden sind, bleiben hier ausgeblendet.
