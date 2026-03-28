import Link from "next/link";

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

export function Navbar() {
  return (
    <nav className="hidden lg:block bg-[#0B1422]/90 border-b border-white/10">
      <div className="mx-auto px-6 lg:px-10">
        <ul className="flex items-center gap-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative block px-4 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/70 hover:text-white transition-colors duration-150 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
