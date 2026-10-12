import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Crossway Global | Turmeric, Moringa & Ashwagandha Exporters from India",
    template: "%s | Crossway Global",
  },
  description:
    "Crossway Global is an India-based import-export and trading company supplying premium turmeric (Salem & GI-tagged Waigaon), moringa, ashwagandha, and beetroot powder to domestic and international buyers.",
  keywords: [
    "turmeric exporter India",
    "Waigaon turmeric",
    "Salem turmeric",
    "moringa powder exporter India",
    "ashwagandha powder exporter India",
    "beetroot powder exporter India",
    "agricultural exports India",
    "curcumin turmeric powder",
    "organic moringa leaf powder",
    "spice exporter India",
    "import export company India",
    "Nagpur trading company",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Crossway Global | Turmeric, Moringa & Ashwagandha Exporters from India",
    description:
      "Quality Products. Global Trade. Seamless Solutions. Premium turmeric, moringa, ashwagandha, and beetroot powder from India — domestic and international trade.",
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Crossway Global | Turmeric, Moringa & Ashwagandha Exporters from India",
    description:
      "Quality Products. Global Trade. Seamless Solutions. Premium turmeric, moringa, ashwagandha, and beetroot powder from India.",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-mark.png`,
  image: `${siteConfig.url}/opengraph-image`,
  description:
    "India-based import-export and trading company supplying turmeric, moringa, ashwagandha, and beetroot powder to domestic and international buyers.",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Flat No. 701, C Wing, Gokul Enclave, Shrihari Nagar, Zingabai Takli Road",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { "@id": `${siteConfig.url}/#organization` },
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
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className="bg-brand-surface text-brand-text font-sans antialiased text-[16px] leading-[1.6] flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
