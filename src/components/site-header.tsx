import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLink =
  "text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

const sections = [
  { href: "#story", label: "Who we are" },
  { href: "#programmes", label: "Programmes" },
  { href: "#enterprise", label: "Enterprise" },
  { href: "#partners", label: "Partners" },
  { href: "#governance", label: "Who runs our work" },
  { href: "#visit", label: "Visit" },
];

export function SiteHeader() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-heading text-xl font-bold tracking-tight transition-colors hover:text-primary sm:text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Likusasa Lomama
            </Link>
            <span className="rounded-lg bg-muted px-2.5 py-0.5 font-mono text-xs font-medium tracking-wider text-muted-foreground ring-1 ring-border">
              NPO 152-947
            </span>
          </div>

          <nav
            aria-label="Sections"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium"
          >
            {sections.map((section) => (
              <a key={section.href} href={section.href} className={navLink}>
                {section.label}
              </a>
            ))}
          </nav>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="tel:+27721707392">
              <Phone className="size-3.5" aria-hidden="true" />
              <span>Call 072 170 7392</span>
            </a>
          </Button>
        </div>
      </header>
    </>
  );
}
