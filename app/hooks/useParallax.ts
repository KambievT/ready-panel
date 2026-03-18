"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight parallax: translates element on Y axis based on scroll position.
 * `speed` controls intensity — 0.05 is subtle, 0.15 is noticeable.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed = 0.08,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = window.innerHeight / 2;
        const offset = (center - viewCenter) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return ref;
}
