import { MapPin, Clock, Phone, Mail } from "lucide-react";

const OFFICE_PHOTOS = [
  { bg: "bg-[#8D9B8A]", wide: true },
  { bg: "bg-[#6B7A80]", wide: false },
  { bg: "bg-[#7A8B92]", wide: false },
];

const SITE_PHOTOS = [
  { bg: "bg-[#4A7A5A]", wide: true },
  { bg: "bg-[#5A7A6A]", wide: false },
  { bg: "bg-[#3A6A4A]", wide: false },
];

export function Contacts() {
  return (
    <section className="bg-white py-10 md:py-12 lg:py-16 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[220px_1fr_1fr] gap-8 lg:gap-10 items-start">
          {/* Left — contact info */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            <h2 className="text-[26px] sm:text-[32px] font-light text-[#0B1422] leading-tight">
              Наши <br className="hidden sm:block" />
              <span className="font-extrabold">КОНТАКТЫ</span>
            </h2>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <a
                  href="#"
                  className="text-[13px] text-[#2ECC71] hover:underline leading-snug"
                >
                  Москва, Большая Черёмушкинская улица, 1
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[13px] text-[#2ECC71]">
                    ПН-СБ с 10:00 до 19:00
                  </span>
                  <span className="text-[13px] text-[#2ECC71]">
                    Вс — выходной
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2ECC71] shrink-0" />
                <a
                  href="tel:+79180742375"
                  className="text-[16px] font-extrabold text-[#0B1422] hover:text-[#1B54B4] transition-colors"
                >
                  +7 (918) 074-23-75
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2ECC71] shrink-0" />
                <a
                  href="mailto:padel-courts@yandex.ru"
                  className="text-[13px] text-[#3D4F6A] hover:text-[#1B54B4] transition-colors"
                >
                  padel-courts@yandex.ru
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[13px] text-[#5A6A85]">Пишите, мы онлайн</p>
              <div className="flex items-center gap-3">
                {/* Telegram */}
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#29ABE2] flex items-center justify-center hover:opacity-80 transition-opacity"
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
                  className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
                {/* Viber */}
                <a
                  href="viber://chat"
                  className="w-10 h-10 rounded-full bg-[#7360F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M11.4 0C5.1.3.5 5.2.5 11.5c0 2.1.5 4.1 1.6 5.9L.5 24l6.8-1.6c1.7.9 3.6 1.4 5.5 1.4h.1c6.3 0 11-5.2 11-11.5C23.9 5.1 18.7 0 11.4 0zm5.8 16.3c-.3.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.3 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .5.4.2.5.7 1.7.8 1.8.1.1.1.3 0 .5-.1.1-.2.3-.3.4-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.3.1 1-.2 1.7z" />
                  </svg>
                </a>
              </div>
            </div>

            <a
              href="#"
              className="text-[14px] font-semibold text-[#2ECC71] hover:underline"
            >
              Реквизиты для юр. лиц
            </a>
          </div>

          {/* Middle — photos */}
          <div className="flex flex-col gap-6">
            {/* Office */}
            <div>
              <h3 className="text-[16px] font-bold text-[#0B1422] mb-3">
                До встречи в офисе
              </h3>
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-64">
                <div
                  className={`row-span-2 rounded-xl ${OFFICE_PHOTOS[0].bg}`}
                />
                <div className={`rounded-xl ${OFFICE_PHOTOS[1].bg}`} />
                <div className={`rounded-xl ${OFFICE_PHOTOS[2].bg}`} />
              </div>
            </div>

            {/* Site */}
            <div>
              <h3 className="text-[16px] font-bold text-[#0B1422] mb-3">
                До встречи у вас на объекте
              </h3>
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-64">
                <div className={`row-span-2 rounded-xl ${SITE_PHOTOS[0].bg}`} />
                <div className={`rounded-xl ${SITE_PHOTOS[1].bg}`} />
                <div className={`rounded-xl ${SITE_PHOTOS[2].bg}`} />
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
              <h3 className="text-[16px] font-bold text-[#0B1422]">
                Адрес офиса:
              </h3>
              <a
                href="https://yandex.ru/maps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-[#2ECC71] hover:underline"
              >
                Посмотреть схемы перехода
              </a>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#E2E8F0] h-80 sm:h-100 lg:h-135">
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
                className="absolute bottom-4 left-4 flex items-center gap-2 bg-white rounded-full px-4 py-2 text-[13px] font-semibold text-[#0B1422] shadow-md hover:shadow-lg transition-shadow"
              >
                <MapPin className="w-4 h-4 text-[#E63333]" />
                Открыть в Яндекс Картах
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
