---
title: Backup & Wiederherstellung
---

# Backup & Wiederherstellung

Backups liegen unter **Einstellungen → Backup** (nur Admins) und lassen sich auf jeder Plattform wiederherstellen.

## Ein Backup erstellen

Wähle **Backup-Archiv herunterladen**, um ein einzelnes Archiv deines camera.ui-Speicherverzeichnisses zu speichern: Konfiguration, Datenbank, Benutzerkonten und Medien.[^ignore]

## Wiederherstellen

Lade ein Archiv hoch und wähle **Backup-Archiv wiederherstellen**. Das ersetzt die aktuelle Konfiguration durch den Stand des Archivs und startet den Server neu. Lass das Fenster offen, bis es fertig ist; camera.ui meldet dich am Ende ab.

Archive größer als 200 MB werden beim Hochladen abgelehnt. Ist deins zu groß, schließe Medienordner vom Backup aus und erstelle ein neues.[^ignore]

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

**Jetzt ausführen** startet ein Backup sofort. **Letzter Lauf** zeigt Zeit und Ergebnis des letzten geplanten Laufs.

Geplante Archive werden im Zielordner auf dem Server gespeichert, im Unterschied zu einem manuellen Download, der das Archiv im Browser speichert. Alles, was der Zeitplan erstellt hat, steht unter **Vorhandene Backups** zum Herunterladen oder Entfernen.

[^ignore]: Um einen Ordner vom Backup auszuschließen (zum Beispiel einen großen Medienordner), lege darin eine leere Datei mit dem Namen `.backupignore` an.
