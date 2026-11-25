import React, { useEffect, useState } from 'react';
import { Page } from '../types';

interface ScrollProgressBarProps {
  activePage: Page;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ activePage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, [activePage]);

  return (
    <div className="fixed top-20 left-0 right-0 h-[2px] z-40 pointer-events-none bg-transparent">
      <div
        className="h-full bg-[#1D4ED8] transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
