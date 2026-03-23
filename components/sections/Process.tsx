"use client";

import { useState } from "react";
import Image from "next/image";
import { EditPhotoBtn } from "@/components/ui/EditPhotoBtn";
import { usePhotos } from "@/hooks/usePhotos";

const STEPS = [
  {
    id: "prep",
    label: "Подготовительный этап",
    photos: [
      { alt: "Подготовка площадки 1", bg: "bg-[#B0BEC5]" },
      { alt: "Подготовка площадки 2", bg: "bg-[#90A4AE]" },
      { alt: "Подготовка площадки 3", bg: "bg-[#78909C]" },
      { alt: "Подготовка площадки 4", bg: "bg-[#607D8B]" },
    ],
  },
  {
    id: "foundation",
    label: "Установка фундамента",
    photos: [
      { alt: "Фундамент 1", bg: "bg-[#A5D6A7]" },
      { alt: "Фундамент 2", bg: "bg-[#81C784]" },
      { alt: "Фундамент 3", bg: "bg-[#66BB6A]" },
      { alt: "Фундамент 4", bg: "bg-[#4CAF50]" },
    ],
  },
  {
    id: "fencing",
    label: "Установка ограждений",
    photos: [
      { alt: "Ограждения 1", bg: "bg-[#90CAF9]" },
      { alt: "Ограждения 2", bg: "bg-[#64B5F6]" },
      { alt: "Ограждения 3", bg: "bg-[#42A5F5]" },
      { alt: "Ограждения 4", bg: "bg-[#2196F3]" },
    ],
  },
  {
    id: "coating",
    label: "Монтаж покрытия",
    photos: [
      { alt: "Покрытие 1", bg: "bg-[#FFCC80]" },
      { alt: "Покрытие 2", bg: "bg-[#FFA726]" },
      { alt: "Покрытие 3", bg: "bg-[#FB8C00]" },
      { alt: "Покрытие 4", bg: "bg-[#E65100]" },
    ],
  },
  {
    id: "sand",
    label: "Засыпка песком и проверка работы",
    photos: [
      { alt: "Засыпка 1", bg: "bg-[#CE93D8]" },
      { alt: "Засыпка 2", bg: "bg-[#BA68C8]" },
      { alt: "Засыпка 3", bg: "bg-[#AB47BC]" },
      { alt: "Засыпка 4", bg: "bg-[#9C27B0]" },
    ],
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const photos = usePhotos("process");
  // 4 photos per step, indexed sequentially
  const stepPhotos = STEPS[active].photos.map((ph, i) => ({
    ...ph,
    cloudUrl: photos[active * 4 + i]?.url,
  }));

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      <EditPhotoBtn section="process" />
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold text-[#0B1422] tracking-tight text-center leading-tight mb-8 lg:mb-10">
          Посмотрите как происходит процесс
          <br className="hidden sm:block" />
          установки кортов от начала и до конца
        </h2>

        {/* Step tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-6 lg:mb-8 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
          {STEPS.map((step, i) => (
            <button
              key={step.id}
              onClick={() => setActive(i)}
              className={`px-3 sm:px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold border transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                i === active
                  ? "bg-[#00BCD4] text-white border-[#00BCD4]"
                  : "bg-white text-[#5A6A85] border-[#C8D6E5] hover:border-[#00BCD4] hover:text-[#00BCD4]"
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Photos grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stepPhotos.map((photo, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden aspect-video relative ${photo.cloudUrl ? "" : photo.bg + " flex items-center justify-center"}`}
            >
              {photo.cloudUrl ? (
                <Image
                  src={photo.cloudUrl}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <span className="text-white/40 text-[12px] font-medium">
                  {photo.alt}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
