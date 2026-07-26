---
title: Zonen & Linien
---

# Zonen & Linien

Mit Zonen steuerst du, wo Erkennung stattfindet, ignorierst Teile des Bildes und erkennst, wenn etwas eine Linie überquert. Du bearbeitest sie pro Kamera, und sie wirken auf die [Erkennung](/de/detection/) der Kamera, die also eingerichtet sein muss.

## Den Editor öffnen

Öffne die [Einstellungen](/de/cameras/settings) einer Kamera und gehe zum **Einstellungen**-Tab. Unter **Zonen** siehst du die Zonen und Linien, die es an der Kamera schon gibt, jeweils mit Farbe, Name und Typ (Zone, Ignorierte Zone oder Linienüberquerung). Der Stift an einem Eintrag öffnet den Editor direkt darauf, der Papierkorb löscht ihn. Ist noch nichts angelegt, steht dort nur "Noch keine Zonen oder Linien an dieser Kamera."

Unter der Liste öffnet **Zonen bearbeiten** den Editor über dem Kamerabild mit zwei Tabs: **Zonen** und **Linien**.

<Shot src="/img/cameras/zone-editor.png" alt="Zonen-Editor im Zonen-Tab" />

## Erkennungszonen

Im Tab **Zonen** zeichnest du ein Polygon, indem du Punkte auf dem Bild setzt. Jede Zone ist entweder einschließend oder ausschließend:

- **Einschließen.** Nur Erkennungen innerhalb der Zone zählen. Alles andere im Bild wird ignoriert. Gut geeignet, um eine einzelne Stelle zu beobachten, etwa eine Einfahrt oder einen Hauseingang.
- **Ausschließen.** Erkennungen innerhalb der Zone werden ignoriert, alles außerhalb zählt weiterhin. Gut geeignet, um eine störende Ecke auszunehmen, etwa einen schwankenden Baum, während der Rest des Bildes normal weiterarbeitet.

Für "alles beobachten außer hier" reicht eine einzelne ausschließende Zone. Du musst nicht zusätzlich eine einschließende Zone um den Rest legen.

### Zonen kombinieren

Zeichnest du mehrere einschließende Zonen, zählt eine Erkennung, sobald sie in einer davon liegt. Zeichnest du mehrere ausschließende Zonen, nimmt jede ihren Bereich heraus.

Mischst du beides, **gewinnt Ausschließen**: Eine Erkennung in einer ausschließenden Zone wird verworfen, auch wenn sie gleichzeitig in einer einschließenden liegt. Genau damit schneidest du ein Loch aus einer größeren einschließenden Zone, etwa den ganzen Vorgarten beobachten, aber nicht den Gehweg, der hindurchführt.

Beachte, was sich ändert, sobald es eine einschließende Zone gibt: Außerhalb aller ausschließenden Zonen zu liegen genügt dann nicht mehr, die Erkennung muss zusätzlich in einer einschließenden Zone liegen. Gibt es an der Kamera nur ausschließende Zonen, zählt alles außerhalb.

### Modus

**Enthalten** ist die Voreinstellung: Eine Erkennung gilt erst als drinnen, wenn ihre ganze Box in der Zone liegt. **Schneiden** zählt sie schon, sobald die Box die Zone überlappt.

Der Modus legt für beide Zonenarten fest, was "drinnen" bedeutet. Bei einer ausschließenden Zone im Modus Enthalten wird jemand, der nur halb im ausgenommenen Bereich steht, weiterhin erkannt. Stell die Zone auf Schneiden, wenn sie schon bei Berührung greifen soll.

### Objekttypen

Du kannst eine Zone auf bestimmte **Objekttypen** begrenzen, sodass sie nur auf Personen oder nur auf Fahrzeuge reagiert.

Die Objekttypen gelten allerdings nicht nur lokal. Sie werden über alle Zonen einer Kamera gesammelt und wirken als eine gemeinsame Positivliste für die ganze Kamera. Begrenzt du eine beliebige Zone auf Fahrzeuge, werden Personen-Erkennungen überall auf dieser Kamera verworfen, auch in Zonen ohne eigene Objekttypen. Das gilt genauso für ausschließende Zonen: Eine ausschließende Zone auf Fahrzeuge schaltet die Personenerkennung der gesamten Kamera ab, was selten gewollt ist.

Jede neue Zone startet mit **Bewegung, Person, Fahrzeug und Tier** bereits ausgewählt. Willst du nur den Bereich begrenzen und nicht die Objekttypen, leere die Auswahl in jeder Zone. Lässt du die Voreinstellung stehen, werden außerdem Paket-Erkennungen verworfen, denn Paket gehört nicht dazu.

## Ignorierte Zonen

Mach aus einer Zone eine **ignorierte Zone**, um einen Bereich komplett von der Erkennung auszunehmen, etwa ein Nachbarfenster oder einen öffentlichen Gehweg. Erkennungen, die vollständig darin liegen, werden verworfen und lösen kein Ereignis aus. Was nur teilweise überlappt, zählt weiterhin.

Eine ignorierte Zone hat keine eigenen Einstellungen, und das ist ihr Sinn. Sie nutzt immer die Regel "vollständig enthalten", sie verwirft alles, was dort landet, unabhängig vom Objekttyp, und sie bleibt aus der oben beschriebenen kameraweiten Positivliste heraus. Wenn du einen Bereich einfach nur loswerden willst, ist sie damit die sicherere Wahl gegenüber einer ausschließenden Zone. Zu einer ausschließenden Zone greifst du, wenn sie mit deinen einschließenden Zonen zusammenspielen soll oder wenn du Schneiden statt Enthalten brauchst.

Eine ignorierte Zone verändert das Video nicht.[^noblackout] Der Bereich bleibt in der Live-Ansicht und in Aufnahmen sichtbar und wird weiterhin aufgezeichnet.

[^noblackout]: camera.ui kann keinen Teil des Bildes schwärzen. Soll ein Nachbarfenster gar nicht gefilmt werden, richte die Kamera anders aus, oder nutze die Privatsphärenmaske der Kamera selbst, falls sie eine hat: die schwärzt den Bereich, bevor das Bild bei camera.ui ankommt.

## Linien (Linienüberquerung)

Im Tab **Linien** zeichnest du eine Linie über das Bild, um zu erkennen, wenn etwas sie überquert. Jede Linie hat eine **Richtung**:

- **A → B** oder **B → A** löst bei einer Überquerung in eine Richtung aus.
- **A ↔ B** löst in beide Richtungen aus.

Wie Zonen lässt sich auch eine Linie auf bestimmte Objekttypen begrenzen. Eine Überquerung löst nur dann ein Ereignis aus, wenn sich tatsächlich etwas in der gewählten Richtung über die Linie bewegt, sodass du bei jemandem alarmieren kannst, der durch ein Tor kommt, statt nur im Bild aufzutauchen.
