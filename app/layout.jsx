import "./globals.css";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import { RESTAURANT } from "@/lib/constants";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: `Кафе «${RESTAURANT.nameLocal}» · Премиальный ресторан в ${RESTAURANT.cityRu}`,
  description:
    `Кафе ${RESTAURANT.nameLocal} (${RESTAURANT.name}) — премиальный ресторан в ${RESTAURANT.cityRu}, ${RESTAURANT.region}. Бронирование стола онлайн.`,
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFBF7" },
    { media: "(prefers-color-scheme: dark)",  color: "#1A0E10" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${sans.variable} ${display.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                const savedLocale = localStorage.getItem('locale');
                if (savedLocale === 'ru' || savedLocale === 'ky') {
                  document.documentElement.lang = savedLocale;
                }
              } catch (_) {}
            `,
          }}
        />
        {/* JivoChat Configuration - Force Russian (ru) Language */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.jivo_config = { locale: 'ru' };
            `,
          }}
        />
      </head>
      <body className="font-sans bg-ivory dark:bg-[#1A0E10] text-stone-800 dark:text-[#FDF6E2] antialiased min-h-screen overflow-x-clip transition-colors duration-300">
        {/* ── Ambient backdrop — warm, blurred, burgundy wash ──── */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {/* Top-left deep burgundy bloom */}
          <div
            className="absolute -top-40 -left-32 w-[640px] h-[640px] rounded-full opacity-60 blur-3xl animate-ambient-drift transition-all duration-500"
            style={{ background: "radial-gradient(circle, var(--blob-1, rgba(92,26,27,0.22)), transparent 65%)" }}
          />
          {/* Right wine wash */}
          <div
            className="absolute top-1/3 -right-48 w-[560px] h-[560px] rounded-full opacity-55 blur-3xl animate-ambient-drift transition-all duration-500"
            style={{
              background: "radial-gradient(circle, var(--blob-2, rgba(142,37,48,0.18)), transparent 65%)",
              animationDelay: "-6s",
            }}
          />
          {/* Bottom soft rose */}
          <div
            className="absolute -bottom-32 left-1/4 w-[480px] h-[480px] rounded-full opacity-50 blur-3xl animate-ambient-drift transition-all duration-500"
            style={{
              background: "radial-gradient(circle, var(--blob-3, rgba(220,119,128,0.28)), transparent 65%)",
              animationDelay: "-12s",
            }}
          />
          {/* Very subtle paper-grain — multiplies into the ivory for warmth */}
          <div
            className="absolute inset-0 bg-noise transition-all duration-500"
            style={{
              opacity: "var(--noise-opacity, 0.03)",
              mixBlendMode: "var(--noise-blend, multiply)",
            }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}
