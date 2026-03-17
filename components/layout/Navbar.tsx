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
    <nav className="hidden lg:block bg-[#F7F8FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center gap-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative block px-4 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4A5568] hover:text-[#1B54B4] transition-colors duration-150 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1B54B4] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
