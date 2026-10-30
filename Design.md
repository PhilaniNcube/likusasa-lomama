# Likusasa Lomama — Design System

The reference for colour, type, shape, and component usage in this project.
Everything here is implemented in `src/app/globals.css`. The marketing homepage
lives at `src/app/page.tsx`; the living style guide at `src/app/styleguide/page.tsx`.

## 1. Stack and source of truth

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16.4 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 — CSS-first config, no `tailwind.config.*` |
| Components | shadcn/ui 4.x, `radix-nova` preset, Lucide icons |
| Type | Geist Sans + Geist Mono via `next/font` |
| Tokens | `src/app/globals.css` |

There are three token tiers:

1. **Brand primitives** — the six supplied colours plus derived neutrals and
   washes. They generate utilities such as `bg-cream` and `text-forest`.
2. **Semantic tokens** — the shadcn contract (`background`, `primary`,
   `muted`, …). Product UI uses these and nothing else.
3. **Component tokens** — shadcn components read only from the semantic tier.

> Rule of thumb: product surfaces use semantic tokens. Brand primitives are for
> marketing sections, illustration, charts, and the occasional moment that must
> feel unmistakably on-brand.

## 2. Brand palette

| Name | Token | Utility | Hex | Role |
| --- | --- | --- | --- | --- |
| Cream | `--color-cream` | `bg-cream` / `text-cream` | `#FFF8E7` | Page canvas, large quiet surfaces |
| Leaf Green | `--color-leaf` | `bg-leaf` / `text-leaf` | `#66BB6A` | Highlights, icons, growth moments |
| Deep Leaf Green | `--color-forest` | `bg-forest` / `text-forest` | `#388E3C` | Brand fills, illustration, large type |
| Community Blue | `--color-ocean` | `bg-ocean` / `text-ocean` | `#1976BB` | Links, info states, focus rings |
| Light Blue | `--color-sky` | `bg-sky` / `text-sky` | `#81C7E8` | Wash backgrounds, charts, calm emphasis |
| Dark Charcoal | `--color-ink` | `bg-ink` / `text-ink` | `#333333` | Body copy, headings, grounding detail |

### Derived values

These are not new brand colours; they are functional shades built from the
palette. They exist so the semantic layer stays accessible and calm.

| Token | Value | Origin | Purpose |
| --- | --- | --- | --- |
| `--color-forest-strong` | `#357F38` | Deep Leaf Green, nudged darker | Action green that clears AA with white text |
| `--color-ink-soft` | `#605F5B` | 75% charcoal + 25% cream | Muted body text (6.0:1 on cream) |
| `--color-surface` | `#FFFFFF` | — | Cards and popovers |
| `--color-cream-deep` | `#F6EFDF` | 96% cream + 4% charcoal | Recessed/muted surfaces |
| `--color-sand` | `#E2DCCD` | 87% cream + 13% charcoal | Hairlines and dividers |
| `--color-sand-strong` | `#96938B` | 52% cream + 48% charcoal | Input borders (3.07:1 on white) |
| `--color-leaf-wash` | `#E7F4E7` | 16% leaf + 84% white | Secondary surfaces |
| `--color-sky-wash` | `#E4F3FA` | 22% sky + 78% white | Accent/info surfaces |

**Why `forest-strong`?** White text on `#388E3C` measures 4.12:1, just under the
4.5:1 AA threshold for body-size text. `#357F38` is the smallest practical
darkening that reaches 4.95:1 while staying visually identical at a glance.
`bg-forest` is still the right choice for large fills and display-size type.

## 3. Semantic tokens

`src/app/globals.css` maps the brand onto the shadcn contract. Light and dark
values live in `:root` and `.dark` respectively.

