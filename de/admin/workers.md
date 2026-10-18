---
title: Worker
---

# Worker

<Shot src="/img/admin/workers.png" alt="Die Worker-Einstellungen" />

Ein **Worker** ist eine zweite Maschine, die einen Teil der Verarbeitung eines Servers übernimmt. Der Hauptserver (der **Master**) behält die Oberfläche und die Einstellungen; Worker steuern Rechenleistung bei. Verwalte sie unter **Workers** (im Menü).

Ein Worker dekodiert die ihm zugewiesenen Kameras oder führt ein ganzes Plugin aus, etwa ein Erkennungs-Backend, das eine GPU braucht, die der Master nicht hat, oder ein Plugin, das die Plattform des Masters nicht laden kann.

## Wie Worker funktionieren

Ein Worker ist eine normale camera.ui-Installation, die im Worker-Modus gestartet wird. Er hat keine eigene Oberfläche und verwaltet keine Kameras; er verbindet sich mit dem Master und wartet auf Arbeit.

- **Der Worker verbindet sich nach außen.** Das Pairing läuft über den HTTPS-Port des Masters, die laufende Verbindung über dessen Worker-Port (Standard `7422`). Nur der Master muss erreichbar sein; auf der Worker-Maschine muss nichts freigegeben werden.
- **Einmal gekoppelt, dann selbstständig.** Ein einmaliger Pairing-Code wird gegen eigene Zugangsdaten des Workers getauscht. Zwischen Workern wird nichts geteilt, jeder lässt sich einzeln widerrufen, und nach dem ersten Start verbindet sich der Worker von selbst wieder.
- **Zuweisungen folgen dem Worker.** [Zugewiesene](/de/admin/worker-assignments) Kameras und Plugins laufen auf dem Worker, fallen auf den Master zurück, solange er offline ist, und wandern zurück, sobald er wiederkommt (siehe [Ausfallsicherung](/de/admin/worker-assignments#ausfallsicherung)).

Master und Worker können Installationsarten mischen: ein Docker-Server mit einem [Desktop-App](/de/admin/worker-setup#desktop-app)-Worker, ein Desktop-App-Server mit einem [Docker-Worker](/de/admin/worker-setup#docker) und so weiter. Die camera.ui-Version sollte auf allen Maschinen übereinstimmen; die [Worker-Liste](#die-worker-liste) warnt, wenn nicht.

## Worker aktivieren

Aktiviere **Workers aktivieren** auf dem Master und setze eine **Master-Adresse**, die LAN-IP oder den Hostnamen, über den andere Maschinen diesen Server erreichen. Ohne Adresse lassen sich Workers nicht aktivieren. Ein **Worker-Verbindungsport** (Standard `7422`) wird ebenfalls benötigt; wird er später geändert, müssen bereits gepairte Worker neu gepairt werden.

Eine neue Master-Adresse braucht kein neues Pairing. Trag sie auf jedem Worker als Master-Adresse ein und starte den Worker neu: er prüft, ob hinter der Adresse der Master steht, mit dem er gekoppelt ist, und verbindet sich dorthin. Das gilt für die privaten IPs des Masters und die hier gesetzte **Master-Adresse**. Im selben lokalen Netz findet ein Worker den Master auch selbst, etwa nach einem [Umzug](/de/admin/backup#auf-einen-anderen-server-umziehen): Antwortet der Master eine Minute lang nicht, sucht der Worker ihn im Netz und startet neu, um sich dort zu verbinden.[^discovery]

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

Unter `name` erscheint der Worker auf dem Master. Ohne den Eintrag nimmt er seinen Hostnamen.

Unter dem Code zeigt der Master seinen Fingerabdruck. Der Worker schreibt beim Pairing denselben Fingerabdruck ins Log; ein anderer heißt, dass er sich mit einer anderen Maschine gekoppelt hat.

Nur der erste Start braucht den Code, und er darf danach in der Konfiguration stehen bleiben: ein verbrauchter Code wird nie wieder gesendet. Ein Worker, der startet, bevor der Master erreichbar ist, versucht es weiter, mindestens einmal pro Minute. Ein Worker ohne Code oder mit einem Code, den der Master abgelehnt hat, läuft weiter und wartet auf einen neuen. Er liest `camera.ui.yaml` alle 30 Sekunden, ein neuer Code in einer Umgebungsvariable gilt ab dem nächsten Start des Containers.

Wie der Ausschnitt auf den Worker kommt, hängt von der Installation ab, siehe [Worker einrichten](/de/admin/worker-setup).

## Die Worker-Liste

Sobald gekoppelt, erscheint ein Worker in der **Workers**-Liste mit Status, der Zahl seiner laufenden Kameras und Plugins, Plattform (Betriebssystem/Architektur), Prozess-ID, Version sowie Live-CPU- und Speichernutzung. Der Status lautet **Verbindet**, bis sich ein neuer oder neu gestarteter Worker meldet, dann **Online**, **Nicht erreichbar**, solange seine Antworten ausbleiben, **Startet neu** während eines Neustarts oder Updates, **Offline**, **Veraltet** bei einem Release, mit dem dieser Master nicht arbeiten kann, und **Deaktiviert**, sobald Workers ausgeschaltet sind. Mit der Maus über dem Status siehst du den Grund und ab wann seine Kameras und Plugins woanders laufen, über der Zahl, was jede gerade tut. Ein oranger Punkt heißt, dass die Version des Workers von der des Masters abweicht. Hängt ein Worker zurück, erscheint ein Punkt am **Updates**-Eintrag in der Navigation.

Ein Worker, der sich beim Start nicht anmelden kann oder die Verbindung später verliert, schreibt den Grund in sein [Log](/de/admin/logs), statt online auszusehen. Kameras und Plugins, die auf einem Worker laufen, tauchen in **Metrics** mit dem Namen des Workers und seiner Last auf.

Die [Updates-Seite](/de/install/updating#die-updates-seite) listet jeden zurückhängenden Online-Worker neben Server und Plugins, und in der Workers-Liste zeigt er weiterhin einen **Aktualisieren**-Button: Der Worker installiert die Version, auf die der Master zusteuert, und startet sich selbst neu. Das Update gilt als fertig, sobald der Worker diese Version fährt; ein gescheitertes oder vom Worker zurückgerolltes Update zeigt den Grund. Während des Updates lässt sich der Worker nicht neu starten. Normalerweise ist das die Version, die der Master fährt; steht ein Server-Update an, ist es dieses, der Worker muss also nicht zweimal aktualisiert werden. Ein Update, das auf dem Master ein [neueres Node.js braucht](/de/install/linux#node-js-aktualisieren), zählt erst, wenn Node.js aktualisiert ist. Worker mit der Desktop-App laufen genauso. Siehe [Aktualisieren](/de/install/updating).

Ein Worker auf einem Release, mit dem dieser Master nicht arbeiten kann, zeigt **Veraltet**. Er führt nichts aus, seine Kameras und Plugins laufen woanders, bis er aktualisiert ist, und sein **Aktualisieren**-Button und die Updates-Seite installieren die neue Version auf ihm. Lehnt der Worker ab, nennt die Meldung den Grund: Eine Desktop-App, die Updates nicht aus der Ferne installieren kann, und einen Worker auf einem Release, das zu alt für Updates vom Master ist, aktualisierst du auf ihrer eigenen Maschine, siehe [Aktualisieren](/de/install/updating).

## Worker entfernen oder ersetzen

Einen Worker zu entfernen widerruft seine Zugangsdaten und trennt die Verbindung; seine Kameras und Plugins stoppen dort und fallen auf den Hauptserver zurück. Ein Worker, der dabei online war, läuft weiter und wartet auf einen neuen [Pairing-Code](#einen-worker-koppeln); der alte Code in seiner Konfiguration koppelt ihn nicht erneut. Einer, der offline war, schreibt die Ablehnung bei seiner Rückkehr ins Log und versucht es weiter, bis er einen neuen Code bekommt. Ein neuer Code in der `camera.ui.yaml` koppelt ihn innerhalb von 30 Sekunden, einer in einer Umgebungsvariable ab dem nächsten Start des Containers.

Laufen zwei Maschinen mit der Identität eines Workers, etwa aus einem kopierten Worker-Ordner oder einem zurückgespielten Backup, bekommen beide keine Kameras und Plugins: der Master stoppt die Arbeit auf beiden und schreibt das ins Log. Entferne den Worker und kopple eine der beiden neu. Eine zweite Maschine braucht ein eigenes, leeres Speicherverzeichnis, um als weiterer Worker gekoppelt zu werden: solange eine Identität online ist, lehnt der Master ein zweites Pairing mit ihr ab. Soll neue Hardware die Identität übernehmen, während die alte Maschine noch läuft, wähle den Worker unter **Ersetzt**, bevor du den Code erzeugst; die Maschine, die sich damit koppelt, übernimmt, und die alte verliert ihren Zugang.

[^discovery]: Per mDNS. Ein Worker im Docker-Container braucht dafür Host-Networking.
