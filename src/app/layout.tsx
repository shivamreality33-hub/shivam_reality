import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Reality | RERA Registered Real Estate Channel Partner",
  description: "Helping individuals, families, and investors make informed real estate decisions with transparency, trust, and expert guidance. Your trusted RERA registered channel partner.",
  keywords: ["Shivam Reality", "Real Estate", "Channel Partner", "Property Consultation", "RERA Registered"],
  openGraph: {
    title: "Shivam Reality | Real Estate Consulting",
    description: "Your trusted RERA registered real estate channel partner.",
    type: "website",
    locale: "en_US",
    url: "https://shivamreality.example.com",
    siteName: "Shivam Reality",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Reality",
    description: "Your trusted RERA registered real estate channel partner.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-text-main bg-background overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
