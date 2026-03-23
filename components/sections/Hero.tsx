import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Parallax } from "@/app/components/Animate";

const FEATURES = [
  "Гарантия минимальной цены — нашли дешевле, сделаем скидку*",
  "Доставка и установка по всей России, бесплатный выезд инженера*",
];

export function Hero() {
  return (
    <section className="relative min-h-[40vh] lg:min-h-[60vh] overflow-hidden flex items-center">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/fon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />

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

      <div className="relative mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32 w-full py-12 md:py-16 lg:py-24 xl:py-28">
        {/* Content */}
        <div className="flex flex-col gap-6 lg:gap-8 max-w-3xl xl:max-w-7xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit bg-white/10 border border-white/30 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm xl:text-base font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A41F] shrink-0" />
            Производитель · Прямые цены
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[66px] 2xl:text-[76px] font-extrabold leading-[1.1] tracking-tight text-white">
              Производство, продажа и монтаж всех видов{" "}
              <span className="text-[#7EABFF]">падел кортов</span>
            </h1>
            <p className="mt-3 lg:mt-4 text-[24px] sm:text-[32px] md:text-[38px] lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-extrabold leading-none text-white tracking-tight">
              от <span className="text-[#F5A41F]">1 390 000 ₽*</span>
              <span className="block text-[12px] sm:text-[13px] xl:text-[14px] font-normal text-white/70 mt-1.5 tracking-normal">
                * цена актуальна при заказе от 4 кортов
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-white/80 text-base lg:text-lg xl:text-xl leading-relaxed max-w-135">
            Цена падел корта от производителя ниже конкурентов на 20–30%.
            Строительство и монтаж под ключ по всей России.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-3">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-start sm:items-center gap-3 text-[14px] sm:text-[15px] xl:text-[16px] text-white/90 font-medium"
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
            <Button className="bg-[#1B54B4] hover:bg-[#1648a0] text-white font-bold rounded-xl h-12 sm:h-13 xl:h-14 px-6 sm:px-7 xl:px-8 text-[14px] sm:text-[15px] xl:text-[16px] shadow-none gap-2 transition-colors duration-150 animate-pulse-glow">
              Скачать каталог с ценами
              <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5" />
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/15 font-semibold border border-white/60 h-12 sm:h-13 xl:h-14 px-5 xl:px-6 text-[14px] sm:text-[15px] xl:text-[16px] rounded-xl"
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
