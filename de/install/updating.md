# Aktualisieren

camera.ui hat zwei Teile, die aktualisiert werden: den **Server** (den Kern, der die Arbeit erledigt) und die **App**, mit der du ihn installiert hast. **Updates** in der Navigation ist der Ort, an dem das alles passiert, egal wie du installiert hast.

## Die Updates-Seite

**Updates** in der Navigation sammelt alles, was aktualisiert werden kann, in drei Abschnitten: **Server**, **Plugins** und **Worker**. Jede Zeile nennt die installierte Version und ob sie aktuell ist, und eine Zeile mit einer neueren Version öffnet die Release Notes dieser Version. Die Kopfzeile sagt, wann die Liste zuletzt geprüft wurde, **Nach Updates suchen** prüft erneut. Nur für Admins.

**Alle aktualisieren** installiert alles in einem Durchgang, in der Reihenfolge, die einen Neustart übersteht: erst die Worker, dann die Plugins, der Server zuletzt, weil seine Installation ihn neu startet. Du siehst, welcher Eintrag gerade läuft und wie weit der Durchgang ist, und ein fehlgeschlagener Eintrag kann einzeln wiederholt werden. Es läuft immer nur ein Durchgang, der Button wartet also, wenn du ein Plugin- oder Worker-Update schon per Hand gestartet hast.

<Shot src="/img/admin/updates.png" alt="Updates-Seite mit den Abschnitten Server und Plugins" />

Eine Zeile kann auch sagen, warum sie hier nicht aktualisiert werden kann. **Aktualisiert sich mit der Desktop-App** heißt, die App ist zu alt, um ihre Updates aus der Ferne zu installieren, aktualisiere sie also auf ihrer Maschine. **Einmal direkt auf seiner Maschine aktualisieren** heißt, der Worker läuft auf einer Version vor 2.1.0 und versteht das Update-Kommando noch nicht, siehe [Worker](/de/admin/workers).

camera.ui sucht alle 10 Minuten nach neuen Versionen und meldet sich, wenn Server, ein Plugin oder ein Worker eine hat. Diese Benachrichtigungen und der Punkt am Navigationseintrag führen hierher.

## Den Server aktualisieren

Der Server ist der wichtigste Teil, den du aktuell halten solltest. Wie du ihn aktualisierst, hängt von der Installationsart ab:

- **Docker oder Bare-Metal.** Die **Updates**-Seite installiert die neue Version und startet den Server neu. Ein neues Docker-Image zu ziehen macht das nicht: Der Launcher behält die Server-Version, die schon im Volume liegt. Nur ein Worker, der noch auf einer Version vor 2.1.0 läuft, braucht eine manuelle Runde: führe `cameraui update-server -H /data` in seinem Container aus und starte ihn neu.
- **Desktop-App.** App und Server gehören zusammen, die Zeile **Server** ist deshalb die App selbst. Siehe [Die Desktop-App aktualisieren](#die-desktop-app-aktualisieren).

Die Benachrichtigung nennt die Version, etwa "camera.ui 2.1.9 is available". Eine Vorabversion kommt mit dem Titel **Beta update**.

## Beta-Updates

Um Vorabversionen früh auszuprobieren, aktiviere unter **Einstellungen → [System](/de/admin/system)** die Option **Beta-Updates**. Der Server bietet dann Vorabversionen an, und **Verwalten** auf derselben Seite listet sie auf, sodass du eine bestimmte installieren kannst. Der Schalter erreicht alles, was diesem Server folgt: Die Desktop-App wechselt auf den Beta-Feed, ein Server auf einer Beta zieht seine Desktop-Worker auf die passende Beta nach, und in der mobilen App schaltet er zusätzlich die Beta-Over-the-Air-Updates der Oberfläche ein. Vorabversionen können weniger stabil sein, nutze das also nur, wenn du beim Testen helfen willst. Bist du einmal auf einer Vorabversion, bietet der Server die nächste Beta weiter an, auch wenn du den Schalter wieder ausschaltest. Installiere unter **Verwalten** eine stabile Version, um die Beta-Schiene zu verlassen.

<Shot src="/img/install/system-update.png" alt="Beta-Updates und die Server-Version auf der System-Seite" />

## Die Desktop-App aktualisieren

Die [Desktop-App](/de/install/desktop) hält sich selbst aktuell. Beim Start installiert sie Updates von selbst, und im laufenden Betrieb prüft sie weiter. Findet sie eines, bietet die **Updates**-Seite es als Zeile **Server** an: Es zu installieren lädt das App-Update, installiert es und startet die App neu. Das geht auch von einem anderen Gerät aus, ein Mini-PC im Schrank, auf dem die App läuft, braucht also keine Tastatur. Lässt du es liegen, installiert sich das Update beim nächsten Start.

Eine Ausnahme unter Linux: Nur die `.AppImage` aktualisiert sich selbst. Wenn du die `.deb` installiert hast, aktualisiere, indem du die neue `.deb` von der [Download-Seite](https://cameraui.com) herunterlädst und installierst.

## Das Docker-Image aktualisieren

Server und Image werden getrennt aktualisiert. Den Server über die UI zu aktualisieren ändert nicht das [Docker](/de/install/docker)-Image, und ein neues Image zu ziehen ändert nicht den Server: Der Launcher installiert den Server beim ersten Start ins Volume und behält diese Version dann über jeden späteren Pull hinweg.

Um das **Image** selbst zu aktualisieren (Basis-OS, GPU-Bibliotheken und Launcher), zieh die neueste Version und erstelle den Container neu:

```bash
docker compose pull
docker compose up -d
```

Um den **Server** zu aktualisieren, nutze die **Updates**-Seite oder führe `cameraui update-server -H /data` im Container aus und starte ihn danach neu. Das `-H /data` ist wichtig: ohne landet das Update außerhalb des Daten-Volumes und der Neustart bootet wieder die alte Version.

## Die Mobile-Apps aktualisieren

Die [Mobile-Apps](/de/install/mobile) aktualisieren sich über den App Store und Google Play wie jede andere App (während der Beta über TestFlight auf iOS und den Testing-Track im Play Store auf Android) und erhalten zusätzlich Over-the-Air-Updates der Oberfläche.
