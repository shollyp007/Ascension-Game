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

`v0.2 — design & roadmap (submission)`

## Documents

| Document | Description |
| --- | --- |
| [`docs/design-plan.html`](docs/design-plan.html) | **Design & Development Roadmap v0.2** — submission document. Cover sheet, executive summary, scope boundary, the Unreal MCP workflow, technical architecture, the Scripture-encounter mechanic, the three trials, content handling, a phase-by-phase 14-week roadmap with exit criteria, milestone schedule, risk register, assessment mapping, tools, and references. Open in a browser (prints cleanly to PDF). |

## Concept summary

- **Character select** — prophet, high-school student, or nurse (slice builds the student only).
- **The village + first mountain stretch** — assembled in Unreal with editor MCP assistance over a purchased environment kit.
- **Trials** — framed as the triad of 1 John 2:16: lust of the flesh (seduction), lust of the eyes (money), pride of life (wealth & status). The slice builds the seduction trial end to end.
- **Scripture encounters** — the core mechanic, anchored in Matthew 4. A tempter misapplies a verse; the player must answer with correctly applied Scripture. Right answers break the tempter's *influence*; wrong answers drain the player's *resolve*.
- **Win / lose** — break the tempter's influence and ascend; run out of resolve and fall to the prison level.

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
