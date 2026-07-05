---
title: Instanzen & Worker
---

# Instanzen & Worker

Zwei Admin-Funktionen helfen, wenn du mehr als eine Maschine betreibst: **Instanzen** zum Verwalten mehrerer Server und **Worker** zum Teilen der Last eines Servers.

## Instanzen

![Die Instanzen-Liste](/img/admin/instances.png)

Eine **Instanz** ist ein weiterer hier gespeicherter camera.ui-Server, sodass du zu ihm wechseln kannst, ohne dich neu anzumelden. Verwalte sie unter **Instances** (im Menü).

- **Eine Instanz hinzufügen** mit Namen, ihrer URL und einem Benutzernamen und Passwort dafür.
- Jede Instanz-Karte zeigt ihren Status: Version, Uptime, Kameras, ob sie online ist und aufnimmt, sowie Ressourcennutzung.

Sobald du mehr als eine hast, erscheint ein **Instanz-Umschalter** in der oberen Leiste. Wähle einen Server, um zu ihm zu springen, oder kehre zu „This server" zurück.

::: warning
Zu einer Instanz über einfaches HTTP zu wechseln überträgt deine Sitzung in der Adresse, daher warnt camera.ui dich zuerst. Nutze HTTPS, wo du kannst.
:::

## Worker

![Die Worker-Einstellungen](/img/admin/workers.png)

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

Füge den Ausschnitt in die `config.yml` der Worker-Maschine ein und starte sie dann mit `camera.ui --worker`. Der Worker tauscht den Code gegen eigene Zugangsdaten; es wird nichts zwischen Workern geteilt oder wiederverwendet, und jede kann einzeln widerrufen werden. Der Pairing-Code lässt sich nur einmal verwenden.

### Die Worker-Liste

Sobald gekoppelt, erscheint ein Worker in der **Workers**-Liste mit Online-/Offline-Status, Plattform (Betriebssystem/Architektur), Prozess-ID, Version sowie Live-CPU- und Speichernutzung. Weicht die Version eines Workers von der des Masters ab, wird ein Hinweis angezeigt.

### Kamera- und Plugin-Zuweisungen

Unter **Kamera-Zuweisungen** wählst du, welche Kamera jeder Worker dekodiert und auf der er erkennt; als **Lokal** belassene Kameras bleiben auf dem Hauptserver.

Unter **Plugin-Zuweisungen** kann ein ganzes Plugin auf einem Worker statt auf dem Hauptserver laufen, etwa ein Erkennungs-Backend, das Hardware braucht, die dem Hauptserver fehlt. Es werden nur Worker angeboten, deren Plattform mit dem Plugin kompatibel ist. Der Worker installiert und startet das Plugin; konfiguriert wird es weiterhin ganz normal in der Oberfläche.

### Ausfallsicherung

Worker senden alle 5 Sekunden einen Heartbeat und gelten nach 15 Sekunden ohne Heartbeat als offline. Trennt sich ein Worker, fallen seine zugewiesenen Kameras und Plugins automatisch auf den Hauptserver zurück (ein Plugin nur, wenn die Plattform des Hauptservers es ausführen kann). Verbindet sich der Worker erneut, werden seine Kameras und Plugins automatisch wieder zu ihm verschoben.

Einen Worker zu entfernen widerruft seine Zugangsdaten und trennt die Verbindung; seine zugewiesenen Kameras und Plugins fallen auf den Hauptserver zurück.
