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

export default function Home() {
  return (
    <>
      <Hero />
      <TopSales />
      <CatalogDownload />
      <Services />
      <Pricing />
      <WhyUs />
      <Promo />
      <Process />
      <Blog />
      <About />
      <FAQ />
      <Consultation />
      <SeoText />
      <Contacts />
    </>
  );
}
