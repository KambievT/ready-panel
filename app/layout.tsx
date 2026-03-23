import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/app/stores/auth";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ready-padel.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ready Padel — Корты для падел-тенниса под ключ",
    template: "%s | Ready Padel",
  },
  description:
    "Производство и монтаж падел-кортов под ключ в России. Профессиональные корты для падел-тенниса: открытые, закрытые, панорамные. Гарантия качества, сервис и поставка оборудования.",
  keywords: [
    "падел корт",
    "падел теннис",
    "купить падел корт",
    "монтаж падел корта",
    "padel court",
    "строительство падел корта",
    "падел корт под ключ",
    "падел корт цена",
    "падел оборудование",
  ],
  authors: [{ name: "Ready Padel", url: SITE_URL }],
  creator: "Ready Padel",
  publisher: "Ready Padel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Ready Padel",
    title: "Ready Padel — Корты для падел-тенниса под ключ",
    description:
      "Производство и монтаж падел-кортов под ключ в России. Профессиональные корты: открытые, закрытые, панорамные.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ready Padel — корты для падел-тенниса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ready Padel — Корты для падел-тенниса под ключ",
    description:
      "Производство и монтаж падел-кортов под ключ в России. Профессиональные корты: открытые, закрытые, панорамные.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1B54B4" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
