"use client";

import Image from "next/image";
import { Animate } from "@/app/components/Animate";
import { EditPhotoBtn } from "@/components/ui/EditPhotoBtn";
import { usePhotos } from "@/hooks/usePhotos";

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
  const photos = usePhotos("blog");
  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <EditPhotoBtn section="blog" />
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
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
              className="group relative rounded-2xl overflow-hidden aspect-4/3 max-h-125 flex flex-col justify-end cursor-pointer"
            >
              {/* Photo */}
              {photos[ARTICLES.indexOf(article)]?.url ? (
                <Image
                  src={photos[ARTICLES.indexOf(article)].url}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className={`absolute inset-0 ${article.bg}`} />
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
