---
title: Backup & Wiederherstellung
---

# Backup & Wiederherstellung

Du kannst dein camera.ui-Setup sichern und später wiederherstellen, auf jeder Plattform. Es liegt unter **Einstellungen → Backup** (nur Admins).

## Ein Backup erstellen

Wähle **Backup-Archiv herunterladen**, um ein einzelnes Archiv deiner camera.ui-Konfiguration, Datenbank und Benutzerkonten zu speichern. Bewahre es sicher auf.[^ignore]

## Wiederherstellen

Lade ein Archiv hoch und wähle **Backup-Archiv wiederherstellen**. camera.ui stellt dein Setup wieder her und startet anschließend neu, um es anzuwenden. Das ersetzt die aktuelle Konfiguration, sei dir also sicher, dass du auf den Stand des Archivs zurück willst.

## Geplante Backups

<Shot src="/img/admin/backup-scheduler.png" alt="Die Karte „Backup-Zeitplan&quot;" />

Die Karte **Backup-Zeitplan** erstellt Backups automatisch und behält nur die neuesten Archive.

Schalte den Umschalter ein und lege dann fest:

- **Häufigkeit.** Täglich, Wöchentlich oder Monatlich.
- **Uhrzeit.** Die Tageszeit, zu der das Backup läuft, im Format HH:mm (Standard `03:00`).
- **Wochentag.** Wird nur angezeigt, wenn Häufigkeit auf Wöchentlich steht.
- **Tag des Monats.** Wird nur angezeigt, wenn Häufigkeit auf Monatlich steht, 1-28.
- **Backups behalten.** Wie viele der neuesten Archive behalten werden, 1-60 (Standard 7). Ältere Archive werden nach jedem Lauf automatisch gelöscht.
- **Zielordner.** Ein absoluter Pfad auf dem Server, zum Beispiel ein NAS-Mount. Leer lassen, um den Standardordner innerhalb deines Speicherverzeichnisses zu verwenden. Ein relativer Pfad wird abgelehnt.

Mit **Jetzt ausführen** löst du ein Backup sofort aus, ohne auf den Zeitplan zu warten. Eine Zeile **Letzter Lauf** zeigt Zeitstempel und Ergebnis (Erfolg oder Fehler) des letzten geplanten Laufs, oder "nie", wenn noch keiner gelaufen ist.

Geplante Archive werden im Zielordner auf dem Server gespeichert, im Unterschied zu einem manuellen Download, der das Archiv im Browser speichert. Alles, was der Zeitplan erstellt hat, erscheint unter **Vorhandene Backups**, mit Dateiname, Datum und Größe sowie einer Download- oder Entfernen-Aktion je Eintrag.

[^ignore]: Um einen Ordner vom Backup auszuschließen (zum Beispiel einen großen Medienordner), lege darin eine leere Datei mit dem Namen `.backupignore` an.
