"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable on mobile / touch devices
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsMobile(!mediaQuery.matches);

    if (!mediaQuery.matches) {
      return;
    }

    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out"
      });
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, [data-interactive]");
      if (isInteractive) {
        setHovered(true);
      }
    };

    const handleHoverEnd = () => {
      setHovered(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [visible]);

  if (isMobile) return null;

  return (
    <>
      <div
        id="cursor-dot"
        className={`custom-cursor custom-cursor-dot ${visible ? "opacity-100" : "opacity-0"} ${
          hovered ? "scale-150 bg-electric" : ""
        }`}
      />
      <div
        id="cursor-ring"
        className={`custom-cursor custom-cursor-ring ${visible ? "opacity-100" : "opacity-0"} ${
          hovered ? "scale-150 border-brand bg-brand/10" : ""
        }`}
      />
    </>
  );
}
