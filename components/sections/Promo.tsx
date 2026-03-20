"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: "discount",
    bg: "linear-gradient(145deg, #145A2E 0%, #1E7A3E 100%)",
    title: "При покупке от 4-х кортов — скидка 10%",
    description:
      'Нажмите на кнопку "Участвовать в акции" чтобы узнать подробности',
  },
  {
    id: "referral",
    bg: "linear-gradient(145deg, #1A8C45 0%, #2ECC71 100%)",
    title: "Посоветуй нашу компанию и получи 100 000 руб",
    description: "По факту каждого смонтированного объекта",
  },
  {
    id: "review",
    bg: "linear-gradient(145deg, #1A1A2E 0%, #2D3561 100%)",
    title: "Выложи отзыв — получи кэшбэк 10 000 руб",
    description:
      "Выложите отзыв о нашей работе в соцсетях и получите кэшбэк к себе на карту",
  },
  {
    id: "first",
    bg: "linear-gradient(145deg, #0D3B6E 0%, #1565C0 100%)",
    title: "Скидка 5% на первый заказ",
    description:
      "Для новых клиентов — специальные условия при первом обращении",
  },
  {
    id: "package",
    bg: "linear-gradient(145deg, #4A2FA0 0%, #7B5CF0 100%)",
    title: "Пакетное предложение: корт + крыша",
    description:
      "Закажите монтаж корта вместе с крышей и получите выгодные условия",
  },
];

const GAP = 20;

function useVisible() {
  const [visible, setVisible] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return visible;
}

export function Promo() {
  const visible = useVisible();
  const [index, setIndex] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const maxIndex = Math.max(0, SLIDES.length - visible);

  useEffect(() => {
    const update = () => {
      if (outerRef.current) {
        setCardWidth(
          (outerRef.current.offsetWidth - GAP * (visible - 1)) / visible,
        );
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (outerRef.current) ro.observe(outerRef.current);
    return () => ro.disconnect();
  }, [visible]);

  const clampedIndex = Math.min(index, maxIndex);

  const goTo = (i: number) => setIndex(Math.max(0, Math.min(maxIndex, i)));

  return (
    <section className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold text-[#0B1422] tracking-tight text-center mb-8 lg:mb-12 leading-tight">
          Воспользуйтесь акцией чтобы сэкономить свои деньги
        </h2>

        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={() => goTo(clampedIndex - 1)}
            disabled={clampedIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 lg:-translate-x-6 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E2E8F0] flex items-center justify-center text-[#0B1422] hover:bg-[#F1F5F9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Track */}
          <div ref={outerRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: GAP,
                transform:
                  cardWidth > 0
                    ? `translateX(-${clampedIndex * (cardWidth + GAP)}px)`
                    : undefined,
              }}
            >
              {SLIDES.map((slide) => (
                <div
                  key={slide.id}
                  className="shrink-0 rounded-2xl p-5 sm:p-7 flex flex-col justify-between min-h-52 sm:min-h-65"
                  style={{
                    width: cardWidth > 0 ? cardWidth : undefined,
                    background: slide.bg,
                  }}
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white font-extrabold text-[18px] sm:text-[22px] leading-snug">
                      {slide.title}
                    </h3>
                    <p className="text-white/75 text-[14px] leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  <button className="mt-5 text-white font-semibold text-[14px] flex items-center gap-1 hover:underline cursor-pointer w-fit">
                    Участвовать в акции →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={() => goTo(clampedIndex + 1)}
            disabled={clampedIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 lg:translate-x-6 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E2E8F0] flex items-center justify-center text-[#0B1422] hover:bg-[#F1F5F9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === clampedIndex ? "bg-[#0B1422] w-6" : "bg-[#C8D6E5] w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
