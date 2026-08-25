"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKIP_SELECTORS = [
  "[data-hero-fade]",
  "[data-services-reveal]",
  "[data-trusted-content]",
];

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      document
        .querySelectorAll("main > * section, main section")
        .forEach((section) => {
          if (SKIP_SELECTORS.some((s) => section.querySelector(s))) return;
          const items = section.querySelectorAll(
            "h1, h2, h3, p, li > a, img"
          );
          if (!items.length) return;
          gsap.fromTo(
            items,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.05,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
                invalidateOnRefresh: true,
              },
            }
          );
        });
    });
    return () => ctx.revert();
  }, [pathname]);

  return null;
}
