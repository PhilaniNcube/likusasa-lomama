const aims = [
  "We improve access to regular food support for vulnerable community members.",
  "We help young people and adults gain useful skills and improve their readiness for work or self-employment.",
  "We create pathways for youth-led enterprise, agricultural production and paid community services.",
  "We reduce barriers to participation in training and development activities, including through child-care support.",
  "We strengthen community cooperation, environmental awareness and local NPO capacity.",
];

export function Partners() {
  return (
    <section aria-labelledby="partners" className="border-t border-border">
      <div className="container-page grid gap-x-8 gap-y-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2
            id="partners"
            className="max-w-[16ch] font-heading text-section font-semibold"
          >
            Our partnerships and community leadership.
          </h2>
          <p className="mt-6 max-w-[42ch] text-muted-foreground">
            We work with government departments, education institutions,
            civil-society organisations, community groups and other partners to
            strengthen service delivery and expand access to opportunities.
          </p>
        </div>

        <div className="grid gap-10 lg:col-span-6 lg:col-start-7">
          <div className="border-t border-border pt-4">
            <h3 className="font-heading text-title font-semibold">
              Ward 36 NPO Network
            </h3>
            <p className="mt-2 text-muted-foreground">
              We convene a collaborative platform that supports local non-profit
              leaders through access to funding opportunities, compliance
              support and training, peer learning and shared resources.
            </p>
          </div>
          <div className="border-t border-border pt-4">
            <h3 className="font-heading text-title font-semibold">
              Strategic relationships
            </h3>
            <p className="mt-2 text-muted-foreground">
              We have worked with or engaged institutions including the
              Department of Social Development, Nelson Mandela University,
              UNISA, local government structures and civil-society
              stakeholders. We develop partnership activities according to
              community needs and available opportunities.
            </p>
          </div>
        </div>

        <div className="lg:col-span-12">
          <h3 className="font-heading text-title font-semibold">
            What we aim to achieve
          </h3>
          <ul className="mt-6 border-t border-border">
            {aims.map((aim) => (
              <li
                key={aim}
                className="border-b border-border py-4 text-muted-foreground"
              >
                {aim}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
