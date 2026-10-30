export function SiteFooter() {
  return (
    <footer>
      <div className="container-page flex flex-col gap-6 py-12 text-sm text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-heading text-base font-semibold text-foreground">
            Likusasa Lomama Community Project
          </p>
          <p className="mt-1">
            38 Mkize Street, Ward 36, KwaDwesi Extension, Gqeberha 6201
          </p>
          <p>Non-profit 152-947</p>
        </div>
        <p data-credits className="max-w-[46ch] text-xs leading-relaxed">
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
    </footer>
  );
}
