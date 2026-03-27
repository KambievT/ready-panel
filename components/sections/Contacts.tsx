"use client";

import Image from "next/image";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { EditPhotoBtn } from "@/components/ui/EditPhotoBtn";
import { usePhotos } from "@/hooks/usePhotos";

const OFFICE_PHOTOS = [
  { bg: "bg-[#8D9B8A]" },
  { bg: "bg-[#6B7A80]" },
  { bg: "bg-[#7A8B92]" },
];

const SITE_PHOTOS = [
  { bg: "bg-[#4A7A5A]" },
  { bg: "bg-[#5A7A6A]" },
  { bg: "bg-[#3A6A4A]" },
];

export function Contacts() {
  const photos = usePhotos("contacts");
  const officePics = photos.slice(0, 3);
  const sitePics = photos.slice(3, 6);
  return (
    <section className="relative bg-linear-to-b from-[#F7F9FC] to-white py-16 md:py-20 lg:py-24 border-b border-[#E2E8F0]">
      <EditPhotoBtn section="contacts" />
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1B54B4]/8 border border-[#1B54B4]/20 text-[#1B54B4] rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Свяжитесь с нами
          </div>
          <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] font-extrabold text-[#0B1422] leading-[1.1] tracking-tight">
            Наши контакты
          </h2>
          <p className="text-[15px] text-[#5A6A85] mt-3 max-w-lg mx-auto">
            Приезжайте в офис, звоните или пишите — мы всегда на связи
          </p>
        </div>

        {/* Main grid: contact cards + map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left column — contact info cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address & hours card */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#1B54B4]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#1B54B4]" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0B1422]">
                  Адрес и график
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#8A9AB5] font-semibold mb-1">
                    Адрес
                  </p>
                  <a
                    href="https://yandex.ru/maps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#0B1422] hover:text-[#1B54B4] transition-colors leading-snug"
                  >
                    Москва, Большая Черёмушкинская улица, 1
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#8A9AB5] font-semibold mb-1">
                    Время работы
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1B54B4] shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[14px] text-[#0B1422] font-medium">
                        ПН–СБ: 10:00–19:00
                      </span>
                      <span className="text-[13px] text-[#8A9AB5]">
                        Воскресенье — выходной
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & email card */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F5A41F]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#F5A41F]" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0B1422]">
                  Телефон и почта
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+79180742375"
                  className="group flex items-center gap-3 bg-[#F7F9FC] rounded-xl px-4 py-3 hover:bg-[#1B54B4] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#1B54B4] group-hover:text-white shrink-0" />
                  <span className="text-[18px] font-extrabold text-[#0B1422] group-hover:text-white transition-colors">
                    +7 (918) 074-23-75
                  </span>
                </a>

                <a
                  href="mailto:padel-courts@yandex.ru"
                  className="group flex items-center gap-3 bg-[#F7F9FC] rounded-xl px-4 py-3 hover:bg-[#1B54B4]/5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#1B54B4] shrink-0" />
                  <span className="text-[14px] text-[#3D4F6A] group-hover:text-[#1B54B4] transition-colors">
                    padel-courts@yandex.ru
                  </span>
                </a>
              </div>
            </div>

            {/* Messengers card */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[13px] text-[#8A9AB5] font-medium mb-4">
                Пишите, мы онлайн
              </p>
              <div className="flex items-center gap-3">
                {/* Telegram */}
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#29ABE2]/10 hover:bg-[#29ABE2] text-[#29ABE2] hover:text-white rounded-xl px-4 py-2.5 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span className="text-[13px] font-semibold">Telegram</span>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-xl px-4 py-2.5 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  <span className="text-[13px] font-semibold">WhatsApp</span>
                </a>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1B54B4] hover:text-[#1B54B4]/70 mt-5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Реквизиты для юр. лиц
              </a>
            </div>
          </div>

          {/* Right column — map */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm h-85 sm:h-105 lg:h-130">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.576800%2C55.683600&z=10&pt=37.576800,55.683600,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Яндекс карта офиса"
                className="w-full h-full"
              />
              <a
                href="https://yandex.ru/maps/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 flex items-center gap-2 bg-white rounded-xl px-5 py-2.5 text-[13px] font-semibold text-[#0B1422] shadow-lg hover:shadow-xl transition-shadow border border-[#E2E8F0]"
              >
                <MapPin className="w-4 h-4 text-[#E63333]" />
                Открыть в Яндекс Картах
              </a>
            </div>

            {/* Photo galleries row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Office photos */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
                <h3 className="text-[14px] font-bold text-[#0B1422] mb-3">
                  📍 До встречи в офисе
                </h3>
                <div className="grid grid-cols-3 gap-2 h-28">
                  {OFFICE_PHOTOS.map((photo, i) => (
                    <div
                      key={i}
                      className={`rounded-lg overflow-hidden relative ${officePics[i] ? "" : photo.bg} hover:opacity-80 transition-opacity cursor-pointer`}
                    >
                      {officePics[i]?.url && (
                        <Image
                          src={officePics[i].url}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="100px"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Site photos */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
                <h3 className="text-[14px] font-bold text-[#0B1422] mb-3">
                  🏗️ До встречи на объекте
                </h3>
                <div className="grid grid-cols-3 gap-2 h-28">
                  {SITE_PHOTOS.map((photo, i) => (
                    <div
                      key={i}
                      className={`rounded-lg overflow-hidden relative ${sitePics[i] ? "" : photo.bg} hover:opacity-80 transition-opacity cursor-pointer`}
                    >
                      {sitePics[i]?.url && (
                        <Image
                          src={sitePics[i].url}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="100px"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
