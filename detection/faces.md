---
title: Face recognition
---

# Face recognition

Face recognition spots faces on your cameras, recognizes people you have enrolled, and groups the ones it doesn't know yet.[^license] It builds on [object detection](/detection/ai-backends), and the camera needs an AI backend in two places under its **Plugins** tab: **Face** finds the faces, **Face Recognition** turns each one into something camera.ui can compare. Without the second one faces are found but never named. If the camera detects objects itself without reporting where they are (many Reolink models), enable [Object Assist](/detection/ai-backends#object-assist) so faces get a proper crop.

<Shot src="/img/detection/faces-view.png" alt="Faces view with known and unknown faces" />

## Enrolling a known face

In the **Faces** view (sections **Known Faces** and **Unknown Faces**), **Add Face** takes a **name** and a clear photo of the person; **Enroll** rejects a photo without a face. From then on the person is recognized in new events, with their name as an attribute on detections.

<Shot src="/img/detection/faces-enroll.png" alt="Enroll face dialog" />

## Getting good results

- **Camera position.** Mount a camera meant for faces at about head height, or with a shallow angle. Looking down steeply it sees forehead and hair, different people start to look alike, and recognition mixes them up.
- **Pictures per person.** At least 10 pictures are recommended, from different situations (daylight, night, with a cap). Every further look up to the maximum helps. With fewer the person is often missed, their card and their dialog point it out.
- **Unclear faces get no name.** A face seen from the side, from above, or blurred is neither named nor collected under Unknown Faces. The person is recognized in the next picture that shows them clearly.
- **Small faces.** A face smaller than about 40 pixels in the camera picture is too small to recognize.
- **One picture is not enough.** A person the camera follows gets a name once three pictures of the face agree, and camera.ui looks again whenever the face shows bigger or clearer, so a good view late in a long visit still counts. When the pictures disagree, the person stays unnamed rather than getting someone else's name. A picture about as close to two enrolled people counts for neither. On a camera whose own AI reports people, faces are only read on its reports, and one picture names them.
- **A name in doubt waits for a new picture.** After two people cross, when someone starts moving again or comes back after the camera lost sight of them, and when a picture matches someone else, the name stays hidden until a new picture of the face confirms it. If that picture matches someone else too, the event gets a second face for that person, and the first keeps its name.
- **Two faces, one person.** When two people are so close that the camera sees them as one person, each face gets only the name its own picture matches. The same goes for a face outside every detected person.

## A person's pictures

A person under **Known Faces** opens with their training pictures. A mark on a picture says what it does to recognition, tap it for the reason:

- **No clear face.** Turned away, from above or blurred. Such a picture makes recognition worse, remove it.
- **Recognition can't link it.** To recognition the picture looks no more like the person's other pictures than a stranger's, usually a strong profile or a view from above. It stays with the person but isn't used to recognize anyone. If it shows someone else, remove it.
- **Face partly visible.** Keep it only while better pictures of that view are missing.
- **Also filed under …** The same picture is enrolled for someone else as well. Keep it for the right person only.
- **Same as another picture.** One of the two is enough.

The person's card already shows how many pictures carry a mark, in red when one of them is unclear or also filed under someone else.

Assigning an unknown face warns when it is already filed under someone or only partly visible. Unclear faces never reach Unknown Faces in the first place.

## Unknown faces

Faces that don't match anyone enrolled collect under **Unknown Faces**, grouped automatically so the same person's shots cluster together.

- **Assign a group** to a person to enroll everyone in it at once, or assign a single face.
- **Discard** groups or faces you don't care about, or clear all ungrouped faces.

## Correcting a recognition

When an event names the wrong person, open that face picture on its recording card, pick **Correct person** in the dots menu and assign the right name, or **Mark as unknown**. Only this face changes: other faces in the recording keep their names, even when they carry the same one. The crop is added to that person so recognition gets it right next time, unless it shows no clear face: then only the name changes. The dialog says so beforehand, and warns when the crop is only partly visible or already filed under someone else. Admins only.

## Ignoring a face

Ignore a face you never want to see again (a passing stranger, the mail carrier) and camera.ui stops collecting it.

- **Ignore a face or a whole group.** Unknown faces and groups each have an ignore button; selection mode ignores several at once.
- **New sightings are dropped.** Once someone is ignored, their later shots don't come back as unknown faces.
- **Ignored faces sit in their own list.** They collect under **Ignored Faces** at the bottom of the Unknown Faces section.
- **Restore to undo.** **Restore** puts an ignored face back among the unknown faces. New sightings of that person come back once none of their other pictures is still ignored.

## Settings

In **Settings → [Recordings](/recording/)**, face recognition has:

- **Max Training Images.** How many photos to keep per person (5 to 40, default 20). At the limit the picture most like another one of the same person makes way.
- **Max Unknown People.** How many unknown groups are kept (10 to 500). Once the limit is hit, the group that was seen longest ago is dropped. Raise it for busy outdoor cameras.

Per camera, [Settings → Detection](/cameras/settings) has two face settings:

- **Face confidence.** Faces the AI is less sure about than this are ignored for events and automations (0 to 1, default 0.5).
- **Recognize faces.** How certain the match against your enrolled people has to be before someone is named: **Strict**, **Balanced** (default) or **Relaxed**. Strict gives fewer wrong names, Relaxed recognizes people more often.

## Changing the recognition model

The model is a setting of the AI backend (**Face Embedding Model**), shared by all its cameras. After a change camera.ui embeds the enrolled pictures again by itself. **Re-embed faces**, bottom left in the Faces view and admins only, starts it by hand. Recognition is patchy until it finishes. Pictures in which the new model finds no clear face are removed, and the dialog names the people this affected.

To try a model, open the AI backend's page and its **Face Recognition** tab: drop a picture and it shows who camera.ui takes it for and how sure it is.

## Rescanning

After enrolling someone new, select **Rescan existing events** to re-check past recordings and tag them with the newly known face.

[^license]: Face recognition (matching faces against your enrolled people) builds on recording and requires an active camera.ui subscription. Detecting that a face is present is part of the free detection.
