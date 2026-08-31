import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import RevealOnScroll from "@/components/RevealOnScroll";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

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
    url: "https://connectify.global",
    siteName: "Connectify",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Connectify — Software Engineering & AI Solutions",
    description: "We engineer scalable digital products, cloud platforms & AI solutions."
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Connectify",
  "url": "https://connectify.global",
  "logo": "https://connectify.global/connectifylogo-purple.png",
  "description": "Connectify is a software engineering agency building scalable digital products, cloud architecture, and AI solutions.",
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
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Connectify Enterprise Software & AI Engineering",
  "url": "https://connectify.global",
  "logo": "https://connectify.global/connectifylogo-purple.png",
  "image": "https://connectify.global/connectifylogo-purple.png",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "India"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="light h-full antialiased"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
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