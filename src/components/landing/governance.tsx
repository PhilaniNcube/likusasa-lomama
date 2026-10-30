import { ShieldCheck } from "lucide-react";

const governance = [
  {
    category: "OFFICE-BEARER // BOARD",
    role: "Chairperson",
    name: "Mr. Lizo Skenjane",
    highlight: false,
  },
  {
    category: "OFFICE-BEARER // BOARD",
    role: "Secretary",
    name: "Ms. Phaphama Njemla",
    highlight: false,
  },
  {
    category: "OFFICE-BEARER // BOARD",
    role: "Treasurer",
    name: "Mrs. Nobendiba Tyutu",
    highlight: false,
  },
  {
    category: "BOARD MEMBER",
    role: "Additional member",
    name: "Mrs. Daniswa Ndayi",
    highlight: false,
  },
  {
    category: "BOARD MEMBER",
    role: "Additional member",
    name: "Mrs. Lungiswa Khuhlana",
    highlight: false,
  },
  {
    category: "OPERATIONAL LEAD",
    role: "Project coordinator",
    name: "Mrs. Pumla Dyafta",
    highlight: true,
  },
  {
    category: "OPERATIONS // FINANCE",
    role: "Finance officer",
    name: "Ms. Nontyatyambo Ruda",
    highlight: false,
  },
  {
    category: "OPERATIONS // ADMIN",
    role: "Administrator",
    name: "Ms. Lukhona Sizani",
    highlight: false,
  },
];

export function Governance() {
  return (
    <section
      aria-labelledby="governance"
      className="border-b border-border bg-muted py-24"
    >
      <div className="container-page">
        <div className="max-w-3xl">

          <h2
            id="governance"
            className="mt-2 max-w-[14ch] font-heading text-section font-semibold"
          >
            Who runs our work.
          </h2>
          <p className="mt-4 max-w-[48ch] text-lead text-muted-foreground">
            Our board of office-bearers and additional members guides the
            project, while our coordinator, finance officer and administrator
            run day-to-day work.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl bg-card ring-1 ring-border">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-background px-6 py-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Verified Leadership Register // Ward 36 NPO 152-947
            </span>

          </div>

          <dl
            aria-label="Governance and management"
            className="grid grid-cols-1 divide-y divide-border md:grid-cols-2"
          >
            {governance.map((person, index) => {
              const isRightColumn = index % 2 === 1;
              return (
                <div
                  key={`${person.role}-${person.name}`}
                  className={`flex items-center justify-between gap-4 p-6 ${isRightColumn ? "md:border-l md:border-border" : ""
                    } ${index === 1 ? "md:border-t-0" : ""} ${person.highlight ? "bg-secondary/40" : ""
                    }`}
                >
                  <div>
                    <span
                      className={`block font-mono text-[11px] font-semibold tracking-wider uppercase ${person.highlight
                        ? "text-primary"
                        : "text-muted-foreground"
                        }`}
                    >
                      {person.category}
                    </span>
                    <dd className="mt-1 text-base font-semibold text-foreground">
                      {person.name}
                    </dd>
                  </div>

                  <dt
                    className={`shrink-0 rounded-md px-3 py-1 font-mono text-xs font-medium ring-1 ${person.highlight
                      ? "bg-secondary font-semibold text-primary ring-primary/30"
                      : "bg-muted text-foreground ring-border"
                      }`}
                  >
                    {person.role}
                  </dt>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
