import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Check, ChevronDown, Compass } from 'lucide-react';

interface ScrollProgressBarProps {
  activePage: Page;
}

interface ServicePageMeta {
  label: string;
  badge: string;
  estMinutes: number;
}

const LONG_FORM_SERVICE_METADATA: Partial<Record<Page, ServicePageMeta>> = {
  [Page.CostEstimation]: {
    label: 'Mechanical Should-Costing & Supplier Negotiation',
    badge: 'In-Depth Engineering Guide',
    estMinutes: 6
  },
  [Page.AIAutomation]: {
    label: 'Enterprise AI Automation & Autonomous Agents',
    badge: 'Architecture & Workflows',
    estMinutes: 5
  },
  [Page.LinkedInGrowth]: {
    label: 'Executive Personal Branding & Lead System',
    badge: 'Playbook & Roadmap',
    estMinutes: 4
  },
  [Page.JillJillAI]: {
    label: 'JillJill AI Voice Agent & Telephony Engine',
    badge: 'System Architecture',
    estMinutes: 4
  },
  [Page.DigitalMarketing]: {
    label: 'Performance Growth Funnels & Multi-Channel SEO',
    badge: 'Growth Framework',
    estMinutes: 4
  },
  [Page.VIMSCards]: {
    label: 'Smart NFC Digital Identity Solutions',
    badge: 'Product Specs & ROI',
    estMinutes: 3
  }
};

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ activePage }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoverPercent, setHoverPercent] = useState<number | null>(null);
  const [showInitialCue, setShowInitialCue] = useState<boolean>(true);

  const trackRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cueTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

  const pageMeta = LONG_FORM_SERVICE_METADATA[activePage];
  const isLongFormServicePage = Boolean(pageMeta);

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;

      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }

      const currentProgress = Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100));
      setProgress(currentProgress);

      setIsScrolling(true);
      setShowInitialCue(false);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1600);
    });
  }, []);

  useEffect(() => {
    if (!isLongFormServicePage) return;

    setProgress(0);
    setShowInitialCue(true);
    handleScroll();

    if (cueTimeoutRef.current) {
      clearTimeout(cueTimeoutRef.current);
    }
    cueTimeoutRef.current = setTimeout(() => {
      setShowInitialCue(false);
    }, 3600);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (cueTimeoutRef.current) {
        clearTimeout(cueTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [activePage, isLongFormServicePage, handleScroll]);

  // Handle clicking on the progress track to scrub/jump smoothly to any location
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.min(1, Math.max(0, clickX / rect.width));
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - windowHeight;
    
    window.scrollTo({
      top: ratio * scrollableHeight,
      behavior: 'smooth'
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.min(1, Math.max(0, clickX / rect.width));
    setHoverPercent(Math.round(ratio * 100));
  };

  if (!isLongFormServicePage || !pageMeta) {
    return null;
  }

  const estMinutesRemaining = Math.max(
    0,
    Math.ceil(pageMeta.estMinutes * (1 - progress / 100))
  );

  const isCompleted = progress >= 96;

  return (
    <div 
      className="fixed top-20 left-0 right-0 z-40 select-none transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoverPercent(null);
      }}
    >
      {/* Clickable scrubbing container track */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        onMouseMove={handleMouseMove}
        className="w-full h-1.5 sm:h-2 bg-slate-200/60 dark:bg-slate-900/80 backdrop-blur-md cursor-pointer relative group border-b border-slate-300/40 dark:border-slate-800/60"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Reading progress for ${pageMeta.label}`}
      >
        {/* Quartile milestone ticks */}
        {[25, 50, 75].map((quartile) => (
          <div
            key={quartile}
            className="absolute top-0 bottom-0 w-[1px] bg-slate-400/30 dark:bg-slate-700/40 pointer-events-none"
            style={{ left: `${quartile}%` }}
          />
        ))}

        {/* Fill bar */}
        <div
          className="h-full bg-gradient-to-r from-cyan via-violet to-orange transition-[width] duration-100 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Glowing tip indicator */}
          {progress > 1 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan shadow-[0_0_10px_#22d3ee] pointer-events-none" />
          )}
        </div>

        {/* Hover scrub preview marker */}
        {isHovered && hoverPercent !== null && (
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-cyan/60 pointer-events-none"
            style={{ left: `${hoverPercent}%` }}
          />
        )}
      </div>

      {/* Floating subtle visual feedback indicator pill */}
      <AnimatePresence>
        {(isScrolling || isHovered || (showInitialCue && progress < 5)) && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute right-3 sm:right-6 top-3 sm:top-4 pointer-events-none"
          >
            <div className="px-3 py-1.5 rounded-full bg-slate-950/90 dark:bg-slate-900/95 border border-cyan/30 text-white shadow-xl backdrop-blur-xl flex items-center gap-2.5 font-mono text-[11px]">
              {/* Progress Icon & Percent */}
              <div className="flex items-center gap-1.5">
                {isCompleted ? (
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
                )}
                <span className="font-bold text-cyan">
                  {hoverPercent !== null && isHovered 
                    ? `Jump to ${hoverPercent}%` 
                    : showInitialCue && progress < 2
                      ? `${pageMeta.estMinutes}m Guide`
                      : `${Math.round(progress)}%`
                  }
                </span>
              </div>

              <span className="text-slate-600 dark:text-slate-600">|</span>

              {/* Page length & time feedback */}
              <div className="flex items-center gap-1.5 text-slate-300">
                <Clock size={12} className="text-slate-400" />
                <span>
                  {isCompleted 
                    ? 'Guide Completed' 
                    : showInitialCue && progress < 2
                      ? `~${pageMeta.estMinutes} min read · Scroll to explore`
                      : estMinutesRemaining > 0 
                        ? `~${estMinutesRemaining}m left of ${pageMeta.estMinutes}m` 
                        : `< 1m remaining`
                  }
                </span>
              </div>

              {/* Page category badge */}
              <span className="hidden md:inline px-2 py-0.5 rounded-md bg-cyan/10 text-cyan text-[9px] border border-cyan/20">
                {pageMeta.badge}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollProgressBar;
