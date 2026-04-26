import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primeclaimbilling.com"),
  title: "PrimeClaim Billing | Medical Billing & Revenue Cycle Management",
  description:
    "PrimeClaim Billing provides medical billing and revenue cycle support for small and mid-sized healthcare practices, including claim submission, denial management, payment posting, AR follow-up, and monthly reporting.",
  keywords: [
    "medical billing",
    "revenue cycle management",
    "RCM",
    "denial management",
    "claim submission",
    "AR follow-up",
    "healthcare billing",
    "practice billing services",
  ],
  authors: [{ name: "PrimeClaim Billing" }],
  openGraph: {
    title: "PrimeClaim Billing | Medical Billing & Revenue Cycle Management",
    description:
      "Medical billing and revenue cycle support for small and mid-sized U.S. healthcare practices.",
    url: "https://primeclaimbilling.com",
    siteName: "PrimeClaim Billing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeClaim Billing | Medical Billing & Revenue Cycle Management",
    description:
      "Medical billing and revenue cycle support for small and mid-sized U.S. healthcare practices.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
