"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    id: "time",
    question: "Сколько времени занимает установка?",
    answer:
      "Обычно монтаж одного корта занимает от 3 до 7 дней, включая подготовку основания, сборку конструкции и укладку искусственной травы.",
  },
  {
    id: "lifespan",
    question: "Какой срок службы?",
    answer:
      "Металлоконструкция корта рассчитана на 15–20 лет эксплуатации. Искусственное покрытие рекомендуется заменять каждые 8–10 лет в зависимости от интенсивности использования.",
  },
  {
    id: "lighting",
    question: "Какие варианты освещения вы предлагаете?",
    answer:
      "Мы предлагаем LED-освещение различной мощности: экономичные варианты для любительских кортов и профессиональные системы с равномерным распределением света для турнирных площадок.",
  },
  {
    id: "foundation",
    question: "Нужен ли специальный фундамент?",
    answer:
      "Для открытых кортов достаточно ровной бетонной или асфальтовой площадки. Для крытых конструкций и кортов с трибунами может потребоваться усиленный фундамент — наш инженер определит это при выезде на объект.",
  },
  {
    id: "warranty",
    question: "Какой гарантийный срок?",
    answer:
      "Гарантия на металлоконструкцию — 5 лет, на монтажные работы — 2 года, на искусственное покрытие — 1 год. Все условия фиксируются в договоре.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id));

  const Item = ({ faq }: { faq: (typeof FAQS)[number] }) => (
    <div className="border-b border-[#E2E8F0] last:border-b-0">
      <button
        onClick={() => toggle(faq.id)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span
          className={`font-semibold text-[15px] leading-snug transition-colors ${
            open === faq.id
              ? "text-[#0B1422]"
              : "text-[#3D4F6A] group-hover:text-[#0B1422]"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            open === faq.id
              ? "bg-[#2ECC71]"
              : "bg-[#E2E8F0] group-hover:bg-[#C8D6E5]"
          }`}
        >
          {open === faq.id ? (
            <Minus className="w-3.5 h-3.5 text-white" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-[#5A6A85]" />
          )}
        </span>
      </button>
      {open === faq.id && (
        <p className="text-[14px] text-[#5A6A85] leading-relaxed pb-5 pr-0 sm:pr-10">
          {faq.answer}
        </p>
      )}
    </div>
  );

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold text-[#0B1422] tracking-tight text-center leading-tight mb-8 lg:mb-12">
          Перед покупкой и установкой падел-кортов
          <br className="hidden sm:block" />у нас часто спрашивают
        </h2>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto divide-y divide-[#E2E8F0] border-t border-[#E2E8F0]">
          {FAQS.map((faq) => (
            <Item key={faq.id} faq={faq} />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border-2 border-[#E2E8F0] hover:border-[#25D366] rounded-full px-5 sm:px-8 h-12 sm:h-14 font-semibold text-[13px] sm:text-[15px] text-[#0B1422] transition-colors duration-150 shadow-sm hover:shadow-md text-center"
          >
            ЗАДАТЬ СВОЙ ВОПРОС В WHATSAPP
            <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
