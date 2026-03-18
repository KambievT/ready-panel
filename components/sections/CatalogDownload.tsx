"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const MESSENGERS = [
  "Получить в Telegram",
  "Получить в WhatsApp",
  "Получить в Viber",
  "Получить на Email",
];

const UPDATED = "17.3.2026";

export function CatalogDownload() {
  const [messenger, setMessenger] = useState(MESSENGERS[0]);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(true);

  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-12 md:py-16 lg:py-20 border-b border-[#E2E8F0]">
      {/* Blurred background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#1B54B4]/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-64 w-80 h-80 rounded-full bg-[#F5A41F]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[44px] font-extrabold text-[#0B1422] leading-[1.1] tracking-tight">
            Скачайте полный{" "}
            <span className="text-[#1B54B4]">прайс-каталог</span> с ценами и
            характеристиками
          </h2>

          <div className="flex flex-col gap-4 sm:gap-5">
            <p className="text-[#4A5568] text-base lg:text-lg">
              Выберите куда вам удобнее отправить каталог?
            </p>

            {/* Controls row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Messenger dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="flex items-center gap-3 bg-white border border-[#CBD5E0] hover:border-[#1B54B4] rounded-2xl px-5 h-12 sm:h-14 text-[14px] sm:text-[15px] font-medium text-[#2D3748] transition-colors duration-150 w-full sm:w-auto sm:min-w-56 justify-between cursor-pointer"
                >
                  {messenger}
                  <ChevronDown
                    className={`w-4 h-4 text-[#718096] transition-transform duration-150 ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open && (
                  <ul className="absolute top-full left-0 mt-1.5 w-full bg-white border border-[#E2E8F0] rounded-2xl shadow-lg overflow-hidden z-20">
                    {MESSENGERS.map((m) => (
                      <li key={m}>
                        <button
                          onClick={() => {
                            setMessenger(m);
                            setOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] hover:bg-[#F0F4FB] transition-colors duration-100 cursor-pointer ${m === messenger ? "text-[#1B54B4] font-semibold" : "text-[#2D3748]"}`}
                        >
                          {m}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Phone input */}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ваш номер телефона"
                className="flex-1 bg-white border border-[#CBD5E0] hover:border-[#1B54B4] focus:border-[#1B54B4] focus:outline-none rounded-2xl px-5 h-12 sm:h-14 text-[14px] sm:text-[15px] text-[#2D3748] placeholder:text-[#A0AEC0] transition-colors duration-150"
              />

              {/* CTA */}
              <Button className="bg-[#1B54B4] hover:bg-[#1648a0] text-white font-bold rounded-2xl h-12 sm:h-14 px-6 sm:px-8 text-[13px] sm:text-[14px] uppercase tracking-wide gap-2 shadow-none transition-colors duration-150 shrink-0">
                Получить каталог
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Consent */}
            <label className="flex items-center gap-2.5 cursor-pointer w-fit">
              <span
                onClick={() => setAgreed((v) => !v)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors duration-150 ${agreed ? "bg-[#1B54B4] border-[#1B54B4]" : "bg-white border-[#CBD5E0]"}`}
              >
                {agreed && <Check className="w-3 h-3 text-white stroke-3" />}
              </span>
              <span className="text-[13px] text-[#718096]">
                Согласен с условиями{" "}
                <a href="#" className="text-[#1B54B4] hover:underline">
                  политики конфиденциальности данных
                </a>
              </span>
            </label>
          </div>
        </div>

        {/* Right — catalog visual */}
        <div className="flex justify-center items-center relative order-first lg:order-none">
          {/* Updated badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1 select-none">
            <div className="relative w-24 h-24">
              {/* Rotating PDF text ring */}
              <svg
                viewBox="0 0 96 96"
                className="w-24 h-24 animate-[spin_12s_linear_infinite]"
              >
                <path id="circle" d="M48,12 a36,36 0 1,1 -0.01,0" fill="none" />
                <text
                  fontSize="8.5"
                  fill="#94A3B8"
                  letterSpacing="3.5"
                  fontWeight="600"
                >
                  <textPath href="#circle">
                    pdf · pdf · pdf · pdf · pdf ·{" "}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#1B54B4] mb-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="text-[9px] font-bold text-[#475569] leading-tight text-center">
                  Обновлён:
                  <br />
                  {UPDATED}
                </span>
              </div>
            </div>
          </div>

          {/* Book placeholder */}
          <div className="relative mt-8 w-full max-w-md aspect-4/3">
            {/* Shadow */}
            <div className="absolute bottom-0 left-8 right-8 h-8 bg-black/10 blur-xl rounded-full" />

            {/* Book cover */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#E8EEF8] to-[#C8D5EE] shadow-2xl overflow-hidden flex flex-col items-start justify-end p-8 gap-2">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1B54B4]/10 rounded-bl-full" />

              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-bold text-[#1B54B4]/60 uppercase tracking-widest">
                  Каталог
                </span>
                <span className="text-[28px] font-extrabold text-[#0B1422] leading-tight tracking-tight">
                  Ready
                  <br />
                  <span className="text-[#1B54B4]">Padel</span>
                </span>
              </div>

              <div className="absolute bottom-4 right-6 flex flex-col items-end gap-1">
                <span className="text-[11px] text-[#718096]">
                  прайс-лист 2026
                </span>
                <div className="w-12 h-1 rounded-full bg-[#F5A41F]" />
              </div>
            </div>

            {/* Page stack effect */}
            <div className="absolute -right-2 top-2 bottom-2 w-4 bg-white/60 rounded-r-lg shadow-sm" />
            <div className="absolute -right-3.5 top-4 bottom-4 w-3 bg-white/40 rounded-r-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
