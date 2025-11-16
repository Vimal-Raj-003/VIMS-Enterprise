
import React from 'react';
import { Calendar } from 'lucide-react';

const FloatingBookNowButton: React.FC = () => {
  return (
    <button
      onClick={() => window.open('https://cal.com/vims-003/vims-enterprise', '_blank')}
      className="fixed top-1/2 right-0 z-40 transform -translate-y-1/2 -rotate-90 origin-bottom-right 
                 bg-gradient-to-r from-orange to-violet text-light-text font-bold
                 py-3 px-6 rounded-t-lg shadow-2xl shadow-violet/30
                 flex items-center gap-2
                 transition-all duration-300 ease-in-out
                 hover:px-8 hover:shadow-violet/50 animate-pulse hover:animate-none"
      aria-label="Book a strategy call"
    >
      <Calendar size={18} />
      <span>Book Now</span>
    </button>
  );
};

export default FloatingBookNowButton;