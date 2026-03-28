"use client";

const STEPS = [
  {
    num: 1,
    title: "Консультация и проект",
    desc: "Мы анализируем ваш запрос, подбираем оптимальную конструкцию и создаём индивидуальный проект.",
  },
  {
    num: 2,
    title: "Производство и логистика",
    desc: "Изготавливаем сертифицированные конструкции, доставляем всё на объект.",
  },
  {
    num: 3,
    title: "Подготовка площадки",
    desc: "Готовим основание, проверяем геометрию и обеспечиваем идеальные условия для установки.",
  },
  {
    num: 4,
    title: "Монтаж корта",
    desc: "Сборка конструкции, установка стеклянных панелей, освещения и покрытия — быстро, безопасно, по стандартам.",
  },
  {
    num: 5,
    title: "Финальная проверка и сдача",
    desc: "Проводим тестирование, настраиваем освещение, проверяем безопасность и сдаём готовый объект в эксплуатацию.",
  },
];

export function Process() {
  return (
    <section className="bg-[#0B1422] py-16 md:py-24 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 ">
        <h2 className="text-[36px] sm:text-[52px] lg:text-[68px] font-extrabold text-white uppercase leading-[1.05] tracking-tight mb-4">
          От идеи до первой игры —
          <br />
          всё под контролем
        </h2>

        <p className="text-[40px] text-[#F5A41F] font-medium mb-12 lg:mb-18">
          Как это работает?
        </p>

        <div className="divide-y divide-white/10">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-[3rem_1fr_2fr] lg:grid-cols-[5rem_1fr_2fr] items-start gap-4 lg:gap-8 py-8 lg:py-10"
            >
              <span className="text-[32px] lg:text-[42px] font-extrabold text-[#1B54B4] leading-none pt-0.5">
                {step.num}
              </span>
              <p className="text-[17px] sm:text-[19px] lg:text-[22px] font-semibold text-white leading-snug">
                {step.title}
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/55 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
