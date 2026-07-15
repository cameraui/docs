---
title: MQTT
---

# MQTT

Die Seite **Einstellungen → MQTT** (nur Admins) verbindet camera.ui mit einem MQTT-Broker. Sobald die Verbindung steht, veröffentlicht camera.ui Server-Ereignisse, Kamerazustände, Erkennungen, Snapshots und Sensorwerte als MQTT-Topics und nimmt Befehle für deine Sensoren entgegen. Standardmäßig ist das aus.

<Shot src="/img/admin/mqtt.png" alt="Die MQTT-Einstellungen" />

## Aktivieren

Schalte **Aktiviert** ein, wähle einen Modus, trage die Verbindung ein und **Speichern**. Jedes Speichern startet die Verbindung neu, ein falscher Wert zeigt sich also sofort in der Statuskarte oben auf der Seite.

## Modus

**Modus** legt fest, wo der Broker läuft.

- **Externer Broker.** camera.ui verbindet sich mit einem Broker, den du bereits betreibst (Mosquitto, das Mosquitto-Add-on von Home Assistant und so weiter).
- **Eingebauter Broker.** camera.ui startet einen eigenen Broker und verbindet sich lokal damit.

### Eingebauter Broker

Es ist nichts zu installieren. camera.ui startet den Broker auf **Port** (Standard `1883`) und zeigt die **Broker-Adresse** als schreibgeschütztes Feld mit Kopierbutton, in der Form `mqtt://<Server-Host>:<Port>`. Richte deine MQTT-Geräte auf diese Adresse aus.

Die Zugangsdaten daneben brauchen diese Geräte:

- **Benutzername.** Standard ist `cameraui`.
- **Passwort.** Wird beim ersten Start zufällig erzeugt. Es hat einen eigenen Kopierbutton, und du kannst es durch ein eigenes ersetzen.[^anon]

### Externer Broker

- **Host.** Hostname oder IP des Brokers, zum Beispiel `192.168.1.10`.
- **Port.** Standard ist `1883`.
- **Protokoll.** `mqtt:// (TCP)` oder `mqtts:// (TLS)`. Standard ist `mqtt://`.
- **Benutzername** und **Passwort.** Für einen anonymen Broker beides leer lassen. Das Passwortfeld bleibt nach dem Speichern maskiert. Leer lassen behält das gespeicherte Passwort, ein neues ersetzt es.

## Client-ID und Topic-Präfix

Beides gilt in beiden Modi.

- **Client-ID.** Der Name, mit dem sich camera.ui am Broker anmeldet. Standard ist `cameraui`. Ändere ihn, wenn etwas anderes im Netz diese ID bereits nutzt.
- **Topic-Präfix.** Alles, was camera.ui veröffentlicht, liegt unterhalb dieses Präfixes. Standard ist `cameraui`. Erlaubt sind nur Buchstaben, Zahlen, `_`, `-` und `/` als Trenner.

## TLS

Die TLS-Felder erscheinen bei einem externen Broker mit `mqtts://`.

- **Serverzertifikat prüfen.** Standardmäßig an. Schalte es nur für einen Broker mit selbstsigniertem Zertifikat aus.
- **CA-Zertifikat (PEM).** Die Zertifizierungsstelle, die das Zertifikat des Brokers signiert hat.
- **Client-Zertifikat (PEM)** und **Client-Schlüssel (PEM).** Für Broker, die Client-Zertifikate verlangen.

## Test und Status

**Verbindung testen** öffnet mit den aktuellen Werten aus dem Formular eine kurze, separate Verbindung und meldet das Ergebnis als Toast. Gespeichert wird dabei nichts. Beim eingebauten Broker zuerst speichern: Der Test verbindet sich mit dem laufenden Broker und schlägt fehl, solange dieser nicht läuft.[^test]

Die Statuskarte oben zeigt den Live-Zustand der Verbindung:

| Status | Bedeutung |
|---|---|
| Deaktiviert | MQTT ist aus, oder bei einem externen Broker fehlt der Host |
| Verbinde… | Die Verbindung wird aufgebaut |
| Verbunden | Mit dem Broker verbunden |
| Verbinde erneut… | Die Verbindung ist abgerissen, camera.ui versucht es erneut |
| Fehler | Der letzte Versuch ist fehlgeschlagen · die Karte zeigt die Meldung des Brokers |

Läuft der eingebaute Broker, steht das zusammen mit seinem Port auf der Karte.

## Topic-Referenz

`<prefix>` unten ist dein Topic-Präfix, `<id>` die ID der Kamera, `<stableId>` die ID eines Sensors. In Topic-Segmenten werden `#`, `+`, `/` und Leerzeichen durch `-` ersetzt.

Zustands-Topics sind retained, ein später verbundener Abonnent bekommt also weiterhin den aktuellen Wert. Ereignisse sind nicht retained.

### Was camera.ui veröffentlicht

