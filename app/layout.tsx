import type { Metadata } from "next";
import { Geist_Mono, Montserrat, Onest } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const onest = Onest({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coodmilla — Minería e Ingeniería",
  description:
    "Minería con propósito. En Coodmilla integramos tecnología, seguridad y sostenibilidad para desarrollar proyectos mineros que generan valor real.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${onest.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative selection:bg-primary selection:text-primary-foreground font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ambient Background Effects */}
          <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[140px]"></div>
            <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
