"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { CATALOG_ITEMS } from "./data";

type Filter = "all" | "courts" | "services";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "courts", label: "Падел-корты" },
  { key: "services", label: "Услуги" },
];

const PER_PAGE = 8;

export default function CatalogPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [page, setPage] = useState(1);

  const filtered =
    filter === "all"
      ? CATALOG_ITEMS
      : CATALOG_ITEMS.filter((i) => i.category === filter);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilter = (f: Filter) => {
    setFilter(f);
    setPage(1);
  };

  return (
    <section className="bg-[#F7F8FA] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <h1 className="text-center text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#0B1422] tracking-tight mb-8 sm:mb-10">
          Каталог
        </h1>

        {/* Filters */}
        <div className="flex items-center justify-start gap-3 mb-10 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilter(f.key)}
              className={`px-8 sm:px-10 py-3 sm:py-3.5 rounded-2xl text-[15px] sm:text-[16px] font-semibold transition-all duration-200 cursor-pointer ${
                filter === f.key
                  ? "bg-[#1B54B4] text-white shadow-md"
                  : "bg-white text-[#4a4a4a] border border-[#e0e0e0] hover:border-[#1B54B4] hover:text-[#1B54B4]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {paginated.map((item) => (
            <Link
              href={`/catalog/${item.id}`}
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-[#1a1a2e] overflow-hidden">
                {item.badge && (
                  <span
                    className={`absolute top-3 left-3 z-10 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 ${
                      item.badge === "Новинка" ? "bg-[#22c55e]" : "bg-[#F5A41F]"
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    {item.badge}
                  </span>
                )}
                {/* Placeholder image area */}
                <div className="w-full h-full bg-gradient-to-br from-[#0d1117] to-[#1a2332] flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white/10"
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
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6">
                {/* Price */}
                <p className="text-[28px] sm:text-[32px] font-extrabold text-[#0B1422] leading-none tracking-tight">
                  {item.price}
                  <span className="text-[14px] font-medium text-[#999] ml-1">
                    {item.priceUnit}
                  </span>
                </p>

                {/* Title */}
                <h3 className="text-[15px] sm:text-[16px] font-medium text-[#0B1422] mt-4 leading-snug">
                  {item.title}
                </h3>

                {/* Buy button */}
                <button className="mt-5 w-full sm:w-auto px-8 py-2.5 rounded-xl border-2 border-[#1B54B4] text-[#1B54B4] text-[14px] font-semibold hover:bg-[#1B54B4] hover:text-white transition-colors duration-200 cursor-pointer">
                  Купить
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-14 mb-4">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-11 h-11 rounded-xl text-[15px] font-semibold transition-all duration-150 cursor-pointer ${
                page === n
                  ? "bg-[#1B54B4] text-white shadow-md"
                  : "bg-white text-[#4a4a4a] border border-[#e0e0e0] hover:border-[#1B54B4] hover:text-[#1B54B4]"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {paginated.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#999] text-lg">
              В этой категории пока нет товаров
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
