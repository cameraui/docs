# Aktualisieren

camera.ui hat zwei Teile, die aktualisiert werden: den **Server** (den Kern, der die Arbeit erledigt) und die **App**, mit der du ihn installiert hast. Die meisten Updates laufen automatisch oder mit einem einzigen Klick. Die aktuellen Versionen und Updates findest du unter **Einstellungen → [System](/de/admin/system)**.

## Den Server aktualisieren

Der Server ist der wichtigste Teil, den du aktuell halten solltest. Wie du ihn aktualisierst, hängt von der Installationsart ab:

- **Desktop-App.** Die App aktualisiert den Server automatisch für dich, bevor sie ihn startet. Du musst nichts tun.
- **Docker oder Bare-Metal.** Wenn eine neue Server-Version verfügbar ist, zeigt **Einstellungen → [System](/de/admin/system)** einen **Aktualisieren**-Button. Wähle ihn, und der Server installiert das Update und startet neu.

## Beta-Updates

Willst du Vorabversionen früh ausprobieren? Öffne unter **Einstellungen → [System](/de/admin/system)** den Punkt **Verwalten** und wähle eine Version zum Installieren, auch Vorabversionen. In den Mobile-Apps kannst du stattdessen **Beta-Updates** aktivieren, um sie automatisch zu erhalten. Vorabversionen können weniger stabil sein, nutze das also nur, wenn du beim Testen helfen willst.

## Die Desktop-App aktualisieren

Die [Desktop-App](/de/install/desktop) hält sich selbst aktuell. Sie prüft beim Start und regelmäßig im Betrieb, lädt Updates dann von selbst herunter und installiert sie. Da der Server-Modus auch den gebündelten Server aktualisiert, bleiben App und Server synchron.

## Das Docker-Image aktualisieren

Den Server über die UI zu aktualisieren ändert nicht das [Docker](/de/install/docker)-Image. Um das Image selbst zu aktualisieren (Basis-OS, GPU-Bibliotheken und Launcher), zieh die neueste Version und erstelle den Container neu:

```bash
docker compose pull
docker compose up -d
```

Die von dir gewählte Server-Version wird separat gespeichert und bleibt über Image-Pulls hinweg erhalten, sodass ein Image-Update sie nie zurücksetzt.

## Die Mobile-Apps aktualisieren

Die [Mobile-Apps](/de/install/mobile) aktualisieren sich über den App Store und Google Play wie jede andere App und erhalten zusätzlich Over-the-Air-Updates der Oberfläche.

![Update-Button unter Einstellungen / System](/img/install/system-update.png)
