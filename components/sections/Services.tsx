"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { EditPhotoBtn } from "@/components/ui/EditPhotoBtn";

const SERVICES = [
  {
    id: "installation",
    title: "Монтаж\nкорта",
    bg: "from-slate-700 to-slate-900",
  },
  {
    id: "foundation",
    title: "Строительство\nфундамента",
    bg: "from-stone-600 to-slate-800",
  },
  {
    id: "roof",
    title: "Проектирование,\nпроизводство\nи монтаж крыши",
    bg: "from-zinc-500 to-slate-700",
  },
  {
    id: "frame",
    title: "Строительство\nкаркасной-тентовых\nзданий",
    bg: "from-gray-600 to-slate-800",
  },
  {
    id: "lighting",
    title: "Установка\nосвещения",
    bg: "from-indigo-700 to-slate-900",
  },
  {
    id: "covering",
    title: "Укладка\nпокрытия",
    bg: "from-emerald-700 to-slate-800",
  },
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const distance = card ? card.offsetWidth + 20 : 300;
    el.scrollBy({
      left: dir === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <EditPhotoBtn section="services" />
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold text-[#0B1422] tracking-tight">
            Наши дополнительные услуги:
          </h2>

          {/* Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-[#CBD5E0] flex items-center justify-center transition-colors duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-default hover:border-[#1B54B4] hover:text-[#1B54B4]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-[#CBD5E0] flex items-center justify-center transition-colors duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-default hover:border-[#1B54B4] hover:text-[#1B54B4]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory overflow-x-hidden pb-2 -mb-2"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              data-card
              className={`relative rounded-2xl overflow-hidden bg-linear-to-br ${service.bg} flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] aspect-3/4 max-h-[420px] flex flex-col justify-between p-5 sm:p-6 group snap-start`}
            >
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

              {/* Title */}
              <h3 className="relative text-white font-bold text-[18px] sm:text-[20px] leading-snug whitespace-pre-line drop-shadow-sm">
                {service.title}
              </h3>

              {/* CTA button */}
              <button className="relative flex items-center gap-2 bg-[#1B54B4] hover:bg-[#1648a0] active:bg-[#12408f] text-white font-semibold text-[14px] rounded-xl px-5 h-11 w-fit transition-colors duration-150 cursor-pointer shadow-lg">
                Оставить заявку
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
