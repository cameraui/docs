---
title: Plugins
---

# Plugins

Das meiste, was camera.ui über die Live-Ansicht hinaus kann, kommt aus Plugins: die [KI-Backends und Bewegungs-Engines](/de/detection/) hinter der Erkennung, Audio-Erkennung, Smart-Home-Bridges wie [HomeKit](/de/plugins/homekit) und Integrationen für Kamera-Marken. Plugins zu verwalten ist eine Admin-Aufgabe.

## Zwei Dinge, getrennt gehalten

- **Ein Plugin installieren** fügt es deinem Server hinzu, einmalig. Darum geht es auf dieser Seite.
- **Ein Plugin zuweisen** entscheidet, welche Kamera es nutzt, etwa welche Bewegungs-Engine eine Kamera fährt. Das geschieht pro Kamera, in [Sensoren einrichten](/de/sensors/setup).

## Plugins verwalten

<Shot src="/img/plugins/plugins-list.png" alt="Die Plugins-Seite" />

**Plugins** listet alles Installierte, jede Karte mit Live-Status (Bereit, Gestartet, Gestoppt, Fehler). Von einer Karte aus kannst du:

- Es **aktivieren oder deaktivieren** und seinen Prozess **starten, stoppen oder neu starten**.
- Es **aktualisieren**: Der Update-Button startet sofort, ein erneuter Klick während des Laufs zeigt die Live-Ausgabe der Installation. Für Release Notes oder eine **bestimmte Version** nimm das Karten-Menü.
- Seine **Einstellungen öffnen** oder seine **Logs** ansehen.
- Es **deinstallieren**, optional samt gespeicherter Daten.

Aufnahmen sind die Ausnahme: Wenn du die gespeicherten Daten eines Aufnahme-Plugins löschst, bleibt das Videomaterial erhalten.

**Alle aktualisieren** in der Werkzeugleiste aktualisiert jedes veraltete Plugin. Während ein Update-Lauf von der [Updates-Seite](/de/install/updating) läuft, sind die Plugins gestoppt und lassen sich hier nicht verwalten.

Der Zahnrad-Button neben der Suchleiste enthält zwei Einstellungen, beide standardmäßig aus:

- **Beta-Versionen.** Zeigt Vorabversionen in der Versionsauswahl und bietet Beta-Releases als Updates an.
- **Plugin-Build-Skripte erlauben.** Lässt Plugins beim Installieren oder Aktualisieren Install-Skripte und native Builds ausführen. Nur für Plugins aktivieren, denen du vertraust.

Der Button neben dem Plus wechselt zu einer kompakten **Tabellenansicht** mit Status, Version und Aktionen pro Zeile; deine Wahl bleibt erhalten.

Installationen, Updates und Deinstallationen laufen über eine Warteschlange auf dem Server, zwei gleichzeitig. Jeder offene Browser sieht die Warteschlange, egal wer sie gestartet hat.

Jedes Plugin läuft in einem eigenen Prozess, ein abstürzendes Plugin reißt also nicht den Rest mit. Ein Abzeichen auf der Karte zeigt die Sprache (Node, Python oder Go). Ein Plugin, das für eine andere Plugin-API gebaut wurde, startet nicht: Seine Karte sagt, ob das Plugin oder camera.ui ein Update braucht, und du bekommst eine Benachrichtigung.

### Mehrere auf einmal verwalten

Der Auswahl-Button funktioniert in beiden Ansichten: mehrere Plugins in einem Schritt aktualisieren, aktivieren, deaktivieren oder deinstallieren.

## Ein Plugin installieren

<Shot src="/img/plugins/plugin-store.png" alt="Der Plugin-Store" />

**Plugins suchen** öffnet den Store. Die Liste stammt von npm, jedes veröffentlichte camera.ui-Plugin kann also erscheinen; camera.ui kuratiert darüber:

- **Vertrauen.** Jedes Plugin ist als **Offiziell** (von camera.ui veröffentlicht), **Verifiziert** (ein vom camera.ui-Team geprüftes Community-Plugin) oder **Community** (von beliebigen Personen veröffentlicht, nicht geprüft) gekennzeichnet. Du kannst nach Vertrauensstufe filtern.
- **Sicherheit.** Als bösartig oder kompromittiert bekannte Plugins werden blockiert: Sie erscheinen nicht, lassen sich nicht installieren, und ein bereits installiertes wird automatisch deaktiviert, falls es später blockiert wird.
- **Kompatibilität.** Der Store markiert ein Plugin, das ein neueres camera.ui braucht, und die Installation einer Version, die auf deinem Server nicht laufen kann, wird mit Begründung abgelehnt.
- **Durchsuchen.** Filtere nach Kategorie, starte bei den empfohlenen Plugins und sortiere nach Name, wöchentlichen Downloads oder letzter Aktualisierung.

Beim Installieren lässt sich eine bestimmte Version wählen. Danach das Plugin aktivieren und zuweisen, wo es gebraucht wird.

## Private Registry oder Mirror

Plugins kommen aus der npm-Registry, auf die deine `.npmrc` zeigt. Ein Firmen-Mirror oder eine private Registry funktioniert damit für den Store, für Installationen und für die Abhängigkeiten eines Plugins. Die Datei liegt im Home-Verzeichnis des Benutzers, der camera.ui ausführt:

```ini
registry=https://npm.example.com/
//npm.example.com/:_authToken=<token>
```

- **Eine Registry für alles** mit `registry=`, oder nur ein Scope mit `@example:registry=https://npm.example.com/`.
- **Anmeldung** über `//npm.example.com/:_authToken=<token>` oder Basic Auth mit `//npm.example.com/:username=` und `//npm.example.com/:_password=<base64>`. Zugangsdaten gehen nur an den Host und Pfad, für die sie eingetragen sind.
- **Token aus der Umgebung.** `CAMERAUI_NPM_TOKEN` (oder `NPM_TOKEN`) ersetzt die Token-Zeile. Es gilt für die Registry aus `registry=`, ein Scope mit eigener Registry braucht sein Token also in der `.npmrc`.
- **Docker:** Die Datei nach `/root/.npmrc` mounten. Das Home-Verzeichnis liegt nicht im `/data`-Volume.
- **Linux-Dienst:** das Home-Verzeichnis des Dienst-Benutzers. **Desktop-App:** das Home-Verzeichnis des angemeldeten Benutzers.
- **Remote-Worker** installieren Plugins selbst, jeder braucht also dieselbe Datei oder dieselbe Variable.

Der Store listet Pakete mit dem Namen `camera-ui-*` oder `@scope/camera-ui-*`, die das Keyword `camera-ui-plugin` tragen. Registries ohne Such-API, zum Beispiel GitHub Packages, liefern keine Liste: Gib dann den genauen Paketnamen ein, der Store sucht ihn direkt.

## Einstellungen

Die eigenen Einstellungen eines Plugins liegen auf seiner Seite unter **Einstellungen** und gelten serverweit. Einstellungen, die eine einzelne Kamera betreffen, werden stattdessen in den [Einstellungen dieser Kamera](/de/cameras/settings) bearbeitet. Aufnahme-Plugin-Einstellungen liegen beim Rest der [Aufnahmen](/de/recording/).

## Einrichtungs-Anleitungen

- **[HomeKit](/de/plugins/homekit)** — deine Kameras zu Apple Home hinzufügen.
- **[Home Assistant](/de/home-assistant/)** — Kameras, Sensoren und Erkennungs-Events als Home-Assistant-Entitäten.
- **Google Home und Alexa** — noch nicht verfügbar, beide auf der Roadmap.
