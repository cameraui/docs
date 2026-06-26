---
title: Zonen, Masken & Linien
---

# Zonen, Masken & Linien

Mit Zonen steuerst du, wo Erkennung stattfindet, blendest Teile des Bildes aus und erkennst, wenn etwas eine Linie überquert. Du bearbeitest sie pro Kamera, und sie wirken auf die [Erkennung](/de/detection/) der Kamera, die also eingerichtet sein muss.

## Den Editor öffnen

Öffne die [Einstellungen](/de/cameras/settings) einer Kamera, gehe zum **Einstellungen**-Tab und wähle unter **Zonen** den Punkt **Zonen bearbeiten**. Der Editor öffnet sich über dem Kamerabild mit zwei Tabs: **Zonen** und **Linien**.

![Zonen-Editor im Zones-Tab](/img/cameras/zone-editor.png)

## Erkennungszonen

Im Tab **Zonen** zeichnest du ein Polygon, indem du Punkte auf dem Bild setzt. Eine Zone begrenzt, wo Erkennungen zählen:

- **Einschließen.** Nur Erkennungen innerhalb der Zone lösen aus.
- **Ausschließen.** Erkennungen innerhalb der Zone werden ignoriert, etwa eine viel befahrene Straße oder ein schwankender Baum.

Du kannst eine Zone auf bestimmte **Objekttypen** (ihre Labels) begrenzen, sodass sie nur auf Personen oder nur auf Fahrzeuge reagiert. Der **Schneiden**-Modus löst aus, sobald die Box einer Erkennung die Zone nur berührt, statt dass ihr Mittelpunkt darin liegen muss.

## Privatsphärenmasken

Mach aus einer Zone eine **Privatsphärenmaske**, um einen Teil des Bildes zu schwärzen. Maskierte Bereiche sind in Live-Ansicht und Aufnahmen ausgeblendet, was bei einem Nachbarfenster oder einem öffentlichen Gehweg nützlich ist. Eine Privatsphärenmaske blendet nur aus und hat keine Erkennungseinstellungen.

## Linien (Linienüberschreitung)

Im Tab **Linien** zeichnest du eine Linie über das Bild, um zu erkennen, wenn etwas sie überquert. Jede Linie hat eine **Richtung**:

- **A → B** oder **B → A** löst bei einer Überquerung in eine Richtung aus.
- **A ↔ B** löst in beide Richtungen aus.

Wie Zonen lässt sich auch eine Linie auf bestimmte Objekttypen begrenzen. Eine Überquerung löst nur dann ein Ereignis aus, wenn sich tatsächlich etwas in der gewählten Richtung über die Linie bewegt, sodass du bei jemandem alarmieren kannst, der durch ein Tor kommt, statt nur im Bild aufzutauchen.
