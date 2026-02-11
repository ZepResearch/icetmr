import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ConferenceFooter from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import TawkToChat from "@/components/TawkToChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Emerging Trends Conf. | ICETMR  ",
  description:
    "Join global experts at ICETMR , a premier conference dedicated to exploring emerging trends and multidisciplinary research ",
  keywords: [
    "ICETMR",
    "multidisciplinary research",
    "emerging trends",
    "research conference",
    "Bali conference",
    "international conference",
    "academic conference",
    "research collaboration",
  ],
  authors: [{ name: "ICETMR Organizing Committee", url: "https://emergingtrendsconference.com" }],
  creator: "ICETMR",
  openGraph: {
    title: "International Conference on Emerging Trends in Multidisciplinary Research ",
    description:
      "Join leading researchers and academics at ICETMR   where multidisciplinary research meets innovation to address global challenges.",
    url: "https://emergingtrendsconference.com",
    siteName: "ICETMR",
    images: [
      {
        url: "https://emergingtrendsconference.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ICETMR Conference Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICETMR 2025",
    description:
      "The premier international conference on emerging trends in multidisciplinary research",
    creator: "@icetmr", // Update to your actual handle
    images: ["https://emergingtrendsconference.com/og-image.png"],
  },
  metadataBase: new URL("https://emergingtrendsconference.com"),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <script
          async
          src="https://analytics.zepresearch.com/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
        <ConferenceFooter/>
        <FloatingWhatsApp/>
        <TawkToChat/>
      </body>
    </html>
  );
}
