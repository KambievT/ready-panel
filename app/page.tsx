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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ready-padel.ru/#organization",
      name: "Ready Padel",
      url: "https://ready-padel.ru",
      logo: {
        "@type": "ImageObject",
        url: "https://ready-padel.ru/og-image.jpg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: "Russian",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://ready-padel.ru/#website",
      url: "https://ready-padel.ru",
      name: "Ready Padel",
      publisher: { "@id": "https://ready-padel.ru/#organization" },
      inLanguage: "ru-RU",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ready-padel.ru/#localbusiness",
      name: "Ready Padel",
      url: "https://ready-padel.ru",
      description:
        "Производство и монтаж падел-кортов под ключ в России. Профессиональные корты для падел-тенниса: открытые, закрытые, панорамные.",
      priceRange: "$$",
      image: "https://ready-padel.ru/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        addressCountry: "RU",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
