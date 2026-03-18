import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Parallax } from "@/app/components/Animate";

const FEATURES = [
  "Гарантия минимальной цены — нашли дешевле, сделаем скидку*",
  "Доставка и установка по всей России, бесплатный выезд инженера*",
];

export function Hero() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[calc(100vh-72px)] bg-white overflow-hidden flex items-center">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1B54B4 1px, transparent 1px), linear-gradient(to right, #1B54B4 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent gradient blob */}
      <Parallax
        speed={0.05}
        className="pointer-events-none absolute -top-40 -right-40"
      >
        <div className="w-150 h-150 rounded-full bg-[#1B54B4]/5 blur-3xl animate-float" />
      </Parallax>
      <Parallax
        speed={-0.04}
        className="pointer-events-none absolute bottom-0 left-0"
      >
        <div className="w-100 h-100 rounded-full bg-[#F5A41F]/5 blur-3xl animate-float-delayed" />
      </Parallax>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit bg-[#1B54B4]/8 border border-[#1B54B4]/20 text-[#1B54B4] rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A41F] shrink-0" />
            Производитель · Прямые цены
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] tracking-tight text-[#0B1422]">
              Производство, продажа и монтаж всех видов{" "}
              <span className="text-[#1B54B4]">падел кортов</span>
            </h1>
            <p className="mt-3 lg:mt-4 text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-extrabold leading-none text-[#0B1422] tracking-tight">
              от <span className="text-[#F5A41F]">1 390 000 ₽*</span>
              <span className="block text-[12px] sm:text-[13px] font-normal text-[#4A5568] mt-1.5 tracking-normal">
                * цена актуальна при заказе от 4 кортов
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-[#4A5568] text-base lg:text-lg leading-relaxed max-w-105">
            Цена падел корта от производителя ниже конкурентов на 20–30%.
            Строительство и монтаж под ключ по всей России.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-3">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-start sm:items-center gap-3 text-[14px] sm:text-[15px] text-[#2D3748] font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-[#1B54B4] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                  <Check className="w-3 h-3 text-white stroke-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <Button className="bg-[#1B54B4] hover:bg-[#1648a0] text-white font-bold rounded-xl h-12 sm:h-13 px-6 sm:px-7 text-[14px] sm:text-[15px] shadow-none gap-2 transition-colors duration-150 animate-pulse-glow">
              Скачать каталог с ценами
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="text-[#1B54B4] hover:text-[#1648a0] hover:bg-[#1B54B4]/8 font-semibold border border-[#1B54B4] h-12 sm:h-13 px-5 text-[14px] sm:text-[15px] rounded-xl"
            >
              Заказать звонок
            </Button>
          </div>
        </div>

        {/* Right — visual placeholder */}
        <div className="relative">
          {/* Decorative card behind */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 rounded-2xl lg:rounded-3xl bg-[#1B54B4]/8" />

          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-linear-to-br from-[#F0F4FB] to-[#E8EEF8] aspect-4/3 flex items-center justify-center">
            {/* Placeholder — замени на реальное фото */}
            <div className="flex flex-col items-center gap-3 text-[#1B54B4]/30 select-none">
              <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80">
                <rect
                  width="80"
                  height="80"
                  rx="16"
                  fill="#1B54B4"
                  fillOpacity=".08"
                />
                <path
                  d="M16 56V32a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v24"
                  stroke="#1B54B4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <rect
                  x="24"
                  y="36"
                  width="32"
                  height="20"
                  rx="2"
                  stroke="#1B54B4"
                  strokeWidth="2"
                />
                <line
                  x1="40"
                  y1="36"
                  x2="40"
                  y2="56"
                  stroke="#F5A41F"
                  strokeWidth="2.5"
                />
                <line
                  x1="24"
                  y1="46"
                  x2="56"
                  y2="46"
                  stroke="#F5A41F"
                  strokeWidth="2.5"
                />
              </svg>
              <span className="text-sm font-medium text-[#1B54B4]/40">
                Фото корта
              </span>
            </div>

            {/* Stats cards */}
            <div className="absolute bottom-3 left-3 right-3 lg:bottom-5 lg:left-5 lg:right-5 flex gap-2 lg:gap-3">
              {[
                { value: "200+", label: "кортов установлено" },
                { value: "20–30%", label: "ниже рынка" },
                { value: "5 лет", label: "гарантия" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 bg-white/90 backdrop-blur-sm rounded-lg lg:rounded-xl px-3 py-2 lg:px-4 lg:py-3 shadow-sm"
                >
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-extrabold text-[#0B1422] leading-none">
                    {s.value}
                  </p>
                  <p className="text-[10px] lg:text-[11px] text-[#4A5568] mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
