---
title: Zertifikat
---

# Zertifikat

camera.ui erzeugt beim ersten Start ein eigenes Zertifikat und liefert es bei jeder Verbindung aus. Browser kennen den Aussteller nicht und warnen deshalb. Für deine eigene Domain kannst du diese Warnung abstellen, indem du ein selbst besorgtes Zertifikat hochlädst, ganz ohne [Reverse-Proxy](/de/remote/reverse-proxy) davor.

## Wofür das eingebaute Zertifikat da ist

Die mobilen Apps und entfernte Worker prüfen den Server gegen die eigene Zertifizierungsstelle von camera.ui. Sie erreichen den Server über IP-Adressen, und für private Adressen stellt kein öffentlicher Aussteller ein Zertifikat aus. Dieser Teil läuft deshalb weiter über das interne Zertifikat, egal was du hochlädst.

Dein Zertifikat wird nur ausgeliefert, wenn ein Client nach einem Namen fragt, den es abdeckt. Alles andere, jede Verbindung über eine IP-Adresse eingeschlossen, bekommt weiterhin das interne. Beide existieren nebeneinander.

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

Damit wird die automatische Erneuerung zur Frage, wie du in dieses Verzeichnis schreibst:

- **Docker.** Dein Zertifikatsverzeichnis schreibgeschützt über `certs/custom` mounten.
- **Bare Metal.** Ein certbot-Deploy-Hook, der `fullchain.pem` und `privkey.pem` unter diesen Namen dorthin kopiert.

Über die Oberfläche geht es auch, dann musst du es bei jeder Erneuerung wiederholen. Let's-Encrypt-Zertifikate sind 90 Tage gültig.

## Wieder entfernen

Einstellungen → System → Zertifikat → **Entfernen**. Alle Namen fallen auf das interne Zertifikat zurück.

## Wenn ein Name doppelt vorkommt

Trägst du denselben Hostnamen unter Einstellungen → Remote Zugriff → Netzwerk als lokale Adresse ein, verweigern ältere iOS-Apps die Verbindung darüber.[^ios] camera.ui schreibt beim Start eine Warnung ins Log, wenn es diese Kombination sieht. Nimm für das Zertifikat einen Namen, den die Apps im eigenen Netz nicht verwenden, oder aktualisiere die App.

[^ios]: Die Apps pinnen für lokale Adressen die Zertifizierungsstelle deiner Instanz, und ältere Versionen akzeptieren für diese Namen nichts anderes, auch kein öffentlich vertrauenswürdiges Zertifikat. Android ist nicht betroffen.

## Nächste Schritte

**[Reverse-Proxy](/de/remote/reverse-proxy)** — TLS stattdessen davor terminieren, sinnvoll wenn du ohnehin einen betreibst.
**[Eigene Domain](/de/remote/custom-domain)** — den Server von außen unter deinem eigenen Namen erreichen.
