import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteTitle = "Sahan — Software Developer";
const siteDescription =
  "Portfolio of Sahan, a software developer focused on building modern, accessible and high-performance web experiences with Next.js, React and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahan.dev"),
  title: {
    default: siteTitle,
    template: "%s — Sahan",
  },
  description: siteDescription,
  keywords: [
    "software developer",
    "frontend developer",
    "full-stack developer",
    "UI/UX design",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
  ],
  authors: [{ name: "Sahan" }],
  creator: "Sahan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahan.dev",
    siteName: "Sahan Portfolio",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}