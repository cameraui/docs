---
title: Logs & Konsole
---

# Logs & Konsole

Wenn etwas nicht funktioniert, zeigt die **Logs**-Ansicht (im Menü, nur Admins), was der Server tut.

<Shot src="/img/admin/logs.png" alt="Die Logs-Ansicht" />

## Die Logs lesen

Logs streamen live. Du kannst:

- Nach Quelle filtern: **All**, eine Systemkomponente (**Server**, **go2rtc**, **nats**, **tunnel**), eine bestimmte **Kamera** oder ein bestimmtes **Plugin**.
- Die sichtbaren Zeilen **durchsuchen**.
- Das Log **herunterladen**, um es bei einer Anfrage um Hilfe zu teilen, mit **Alles kopieren** in die Zwischenablage übernehmen oder **löschen**.
- Den Text vergrößern und verkleinern.

## Konsole

Die **Konsole** (im Menü, für jeden Benutzer verfügbar) zeigt das Log der App selbst, nicht das des Servers. Nutze sie, wenn die App sich merkwürdig verhält: eine Ansicht bleibt leer, ein Stream startet nicht, ein Button tut nichts.

Sie sammelt Einträge nur, solange **Protokolle aufzeichnen** aktiv ist, und weist dich darauf hin, wenn es aus ist. Aktiviere es unter **Einstellungen → Erscheinungsbild**. Im selben Abschnitt gibt es **Ausführliches Logging**, das Debug-Einträge ergänzt.

In der Konsole kannst du:

- Über das Menü **Level** nach Level filtern: Debug, Log, Info, Warnung, Fehler.
- Die sichtbaren Zeilen **durchsuchen**.
- Die Ausgabe **kopieren**, als Textdatei **exportieren / teilen** oder **leeren**.

Bei Problemen mit der App hilft der Konsolen-Export, bei Problemen mit dem Server der Logs-Download.

## Terminal

Es gibt außerdem ein **Terminal** im Menü, eine interaktive Shell auf dem Server für fortgeschrittene Fehlersuche. Es ist auf Server-Installationen verfügbar, nicht in der Desktop-App.
