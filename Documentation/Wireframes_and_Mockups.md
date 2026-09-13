# Wireframes and Mockups

## Level 1 spatial projection

```text
[ City Entrance ] ---> [ Public Garden ] ---> [ Central Pavilion ] ---> [ Snaring Grove ] ---> [ Mountain Trailhead ]
												   |
										  (Demonic Encounter)
```

## Scripture encounter HUD

```text
+---------------------------------------------------------------------------------------------------+
| [VIGILANCE] [========------] 55%                  OBJECTIVE: Cross the park to the Mountain Gate  |
| [FAITH]     [==============-] 90%                                                                 |
|                                                                                                   |
| SPEAKER: Charming Confidante                                                                      |
| "Why remain exhausted in the cold? Come inside. Even prophets need comfort."                      |
|                                                                                                   |
| RESPONSES (Timer: [||||||||||||||        ] 8s):                                                   |
| [A] Compromise: "Perhaps a brief rest won't hurt..." [-40 Vigilance]                             |
| [B] Carnal Argument: "I am strong enough to handle this temptation." [-20 Vigilance]              |
| [C] SCRIPTURE REBUKE & FLEE: "My body is a temple of the Holy Spirit! (1 Cor 6:18)" [VICTORY]     |
+---------------------------------------------------------------------------------------------------+
```

## Presentation notes

- Keep the prompt and answers readable during the cinematic pause.
- Show Scripture references only after the player selects an answer.
- Animate composure and resolve changes from their previous values.
- Let the result state hold long enough for the player to understand the consequence before the level transition.

## Result states

- **Overcome clean:** warm light, ascending path, no resolve loss.
- **Overcome wounded:** ascending path with a visible resolve cost and subdued audio.
- **Fall:** hard cut to the prison scene after the resolve meter empties.
