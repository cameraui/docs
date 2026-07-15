---
title: Worker
---

# Worker

<Shot src="/img/admin/workers.png" alt="Die Worker-Einstellungen" />

Ein **Worker** ist eine zweite Maschine, die einen Teil der Verarbeitung eines Servers übernimmt. Der Hauptserver (der **Master**) behält die Oberfläche, die Einstellungen und die Aufnahmen; Worker steuern Rechenleistung bei. Verwalte sie unter **Workers** (im Menü).

Typische Gründe für einen Worker:

- **Ausgelastete Kameras.** Dekodierung und Erkennung ausgewählter Kameras wandern auf den Worker und machen CPU und GPU des Masters für den Rest frei.
- **Hardware, die dem Master fehlt.** Ein ganzes Plugin kann auf einem Worker laufen, etwa ein Erkennungs-Backend, das eine GPU braucht, die der Master nicht hat, oder ein Plugin, das die Plattform des Masters nicht laden kann.
- **Wachsende Setups.** Kommen Kameras dazu, stellst du einen Worker daneben, statt den Server zu ersetzen.

## Wie Worker funktionieren

Ein Worker ist eine normale camera.ui-Installation, die im Worker-Modus gestartet wird. Er hat keine eigene Oberfläche, verwaltet keine Kameras und speichert keine Aufnahmen; er verbindet sich mit dem Master und wartet auf Arbeit.

