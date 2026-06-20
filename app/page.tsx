import { PageFrame } from "@/components/ui/PageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { CardThemes } from "@/components/sections/CardThemes";
import { PhoneDemo } from "@/components/sections/PhoneDemo";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Gallery } from "@/components/sections/Gallery";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFooter } from "@/components/sections/CTAFooter";

export default function Page() {
  return (
    <PageFrame>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <Intro />
        </Reveal>
        <Reveal>
          <CardThemes />
        </Reveal>
        <Reveal>
          <PhoneDemo />
        </Reveal>
        <Reveal>
          <WhyChoose />
        </Reveal>
        <Reveal>
          <Gallery />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <CTAFooter />
        </Reveal>
      </main>
    </PageFrame>
  );
}
