import React from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';
import { useScrollContainer } from './HorizontalScroll';

interface SkewWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxSkew?: number;
}

export const SkewWrapper: React.FC<SkewWrapperProps> = ({ children, className = "", maxSkew = 5 }) => {
  const containerRef = useScrollContainer();

  // Get the scroll progress from our custom container
  // Pass a fallback object if containerRef is null to prevent hook crashes, though we return early later
  const { scrollX } = useScroll({ container: containerRef || undefined });
  
  // Calculate the velocity of the scroll
  const scrollVelocity = useVelocity(scrollX);
  
  // Smooth out the velocity so the skew doesn't snap abruptly
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Map the smoothed velocity to a skew angle
  // Negative velocity (scrolling left) -> positive skew
  // Positive velocity (scrolling right) -> negative skew
  const skew = useTransform(smoothVelocity, [-1000, 1000], [maxSkew, -maxSkew]);

  // If we can't find the container, just render normally
  if (!containerRef) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div style={{ skewX: skew }} className={`origin-bottom ${className}`}>
      {children}
    </motion.div>
  );
};
