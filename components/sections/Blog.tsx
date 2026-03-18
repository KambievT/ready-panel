import { Animate } from "@/app/components/Animate";

const ARTICLES = [
  {
    id: "cost",
    bg: "bg-[#6B7F6E]",
    title: "Сколько стоит падел корт в 2026 году: разбор структуры стоимости",
  },
  {
    id: "location",
    bg: "bg-[#4A6741]",
    title:
      "Как выбрать место для падел корта: требования к площадке и окружению",
  },
  {
    id: "vs-tennis",
    bg: "bg-[#3A5F5A]",
    title:
      "Падел-теннис и большой теннис: в чем разница и почему все больше выбирают падел",
  },
];

export function Blog() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold text-[#0B1422] tracking-tight text-center mb-8 lg:mb-12">
          Полезные статьи и новости
        </h2>

        {/* Cards */}
        <Animate
          animation="stagger"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {ARTICLES.map((article) => (
            <a
              key={article.id}
              href="#"
              className="group relative rounded-2xl overflow-hidden aspect-4/3 flex flex-col justify-end cursor-pointer"
            >
              {/* Photo placeholder */}
              <div className={`absolute inset-0 ${article.bg}`} />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="relative p-6 flex flex-col gap-3">
                <h3 className="text-white font-bold text-[17px] leading-snug">
                  {article.title}
                </h3>
                <span className="text-[#4ADE80] font-semibold text-[14px] flex items-center gap-1 group-hover:underline">
                  Смотреть подробнее →
                </span>
              </div>
            </a>
          ))}
        </Animate>
      </div>
    </section>
  );
}
