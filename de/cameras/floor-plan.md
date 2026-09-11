---
title: Grundriss
---

# Grundriss

Der Grundriss ist eine Zeichnung deines Zuhauses mit den Kameras und Sensoren darauf, im Menü unter **Grundriss**. Ansehen darf ihn jeder, zeichnen nur ein Admin.

Er ist live: Eine Kamera leuchtet auf, während sie etwas sieht, Sensoren zeigen ihren Zustand und lassen sich direkt auf dem Plan schalten. Die Zeichnung liest auch camera.ui selbst. Sie weiß dadurch, welche Räume zusammenhängen, wie lange man von einer Kamera zur nächsten braucht und welcher Sensor an welcher Tür sitzt.

<Shot src="/img/cameras/floor-plan.png" alt="Grundriss mit Räumen, Sichtkegeln der Kameras und Sensoren" />

## Zeichnen

Fang mit einer **Ebene** an. Der Button oben links hält sie, daneben liegen Hinzufügen, Umbenennen, Verschieben und Entfernen. Ein Haus mit Keller, Erdgeschoss und Obergeschoss hat drei.

Dann ziehst du Teile aus der Palette auf die Fläche. Am Telefon öffnet der Plus-Button dieselbe Palette.

- **Räume.** Zieh **Neuer Raum** hinein und schieb das Rechteck zurecht. Es rastet am Raster ein, und der Maßstab in der Ecke sagt dir, was die Größe bedeutet. Ein Raum um die Ecke, etwa ein L-förmiger Hof, wird aus mehreren Rechtecken gezeichnet: Zeichne das zweite und setze sein **Gehört zu** auf das erste, dann zählen beide als ein Raum.
- **Art.** Ein Raum ist **Innen**, **Außen, auf dem Grundstück** oder **Außenwelt**. Das Letzte ist Straße, Gehweg, Nachbargrundstück: Wer von dort kommt, wurde vorher nirgends gesehen, camera.ui sucht dann keine frühere Sichtung. Zeichne das Tor oder den Vorweg dorthin, wo man hereinkommt.
- **Verbindungen.** Räume, die sich nur eine Wand teilen, sind nicht verbunden. Setz eine **Tür**, einen **Offenen Durchgang** oder eine **Treppe** auf die gemeinsame Wand, schieb sie auf der Wand entlang und zieh an den Punkten die Breite. Zwischen zwei Ebenen ist die Verbindung immer eine Treppe.
- **Kameras.** Zieh eine Kamera in den Raum, den sie beobachtet, und stell rechts **Blickrichtung**, **Blickwinkel** und **Reichweite** ein. Der Kegel auf dem Plan folgt. Eine Kamera ohne Raum trägt nichts zum räumlichen Kontext bei.
- **Sensoren.** Genauso. Ein Kontakt oder ein Schloss, das genau eine Tür meldet, bekommt **Gehört zu Durchgang**, damit sein Zustand als diese Tür gelesen wird und nicht als etwas im Raum.
- **Norden.** Zieh den Kompass, bis er zur Wirklichkeit passt.
- **Notiz.** Räume, Kameras, Sensoren und Verbindungen nehmen je eine freie Notiz für das, was die Zeichnung nicht zeigt. Die KI liest sie mit, wenn sie ein Ereignis beschreibt.

Zentimetergenauigkeit bringt nichts. Räume in ungefähr der richtigen Größe an ungefähr der richtigen Stelle, mit Kameras in die richtige Richtung, reichen.

Änderungen bleiben erst mit **Speichern** erhalten. Hinter dem Punkte-Button liegen Rückgängig, Wiederholen, **Ebene leeren** und **Änderungen verwerfen**. Der Schloss-Button sperrt den Plan, damit beim Verschieben der Ansicht nichts aus Versehen mitwandert.

## Lesen

- Der Kegel einer Kamera leuchtet, während sie etwas sieht, mit Symbolen für das Erkannte.
- Zeig auf eine Kamera für ihr Livebild und **Kamera öffnen**.
- Zeig auf einen Sensor für seinen Zustand, bei einem Gerät auch für die Bedienung: Ein Licht schaltet, eine Alarmanlage bietet ihre Modi an.
- **Blinde Bereiche** schraffiert jeden Teil eines Raums, den keine Kamera abdeckt.

## Wofür der Plan genutzt wird

- **[Episoden](/de/detection/episodes)** trennen damit Aktivität. Zwei Dinge, die gleichzeitig in verschiedenen Ecken des Grundstücks passieren, bleiben getrennte Geschichten, ein kurzer Weg vom Flur zur Einfahrt bleibt eine, und der Titel nennt die Orte. Zwei Kameras auf denselben Raum gelten als zwei Blickwinkel einer Szene: Die, die das Geschehen am nächsten hatte, läuft, die andere bietet der Player an.
- **[KI-Beschreibungen](/de/detection/genai-descriptions)** bekommen den Aufbau, die Gehzeiten und den Zustand naher Sensoren als Kontext.
- **[Aufnahmen](/de/recording/browsing)** bekommen einen **Räume**-Filter, der die Kameras in diesen Räumen auswählt.

## Nächste Schritte

**[Kamera-Einstellungen](/de/cameras/settings)** — der Raum einer Kamera wird auch dort gesetzt und gruppiert die Startseite.
**[Sensoren](/de/sensors/)** — was ein Sensor ist und wie er an eine Kamera kommt.
