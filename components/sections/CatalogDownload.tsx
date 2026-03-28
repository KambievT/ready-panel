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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1422] via-[#122248] to-[#1B54B4] py-16 md:py-24 lg:py-32">
      {/* Blurred background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#1B54B4]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-64 w-80 h-80 rounded-full bg-[#F5A41F]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1B54B4]/10 blur-3xl" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight">
            Скачайте полный прайс{" "}
            <span className="text-[#F5A41F]">прямо сейчас</span>
          </h2>

          <p className="text-[#94A3B8] text-lg lg:text-xl leading-relaxed max-w-lg">
            Telegram, WhatsApp, MAX или Email — выберите удобный способ и
            получите каталог с ценами за 30 секунд
          </p>

          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Controls row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Messenger dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="flex items-center gap-3 bg-white/10 border border-white/20 hover:border-white/40 rounded-2xl px-5 h-12 sm:h-14 text-[14px] sm:text-[15px] font-medium text-white transition-colors duration-150 w-full sm:w-auto sm:min-w-56 justify-between cursor-pointer backdrop-blur-sm"
                >
                  {messenger}
                  <ChevronDown
                    className={`w-4 h-4 text-white/60 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open && (
                  <ul className="absolute bottom-full left-0 mb-1.5 w-full bg-[#1a2744] border border-white/15 rounded-2xl shadow-lg overflow-hidden z-20">
                    {MESSENGERS.map((m) => (
                      <li key={m}>
                        <button
                          onClick={() => {
                            setMessenger(m);
                            setOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-[14px] hover:bg-white/10 transition-colors duration-100 cursor-pointer ${m === messenger ? "text-[#F5A41F] font-semibold" : "text-white/80"}`}
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
                className="flex-1 bg-white/10 border border-white/20 hover:border-white/40 focus:border-[#F5A41F] focus:outline-none rounded-2xl px-5 h-12 sm:h-14 text-[14px] sm:text-[15px] text-white placeholder:text-white/40 transition-colors duration-150 backdrop-blur-sm"
              />

              {/* CTA */}
              <Button className="animate-[ctaPulse_2s_ease-in-out_infinite] bg-[#F5A41F] hover:bg-[#e09518] text-[#0B1422] font-bold rounded-2xl h-12 sm:h-14 px-8 sm:px-10 text-[14px] sm:text-[15px] uppercase tracking-wide gap-2 shadow-lg shadow-[#F5A41F]/25 transition-all duration-150 shrink-0 hover:scale-[1.02]">
                Получить каталог
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Consent */}
            <label className="flex items-center gap-2.5 cursor-pointer w-fit">
              <span
                onClick={() => setAgreed((v) => !v)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors duration-150 ${agreed ? "bg-[#F5A41F] border-[#F5A41F]" : "bg-white/10 border-white/30"}`}
              >
                {agreed && <Check className="w-3 h-3 text-white stroke-3" />}
              </span>
              <span className="text-[13px] text-white/50">
                Согласен с условиями{" "}
                <a href="#" className="text-white/70 hover:underline">
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
                  fill="#F5A41F"
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
                  className="w-5 h-5 text-[#F5A41F] mb-0.5"
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
                <span className="text-[9px] font-bold text-white/70 leading-tight text-center">
                  Обновлён:
                  <br />
                  {UPDATED}
                </span>
              </div>
            </div>
          </div>

          {/* Book placeholder */}
          <div className="relative mt-8 w-full max-w-md aspect-4/3 max-h-[500px]">
            {/* Shadow */}
            <div className="absolute bottom-0 left-8 right-8 h-8 bg-[#F5A41F]/15 blur-xl rounded-full" />

            {/* Book cover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1a2744] to-[#0f1a30] shadow-2xl overflow-hidden flex flex-col items-start justify-end p-8 gap-2 border border-white/10">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5A41F]/15 rounded-bl-full" />

              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-bold text-[#F5A41F]/80 uppercase tracking-widest">
                  Каталог
                </span>
                <span className="text-[28px] font-extrabold text-white leading-tight tracking-tight">
                  Ready
                  <br />
                  <span className="text-[#F5A41F]">Padel</span>
                </span>
              </div>

              <div className="absolute bottom-4 right-6 flex flex-col items-end gap-1">
                <span className="text-[11px] text-white/50">
                  прайс-лист 2026
                </span>
                <div className="w-12 h-1 rounded-full bg-[#F5A41F]" />
              </div>
            </div>

            {/* Page stack effect */}
            <div className="absolute -right-2 top-2 bottom-2 w-4 bg-white/10 rounded-r-lg shadow-sm" />
            <div className="absolute -right-3.5 top-4 bottom-4 w-3 bg-white/5 rounded-r-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
