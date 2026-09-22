---
title: Logs & Konsole
---

# Logs & Konsole

Die **Logs**-Ansicht (im Menü, nur Admins) zeigt das Server-Log.

<Shot src="/img/admin/logs.png" alt="Die Logs-Ansicht" />

## Die Logs lesen

Logs streamen live. Filtere nach Quelle (**All**, eine Systemkomponente wie **Server**, **go2rtc**, **nats**, **tunnel**, eine **Kamera** oder ein **Plugin**), **durchsuche** die sichtbaren Zeilen, oder **lade** das Log **herunter**, nutze **Alles kopieren** oder **lösche** es.

## Konsole

Die **Konsole** (im Menü, für jeden Benutzer verfügbar) zeigt das Log der App selbst, nicht das des Servers: die Stelle zum Nachsehen, wenn eine Ansicht leer bleibt, ein Stream nicht startet oder ein Button nichts tut.

Sie sammelt Einträge nur, solange **Protokolle aufzeichnen** unter **Einstellungen → Erscheinungsbild** aktiv ist. Im selben Abschnitt gibt es **Ausführliches Logging**, das Debug-Einträge ergänzt.

Das Menü **Level** filtert nach Debug, Log, Info, Warnung und Fehler. **Exportieren / teilen** speichert die Ausgabe als Textdatei.

Bei Problemen mit der App hilft der Konsolen-Export, bei Problemen mit dem Server der Logs-Download.

## Terminal

Es gibt außerdem ein **Terminal** im Menü, eine interaktive Shell auf dem Server für fortgeschrittene Fehlersuche. Es ist auf Server-Installationen verfügbar, nicht in der Desktop-App.
