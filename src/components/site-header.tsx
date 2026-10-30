import Link from "next/link";

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

      <header className="border-b border-border">
        <div className="container-page flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 py-5">
          <Link
            href="/"
            className="font-heading text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Likusasa Lomama
          </Link>

          <nav
            aria-label="Sections"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
          >
            {sections.map((section) => (
              <a key={section.href} href={section.href} className={navLink}>
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
