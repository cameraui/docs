---
title: Semantische Suche
---

# Semantische Suche

Die semantische Suche lässt dich Momente in deinen Aufnahmen finden, indem du sie **in einfachen Worten beschreibst**, etwa „Person mit roter Jacke“ oder „Lieferwagen“, statt nach Typ zu filtern. Sie wird von CLIP angetrieben.

## Was du brauchst

Die semantische Suche braucht ein KI-Backend, das **CLIP** bereitstellt (CoreML, OpenVINO oder ONNX), aktiviert an deinen Kameras. Während diese Kameras aufnehmen, macht camera.ui jede erkannte Person, jedes Fahrzeug und jedes Tier durchsuchbar. Ereignisse ohne eines davon, etwa reine Bewegung, tauchen in den Ergebnissen nicht auf.[^license]

## Suchen

<Shot src="/img/detection/ai-search.png" alt="KI-Suche-Ergebnisse in den Aufnahmen" />

Öffne in den [Aufnahmen](/de/recording/browsing) die **KI-Suche** und beschreibe, was du suchst. camera.ui ordnet Ereignisse danach, wie gut sie passen, und du kannst **Min. Übereinstimmung** erhöhen, um nur enge Treffer zu behalten.

Jedes CLIP-Modell hat seinen eigenen Wertebereich, die Prozentzahl wird deshalb pro Modell skaliert. Ein enger Treffer liest sich hoch, egal welches Modell läuft, und eine einmal gesetzte **Min. Übereinstimmung** bedeutet nach einem Modellwechsel dasselbe.

## Das CLIP-Modell wechseln

Die Plugin-Einstellungen eines Backends bieten mehr als ein CLIP-Modell an. Embeddings sind nur innerhalb des Modells vergleichbar, das sie erzeugt hat, eine Suche schaut also nur auf Ereignisse, deren Modell eines deiner aktiven CLIP-Plugins noch bereitstellt. Ältere Ereignisse bleiben auf der Platte, fallen aber aus den Ergebnissen, bis sie neu eingebettet sind.

**Suche neu indexieren**, unten links in den [Aufnahmen](/de/recording/browsing) und nur für Admins, erledigt das. Es sucht die Ereignisse heraus, deren Modell keines deiner Plugins mehr bereitstellt, und arbeitet sie im Hintergrund ab. Die Suche funktioniert währenddessen weiter, und du kannst die Seite verlassen. **Anhalten** beendet den Lauf nach dem aktuellen Ereignis, ein neuer Start macht dort weiter. Ereignisse, deren Bilder nicht mehr existieren, lassen sich nicht neu einbetten und werden als fehlgeschlagen gezählt.[^reindex]

[^license]: Die semantische Suche basiert auf Aufnahmen, die ein aktives camera.ui-Abo erfordern.

[^reindex]: Braucht camera-ui-nvr 1.3.16 oder neuer. Ohne CLIP-Plugin erscheint der Button nicht.
