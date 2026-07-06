# Verivox Design System — Zahnzusatz

A faithful, code-derived recreation of the **Verivox** design system as used by the
**Zahnzusatzversicherung** (supplementary dental insurance) comparison product. Tokens,
fonts, the brand icon font, components and a full UI kit are reconstructed from the
attached Angular codebase and Verivox's public design-system assets.

> **Verivox** is Germany's large independent comparison portal ("Stressfrei sparen") for
> energy, telecoms, finance and insurance. This system covers the **insurance / Zahnzusatz**
> surface specifically.

## Sources

- **Codebase (attached, read-only):** `src/` — an Angular app for the Zahnzusatz calculator,
  results list and tariff comparison. It consumes Verivox's internal packages
  `@vx/ds-components` and `@vx/ds-tokens` (not in the mount).
- **Public design-system CSS** (token + icon source of truth):
  `https://js.vxcdn.com/vx/ds-components/latest/ds-components.css` — all 213 `--ds-*` token
  values and the 404-glyph `.icn-*` map were extracted from here. Saved at `_research/`.
- **Fonts:** Selawik (`https://static.verivox.de/assets/fonts/de/selawik-{100,400,700}.woff`)
  and VerivoxIcons (`https://js.vxcdn.com/vx/icons/7.26.0/VerivoxIcons.{woff2,woff,ttf}`) —
  copied into `assets/fonts/`.
- **Illustrations:** `https://js.vxcdn.com/vx/illustrations/latest/svg/*.svg` — copied into
  `assets/illustrations/`.

Token/component/copy references in the codebase: `src/styles.scss`, `src/calculator/**`,
`src/result-list/**`, `src/enum/chips-details.enum.ts`, `src/result-list/mock/offer.mock.ts`.

---

## Content fundamentals

**Language.** German, throughout. UI copy is in German; this guide's prose is English.

**Address form.** Formal **Sie / Ihre** — never the informal *du*. e.g. *"Wie sind **Sie**
aktuell versichert?"*, *"Welchen Erstattungssatz wünschen **Sie**?"*. Always polite, never
chummy.

**Tone.** Reassuring, plain, advisory — a knowledgeable but friendly guide, not a salesperson.
Reduces a complex insurance decision into small, answerable steps. Hints sit under questions to
de-risk them (*"Auch ersetzte Zähne zählen dazu."*). Warnings are honest, not alarmist
(*"Laufende oder angeratene Behandlungen sind in der Regel nicht versicherbar."*).

**Casing.** Sentence case for UI; German noun capitalisation applies (Zahnersatz, Tarife,
Leistungen). Buttons are short verb phrases, sentence case: *"Tarife anzeigen"*,
*"Online abschließen"*, *"Filter anwenden"*, *"Zurücksetzen"*. No ALL-CAPS, no Title Case On
Everything.

**Numbers & currency.** German formatting: comma decimal separator, € **after** the number with
a space — *"24,80 €"*, *"100 € / Jahr"*. Percentages with a space — *"90 %"*. The VERIVOX
tariff score uses a comma grade — *"Note 1,1"*.

**Vocabulary (domain).** Zahnersatz (replacement), Zahnbehandlung (treatment), Prophylaxe /
Zahnreinigung (cleaning/PZR), Erstattungssatz (reimbursement %), Wartezeit (waiting period),
Tarif, Beitrag (premium), GKV/PKV (statutory/private health insurance), BaFin-ID.

**Emoji.** None. Not part of the brand. Meaning is carried by the VerivoxIcons set instead.

**Trust signals.** Heavy use: the VERIVOX-Note (independent tariff grade), award badges
(ServiceValue, eKomi Gold), the *"14-Tage Widerrufsrecht"* and *"Nirgendwo-Günstiger-Garantie"*
reassurances, and a visible phone number for human help.

---

## Visual foundations

**Colour.** A single hot brand hue — **International Orange `#ff5600`** (`--ds-palette-orange50`)
— against warm-leaning greys (`grey5 #f6f6f6` … `grey90 #0c0c0c`). Orange is used decisively but
sparingly: primary buttons, the score chip, active states, links, brand-light surfaces
(`#fff3ed`). Status colours are conventional: success green `#388e56`, info blue `#3d8ace`,
warning gold `#f5dd14` (dark text `#625808`), danger red `#ff002b`. Each ships a *light* surface
+ *dark* text pair. Promo violet/yellow exist but are rare. There is **no dark theme**.

**Type.** **Selawik** — an open, Segoe-UI-metric-compatible sans — at three weights: Light 100,
Regular 400, Bold 700. The scale is tight and px-based: 11 / 13 / 16 (body) / 21 / 28 / 38.
Headlines are Bold with slightly negative tracking; body is Regular at 16px / 1.5. Headline
colour is a soft near-black `#4e4b49`, not pure black.

**Spacing.** Strict **8px grid** (`--ds-grid-unit`). Scale: 4, 8, 16, 24, 32, 40, 48… Components
breathe but stay compact; the calculator column maxes at 640px, the results layout at ~1180px
with a fixed 302px sidebar.

