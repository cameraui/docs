---
title: Apple TV
---

# Apple TV

Die Apple-TV-App bringt deine Kameras auf den großen Bildschirm: Live-Ansicht, Ereignisse und Aufnahmen mit Wiedergabe.[^license] Sie ist ein Viewer, der Server läuft also woanders (auf deinem [Desktop](/de/install/desktop) oder einer [Server-Installation](/de/install/)), und die App verbindet sich mit ihm.

<Shot src="/img/install/tv-app.png" alt="Die camera.ui Apple-TV-App" />

## Download

Derzeit in der **Beta**. Tritt über [TestFlight](https://testflight.apple.com/join/XWw3pmVN) bei: Apples TestFlight-App auf dem Apple TV installieren, dann die Einladung öffnen.[^appstore]

| Plattform | Voraussetzung |
|---|---|
| Apple TV | tvOS 17 oder neuer |

## Mit deinem Server verbinden

Die App verbindet sich direkt mit deinem Server, nicht über camera.ui Cloud. Füge einen Server über seine Adresse hinzu und melde dich an:

- **Im lokalen Netzwerk.** Gib die lokale Adresse des Servers ein, zum Beispiel `https://192.168.1.20:3443`.
- **Von überall.** Gib deine eigene öffentliche Adresse ein, eingerichtet mit einer [eigenen Domain](/de/remote/custom-domain) und einem [Reverse-Proxy](/de/remote/reverse-proxy).

Du kannst mehrere Server hinzufügen und zwischen ihnen wechseln, praktisch, wenn du zu Hause und woanders getrennte Server betreibst.

## Updates

Die App aktualisiert sich während der Beta über TestFlight, wie jede andere Apple-TV-App.

[^license]: Ein aktives camera.ui-Abo deckt Aufnahmen (NVR) und die darauf aufbauenden Funktionen ab, etwa Wiedergabe. Die Live-Ansicht ist kostenlos.
[^appstore]: Mit dem öffentlichen Release wechselt die App in den App Store.
