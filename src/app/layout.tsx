import type { Metadata } from "next";
import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingVeil from "@/components/LoadingVeil";
import FloatingContacts from "@/components/FloatingContacts";

// The animation-heavy pages exceed the heap of constrained build workers while
// prerendering. Render them on demand instead, keeping builds reliable.
export const dynamic = "force-dynamic";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orrivabylotus.com"),
  title: {
    default: "Orriva by Lotus | Premium Wedding & Event Venue, Ghaziabad",
    template: "%s | Orriva by Lotus",
  },
  description:
    "Orriva by Lotus is a premium pure-vegetarian wedding and event venue in Raj Nagar Extension, Ghaziabad — elegant halls, manicured lawns, and detail nurtured with intention.",
  keywords: [
    "wedding venue Ghaziabad",
    "banquet hall Raj Nagar Extension",
    "vegetarian wedding catering",
    "Orriva by Lotus",
  ],
  openGraph: {
    title: "Orriva by Lotus | Premium Wedding & Event Venue, Ghaziabad",
    description:
      "A premium pure-vegetarian wedding and event venue in Raj Nagar Extension, Ghaziabad. Celebrate Differently.",
    url: "https://orrivabylotus.com",
    siteName: "Orriva by Lotus",
    images: ["/images/hero-venue.jpg"],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/Logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${poppins.variable}`}>
      <body>
        <LoadingVeil />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContacts />
      </body>
    </html>
  );
}