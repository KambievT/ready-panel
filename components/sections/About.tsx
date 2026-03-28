const STATS = [
  { value: "7 лет", label: "на рынке с 2019 года" },
  { value: "300+", label: "государственных и коммерческих контрактов" },
  { value: "100+ млн ₽", label: "выручка по итогам 2025 года" },
];

export function About() {
  return (
    <section className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-20">
        <div className="gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-[13px] sm:text-[14px] font-medium text-[#1B54B4] uppercase tracking-widest">
              О компании «Ready Padel»
            </span>

            <h2 className="text-[20px] sm:text-[24px] lg:text-[26px] font-extrabold text-[#0B1422] uppercase leading-snug tracking-tight">
              «Ready Padel» — бренд, под которым ООО «Авангард» развивает
              направление по продаже, поставке и строительству падел-кортов
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#3D4F6A] leading-relaxed">
              Компания «Авангард» работает на рынке с 2019 года и
              специализируется на поставке и оснащении спортивных объектов
              оборудованием и инфраструктурными решениями.
            </p>

            <p className="text-[15px] sm:text-[16px] text-[#3D4F6A] leading-relaxed">
              За время работы компания успешно исполнила более 300
              государственных и коммерческих контрактов, обеспечивая надежные
              поставки и выполнение обязательств перед заказчиками.
            </p>

            <p className="text-[15px] sm:text-[16px] font-bold text-[#0B1422] leading-relaxed">
              Мы предлагаем комплексный подход к реализации проектов — от
              проектирования и производства необходимой модели корта до
              профессионального монтажа и обслуживания.
            </p>

            <p className="text-[15px] sm:text-[16px] font-semibold text-[#0B1422] italic leading-relaxed border-l-4 border-[#1B54B4] pl-4">
              «Современная инфраструктура и качественное оснащение объектов —
              основа эффективной работы и развития организаций.»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
