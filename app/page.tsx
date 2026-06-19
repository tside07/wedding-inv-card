import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Carousel } from "@/components/Carousel";
import { ScrollDemo } from "@/components/ScrollDemo";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CtaFooter } from "@/components/CtaFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Carousel />
        <ScrollDemo />
        <Features />
        <Testimonials />
        <Faq />
        <CtaFooter />
      </main>
    </>
  );
}