- **Der Worker verbindet sich nach außen.** Das Pairing läuft über den HTTPS-Port des Masters, die laufende Verbindung über dessen Worker-Port (Standard `7422`). Nur der Master muss erreichbar sein; auf der Worker-Maschine muss nichts freigegeben werden.
- **Einmal gekoppelt, dann selbstständig.** Ein einmaliger Pairing-Code wird gegen eigene Zugangsdaten des Workers getauscht. Zwischen Workern wird nichts geteilt, jeder lässt sich einzeln widerrufen, und nach dem ersten Start verbindet sich der Worker von selbst wieder.
- **Zuweisungen folgen dem Worker.** [Zugewiesene](#kamera-und-plugin-zuweisungen) Kameras und Plugins laufen auf dem Worker, fallen auf den Master zurück, solange er offline ist, und wandern zurück, sobald er wiederkommt (siehe [Ausfallsicherung](#ausfallsicherung)).

Master und Worker brauchen nicht dieselbe Installationsart, jede Mischung funktioniert: ein Docker-Server mit einem alten Laptop, auf dem die [Desktop-App](#worker-mit-der-desktop-app) als Worker läuft, ein Desktop-App-Server mit einem [Docker-Worker](#worker-in-docker) auf einem Mini-PC, ein Bare-Metal-Linux-Server mit beidem. Die camera.ui-Version sollte auf allen Maschinen übereinstimmen; die [Worker-Liste](#die-worker-liste) warnt, wenn nicht.

## Worker aktivieren

Aktiviere **Workers aktivieren** auf dem Master und setze eine **Master-Adresse**, die LAN-IP oder den Hostnamen, über den andere Maschinen diesen Server erreichen. Ohne Adresse lassen sich Workers nicht aktivieren. Ein **Worker-Verbindungsport** (Standard `7422`) wird ebenfalls benötigt; wird er später geändert, müssen bereits gepairte Worker neu gepairt werden.

## Einen Worker koppeln

Klicke auf **Pairing-Code generieren**, um einen einmaligen Code zu erzeugen (15 Minuten gültig). Dazu gibt es einen fertigen Konfigurationsausschnitt:

```yaml
worker:
  master: <Master-Adresse>
  apiPort: <API-Port>
  pairingCode: <Code>
  name: my-worker
  capabilities:
    - frameDecoding
    - pluginHost
```

Der Code lässt sich nur einmal verwenden, und nur der erste Start braucht ihn: Der Worker tauscht ihn gegen eigene Zugangsdaten und verbindet sich danach von selbst wieder. Wie der Ausschnitt auf den Worker kommt, hängt von der Installation ab, siehe die nächsten Abschnitte.

## Die Worker-Maschine einrichten

### Worker in Docker

Ein Worker läuft aus demselben Image wie der Server, nur im Worker-Modus gestartet. Speichere das hier als `docker-compose.worker.yml` auf der zweiten Maschine, mit der Adresse deines Masters und dem Pairing-Code von oben:

```yaml
name: cameraui-worker

services:
  cameraui-worker:
    image: ghcr.io/cameraui/camera.ui:latest
    container_name: cameraui-worker
    restart: unless-stopped
    network_mode: host
    environment:
      - TZ=Europe/Berlin
      - CAMERA_UI_WORKER=true
      - CAMERA_UI_WORKER_MASTER=192.168.1.10
      - CAMERA_UI_WORKER_PAIRING_CODE=XXXX-XXXX
      - CAMERA_UI_WORKER_NAME=worker-1
    volumes:
      - cameraui-worker-data:/data

volumes:
  cameraui-worker-data:
```

Dann starte ihn:

```bash
docker compose -f docker-compose.worker.yml up -d
```

Die Master-Adresse nimmt einen Hostnamen oder eine IP an, ohne Schema. `CAMERA_UI_WORKER_API_PORT` brauchst du nur, wenn der HTTPS-Port des Masters vom Standard abweicht. Um Hardware für die Dekodierung durchzureichen, nutze dieselben Override-Dateien wie beim Haupt-Deployment, siehe [Hardware-Beschleunigung](/de/install/hardware-acceleration).

### Worker mit der Desktop-App

Auch ein alter Laptop oder ein Mini-PC mit installierter [Desktop-App](/de/install/desktop) kann als Worker beitreten. Wähle beim ersten Start **Worker** im Modus-Dialog (oder später über **Modus wechseln…** im Tray-Menü), gib die Adresse des Masters und den Pairing-Code ein und verbinde. Statt der normalen Oberfläche zeigt die App ein kleines Statusfenster mit dem Verbindungsstatus. Stimmt die Adresse nicht oder ist der Code abgelaufen, öffnet sich der Dialog erneut und zeigt, was fehlgeschlagen ist.

Zwei Tray-Optionen machen das wartungsfrei: **Beim Anmelden öffnen** startet die App mit dem System, minimiert in den Tray, und **In den Tray schließen** lässt den Worker im Hintergrund weiterlaufen, wenn das Fenster geschlossen wird.[^trayopts] Die Adresse nimmt einen Hostnamen oder eine IP an, mit `:Port` nur, wenn der HTTPS-Port des Masters vom Standard abweicht.

[^trayopts]: Beim Anmelden öffnen gibt es unter Windows und macOS. In den Tray schließen gibt es unter Windows und Linux; unter macOS läuft die App beim Schließen des Fensters ohnehin weiter.

### Worker unter Linux (Bare-Metal)

Füge den Ausschnitt in die `config.yml` der Worker-Maschine ein und starte sie dann mit `cameraui --worker run`. Damit die Maschine auch nach einem Neustart Worker bleibt, installiere sie stattdessen als Service: `cameraui --worker install` (das Flag wird mit dem Service gespeichert, siehe [Linux (Bare-Metal)](/de/install/linux)).

### Umgebungsvariablen

Alternativ kannst du dieselben Werte als Umgebungsvariablen setzen, was in einem Container meist einfacher ist. `CAMERA_UI_WORKER=true` startet den Worker-Modus ohne die Option `--worker`, und `CAMERA_UI_WORKER_MASTER`, `CAMERA_UI_WORKER_API_PORT`, `CAMERA_UI_WORKER_PAIRING_CODE`, `CAMERA_UI_WORKER_NAME` sowie `CAMERA_UI_WORKER_CAPABILITIES` (kommagetrennt) decken den Rest des Ausschnitts ab. Eine `config.yml` ist dann nicht nötig, und wenn du beides setzt, gewinnt die Umgebungsvariable.

## Die Worker-Liste

Sobald gekoppelt, erscheint ein Worker in der **Workers**-Liste mit Online-/Offline-Status, Plattform (Betriebssystem/Architektur), Prozess-ID, Version sowie Live-CPU- und Speichernutzung. Weicht die Version eines Workers von der des Masters ab, wird ein Hinweis angezeigt.

## Kamera- und Plugin-Zuweisungen

Unter **Kamera-Zuweisungen** wählst du, welche Kamera jeder Worker dekodiert und auf der er erkennt; als **Lokal** belassene Kameras bleiben auf dem Hauptserver.

Unter **Plugin-Zuweisungen** kann ein ganzes Plugin auf einem Worker statt auf dem Hauptserver laufen, etwa ein Erkennungs-Backend, das Hardware braucht, die dem Hauptserver fehlt. Es werden nur Worker angeboten, deren Plattform mit dem Plugin kompatibel ist. Der Worker installiert und startet das Plugin; konfiguriert wird es weiterhin ganz normal in der Oberfläche.

## Ausfallsicherung

Worker senden alle 5 Sekunden einen Heartbeat und gelten nach 15 Sekunden ohne Heartbeat als offline. Trennt sich ein Worker, fallen seine zugewiesenen Kameras und Plugins automatisch auf den Hauptserver zurück (ein Plugin nur, wenn die Plattform des Hauptservers es ausführen kann). Verbindet sich der Worker erneut, werden seine Kameras und Plugins automatisch wieder zu ihm verschoben.

Einen Worker zu entfernen widerruft seine Zugangsdaten und trennt die Verbindung; seine zugewiesenen Kameras und Plugins fallen auf den Hauptserver zurück.
