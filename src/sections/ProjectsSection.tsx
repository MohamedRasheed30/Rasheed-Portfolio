import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, ArrowRight, X } from 'lucide-react';


// Mohamed's Full Stack Resume Projects
const TECH_PROJECTS = [
  {
    num: "01",
    name: "AutoCloud Dashboard",
    cat: "Cloud Platform",
    date: "Sep 2025 - Present",
    liveUrl: "https://github.com",
    tech: ["FastAPI", "React.js", "Docker", "AWS", "Azure"],
    image: "/assets/autocloud.png",
    points: [
      "Built an internal infrastructure automation platform to streamline cloud resource provisioning across AWS, Azure, and GCP.",
      "Constructed backend APIs using Python and FastAPI to automate infrastructure provisioning workflows.",
      "Introduced validation and error-handling mechanisms, improving reliability.",
      "Unified backend services with frontend workflows to enable seamless interaction.",
    ],
    color: "#B600A8"
  },
  {
    num: "02",
    name: "Label Gen Dashboard",
    cat: "Centralized Integration",
    date: "Apr 2025 - Aug 2025",
    liveUrl: "https://github.com",
    tech: ["Python", "FastAPI", "PostgreSQL", "Mirakl API"],
    image: "/assets/labelgen.png",
    points: [
      "Created scalable backend services using Python and FastAPI to support centralized integration workflows.",
      "Structured and enhanced PostgreSQL databases for reliable and efficient data handling.",
      "Connected REST APIs between Mirakl and SRP systems, enabling smooth cross-platform communication.",
      "Automated backend workflows, reducing manual effort and increasing efficiency.",
    ],
    color: "#7621B0"
  },
  {
    num: "03",
    name: "Vivagham Singapore",
    cat: "Web Application",
    date: "Mar 2024 - Mar 2025",
    liveUrl: "https://github.com",
    tech: ["FastAPI", "PostgreSQL", "React.js", "Tailwind"],
    image: "/assets/vivagham.png",
    points: [
      "Contributed as a backend developer in building a full stack matrimony platform.",
      "Developed authentication and profile management services using Python and FastAPI.",
      "Created multi-step profile workflows with admin approval logic to streamline onboarding.",
      "Configured privacy controls, email notifications, and subscription handling.",
    ],
    color: "#FF3366"
  }
];

export const ProjectsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out p-4 sm:p-8"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen Project"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects Heading Panel */}
      <section id="projects" className="w-screen h-screen flex-shrink-0 flex items-center justify-center snap-start relative bg-[#0C0C0C] text-[#D7E2EA] z-20 overflow-hidden">
        {/* Animated Background Text */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-0 whitespace-nowrap opacity-[0.02] font-black text-[20vw] leading-none pointer-events-none"
        >
          SELECTED WORK SELECTED WORK
        </motion.div>

        <FadeIn delay={0} y={40} className="text-center relative z-10">
          <h2 className="hero-heading font-black uppercase select-none text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Projects
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-[2px] w-32 md:w-64 bg-gradient-to-r from-transparent via-[#B600A8] to-transparent mx-auto mt-4"
          />
        </FadeIn>

        {/* Scroll Indicator (Animated Arrow pointing Right) */}
        <FadeIn delay={0.7} y={0} className="hidden sm:flex absolute bottom-10 right-10 flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-accent-light/50 font-semibold">Scroll Right</span>
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm"
          >
            <ArrowRight size={16} className="text-[#B600A8]" />
          </motion.div>
        </FadeIn>
      </section>

      {/* Individual Project Panels */}
      {TECH_PROJECTS.map((project, idx) => (
        <section
          key={project.num}
          className="w-screen h-screen flex-shrink-0 flex items-center justify-center snap-start px-4 sm:px-6 md:px-12 relative bg-[#0C0C0C] text-[#D7E2EA] z-20 overflow-hidden"
        >
          {/* Ambient Glowing Orb for each project */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: idx }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[120px] pointer-events-none"
            style={{ backgroundColor: project.color }}
          />

          <FadeIn delay={0.1} y={40} className="w-full max-w-7xl h-[85vh] lg:h-[80vh] group/card relative z-10">
            <div className="w-full h-full bg-[#0C0C0C]/80 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex flex-col lg:flex-row shadow-2xl transition-all duration-700 relative overflow-hidden group-hover/card:shadow-[0_0_100px_rgba(255,255,255,0.03)] group-hover/card:scale-[1.01]">
              
              {/* Subtle inner animated gradient on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-700 pointer-events-none" 
                style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
              />

              {/* Left Column: Details */}
              <div className="flex flex-col gap-6 w-full lg:w-[45%] h-full p-6 sm:p-8 md:p-10 lg:p-12 relative z-10 overflow-y-auto no-scrollbar">
                
                <div className="flex items-center justify-between w-full">
                  {/* Project Number */}
                  <span className="font-black tracking-tighter leading-none text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] bg-clip-text text-transparent bg-gradient-to-b from-white/80 to-white/10">
                    {project.num}
                  </span>
                  <LiveProjectButton href={project.liveUrl} className="scale-90" />
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-3">
                    <span 
                      className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]"
                      style={{ color: project.color }}
                    >
                      {project.cat}
                    </span>
                    <span className="text-white/20">&bull;</span>
                    <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/50">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                    {project.name}
                  </h3>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {project.tech.map((t, i) => (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      key={t} 
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-white/80 backdrop-blur-sm shadow-inner"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Project Points List */}
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: 32 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="h-[2px] bg-white/40"
                    />
                    <span className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">Highlights</span>
                  </div>
                  
                  {project.points.map((point, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                      key={idx} 
                      className="flex items-start gap-3 group/point"
                    >
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5 transition-colors duration-300" style={{ color: project.color }} />
                      <p className="text-sm sm:text-base leading-relaxed font-light text-white/70 group-hover/point:text-white transition-colors duration-300">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="hidden lg:flex w-[55%] h-full relative items-center justify-center p-8 bg-black/20 border-l border-white/5 group/imgcontainer">
                {/* Decorative background grid inside image area */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full h-full relative perspective-1000 cursor-zoom-in"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover/imgcontainer:border-white/30 transition-all duration-700 relative z-10 bg-[#0C0C0C]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                    <motion.img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-contain p-4 sm:p-8 scale-95 group-hover/imgcontainer:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                  
                  {/* Floating shadow element below image */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-black blur-3xl opacity-50 pointer-events-none" />
                </motion.div>
              </div>

            </div>
          </FadeIn>
        </section>
      ))}
    </>
  );
};

export default ProjectsSection;
