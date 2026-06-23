import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll progress of the paragraph container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const totalChars = characters.length;

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, index) => {
        // Calculate the relative scroll range for this character
        // We add overlap to make the fade smoother and more natural
        const start = index / totalChars;
        const end = Math.min(1, start + 0.15); // 15% transition width per character

        return (
          <Character 
            key={index} 
            char={char} 
            range={[start, end]} 
            progress={scrollYProgress} 
          />
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, range, progress }) => {
  // Map scroll progress to opacity
  const opacity = useTransform(progress, range, [0.2, 1]);

  // Handle spaces simply
  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block select-none">
      {/* Invisible placeholder for layout positioning */}
      <span className="opacity-0 pointer-events-none">{char}</span>
      {/* Absolutely positioned character layer that animates */}
      <motion.span 
        style={{ opacity }} 
        className="absolute top-0 left-0 text-[#D7E2EA]"
      >
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
