---
title: Logs & Konsole
---

# Logs & Konsole

Die **Logs**-Ansicht (im Menü, nur Admins) zeigt das Server-Log.

<Shot src="/img/admin/logs.png" alt="Die Logs-Ansicht" />

## Die Logs lesen

Logs streamen live. Filtere nach Quelle (**All**, eine Systemkomponente wie **Server**, **go2rtc**, **nats**, **tunnel**, eine **Kamera** oder ein **Plugin**), **durchsuche** die geladenen Zeilen, oder **lade** das Log **herunter**, nutze **Alles kopieren** oder **lösche** es. Der Download enthält das ganze Log, **Alles kopieren** nur die Zeilen, die in der Ansicht geladen sind.

Scrollst du nach oben, lädt die Ansicht ältere Zeilen nach, so weit das Log zurückreicht. Liest du weiter oben, schieben neue Zeilen die Ansicht nicht weg: Ein Button **neue Zeilen** zählt sie und bringt dich zurück ans Ende. Die Log-Dialoge einer Kamera- und einer Plugin-Karte funktionieren genauso.

Jedes Log behält seine neuesten Einträge bis zu einer festen Größe, ältere fallen heraus. Logs entfernter Kameras und Plugins werden gelöscht.

## Konsole

Die **Konsole** (im Menü, für jeden Benutzer verfügbar) zeigt das Log der App selbst, nicht das des Servers: die Stelle zum Nachsehen, wenn eine Ansicht leer bleibt, ein Stream nicht startet oder ein Button nichts tut.

Sie sammelt Einträge nur, solange das Logging läuft. Der Aufnahme-Button unten rechts startet und stoppt es, Debug-Einträge eingeschlossen.

Das Menü **Level** filtert nach Debug, Log, Info, Warnung und Fehler. **Exportieren / teilen** speichert die Ausgabe als Textdatei.

Bei Problemen mit der App hilft der Konsolen-Export, bei Problemen mit dem Server der Logs-Download.

## Terminal

Es gibt außerdem ein **Terminal** im Menü, eine interaktive Shell auf dem Server für fortgeschrittene Fehlersuche. Es ist auf Server-Installationen verfügbar, nicht in der Desktop-App.

Jeder Tab öffnet eine eigene Shell. Einen Tab verschiebst du per Ziehen (am Handy erst kurz halten), ein Doppelklick oder Doppeltipp benennt ihn um. Die Pinnadel im Menü unten rechts hält einen Tab und seine Shell auf dem Server offen: Nach dem Neuladen oder auf einem anderen Gerät öffnet der Tab wieder diese Shell. Tabs ohne Pinnadel sind nach dem Neuladen weg. Schließt du einen Tab oder startet der Server neu, endet seine Shell.
