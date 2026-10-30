const enterprises = [
  {
    name: "Kwanda Community Garden",
    line: "Our youth-led agricultural programme is based at Khanyisa School for the Blind, under a 10-year lease. It promotes practical agricultural skills, food production and livelihood opportunities, and supports hands-on learning in gardening and cultivation.",
  },
  {
    name: "Grass-cutting services",
    line: "The youth in our programme provide grass-cutting services to community members for a fee, supporting the sustainability of the programme and creating practical work and income for young people.",
  },
  {
    name: "Baking services",
    line: "Our three trained bakers offer baking services for events such as funerals, parties and training sessions, applying their skills, earning income and responding to local needs.",
  },
  {
    name: "Cuddly Cubs Day Care",
    line: "We recently established a day care to support children from our community, including children of beneficiaries who cannot afford day-care fees, so parents and caregivers can take part in development activities, training and other opportunities.",
  },
  {
    name: "Environmental awareness and community action",
    line: "We organise community clean-ups and environmental awareness, working with local residents and partners to improve shared spaces and strengthen community participation.",
  },
];

export function Enterprise() {
  return (
    <section aria-labelledby="enterprise" className="border-t border-border">
      <div className="container-page grid gap-x-8 gap-y-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
          <h2
            id="enterprise"
            className="max-w-[14ch] font-heading text-section font-semibold"
          >
            Work that pays.
          </h2>
          <p className="mt-6 max-w-[34ch] text-muted-foreground">
            We run community-based activities that combine service delivery with
            youth participation, skills application, job creation and income
            generation.
          </p>
        </div>

        <ul className="border-t border-border lg:col-span-7 lg:col-start-1 lg:row-start-1">
          {enterprises.map((item) => (
            <li
              key={item.name}
              className="grid gap-x-8 gap-y-1 border-b border-border py-5 sm:grid-cols-[18rem_minmax(0,1fr)]"
            >
              <h3 className="font-heading text-title font-semibold">
                {item.name}
              </h3>
              <p className="text-muted-foreground">{item.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
