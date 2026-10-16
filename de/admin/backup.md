---
title: Backup & Wiederherstellung
---

# Backup & Wiederherstellung

Backups liegen unter **Einstellungen → Backup** (nur Admins) und lassen sich auf jeder Plattform wiederherstellen.

## Ein Backup erstellen

Wähle **Backup-Archiv herunterladen**, um ein einzelnes verschlüsseltes Archiv (`.cuibackup`) deines camera.ui-Speicherverzeichnisses zu speichern: Konfiguration, Datenbank, Benutzerkonten und Plugin-Daten. Aufnahmen sind nicht enthalten.[^ignore] Der Server packt das Archiv zuerst und braucht dafür etwa so viel freien Platz, wie die Daten darin belegen.[^packing] Reicht er nicht, bricht das Backup ab und nennt den nötigen Platz. Die Karte zeigt, wann das letzte Backup entstand, ebenso **Einstellungen → System**.

## Backup-Schlüssel

Jedes Backup ist mit dem Backup-Schlüssel seines Servers verschlüsselt, den die Karte **Backup-Schlüssel** zeigt. Derselbe Server öffnet seine Archive von selbst, ein anderer Server fragt nach dem Schlüssel. Bewahre ihn außerhalb des Servers auf, in einem Passwortmanager oder als Datei aus **Schlüsseldatei speichern**: Ohne ihn kann niemand die Backups öffnen. Bis du mit **Schlüssel gespeichert** bestätigst, erinnert camera.ui nach jedem Download daran.

Eine Wiederherstellung bringt den Backup-Schlüssel des Backups mit. Der wiederhergestellte Server öffnet also die Archive des alten und verschlüsselt neue mit demselben Schlüssel. Unverschlüsselte `.tar.gz`-Archive lassen sich ohne Schlüssel wiederherstellen.

## Wiederherstellen

Wähle ein Archiv und dann **Backup-Archiv wiederherstellen**, oder nimm die Schaltfläche **Wiederherstellen** eines Archivs unter **Vorhandene Backups**. Bricht die Verbindung ab, beginnt der Upload nicht von vorn: Er setzt dort fort, wo er stand, auch wenn du dieselbe Datei im selben Browser-Tab erneut wählst.

Ein Archiv eines anderen Servers fragt nach dessen Backup-Schlüssel: Gib ihn ein oder öffne die Schlüsseldatei. camera.ui prüft das Archiv dann und zeigt, was es enthält: wann es erstellt wurde, camera.ui-Version und Plattform, die Zahl der Kameras und Plugins und die Konten, mit denen du dich danach anmeldest. Außerhalb von Home Assistant lässt eine Wiederherstellung das Konto `homeassistant` der Home-Assistant-App weg, es meldet sich nur dort an. Gibt es kein anderes Master-Konto, melde dich danach als `admin` mit dem Passwort `admin` an. Ports und Adressen, die zur alten Maschine gehören, etwa Port 3543 der Desktop-App oder eine IP, die dieser Server nicht hat, setzt camera.ui auf die Vorgaben dieses Servers zurück, und die Übersicht nennt jeden davon. Nichts ändert sich, bis du mit **Wiederherstellen** bestätigst. Ein Backup, das auf Bestätigung wartet, steht auch unter **Letzte Wiederherstellung** und wird nach 24 Stunden verworfen.

Jedes Plugin installiert camera.ui in der Version aus dem Backup, wenn sie auf dieser camera.ui läuft, sonst in der neuesten Version, die das tut. Die Übersicht nennt eine abweichende Version, ein Plugin, das sich nicht installieren lässt, eines, das auf diesem System nicht läuft (seine Kameras behalten ihre Einstellungen), und Plugins, die auf einem Worker liefen. Außerdem nennt sie ein Plugin, das auf diesem Server installiert ist, aber im Backup fehlt: Es bleibt installiert und startet ohne seine Einstellungen.

Nach der Bestätigung startet der Server neu, spielt das Backup ein und installiert seine Plugins, der Fortschritt pro Plugin steht im Fenster. Am Ende meldet camera.ui dich ab; melde dich mit einem Konto aus dem Backup an. Scheitert ein Plugin, versucht camera.ui es bei jedem Start erneut, und seine Kameras behalten bis dahin ihre Einstellungen. Unter **Letzte Wiederherstellung** kannst du es sofort erneut versuchen oder verwerfen.

Ordner, die ein Backup auslässt, etwa die Aufnahmen, bleiben auf diesem Server unverändert. Die Übersicht nennt die des alten Servers mit ihrer Größe, damit du sie selbst herüberkopieren kannst. Bei einem Backup dieses Servers selbst entfällt die Liste, die Ordner sind schon da.

