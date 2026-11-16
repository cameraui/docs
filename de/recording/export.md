---
title: Export & Download
---

# Export & Download

## Einen Clip exportieren

<Shot src="/img/recording/export-trim.png" alt="Einen Clip auf der Timeline zuschneiden" />

Zieh auf der [Timeline](/de/recording/timeline-playback) die Trim-Griffe auf Anfang und Ende und exportiere eine **MP4**. Der Clip wird in der Qualität gespeichert, die du gerade siehst, eine niedrigere Qualität gibt also eine kleinere Datei. Eine Auswahl über mehr als 24 Stunden wird wie im Dialog unten exportiert, als eine MP4 pro Tag in einem ZIP.

## Mehrere Aufnahmen exportieren

<Shot src="/img/recording/export-recordings.png" alt="Der Dialog „Aufnahmen exportieren“" />

Die Download-Schaltfläche in der Ansicht **Aufnahmen** öffnet **Aufnahmen exportieren**: eine oder mehrere Kameras, ein Zeitbereich über mehrere Tage, eine Qualität (Beste Qualität oder Kleinste Dateien) und optional ein Zeitraffer-Intervall. Du bekommst pro Kamera und Tag eine MP4 (erster und letzter Tag auf den gewählten Zeitraum begrenzt, die Tage dazwischen komplett) und vorab eine Größenschätzung. Mehrere Dateien kommen als ein ZIP, eine einzelne direkt als MP4. Die Qualitätswahl des Dialogs ist unabhängig davon, was du gerade siehst.

Beide Exporte wandeln die Aufnahmen einer MJPEG-Kamera nach H.264 um. Das dauert länger, und die Dateien bleiben deutlich unter der Größenschätzung des Dialogs.

Ein Clip oder eine einzelne Datei wird gesendet, während sie aus den Aufnahmen gelesen wird: Der Download startet sofort, auf den Datenträger wird nichts geschrieben, und die MP4 lässt sich schon abspielen, während sie noch lädt. Ein ZIP wird Datei für Datei auf dem Datenträger mit den Aufnahmen zusammengestellt und braucht dort Platz für etwa das Doppelte seiner größten Datei. Eines, das der Aufnahme zu wenig Platz ließe, wird abgelehnt, ein kürzerer Zeitraum oder **Kleinste Dateien** hilft.

Es laufen nur wenige Exporte gleichzeitig, und ein Download, der mehrere Minuten pausiert, wird abgebrochen. Aufnahmen, die ein laufender Export noch braucht, bleiben erhalten, bis er sie gelesen hat.

## Zeitraffer

Beide Export-Varianten können stattdessen einen **Zeitraffer** erzeugen, der Bilder in einem Intervall abtastet und so einen langen Zeitraum in einen kurzen Clip komprimiert.
