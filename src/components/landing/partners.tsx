import { Check, Landmark, Network } from "lucide-react";

const aims = [
  "We improve access to regular food support for vulnerable community members.",
  "We help young people and adults gain useful skills and improve their readiness for work or self-employment.",
  "We create pathways for youth-led enterprise, agricultural production and paid community services.",
  "We reduce barriers to participation in training and development activities, including through child-care support.",
  "We strengthen community cooperation, environmental awareness and local NPO capacity.",
];

export function Partners() {
  return (
    <section
      aria-labelledby="partners"
      className="border-b border-border py-24"
    >
      <div className="container-page">
        <div className="max-w-3xl">

          <h2
            id="partners"
            className="mt-2 max-w-[18ch] font-heading text-section font-semibold"
          >
            Our partnerships and community leadership.
          </h2>
          <p className="mt-4 max-w-[54ch] text-lead text-muted-foreground">
            We work with government departments, education institutions,
            civil-society organisations, community groups and other partners to
            strengthen service delivery and expand access to opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-card p-8 ring-1 ring-border">
            <div className="flex items-center gap-3">

              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                Local Network
              </span>
            </div>
            <h3 className="mt-5 font-heading text-title font-semibold">
              Ward 36 NPO Network
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We convene a collaborative platform that supports local non-profit
              leaders through access to funding opportunities, compliance
              support and training, peer learning and shared resources.
            </p>
          </div>

          <div className="rounded-xl bg-card p-8 ring-1 ring-border">
            <div className="flex items-center gap-3">

              <span className="font-mono text-xs font-semibold tracking-wider text-ocean uppercase">
                Institutional Relations
              </span>
            </div>
            <h3 className="mt-5 font-heading text-title font-semibold">
              Strategic relationships
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We have worked with or engaged institutions including the
              Department of Social Development, Nelson Mandela University,
              UNISA, local government structures and civil-society
              stakeholders. We develop partnership activities according to
              community needs and available opportunities.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-12">
          <div className="max-w-2xl">
            <h3 className="font-heading text-title font-semibold">
              What we aim to achieve
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Our measurable indicators for long-term community transformation.
            </p>
          </div>

          <ul className="mt-6 grid gap-3 lg:max-w-4xl">
            {aims.map((aim, index) => (
              <li
                key={aim}
                className="flex items-start gap-4 rounded-xl bg-card p-4 ring-1 ring-border sm:p-5"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-foreground">
                  <strong className="mr-2 font-mono text-xs font-semibold text-muted-foreground">
                    0{index + 1}.
                  </strong>
                  {aim}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
