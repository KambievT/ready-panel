"use client";

import Image from "next/image";
import { Animate } from "@/app/components/Animate";

const FALLBACK_ARTICLES = [
  {
    id: "cost",
    title: "Сколько стоит падел корт в 2026 году: разбор структуры стоимости",
    imageUrl: "",
  },
  {
    id: "location",
    title:
      "Как выбрать место для падел корта: требования к площадке и окружению",
    imageUrl: "",
  },
  {
    id: "vs-tennis",
    title:
      "Падел-теннис и большой теннис: в чем разница и почему все больше выбирают падел",
    imageUrl: "",
  },
];

const BG_COLORS = ["bg-[#6B7F6E]", "bg-[#4A6741]", "bg-[#3A5F5A]"];

export function Blog() {
  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32 border-b border-[#E2E8F0]">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] font-extrabold text-[#0B1422] tracking-tight text-center leading-[1.1] mb-10 lg:mb-16">
          Полезные статьи и новости
        </h2>

        {/* Cards */}
        <Animate
          animation="stagger"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {FALLBACK_ARTICLES.map((article, i) => (
            <a
              key={article.id}
              href="#"
              className="group relative rounded-2xl overflow-hidden aspect-3/4 max-h-[550px] flex flex-col justify-end cursor-pointer"
            >
              {/* Photo or fallback color */}
              {article.imageUrl ? (
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div
                  className={`absolute inset-0 ${BG_COLORS[i % BG_COLORS.length]}`}
                />
              )}

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
