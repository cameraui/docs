---
title: Semantische Suche
---

# Semantische Suche

Die semantische Suche lässt dich Momente in deinen Aufnahmen finden, indem du sie **in einfachen Worten beschreibst**, etwa „Person mit roter Jacke" oder „Lieferwagen", statt nach Typ zu filtern. Sie wird von CLIP angetrieben.

## Was du brauchst

Die semantische Suche braucht ein KI-Backend, das **CLIP** bereitstellt (CoreML, OpenVINO oder ONNX), aktiviert an deinen Kameras. Während diese Kameras aufnehmen, baut camera.ui ein durchsuchbares Verständnis jedes Ereignisses auf.[^license]

## Suchen

![KI-Suche-Ergebnisse in den Aufnahmen](/img/detection/ai-search.png)

Öffne in den [Aufnahmen](/de/recording/browsing) die **KI-Suche** und beschreibe, was du suchst. camera.ui ordnet Ereignisse danach, wie gut sie passen, und du kannst **Min. Übereinstimmung** erhöhen, um nur enge Treffer zu behalten.

[^license]: Die semantische Suche basiert auf Aufnahmen, die ein aktives camera.ui-Abo erfordern.
