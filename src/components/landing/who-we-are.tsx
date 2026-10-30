import { Compass, Eye, Flag, Users } from "lucide-react";

const statements = [
  {
    code: "PILLAR 01",
    title: "Our purpose",
    line: "We respond to immediate community needs while building longer-term opportunities through food support, education, skills training, youth participation, entrepreneurship and social development. Our work prioritises vulnerable households and people who face barriers to services and economic participation.",
    icon: Flag,
    accent: "primary" as const,
  },
  {
    code: "PILLAR 02",
    title: "Our vision",
    line: "We work towards a thriving, informed and self-reliant community, addressing immediate needs while building long-term capacity and opportunity, especially for youth and vulnerable groups.",
    icon: Eye,
    accent: "ocean" as const,
  },
  {
    code: "PILLAR 03",
    title: "Our mission",
    line: "We empower residents of Ward 36 through sustainable, community-driven initiatives in nutrition, education, skills training and entrepreneurship.",
    icon: Compass,
    accent: "ocean" as const,
  },
  {
    code: "PILLAR 04",
    title: "Who we serve",
    line: "We focus on vulnerable households; children and the elderly; unemployed youth; women and girls; and community members who need access to meals, skills development, care and support services.",
    icon: Users,
    accent: "primary" as const,
  },
];

const record = [
  {
    tag: "FOUNDATION LEDGER",
    term: "We started",
    value: "as a local stokvel, Umzamo Omhle",
  },
  {
    tag: "CENTRE TIMELINE",
    term: "We opened our centre",
    value: "in 2015, with Department of Social Development support",
  },
  {
    tag: "LEGAL GAZETTE",
    term: "We are registered",
    value: "as a non-profit, 152-947",
  },
  {
    tag: "REGIONAL PLATFORM",
    term: "We also helped pioneer",
    value: "the Ward 36 NPO Network",
  },
];

export function WhoWeAre() {
  return (
    <section
      aria-labelledby="story"
      className="border-b border-border bg-muted py-24"
    >
      <div className="container-page">
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-5">

            <h2
              id="story"
              className="mt-2 max-w-[14ch] font-heading text-section font-semibold"
            >
              Who we are.
            </h2>
            <p className="mt-5 max-w-[42ch] text-lg font-medium text-foreground">
              We are a community-rooted non-profit organisation based in Ward
              36, KwaDwesi Extension, Gqeberha.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <p className="max-w-[60ch] text-lead text-muted-foreground">
              We began as a local stokvel called{" "}
              <em className="font-medium text-foreground">Umzamo Omhle</em>,
              where we pooled resources to purchase essential household items.
              In 2015, support from the Department of Social Development enabled
              us to establish our flagship Community Nutrition and Development
              Centre (CNDC), which remains central to our work.
            </p>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {record.map((item) => (
            <div
              key={item.term}
              className="flex flex-col justify-between rounded-xl bg-card p-5 ring-1 ring-border"
            >
              <div>
                <span className="block font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                  {item.tag}
                </span>
                <dt className="mt-2 text-sm font-semibold text-foreground">
                  {item.term}
                </dt>
              </div>
              <dd className="mt-2 text-base font-medium text-primary">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {statements.map((item) => {
            const Icon = item.icon;
            const isOcean = item.accent === "ocean";
            return (
              <li
                key={item.title}
                className="relative overflow-hidden rounded-xl bg-card p-8 ring-1 ring-border"
              >


                <h3 className="mt-4 font-heading text-title font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.line}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
