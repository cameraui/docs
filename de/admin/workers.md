---
title: Worker
---

# Worker

<Shot src="/img/admin/workers.png" alt="Die Worker-Einstellungen" />

Ein **Worker** ist eine zweite Maschine, die einen Teil der Verarbeitung eines Servers übernimmt. Der Hauptserver (der **Master**) behält die Oberfläche, die Einstellungen und die Aufnahmen; Worker steuern Rechenleistung bei. Verwalte sie unter **Workers** (im Menü).

Ein Worker übernimmt Dekodierung und Erkennung ausgewählter Kameras oder führt ein ganzes Plugin aus, etwa ein Erkennungs-Backend, das eine GPU braucht, die der Master nicht hat, oder ein Plugin, das die Plattform des Masters nicht laden kann.

## Wie Worker funktionieren

Ein Worker ist eine normale camera.ui-Installation, die im Worker-Modus gestartet wird. Er hat keine eigene Oberfläche, verwaltet keine Kameras und speichert keine Aufnahmen; er verbindet sich mit dem Master und wartet auf Arbeit.

- **Der Worker verbindet sich nach außen.** Das Pairing läuft über den HTTPS-Port des Masters, die laufende Verbindung über dessen Worker-Port (Standard `7422`). Nur der Master muss erreichbar sein; auf der Worker-Maschine muss nichts freigegeben werden.
- **Einmal gekoppelt, dann selbstständig.** Ein einmaliger Pairing-Code wird gegen eigene Zugangsdaten des Workers getauscht. Zwischen Workern wird nichts geteilt, jeder lässt sich einzeln widerrufen, und nach dem ersten Start verbindet sich der Worker von selbst wieder.
- **Zuweisungen folgen dem Worker.** [Zugewiesene](#kamera-und-plugin-zuweisungen) Kameras und Plugins laufen auf dem Worker, fallen auf den Master zurück, solange er offline ist, und wandern zurück, sobald er wiederkommt (siehe [Ausfallsicherung](#ausfallsicherung)).

Master und Worker können Installationsarten mischen: ein Docker-Server mit einem [Desktop-App](#worker-mit-der-desktop-app)-Worker, ein Desktop-App-Server mit einem [Docker-Worker](#worker-in-docker) und so weiter. Die camera.ui-Version sollte auf allen Maschinen übereinstimmen; die [Worker-Liste](#die-worker-liste) warnt, wenn nicht.

## Worker aktivieren

Aktiviere **Workers aktivieren** auf dem Master und setze eine **Master-Adresse**, die LAN-IP oder den Hostnamen, über den andere Maschinen diesen Server erreichen. Ohne Adresse lassen sich Workers nicht aktivieren. Ein **Worker-Verbindungsport** (Standard `7422`) wird ebenfalls benötigt; wird er später geändert, müssen bereits gepairte Worker neu gepairt werden.

## Einen Worker koppeln

**Pairing-Code generieren** erzeugt einen einmaligen Code (15 Minuten gültig) und einen Konfigurationsausschnitt:

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

Nur der erste Start braucht den Code. Wie der Ausschnitt auf den Worker kommt, hängt von der Installation ab:

## Die Worker-Maschine einrichten

### Worker in Docker

Ein Worker läuft aus demselben Image wie der Server. Speichere das hier als `docker-compose.worker.yml` auf der zweiten Maschine, mit der Adresse deines Masters und dem Pairing-Code von oben:

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

Die Master-Adresse nimmt einen Hostnamen oder eine IP an, ohne Schema. `CAMERA_UI_WORKER_API_PORT` brauchst du nur, wenn der HTTPS-Port des Masters nicht 3443 ist, eine Desktop-App als Master hört auf 3543. Wie der Worker eine GPU bekommt, steht unten unter [Hardware-Beschleunigung](#hardware-beschleunigung).

### Worker mit der Desktop-App

Eine Maschine mit der [Desktop-App](/de/install/desktop) tritt als Worker bei, wenn du beim ersten Start **Worker** im Modus-Dialog wählst (oder später über **Modus wechseln…** im Tray-Menü) und Adresse des Masters und Pairing-Code eingibst. Die App zeigt dann nur ein Statusfenster. Stimmt die Adresse nicht oder ist der Code abgelaufen, öffnet sich der Dialog erneut mit dem Fehler.

Zwei Tray-Optionen: **Beim Anmelden öffnen** startet die App mit dem System, minimiert in den Tray, und **In den Tray schließen** lässt den Worker im Hintergrund weiterlaufen, wenn das Fenster geschlossen wird.[^trayopts] Die Adresse nimmt einen Hostnamen oder eine IP an, mit `:Port` nur, wenn der HTTPS-Port des Masters vom Standard abweicht.

[^trayopts]: Beim Anmelden öffnen gibt es unter Windows und macOS. In den Tray schließen gibt es unter Windows und Linux; unter macOS läuft die App beim Schließen des Fensters ohnehin weiter.

### Worker unter Linux (Bare-Metal)

Füge den Ausschnitt in die `config.yml` der Worker-Maschine ein und starte sie dann mit `cameraui --worker run`. Damit die Maschine auch nach einem Neustart Worker bleibt, installiere sie stattdessen als Service: `cameraui --worker install` (das Flag wird mit dem Service gespeichert, siehe [Linux (Bare-Metal)](/de/install/linux)).

### Hardware-Beschleunigung

Unter **Docker** passen die Override-Dateien des Haupt-Deployments nicht: Sie ergänzen den Dienst `cameraui`, nicht `cameraui-worker`, eine darübergelegte Datei startet also einen zweiten, unabhängigen Container. Trag die [Image-Variante](/de/install/docker#hardware-beschleunigung) passend zur Hardware und das Gerät direkt in die Worker-Datei ein:

```yaml
services:
  cameraui-worker:
    image: ghcr.io/cameraui/camera.ui:intel # oder :nvidia, :amd
    devices:
      - /dev/dri:/dev/dri
```

Für NVIDIA kommen die Blöcke `environment` und `deploy` aus dem [NVIDIA-Override](/de/install/docker#hardware-beschleunigung) dazu, und auf der Worker-Maschine muss das NVIDIA Container Toolkit installiert sein. Auf **Bare Metal** und in der **Desktop-App** gibt es nichts durchzureichen, der Treiber auf dem Host genügt.

Welchen Dekoder eine Kamera auf einem Worker nutzt, legst du pro Kamera unter **Frame Worker** in ihren [Einstellungen](/de/cameras/settings) fest. Die zweite Auswahl dort gilt, solange die Kamera auf einem Worker läuft, Master und Worker können also unterschiedliche Hardware nutzen. [Hardware-Beschleunigung](/de/install/hardware-acceleration) behandelt die Treiber auf dem Host und wie du prüfst, was im Container wirklich ankommt.

### Umgebungsvariablen

Die Werte des Ausschnitts lassen sich auch als Umgebungsvariablen setzen. `CAMERA_UI_WORKER=true` startet den Worker-Modus ohne die Option `--worker`, und `CAMERA_UI_WORKER_MASTER`, `CAMERA_UI_WORKER_API_PORT`, `CAMERA_UI_WORKER_PAIRING_CODE`, `CAMERA_UI_WORKER_NAME` sowie `CAMERA_UI_WORKER_CAPABILITIES` (kommagetrennt) decken den Rest des Ausschnitts ab. Eine `config.yml` ist dann nicht nötig, und wenn du beides setzt, gewinnt die Umgebungsvariable.

Ohne Capabilities bietet der Worker alles an; der Master weist trotzdem nur zu, was du ihm gibst. Setze sie, um einen Worker auf eine Aufgabe zu beschränken, etwa nur das Hosten von Plugins.

## Die Worker-Liste

Sobald gekoppelt, erscheint ein Worker in der **Workers**-Liste mit Online-/Offline-Status, Plattform (Betriebssystem/Architektur), Prozess-ID, Version sowie Live-CPU- und Speichernutzung. Weicht die Version eines Workers von der des Masters ab, wird ein Hinweis angezeigt. Hängt ein Worker zurück, erscheint ein Punkt am **Updates**-Eintrag in der Navigation.

Ein Worker, der sich beim Start nicht anmelden kann oder die Verbindung später verliert, schreibt den Grund in sein [Log](/de/admin/logs), statt online auszusehen. Kameras und Plugins, die auf einem Worker laufen, tauchen in **Metrics** mit dem Namen des Workers und seiner Last auf.

Die [Updates-Seite](/de/install/updating#die-updates-seite) listet jeden zurückhängenden Worker neben Server und Plugins, und in der Workers-Liste zeigt er weiterhin einen **Aktualisieren**-Button: Der Worker installiert die Version, auf die der Master zusteuert, und startet sich selbst neu. Normalerweise ist das die Version, die der Master fährt; steht ein Server-Update an, ist es dieses, der Worker muss also nicht zweimal aktualisiert werden. Worker mit der Desktop-App laufen genauso. Siehe [Aktualisieren](/de/install/updating).

## Kamera- und Plugin-Zuweisungen

Unter **Kamera-Zuweisungen** wählst du, welche Kamera jeder Worker dekodiert und auf der er erkennt; als **Lokal** belassene Kameras bleiben auf dem Hauptserver.

Unter **Plugin-Zuweisungen** kann ein ganzes Plugin auf einem Worker statt auf dem Hauptserver laufen. Es werden nur Worker angeboten, deren Plattform mit dem Plugin kompatibel ist. Der Worker installiert und startet das Plugin; konfiguriert wird es weiterhin ganz normal in der Oberfläche.

Ein Plugin auf einem Worker nutzt die Netzwerkadressen des Workers, nicht die **Server-Adressen** des Hauptservers. Wähle sie über **Worker bearbeiten** in der Worker-Liste; leer lauscht das Plugin auf allen. Eine Änderung startet die Plugins auf diesem Worker neu.

## Ausfallsicherung

Worker senden alle 5 Sekunden einen Heartbeat und gelten nach 15 Sekunden ohne Heartbeat als offline. Trennt sich ein Worker, fallen seine zugewiesenen Kameras und Plugins automatisch auf den Hauptserver zurück (ein Plugin nur, wenn die Plattform des Hauptservers es ausführen kann). Verbindet sich der Worker erneut, werden seine Kameras und Plugins automatisch wieder zu ihm verschoben.

Einen Worker zu entfernen widerruft seine Zugangsdaten und trennt die Verbindung; seine zugewiesenen Kameras und Plugins fallen auf den Hauptserver zurück.
