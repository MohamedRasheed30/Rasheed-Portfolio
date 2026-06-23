import React from 'react';
import { FadeIn } from '../components/FadeIn';

// Unified service list combining Full Stack Engineering & 3D Design
const UNIFIED_SERVICES = [
  {
    num: "01",
    name: "API Architecture",
    desc: "Designing and maintaining high-performance, modular RESTful APIs using Python and FastAPI for highly scalable, resilient backend operations."
  },
  {
    num: "02",
    name: "Database Design",
    desc: "Structuring and optimizing PostgreSQL and MongoDB databases, applying index architectures to maximize retrieval speeds and operational performance."
  },
  {
    num: "03",
    name: "3D Design & Modeling",
    desc: "Creation of detailed 3D assets, environments, or objects rendered in photorealism, ideal for visualizations, product showcases, and interactive web environments."
  },
  {
    num: "04",
    name: "Full Stack Systems",
    desc: "Constructing unified backend cloud layers and linking them securely to modern, responsive React.js interfaces to deliver complete end-to-end projects."
  },
  {
    num: "05",
    name: "Motion & Web Design",
    desc: "Designing clean, modern web layouts with dynamic animations and motion graphics that add storytelling to digital experiences."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="h-auto min-h-[100dvh] lg:h-screen w-screen lg:w-max flex-shrink-0 flex items-center bg-[#FFFFFF] text-[#0C0C0C] z-20 px-6 sm:px-8 md:px-12 lg:px-20 relative snap-start"
    >
      <div className="w-full h-auto lg:h-full flex flex-col justify-center py-12 lg:py-0 pr-0 lg:pr-10 mx-auto">
        
        {/* Services Heading */}
        <FadeIn delay={0} y={40} className="mb-8 sm:mb-10 md:mb-16">
          <h2 className="font-black uppercase select-none text-[#0C0C0C] text-center lg:text-left
            text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[9rem]"
          >
            Services
          </h2>
        </FadeIn>

        {/* Services Cards Row/Col */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full overflow-visible items-center lg:items-stretch pb-10 lg:pb-0">
          {UNIFIED_SERVICES.map((service, index) => (
            <FadeIn 
              key={service.num} 
              delay={index * 0.1} 
              x={0}
              y={20}
              className="flex-shrink-0 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-none lg:w-[400px]
                border border-[#0C0C0C]/10 rounded-[28px] p-6 sm:p-8 md:p-10
                flex flex-col gap-4 sm:gap-6
                transition-all duration-400
                hover:bg-[#0C0C0C]/[0.04] hover:border-[#0C0C0C]/20
                hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]
                group cursor-default"
            >
              {/* Service Number */}
              <span className="font-black text-[#0C0C0C]/10 tracking-tighter leading-none
                text-[4rem] sm:text-[5rem] md:text-[6rem]
                group-hover:text-[#B600A8]/30 transition-colors duration-500">
                {service.num}
              </span>

              {/* Name */}
              <h3 className="font-semibold uppercase text-[#0C0C0C] tracking-tight
                text-lg sm:text-xl md:text-2xl lg:text-[1.75rem]">
                {service.name}
              </h3>

              {/* Description */}
              <p className="font-light leading-relaxed text-[#0C0C0C]/60
                text-[0.8rem] sm:text-sm md:text-base">
                {service.desc}
              </p>

              {/* Bottom accent line */}
              <div className="mt-auto h-[2px] w-0 group-hover:w-16 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] transition-all duration-500" />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
