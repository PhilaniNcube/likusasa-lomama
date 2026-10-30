import { FileCheck, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const action = "h-12 px-6 text-base font-semibold";
const contactLink =
  "underline decoration-primary-foreground/40 underline-offset-4 hover:decoration-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground";

export function Visit() {
  return (
    <section aria-labelledby="visit" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="rounded-2xl bg-primary p-8 text-primary-foreground ring-1 ring-primary-hover sm:p-12 lg:p-16">
          <div className="grid items-start gap-x-12 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-6">

              <h2
                id="visit"
                className="mt-2 max-w-[14ch] font-heading text-section font-semibold"
              >
                Call our office, or come in.
              </h2>
              <p className="mt-4 max-w-[38ch] text-lead text-secondary">
                Ask us about a programme, a referral or a partnership.
              </p>
              <div className="mt-8">
                <Button asChild variant="secondary" className={action}>
                  <a href="tel:+27721707392">
                    <Phone className="size-4 text-primary" aria-hidden="true" />
                    <span>Call us on 072 170 7392</span>
                  </a>
                </Button>
              </div>
              <div className="mt-10 border-t border-primary-foreground/20 pt-6">
                <p className="text-lg font-medium text-balance">
                  Together, we are building a caring, capable and self-reliant
                  community.
                </p>
              </div>
            </div>

            <address className="not-italic lg:col-span-6">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-primary-foreground/10 p-5 ring-1 ring-primary-foreground/20">
                  <div className="flex items-center gap-2 text-secondary">
                    <MapPin className="size-4" aria-hidden="true" />
                    <dt className="font-mono text-[11px] font-semibold tracking-wider uppercase">
                      Address
                    </dt>
                  </div>
                  <dd className="mt-2.5 text-base leading-snug font-medium">
                    38 Mkize Street
                    <br />
                    Ward 36, KwaDwesi Extension
                    <br />
                    Gqeberha, 6201
                  </dd>
                </div>

                <div className="rounded-xl bg-primary-foreground/10 p-5 ring-1 ring-primary-foreground/20">
                  <div className="flex items-center gap-2 text-secondary">
                    <Phone className="size-4" aria-hidden="true" />
                    <dt className="font-mono text-[11px] font-semibold tracking-wider uppercase">
                      Telephone
                    </dt>
                  </div>
                  <dd className="mt-2.5 text-base font-medium">
                    <a href="tel:+27721707392" className={contactLink}>
                      072 170 7392
                    </a>
                  </dd>
                </div>

                <div className="rounded-xl bg-primary-foreground/10 p-5 ring-1 ring-primary-foreground/20">
                  <div className="flex items-center gap-2 text-secondary">
                    <Mail className="size-4" aria-hidden="true" />
                    <dt className="font-mono text-[11px] font-semibold tracking-wider uppercase">
                      Email
                    </dt>
                  </div>
                  <dd className="mt-2.5 text-base font-medium break-all">
                    <a
                      href="mailto:likusasalomama@gmail.com"
                      className={contactLink}
                    >
                      likusasalomama@gmail.com
                    </a>
                  </dd>
                </div>

                <div className="rounded-xl bg-primary-foreground/10 p-5 ring-1 ring-primary-foreground/20">
                  <div className="flex items-center gap-2 text-secondary">
                    <FileCheck className="size-4" aria-hidden="true" />
                    <dt className="font-mono text-[11px] font-semibold tracking-wider uppercase">
                      NPO
                    </dt>
                  </div>
                  <dd className="mt-2.5 font-mono text-base font-semibold">
                    152-947
                  </dd>
                </div>
              </dl>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
