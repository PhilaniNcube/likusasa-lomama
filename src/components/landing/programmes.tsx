import Image from "next/image";
import {
  Croissant,
  Flame,
  GraduationCap,
  PackageCheck,
  Palette,
  Sparkles,
  Store,
  Truck,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react";

const programmes = [
  {
    title: "Community Nutrition and Development Centre (CNDC)",
    line: "We serve cooked meals from Monday to Friday to community members experiencing food insecurity. Our centre is also a local hub for information, community activities and referrals.",
    schedule: "SCHEDULE: MON - FRI",
    status: "MEAL HUB",
    icon: Utensils,
    tone: "primary" as const,
  },
  {
    title: "Youth empowerment and education access",
    line: "We help with online applications and registrations for university and college, job-readiness activities and employability workshops. Our sanitary pad distribution initiative supports young girls and promotes menstrual health.",
    schedule: "TERTIARY & HEALTH ACCESS",
    status: "ACTIVE",
    icon: GraduationCap,
    tone: "ocean" as const,
  },
  {
    title: "Entrepreneurship and social development",
    line: "We run business start-up workshops and entrepreneurship coaching, and we connect community members with mentorship or seed-funding pathways so they can explore self-employment. Our awareness activities include family support and counselling, substance-abuse awareness, anti-bullying and school-safety campaigns.",
    schedule: "COACHING & COUNSELLING",
    status: "PATHWAYS",
    icon: Store,
    tone: "primary" as const,
  },
];

const trades = [
  { name: "Plumbing", icon: Wrench },
  { name: "Electrical work", icon: Zap },
  { name: "Nail technology", icon: Sparkles },
  { name: "Beading", icon: Palette },
  { name: "Baking", icon: Croissant },
  { name: "Candle making", icon: Flame },
  { name: "Forklift operation", icon: PackageCheck },
  { name: "Code 10 driving", icon: Truck },
];

export function Programmes() {
  return (
    <section
      aria-labelledby="programmes"
      className="border-b border-border py-24"
    >
      <div className="container-page">
        <figure className="mb-16 rounded-xl">
          <div className="relative aspect-4/3 w-full overflow-clip rounded-lg bg-muted sm:aspect-21/9">
            <Image
              src="/photos/pexels-bread.jpg"
              alt="Loaves of bread baking in an oven"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute right-4 bottom-4 left-4 flex flex-wrap items-center justify-between gap-3 sm:right-6 sm:bottom-6 sm:left-6">
              <span className="inline-flex items-center gap-2.5 rounded-lg bg-card/95 px-3.5 py-2 text-xs font-medium text-foreground backdrop-blur-sm ring-1 ring-border sm:text-sm">

                <span>
                  Our three trained bakers offer baking services for funerals,
                  parties and training sessions.
                </span>
              </span>

            </figcaption>
          </div>
        </figure>

        <div className="max-w-3xl">

          <h2
            id="programmes"
            className="mt-2 max-w-[18ch] font-heading text-section font-semibold"
          >
            Our core programmes and services.
          </h2>
          <p className="mt-4 max-w-[44ch] text-lead text-muted-foreground">
            We deliver food, learning and support from our centre and out into
            the ward.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {programmes.map((item) => {
            const Icon = item.icon;
            const isOcean = item.tone === "ocean";
            return (
              <li
                key={item.title}
                className="flex flex-col justify-between rounded-xl bg-card p-8 ring-1 ring-border"
              >
                <div>
                  <div
                    className={`flex size-12 items-center justify-center rounded-lg ring-1 ${isOcean
                      ? "bg-accent text-ocean ring-ocean/20"
                      : "bg-secondary text-primary ring-primary/20"
                      }`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-heading text-title font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.line}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-4 font-mono text-[11px] tracking-wider uppercase">
                  <span className="text-muted-foreground">{item.schedule}</span>
                  <span
                    className={`font-semibold ${isOcean ? "text-ocean" : "text-primary"
                      }`}
                  >
                    {item.status}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 rounded-xl bg-card p-8 ring-1 ring-border lg:p-10">
          <div className="max-w-3xl">

            <h3 className="mt-4 font-heading text-title font-semibold sm:text-2xl">
              Skills development and vocational training
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We provide access to accredited and informal learning, practical
              skills and employability opportunities. The areas we offer or
              support include the following, alongside other training as it
              becomes available.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {trades.map((trade, index) => {
              const Icon = trade.icon;
              return (
                <li
                  key={trade.name}
                  className="flex items-center gap-3.5 rounded-lg bg-muted p-4 ring-1 ring-border transition-colors hover:ring-primary"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-card text-primary ring-1 ring-border">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">

                    <span className="font-heading text-base font-semibold tracking-tight text-foreground">
                      {trade.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
