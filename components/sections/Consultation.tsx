"use client";

import { useState } from "react";
import { Check, Phone } from "lucide-react";
import Image from "next/image";
import { EditPhotoBtn } from "@/components/ui/EditPhotoBtn";
import { usePhotos } from "@/hooks/usePhotos";

const BENEFITS = [
  "выслушаем и вникнем в суть вашей задачи",
  "расскажем, как будем действовать по шагам",
  "объясним какие гарантии вы получите при работе с нами",
  "сориентируем по срокам и стоимости решения задачи",
];

export function Consultation() {
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const photos = usePhotos("consultation");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative bg-[#D1D5DB] py-0 overflow-hidden border-b border-[#C0C4CC]">
      <EditPhotoBtn section="consultation" />
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 items-end lg:min-h-105">
          {/* Left — text */}
          <div className="py-10 lg:py-14 flex flex-col gap-5 sm:gap-6 justify-center">
            <div>
              <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-extrabold text-[#0B1422] leading-tight tracking-tight">
                Получите бесплатную консультацию нашего лучшего специалиста
              </h2>
              <p className="text-[15px] text-[#3D4F6A] mt-3">
                по телефону через несколько минут
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[13px] text-[#5A6A85]">
                Звоните Пн-Сб с 9:00-19:00
              </p>
              <a
                href="tel:+79180742375"
                className="flex items-center gap-2 text-[22px] font-extrabold text-[#0B1422] hover:text-[#1B54B4] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#2ECC71] fill-[#2ECC71]" />
                +7 (918) 074-23-75
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[13px] text-[#5A6A85]">
                Пишите, мы всегда онлайн
              </p>
              <div className="flex items-center gap-3 mt-1">
                {/* Telegram */}
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#29ABE2] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Center — specialist photo placeholder */}
          <div className="hidden lg:flex flex-col items-center justify-end self-end px-10">
            <div className="relative">
              {/* Photo */}
              <div className="w-52 h-72 rounded-t-full overflow-hidden bg-[#9CA3AF] relative">
                {photos[0]?.url ? (
                  <Image
                    src={photos[0].url}
                    alt="Специалист"
                    fill
                    className="object-cover object-top"
                    sizes="208px"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-b from-[#B0B8C4] to-[#8A929E]" />
                )}
              </div>
              {/* Name badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-2 text-center shadow-md whitespace-nowrap">
                <p className="font-bold text-[14px] text-[#0B1422]">Денис</p>
                <p className="font-bold text-[14px] text-[#0B1422]">Колесник</p>
                <p className="text-[11px] text-[#5A6A85]">ведущий специалист</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="py-10 lg:py-14 flex flex-col gap-5 sm:gap-6 justify-center">
            <div>
              <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#0B1422] leading-tight">
                Заполните форму, свяжусь с вами
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {BENEFITS.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#3D4F6A] leading-snug">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ваш номер телефона"
                className="w-full h-12 rounded-xl border border-[#E2E8F0] bg-white px-4 text-[15px] text-[#0B1422] placeholder:text-[#9DABBE] outline-none focus:border-[#1B54B4] transition-colors"
              />
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#2ECC71] hover:bg-[#27AE60] active:bg-[#219150] text-white font-bold text-[15px] transition-colors cursor-pointer"
              >
                Получить консультацию
              </button>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 accent-[#2ECC71]"
                />
                <span className="text-[11px] text-[#9DABBE] leading-snug">
                  Согласен с условиями политики конфиденциальности данных
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
