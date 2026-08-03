# Aktualisieren

camera.ui hat zwei Teile, die aktualisiert werden: den **Server** (den Kern, der die Arbeit erledigt) und die **App**, mit der du ihn installiert hast. Die meisten Updates laufen automatisch oder mit einem einzigen Klick. Die aktuellen Versionen und Updates findest du unter **Einstellungen → [System](/de/admin/system)**.

## Den Server aktualisieren

Der Server ist der wichtigste Teil, den du aktuell halten solltest. Wie du ihn aktualisierst, hängt von der Installationsart ab:

- **Desktop-App.** Die App aktualisiert den Server automatisch für dich, bevor sie ihn startet. Du musst nichts tun.
- **Docker oder Bare-Metal.** Wenn eine neue Server-Version verfügbar ist, zeigt **Einstellungen → [System](/de/admin/system)** einen **Aktualisieren**-Button. Wähle ihn, und der Server installiert das Update und startet neu. Ein neues Docker-Image zu ziehen macht das nicht: Der Launcher behält die Server-Version, die schon im Volume liegt. [Worker](/de/admin/workers) aktualisieren sich über die Workers-Seite des Masters; nur ein Worker, der noch auf einer Version vor 2.1.0 läuft, braucht eine manuelle Runde: führe `cameraui update-server -H /data` in seinem Container aus und starte ihn neu.

## Beta-Updates

Um Vorabversionen früh auszuprobieren, aktiviere unter **Einstellungen → [System](/de/admin/system)** die Option **Beta-Updates**. Der Server bietet dann Vorabversionen an, und unter **Verwalten** werden sie aufgelistet, sodass du eine bestimmte auswählen kannst. In der mobilen App schaltet derselbe Schalter zusätzlich die Beta-Over-the-Air-Updates der Oberfläche ein. Vorabversionen können weniger stabil sein, nutze das also nur, wenn du beim Testen helfen willst.[^beta-desktop]

[^beta-desktop]: Die Desktop-App zeigt den Schalter nicht, weil sie den Server zusammen mit der App aktualisiert.

## Die Desktop-App aktualisieren

Die [Desktop-App](/de/install/desktop) hält sich selbst aktuell. Beim Start installiert sie Updates von selbst. Im laufenden Betrieb prüft sie weiter, und wenn eine neue Version gefunden wird, meldet sie das und zeigt unter **Einstellungen → [System](/de/admin/system)** einen **Aktualisieren**-Button. Das Update wird installiert, sobald du ihn auswählst, oder beim nächsten Start. Da der Server-Modus auch den gebündelten Server aktualisiert, bleiben App und Server synchron.

Eine Ausnahme unter Linux: Nur die `.AppImage` aktualisiert sich selbst. Wenn du die `.deb` installiert hast, aktualisiere, indem du die neue `.deb` von der [Download-Seite](https://cameraui.com) herunterlädst und installierst.

## Das Docker-Image aktualisieren

Server und Image werden getrennt aktualisiert. Den Server über die UI zu aktualisieren ändert nicht das [Docker](/de/install/docker)-Image, und ein neues Image zu ziehen ändert nicht den Server: Der Launcher installiert den Server beim ersten Start ins Volume und behält diese Version dann über jeden späteren Pull hinweg. Ein frisches Image startet deinen bestehenden Server, keinen neueren, deshalb hebt erneutes Ziehen die Version nie an.

Um das **Image** selbst zu aktualisieren (Basis-OS, GPU-Bibliotheken und Launcher), zieh die neueste Version und erstelle den Container neu:

```bash
docker compose pull
docker compose up -d
```

Um den **Server** zu aktualisieren, nutze den **Aktualisieren**-Button oben oder führe `cameraui update-server -H /data` im Container aus und starte ihn danach neu. Das `-H /data` ist wichtig: ohne landet das Update außerhalb des Daten-Volumes und der Neustart bootet wieder die alte Version.

## Die Mobile-Apps aktualisieren

Die [Mobile-Apps](/de/install/mobile) aktualisieren sich über den App Store und Google Play wie jede andere App (während der Beta über TestFlight auf iOS und den Testing-Track im Play Store auf Android) und erhalten zusätzlich Over-the-Air-Updates der Oberfläche.

<Shot src="/img/install/system-update.png" alt="Update-Button unter Einstellungen / System" />
