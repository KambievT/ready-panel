import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CATALOG_ITEMS } from "../data";

export function generateStaticParams() {
  return CATALOG_ITEMS.map((item) => ({ id: item.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const item = CATALOG_ITEMS.find((i) => i.id === params.id);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function CatalogItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = CATALOG_ITEMS.find((i) => i.id === id);
  if (!item) notFound();

  return (
    <section className="bg-[#F7F8FA] py-10 md:py-16 lg:py-20 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Back link */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1B54B4] hover:text-[#0B1422] transition-colors duration-150 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад в каталог
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#0d1117] to-[#1a2332] flex items-center justify-center">
            <svg
              className="w-20 h-20 text-white/10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="0.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>

          {/* Info */}
          <div>
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1B54B4] mb-3">
              {item.category === "courts" ? "Падел-корт" : "Услуга"}
            </span>
            <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-[#0B1422] leading-[1.1] tracking-tight">
              {item.title}
            </h1>

            <p className="mt-4 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed">
              {item.description}
            </p>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-[36px] sm:text-[44px] font-extrabold text-[#0B1422] tracking-tight leading-none">
                {item.price}
              </span>
              <span className="text-[16px] text-[#718096] font-medium">
                {item.priceUnit}
              </span>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-8 py-3.5 rounded-xl bg-[#1B54B4] text-white text-[15px] font-bold hover:bg-[#143f8a] transition-colors duration-150 cursor-pointer flex items-center justify-center gap-2">
                Заказать
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3.5 rounded-xl border-2 border-[#1B54B4] text-[#1B54B4] text-[15px] font-bold hover:bg-[#1B54B4] hover:text-white transition-colors duration-200 cursor-pointer">
                Получить расчёт
              </button>
            </div>

            {/* Specs */}
            <div className="mt-10">
              <h2 className="text-[18px] font-bold text-[#0B1422] mb-4">
                Характеристики
              </h2>
              <ul className="space-y-3">
                {item.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#1B54B4]/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1B54B4]" />
                    </span>
                    <span className="text-[14px] text-[#4A5568] leading-relaxed">
                      {spec}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
