import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Layout } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  // Hardcoded premium professional bio focusing on your real-world achievements
  const rasheedBio = "As a full stack engineer with a strong B.Tech IT background, I focus on designing high-performance RESTful APIs, robust relational databases, and interactive UI systems. I enjoy translating complex backend flows and cloud setups into clean, seamless developer and user experiences. Let's build something incredible together!";



  return (
    <section
      id="about"
      className="h-panel w-screen flex items-center justify-center bg-[#0C0C0C] z-20
        px-5 sm:px-8 md:px-10 snap-center"
    >
      {/* ================= CORNER DECORATIVE 3D ASSETS ================= */}

      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none select-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <motion.img
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Decorative Moon"
            className="object-contain w-[120px] sm:w-[160px] md:w-[210px] hue-rotate-180 brightness-75 contrast-125"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none select-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <motion.img
            animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Abstract Object"
            className="object-contain w-[100px] sm:w-[140px] md:w-[180px] hue-rotate-90 brightness-90 saturate-[1.2]"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none select-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <motion.img
            animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Decorative Lego"
            className="object-contain w-[120px] sm:w-[160px] md:w-[210px] hue-rotate-[240deg] brightness-75"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none select-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <motion.img
            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Geometric Group"
            className="object-contain w-[130px] sm:w-[170px] md:w-[220px] hue-rotate-[320deg] saturate-[1.5]"
          />
        </FadeIn>
      </div>

      {/* ================= SECTION CONTENT ================= */}

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 lg:gap-16 max-w-[90vw] lg:max-w-[1200px] z-10 w-full mt-10">
        
        {/* Left Column: Heading, Bio, Button */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 justify-center">
          {/* About Heading */}
          <FadeIn delay={0} y={40} className="w-full">
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight select-none mb-6 sm:mb-8 md:mb-10
              text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem]">
              About me
            </h2>
          </FadeIn>

          {/* Bio Text */}
          <FadeIn delay={0.1} y={20} className="w-full mb-8 sm:mb-10 px-4 lg:px-0">
            <p className="text-accent-light font-medium leading-relaxed max-w-[560px] select-none mx-auto lg:mx-0
              text-[0.95rem] sm:text-base md:text-lg lg:text-xl">
              {rasheedBio}
            </p>
          </FadeIn>

          {/* Contact Button */}
          <FadeIn delay={0.2} y={20} className="px-4 lg:px-0">
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>

        {/* Right Column: Education Dashboard */}
        <div className="flex items-center justify-center w-full lg:w-1/2 px-4 lg:px-0">
          <FadeIn delay={0.15} x={40} y={0} className="w-full max-w-[500px]">
            <div className="border border-white/10 rounded-[24px] bg-[#121212]/50 p-6 md:p-8 backdrop-blur-md relative w-full text-left transition-all duration-300 hover:border-[#B600A8]/30 hover:bg-[#121212]/70 group shadow-2xl">
              <div className="absolute top-4 left-6 flex items-center gap-1.5 text-xs text-[#B600A8] uppercase tracking-wider font-semibold">
                <Layout size={12} />
                Education
              </div>
              
              <div className="mt-6 flex flex-col justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#B600A8] transition-colors duration-300">
                    B.Tech in Information Technology
                  </h3>
                  <p className="text-accent-light text-sm sm:text-base font-medium">
                    Al-Ameen Engineering College
                  </p>
                </div>
                <div className="rounded-full border border-[#B600A8]/20 bg-[#B600A8]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#D7E2EA] inline-block">
                  2020 - 2024
                </div>
              </div>
              
              <p className="mt-5 text-sm text-accent-light/80 leading-relaxed border-t border-white/5 pt-5">
                Graduated with a focus on Software Engineering, Database Systems, and Web Technologies. <span className="font-semibold text-white">CGPA: 7.80 / 10</span>
              </p>
            </div>
          </FadeIn>
        </div>

      </div>



    </section>
  );
};

export default AboutSection;
