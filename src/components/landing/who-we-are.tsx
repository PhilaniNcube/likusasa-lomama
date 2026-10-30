const statements = [
  {
    title: "Our purpose",
    line: "We respond to immediate community needs while building longer-term opportunities through food support, education, skills training, youth participation, entrepreneurship and social development. Our work prioritises vulnerable households and people who face barriers to services and economic participation.",
  },
  {
    title: "Our vision",
    line: "We work towards a thriving, informed and self-reliant community, addressing immediate needs while building long-term capacity and opportunity, especially for youth and vulnerable groups.",
  },
  {
    title: "Our mission",
    line: "We empower residents of Ward 36 through sustainable, community-driven initiatives in nutrition, education, skills training and entrepreneurship.",
  },
  {
    title: "Who we serve",
    line: "We focus on vulnerable households; children and the elderly; unemployed youth; women and girls; and community members who need access to meals, skills development, care and support services.",
  },
];

const record = [
  ["We started", "as a local stokvel, Umzamo Omhle"],
  ["We opened our centre", "in 2015, with Department of Social Development support"],
  ["We are registered", "as a non-profit, 152-947"],
  ["We also helped pioneer", "the Ward 36 NPO Network"],
];

export function WhoWeAre() {
  return (
    <section aria-labelledby="story" className="bg-muted">
      <div className="container-page grid gap-x-8 gap-y-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2
            id="story"
            className="max-w-[14ch] font-heading text-section font-semibold"
          >
            Who we are.
          </h2>
          <p className="mt-6 max-w-[40ch] text-muted-foreground">
            We are a community-rooted non-profit organisation based in Ward 36,
            KwaDwesi Extension, Gqeberha.
          </p>
        </div>

        <div className="lg:col-span-7">
          <p className="max-w-[60ch] text-lead">
            We began as a local stokvel called <em>Umzamo Omhle</em>, where we
            pooled resources to purchase essential household items. In 2015,
            support from the Department of Social Development enabled us to
            establish our flagship Community Nutrition and Development Centre
            (CNDC), which remains central to our work.
          </p>

          <dl className="mt-12 border-y border-border text-sm">
            {record.map(([term, value]) => (
              <div
                key={term}
                className="grid grid-cols-[10rem_minmax(0,1fr)] gap-4 border-b border-border py-5 last:border-b-0"
              >
                <dt className="text-muted-foreground">{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-12">
          {statements.map((item) => (
            <li key={item.title} className="border-t border-border pt-4">
              <h3 className="font-heading text-title font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{item.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
