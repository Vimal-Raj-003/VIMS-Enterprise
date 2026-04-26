import React from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const clients = [
  { name: 'Hexuno Technologies', logo: 'https://lh3.googleusercontent.com/d/1s0jF0XoV5P-xnhGjpSQjY6BFqQ2ayCOM' },
  { name: 'mochsha', logo: 'https://lh3.googleusercontent.com/d/1EUNNyPikC8FaNMjsPTjl2hXPk6Ww0FQw' },
  { name: 'Radent Engineering', logo: 'https://lh3.googleusercontent.com/d/1hE-duq1Lrx9QD8ogEKCenRkzGbgy0dW_' },
  { name: 'Piest Systems', logo: 'https://lh3.googleusercontent.com/d/1CwpaT43mq-rlodoRXNpOVxtG9LOQ3tBH' },
  { name: 'Ameer Jewellery', logo: 'https://lh3.googleusercontent.com/d/1gv4HLMQ0neMkmUNe9JQArX3JGtvyNXyX' },
  { name: 'Nangai pharmacy', logo: 'https://lh3.googleusercontent.com/d/15yIsmmQ7QrATDWp7KUHtADYC10Yc3LpZ' },
];

const ClientsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-slate-50/20 dark:bg-navy-light/5 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative backdrop-blur-sm">
      {/* Gradient Overlays for smooth fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-slate-50/90 dark:from-navy-light/90 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-slate-50/90 dark:from-navy-light/90 to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 dark:text-light-text tracking-tight"
        >
          Trusted by Industry Leaders
        </motion.h2>
      </div>
      
      <div className="relative flex overflow-x-hidden py-8">
        <div className="animate-marquee flex whitespace-nowrap items-center space-x-12 px-6">
          {clients.concat(clients).map((client, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -5 }}
              className="flex items-center justify-center space-x-6 px-10 py-6 bg-white/30 dark:bg-slate-900/30 backdrop-blur-lg rounded-[2rem] shadow-xl border border-white/40 dark:border-slate-800/40 min-w-[320px] lg:min-w-[400px] h-32 hover:border-cyan/50 transition-all duration-500 group/card relative overflow-hidden"
            >
              {/* Internal blending effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 pointer-events-none"></div>
              
              <div className="h-20 w-full flex items-center justify-center p-2">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain filter grayscale opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/card:scale-125" 
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan/30 to-transparent translate-y-1 group-hover/card:translate-y-0 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Clone for continuous marquee - ensuring same styling */}
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap items-center space-x-12 px-6 py-8">
          {clients.concat(clients).map((client, index) => (
            <motion.div 
              key={`clone-${index}`} 
              whileHover={{ y: -5 }}
              className="flex items-center justify-center space-x-6 px-10 py-6 bg-white/30 dark:bg-slate-900/30 backdrop-blur-lg rounded-[2rem] shadow-xl border border-white/40 dark:border-slate-800/40 min-w-[320px] lg:min-w-[400px] h-32 hover:border-cyan/50 transition-all duration-500 group/card relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 pointer-events-none"></div>
              
              <div className="h-20 w-full flex items-center justify-center p-2">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain filter grayscale opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/card:scale-125" 
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan/30 to-transparent translate-y-1 group-hover/card:translate-y-0 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

