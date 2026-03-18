import { Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type PricingRow = {
  title: string;
  price: string;
  days: string;
  warranty: string;
};

const ROWS: PricingRow[] = [
  {
    title: "Монтаж металлического каркаса",
    price: "100 000",
    days: "1–2 дня",
    warranty: "5 лет на монтаж + 10 лет на металл (от завода)",
  },
  {
    title: "Установка стекол",
    price: "100 000",
    days: "1 день",
    warranty:
      "2 года на монтаж, 5 лет на стекло (при отсутствии механических повреждений)",
  },
  {
    title: "Монтаж металлической сетки",
    price: "25 000",
    days: "1 день",
    warranty: "2 года на монтаж, 5 лет на сетку (оцинковка)",
  },
  {
    title: "Монтаж покрытия и засыпка кварцевым песком",
    price: "200 000",
    days: "1 день",
    warranty: "1 год на монтаж, 5 лет на покрытие",
  },
  {
    title: "Установка ворот, сетки и мелкого оборудования",
    price: "25 000",
    days: "0,5 дня",
    warranty: "1 год на монтаж и механизмы",
  },
  {
    title: "Установка освещения",
    price: "50 000",
    days: "0,5 дня",
    warranty: "1 год на монтаж, 2–5 лет на светильники (от производителя)",
  },
];

const total = ROWS.reduce(
  (sum, r) => sum + parseInt(r.price.replace(/\s/g, "")),
  0,
);

export function Pricing() {
  return (
    <section className="bg-[#F7F8FA] py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 lg:mb-10">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B54B4] mb-2">
              Стоимость услуг
            </p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-extrabold text-[#0B1422] tracking-tight leading-tight">
              Монтаж корта{" "}
              <span className="text-[#718096] font-medium text-[20px] sm:text-[24px] lg:text-[28px]">
                (на подготовленный фундамент)
              </span>
            </h2>
          </div>
          <Button className="bg-[#1B54B4] hover:bg-[#1648a0] text-white font-bold rounded-xl h-11 px-6 text-[14px] shadow-none gap-2 transition-colors duration-150 shrink-0 w-full sm:w-auto">
            Заказать монтаж
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_160px_120px_260px] bg-[#0B1422] px-6 py-3.5">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-white/50">
              Услуга
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-widest text-white/50">
              Стоимость
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-widest text-white/50 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Срок
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-widest text-white/50 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> Гарантия
            </span>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_160px_120px_260px] px-6 py-5 items-start gap-2 border-b border-[#F0F4FB] transition-colors duration-100 hover:bg-[#F7F9FF] last:border-b-0 group`}
            >
              {/* Title */}
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1B54B4]/8 border border-[#1B54B4]/15 flex items-center justify-center shrink-0 text-[11px] font-bold text-[#1B54B4]">
                  {i + 1}
                </span>
                <span className="text-[15px] font-medium text-[#1A202C] leading-snug">
                  {row.title}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 pt-0.5">
                <span className="text-[18px] font-extrabold text-[#0B1422] tracking-tight">
                  {row.price}
                </span>
                <span className="text-[13px] text-[#718096] font-medium">
                  ₽
                </span>
              </div>

              {/* Days */}
              <div className="pt-0.5">
                <span className="inline-flex items-center gap-1.5 bg-[#F0F4FB] text-[#1B54B4] text-[13px] font-semibold px-3 py-1 rounded-full">
                  {row.days}
                </span>
              </div>

              {/* Warranty */}
              <p className="text-[13px] text-[#4A5568] leading-relaxed pt-0.5">
                {row.warranty}
              </p>
            </div>
          ))}

          {/* Total row */}
          <div className="grid grid-cols-[1fr_160px_120px_260px] px-6 py-5 items-center bg-[#F0F4FB] border-t-2 border-[#1B54B4]/20">
            <span className="text-[15px] font-bold text-[#0B1422]">Итого</span>
            <div className="flex items-baseline gap-1">
              <span className="text-[22px] font-extrabold text-[#1B54B4] tracking-tight">
                {total.toLocaleString("ru-RU")}
              </span>
              <span className="text-[14px] text-[#1B54B4] font-semibold">
                ₽
              </span>
            </div>
            <div />
            <p className="text-[13px] text-[#718096]">
              полный монтаж «под ключ»
            </p>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden flex flex-col gap-3">
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1B54B4]/8 border border-[#1B54B4]/15 flex items-center justify-center shrink-0 text-[11px] font-bold text-[#1B54B4]">
                  {i + 1}
                </span>
                <span className="text-[15px] font-medium text-[#1A202C] leading-snug">
                  {row.title}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-[18px] font-extrabold text-[#0B1422] tracking-tight">
                    {row.price}
                  </span>
                  <span className="text-[13px] text-[#718096] font-medium">
                    ₽
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-[#F0F4FB] text-[#1B54B4] text-[13px] font-semibold px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  {row.days}
                </span>
              </div>
              <div className="flex items-start gap-1.5 text-[13px] text-[#4A5568] leading-relaxed">
                <Shield className="w-3.5 h-3.5 text-[#718096] shrink-0 mt-0.5" />
                {row.warranty}
              </div>
            </div>
          ))}

          {/* Mobile Total */}
          <div className="bg-[#F0F4FB] rounded-xl border-2 border-[#1B54B4]/20 p-4 sm:p-5 flex items-center justify-between">
            <span className="text-[15px] font-bold text-[#0B1422]">Итого</span>
            <div className="flex items-baseline gap-1">
              <span className="text-[22px] font-extrabold text-[#1B54B4] tracking-tight">
                {total.toLocaleString("ru-RU")}
              </span>
              <span className="text-[14px] text-[#1B54B4] font-semibold">
                ₽
              </span>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="mt-4 text-[13px] text-[#A0AEC0] text-center">
          * Цены указаны ориентировочно. Точная стоимость рассчитывается
          индивидуально после осмотра объекта.
        </p>
      </div>
    </section>
  );
}
