---
title: Episodes
---

# Episodes

When several cameras see the same activity around the same time, camera.ui can bundle those sightings into one **episode**: a single title and a short story that follows the subject across cameras, in order. A person walking from the driveway to the front door becomes one episode instead of three separate events.

Episodes need [AI descriptions](/detection/genai-descriptions). The AI writes the story, so a provider has to be set up first.

## Turning it on

In the NVR settings, open the **Episodes** tab and turn on **Enabled**. Then set up **Camera Groups**: an episode only forms among cameras in the same group, and a group needs at least two cameras. Cameras you leave out take no part.

- **Join Window.** A new event joins the open episode when it starts within this long after the last activity. Default 90 seconds.
- **Quiet Time.** The episode closes and gets its story once it has been this quiet. Default 60 seconds.
- **Wrap Up After.** Once an episode reaches this length it stops taking in new activity and closes at the next natural break: whatever is still happening finishes first, and later activity starts the next episode. Default 10 minutes.
- **Custom Instructions.** Free-text guidance added to the built-in prompt for the story, for example what to watch for or how to phrase it.
- **Video in Push.** Whether an episode push plays the episode clip, which switches cameras like the [episode player](#the-episode-player). **Off** never attaches it, **Always** always does, and **Camera setting** attaches it when at least one camera in the episode has [Video in Push](/notifications/#what-each-camera-alerts-you-about) turned on. Default **Camera setting**.

## Where episodes show up

- **Home.** Episodes appear in the **Recent Events** row as a mosaic card, showing how many cameras took part.
- **Recordings.** The same mosaic card appears in the list. A recording that belongs to an episode shows an **Open episode** button that jumps to it.
- **Apple TV.** Episodes are available in the Apple TV app too.

<Shot src="/img/detection/episode-card.png" alt="An episode mosaic card in the recordings view" />

## The episode player

Opening an episode plays the whole sequence. It switches between cameras on its own as the story moves, and shows the current camera's name and time. A strip below the video holds one block per camera stretch, so you can jump straight to any point or skip between cameras.

<Shot src="/img/detection/episode-player.png" alt="The episode player with the camera strip below the video" />
