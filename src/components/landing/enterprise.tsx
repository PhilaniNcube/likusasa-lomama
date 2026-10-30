const enterprises = [
  {
    code: "01",
    name: "Kwanda Community Garden",
    line: "Our youth-led agricultural programme is based at Khanyisa School for the Blind, under a 10-year lease. It promotes practical agricultural skills, food production and livelihood opportunities, and supports hands-on learning in gardening and cultivation.",
    badge: "10-YEAR LEASEHOLD",
    tone: "primary" as const,
  },
  {
    code: "02",
    name: "Grass-cutting services",
    line: "The youth in our programme provide grass-cutting services to community members for a fee, supporting the sustainability of the programme and creating practical work and income for young people.",
    badge: "COMMUNITY SERVICE FEE",
    tone: "neutral" as const,
  },
  {
    code: "03",
    name: "Baking services",
    line: "Our three trained bakers offer baking services for events such as funerals, parties and training sessions, applying their skills, earning income and responding to local needs.",
    badge: "3 TRAINED BAKERS",
    tone: "ocean" as const,
  },
  {
    code: "04",
    name: "Cuddly Cubs Day Care",
    line: "We recently established a day care to support children from our community, including children of beneficiaries who cannot afford day-care fees, so parents and caregivers can take part in development activities, training and other opportunities.",
    badge: "CAREGIVER ACCESS",
    tone: "primary" as const,
  },
  {
    code: "05",
    name: "Environmental awareness and community action",
    line: "We organise community clean-ups and environmental awareness, working with local residents and partners to improve shared spaces and strengthen community participation.",
    badge: "CLEAN-UP ACTIONS",
    tone: "neutral" as const,
  },
];

export function Enterprise() {
  return (
    <section
      aria-labelledby="enterprise"
      className="border-b border-border py-24"
    >
      <div className="container-page">
        <div className="max-w-3xl">

          <h2
            id="enterprise"
            className="mt-2 max-w-[14ch] font-heading text-section font-semibold"
          >
            Work that pays.
          </h2>
          <p className="mt-4 max-w-[52ch] text-lead text-muted-foreground">
            We run community-based activities that combine service delivery with
            youth participation, skills application, job creation and income
            generation.
          </p>
        </div>

        <ul className="mt-12 space-y-4">
          {enterprises.map((item) => {
            const badgeStyle =
              item.tone === "primary"
                ? "bg-secondary text-primary ring-primary/20"
                : item.tone === "ocean"
                  ? "bg-accent text-ocean ring-ocean/20"
                  : "bg-muted text-muted-foreground ring-border";

            return (
              <li
                key={item.name}
                className="flex flex-col justify-between gap-6 rounded-xl bg-card p-6 ring-1 ring-border transition-colors hover:ring-primary md:flex-row md:items-center lg:p-8"
              >
                <div className="flex max-w-4xl items-start gap-5 sm:gap-6">

                  <div>
                    <h3 className="font-heading text-title font-semibold">
                      {item.name}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {item.line}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pl-10 md:pl-0">
                  <span
                    className={`inline-block rounded-md px-3 py-1 font-mono text-xs font-semibold tracking-wider uppercase ring-1 ${badgeStyle}`}
                  >
                    {item.badge}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
