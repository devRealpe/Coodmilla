import type { Metadata } from "next";
import { Geist_Mono, Montserrat, Onest } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { PageBackground } from "@/components/shared/page-background";
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
      <body className="min-h-full flex flex-col bg-background text-foreground relative selection:bg-primary selection:text-primary-foreground font-sans bg-transparent">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageBackground />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
