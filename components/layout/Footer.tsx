import Link from "next/link";
import { Check, Phone, Mail, MapPin } from "lucide-react";

const MENU_LINKS = [
  { label: "Каталог", href: "#" },
  { label: "Преимущества", href: "#" },
  { label: "Акции", href: "#" },
  { label: "Процесс", href: "#" },
  { label: "О компании", href: "#" },
  { label: "Частые вопросы", href: "#" },
  { label: "Контакты", href: "#" },
];

const SERVICE_LINKS = [
  { label: "Консультация", href: "#" },
  { label: "Доставка и оплата", href: "#" },
];

const ADVANTAGES = [
  "Собственное производство в Китае",
  "Корты всегда в наличии",
  "Монтаж кортов от 3 дней",
  "Гарантия до 10 лет",
  "Возьмемся за проект любой сложности",
  "Строим целые здания под падел",
];

export function Footer() {
  return (
    <footer className="bg-[#0B1422] text-white relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#1B54B4]/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#F5A41F]/5 blur-3xl" />

      {/* CTA banner */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
            <div className="flex-1">
              <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold leading-tight tracking-tight">
                Готовы обсудить ваш проект?
              </h3>
              <p className="text-[15px] text-white/50 mt-2">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+79180742375"
                className="inline-flex items-center gap-2.5 bg-[#1B54B4] hover:bg-[#1B54B4]/80 rounded-xl px-5 py-3 text-[15px] font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 (918) 074-23-75
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-5 py-3 text-[14px] font-semibold transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-[#29ABE2]">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Logo + contacts */}
          <div className="flex flex-col gap-7 col-span-2 sm:col-span-2 lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="shrink-0 select-none">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/8 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#1B54B4] flex items-center justify-center shrink-0">
                  <span className="text-white font-extrabold text-[14px] leading-none">
                    RP
                  </span>
                </div>
                <span className="text-[20px] font-extrabold italic tracking-tight leading-none">
                  <span className="text-[#F5A41F]">READY</span>
                  <br />
                  <span className="text-[#2ECC71]">PADEL</span>
                </span>
              </div>
            </Link>

            {/* Contact details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5A41F] shrink-0" />
                <span className="text-[13px] text-white/60 leading-snug">
                  Москва, Большая Черёмушкинская улица, 1
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F5A41F] shrink-0" />
                <a
                  href="mailto:padel-courts@yandex.ru"
                  className="text-[13px] text-white/60 hover:text-white transition-colors"
                >
                  padel-courts@yandex.ru
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center hover:bg-[#29ABE2] hover:border-[#29ABE2] transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="viber://chat"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center hover:bg-[#7360F2] hover:border-[#7360F2] transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M11.4 0C5.1.3.5 5.2.5 11.5c0 2.1.5 4.1 1.6 5.9L.5 24l6.8-1.6c1.7.9 3.6 1.4 5.5 1.4h.1c6.3 0 11-5.2 11-11.5C23.9 5.1 18.7 0 11.4 0zm5.8 16.3c-.3.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.3-1.7-1.3-3.3 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .5.4.2.5.7 1.7.8 1.8.1.1.1.3 0 .5-.1.1-.2.3-.3.4-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.3.1 1-.2 1.7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest text-white/30 font-bold">
              Меню
            </h4>
            <ul className="flex flex-col gap-2.5">
              {MENU_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest text-white/30 font-bold">
              Услуги
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advantages */}
          <div className="flex flex-col gap-4 col-span-2 lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-widest text-white/30 font-bold">
              Почему мы
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {ADVANTAGES.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#2ECC71]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#2ECC71]" />
                  </div>
                  <span className="text-[13px] text-white/60 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-[13px] text-white/30">
              © 2025 Ready Padel. Все права защищены.
            </p>
            <span className="hidden sm:inline text-white/15">|</span>
            <Link
              href="#"
              className="text-[13px] text-white/40 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[12px] text-white/25">
              Информация на сайте не является публичной офертой (ст. 437 ГК РФ)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
