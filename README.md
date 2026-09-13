# Ascension Game

A single-player, story-driven game built in **Unreal Engine 5**. The player takes up
one of three lives — a prophet, a high-school student, or a nurse — and climbs a
mountain that rises over a village. Each stage of the climb is a trial set by the
Village Master and worked against by tempting spirits. The trials are won not with
weapons but with Scripture: the player who knows the word of God, and how to apply
it, advances; the player who does not, falls.

This is a **capstone project**. Development is scoped to a single polished vertical
slice, with the wider game designed on paper.

## Status

`v0.3 — design & roadmap (submission)`

## Documents

| Document | Description |
| --- | --- |
| [`docs/design-plan.html`](docs/design-plan.html) | **Design & Development Roadmap v0.3** — submission document. Cover sheet, executive summary, scope boundary, the Unreal MCP workflow, technical architecture, the Scripture-encounter mechanic, the three trials, content handling, the seduction encounter in detail (the "arrows of lust" system, grounded in Ephesians 6), a phase-by-phase 14-week roadmap with exit criteria, milestone schedule, risk register, assessment mapping, tools, and references. Open in a browser (prints cleanly to PDF). |

## Concept summary

- **Character select** — prophet, high-school student, or nurse (slice builds the student only).
- **The village + first mountain stretch** — assembled in Unreal with editor MCP assistance over a purchased environment kit.
- **Trials** — framed as the triad of 1 John 2:16: lust of the flesh (seduction), lust of the eyes (money), pride of life (wealth & status). The slice builds the seduction trial end to end.
- **Scripture encounters** — the core mechanic, anchored in Matthew 4. A tempter misapplies a verse; the player must answer with correctly applied Scripture. Right answers break the tempter's *composure*; wrong answers drain the player's *resolve*.
- **The arrow system** — grounded in Ephesians 6:10–18. Unseen demons loose named "arrows of lust" at the player, who feels the impact but never sees the source; a correct Scripture choice fires back a "word of God" arrow at the tempter. Played as an interactive cinematic with a player-determined ending (Overcome clean / Overcome wounded / Fall).
- **Win / lose** — break the tempter's composure and ascend; run out of resolve and fall to the prison level.

## Scope for the capstone

**Building:** one character, the village + first mountain stretch, the seduction trial
fully playable, character-select menu, faith/resolve meter, pass & fail states, the
prison scene, a working save file.

**Designed on paper only:** the money and wealth/status trials, the prophet and the
nurse, levels beyond the first, the Village Master as a character.

## Tech notes

- Unreal Engine 5.4+, Third Person template. Public GitHub repo with Git LFS for binary assets.
- Blueprints for gameplay logic; C++ only where unavoidable.
- Dialogue via a plugin (DlgSystem / Not-Yet-Dialogue / Dialogue Tree) — not hand-rolled.
- Scripture content authored in a Data Table (spreadsheet-editable, review-friendly).
- Unreal MCP used for blockout, set dressing, and Blueprint/UMG scaffolding — not for realism, which comes from assets, Nanite, Lumen, and lighting.

## License

TBD.

# The Ascent: A Multilevel Christian Game

**Engine:** Unreal Engine 5<br>
**Genre:** Narrative Moral Choice / Spiritual Exploration<br>
**Architecture:** Model Context Protocol (MCP / UnrealMCP / Rekall) + C++ / Blueprints

---

## 1. Project Overview

*The Ascent* is a multilevel spiritual journey where players choose between three distinct callings - **The Prophet**, **The Student**, and **The Nurse** - to ascend a holy mountain while navigating moral trials set by demonic adversaries:

1. **Level 1: The Temptation of Fornication** (Overcoming sensual, intellectual, and emotional seduction through biblical flight).
2. **Level 2: The Test of Money** (Confronting materialism and financial fear with divine providence).
3. **Level 3: The Encounter with Wealth & Power** (Surrendering worldly authority for humble servanthood).

---

## 2. Level 1 Prototype: "The Temptation of Fornication"

Set at the threshold between an urban park and the mountain trailhead, Level 1 tests the theological principle of **flight over debate** (1 Corinthians 6:18, 2 Timothy 2:22).

### Core Mechanics

* **Spiritual Vigilance Meter (0-100):** Depleted by prolonged debate or compromise; restored through resolute biblical application.
* **Scripture Arsenal:** Contextual invocation of relevant scripture passages based on character archetype.
* **Tactical Flight:** Resolute rebuke followed by physical retreat to clear ground.

---

## 3. Character Archetypes & Vulnerabilities

| Archetype | Core Strength | Spiritual Vulnerability | Primary Scripture Affinity |
| :--- | :--- | :--- | :--- |
| **The Prophet** | Discernment & Anointed Rebuke | Spiritual Pride & Loneliness | 1 Corinthians 6:18-20 |
| **The Student** | Scriptural Apologetics | Intellectual Rationalization | 2 Timothy 2:22 |
| **The Nurse** | Compassionate Endurance | Caregiver Burnout & Empathy Traps | Genesis 39:9, Psalm 119:11 |

---

## 4. UI & Spatial Wireframes

### Character Selection Screen

```text
+---------------------------------------------------------------------------------------------------+
|  TITLE: THE NARROW ASCENT                                                  [Settings]  [Quit]    |
|  SUBTITLE: Choose Your Calling                                                                    |
+---------------------------------------------------------------------------------------------------+
|   +--------------------------+  +--------------------------+  +--------------------------+        |
|   |       [ PROPHET ]        |  |       [ STUDENT ]        |  |        [ NURSE ]         |        |
|   |   STATS:                 |  |   STATS:                 |  |   STATS:                 |        |
|   |   Faith:       85/100    |  |   Faith:       70/100    |  |   Faith:       80/100    |        |
|   |   Vigilance:   90/100    |  |   Vigilance:   65/100    |  |   Vigilance:   75/100    |        |
|   |   Discernment: 95/100    |  |   Discernment: 85/100    |  |   Discernment: 60/100    |        |
|   |   Perk: Voice of Rebuke  |  |   Perk: Scriptural Apolog|  |   Perk: Shield of Mercy  |        |
|   |   Trap: Spiritual Pride  |  |   Trap: Carnal Reason    |  |   Trap: Empathy Burnout  |        |
|   |   [ SELECT PROPHET ]     |  |   [ SELECT STUDENT ]     |  |   [ SELECT NURSE ]       |        |
|   +--------------------------+  +--------------------------+  +--------------------------+        |
+---------------------------------------------------------------------------------------------------+
```