**Corners.** **Tight radii** — the brand default is **3px** (`--ds-stroke-xl` / `--ds-radius-l`);
2px and 5px also exist. Pills (chips, badges, filter tags) use 20px; avatars/score dots are
circular. Nothing is heavily rounded — no 12–16px "friendly blob" cards.

**Borders & cards.** The signature surface is **white, 1px solid neutral border
(`#cdcbca`), 3px radius** — no shadow at rest. Cards are defined by hairline borders, not
elevation. The filter sidebar instead sits on the neutral-light surface (`#f6f6f6`).

**Shadows.** Minimal. A single soft ambient shadow token (`0 0 4px 1px rgba(0,0,0,.3)`) for
overlays (modal, drawer, tooltip) and sticky bars (`0 -4px 12px rgba(0,0,0,.08)`). Resting
content is flat.

**Selection / active state.** The recurring pattern: an option becomes **orange-bordered with a
brand-light (`#fff3ed`) fill** (ButtonGroup, Radio cells, Chips, the active step). Checkboxes and
radios **fill solid orange** when on.

**Hover.** Buttons darken (`orange50 → orange60`); links underline; cards lift to the ambient
shadow. Transitions are quick and functional (~.15s ease) — no bounce, no large motion. Respect
`prefers-reduced-motion`.

**Imagery.** Friendly **spot illustrations** (Search, Calculator, Piggybank, customer-support
people) — soft, rounded line+fill in muted tones with orange accents. No photography in the
funnel; award badges appear as small product images. No full-bleed hero imagery in the tool
itself.

**Backgrounds.** Plain white or neutral-light. **No gradients** in product UI (a brand gradient
token exists but is reserved for promo surfaces). No textures, no patterns, no blur/glass.

**Layout rules.** Sticky action bars (comparison bar, filter apply) pin to the viewport edge;
the funnel is single-column and centred; results are sidebar + list; comparison is a fixed
table with the criteria column frozen on the left.

---

## Iconography

- **Brand icon font: `VerivoxIcons`** — the real 404-glyph font (v7.26.0), copied to
  `assets/fonts/VerivoxIcons.{woff2,woff,ttf}`. Glyphs live in the Unicode PUA; the full
  name→codepoint map is in `assets/fonts/verivox-icons-map.json` and exposed as `.icn-<name>`
  CSS classes in `tokens/icons.css`.
- **Two weights per concept:** `*-outlined` (the UI default) and `*-filled` (emphasis / active /
  status). e.g. `tooth-outlined`, `user-outlined`, `filter-outlined`, `exchange-outlined`,
  `check-small-outlined`, `close-outlined`, `angle-right-filled`, and the domain set
  `dental-replacement-outlined` / `dental-treatment-outlined` / `dental-cleaning-outlined`.
- **Logo mark:** the orange **`verivox-filled`** glyph is the "V" brand mark and serves as the
  word's initial letter; set the remaining **"erivox"** in bold grey beside it (use the `Logo`
  component — never re-type the full "verivox" next to the mark). `verivox-approved-filled` is
  the trust seal.
- **Usage:** icons inherit text colour (set `color`), default 24px; status icons take their
  semantic colour. Use the `Icon` component (`<Icon name="…" />`), never hand-drawn SVG.
- **Emoji / unicode glyphs:** never used as icons.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (only `@import`s). Consumers link this one file.
- `readme.md` — this guide. `SKILL.md` — Agent-Skills wrapper.
- `tokens/` — `palette.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
  `icons.css` (404 glyphs), `fonts.css` (@font-face), `base.css`.
- `assets/` — `fonts/` (Selawik + VerivoxIcons + icon map), `illustrations/` (Verivox SVGs).
- `_research/` — extracted token list, the source `ds-components.css`, scratch screenshots.

**Components** (`window.VerivoxDesignSystem_4126a3.*`)
- `components/foundation/` — **Icon**
- `components/brand/` — **Logo**
- `components/actions/` — **Button** (primary · secondary · tertiary · text)
- `components/forms/` — **Input · Select · Checkbox · Radio · ButtonGroup · YesNo**
- `components/feedback/` — **Alert · Tooltip · Modal · Drawer**
- `components/display/` — **Card · Badge · Chip · IconHeading**
- `components/navigation/` — **Stepper**

**UI kit**
- `ui_kits/zahnzusatz/` — interactive Calculator → Results → Comparison flow (`index.html`).

**Foundation cards** (Design System tab): Colors ×3, Type ×2, Spacing ×2, Brand ×3, plus a
Components card per directory and the UI-kit preview.

---

## Caveats

- The internal `@vx/ds-components` / `@vx/ds-tokens` packages were not in the mount; token values
  and the icon map were extracted from Verivox's **public** `ds-components.css` (7.26.0) and are
  exact. Component *internals* (shadow DOM) were not readable, so primitives are faithful
  reconstructions from observed markup + tokens, not byte-for-byte copies.
- No Verivox wordmark SVG was publicly fetchable; the logo lockup is rebuilt from the
  `verivox-filled` brand glyph + the wordmark.
