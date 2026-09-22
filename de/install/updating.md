# Aktualisieren

camera.ui hat zwei Teile, die aktualisiert werden: den **Server** und die **App**, mit der du ihn installiert hast. Beides läuft über die Seite **Updates**, egal wie du installiert hast.

## Die Updates-Seite

**Updates** in der Navigation sammelt alles, was aktualisiert werden kann, in drei Abschnitten: **Server**, **Plugins** und **Worker**. Eine Zeile mit einer neueren Version öffnet deren Release Notes, **Nach Updates suchen** prüft erneut. Nur für Admins.

**Alle aktualisieren** installiert erst die Worker, dann die Plugins, den Server zuletzt, weil seine Installation ihn neu startet. Ein fehlgeschlagener Eintrag kann einzeln wiederholt werden. Es läuft immer nur ein Durchgang, der Button wartet also, solange ein per Hand gestartetes Plugin- oder Worker-Update läuft.

<Shot src="/img/admin/updates.png" alt="Updates-Seite mit den Abschnitten Server und Plugins" />

Eine Zeile kann auch sagen, warum sie hier nicht aktualisiert werden kann. **Aktualisiert sich mit der Desktop-App** heißt, die App ist zu alt, um ihre Updates aus der Ferne zu installieren, aktualisiere sie also auf ihrer Maschine.

camera.ui sucht alle 10 Minuten nach neuen Versionen und meldet sich, wenn Server, ein Plugin oder ein Worker eine hat.

## Den Server aktualisieren

Wie der Server aktualisiert wird, hängt von der Installationsart ab:

- **Docker oder Bare-Metal.** Die **Updates**-Seite installiert die neue Version und startet den Server neu. Ein neues Docker-Image aktualisiert den Server nicht (siehe [Das Docker-Image aktualisieren](#das-docker-image-aktualisieren)).
- **Desktop-App.** App und Server gehören zusammen, die Zeile **Server** ist deshalb die App selbst. Siehe [Die Desktop-App aktualisieren](#die-desktop-app-aktualisieren).

Die Benachrichtigung für eine Vorabversion trägt den Titel **Beta update**.

## Beta-Updates

Mit **Beta-Updates** unter **Einstellungen → [System](/de/admin/system)** bietet der Server Vorabversionen an, und **Verwalten** auf derselben Seite listet sie, um eine bestimmte zu installieren. Der Schalter erreicht alles, was diesem Server folgt: Die Desktop-App wechselt auf den Beta-Feed, ein Server auf einer Beta zieht seine Desktop-Worker auf die passende Beta nach, und in der mobilen App schaltet er zusätzlich die Beta-Over-the-Air-Updates der Oberfläche ein. Vorabversionen können weniger stabil sein. Bist du einmal auf einer Vorabversion, bietet der Server die nächste Beta weiter an, auch wenn du den Schalter wieder ausschaltest. Installiere unter **Verwalten** eine stabile Version, um die Beta-Schiene zu verlassen.

<Shot src="/img/install/system-update.png" alt="Beta-Updates und die Server-Version auf der System-Seite" />

## Beta-Versionen von Plugins

Plugins haben einen eigenen Schalter, die **Beta-Updates** des Servers erreichen sie nicht. **Beta-Versionen** im Zahnrad-Menü neben der Suche auf der [Plugins-Seite](/de/plugins/) nimmt Vorabversionen in die Versionsauswahl jedes Plugins auf und bietet sie als Updates an. Wieder aus, bleibt eine installierte Beta, bis du eine andere Version wählst. Siehe [Plugins](/de/plugins/).

## Die Desktop-App aktualisieren

Die [Desktop-App](/de/install/desktop) installiert Updates beim Start und prüft im laufenden Betrieb weiter. Ein gefundenes Update erscheint auf der **Updates**-Seite als Zeile **Server**: Installieren lädt es und startet die App neu, auch von einem anderen Gerät aus. Lässt du es liegen, installiert es sich beim nächsten Start.

Eine Ausnahme unter Linux: Nur die `.AppImage` aktualisiert sich selbst. Die `.deb` aktualisierst du, indem du die neue `.deb` von der [Download-Seite](https://cameraui.com) installierst.

## Das Docker-Image aktualisieren

Server und [Docker](/de/install/docker)-Image werden getrennt aktualisiert. Der Launcher installiert den Server beim ersten Start ins Volume und behält diese Version über jeden späteren Pull hinweg.

Das **Image** (Basis-OS, GPU-Bibliotheken, Launcher) aktualisierst du so:

```bash
docker compose pull
docker compose up -d
```

Um den **Server** zu aktualisieren, nutze die **Updates**-Seite oder führe `cameraui update-server -H /data` im Container aus und starte ihn danach neu. Das `-H /data` ist wichtig: ohne landet das Update außerhalb des Daten-Volumes und der Neustart bootet wieder die alte Version.

## Die Mobile-Apps aktualisieren

Die [Mobile-Apps](/de/install/mobile) aktualisieren sich über den App Store und Google Play (während der Beta: TestFlight auf iOS, der Testing-Track im Play Store auf Android) und erhalten zusätzlich Over-the-Air-Updates der Oberfläche.
