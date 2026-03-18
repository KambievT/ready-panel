const COURT_TYPES = [
  "Классические падел корты",
  "Панорамные корты",
  "Ультра-панорамные корты",
  "Мобильные конструкции без фундамента",
];

const ADVANTAGES = [
  { icon: "🏭", text: "Собственное производство и склад в России" },
  { icon: "🚚", text: "Монтаж по всей территории страны" },
  { icon: "✅", text: "Гарантия качества и обслуживание" },
  { icon: "⚡", text: "Быстрая установка" },
];

export function SeoText() {
  return (
    <section className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold text-[#0B1422] tracking-tight leading-snug">
            Падел корты под ключ: производство, продажа и монтаж в России
          </h1>
          <p className="mt-4 text-[14px] sm:text-[15px] text-[#4A5568] leading-relaxed max-w-3xl mx-auto">
            Компания «Падел Ван» специализируется на производстве и установке
            падел кортов. Мы изготавливаем площадки по европейским стандартам
            FIP, обеспечивая надежность, долговечность и современный дизайн.
          </p>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-14">
          {/* Price block */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#1B54B4]/10 flex items-center justify-center text-[18px]">
                💰
              </span>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-[#0B1422]">
                Купить падел корт от 1,39 млн рублей
              </h2>
            </div>
            <p className="text-[14px] text-[#4A5568] leading-relaxed">
              Мы предлагаем падел корты напрямую от производителя — без
              посредников и наценок. Цена падел корта начинается от
              1&nbsp;490&nbsp;000 рублей. В стоимость входит доставка, монтаж и
              гарантия.
            </p>
          </div>

          {/* Court types block */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#F5A41F]/10 flex items-center justify-center text-[18px]">
                🏟️
              </span>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-[#0B1422]">
                Виды падел кортов
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {COURT_TYPES.map((type) => (
                <span
                  key={type}
                  className="inline-block bg-[#EBF0FA] text-[#1B54B4] text-[13px] font-medium px-3.5 py-1.5 rounded-full"
                >
                  {type}
                </span>
              ))}
            </div>
            <p className="text-[14px] text-[#4A5568] leading-relaxed">
              Каждый корт мы проектируем и собираем индивидуально, учитывая ваши
              пожелания и условия площадки.
            </p>
          </div>
        </div>

        {/* Advantages row */}
        <div className="mb-10 lg:mb-14">
          <h2 className="text-[16px] sm:text-[18px] font-bold text-[#0B1422] text-center mb-6">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {ADVANTAGES.map((item) => (
              <div
                key={item.text}
                className="bg-white rounded-xl p-4 sm:p-5 border border-[#E2E8F0] shadow-sm text-center flex flex-col items-center gap-2.5"
              >
                <span className="text-[24px] leading-none">{item.icon}</span>
                <p className="text-[13px] sm:text-[14px] text-[#3D4F6A] font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <div className="bg-[#0B1422] rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
          <h2 className="text-[17px] sm:text-[20px] font-bold text-white mb-3">
            Закажите падел корт сегодня
          </h2>
          <p className="text-[14px] sm:text-[15px] text-white/70 leading-relaxed max-w-2xl mx-auto mb-2">
            Падел стремительно набирает популярность в России. Открыв корт, вы
            инвестируете в перспективный бизнес и спортивную инфраструктуру.
          </p>
          <p className="text-[14px] sm:text-[15px] text-[#F5A41F] font-medium">
            📞 Оставьте заявку прямо сейчас — наши специалисты рассчитают точную
            стоимость и подготовят предложение.
          </p>
        </div>
      </div>
    </section>
  );
}
