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
          {/* Headline */}
          <div>
            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[66px] 2xl:text-[76px] font-extrabold leading-[1.1] tracking-tight text-white">
              Производство, продажа и монтаж всех видов{" "}
              <span className="text-[#7EABFF]">падел кортов</span>
            </h1>
          </div>

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
            {/* Primary: shine sweep + lift on hover */}
            <button className="group relative overflow-hidden bg-[#1B54B4] text-white font-bold rounded-xl h-12 sm:h-13 xl:h-14 px-6 sm:px-7 xl:px-8 text-[14px] sm:text-[15px] xl:text-[16px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(27,84,180,0.4)] hover:shadow-[0_8px_32px_rgba(27,84,180,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out animate-pulse-glow">
              {/* Shine sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent" />
              Скачать каталог с ценами
              <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary: fill + border glow on hover */}
            <button className="group relative overflow-hidden text-white font-semibold border border-white/50 hover:border-white/90 h-12 sm:h-13 xl:h-14 px-5 xl:px-6 text-[14px] sm:text-[15px] xl:text-[16px] rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              {/* Background fill sweep */}
              <span className="pointer-events-none absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200" />
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
