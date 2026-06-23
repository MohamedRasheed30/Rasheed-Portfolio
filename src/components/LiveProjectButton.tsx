import React from 'react';
import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ onClick, className = '', href }) => {
  const content = (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, backgroundColor: 'rgba(215, 226, 234, 0.1)' }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-full border-2 border-accent-light text-accent-light uppercase font-medium tracking-widest transition-all duration-300
        px-8 py-3 sm:px-10 sm:py-3.5 
        text-xs sm:text-sm md:text-base ${className}`}
    >
      Live Project
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

export default LiveProjectButton;
