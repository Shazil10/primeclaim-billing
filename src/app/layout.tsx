import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primeclaimbilling.com"),
  title: "PrimeClaim Billing. Medical billing, done quietly.",
  description:
    "Medical billing and revenue cycle support for small and mid-sized U.S. healthcare practices. You keep 96.5% of every dollar collected.",
  openGraph: {
    title: "PrimeClaim Billing. Medical billing, done quietly.",
    description:
      "Medical billing and revenue cycle support for small and mid-sized U.S. healthcare practices.",
    url: "https://primeclaimbilling.com",
    siteName: "PrimeClaim Billing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeClaim Billing. Medical billing, done quietly.",
    description:
      "Medical billing and revenue cycle support for small and mid-sized U.S. healthcare practices.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--paper)] text-[color:var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
