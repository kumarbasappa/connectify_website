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
  title: "Connectify — Digital Transformation • Product Engineering • AI",
  description:
    "Connectify designs, engineers, and scales enterprise-grade digital platforms, SaaS products, and AI intelligence for corporations, governments, and market leaders.",
  keywords: [
    "Digital Transformation",
    "Product Engineering",
    "Enterprise Software",
    "Cloud Architecture",
    "Fintech",
    "Healthtech",
    "AI Agents",
    "Connectify"
  ],
  authors: [{ name: "Connectify Global" }],
  openGraph: {
    title: "Connectify — Strategic Technology & Advisory Partner",
    description: "We build digital products that move businesses forward.",
    url: "https://connectify.global",
    siteName: "Connectify",
    type: "website"
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