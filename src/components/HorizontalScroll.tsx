/* eslint-disable react-refresh/only-export-components */
import React, { useRef, useLayoutEffect, createContext, useContext } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

// Context to share the scroll container ref with children for advanced scroll animations
export const ScrollContext = createContext<React.RefObject<HTMLDivElement> | null>(null);

export const useScrollContainer = () => useContext(ScrollContext);

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Map vertical wheel to horizontal scroll so users can still scroll with a normal mouse wheel or trackpad
  useLayoutEffect(() => {
    const navigateToSection = (direction: number, container: HTMLElement) => {
        const currentScroll = container.scrollLeft;
        const wrapper = container.children[1] as HTMLElement;
        if (!wrapper) return null;

        const sections = Array.from(wrapper.children) as HTMLElement[];
        
        // Find the index of the section currently closest to the center of the view
        let closestIndex = 0;
        let minDiff = Infinity;
        
        sections.forEach((s, idx) => {
            const diff = Math.abs(s.offsetLeft - currentScroll);
            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = idx;
            }
        });

        // Determine the target index
        let targetIndex = closestIndex + direction;
        if (targetIndex < 0) targetIndex = 0;
        if (targetIndex >= sections.length) targetIndex = sections.length - 1;

        return sections[targetIndex].offsetLeft;
    };

    let isScrolling = false;
    let wheelTimeout: ReturnType<typeof setTimeout>;

    const handleWheel = (e: WheelEvent) => {
      // Only apply custom wheel logic on desktop (md breakpoint and up)
      if (window.innerWidth < 768) return;
      if (!scrollContainerRef.current) return;

      // If we're scrolling vertically, apply it to horizontal scroll
      if (e.deltaY !== 0 && Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        e.preventDefault();
        
        // Always reset the timeout as long as the wheel is spinning (momentum)
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          isScrolling = false;
        }, 80); // Wait 80ms of NO wheel events before allowing the next page turn

        if (isScrolling) return;
        isScrolling = true;

        const container = scrollContainerRef.current;
        const direction = e.deltaY > 0 ? 1 : -1;
        const targetScroll = navigateToSection(direction, container);

        if (targetScroll !== null) {
            container.scrollTo({ left: targetScroll, behavior: 'smooth' });
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  // Native Scroll Progress
  const { scrollXProgress } = useScroll({ container: scrollContainerRef });
  // Combine progress: use Y on mobile, X on desktop. (This is a simplified approach)
  // Since we can't dynamically switch the spring easily without state, we'll just use X progress for the bar, and hide it on mobile.
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <ScrollContext.Provider value={scrollContainerRef}>
      <div
        ref={scrollContainerRef}
        className="flex flex-col md:flex-row flex-nowrap h-[100dvh] md:h-screen w-screen overflow-y-auto md:overflow-y-hidden overflow-x-hidden md:overflow-x-auto snap-y md:snap-x snap-mandatory"
      >
        {/* Global Scroll Progress Bar - hidden on mobile */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#B600A8] to-[#7621B0] origin-left z-50 rounded-r-full hidden md:block"
          style={{ scaleX }}
        />
        <div className="flex flex-col md:flex-row flex-nowrap w-full md:w-max h-max md:h-full">
          {children}
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default HorizontalScroll;