| CSS variable | Utility | Light | Dark | Use |
| --- | --- | --- | --- | --- |
| `--background` | `bg-background` | Cream | Charcoal | Page canvas |
| `--foreground` | `text-foreground` | Charcoal | Cream | Body and headings |
| `--card` | `bg-card` | White | Warm charcoal | Cards, popovers |
| `--primary` | `bg-primary` | `#357F38` | Leaf Green | Default actions |
| `--primary-foreground` | `text-primary-foreground` | White | Charcoal | Text on primary |
| `--color-primary-hover` | `bg-primary-hover` | Primary −12% | Leaf −12% | Accessible hover fill |
| `--secondary` | `bg-secondary` | Leaf wash | Charcoal light | Quiet actions |
| `--secondary-foreground` | `text-secondary-foreground` | Charcoal | Cream | Text on secondary |
| `--muted` | `bg-muted` | Cream deep | Charcoal light | Recessed surfaces |
| `--muted-foreground` | `text-muted-foreground` | Ink soft | Warm grey | Supporting text |
| `--accent` | `bg-accent` | Sky wash | Deep blue | Info and emphasis |
| `--accent-foreground` | `text-accent-foreground` | Charcoal | Cream | Text on accent |
| `--destructive` | `text-destructive` | `#B42318` | `#F97066` | Errors, removal |
| `--border` | `border-border` | Sand | Cream @ 16% | Hairlines, dividers |
| `--input` | `border-input` | Sand strong | Cream @ 24% | Field outlines |
| `--ring` | `ring-ring` | Community Blue | Light Blue | Focus indicators |
| `--chart-1…5` | `bg-chart-1…5` | Forest, Leaf, Ocean, Sky, Ink | Leaf, Sky, Ocean, Cream, Forest | Data viz |

Sidebar tokens mirror the same logic and are already wired:
`--sidebar`, `--sidebar-primary`, `--sidebar-accent`, `--sidebar-border`.

`--color-primary-hover` is derived inline in `@theme`, so it is used through
`bg-primary-hover` rather than read directly as a custom property.

### Colour rules

- Use `text-primary` for green actions and `text-ocean` for informational
  links. Both pass AA on cream (4.67:1 and 4.56:1).
- Never set white text on `leaf` or `sky`, and never use either as small text on
  cream. They are fills and accents, not text colours.
- Pair white cards on cream with `ring-1 ring-border`; the fill difference alone
  is only 1.02:1 and will disappear on low-quality screens.
- Derive new tints with `color-mix(in oklab, …)` (as the semantic tokens do)
  instead of adding another hex to the palette.
- Hover on primary darkens via `primary-hover`. Do not fade primary to 80%:
  that lightens it toward cream and drops white text below AA.

## 4. Border radius

Base: **`0.25rem` (4px)** — crisp, minimal, and deliberately short of pill
shapes. Steps are fixed values, not multipliers, so corners land on whole
pixels.

| Utility | Token | Value | Pixels | Typical use |
| --- | --- | --- | --- | --- |
| `rounded-sm` | `--radius-sm` | `0.125rem` | 2px | Chips, swatches, tiny marks |
| `rounded-md` | `--radius-md` | `0.1875rem` | 3px | Compact controls, colour dots |
| `rounded-lg` | `--radius-lg` | `0.25rem` | 4px | Buttons, inputs, tabs |
| `rounded-xl` | `--radius-xl` | `0.375rem` | 6px | Cards, panels, previews |
| `rounded-2xl` | `--radius-2xl` | `0.5rem` | 8px | Dialogs, feature surfaces |
| `rounded-3xl` | `--radius-3xl` | `0.625rem` | 10px | Large containers |
| `rounded-4xl` | `--radius-4xl` | `0.75rem` | 12px | Badges and the widest shells |

Rules:

- Keep nesting concentric: outer radius = inner radius + padding.
- Do not introduce a larger per-component radius; extend this scale in the
  theme if the brand needs it.
- `rounded-full` is reserved for avatars, status dots, and true pills — not
  default buttons.

## 5. Typography

Geist Sans is loaded in `src/app/layout.tsx`, exposed as `--font-geist-sans`,
and mapped to both `--font-sans` and `--font-heading`. Geist Mono carries token
names, data, and code.

| Role | Classes |
| --- | --- |
| Display | `font-heading text-5xl font-semibold tracking-tight` |
| Page title | `text-4xl font-semibold tracking-tight` |
| Section title | `text-2xl font-semibold tracking-tight sm:text-3xl` |
| Subheading | `text-xl font-semibold` |
| Body | `text-base leading-relaxed` |
| Small | `text-sm` |
| Micro label | `text-xs uppercase tracking-[0.14em] text-muted-foreground` |
| Code / token | `font-mono text-sm` |

### Landing steps

The marketing homepage adds four fluid steps on top of that scale. They are
tokens, not one-off classes, so sections keep a shared rhythm:

