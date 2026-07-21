import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ENAMEL — a smile studio in Portland",
  description:
    "Gentle 30-minute cleanings and pro whitening, hygienist-led, in Portland. No drills, no scraping, no judgment. Walk-ins, evenings & weekends. Cleanings from $149.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
