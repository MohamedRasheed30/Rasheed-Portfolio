import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Give a bit of time at 100% before firing complete
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0C0C0C] text-[#D7E2EA] font-sans"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Background glow effects */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#7621B0]/20 blur-[100px]" 
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Text or Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-8 tracking-wider uppercase flex space-x-1"
        >
          {"MR Portfolio".split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i, ease: "easeOut" }}
              className={`inline-block ${char === ' ' ? 'w-4 md:w-6' : 'bg-clip-text text-transparent bg-gradient-to-b from-white to-[#646973]'}`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Progress Container */}
        <div className="w-[200px] md:w-[300px] flex flex-col items-center gap-4">
          <div className="flex justify-between w-full text-sm text-[#BBCCD7] font-medium tracking-widest">
            <span>LOADING</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-[2px] w-full bg-[#333] rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#7621B0] to-[#B600A8] shadow-[0_0_10px_#B600A8]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.15 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
