import type { Metadata } from "next";
import { Geist_Mono, Montserrat, Onest } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { PageBackground } from "@/components/shared/page-background";
import "./globals.css";

export const revalidate = 60;

const onest = Onest({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.coodmilla.com").replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Coodmilla — Cooperativa de Minería Responsable",
    template: "%s | Coodmilla",
  },
  description:
    "Descubre Coodmilla: Transformamos la industria con minería responsable, tecnología avanzada y desarrollo sostenible en La Llanada, Nariño. ¡Conoce nuestros proyectos!",
  keywords: ["Coodmilla", "minería responsable", "cooperativa minera", "sostenibilidad", "La Llanada", "Nariño", "minería segura", "oro sostenible"],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Coodmilla",
    title: "Coodmilla — Cooperativa de Minería Responsable",
    description:
      "Descubre cómo en Coodmilla integramos tecnología y sostenibilidad para desarrollar proyectos mineros de impacto positivo en Nariño.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coodmilla — Minería Responsable y con Propósito",
    description: "Impulsando el desarrollo sostenible con tecnología y seguridad en proyectos mineros de La Llanada, Nariño.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Coodmilla",
                url: SITE_URL,
                logo: `${SITE_URL}/logo.jpeg`,
                image: `${SITE_URL}/logo.jpeg`,
                email: "contactenoscoodmila@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Calle 9 No 2-41 B/Corazón de Jesús",
                  addressLocality: "La Llanada",
                  addressRegion: "Nariño",
                  addressCountry: "CO",
                },
                description:
                  "Cooperativa del Distrito Minero de La Llanada (Coodmilla). Promovemos la minería responsable, la adopción de tecnologías limpias y el desarrollo sostenible en el departamento de Nariño.",
              }),
            }}
          />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