- **Rückgängig machen.** Der Stand vor der Wiederherstellung bleibt 7 Tage erhalten.[^previous] **Rückgängig machen** unter **Letzte Wiederherstellung** holt ihn zurück und startet den Server neu. Änderungen seit der Wiederherstellung gehen verloren.
- **Automatischer Rückfall.** Startet camera.ui mit dem wiederhergestellten Stand dreimal nicht, holt es den vorherigen Stand von selbst zurück. Die Anmeldeseite und **Letzte Wiederherstellung** zeigen das an.
- **Unterbrochene Wiederherstellung.** Stoppt der Server, während er das Backup einspielt, führt er die Wiederherstellung beim nächsten Start zu Ende.
- **Abgelehnte Archive.** Ein Archiv mit beschädigter Datenbank wird abgelehnt, bevor sich etwas ändert, ebenso ein Backup aus einer neueren camera.ui-Version als der auf diesem Server. Aktualisiere camera.ui in dem Fall zuerst.

Vor der Bestätigung wählst du, wie dieser Server das Backup übernimmt. camera.ui empfiehlt **Umzug** für ein Backup dieses Servers und für einen Server ohne Kameras, sonst **Kopie**.

- **Umzug.** Dieser Server ersetzt den alten und behält dessen Identität: Zertifizierungsstelle, Remote-Zugriff, Cloud-Registrierung, Sitzungen und gekoppelte Worker. Apps, Apple TV und Worker vertrauen ihm weiter. Schalte den alten Server ab. Antwortet er noch in diesem Netz, nennt die Übersicht seine Adresse. Konnte camera.ui nicht nach ihm suchen, sagt die Übersicht das, auf einem Mac meist, weil camera.ui unter Systemeinstellungen → Datenschutz & Sicherheit → Lokales Netzwerk keinen Zugriff hat. Hat sich die Adresse geändert, trag die neue als [Master-Adresse](/de/admin/workers#worker-aktivieren) auf dem Server ein. Worker im selben Netz finden den neuen Server selbst, alle anderen brauchen die neue Adresse ebenfalls. Ein Backup ohne Zertifizierungsstelle behält die dieses Servers, Geräte, die dem alten Server vertraut haben, brauchen dann das [Zertifikat](/de/admin/system#zertifikate) neu.
- **Kopie.** Beide Server laufen weiter, und die Kopie bekommt eine eigene Identität. Sitzungen, API-Tokens und Worker des alten Servers bleiben zurück, Kameras und Plugins laufen auf diesem Server, der Remote-Zugriff ist aus, und die Kopie ist nicht in der Cloud registriert.

Melde den Server nach jeder Wiederherstellung, auch nach dem Rückgängigmachen, unter **Einstellungen → Remote Zugriff** wieder bei cameraui.com an und verbinde ein lizenziertes NVR in seinen Einstellungen wieder. Bis dahin läuft das NVR nach einem Umzug oder Rückgängigmachen mit seiner gespeicherten Lizenz weiter, höchstens 14 Tage ab dem Backup, und seine Benachrichtigung nennt das Datum. Nach einer Kopie ist die Lizenz inaktiv, bis du es verbindest.

## Auf einen anderen Server umziehen

Der neue Server kann alles direkt vom alten holen, ohne dass du ein Archiv herunterlädst. Beide Server müssen sich im Netzwerk erreichen.

1. Wähle auf dem alten Server unter **Diesen Server umziehen** die Schaltfläche **Umzugscode erstellen**. Der Code gilt 30 Minuten und wird nur einmal angezeigt. Behandle ihn wie ein Passwort, er gibt Zugriff auf das ganze Backup.
2. Gib den Code auf dem neuen Server im Willkommensbildschirm unter **Von anderem Server** oder in der Karte **Backup wiederherstellen** ein und wähle **Backup holen**. Der Code gilt nur auf einem anderen Server, der alte kann kein Backup holen, solange er einen Code anbietet. Findet der Code den alten Server nicht, etwa in einem anderen Netz, trag seine Adresse als `host:port` unter **Adresse des alten Servers** ein.
3. Der alte Server startet neu, stoppt Kameras, Plugins und Worker, packt sein Backup und schickt es. Danach erscheint die Übersicht wie bei einem Archiv, mit **Umzug** als Vorschlag. Bestätige wie unter [Wiederherstellen](#wiederherstellen).

Solange der neue Server das Backup noch nicht geholt hat, bricht **Umzug abbrechen** unter **Diesen Server umziehen** den Umzug ab, und der alte Server läuft wie vorher. Nach der Übertragung bleibt der alte Server gestoppt, seine Anmeldeseite zeigt den Umzug an. **Hier wieder laufen lassen** an derselben Stelle startet Kameras und Plugins wieder. Das geschieht von selbst, wenn du auf dem neuen Server abbrichst, das Backup dort vor der Bestätigung verwirfst oder der neue Server das gepackte Backup nicht innerhalb von 30 Minuten holt. Spielst du auf dem alten Server ein Backup ein, läuft er danach ebenfalls wieder.

## Geplante Backups

<Shot src="/img/admin/backup-scheduler.png" alt="Die Karte „Backup-Zeitplan&quot;" />

Die Karte **Backup-Zeitplan** erstellt Backups automatisch und behält nur die neuesten Archive.

Schalte sie ein und lege fest:

- **Häufigkeit.** Täglich, Wöchentlich oder Monatlich.
- **Uhrzeit.** Die Tageszeit, zu der das Backup läuft, im Format HH:mm (Standard `03:00`).
- **Wochentag.** Wird nur angezeigt, wenn Häufigkeit auf Wöchentlich steht.
- **Tag des Monats.** Wird nur angezeigt, wenn Häufigkeit auf Monatlich steht, 1-28.
- **Backups behalten.** Wie viele der neuesten Archive behalten werden, 1-60 (Standard 7). Ältere Archive werden nach jedem Lauf automatisch gelöscht.
- **Zielordner.** Ein absoluter Pfad auf dem Server, zum Beispiel ein NAS-Mount. Leer lassen, um den Standardordner innerhalb deines Speicherverzeichnisses zu verwenden. Ein relativer Pfad wird abgelehnt.

**Jetzt ausführen** startet ein Backup sofort. **Letzter Lauf** zeigt Zeit und Ergebnis des letzten geplanten Laufs. Einen Lauf, den der Server ausgeschaltet verpasst hat, holt er zwei Minuten nach dem nächsten Start nach. Ein gescheiterter Lauf schickt Admins die System-Benachrichtigung **Geplantes Backup fehlgeschlagen**.

Geplante Archive sind wie ein Download verschlüsselt und landen im Zielordner auf dem Server. In einem eigenen Zielordner schreibt jeder Server in einen Unterordner mit seiner Instanz-ID, so teilen sich mehrere Server einen NAS-Ordner. Beim Speichern des Zielordners legt camera.ui darin eine Datei `.backupignore` an. Findet ein Lauf den Ordner nicht oder leer ohne diese Datei (eine nicht eingehängte Freigabe), schreibt er nichts und scheitert. Der Zielordner ist nie Teil eines Backups und bleibt bei einer Wiederherstellung erhalten. **Vorhandene Backups** listet die Archive zum Herunterladen, Wiederherstellen oder Entfernen und markiert die, die mit dem Schlüssel eines anderen Servers verschlüsselt sind.

## Kommandozeile

Auf dem Rechner, auf dem der Server läuft, erstellt und spielt der Befehl `cameraui` Backups ohne Browser ein. In Docker führst du ihn im Container aus (`docker exec -it cameraui cameraui backup`) und schreibst in einen eingehängten Ordner.

```sh
cameraui backup -o /mnt/nas/camera.ui
cameraui restore camera.ui-backup-1760000000000.cuibackup --key-file key.txt --move
```

- **`backup`.** Speichert ein verschlüsseltes Archiv im aktuellen Ordner oder in der Datei bzw. dem Ordner aus `-o`. Es meldet sich mit einem Admin-API-Token aus `--token` oder `CAMERA_UI_API_TOKEN` an, sonst mit einem Admin-Konto.
- **`restore`.** Lädt das Archiv hoch, gibt die Übersicht aus und fragt, bevor sich etwas ändert. `--move` oder `--copy` legt die Art fest, sonst fragt der Befehl mit der vorgeschlagenen als Vorgabe. `--key-file` gibt den Backup-Schlüssel eines anderen Servers an, `-y` stellt ohne Rückfrage wieder her. Eine Wiederherstellung braucht ein Admin-Konto, API-Tokens reichen nicht.
- **Anmeldung.** `--username` nennt das Konto, das Passwort kommt aus `CAMERA_UI_PASSWORD` oder einer Abfrage, `--code` gibt den Zwei-Faktor-Code an.

Der Exit-Code ist 0 bei Erfolg und sonst 1.

[^previous]: Im Ordner `restore/previous` des camera.ui-Home-Verzeichnisses.

[^packing]: Im Ordner `restore/packing` des camera.ui-Home-Verzeichnisses.

[^ignore]: Um einen Ordner vom Backup auszuschließen (zum Beispiel einen großen Medienordner), lege darin eine leere Datei mit dem Namen `.backupignore` an. Eine Wiederherstellung lässt so einen Ordner unberührt.
