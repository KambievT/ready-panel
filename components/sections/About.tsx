const PARAGRAPHS = [
  "«Ready Padel» это бренд, под которым ООО «Авангард» развивает направление по продаже, поставке и строительству падел-кортов.",
  "Компания «Авангард» работает на рынке с 2019 года и специализируется на поставке и оснащении спортивных объектов оборудованием и инфраструктурными решениями.",
  "За время работы компания успешно исполнила более 300 государственных и коммерческих контрактов, обеспечивая надежные поставки и выполнение обязательств перед заказчиками.",
  "По итогам 2025 года выручка компании составила более 100 млн рублей, что отражает стабильное развитие и доверие со стороны государственных и коммерческих организаций.",
  "Мы предлагаем комплексный подход к реализации проектов — от проектирования и производства необходимой модели корта до профессионального монтажа и обслуживания.",
];

const QUOTE =
  "«Современная инфраструктура и качественное оснащение объектов — основа эффективной работы и развития организаций.»";

export function About() {
  return (
    <section className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-6 sm:gap-8">
        {/* Heading */}
        <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] font-extrabold text-[#0B1422] tracking-tight leading-[1.1]">
          О компании «Ready Padel»
        </h2>

        {/* Paragraphs */}
        <div className="flex flex-col gap-6 w-full">
          {PARAGRAPHS.map((text, i) => (
            <p
              key={i}
              className="text-[15px] sm:text-[16px] text-[#3D4F6A] leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>

        {/* Quote */}
        <p className="text-[15px] sm:text-[17px] font-semibold text-[#0B1422] italic leading-relaxed border-l-4 border-[#2ECC71] pl-4 sm:pl-5 text-left w-full">
          {QUOTE}
        </p>
      </div>
    </section>
  );
}
