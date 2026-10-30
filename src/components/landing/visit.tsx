import { Button } from "@/components/ui/button";

const action = "h-12 px-6 text-base";
const contactLink =
  "underline decoration-primary-foreground/40 underline-offset-4 hover:decoration-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground";

export function Visit() {
  return (
    <section
      aria-labelledby="visit"
      className="bg-primary text-primary-foreground"
    >
      <div className="container-page grid gap-x-8 gap-y-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2
            id="visit"
            className="max-w-[14ch] font-heading text-section font-semibold"
          >
            Call our office, or come in.
          </h2>
          <p className="mt-6 max-w-[38ch]">
            Ask us about a programme, a referral or a partnership.
          </p>
          <div className="mt-9">
            <Button asChild variant="secondary" className={action}>
              <a href="tel:+27721707392">Call us on 072 170 7392</a>
            </Button>
          </div>
        </div>

        <address className="not-italic lg:col-span-5 lg:col-start-8">
          <dl className="border-y border-border text-sm">
            <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-border py-6">
              <dt>Address</dt>
              <dd className="text-base font-medium">
                38 Mkize Street
                <br />
                Ward 36, KwaDwesi Extension
                <br />
                Gqeberha, 6201
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-border py-6">
              <dt>Telephone</dt>
              <dd>
                <a href="tel:+27721707392" className={contactLink}>
                  072 170 7392
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-border py-6">
              <dt>Email</dt>
              <dd>
                <a href="mailto:likusasalomama@gmail.com" className={contactLink}>
                  likusasalomama@gmail.com
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 py-6">
              <dt>NPO</dt>
              <dd>152-947</dd>
            </div>
          </dl>
          <p className="mt-8 text-lg text-balance">
            Together, we are building a caring, capable and self-reliant
            community.
          </p>
        </address>
      </div>
    </section>
  );
}
