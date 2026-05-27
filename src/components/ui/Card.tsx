'use client';

import React, { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delayIndex?: number;
  interactive3D?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
  glow = true,
  delayIndex = 0,
  interactive3D = true,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for tilt perspective
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for buttery smooth interpolation
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Rotations for 3D effect (max 12 degrees)
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  // Glow position coordinates inside card
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);

  const glowXSpring = useSpring(glowX, springConfig);
  const glowYSpring = useSpring(glowY, springConfig);
  const glowOpacitySpring = useSpring(glowOpacity, springConfig);

  // Holographic shine glare movement
  const shineX = useTransform(springX, [-0.5, 0.5], ['-30%', '30%']);
  const shineY = useTransform(springY, [-0.5, 0.5], ['-30%', '30%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive3D) return;
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();

    // Compute mouse positions relative to center (-0.5 to 0.5)
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(relX);
    mouseY.set(relY);

    // Compute absolute cursor coordinates inside card for glow
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
    glowOpacity.set(0.6);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    glowOpacity.set(0);
  };

  // Idle floating animation
  const floatAnimation = {
    y: [0, -6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: delayIndex * 0.15,
    },
  };

  return (
    <motion.div
      animate={hover ? floatAnimation : undefined}
      className="h-full flex flex-col"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: interactive3D ? rotateX : 0,
          rotateY: interactive3D ? rotateY : 0,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        className={`
          group relative flex-1 overflow-hidden rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-lg shadow-black/20
          ${hover ? 'hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]' : ''}
          transition-colors duration-500
          gpu-accelerated
          ${className}
        `}
      >
        {/* Futuristic Dynamic Gradient/Glow Outline on Hover */}
        {hover && (
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-600/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />
        )}

        {/* Dynamic Light Glow follows cursor */}
        <motion.div
          style={{
            x: glowXSpring,
            y: glowYSpring,
            opacity: glowOpacitySpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="absolute top-0 left-0 w-[250px] h-[250px] rounded-full pointer-events-none bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 blur-2xl mix-blend-screen"
        />

        {/* Holographic light reflections */}
        <motion.div
          style={{
            x: shineX,
            y: shineY,
            translateX: '-10%',
            translateY: '-10%',
          }}
          className="absolute inset-0 w-[120%] h-[120%] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay"
        />

        {/* Diagonal shine sweep trigger on hover */}
        {hover && (
          <div className="shine-sweep" />
        )}

        {/* Card Content container with 3D preserve style */}
        <div style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }} className="h-full w-full flex flex-col relative z-10">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
