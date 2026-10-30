# Likusasa Lomama

Brand foundation and UI starting point for Likusasa Lomama — Next.js 16, Tailwind CSS v4, and shadcn/ui.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site. The living
style guide sits at [http://localhost:3000/styleguide](http://localhost:3000/styleguide).

```bash
npm run build   # production build
npm run lint    # eslint
npm start       # serve the build
```

## Design system

The palette, semantic tokens, radius scale, and usage rules are documented in
[`Design.md`](./Design.md). The implementation lives in
[`src/app/globals.css`](./src/app/globals.css).

| Brand colour | Token | Hex |
| --- | --- | --- |
| Cream | `cream` | `#FFF8E7` |
| Leaf Green | `leaf` | `#66BB6A` |
| Deep Leaf Green | `forest` | `#388E3C` |
| Community Blue | `ocean` | `#1976BB` |
| Light Blue | `sky` | `#81C7E8` |
| Dark Charcoal | `ink` | `#333333` |

Corners use a crisp `0.25rem` base with a fixed 2–12px scale.

## Adding components

```bash
npx shadcn@latest add dialog dropdown-menu sheet tabs
```

Components land in `src/components/ui` and inherit the semantic tokens
automatically.

## Project structure

```
src/
  app/
    globals.css      # brand + semantic tokens, radius, base layer
    layout.tsx       # fonts, metadata, theme colour
    page.tsx         # living style guide
  components/ui/     # shadcn components
  lib/utils.ts       # cn()
```
