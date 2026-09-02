"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AntiGravityProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  floatDistance?: number;
  floatDuration?: number;
  floatDelay?: number;
  enableFloat?: boolean;
  scaleOnHover?: number;
}

export function AntiGravityElement({
  children,
  className = "",
  intensity = 0.2,
  floatDistance = 10,
  floatDuration = 4.5,
  floatDelay = 0,
  enableFloat = true,
  scaleOnHover = 1.03,
}: AntiGravityProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 220, mass: 0.12 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (e.clientX - centerX) * intensity;
    const distanceY = (e.clientY - centerY) * intensity;

    mouseX.set(distanceX);
    mouseY.set(distanceY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      animate={
        enableFloat
          ? {
              y: [0, -floatDistance, 0],
            }
          : undefined
      }
      transition={{
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      whileHover={{
        scale: scaleOnHover,
        transition: { type: "spring", stiffness: 350, damping: 22 },
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
