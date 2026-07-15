---
title: Instanzen & Worker
---

# Instanzen & Worker

Zwei Admin-Funktionen helfen, wenn du mehr als eine Maschine betreibst: **Instanzen** zum Verwalten mehrerer Server und **Worker** zum Teilen der Last eines Servers.

## Instanzen

<Shot src="/img/admin/instances.png" alt="Die Instanzen-Liste" />

Eine **Instanz** ist ein weiterer hier gespeicherter camera.ui-Server, sodass du zu ihm wechseln kannst, ohne dich neu anzumelden. Verwalte sie unter **Instanzen** (im Menü).

- **Eine Instanz hinzufügen** mit Namen, ihrer URL und einem Benutzernamen und Passwort dafür.
- **Konten mit Zwei-Faktor-Authentifizierung.** Ist das Konto auf diesem Server mit Zwei-Faktor-Authentifizierung geschützt, fragt camera.ui beim Hinzufügen oder beim Wechsel nach dem 6-stelligen Code aus deiner Authenticator-App.[^backupcodes] Bis du ihn eingibst, zeigt die Karte ein **2FA**-Tag und **Zwei-Faktor-Bestätigung ausstehend**. Über **Code eingeben** im Menü der Karte schließt du es ab.
- Jede Instanz-Karte zeigt ihren Status: Version, Uptime, Kameras, ob sie online ist und aufnimmt, sowie Ressourcennutzung.

[^backupcodes]: Die Abfrage nimmt nur den 6-stelligen Code aus der App an, keinen Backup-Code.

Sobald du mehr als eine hast, erscheint ein **Instanz-Umschalter** in der oberen Leiste. Wähle einen Server, um zu ihm zu springen, oder kehre zu „Dieser Server" zurück.

::: warning
Zu einer Instanz über einfaches HTTP zu wechseln überträgt deine Sitzung in der Adresse, daher warnt camera.ui dich zuerst. Nutze HTTPS, wo du kannst.
:::

## Worker

<Shot src="/img/admin/workers.png" alt="Die Worker-Einstellungen" />

Ein **Worker** ist eine zweite Maschine, die einen Teil der Verarbeitung eines Servers übernimmt, etwa Dekodierung und Erkennung für ausgelastete Kameras, oder ein Plugin hostet, das der Hauptserver nicht ausführen kann. Verwalte sie unter **Workers** (im Menü).

### Worker aktivieren

Aktiviere **Workers aktivieren** und setze eine **Master-Adresse**, die LAN-IP oder den Hostnamen, über den andere Maschinen diesen Server erreichen. Ohne Adresse lassen sich Workers nicht aktivieren. Ein **Worker-Verbindungsport** (Standard `7422`) wird ebenfalls benötigt; wird er später geändert, müssen bereits gepairte Worker neu gepairt werden.

### Einen Worker koppeln

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

Füge den Ausschnitt in die `config.yml` der Worker-Maschine ein und starte sie dann mit `cameraui --worker run`. Damit die Maschine auch nach einem Neustart Worker bleibt, installiere sie stattdessen als Service: `cameraui --worker install`. Der Worker tauscht den Code gegen eigene Zugangsdaten; es wird nichts zwischen Workern geteilt oder wiederverwendet, und jede kann einzeln widerrufen werden. Der Pairing-Code lässt sich nur einmal verwenden.

Alternativ kannst du dieselben Werte als Umgebungsvariablen setzen, was in einem Container meist einfacher ist. `CAMERA_UI_WORKER=true` startet den Worker-Modus ohne die Option `--worker`, und `CAMERA_UI_WORKER_MASTER`, `CAMERA_UI_WORKER_API_PORT`, `CAMERA_UI_WORKER_PAIRING_CODE`, `CAMERA_UI_WORKER_NAME` sowie `CAMERA_UI_WORKER_CAPABILITIES` (kommagetrennt) decken den Rest des Ausschnitts ab. Eine `config.yml` ist dann nicht nötig, und wenn du beides setzt, gewinnt die Umgebungsvariable.

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

Die Master-Adresse nimmt einen Hostnamen oder eine IP an, ohne Schema. `CAMERA_UI_WORKER_API_PORT` brauchst du nur, wenn der HTTPS-Port des Masters vom Standard abweicht. Der Pairing-Code wird nur beim ersten Start gebraucht: Der Worker speichert seine eigenen Zugangsdaten und verbindet sich danach von selbst wieder. Um Hardware für die Dekodierung durchzureichen, nutze dieselben Override-Dateien wie beim Haupt-Deployment, siehe [Hardware-Beschleunigung](/de/install/hardware-acceleration).

### Die Worker-Liste

Sobald gekoppelt, erscheint ein Worker in der **Workers**-Liste mit Online-/Offline-Status, Plattform (Betriebssystem/Architektur), Prozess-ID, Version sowie Live-CPU- und Speichernutzung. Weicht die Version eines Workers von der des Masters ab, wird ein Hinweis angezeigt.

### Kamera- und Plugin-Zuweisungen

Unter **Kamera-Zuweisungen** wählst du, welche Kamera jeder Worker dekodiert und auf der er erkennt; als **Lokal** belassene Kameras bleiben auf dem Hauptserver.

Unter **Plugin-Zuweisungen** kann ein ganzes Plugin auf einem Worker statt auf dem Hauptserver laufen, etwa ein Erkennungs-Backend, das Hardware braucht, die dem Hauptserver fehlt. Es werden nur Worker angeboten, deren Plattform mit dem Plugin kompatibel ist. Der Worker installiert und startet das Plugin; konfiguriert wird es weiterhin ganz normal in der Oberfläche.

### Ausfallsicherung

Worker senden alle 5 Sekunden einen Heartbeat und gelten nach 15 Sekunden ohne Heartbeat als offline. Trennt sich ein Worker, fallen seine zugewiesenen Kameras und Plugins automatisch auf den Hauptserver zurück (ein Plugin nur, wenn die Plattform des Hauptservers es ausführen kann). Verbindet sich der Worker erneut, werden seine Kameras und Plugins automatisch wieder zu ihm verschoben.

Einen Worker zu entfernen widerruft seine Zugangsdaten und trennt die Verbindung; seine zugewiesenen Kameras und Plugins fallen auf den Hauptserver zurück.
