import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Crossway Global | Agricultural Exports from India",
    template: "%s | Crossway Global",
  },
  description:
    "Crossway Global exports high-curcumin turmeric and certified organic moringa leaf powder directly from India to food manufacturers, nutraceutical formulators, and importers worldwide.",
  keywords: [
    "turmeric exporter India",
    "moringa exporter India",
    "agricultural exports India",
    "curcumin turmeric powder",
    "organic moringa leaf powder",
    "spice exporter India",
  ],
  openGraph: {
    title: "Crossway Global | Agricultural Exports from India",
    description:
      "Direct export of standardized high-curcumin turmeric and certified organic moringa leaf powder from India.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sourceSerif.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-brand-surface text-brand-text font-sans antialiased text-[16px] leading-[1.6] flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
