"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MapPin, Download, Phone, LogOut, PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/stores/auth";

const SOCIAL_LINKS = [
  {
    label: "Telegram",
    href: "#",
    color: "#29a9eb",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    color: "#25d366",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "MAX",
    href: "#",
    color: "#168ACD",
    icon: (
      <Image
        src="https://tse2.mm.bing.net/th/id/OIP.QQeajKsm_ie74ITrD5qoAgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="MAX"
        width={20}
        height={20}
        className="w-5 h-5 rounded-sm"
      />
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
  const { isAuthenticated, editMode, logout, toggleEditMode } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Shift+Alt+A → login page
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.altKey && e.code === "KeyA") {
        e.preventDefault();
        router.push("/login");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [router]);

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMenuVisible(true));
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuVisible(false);
    closeTimer.current = setTimeout(() => setMenuOpen(false), 350);
  }, []);

  const toggleMenu = useCallback(() => {
    if (menuOpen && menuVisible) closeMenu();
    else openMenu();
  }, [menuOpen, menuVisible, openMenu, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="bg-[#0B1422] text-white border-b border-white/5">
      {/* ── Desktop: Main bar ── */}
      <div className="mx-auto hidden lg:flex items-center gap-6 px-6 lg:px-10 h-20">
        {/* Logo */}
        <Link href="/" className="shrink-0 select-none">
          <span className="text-[32px] font-extrabold italic tracking-tight">
            <span className="text-[#F5A41F]">READY</span>
            <span className="text-[#1B54B4]"> PADEL</span>
          </span>
        </Link>

        {/* Address (next to logo) */}
        <div className="flex items-center gap-2 shrink-0 ml-4">
          <MapPin className="w-3.5 h-3.5 text-[#F5A41F] shrink-0" />
          <span className="text-[13px] text-white/60">
            г. Тольятти, ул. Коммунальная улица 20с7
          </span>
        </div>

        <div className="flex-1" />

        {/* CTA Button */}
        <Button className="bg-[#1B54B4] hover:bg-[#1648a0] active:bg-[#12408f] text-white font-semibold rounded-xl px-5 h-10 text-[14px] shrink-0 gap-2 shadow-none transition-colors duration-150">
          <Download className="w-3.75 h-3.75 shrink-0" />
          Скачать каталог с ценами
        </Button>

        {/* Callback Button */}
        <Button
          variant="outline"
          className="border-[#1B54B4]/60 bg-transparent text-white hover:bg-[#1B54B4]/15 hover:text-white hover:border-[#1B54B4] rounded-xl h-10 px-4 text-[14px] shrink-0 shadow-none transition-colors duration-150"
        >
          Заказать звонок
        </Button>

        {/* Admin controls — only visible when authenticated */}
        {isAuthenticated && (
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleEditMode}
              title={
                editMode ? "Выключить редактирование" : "Режим редактирования"
              }
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-150 ${
                editMode
                  ? "bg-[#F5A41F]/20 text-[#F5A41F] hover:bg-[#F5A41F]/30"
                  : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              <PencilLine className="w-4 h-4" />
            </button>
            <button
              onClick={logout}
              title="Выйти"
              className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-red-500/15 hover:text-red-400 transition-colors duration-150"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* ── Desktop: Info bar ── */}
      <div className="hidden lg:block border-t border-white/5 bg-[#0B1422]">
        <div className="mx-auto flex items-center gap-6 px-6 lg:px-10 h-10">
          <div className="flex-1" />

          {/* Messengers */}
          <div className="flex items-center gap-2.5 shrink-0">
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
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-opacity duration-150 hover:opacity-80"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-px h-5 bg-white/10 shrink-0" />

          {/* Email */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[13px] text-white/50">
              info@readypadel.ru
            </span>
          </div>

          <div className="w-px h-5 bg-white/10 shrink-0" />

          {/* Phone */}
          <div className="flex items-center gap-2 shrink-0">
            <Phone className="w-3.5 h-3.5 text-[#F5A41F] shrink-0" />
            <span className="text-[13px] text-white/50">Пн–Пт: 9:00–19:00</span>
            <a
              href="tel:+79372159290"
              className="text-white font-bold text-[16px] tracking-wide hover:text-[#F5A41F] transition-colors duration-150"
            >
              +7 (937) 215-92-90
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
            href="tel:+79372159290"
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"
            aria-label="Позвонить"
          >
            <Phone className="w-5 h-5 text-[#F5A41F]" />
          </a>

          {/* Burger */}
          <button
            onClick={toggleMenu}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center relative"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <div className="w-5 h-5 relative flex flex-col items-center justify-center">
              <span
                className={`block absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-out ${
                  menuVisible ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-out ${
                  menuVisible
                    ? "opacity-0 scale-x-0"
                    : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-out ${
                  menuVisible ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile menu overlay ── */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-50">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-[#0B1422]/95 backdrop-blur-sm transition-opacity duration-300 ${
              menuVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          />

          {/* Panel */}
          <div
            className={`relative h-full overflow-y-auto transition-all duration-350 ease-out ${
              menuVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="px-4 py-6 space-y-6">
              {/* Nav links */}
              <nav>
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, i) => (
                    <li
                      key={link.href}
                      className="transition-all duration-300 ease-out"
                      style={{
                        transitionDelay: menuVisible
                          ? `${60 + i * 40}ms`
                          : "0ms",
                        opacity: menuVisible ? 1 : 0,
                        transform: menuVisible
                          ? "translateX(0)"
                          : "translateX(-12px)",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-[15px] font-semibold uppercase tracking-wide text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Divider */}
              <div
                className="h-px bg-white/10 transition-all duration-300"
                style={{
                  transitionDelay: menuVisible ? "350ms" : "0ms",
                  opacity: menuVisible ? 1 : 0,
                  transform: menuVisible ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }}
              />

              {/* Phone */}
              <div
                className="flex items-center gap-3 px-4 transition-all duration-300"
                style={{
                  transitionDelay: menuVisible ? "380ms" : "0ms",
                  opacity: menuVisible ? 1 : 0,
                  transform: menuVisible ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#F5A41F]" />
                </div>
                <div className="leading-tight">
                  <p className="text-white/50 text-[11px] uppercase tracking-widest">
                    Пн–Пт: 9:00–19:00
                  </p>
                  <a
                    href="tel:+79372159290"
                    className="text-white font-bold text-[17px] tracking-wide"
                  >
                    +7 (937) 215-92-90
                  </a>
                </div>
              </div>

              {/* Address */}
              <div
                className="flex items-center gap-3 px-4 transition-all duration-300"
                style={{
                  transitionDelay: menuVisible ? "420ms" : "0ms",
                  opacity: menuVisible ? 1 : 0,
                  transform: menuVisible ? "translateY(0)" : "translateY(8px)",
                }}
              >
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
              <div
                className="h-px bg-white/10 transition-all duration-300"
                style={{
                  transitionDelay: menuVisible ? "450ms" : "0ms",
                  opacity: menuVisible ? 1 : 0,
                  transform: menuVisible ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }}
              />

              {/* Messengers */}
              <div
                className="flex items-center gap-3 px-4 transition-all duration-300"
                style={{
                  transitionDelay: menuVisible ? "480ms" : "0ms",
                  opacity: menuVisible ? 1 : 0,
                  transform: menuVisible ? "translateY(0)" : "translateY(8px)",
                }}
              >
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
                      className="w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="space-y-3 px-4 transition-all duration-300"
                style={{
                  transitionDelay: menuVisible ? "520ms" : "0ms",
                  opacity: menuVisible ? 1 : 0,
                  transform: menuVisible ? "translateY(0)" : "translateY(12px)",
                }}
              >
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

                {/* Admin controls — only visible when authenticated */}
                {isAuthenticated && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        toggleEditMode();
                        closeMenu();
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 h-12 rounded-xl text-[14px] font-semibold transition-colors duration-150 ${
                        editMode
                          ? "bg-[#F5A41F]/20 text-[#F5A41F]"
                          : "bg-white/5 text-white/60 hover:bg-white/10"
                      }`}
                    >
                      <PencilLine className="w-4 h-4" />
                      {editMode ? "Ред. включено" : "Редактировать"}
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        closeMenu();
                      }}
                      className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors duration-150"
                      aria-label="Выйти"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
