---
title: Modelltraining
---

# Modelltraining

Die Erkennungsmodelle von camera.ui werden auf echtem Material aus echten Installationen trainiert, beigesteuert von der Community. Die Ansicht **Training** sammelt Beispiel-Frames deiner Kameras, du beschriftest und bestätigst sie und entscheidest, welche in den gemeinsamen Trainingspool gehen. Von allein wird nichts hochgeladen.

<Shot src="/img/detection/training-view.png" alt="Training-Ansicht mit Kandidaten-Frames" />

## Wie Frames gesammelt werden

Während Erkennungs-Events speichert jede Kamera einen Frame, wenn etwas Neues auftaucht: ein neues Objekt, eine geänderte Position, ein frisches Gesicht oder Kennzeichen. Eine unveränderte Szene wiederholt sich nicht, egal wie lange das Event läuft. camera.ui behält höchstens 200 Frames pro Kamera: Ist das Limit erreicht, weichen die ältesten ungeprüften Frames, und ungeprüfte Frames werden ohnehin nach 14 Tagen gelöscht. Bestätigte Frames bleiben, bis du sie einreichst oder löschst.

Eine [Privatzone](/de/cameras/zones-and-masks) wird geschwärzt, bevor der Frame gespeichert wird, dahinter wird also nie etwas gesammelt oder eingereicht.

Die Sammlung ist standardmäßig an und bleibt auf deiner Platte. Zum Abschalten öffnest du das Zahnrad-Menü in der Training-Ansicht und deaktivierst **Kandidaten sammeln**. Die Ansicht sehen nur Admins.

## Frames beschriften

Ein Frame öffnet den Editor. Ziehen zeichnet eine Box, Tipp auf Box oder Label ändert sie, Doppeltipp zoomt. Mit Tastatur listet der Fragezeichen-Button im Editor die Shortcuts auf.

Aufeinanderfolgende Frames zeigen oft dieselben Objekte. **Boxen des vorherigen Bildes zeigen** in der Werkzeugleiste des Editors (oder `V`) zeichnet die Boxen des Frames davor gestrichelt ein, ohne die, die dieser Frame schon hat. Das Plus an einem Umriss übernimmt diese Box, `Shift` + `V` übernimmt alle.

<Shot src="/img/detection/training-editor.png" alt="Training-Editor mit beschrifteten Boxen" />

Was einen Frame wertvoll macht:

- **Beschrifte alles Sichtbare.** Jede Person, jedes Fahrzeug, Tier und Paket im Bild, nicht nur den Auslöser des Events. Ein unbeschriftetes Objekt lernt das Modell als "kein Objekt". Die Boxen, die camera.ui für dich gezeichnet hat, enthalten auch Objekte außerhalb deiner Erkennungszonen und Labels, die du nie aktiviert hast; sie gehören in die Daten, lass sie drin.
- **Boxen eng ziehen.** Die Box umschließt das Objekt ohne Rand.
- **Verdecktes mitdenken.** Ein teils verdecktes Objekt bekommt die Box über seine volle Ausdehnung, soweit du sie einschätzen kannst.
- **Gesichter und Kennzeichen bekommen eigene Boxen**, zusätzlich zur Personen- oder Fahrzeug-Box.
- **Kennzeichen abtippen.** Bei ausgewählter Kennzeichen-Box nimmt ein Textfeld das Kennzeichen wie aufgedruckt auf. Optional, und die Grundlage fürs Kennzeichenlesen.
- **Fehlalarme sind wertvoll.** Zeigt der Frame keins der Objekte, lösche alle Boxen und bestätige ihn leer. Genau so verlernt das Modell einen Fehlauslöser.

**Bestätigen** markiert den Frame als fertig. Nur bestätigte Frames lassen sich einreichen.

## In den Pool einreichen

Der Einreichen-Button in der schwebenden Button-Gruppe unten rechts sendet jeden bestätigten Frame der gewählten Kamera. Solange nichts bestätigt ist, bleibt er ausgegraut, und der Filter neben der Suche (**Alle**, **Neu**, **Bestätigt**) schränkt ihn nicht ein. Um nur einige zu senden, startet **Kandidaten auswählen** die Auswahl, dann hakst du die Frames an und reichst sie über den Wolken-Button ein. Der Upload läuft im Hintergrund, ein Banner zeigt den Fortschritt, und jeder eingereichte Frame verschwindet aus der lokalen Liste. Zum Einreichen muss dein Server bei der [camera.ui Cloud](/de/remote/cloud) angemeldet sein.

**Meine Beiträge** in der Werkzeugleiste listet alles Eingereichte, mit Frame, Labels und Status: noch wartend (**Eingereicht**) oder bereits verwendet (**Im Training**). Bilder und Labels sind deinem cameraui.com-Konto zugeordnet; das Löschen eines Beitrags entfernt ihn aus dem Pool.
