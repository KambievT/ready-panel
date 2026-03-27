"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Phone } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060d18]">
      {/* Large ambient glow behind the "404" */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-225 h-150 rounded-full bg-[#1B54B4]/7 blur-[160px]" />
      <div className="pointer-events-none absolute top-[20%] right-[10%] w-80 h-80 rounded-full bg-[#F5A41F]/4 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[5%] w-60 h-60 rounded-full bg-[#1B54B4]/5 blur-[100px]" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 w-full max-w-3xl mx-auto">
        {/* Big "404" as background element */}
        <div className="relative flex items-center justify-center">
          <span className="text-[200px] sm:text-[280px] md:text-[340px] lg:text-[400px] font-black leading-none tracking-tighter text-white/3 select-none">
            404
          </span>

          {/* Padel ball overlay, centered on the "404" */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-linear-to-br from-[#F5A41F] via-[#f0a020] to-[#d48a08] flex items-center justify-center shadow-[0_0_120px_rgba(245,164,31,0.25)] animate-[bounce_4s_ease-in-out_infinite]">
                {/* Inner ring */}
                <div className="absolute inset-3 sm:inset-4 rounded-full border-[2.5px] border-white/15" />
                {/* Curved seam line */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full opacity-15"
                  fill="none"
                >
                  <path
                    d="M 25 15 Q 50 45 30 85"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 75 15 Q 50 45 70 85"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* Ground shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#F5A41F]/6 rounded-full blur-md animate-[pulse_4s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="-mt-8 sm:-mt-12 md:-mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Страница не найдена
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
            Похоже, мяч улетел за пределы корта. Такой страницы не существует
            или она была перемещена.
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-[#1B54B4] hover:bg-[#2463cc] rounded-xl px-8 py-4 text-base font-bold text-white transition-colors shadow-[0_4px_24px_rgba(27,84,180,0.3)]"
          >
            <Home className="w-5 h-5" />
            На главную
          </Link>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2.5 bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl px-8 py-4 text-base font-semibold text-white/80 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад
          </button>
        </div>

        {/* Divider */}
        <div className="mt-16 w-16 h-px bg-white/10" />

        {/* Contact hint */}
        <p className="mt-6 text-sm text-white/25 flex items-center gap-2">
          Нужна помощь?
          <a
            href="tel:+79180742375"
            className="inline-flex items-center gap-1.5 text-[#F5A41F]/60 hover:text-[#F5A41F] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            +7 (918) 074-23-75
          </a>
        </p>
      </div>
    </section>
  );
}
