import { ArrowRight } from "lucide-react";
import { Animate } from "@/app/components/Animate";

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
];

export function Services() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold text-[#0B1422] tracking-tight text-center mb-8 lg:mb-12">
          Наши дополнительные услуги:
        </h2>

        {/* Cards grid */}
        <Animate
          animation="stagger"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl overflow-hidden bg-linear-to-br ${service.bg} aspect-3/4 sm:aspect-4/3 lg:aspect-3/4 flex flex-col justify-between p-5 sm:p-6 group`}
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
        </Animate>
      </div>
    </section>
  );
}
