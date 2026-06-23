import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Linkedin, Github, FileText, Download } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Translucent Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Glassmorphic Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[30px] border border-white/15 bg-[#121212]/90 p-8 md:p-10 shadow-2xl"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -left-20 -top-20 -z-10 h-40 w-40 rounded-full bg-[#B600A8]/20 blur-[60px]" />
            <div className="absolute -right-20 -bottom-20 -z-10 h-40 w-40 rounded-full bg-[#7621B0]/20 blur-[60px]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 p-2 text-accent-light/70 transition-all hover:bg-white/10 hover:text-white hover:scale-105"
            >
              <X size={18} />
            </button>

            {/* Title */}
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B600A8]">
                Get In Touch
              </span>
              <h2 className="mt-1 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                Mohamed Rasheed M
              </h2>
              <p className="text-sm font-light uppercase tracking-wider text-accent-light/60">
                Full Stack Engineer
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 mb-8">
              {/* Email */}
              <motion.a
                href="mailto:mdrashee7272@gmail.com"
                whileHover={{ x: 6, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/2 p-4 text-accent-light transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B600A8]/10 text-[#B600A8]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-accent-light/40 font-medium">Email Me</p>
                  <p className="text-sm sm:text-base font-medium text-white">mdrashee7272@gmail.com</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+919787479848"
                whileHover={{ x: 6, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/2 p-4 text-accent-light transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7621B0]/10 text-[#7621B0]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-accent-light/40 font-medium">Call Me</p>
                  <p className="text-sm sm:text-base font-medium text-white">+91 97874 79848</p>
                </div>
              </motion.a>

              {/* Social Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/2 p-4 text-accent-light transition-all duration-300"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Linkedin size={18} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">LinkedIn</span>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/2 p-4 text-accent-light transition-all duration-300"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Github size={18} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">GitHub</span>
                </motion.a>
              </div>
            </div>

            {/* Resume Button */}
            <motion.a
              href="/MOHAMED_RASHEED_M_Resume.pdf"
              download="MOHAMED_RASHEED_M_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-center text-sm font-bold uppercase tracking-widest text-[#0C0C0C] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <FileText size={18} />
              Download Resume PDF
              <Download size={16} className="ml-1" />
            </motion.a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
