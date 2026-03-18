import { Check } from "lucide-react";

const FEATURES = [
  {
    id: "production",
    title: "Собственное производство",
    description:
      "Контрактное (OEM) производство в Китае обеспечивает контроль качества и доступные цены.",
  },
  {
    id: "delivery",
    title: "Доставка по всей России",
    description: "Обеспечиваем быструю и надежную логистику по всей стране",
  },
  {
    id: "installation",
    title: "Быстрый монтаж",
    description:
      "Собственная бригада осуществляет монтаж кортов на объекте за 3-7 дней",
  },
  {
    id: "engineer",
    title: "Бесплатный выезд инженера",
    description: "По Москве и области для точных замеров и консультаций",
  },
  {
    id: "turnkey",
    title: "Работа под ключ",
    description:
      "Выполняем установку и оснащение кортов от фундамента защитных элементов",
  },
  {
    id: "stock",
    title: "Всегда в наличии",
    description:
      "Самые популярные модели кортов всегда в наличии и готовы выехать к вам на следующий день",
  },
];

export function WhyUs() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left side */}
          <div className="flex-1 min-w-0">
            {/* Heading */}
            <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-extrabold text-[#0B1422] leading-tight tracking-tight mb-8 lg:mb-10">
              Вы можете нам довериться и быть спокойными за качество и сроки
              установки падел-кортов
            </h2>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-8 sm:gap-y-8">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#2ECC71] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white stroke-3" />
                    </span>
                    <h3 className="font-bold text-[15px] text-[#0B1422] leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#5A6A85] leading-relaxed pl-8">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — guarantee block */}
          <div className="w-full lg:w-65 shrink-0 flex flex-col items-center gap-5">
            <div className="text-center">
              <p className="font-bold text-[18px] text-[#0B1422] leading-snug">
                Все под контролем:
              </p>
              <p className="font-bold text-[18px] text-[#0B1422] leading-snug">
                Вы защищены юридически
              </p>
              <p className="text-[13px] text-[#5A6A85] mt-2 leading-relaxed">
                Стоимость, сроки, гарантии будут прописаны в договоре
              </p>
            </div>

            {/* Contract document illustration */}
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-white p-5 flex flex-col gap-2">
              <div className="h-3 w-2/3 rounded bg-[#0B1422]" />
              <div className="h-2 w-full rounded bg-[#E2E8F0]" />
              <div className="h-2 w-11/12 rounded bg-[#E2E8F0]" />
              <div className="h-2 w-full rounded bg-[#E2E8F0]" />
              <div className="h-2 w-3/4 rounded bg-[#E2E8F0]" />
              <div className="mt-2 h-2 w-1/2 rounded bg-[#0B1422]" />
              <div className="h-2 w-full rounded bg-[#E2E8F0]" />
              <div className="h-2 w-11/12 rounded bg-[#E2E8F0]" />
              <div className="h-2 w-full rounded bg-[#E2E8F0]" />
              <div className="mt-2 h-2 w-1/2 rounded bg-[#0B1422]" />
              <div className="h-2 w-full rounded bg-[#E2E8F0]" />
              <div className="h-2 w-3/4 rounded bg-[#E2E8F0]" />
              <div className="mt-3 flex justify-end">
                <span className="inline-block w-16 h-8 rounded-lg bg-[#2ECC71]/20 border-2 border-[#2ECC71]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
