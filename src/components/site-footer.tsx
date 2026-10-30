const sections = [
  { href: "#story", label: "Who we are" },
  { href: "#programmes", label: "Programmes" },
  { href: "#enterprise", label: "Enterprise" },
  { href: "#partners", label: "Partners" },
  { href: "#governance", label: "Who runs our work" },
  { href: "#visit", label: "Visit" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container-page flex flex-col gap-8 py-14 text-sm text-muted-foreground">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 lg:flex-row lg:items-center">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              Likusasa Lomama Community Project
            </p>
            <p className="mt-1">
              38 Mkize Street, Ward 36, KwaDwesi Extension, Gqeberha 6201 •{" "}
              <span className="font-mono text-xs font-medium text-foreground">
                Non-profit 152-947
              </span>
            </p>
          </div>

          <nav
            aria-label="Footer sections"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium"
          >
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-4 font-mono text-xs sm:flex-row sm:items-center">
          <p>
            Ward 36 KwaDwesi Extension, Gqeberha, Eastern Cape, South Africa.
          </p>
          <p data-credits className="leading-relaxed">
            Photographs:{" "}
            <a
              href="https://www.pexels.com/photo/27176054/"
              className="underline underline-offset-2 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Helena Lopes
            </a>{" "}
            and{" "}
            <a
              href="https://www.pexels.com/photo/10481790/"
              className="underline underline-offset-2 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Chris F
            </a>{" "}
            on Pexels.
          </p>
        </div>
      </div>
    </footer>
  );
}
