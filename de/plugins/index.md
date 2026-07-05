---
title: Plugins
---

# Plugins

Plugins erweitern camera.ui. Das meiste, was es über die Live-Ansicht hinaus kann, stammt von Plugins, die du installierst: die [KI-Backends und Bewegungs-Engines](/de/detection/), die die Erkennung antreiben, Audio-Erkennung, Smart-Home-Bridges wie [HomeKit](/de/plugins/homekit) und Integrationen für verschiedene Kamera-Marken. Plugins zu verwalten ist eine Admin-Aufgabe.

## Zwei Dinge, getrennt gehalten

- **Ein Plugin installieren** fügt es deinem Server hinzu, einmalig. Darum geht es in diesem Abschnitt.
- **Ein Plugin zuweisen** entscheidet, welche Kamera es nutzt, etwa welche Bewegungs-Engine eine Kamera fährt. Das geschieht pro Kamera, in [Sensoren einrichten](/de/sensors/setup).

## Plugins verwalten

![Die Plugins-Seite](/img/plugins/plugins-list.png)

Öffne **Plugins** aus dem Menü, um alles Installierte zu sehen, jeweils als Karte mit Live-Status (Ready, Started, Stopped, Error). Von einer Karte aus kannst du:

- Es **aktivieren oder deaktivieren** und seinen Prozess **starten, stoppen oder neu starten**.
- Es **aktualisieren**, wenn eine neue Version verfügbar ist, oder eine **bestimmte Version** wählen.
- Seine **Einstellungen öffnen** oder seine **Logs** ansehen, wenn etwas klemmt.
- Es **deinstallieren**, optional samt gespeicherter Daten.

Plugins laufen als eigener Prozess, sodass ein sich fehlverhaltendes Plugin nicht den Rest mitreißt. Sie können in Node, Python oder Go geschrieben sein; ein kleines Abzeichen auf jeder Karte zeigt, welche.

## Ein Plugin installieren

![Der Plugin-Store](/img/plugins/plugin-store.png)

Wähle **Plugins suchen**, um den Store zu öffnen. Die Liste stammt von npm, sodass jedes als camera.ui-Plugin veröffentlichte Paket erscheinen kann und der Katalog keine feste Liste ist, aber camera.ui kuratiert darüber, was du siehst:

- **Vertrauen.** Jedes Plugin ist als **Offiziell** (von camera.ui veröffentlicht), **Verifiziert** (ein vom camera.ui-Team geprüftes Community-Plugin) oder **Community** (von beliebigen Personen veröffentlicht, nicht geprüft) gekennzeichnet. Du kannst nach Vertrauensstufe filtern.
- **Sicherheit.** Als bösartig oder kompromittiert bekannte Plugins werden blockiert: Sie erscheinen nicht, lassen sich nicht installieren, und ein bereits installiertes wird automatisch deaktiviert, falls es später blockiert wird.
- **Durchsuchen.** Filtere nach Kategorie, starte bei den empfohlenen Plugins und sortiere nach Name, wöchentlichen Downloads oder letzter Aktualisierung. Jeder Eintrag zeigt sein Logo, eine kurze Beschreibung und seine Download-Zahlen.

Wähle ein Plugin und installiere es, bei Bedarf mit Versionswahl. Einmal installiert, aktiviere es und weise es zu, wo es gebraucht wird.

## Einstellungen

Die eigenen Einstellungen eines Plugins liegen auf seiner Seite unter **Settings** und gelten serverweit. Einstellungen, die eine einzelne Kamera betreffen, werden stattdessen in den [Einstellungen dieser Kamera](/de/cameras/settings) bearbeitet. Aufnahme-Plugin-Einstellungen liegen beim Rest der [Aufnahmen](/de/recording/).

## Einrichtungs-Anleitungen

- **[HomeKit](/de/plugins/homekit)** — deine Kameras zu Apple Home hinzufügen.
