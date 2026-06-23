import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
    outline: '2px solid #FFFFFF',
    outlineOffset: '-3px',
  };

  return (
    <motion.button
      onClick={onClick}
      style={buttonStyle}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0px 6px 12px rgba(181, 1, 167, 0.4), 4px 4px 16px #7721B1 inset',
      }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-full uppercase font-medium tracking-widest text-white transition-shadow duration-300
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 
        text-[10px] sm:text-xs md:text-sm lg:text-base ${className}`}
    >
      Contact Me
    </motion.button>
  );
};

export default ContactButton;
