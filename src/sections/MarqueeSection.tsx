import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// All Skills combined for a centered grid view
const ALL_SKILLS = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Next.js', icon: '▲' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Express.js', icon: '⚡' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git & GitHub', icon: '🔧' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'Python', icon: '🐍' },
  { name: 'HTML & CSS', icon: '🌐' },
  { name: 'Redux', icon: '🔮' },
  { name: 'GraphQL', icon: '◆' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Figma', icon: '🎯' },
  { name: 'Three.js', icon: '🧊' },
  { name: 'Framer Motion', icon: '🎬' },
  { name: 'Blender 3D', icon: '🟠' },
  { name: 'CI/CD', icon: '🚀' },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Container animation for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div
      ref={sectionRef}
      className="h-screen w-screen flex-shrink-0 flex flex-col items-center justify-center bg-[#0C0C0C] select-none z-20 px-4 sm:px-8 overflow-hidden snap-center"
    >
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14 max-w-3xl">
        <p className="text-[#B600A8] text-xs sm:text-sm uppercase tracking-[0.3em] font-medium mb-3">
          What I Work With
        </p>
        <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
          Skills & Technologies
        </h2>
      </div>

      {/* Centered Skills Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 w-full max-w-6xl mx-auto"
      >
        {ALL_SKILLS.map((skill, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative flex items-center gap-2 sm:gap-3
              px-4 sm:px-5 py-3 sm:py-4
              rounded-2xl border border-white/[0.06] bg-white/[0.02]
              backdrop-blur-sm
              transition-all duration-300
              hover:border-[#B600A8]/40 hover:bg-white/[0.06] hover:scale-105 hover:shadow-[0_0_20px_rgba(182,0,168,0.2)]"
          >
            {/* Bottom gradient accent on hover */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-12 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] transition-all duration-300" />

            <span className="text-lg sm:text-xl md:text-2xl">{skill.icon}</span>
            <span className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/80 font-medium tracking-wide whitespace-nowrap group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSection;
