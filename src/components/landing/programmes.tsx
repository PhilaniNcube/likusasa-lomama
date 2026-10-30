import Image from "next/image";

const programmes = [
  {
    title: "Community Nutrition and Development Centre (CNDC)",
    line: "We serve cooked meals from Monday to Friday to community members experiencing food insecurity. Our centre is also a local hub for information, community activities and referrals.",
  },
  {
    title: "Youth empowerment and education access",
    line: "We help with online applications and registrations for university and college, job-readiness activities and employability workshops. Our sanitary pad distribution initiative supports young girls and promotes menstrual health.",
  },
  {
    title: "Entrepreneurship and social development",
    line: "We run business start-up workshops and entrepreneurship coaching, and we connect community members with mentorship or seed-funding pathways so they can explore self-employment. Our awareness activities include family support and counselling, substance-abuse awareness, anti-bullying and school-safety campaigns.",
  },
];

const trades = [
  "Plumbing",
  "Electrical work",
  "Nail technology",
  "Beading",
  "Baking",
  "Candle making",
  "Forklift operation",
  "Code 10 driving",
];

export function Programmes() {
  return (
    <section aria-labelledby="programmes">
      <figure>
        <div className="relative aspect-[4/3] w-full overflow-clip bg-muted sm:aspect-[21/9]">
          <Image
            src="/photos/pexels-bread.jpg"
            alt="Loaves of bread baking in an oven"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 50%" }}
          />
        </div>
        <figcaption className="container-page pt-4 text-sm text-muted-foreground">
          Our three trained bakers offer baking services for funerals, parties
          and training sessions.
        </figcaption>
      </figure>

      <div className="container-page grid gap-x-8 gap-y-12 pt-20 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2
            id="programmes"
            className="max-w-[16ch] font-heading text-section font-semibold"
          >
            Our core programmes and services.
          </h2>
          <p className="mt-6 max-w-[34ch] text-muted-foreground">
            We deliver food, learning and support from our centre and out into
            the ward.
          </p>
        </div>

        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">
          {programmes.map((item) => (
            <li key={item.title} className="border-t border-border pt-4">
              <h3 className="font-heading text-title font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{item.line}</p>
            </li>
          ))}
          <li className="border-t border-border pt-4 sm:col-span-2">
            <h3 className="font-heading text-title font-semibold">
              Skills development and vocational training
            </h3>
            <p className="mt-2 text-muted-foreground">
              We provide access to accredited and informal learning, practical
              skills and employability opportunities. The areas we offer or
              support include the following, alongside other training as it
              becomes available.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {trades.map((trade) => (
                <li
                  key={trade}
                  className="border-t border-border py-3 font-heading text-lg font-semibold tracking-tight"
                >
                  {trade}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
