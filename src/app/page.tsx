import { Enterprise } from "@/components/landing/enterprise";
import { Governance } from "@/components/landing/governance";
import { Hero } from "@/components/landing/hero";
import { Partners } from "@/components/landing/partners";
import { Programmes } from "@/components/landing/programmes";
import { Visit } from "@/components/landing/visit";
import { WhoWeAre } from "@/components/landing/who-we-are";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <WhoWeAre />
      <Programmes />
      <Enterprise />
      <Partners />
      <Governance />
      <Visit />
    </main>
  );
}
