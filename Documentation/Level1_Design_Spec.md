# Level 1 Design Specification

## Purpose

Level 1 is the vertical slice for *The Ascent*. The player climbs the first mountain path and faces the seduction trial, represented by the lust of the flesh from 1 John 2:16.

## Core loop

1. The player reaches a temptation encounter.
2. The tempter presents a claim and a Scripture-shaped misdirection.
3. The player chooses a response from the dialogue data.
4. A correct response reduces the tempter's composure. A wrong response reduces the player's resolve.
5. The encounter ends when composure reaches zero or resolve reaches zero.

## Level 1 spatial projection

```text
[ City Entrance ] ---> [ Public Garden ] ---> [ Central Pavilion ] ---> [ Snaring Grove ] ---> [ Mountain Trailhead ]
												   |
										  (Demonic Encounter)
```

The player crosses the public garden before reaching the Central Pavilion, where
the Charming Confidante encounter begins. Choosing the Scripture rebuke and flight
routes the player through the Snaring Grove and onward to the Mountain Trailhead.

## Outcomes

- **Overcome clean:** the player breaks the tempter's composure with full resolve.
- **Overcome wounded:** the player wins with less than full resolve.
- **Fall:** resolve reaches zero and the player is sent to the prison scene.

## Implementation boundary

`UMoralTrialComponent` owns the numeric trial state and result transitions. Dialogue text, Scripture references, and answer correctness remain data-driven in `Content/Data/Dialogue_Temptation_L1.json`. UI and cinematic presentation should subscribe to `OnTrialUpdated` rather than changing trial state directly.

## Tuning defaults

- Starting composure: `1.0`
- Starting resolve: `1.0`
- Correct answer damage: `0.25`
- Wrong answer damage: `0.25`

These values are intentionally exposed for Blueprint tuning once the encounter pacing is tested in-engine.
