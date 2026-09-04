import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import RevealOnScroll from "@/components/RevealOnScroll";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Connectify — Software Engineering, Cloud Platforms & AI Solutions",
  description:
    "Connectify is a software engineering agency. We build high-performance web applications, robust cloud architecture, and production-ready AI tools for growing enterprises.",
  keywords: [
    "Software Engineering",
    "Product Design",
    "Enterprise Software",
    "Cloud Architecture",
    "Web Development",
    "Mobile App Development",
    "Artificial Intelligence",
    "Connectify"
  ],
  authors: [{ name: "Connectify Global" }],
  openGraph: {
    title: "Connectify — Software Engineering, Cloud Platforms & AI Solutions",
    description: "We engineer scalable digital products, cloud platforms & AI solutions.",
    url: "https://connectify-website.vercel.app",
    siteName: "Connectify",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Connectify — Software Engineering, Cloud Platforms & AI Solutions",
    description: "We engineer scalable digital products, cloud platforms & AI solutions."
  }
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://connectify-website.vercel.app/#organization",
      "name": "Connectify",
      "url": "https://connectify-website.vercel.app",
      "logo": "https://connectify-website.vercel.app/connectifylogo-purple.png",
      "description": "Connectify is a software engineering agency building scalable digital products, cloud architecture, and AI solutions.",
      "sameAs": [
        "https://linkedin.com/company/connectify",
        "https://github.com/connectify"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "business@connectify.global",
        "contactType": "customer service"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://connectify-website.vercel.app/#service",
      "name": "Connectify Software Engineering & AI Advisory",
      "url": "https://connectify-website.vercel.app",
      "priceRange": "$$$",
      "areaServed": "Global",
      "serviceType": [
        "Software Engineering",
        "Cloud Architecture",
        "Enterprise AI Solutions",
        "GovTech Infrastructure"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('connectify-theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-full bg-background font-sans text-foreground transition-colors duration-300 overflow-x-hidden"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Preloader />
          <CustomCursor />
          <SmoothScroll />
          <RevealOnScroll />
          <Navbar />
          <main className="relative w-full overflow-x-hidden">
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
