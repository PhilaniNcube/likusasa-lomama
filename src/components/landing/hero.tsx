import Image from "next/image";
import { ArrowDown, MapPin, Phone, Sprout } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-labelledby="intro"
      className="flex min-h-[78svh] items-center border-b border-border"
    >
      <div className="container-page py-14 lg:py-20">
        <div className="grid items-center gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">


            <h1
              id="intro"
              className="mt-6 max-w-[13ch] font-heading text-display font-semibold"
            >
              We are building a self-reliant community.
            </h1>

            <p className="mt-6 max-w-[44ch] text-lead text-muted-foreground">
              We build it through practical services, youth development and
              capacity building.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <Button asChild className="h-12 px-6 text-base">
                <a href="tel:+27721707392">
                  <Phone className="size-4" aria-hidden="true" />
                  <span>Call us on 072 170 7392</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 bg-card px-6 text-base"
              >
                <a href="#programmes">
                  <span>See our programmes</span>
                  <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6 font-mono text-xs tracking-wider text-muted-foreground uppercase">
              <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                <MapPin className="size-3.5" aria-hidden="true" />
                Ward 36, KwaDwesi Extension
              </span>
              <span className="text-border" aria-hidden="true">
                |
              </span>
              <span>Gqeberha • Registered NPO 152-947</span>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="rounded-xl p-2.5 ">
              <div className="relative aspect-4/5 w-full overflow-clip rounded-lg">
                <Image
                  src="/photos/pexels-planting.jpg"
                  alt="Hands in gardening gloves planting lettuce seedlings in a bed"
                  fill
                  sizes="(min-width: 64rem) 38vw, 100vw"
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover"
                  style={{ objectPosition: "40% 45%" }}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-3 rounded-lg bg-card/95 p-3 backdrop-blur-sm ring-1 ring-border">
                  <div className="flex items-center gap-2.5">

                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        Kwanda Community Garden
                      </p>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        Khanyisa School Leasehold • Ward 36
                      </p>
                    </div>
                  </div>

                </figcaption>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
