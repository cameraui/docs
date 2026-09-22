---
title: Zertifikat
---

# Zertifikat

camera.ui erzeugt beim ersten Start ein eigenes Zertifikat und liefert es bei jeder Verbindung aus. Browser kennen den Aussteller nicht und warnen deshalb. Für deine eigene Domain kannst du ein selbst besorgtes Zertifikat hochladen, ganz ohne [Reverse-Proxy](/de/remote/reverse-proxy).

## Wofür das eingebaute Zertifikat da ist

Die mobilen Apps und entfernte Worker prüfen den Server gegen die eigene Zertifizierungsstelle von camera.ui. Sie erreichen den Server über IP-Adressen, und für private Adressen stellt kein öffentlicher Aussteller ein Zertifikat aus. Dieser Teil läuft deshalb weiter über das interne Zertifikat, egal was du hochlädst.

Dein Zertifikat wird nur ausgeliefert, wenn ein Client nach einem Namen fragt, den es abdeckt. Alles andere, jede Verbindung über eine IP-Adresse eingeschlossen, bekommt weiterhin das interne.

Das interne Zertifikat deckt `127.0.0.1` ab, die privaten Netzwerkadressen der Maschine und das, was du unter **Einstellungen → Remote Zugriff → Netzwerk** ausgewählt hast: die Serveradressen und die lokale Adresse. Eine öffentliche Adresse kommt nur hinein, wenn du sie dort auswählst. Eine Änderung dort stellt das Zertifikat neu aus, eine im Browser gespeicherte Ausnahme für das alte greift dann nicht mehr und die Warnung kommt zurück.

## Eigenes Zertifikat hochladen

Einstellungen → System → Zertifikat → **Hochladen**. Hochladen und Entfernen kann nur das Master-Konto, und in der Desktop-App gibt es die Karte nicht.

- **Zertifikat.** Dein Zertifikat samt der Zwischenzertifikate darüber. Let's Encrypt legt das als `fullchain.pem` ab. Kommerzielle Aussteller schicken Zertifikat und Kette oft als zwei Dateien, dann kommt die zweite ins Ketten-Feld.
- **Privater Schlüssel.** `privkey.pem`, oder das `.key` deines Ausstellers. Er darf nicht mit einer Passphrase geschützt sein.
- **Kette.** Nur nötig, wenn dein Aussteller die Zwischenzertifikate getrennt liefert.

Der Upload wird geprüft, bevor etwas gespeichert wird: die Dateien müssen lesbar sein, der Schlüssel muss zum Zertifikat gehören, und es muss aktuell gültig sein. Danach zeigt die Karte, für welche Namen es gilt, wer es ausgestellt hat und wie lange es läuft.

Ein Zertifikat ohne Zwischenzertifikate wird mit einer Warnung angenommen. Von einem öffentlichen Aussteller heißt das, die Kette fehlt: Desktop-Browser holen sie sich selbst und sehen deshalb gut aus, Handys lehnen die Verbindung ab. Bei einer lokalen Zertifizierungsstelle, die direkt signiert, gibt es nichts zu ergänzen.

camera.ui nutzt das neue Zertifikat sofort. Die Streaming-Engine hält eine eigene Kopie und bietet danach einen Neustart an, der laufende Streams kurz unterbricht.

## Erneuerung

Hochgeladene Dateien liegen im Speicherverzeichnis unter `certs/custom/`, als `cert.pem`, `key.pem` und `chain.pem`. camera.ui beobachtet sie, eine ersetzte Datei greift also ohne Neustart.

Für die automatische Erneuerung schreibst du in dieses Verzeichnis:

- **Docker.** Dein Zertifikatsverzeichnis schreibgeschützt über `certs/custom` mounten.
- **Bare Metal.** Ein certbot-Deploy-Hook, der `fullchain.pem` und `privkey.pem` unter diesen Namen dorthin kopiert.

Ein Upload über die Oberfläche muss bei jeder Erneuerung wiederholt werden. Let's-Encrypt-Zertifikate sind 90 Tage gültig.

## Wieder entfernen

Einstellungen → System → Zertifikat → **Entfernen**. Alle Namen fallen auf das interne Zertifikat zurück.

## Nächste Schritte

**[Reverse-Proxy](/de/remote/reverse-proxy)** — TLS stattdessen davor terminieren, sinnvoll wenn du ohnehin einen betreibst.
**[Eigene Domain](/de/remote/custom-domain)** — den Server von außen unter deinem eigenen Namen erreichen.
