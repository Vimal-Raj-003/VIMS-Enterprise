import React from 'react';

import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(34, 211, 238, 0.3)" }}
      className="group relative p-8 h-full bg-white dark:bg-slate-900/50 rounded-4xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:border-cyan/50"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="mb-6 w-16 h-16 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl text-cyan group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-shadow">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-light-text mb-3 group-hover:text-cyan transition-colors">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;