# Aktualisieren

camera.ui hat zwei Teile, die aktualisiert werden: den **Server** (den Kern, der die Arbeit erledigt) und die **App**, mit der du ihn installiert hast. Die meisten Updates laufen automatisch oder mit einem einzigen Klick. Die aktuellen Versionen und Updates findest du unter **Einstellungen → [System](/de/admin/system)**.

## Den Server aktualisieren

Der Server ist der wichtigste Teil, den du aktuell halten solltest. Wie du ihn aktualisierst, hängt von der Installationsart ab:

- **Desktop-App.** Die App aktualisiert den Server automatisch für dich, bevor sie ihn startet. Du musst nichts tun.
- **Docker oder Bare-Metal.** Wenn eine neue Server-Version verfügbar ist, zeigt **Einstellungen → [System](/de/admin/system)** einen **Aktualisieren**-Button. Wähle ihn, und der Server installiert das Update und startet neu.

## Beta-Updates

Um Vorabversionen früh auszuprobieren, aktiviere unter **Einstellungen → [System](/de/admin/system)** die Option **Beta-Updates**. Der Server bietet dann Vorabversionen an, und unter **Verwalten** werden sie aufgelistet, sodass du eine bestimmte auswählen kannst. In der mobilen App schaltet derselbe Schalter zusätzlich die Beta-Over-the-Air-Updates der Oberfläche ein. Vorabversionen können weniger stabil sein, nutze das also nur, wenn du beim Testen helfen willst.[^beta-desktop]

[^beta-desktop]: Die Desktop-App zeigt den Schalter nicht, weil sie den Server zusammen mit der App aktualisiert.

## Die Desktop-App aktualisieren

Die [Desktop-App](/de/install/desktop) hält sich selbst aktuell. Beim Start installiert sie Updates von selbst. Im laufenden Betrieb prüft sie weiter, und wenn eine neue Version gefunden wird, meldet sie das und zeigt unter **Einstellungen → [System](/de/admin/system)** einen **Aktualisieren**-Button. Das Update wird installiert, sobald du ihn auswählst, oder beim nächsten Start. Da der Server-Modus auch den gebündelten Server aktualisiert, bleiben App und Server synchron.

Eine Ausnahme unter Linux: Nur die `.AppImage` aktualisiert sich selbst. Wenn du die `.deb` installiert hast, aktualisiere, indem du die neue `.deb` von der [Download-Seite](https://cameraui.com) herunterlädst und installierst.

## Das Docker-Image aktualisieren

Den Server über die UI zu aktualisieren ändert nicht das [Docker](/de/install/docker)-Image. Um das Image selbst zu aktualisieren (Basis-OS, GPU-Bibliotheken und Launcher), zieh die neueste Version und erstelle den Container neu:

```bash
docker compose pull
docker compose up -d
```

Die von dir gewählte Server-Version wird separat gespeichert und bleibt über Image-Pulls hinweg erhalten, sodass ein Image-Update sie nie zurücksetzt.

## Die Mobile-Apps aktualisieren

Die [Mobile-Apps](/de/install/mobile) aktualisieren sich über den App Store und Google Play (während der Beta über TestFlight) wie jede andere App und erhalten zusätzlich Over-the-Air-Updates der Oberfläche.

<Shot src="/img/install/system-update.png" alt="Update-Button unter Einstellungen / System" />
