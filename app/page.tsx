import { Hero } from "@/components/sections/Hero";
import { TopSales } from "@/components/sections/TopSales";
import { CatalogDownload } from "@/components/sections/CatalogDownload";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <TopSales />
      <CatalogDownload />
      <Services />
      <Pricing />
    </>
  );
}
