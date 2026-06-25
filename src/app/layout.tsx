import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALIROREK | Cloud-Powered Productivity & Business Resource Platform",
  description:
    "ALIROREK helps professionals, freelancers, agencies, consultants, and startups streamline operations through cloud-powered productivity systems, automation frameworks, and the flagship ResourceFlow™ platform.",
  keywords: [
    "SaaS Platform",
    "Cloud Productivity",
    "Business Automation",
    "Notion Templates",
    "SOP Library",
    "AI Prompt Library",
    "Workflow Documentation",
    "AWS Cloud Infrastructure",
  ],
  authors: [{ name: "ALIROREK Team", url: "https://alirorek.com" }],
  openGraph: {
    title: "ALIROREK | Cloud-Powered Productivity & Business Resource Platform",
    description:
      "Empowering professionals and teams with weekly business assets, workflow blueprints, and operational playbooks on the ResourceFlow™ platform.",
    url: "https://alirorek.com",
    siteName: "ALIROREK",
    images: [
      {
        url: "https://alirorek.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ALIROREK | ResourceFlow™ Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALIROREK | Cloud-Powered Productivity & Business Resource Platform",
    description: "Streamline operations with weekly business assets and automation frameworks for $5/month.",
    images: ["https://alirorek.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://alirorek.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema for Search Engines
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ALIROREK",
    "url": "https://alirorek.com",
    "logo": "https://alirorek.com/logo-primary.png",
    "sameAs": [
      "https://twitter.com/alirorek",
      "https://github.com/alirorek",
      "https://linkedin.com/company/alirorek"
    ],
    "description": "Information Technology and Cloud-Powered Productivity SaaS provider helping businesses automate and scale.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-space-black text-white relative">
        {/* WCAG Accessibility Skip Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Dynamic Background Network */}
        <BackgroundCanvas />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" className="flex-grow flex flex-col outline-none">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
