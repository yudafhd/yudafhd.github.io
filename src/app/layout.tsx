import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yudafhd.github.io"),
  title: {
    default: "Yuda Fahrudin | @yudafhd",
    template: "%s — Yuda Fahrudin",
  },
  description:
    "Projects and experiments by Yuda Fahrudin. Friendster-era vibes with modern Tailwind.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Yuda Fahrudin | @yudafhd",
    description:
      "Projects and experiments by Yuda Fahrudin. Friendster-era vibes with modern Tailwind.",
    url: "/",
    siteName: "Yuda Fahrudin",
    images: [{ url: "/apple-touch-icon.png" }],
  },
  twitter: {
    card: "summary",
    title: "Yuda Fahrudin | @yudafhd",
    description:
      "Projects and experiments by Yuda Fahrudin. Friendster-era vibes with modern Tailwind.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-100 print:bg-white text-slate-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