| Topic | Payload | Retained |
|---|---|---|
| `<prefix>/status` | `online` · `offline` | ja |
| `<prefix>/server/state` | JSON mit Serverversion und Zeitstempel | ja |
| `<prefix>/server/event` | JSON, `started` oder `shutdown` mit Zeitstempel | nein |
| `<prefix>/server/notification` | JSON, Systembenachrichtigungen | nein |
| `<prefix>/plugin/<name>/status` | `started` · `stopped` · `error` · `crashed` | ja |
| `<prefix>/camera/<id>/status` | `online` · `offline` | ja |
| `<prefix>/camera/<id>/frameworker` | `online` · `offline` | ja |
| `<prefix>/camera/<id>/meta` | JSON: ID, Name, Raum, Typ, deaktiviert, Kamera-Infos | ja |
| `<prefix>/camera/<id>/event` | JSON-Erkennungsereignis, von Start bis Ende | nein |
| `<prefix>/camera/<id>/motion` | `ON` · `OFF` | ja |
| `<prefix>/camera/<id>/detection/<label>` | `ON` · `OFF`, ein Topic pro erkanntem Label | ja |
| `<prefix>/camera/<id>/snapshot` | JPEG des letzten Ereignis-Thumbnails | ja |
| `<prefix>/camera/<id>/sensor/<stableId>/meta` | JSON: Stable-ID, Typ, Name, Anzeigename, Plugin | ja |
| `<prefix>/camera/<id>/sensor/<stableId>/<property>` | Wert der Eigenschaft als JSON | ja |

`<prefix>/status` ist auch das Last Will: Verschwindet camera.ui ohne Abmeldung, veröffentlicht der Broker dafür `offline`.

Das Motion-Topic geht auf `ON`, wenn ein Ereignis Bewegung enthält, ein Label-Topic, sobald dieses Label zum ersten Mal erkannt wird. Mit dem Ende des Ereignisses gehen beide zurück auf `OFF`. Der Payload des Ereignisses enthält die Details der Erkennung ohne Bilddaten. Das Bild geht auf das Snapshot-Topic.

### Was camera.ui abonniert

| Topic | Zweck |
|---|---|
| `<prefix>/camera/<id>/sensor/<stableId>/<property>/set` | Eine Sensor-Eigenschaft setzen |

Veröffentliche auf einem `/set`-Topic, um einen Sensor zu steuern: `ON` und `OFF` werden zu true und false, alles andere wird als JSON gelesen und fällt sonst auf reinen Text zurück. Erkennungssensoren ignorieren Befehle, ihre Werte kommen von der Kamera.

Automationen mit einem MQTT-Trigger abonnieren zusätzlich ihre eigenen Topics.

## Home Assistant Discovery

**Home Assistant Discovery** lässt Home Assistant die Geräte und Entitäten selbst anlegen, ohne YAML. Standardmäßig ist das aus.

Schalte es ein und prüfe das **Discovery-Präfix**. Es muss dem in Home Assistant konfigurierten Discovery-Präfix entsprechen, das ist `homeassistant`, sofern du es nicht geändert hast.

Home Assistant baut daraus ein Gerät pro Kamera, mit dem Namen der Kamera sowie Modell und Firmware-Version, sofern camera.ui sie kennt. Jedes Gerät bekommt:

- **Status.** Ein Konnektivitätssensor, unter Diagnose gelistet.
- **Motion.** Ein Bewegungssensor.
- **Snapshot.** Eine Kamera-Entität, gespeist aus dem Snapshot-Topic.
- **Person, Vehicle, Animal, Package.** Erkennungssensoren, nur für Kameras mit Objekterkennung.

Ein [Sensor](/de/sensors/) der Kamera landet am selben Gerät, wenn sein Typ einem Home-Assistant-Typ entspricht: Kontakt-, Anwesenheits-, Rauch- und Wassersensoren, Türklingeln, Temperatur-, Luftfeuchte- und Batteriewerte, Schalter, Lichter (mit Helligkeit, wenn das Licht sie unterstützt), Sirenen, Schlösser, Garagentore und Alarmanlagen. Schalter, Lichter, Sirenen, Schlösser, Garagentore und Alarmanlagen lassen sich aus Home Assistant steuern.[^detsensors]

Entitäten sind nur verfügbar, solange sowohl camera.ui als auch die Kamera online sind. Status ist die Ausnahme: Er folgt allein camera.ui und kann die Kamera so weiterhin als offline melden. Schaltest du Discovery aus, MQTT aus oder änderst das Discovery- oder Topic-Präfix, entfernt camera.ui die angelegten Entitäten.

## Nächste Schritte

- **[Automationen](/de/automations/)** — auf eine eingehende MQTT-Nachricht reagieren oder als Aktion eine senden.
- **[Sensoren](/de/sensors/)** — die Sensoren, die auf den Topics der Kamera und in Home Assistant auftauchen.

[^detsensors]: Erkennungssensoren (Bewegung, Objekt, Audio, Gesicht, Kennzeichen und so weiter) bekommen keine eigene Entität. Sie speisen die Motion- und Erkennungs-Entitäten oben.
[^anon]: Wird Benutzername oder Passwort geleert, nimmt der eingebaute Broker jeden Client ohne Zugangsdaten an.
[^test]: Ein Test des eingebauten Brokers vor dem ersten Speichern meldet, dass der Broker nicht läuft.
