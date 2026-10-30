import { ArrowRight, Check, Palette, Ruler, Type } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const swatches = [
  {
    name: "Cream",
    token: "cream",
    hex: "#FFF8E7",
    role: "Canvas",
    note: "Page background and large, quiet surfaces.",
    swatch: "bg-cream text-ink",
  },
  {
    name: "Leaf Green",
    token: "leaf",
    hex: "#66BB6A",
    role: "Highlight",
    note: "Optimistic accents, icons, and growth moments.",
    swatch: "bg-leaf text-ink",
  },
  {
    name: "Deep Leaf Green",
    token: "forest",
    hex: "#388E3C",
    role: "Brand green",
    note: "Large fills, illustration, and brand moments.",
    swatch: "bg-forest text-white",
  },
  {
    name: "Action green",
    token: "forest-strong",
    hex: "#357F38",
    role: "Derived",
    note: "Brand green nudged darker so white text clears AA.",
    swatch: "bg-forest-strong text-white",
  },
  {
    name: "Community Blue",
    token: "ocean",
    hex: "#1976BB",
    role: "Link & info",
    note: "Links, focus rings, and community actions.",
    swatch: "bg-ocean text-white",
  },
  {
    name: "Light Blue",
    token: "sky",
    hex: "#81C7E8",
    role: "Support",
    note: "Wash backgrounds, charts, and gentle emphasis.",
    swatch: "bg-sky text-ink",
  },
  {
    name: "Dark Charcoal",
    token: "ink",
    hex: "#333333",
    role: "Text",
    note: "Body copy, headings, and grounding detail.",
    swatch: "bg-ink text-cream",
  },
];

const semanticTokens = [
  {
    token: "background",
    value: "cream",
    className: "bg-background",
    note: "Page canvas",
  },
  {
    token: "foreground",
    value: "ink",
    className: "bg-foreground",
    note: "Body and heading text",
  },
  {
    token: "primary",
    value: "forest-strong",
    className: "bg-primary",
    note: "Default actions",
  },
  {
    token: "secondary",
    value: "leaf-wash",
    className: "bg-secondary",
    note: "Quiet actions",
  },
  {
    token: "accent",
    value: "sky-wash",
    className: "bg-accent",
    note: "Information",
  },
  {
    token: "muted",
    value: "cream-deep",
    className: "bg-muted",
    note: "Recessed surfaces",
  },
  {
    token: "border",
    value: "sand",
    className: "bg-border",
    note: "Hairlines and dividers",
  },
  {
    token: "ring",
    value: "ocean",
    className: "bg-ring",
    note: "Focus indicators",
  },
];

const radii = [
  { token: "sm", px: "2px", className: "rounded-sm" },
  { token: "md", px: "3px", className: "rounded-md" },
  { token: "lg", px: "4px", className: "rounded-lg" },
  { token: "xl", px: "6px", className: "rounded-xl" },
  { token: "2xl", px: "8px", className: "rounded-2xl" },
  { token: "3xl", px: "10px", className: "rounded-3xl" },
  { token: "4xl", px: "12px", className: "rounded-4xl" },
];

