---
title: Dashboard-Karten
---

# Dashboard-Karten

Drei Karten bringen camera.ui auf ein Home-Assistant-Dashboard: eine Kamera, eine gespeicherte [Camview](/de/cameras/camview)-Ansicht und einen Streifen mit den letzten Ereignissen. Ein Klick öffnet den camera.ui-Dialog mit Livebild und Zeitleiste, direkt in Home Assistant.

Die Karten liefert dein camera.ui-Server aus, sie passen also immer zu der Version, die du fährst. Home Assistant hält eine Kopie vor, ein Dashboard baut sich also auch auf, während der Server weg ist.

<Shot src="/img/home-assistant/cards.png" alt="Ein Home-Assistant-Dashboard mit Ereignis-Streifen, drei Kamera-Karten und einer Camview-Ansicht" />

## Bevor du anfängst

Richte zuerst die [Integration](/de/home-assistant/integration) ein. Sie meldet die Karten an, sie erscheinen also in der Kartenauswahl, ohne dass du eine Ressource von Hand einträgst.

Wer sie nutzen darf, ist eine Option der Integration: standardmäßig **nur Administratoren**, wahlweise alle Home-Assistant-Nutzer. Siehe [Kartenzugriff](/de/home-assistant/integration#kartenzugriff).

## camera.ui Camera

Eine Kamera, entweder als Snapshot-Kachel wie auf der Startseite oder als vollständiger Live-Player.

```yaml
type: custom:cameraui-card
entity: camera.front_door
mode: snapshot
click: popup
```

- **entity.** Pflicht. Eine camera.ui-Kamera-Entität.
- **mode.** `snapshot` (Standard) zeigt die Kachel mit ihrem sich auffrischenden Bild, `live` startet den Player.
- **click.** Was ein Klick tut: `popup` (Standard) öffnet den camera.ui-Dialog, `ha` springt zur Kamera im Seitenleisten-Panel, `none` tut nichts.
- **title.** Überschreibt den Namen auf der Karte.
- **fit.** `contain` (Standard) zeigt das ganze Bild, `cover` füllt die Karte und schneidet ab.
- **controls** und **toolbar.** Schalten die Player-Steuerung oder die Leiste darüber ab.
- **detection_indicator.** Schaltet die Markierung ab, die aufleuchtet, während die Kamera etwas erkennt.

## camera.ui View

Eine Camview-Ansicht als Widget: die dort angeordneten Kameras, im selben Layout.

```yaml
type: custom:cameraui-view-card
view: Garten
```

- **view.** Der Name der Ansicht. Ohne ihn bittet die Karte dich, eine auszuwählen.
- **rearrange.** Auf `false` setzen, um den Anordnen-Button auszublenden, damit sich das Layout vom Dashboard aus nicht ändern lässt.

## camera.ui Events

Der Streifen mit den letzten Ereignissen und Vorschaubildern. Ein Klick öffnet das Ereignis.

```yaml
type: custom:cameraui-events-card
entities:
  - camera.front_door
  - camera.driveway
```

- **entities.** Begrenzt den Streifen auf diese Kameras. Ohne die Angabe zeigt er alle.

## Von den alten Karten kommen

`custom:cameraui-card` behält seinen Namen und wechselt von selbst auf die neue Kamera-Karte. Ihre alten Optionen (bis auf `title`) gelten nicht mehr: Wähle die neuen im Karten-Editor.

`custom:cameraui-grid-card` gibt es nicht mehr. Ein Dashboard, das sie noch nutzt, zeigt „Custom element doesn't exist", bis du es mit **camera.ui View** oder einer Abschnitts-Ansicht neu aufbaust.

## Nächste Schritte

- **[Home-Assistant-Integration](/de/home-assistant/integration)** — Entitäten, Automationen, Kartenzugriff und der Medien-Browser.
- **[Camview](/de/cameras/camview)** — die Ansichten bauen, die die View-Karte zeigt.
