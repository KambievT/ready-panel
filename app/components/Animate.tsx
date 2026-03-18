"use client";

import { useAnimateOnScroll } from "@/app/hooks/useAnimateOnScroll";
import { useParallax } from "@/app/hooks/useParallax";

type Animation =
  | "fade-up"
  | "from-left"
  | "from-right"
  | "scale-in"
  | "stagger";

const CLASS_MAP: Record<Animation, string> = {
  "fade-up": "animate-on-scroll",
  "from-left": "animate-from-left",
  "from-right": "animate-from-right",
  "scale-in": "animate-scale-in",
  stagger: "stagger-children",
};

export function Animate({
  children,
  animation = "fade-up",
  className = "",
  delay = 0,
  threshold = 0.15,
}: {
  children: React.ReactNode;
  animation?: Animation;
  className?: string;
  delay?: number;
  threshold?: number;
}) {
  const ref = useAnimateOnScroll<HTMLDivElement>(threshold);

  return (
    <div
      ref={ref}
      className={`${CLASS_MAP[animation]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function Parallax({
  children,
  speed = 0.08,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useParallax<HTMLDivElement>(speed);

  return (
    <div ref={ref} className={`parallax-slow ${className}`}>
      {children}
    </div>
  );
}
