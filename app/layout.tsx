import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Sikarwar — Full Stack Developer & AI Builder",
  description:
    "Portfolio of Yash Sikarwar, Full Stack Developer and AI Practitioner. Building products with React, Next.js, Node.js and AI.",
  keywords: [
    "Yash Sikarwar",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "HexagonDigitalServices",
  ],
  authors: [{ name: "Yash Sikarwar" }],
  creator: "Yash Sikarwar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Yash Sikarwar — Full Stack Developer & AI Builder",
    description:
      "Full Stack Developer and AI Practitioner building real products.",
    url: "https://yashsikarwar.vercel.app",
    siteName: "Yash Sikarwar Portfolio",
    images: [
      {
        url: "https://yashsikarwar.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Sikarwar Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Sikarwar — Full Stack Developer & AI Builder",
    description:
      "Full Stack Developer and AI Practitioner building real products.",
    images: ["https://yashsikarwar.vercel.app/og-image.png"],
    creator: "@HexagonDService",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 text-zinc-100 antialiased`}
        style={{ overflowX: "hidden", maxWidth: "100vw" }}
      >
        <Sidebar />
        <div className="pt-15 md:pt-8 pb-15 md:pb-0 w-full overflow-x-hidden">
          <main className="min-h-screen w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
