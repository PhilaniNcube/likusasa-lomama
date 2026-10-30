import Image from "next/image";

import { Button } from "@/components/ui/button";


export function Hero() {
  return (
    <section
      aria-labelledby="intro"
      className="flex min-h-[76svh] items-center border-b border-border"
    >
      <div className="container-page py-16 lg:py-12">
        <div className="grid items-center gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,4fr)] lg:gap-x-28">
          <div>
            <h1
              id="intro"
              className="mt-6 max-w-[12ch] font-heading text-display font-semibold"
            >
              We are building a self-reliant community.
            </h1>
            <p className="mt-8 max-w-[42ch] text-lead">
              We build it through practical services, youth development and
              capacity building.
            </p>
            <p className="mt-4 max-w-[42ch] text-muted-foreground">
              Community nutrition • Youth empowerment • Skills development •
              Sustainable livelihoods
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <Button asChild className="h-12 px-6 text-base">
                <a href="tel:+27721707392">Call us on 072 170 7392</a>
              </Button>
              <Button asChild variant="outline" className="h-12 px-6 text-base">
                <a href="#programmes">See our programmes</a>
              </Button>
            </div>
          </div>

          <figure>
            <div className="relative aspect-4/5 w-full overflow-clip bg-muted">
              <Image
                src="/photos/pexels-planting.jpg"
                alt="Hands in gardening gloves planting lettuce seedlings in a bed"
                fill
                sizes="(min-width: 64rem) 32vw, 100vw"
                loading="eager"
                fetchPriority="high"
                className="object-cover"
                style={{ objectPosition: "40% 45%" }}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