| Utility | Token | At 1440 | Use |
| --- | --- | --- | --- |
| `text-display` | `--text-display` | 100px | `h1`, once a page |
| `text-section` | `--text-section` | 52px | `h2` on marketing sections |
| `text-title` | `--text-title` | 24px | `h3`, row and item titles |
| `text-lead` | `--text-lead` | 21px | The one line under a hero head |

The style guide above stays on the fixed Tailwind steps; product UI does not
need the fluid range. Never set `h1` or `h2` with arbitrary `text-[…]` values.

- Headings use `text-wrap: balance` (set in the base layer).
- Long prose uses `text-pretty`.
- Keep body copy at `text-muted-foreground` only when it is genuinely
  secondary; `foreground` is for reading text.

## 6. Components

Installed in `src/components/ui`:

`button` · `card` · `badge` · `input` · `label` · `separator`

Add more from the registry with:

```bash
npx shadcn@latest add dialog dropdown-menu sheet tabs
```

```tsx
import { Button } from "@/components/ui/button";

<Button>Primary action</Button>
<Button variant="secondary">Quiet action</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

Guidance:

- **Button** — one primary action per view. Use `secondary` for the supporting
  action, `outline` for tertiary, `ghost` in dense toolbars.
  Two local changes to the component: transitions name their properties
  (`transition-colors`, never `all`), and `:focus-visible` uses a solid ocean
  ring so the indicator clears 3:1 on cream.
- **Marketing controls** — add `h-12 px-6 text-base` to the hero and close
  buttons. The component's own sizes are tuned for product UI, not for a
  landing page.
- **Card** — `rounded-xl` with `ring-1 ring-border`. Do not put a heavy shadow on
  a cream page; the ring is the separation.
- **Input / Label** — always pair them, and keep the visible label. Focus uses
  the ocean ring at 50% plus the ocean border.
- **Badge** — status only; it is not a button.
- Customise component files when the design demands it (the primary hover here
  was changed for contrast), but keep the change local and note it in this file.

## 7. Contrast reference

| Foreground | Background | Ratio | Result |
| --- | --- | --- | --- |
| Cream | Charcoal | 11.93:1 | AAA |
| Charcoal | Cream | 11.93:1 | AAA |
| Ink soft | Cream | 6.04:1 | AA |
| Primary green | Cream | 4.67:1 | AA |
| White | Primary green | 4.95:1 | AA |
| White | Deep Leaf Green | 4.12:1 | AA large only |
| White | Community Blue | 4.83:1 | AA |
| Community Blue | Cream | 4.56:1 | AA |
| Charcoal | Leaf Green | 5.34:1 | AA |
| Charcoal | Light Blue | 6.78:1 | AA |
| Charcoal | Leaf wash | 11.13:1 | AAA |
| Ink soft | Cream deep | 5.58:1 | AA |
| Destructive | Cream | 6.21:1 | AA |
| Leaf Green | Cream | 2.23:1 | Decorative only |
| Light Blue | Cream | 1.76:1 | Decorative only |
| White | Leaf Green | 2.36:1 | Decorative only |

Target WCAG 2.2 AA: 4.5:1 for normal text, 3:1 for large text, icons, and
interface boundaries.

## 8. Dark mode

The theme is class-based to stay compatible with shadcn/ui:

- Add `class="dark"` to `<html>` to switch.
- `html.dark { color-scheme: dark }` is already set, so native controls follow.
- All semantic tokens flip automatically; components need no changes.
- Dark actions use Leaf Green with charcoal text (5.34:1). Forest is too dark
  for a dark canvas.

To add a toggle later, set/remove `dark` on `document.documentElement` and
persist the choice (cookie or `localStorage`). Keep the default light to avoid a
flash before hydration.

## 9. Extending the system

1. Add the value to the brand tier in `@theme` (`src/app/globals.css`).
2. Map it to a semantic token in `@theme inline` and `:root`/`.dark`.
3. Use the semantic utility in components.
4. Document the name and purpose in this file.

Do not add one-off hex values inside components. If a component needs a new
colour, it needs a token.

## 10. File map

```
src/
  app/
    globals.css      # brand + semantic tokens, radius, base layer
    layout.tsx       # fonts, metadata, theme colour
    page.tsx         # marketing homepage
    styleguide/      # living style guide
  components/ui/     # shadcn components
  lib/utils.ts       # cn()
components.json      # shadcn configuration
Design.md            # this document
```
