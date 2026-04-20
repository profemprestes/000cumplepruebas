import type { Metadata, Viewport } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "🐻 GRAN FACU AVENTURA — ¡Estás Invitado!",
  description: "¡Facu te invita a su cumpleaños Nivel 9! Una misión interactiva en KBOOM. Domingo 24 de mayo desde las 18:30hs.",
  keywords: ["cumpleaños", "invitación", "Facu", "KBOOM", "Nivel 9", "aventura", "voxel"],
  openGraph: {
    type: "website",
    locale: "es_UY",
    title: "🐻 GRAN FACU AVENTURA — ¡Estás Invitado!",
    description: "¡Facu te invita a su cumpleaños Nivel 9! Una misión interactiva en KBOOM. Domingo 24 de mayo desde las 18:30hs.",
    siteName: "GRAN FACU AVENTURA",
    images: [
      {
        url: "/logo_completo.png",
        width: 1200,
        height: 630,
        alt: "Logo de Gran Facu Aventura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🐻 GRAN FACU AVENTURA — ¡Estás Invitado!",
    description: "¡Facu te invita a su cumpleaños Nivel 9! Una misión interactiva en KBOOM.",
    images: ["/logo_completo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0d1126",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Fredoka:wght@400;600;700&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
