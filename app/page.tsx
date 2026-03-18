import { Hero } from "@/components/sections/Hero";
import { TopSales } from "@/components/sections/TopSales";
import { CatalogDownload } from "@/components/sections/CatalogDownload";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Promo } from "@/components/sections/Promo";
import { Process } from "@/components/sections/Process";
import { Blog } from "@/components/sections/Blog";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Consultation } from "@/components/sections/Consultation";
import { SeoText } from "@/components/sections/SeoText";
import { Contacts } from "@/components/sections/Contacts";
import { Pricing } from "@/components/sections/Pricing";
import { Animate } from "@/app/components/Animate";

export default function Home() {
  return (
    <>
      <Hero />

      <Animate animation="fade-up">
        <TopSales />
      </Animate>

      <Animate animation="fade-up">
        <CatalogDownload />
      </Animate>

      <Animate animation="fade-up">
        <Services />
      </Animate>

      <Animate animation="scale-in">
        <Pricing />
      </Animate>

      <Animate animation="fade-up">
        <WhyUs />
      </Animate>

      <Animate animation="from-left">
        <Promo />
      </Animate>

      <Animate animation="fade-up">
        <Process />
      </Animate>

      <Animate animation="fade-up">
        <Blog />
      </Animate>

      <Animate animation="fade-up">
        <About />
      </Animate>

      <Animate animation="fade-up">
        <FAQ />
      </Animate>

      <Animate animation="scale-in">
        <Consultation />
      </Animate>

      <Animate animation="fade-up" threshold={0.05}>
        <SeoText />
      </Animate>

      <Animate animation="fade-up" threshold={0.05}>
        <Contacts />
      </Animate>
    </>
  );
}
