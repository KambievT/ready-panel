"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Court = {
  id: string;
  label: string;
  price: string;
  inStock: boolean;
  specs: string[];
};

const COURTS: Court[] = [
  {
    id: "classic",
    label: "Классический корт",
    price: "1 390 000",
    inStock: true,
    specs: [
      "Стойки: высококачественная сталь, горячее цинкование. Профильная стальная труба толщиной 3 мм;",
      "Стальная сетка: рамка 1×2 м, высококачественная горячая оцинкованная квадратная стальная труба толщиной 3 мм. Диаметр проволоки — 4 мм, размер ячейки — 50×50 мм;",
      "Стекло: закалённое 12 мм, размер 2×3 м, толщина 12 мм, соответствует европейскому стандарту EN12150-2;",
      "Покрытие: цвет — на выбор, высота ворса — от 10 мм, плотность — от 46 200 стежков/м², волокно — от 9500D, шаг — 3/16″, основание на выбор: полипропилен, полиэстер, полиуретан, латекс;",
      "Освещение: Z-образная стойка, 8 прожекторов LED по 200 Вт; освещённость — 300 люкс; влагозащита — IP65;",
    ],
  },
  {
    id: "panoramic",
    label: "Панорамный корт",
    price: "1 690 000",
    inStock: true,
    specs: [
      "Стойки: высококачественная сталь, горячее цинкование. Профильная стальная труба толщиной 3 мм;",
      "Панорамное остекление: закалённое стекло 12 мм по всему периметру, размер панелей 2×3 м;",
      "Стекло: закалённое 12 мм, соответствует европейскому стандарту EN12150-2;",
      "Покрытие: цвет — на выбор, высота ворса — от 10 мм, плотность — от 46 200 стежков/м²;",
      "Освещение: Z-образная стойка, 8 прожекторов LED по 200 Вт; освещённость — 300 люкс; влагозащита — IP65;",
    ],
  },
  {
    id: "ultra",
    label: "Ультрапанорамный корт",
    price: "1 990 000",
    inStock: false,
    specs: [
      "Стойки: нержавеющая сталь премиум-класса, горячее цинкование. Профильная труба толщиной 4 мм;",
      "Остекление 360°: закалённое стекло 12 мм по всему периметру и торцам;",
      "Стекло: закалённое 12 мм, антибликовое покрытие, соответствует EN12150-2;",
      "Покрытие: цвет — на выбор, высота ворса — от 12 мм, плотность — от 52 000 стежков/м²;",
      "Освещение: 10 прожекторов LED по 200 Вт; освещённость — 400 люкс; влагозащита — IP67;",
    ],
  },
];

// placeholder thumb colors for the gallery
const THUMB_COLORS = [
  "from-emerald-900 to-slate-900",
  "from-sky-900 to-slate-800",
  "from-teal-900 to-slate-900",
  "from-blue-900 to-slate-800",
];

export function TopSales() {
  const [activeId, setActiveId] = useState<string>("classic");
  const [activeThumb, setActiveThumb] = useState<number>(0);

  const court = COURTS.find((c) => c.id === activeId)!;

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-[30px] lg:text-[38px] font-extrabold text-[#0B1422] leading-tight tracking-tight text-center max-w-2xl mx-auto">
          3 самые популярные модели падел кортов{" "}
          <span className="text-[#1B54B4]">в наличии на складе</span> в Москве
        </h2>

        {/* Tabs */}
        <div className="mt-6 sm:mt-8 lg:mt-10 flex items-center gap-2 sm:gap-3 justify-center flex-wrap">
          {COURTS.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveId(c.id);
                setActiveThumb(0);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold border transition-all duration-150 cursor-pointer ${
                activeId === c.id
                  ? "bg-[#1B54B4] border-[#1B54B4] text-white shadow-sm"
                  : "bg-white border-[#CBD5E0] text-[#4A5568] hover:border-[#1B54B4] hover:text-[#1B54B4]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Left — gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div
              className={`rounded-2xl overflow-hidden bg-linear-to-br ${THUMB_COLORS[activeThumb]} aspect-4/3 max-h-[500px] flex items-center justify-center`}
            >
              <div className="flex flex-col items-center gap-2 text-white/20 select-none">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
                  <rect
                    width="64"
                    height="64"
                    rx="12"
                    fill="white"
                    fillOpacity=".05"
                  />
                  <path
                    d="M12 44V26a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v18"
                    stroke="white"
                    strokeOpacity=".3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="18"
                    y="28"
                    width="28"
                    height="16"
                    rx="2"
                    stroke="white"
                    strokeOpacity=".3"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-xs font-medium text-white/30 uppercase tracking-widest">
                  Фото
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {THUMB_COLORS.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`rounded-xl overflow-hidden aspect-4/3 bg-linear-to-br ${color} transition-all duration-150 cursor-pointer ${
                    activeThumb === i
                      ? "ring-2 ring-[#1B54B4] ring-offset-2"
                      : "opacity-60 hover:opacity-90"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — specs */}
          <div className="flex flex-col">
            {/* Title + badge */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#0B1422] tracking-tight">
                {court.label}
              </h3>
              {court.inStock ? (
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[12px] font-semibold px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />В
                  наличии
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-[12px] font-semibold px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Под заказ
                </span>
              )}
            </div>

            {/* Specs list */}
            <ul className="mt-6 flex flex-col divide-y divide-[#F0F4FB]">
              {court.specs.map((spec, i) => (
                <li key={i} className="flex gap-3 py-3.5">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#EBF0FA] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#1B54B4] stroke-[2.5]" />
                  </span>
                  <p className="text-[14px] text-[#4A5568] leading-relaxed">
                    {spec}
                  </p>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-6 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="text-[14px] sm:text-[15px] text-[#718096]">
                Цена от:
              </span>
              <span className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#0B1422] tracking-tight leading-none">
                {court.price}
              </span>
              <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#4A5568]">
                руб
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button className="bg-[#1B54B4] hover:bg-[#1648a0] text-white font-bold rounded-xl h-12 px-7 text-[14px] shadow-none gap-2 transition-colors duration-150">
                Заказать корт
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#CBD5E0] text-[#4A5568] hover:border-[#1B54B4] hover:text-[#1B54B4] hover:bg-[#1B54B4]/5 rounded-xl h-12 px-6 text-[14px] shadow-none transition-colors duration-150"
              >
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
