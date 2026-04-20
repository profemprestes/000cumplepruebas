import type { Metadata, Viewport } from 'next';
import "../styles.css";

export const metadata: Metadata = {
  title: "Gran Facu Aventura V2 — Nivel 9",
  description: "Invitación interactiva al cumple de Facu — Nivel 9 en KBOOM.",
  openGraph: {
    type: "website",
    title: "Gran Facu Aventura V2 — Nivel 9",
    description: "Sumate al Nivel 9 de Facu — KBOOM, domingo 24 de mayo.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1126",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Fredoka:wght@400;600;700&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
