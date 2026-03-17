export function SeoText() {
  return (
    <section className="bg-white py-16 border-b border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">
        <h1 className="text-[24px] font-extrabold text-[#0B1422] text-center leading-snug">
          Падел корты под ключ: производство, продажа и монтаж в России
        </h1>

        <p className="text-[14px] text-[#1B54B4] leading-relaxed">
          Компания «Падел Ван» специализируется на производстве и установке
          падел кортов. Мы изготавливаем площадки по европейским стандартам FIP,
          обеспечивая надежность, долговечность и современный дизайн.
        </p>

        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] font-bold text-[#0B1422]">
            Купить падел корт от 1,39 млн рублей
          </h2>
          <p className="text-[14px] text-[#3D4F6A] leading-relaxed">
            Мы предлагаем падел корты напрямую от производителя — без
            посредников и наценок. Цена падел корта начинается от
            1&nbsp;490&nbsp;000 рублей. В стоимость входит доставка, монтаж и
            гарантия.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] font-bold text-[#0B1422]">
            Виды падел кортов
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-1">
            {[
              "Классические падел корты",
              "Панорамные корты",
              "Ультра-панорамные корты",
              "Мобильные конструкции без фундамента",
            ].map((item) => (
              <li key={item} className="text-[14px] text-[#1B54B4]">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[14px] text-[#1B54B4] leading-relaxed">
            Каждый корт мы проектируем и собираем индивидуально, учитывая ваши
            пожелания и условия площадки.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] font-bold text-[#0B1422]">
            Почему выбирают нас
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-1">
            {[
              "собственное производство и склад в России;",
              "монтаж по всей территории страны;",
              "гарантия качества и обслуживание;",
              "быстрая установка.",
            ].map((item) => (
              <li key={item} className="text-[14px] text-[#1B54B4]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] font-bold text-[#0B1422]">
            Закажите падел корт сегодня
          </h2>
          <p className="text-[14px] text-[#1B54B4] leading-relaxed">
            Падел стремительно набирает популярность в России. Открыв корт, вы
            инвестируете в перспективный бизнес и спортивную инфраструктуру.
          </p>
          <p className="text-[14px] text-[#1B54B4] leading-relaxed flex items-start gap-1">
            <span>📞</span>
            <span>
              Оставьте заявку прямо сейчас — наши специалисты рассчитают точную
              стоимость и подготовят предложение.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
