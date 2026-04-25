
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

const FloatingBookNowButton: React.FC = () => {
  return (
    <motion.button
      whileHover={{ paddingLeft: "2rem", paddingRight: "2rem", boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://cal.com/vims-003/vims-enterprise', '_blank')}
      className="fixed top-1/2 right-0 z-40 transform -translate-y-1/2 -rotate-90 origin-bottom-right 
                 bg-gradient-to-r from-orange to-violet text-light-text font-bold
                 py-3 px-6 rounded-t-lg shadow-2xl shadow-violet/30
                 flex items-center gap-2
                 transition-all duration-300 ease-in-out
                 animate-pulse hover:animate-none"
      aria-label="Book a strategy call"
    >
      <Calendar size={18} />
      <span>Book Now</span>
    </motion.button>
  );
};

export default FloatingBookNowButton;