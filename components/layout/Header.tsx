"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Download, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
  {
    label: "Telegram",
    href: "#",
    color: "#29a9eb",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4.5 h-4.5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    color: "#25d366",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4.5 h-4.5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Viber",
    href: "#",
    color: "#7e57c2",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4.5 h-4.5">
        <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.03 4.453.36 7.34.285 10.5c-.074 3.16-.17 9.08 5.557 10.702h.005l-.003 2.45s-.038.97.602 1.166c.77.24 1.222-.494 1.958-1.286.403-.44.96-1.084 1.38-1.572 3.8.32 6.72-.41 7.054-.518.768-.25 5.115-.805 5.823-6.569.73-5.94-.356-9.687-2.304-11.388l-.001-.002c-.567-.512-2.85-2.187-7.957-2.48 0 0-.373-.023-.998-.001zm.06 1.81c.527-.002.848.02.848.02 4.28.247 6.32 1.62 6.79 2.045 1.664 1.45 2.566 4.77 1.938 9.94-.588 4.843-4.013 5.145-4.657 5.35-.276.09-2.938.747-6.19.54 0 0-2.455 2.96-3.222 3.73-.121.124-.263.173-.359.149-.133-.035-.17-.197-.168-.435l.02-3.638s-.003-.022-.005-.022C1.63 18.15 1.708 13.14 1.771 10.54c.063-2.598.606-5.088 2.28-6.763C6.222 1.89 9.882 1.638 11.457 1.812zm.424 2.28c-.286-.002-.574.01-.863.037-1.12.1-2.057.464-2.788 1.082-1.025.866-1.59 2.21-1.654 4-.007.19.14.35.33.357.19.007.35-.14.357-.33.056-1.58.533-2.716 1.38-3.436.684-.578 1.61-.873 2.763-.906.19-.005.34-.165.334-.354-.005-.19-.165-.34-.354-.334-.17.004-.34.01-.505.012l-.001-.127zm-.004 1.647l-.004.001a.348.348 0 0 0-.007.696 3.565 3.565 0 0 1 3.154 3.22.348.348 0 1 0 .693-.075 4.262 4.262 0 0 0-3.836-3.842zm-3.884.592a1.428 1.428 0 0 0-.58.127c-.272.11-.84.476-.948.822-.054.175-.08.37-.08.48 0 .22.046.505.14.764.187.52.623 1.337 1.347 2.084.724.748 1.742 1.478 3.282 1.861.36.093.65.14.893.14.302 0 .538-.072.726-.196.338-.22.686-.793.784-1.056a.865.865 0 0 0 .034-.504.623.623 0 0 0-.205-.308c-.25-.193-.935-.567-1.28-.731-.346-.164-.624-.102-.82.15l-.287.364a.539.539 0 0 1-.557.175c-.38-.104-1.237-.657-1.797-1.244-.56-.587-1.07-1.422-1.167-1.804a.54.54 0 0 1 .191-.554l.36-.287c.254-.196.308-.477.148-.82-.165-.344-.54-1.026-.733-1.277a.624.624 0 0 0-.322-.207 1.09 1.09 0 0 0-.129-.009zm4.918.4a.348.348 0 0 0-.347.333 2.32 2.32 0 0 1-2.197 2.197.348.348 0 0 0 .032.695.348.348 0 0 0 .03 0 3.016 3.016 0 0 0 2.855-2.855.348.348 0 0 0-.334-.368l-.039-.002z" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: "Главная", href: "/" },
  { label: "Топ продаж", href: "/top" },
  { label: "Каталог", href: "/catalog" },
  { label: "Падел для бизнеса", href: "/business" },
  { label: "Стоимость услуг", href: "/pricing" },
  { label: "Процесс", href: "/process" },
  { label: "О компании", href: "/about" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/contacts" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="bg-[#0B1422] text-white border-b border-white/5">
      {/* ── Desktop: Main bar ── */}
      <div className="max-w-7xl mx-auto hidden lg:flex items-center gap-6 px-6 h-20">
        {/* Logo */}
        <Link href="/" className="shrink-0 select-none">
          <span className="text-[22px] font-extrabold italic tracking-tight">
            <span className="text-[#F5A41F]">READY</span>
            <span className="text-[#1B54B4]"> PADEL</span>
          </span>
        </Link>

        <div className="flex-1" />

        {/* CTA Button */}
        <Button className="bg-[#1B54B4] hover:bg-[#1648a0] active:bg-[#12408f] text-white font-semibold rounded-xl px-5 h-10 text-[13px] shrink-0 gap-2 shadow-none transition-colors duration-150">
          <Download className="w-3.75 h-3.75 shrink-0" />
          Скачать каталог с ценами
        </Button>

        {/* Callback Button */}
        <Button
          variant="outline"
          className="border-[#1B54B4]/60 bg-transparent text-white hover:bg-[#1B54B4]/15 hover:text-white hover:border-[#1B54B4] rounded-xl h-10 px-4 text-[13px] shrink-0 shadow-none transition-colors duration-150"
        >
          Заказать звонок
        </Button>
      </div>

      {/* ── Desktop: Info bar ── */}
      <div className="hidden lg:block border-t border-white/5 bg-[#0B1422]">
        <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 h-10">
          {/* Address */}
          <div className="flex items-center gap-2 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#F5A41F] shrink-0" />
            <span className="text-[12px] text-white/60">
              г. Тольятти, ул. Коммунальная улица 20с7
            </span>
          </div>

          <div className="flex-1" />

          {/* Messengers */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="text-[10px] text-white/40 uppercase tracking-widest">
              Онлайн
            </span>
            <div className="flex items-center gap-1.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  style={{ backgroundColor: link.color }}
                  className="w-6 h-6 rounded-md flex items-center justify-center transition-opacity duration-150 hover:opacity-80"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-px h-5 bg-white/10 shrink-0" />

          {/* Phone */}
          <div className="flex items-center gap-2 shrink-0">
            <Phone className="w-3.5 h-3.5 text-[#F5A41F] shrink-0" />
            <span className="text-[11px] text-white/50">Пн–Пт: 9:00–19:00</span>
            <a
              href="tel:+79180742375"
              className="text-white font-bold text-[14px] tracking-wide hover:text-[#F5A41F] transition-colors duration-150"
            >
              +7 (918) 074-23-75
            </a>
          </div>
        </div>
      </div>

      {/* ── Mobile header ── */}
      <div className="flex lg:hidden items-center justify-between px-4 h-14">
        {/* Logo */}
        <Link href="/" className="shrink-0 select-none">
          <span className="text-[20px] font-extrabold italic tracking-tight">
            <span className="text-[#F5A41F]">READY</span>
            <span className="text-[#1B54B4]"> PADEL</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Phone shortcut */}
          <a
            href="tel:+79180742375"
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"
            aria-label="Позвонить"
          >
            <Phone className="w-5 h-5 text-[#F5A41F]" />
          </a>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu overlay ── */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-50 bg-[#0B1422] overflow-y-auto">
          <div className="px-4 py-6 space-y-6">
            {/* Nav links */}
            <nav>
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 text-[15px] font-semibold uppercase tracking-wide text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Phone */}
            <div className="flex items-center gap-3 px-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#F5A41F]" />
              </div>
              <div className="leading-tight">
                <p className="text-white/50 text-[11px] uppercase tracking-widest">
                  Пн–Пт: 9:00–19:00
                </p>
                <a
                  href="tel:+79180742375"
                  className="text-white font-bold text-[17px] tracking-wide"
                >
                  +7 (918) 074-23-75
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 px-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#F5A41F]" />
              </div>
              <div className="leading-tight">
                <p className="text-white/50 text-[11px] uppercase tracking-widest mb-0.5">
                  Адрес
                </p>
                <p className="text-white text-[14px] font-medium">
                  г. Тольятти, ул. Коммунальная улица 20с7,
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Messengers */}
            <div className="flex items-center gap-3 px-4">
              <span className="text-[11px] text-white/40 uppercase tracking-widest">
                Онлайн
              </span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    style={{ backgroundColor: link.color }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 px-4">
              <Button className="w-full bg-[#1B54B4] hover:bg-[#1648a0] text-white font-semibold rounded-xl h-12 text-[14px] gap-2 shadow-none">
                <Download className="w-4 h-4 shrink-0" />
                Скачать каталог с ценами
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#1B54B4]/60 bg-transparent text-white hover:bg-[#1B54B4]/15 hover:text-white hover:border-[#1B54B4] rounded-xl h-12 text-[14px] shadow-none"
              >
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
