"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Download, X } from "lucide-react";

export function SideWidget() {
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClose = () => {
    setVisible(false);
    timeoutRef.current = setTimeout(() => setOpen(false), 300);
  };

  const handleOpen = () => {
    setOpen(true);
    // small delay so the DOM renders before we trigger the transition
    requestAnimationFrame(() => setVisible(true));
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!open) {
    return (
      <button
        onClick={handleOpen}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#1B54B4] hover:bg-[#1644a0] text-white rounded-l-xl p-3 shadow-lg transition-all duration-300 cursor-pointer animate-[slideInRight_0.3s_ease-out]"
        aria-label="Открыть меню"
      >
        <Phone className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2.5 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10 pointer-events-none"
      }`}
    >
      {" "}
      {/* Close button */}
      <button
        onClick={handleClose}
        className="w-10 h-10 rounded-full bg-[#F5A41F] hover:bg-[#e0930a] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        aria-label="Закрыть"
      >
        <X className="w-5 h-5" strokeWidth={2.5} />
      </button>
      {/* Buttons */}
      <div className="flex flex-col gap-2.5">
        {/* Вызвать инженера */}
        <a
          href="tel:+79180742375"
          className="flex flex-col items-center gap-1.5 bg-[#1B54B4] hover:bg-[#1644a0] text-white rounded-2xl px-4 py-3.5 shadow-lg transition-colors w-32.5"
        >
          <Phone className="w-6 h-6" />
          <span className="text-xs font-bold leading-tight text-center">
            Вызвать
            <br />
            инженера
          </span>
        </a>

        {/* Скачать прайс */}
        <a
          href="#"
          className="flex flex-col items-center gap-1.5 bg-[#1B54B4] hover:bg-[#1644a0] text-white rounded-2xl px-4 py-3.5 shadow-lg transition-colors w-32.5"
        >
          <Download className="w-6 h-6" />
          <span className="text-xs font-bold leading-tight text-center">
            Скачать
            <br />
            прайс
          </span>
        </a>

        {/* Написать в Telegram */}
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 bg-[#1B54B4] hover:bg-[#1644a0] text-white rounded-2xl px-4 py-3.5 shadow-lg transition-colors w-32.5"
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          <span className="text-xs font-bold leading-tight text-center">
            Написать в<br />
            Telegram
          </span>
        </a>
      </div>
    </div>
  );
}
