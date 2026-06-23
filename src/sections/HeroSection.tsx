import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section 
      id="home" 
      className="h-panel w-screen flex-shrink-0 flex flex-col justify-between overflow-hidden relative snap-center"
    >
      {/* Dynamic Ambient Background - Hero specific */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#121212] via-[#0C0C0C] to-[#0C0C0C] opacity-80" />
      
      {/* TOP NAVIGATION BAR */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 z-30">
        {/* Navigation Links Left */}
        <div className="flex gap-6 sm:gap-10 items-center">
          <a href="#about" className="text-accent-light/80 hover:text-white text-sm md:text-lg lg:text-[1.4rem] uppercase font-medium tracking-wider transition-opacity duration-200 hover:opacity-70">
            About
          </a>
          <a href="#services" className="text-accent-light/80 hover:text-white text-sm md:text-lg lg:text-[1.4rem] uppercase font-medium tracking-wider transition-opacity duration-200 hover:opacity-70">
            Services
          </a>
        </div>

        {/* Brand Logo / Text */}
        <div className="flex flex-col items-center justify-center select-none text-center">
          <span className="text-sm md:text-lg lg:text-xl font-black uppercase tracking-[0.15em] text-[#B600A8] leading-none mb-1">
            MR Rasheed
          </span>
          <span className="text-[0.5rem] md:text-[0.6rem] text-white/50 uppercase tracking-[0.2em] font-medium leading-none">
            Python Full Stack Developer
          </span>
        </div>

        {/* Navigation Links Right */}
        <div className="flex gap-6 sm:gap-10 items-center">
          <a href="#projects" className="text-accent-light/80 hover:text-white text-sm md:text-lg lg:text-[1.4rem] uppercase font-medium tracking-wider transition-opacity duration-200 hover:opacity-70">
            Projects
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-accent-light/80 hover:text-white text-sm md:text-lg lg:text-[1.4rem] uppercase font-medium tracking-wider transition-opacity duration-200 hover:opacity-70">
            Contact
          </a>
        </div>
      </FadeIn>



      {/* HERO HEADING — fully visible above portrait */}
      <div className="w-full text-center overflow-hidden z-20 my-auto relative flex flex-col items-center justify-center">
        <FadeIn delay={0.15} y={40}>
          <div className="overflow-hidden py-2 sm:py-4">
            <motion.h1 
              className="hero-heading font-black uppercase tracking-tight leading-[0.85] w-full select-none flex flex-col items-center justify-center
              text-[12vw] sm:text-[11vw] md:text-[11.5vw] lg:text-[12vw]"
            >
              <motion.span style={{ display: 'block' }}>hi im mohamed</motion.span>
              <motion.span style={{ display: 'block' }}>rasheed</motion.span>
            </motion.h1>
          </div>
        </FadeIn>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* Left Sub-heading Description */}
        <FadeIn delay={0.35} y={20}>
          <div className="text-left select-none">
            <p className="text-accent-light font-light uppercase tracking-wide leading-snug
              text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[340px]"
            >
              a full stack engineer driven by building robust APIs, elegant interfaces &amp; database systems
            </p>
          </div>
        </FadeIn>

        {/* Scroll Indicator (Animated Arrow pointing Right) */}
        <FadeIn delay={0.7} y={0} className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-accent-light/50 font-semibold">Scroll Right</span>
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#B600A8]">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.div>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>

    </section>
  );
};

export default HeroSection;
