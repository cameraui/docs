---
title: Zonen, Masken & Linien
---

# Zonen, Masken & Linien

Mit Zonen steuerst du, wo Erkennung stattfindet, ignorierst Teile des Bildes und erkennst, wenn etwas eine Linie überquert. Du bearbeitest sie pro Kamera, und sie wirken auf die [Erkennung](/de/detection/) der Kamera, die also eingerichtet sein muss.

## Den Editor öffnen

Öffne die [Einstellungen](/de/cameras/settings) einer Kamera und gehe zum **Einstellungen**-Tab. Unter **Zonen** siehst du die Zonen und Linien, die es an der Kamera schon gibt, jeweils mit Farbe, Name und Typ (Zone, Privatsphäre-Maske oder Linienüberquerung). Der Stift an einem Eintrag öffnet den Editor direkt darauf, der Papierkorb löscht ihn. Ist noch nichts angelegt, steht dort nur "Noch keine Zonen oder Linien an dieser Kamera."

Unter der Liste öffnet **Zonen bearbeiten** den Editor über dem Kamerabild mit zwei Tabs: **Zonen** und **Linien**.

<Shot src="/img/cameras/zone-editor.png" alt="Zonen-Editor im Zonen-Tab" />

## Erkennungszonen

Im Tab **Zonen** zeichnest du ein Polygon, indem du Punkte auf dem Bild setzt. Eine Zone begrenzt, wo Erkennungen zählen:

- **Einschließen.** Nur Erkennungen innerhalb der Zone lösen aus.
- **Ausschließen.** Erkennungen innerhalb der Zone werden ignoriert, etwa eine viel befahrene Straße oder ein schwankender Baum.

Du kannst eine Zone auf bestimmte **Objekttypen** (ihre Labels) begrenzen, sodass sie nur auf Personen oder nur auf Fahrzeuge reagiert. Achtung: Die Objekttypen werden über alle Zonen einer Kamera gesammelt und wirken als eine gemeinsame Positivliste. Sobald eine Zone auf Fahrzeuge begrenzt ist, werden Personen-Erkennungen auf der ganzen Kamera verworfen, auch in Zonen ohne gesetzte Objekttypen. Wenn du nur den Bereich begrenzen willst, lass die Objekttypen in jeder Zone leer.

Eine Zone hat außerdem einen Modus. **Enthalten** ist die Voreinstellung: Eine Erkennung zählt nur, wenn ihre ganze Box in der Zone liegt. **Schneiden** zählt sie schon, sobald die Box die Zone überlappt. Der Modus gilt für einschließende und ausschließende Zonen gleichermaßen.

## Privatsphärenmasken

Mach aus einer Zone eine **Privatsphärenmaske**, um einen Bereich komplett zu ignorieren. Erkennungen, die vollständig in der Maske liegen, werden verworfen und lösen kein Ereignis aus, was bei einem Nachbarfenster oder einem öffentlichen Gehweg nützlich ist. Was die Maske nur teilweise überlappt, zählt weiterhin. Eine Privatsphärenmaske hat keine eigenen Erkennungseinstellungen.

Eine Privatsphärenmaske verändert das Video nicht. Der Bereich bleibt in der Live-Ansicht und in Aufnahmen sichtbar.

## Linien (Linienüberquerung)

Im Tab **Linien** zeichnest du eine Linie über das Bild, um zu erkennen, wenn etwas sie überquert. Jede Linie hat eine **Richtung**:

- **A → B** oder **B → A** löst bei einer Überquerung in eine Richtung aus.
- **A ↔ B** löst in beide Richtungen aus.

Wie Zonen lässt sich auch eine Linie auf bestimmte Objekttypen begrenzen. Eine Überquerung löst nur dann ein Ereignis aus, wenn sich tatsächlich etwas in der gewählten Richtung über die Linie bewegt, sodass du bei jemandem alarmieren kannst, der durch ein Tor kommt, statt nur im Bild aufzutauchen.