const chartColors = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
  "bg-chart-5",
];

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      <p className="mt-3 text-pretty text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 sm:px-8">
      <header className="flex items-center justify-between gap-6 py-6">
        <a href="#" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-lg bg-primary font-heading text-sm font-semibold text-primary-foreground"
          >
            LL
          </span>
          <span className="font-heading text-sm font-semibold tracking-tight">
            Likusasa Lomama
          </span>
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-5 sm:flex">
          {[
            ["Palette", "#palette"],
            ["Tokens", "#tokens"],
            ["Radius", "#radius"],
            ["Type", "#type"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="flex flex-col gap-20">
        <section aria-labelledby="intro" className="pt-8 sm:pt-14">
          <div className="max-w-3xl">
            <Badge variant="outline" className="bg-card">
              <Palette aria-hidden />
              Design foundations · v0.1
            </Badge>
            <h1
              id="intro"
              className="mt-5 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              A warm, grounded foundation for Likusasa Lomama.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A cream canvas, leaf greens for action, and community blue for
              connection. Every colour, radius step, and component runs through
              one token layer, so the product can grow without drifting.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="#palette">
                  Explore the palette
                  <ArrowRight aria-hidden data-icon="inline-end" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#tokens">See the tokens</a>
              </Button>
            </div>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-border pt-6">
            {[
              ["6", "brand colours"],
              ["7", "radius steps"],
              ["2", "themes"],
              ["AA", "contrast checked"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-heading text-xl font-semibold tracking-tight">
                  {value}
                </dt>
                <dd className="mt-0.5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="palette">
          <SectionHeading
            id="palette"
            eyebrow="01 · Colour"
            title="The palette"
            description="Six brand values, plus one derived green for accessible actions. Use the semantic tokens for product UI; reach for these primitives when a surface needs to feel unmistakably brand."
          />

          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,13.5rem),1fr))] gap-4">
            {swatches.map((swatch) => (
              <article
                key={swatch.token}
                className="overflow-clip rounded-xl bg-card ring-1 ring-border"
              >
                <div
                  aria-hidden
                  className={`h-28 ring-1 ring-border ring-inset ${swatch.swatch}`}
                />
                <div className="flex flex-col gap-1.5 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {swatch.role}
                  </p>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-medium">{swatch.name}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {swatch.hex}
                    </span>
                  </div>
                  <p className="text-sm text-pretty text-muted-foreground">
                    {swatch.note}
                  </p>
                  <code className="mt-1.5 self-start rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                    bg-{swatch.token}
                  </code>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="tokens">
          <SectionHeading
            id="tokens"
            eyebrow="02 · Tokens"
            title="Semantic layer, component layer"
            description="shadcn/ui components read only from these names. Swap the brand ramps in one place and the whole product follows."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <Card>
              <CardHeader>
                <CardTitle>Semantic tokens</CardTitle>
                <CardDescription>
                  Mapped in <code className="font-mono">globals.css</code>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-border">
                  {semanticTokens.map((token) => (
                    <li
                      key={token.token}
                      className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
                    >
                      <span
                        aria-hidden
                        className={`size-7 shrink-0 rounded-sm ring-1 ring-border ${token.className}`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-mono text-xs">
                          --color-{token.token}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {token.note} · {token.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Component preview</CardTitle>
                <CardDescription>
                  Buttons, inputs, badges, and cards on the cream canvas.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>Open</Badge>
                  <Badge variant="secondary">Community</Badge>
                  <Badge variant="outline">Draft</Badge>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="demo-search">Find a programme</Label>
                  <Input
                    id="demo-search"
                    type="search"
                    placeholder="Search by town or clinic"
                  />
                  <p className="text-xs text-muted-foreground">
                    Sand border, ocean focus ring.
                  </p>
                </div>

                <Separator />

                <div className="flex flex-wrap items-center gap-2">
                  <Button>
                    Primary
                    <ArrowRight aria-hidden data-icon="inline-end" />
                  </Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                </div>

                <p className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Check aria-hidden className="mt-0.5 size-3.5 shrink-0" />
                  Primary actions use the derived forest shade so white labels
                  clear 4.5:1.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="radius">
          <SectionHeading
            id="radius"
            eyebrow="03 · Shape"
            title="Crisp corners"
            description="A 4px base keeps the interface calm and institutional. Radius steps are fixed values, not multipliers, so every corner lands on a whole pixel."
          />

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-6">
            {radii.map((radius) => (
              <div key={radius.token} className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={`size-12 border border-primary/25 bg-secondary ${radius.className}`}
                />
                <div>
                  <p className="font-mono text-sm">rounded-{radius.token}</p>
                  <p className="text-xs text-muted-foreground">{radius.px}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="type">
          <SectionHeading
            id="type"
            eyebrow="04 · Type"
            title="Geist, at four speeds"
            description="One variable sans for the interface and one mono for tokens and data. Headings tighten; body copy stays generous."
          />

          <Card className="mt-8">
            <CardContent className="flex flex-col gap-6 py-2">
              {[
                {
                  label: "Display / 48 · semibold",
                  className:
                    "font-heading text-5xl font-semibold tracking-tight",
                  sample: "Likusasa Lomama",
                },
                {
                  label: "Heading / 24 · semibold",
                  className: "font-heading text-2xl font-semibold tracking-tight",
                  sample: "Stronger communities",
                },
                {
                  label: "Body / 16 · regular",
                  className: "text-base leading-relaxed",
                  sample:
                    "Warm, clear language that meets people where they are.",
                },
                {
                  label: "Mono / 14 · regular",
                  className: "font-mono text-sm",
                  sample: "--color-forest-strong: #357F38",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-2 border-b border-border pb-6 last:border-b-0 last:pb-0"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {row.label}
                  </p>
                  <p className={row.className}>{row.sample}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="dark">
          <SectionHeading
            id="dark"
            eyebrow="05 · Theme"
            title="A charcoal counterpart"
            description="The same semantic contract flips for dark surfaces. Leaf becomes the action colour because it carries charcoal text at 5.3:1."
          />

          <div className="dark mt-8 overflow-clip rounded-xl bg-background p-6 text-foreground ring-1 ring-border sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-lg">
                <Badge>Included</Badge>
                <p className="mt-4 font-heading text-2xl font-semibold tracking-tight">
                  Charcoal canvas, cream text.
                </p>
                <p className="mt-2 text-pretty text-sm text-muted-foreground">
                  Cards lift with warm charcoal, borders turn translucent, and
                  the sky blue takes over the focus ring.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex items-end gap-4">
              <div className="flex h-16 flex-1 gap-1 overflow-clip rounded-md">
                {chartColors.map((color, index) => (
                  <span
                    key={color}
                    aria-hidden
                    className={`flex-1 ${color}`}
                    title={`Chart ${index + 1}`}
                  />
                ))}
              </div>
              <p className="shrink-0 font-mono text-xs text-muted-foreground">
                chart-1 → chart-5
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="next"
          className="rounded-xl bg-secondary p-6 ring-1 ring-primary/15 sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-xl">
              <h2
                id="next"
                className="font-heading text-xl font-semibold tracking-tight"
              >
                Where to go next
              </h2>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">
                The full token reference, contrast notes, and usage rules live in{" "}
                <code className="rounded-sm bg-card px-1.5 py-0.5 font-mono text-xs">
                  Design.md
                </code>
                . Tokens are declared in{" "}
                <code className="rounded-sm bg-card px-1.5 py-0.5 font-mono text-xs">
                  src/app/globals.css
                </code>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <a href="#palette">
                  <Palette aria-hidden />
                  Palette
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#radius">
                  <Ruler aria-hidden />
                  Radius
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#type">
                  <Type aria-hidden />
                  Type
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <p>Likusasa Lomama · Brand foundations</p>
        <p>
          Next.js + Tailwind CSS v4 + shadcn/ui · radius base{" "}
          <code className="font-mono">0.25rem</code>
        </p>
      </footer>
    </div>
  );
}
