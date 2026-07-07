# Was ist camera.ui?

**camera.ui** ist eine selbstgehostete Plattform für deine Überwachungskameras. Sie vereint Live-Ansicht, durchgehende und ereignisbasierte Aufnahme, KI-Erkennung direkt auf dem Gerät und Smart-Home-Integration in einer modernen Oberfläche, komplett auf Hardware, die dir gehört.

Da alles auf deinem eigenen Server läuft, bleiben deine Aufnahmen auf Hardware, die du kontrollierst. Es gibt keine Cloud-Pflicht, und kein Dritter hält eine Kopie deiner Aufnahmen. Remote-Zugriff steht bereit, wenn du ihn willst, immer zu deinen Bedingungen.

::: tip Neu hier?
Starte mit den **[ersten Schritten](/de/intro/getting-started)** für eine geführte Einrichtung, oder geh direkt zur **[Installation](/de/install/)**.
:::

::: info In Arbeit
Diese Doku ist neu und wächst noch; Screenshots werden nach und nach ergänzt. Fehlt etwas oder ist unklar? Sag uns auf [Discord](https://discord.gg/bBGnGcbz8N) Bescheid oder eröffne ein Issue auf [GitHub](https://github.com/cameraui/docs/issues).
:::

## Was du machen kannst

- **Live ansehen.** Latenzarmes Streaming über WebRTC und MSE, Multi-Kamera-Raster, Gegensprechen, PTZ-Steuerung und Snapshots.
- **Rund um die Uhr aufnehmen.**[^license] Durchgehende, ereignisbasierte oder Ad-hoc-Aufnahme, mit scrubbarer Timeline, synchroner Multi-Kamera-Wiedergabe und MP4-/Zeitraffer-Export.
- **Erkennen, was zählt.** Bewegungs-, Objekt-, Gesichts-, Kennzeichen- und Audio-Erkennung, lokal auf deiner eigenen Hardware, plus semantische Suche und KI-generierte Ereignisbeschreibungen.
- **Informiert bleiben.**[^license] Push-Benachrichtigungen pro Kamera, Alarme nur bei bekannten Gesichtern, Ruhezeiten und kritische Alarme, die immer durchkommen.
- **Kameras verbinden.** Kameras über ONVIF und Dutzende weiterer Protokolle hinzufügen und per Apple HomeKit[^smarthome] ins Smart Home einbinden.
- **Erweitern.** Ein Plugin-System lässt dich Kameras, Detektoren und Integrationen aus einem In-App-Store hinzufügen.

## Live-Demo

Vor der Installation reinschauen? Wirf einen Blick auf die **[Live-Demo](https://demo.cameraui.com/)**.

## Betreibe es, wie du willst

camera.ui passt sich deinem Setup an:

- **Desktop-App** für macOS, Windows und Linux. Der einfachste Einstieg, mit Server und Viewer in einer App.
- **Server** für Always-on-Setups: Docker, Proxmox oder Bare-Metal-Linux.
- **Mobile Apps** für iOS und Android, um deine Kameras auch unterwegs im Blick zu behalten.

Unsicher, was passt? Siehe **[Welche Installation?](/de/install/)**.

## Wie es funktioniert

Ein einzelner Server übernimmt die Hauptarbeit. Er verbindet sich mit deinen Kameras, nimmt auf, führt die Erkennung aus und liefert die Weboberfläche aus, während die Desktop- und Mobile-Apps als Viewer dienen. Den größeren Zusammenhang findest du unter **[Wie es funktioniert](/de/intro/architecture)**.

## Nächste Schritte

- **[Erste Schritte](/de/intro/getting-started)** — camera.ui zum ersten Mal einrichten
- **[Kamera hinzufügen](/de/cameras/add-camera)** — deine erste Kamera verbinden
- **[Aufnahmen (NVR)](/de/recording/)** — 24/7- und Ereignis-Aufnahme konfigurieren
- **[Erkennung & KI](/de/detection/)** — Bewegungs- und Objekterkennung einrichten

[^license]: Ein aktives camera.ui-Abo deckt Aufnahmen (NVR) und die darauf aufbauenden Funktionen ab, etwa Wiedergabe, Export, Gesichtserkennung, semantische Suche und KI-Beschreibungen, dazu Push-Benachrichtigungen. Live-Ansicht und Echtzeit-Erkennung sind kostenlos.
[^smarthome]: Unterstützung für Google Home und Alexa ist geplant.
