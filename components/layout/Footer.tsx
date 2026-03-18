import Link from "next/link";
import { Check } from "lucide-react";

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
    <footer className="bg-[#0B1422] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[220px_1fr_1fr_1fr_1fr] gap-8 lg:gap-10">
          {/* Logo + social */}
          <div className="flex flex-col gap-8 col-span-2 sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="shrink-0 select-none">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
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

            <div className="w-full h-px bg-white/10" />

            {/* Social */}
            <div className="flex flex-col gap-3">
              <p className="text-[13px] text-white/50 font-medium">
                Мы в соцсетях
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#29ABE2] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-white">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[15px] text-white">Меню</h4>
            <ul className="flex flex-col gap-2.5">
              {MENU_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[15px] text-white">Услуги</h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advantages */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[15px] text-white">Преимущества</h4>
            <ul className="flex flex-col gap-2.5">
              {ADVANTAGES.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2ECC71] shrink-0 mt-0.5" />
                  <span className="text-[13px] text-white/60 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[15px] text-white">Информация</h4>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Перепечатка материалов сайта без письменного разрешения запрещена
            </p>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Вся информация размещенная на сайте носит ознакомительный характер
              и ни при каких условиях не является публичной офертой,
              определяемой положениями Статьи 437 ГК РФ.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/40 text-center sm:text-left">
            © Все права защищены
          </p>
          <Link
            href="#"
            className="text-[13px] text-[#2ECC71] hover:underline transition-colors"
          >
            Политика конфиденциальности
          </Link>
          <p className="text-[13px] text-white/40">
            Сделано с любовью в{" "}
            <a
              href="https://art-web.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2ECC71] hover:underline"
            >
              https://art-web.ru
            </a>{" "}
            2025
          </p>
        </div>
      </div>
    </footer>
  );
}
