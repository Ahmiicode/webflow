
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LeadChatbot from "./components/LeadChatbot";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NOIRÉ — Luxury Watchmaking",
  description:
    "NOIRÉ — Independent watchmaking shaped by precision, craftsmanship and timeless design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Footer />

        <LeadChatbot />
        <WhatsAppButton />

        <Script
          src="https://cdn.zanderio.ai/widget/loader.js"
          data-id="wdg_EHMqpLgkG60ynDGb0LEzwNwj"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
