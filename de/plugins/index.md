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

Wähle **Plugins suchen**, um welche zum Installieren zu finden. camera.ui schlägt veröffentlichte Plugins nach (jedes npm-Paket, das als camera.ui-Plugin getaggt ist), sodass der Katalog keine feste Liste ist. Wähle eines und installiere es, bei Bedarf mit Versionswahl. Einmal installiert, aktiviere es und weise es zu, wo es gebraucht wird.

## Einstellungen

Die eigenen Einstellungen eines Plugins liegen auf seiner Seite unter **Settings** und gelten serverweit. Einstellungen, die eine einzelne Kamera betreffen, werden stattdessen in den [Einstellungen dieser Kamera](/de/cameras/settings) bearbeitet. Aufnahme-Plugin-Einstellungen liegen beim Rest der [Aufnahmen](/de/recording/).

## Einrichtungs-Anleitungen

- **[HomeKit](/de/plugins/homekit)** — deine Kameras zu Apple Home hinzufügen.
