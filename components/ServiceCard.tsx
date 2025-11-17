import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative p-8 h-full bg-white dark:bg-slate-900/50 rounded-4xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:border-cyan/50 hover:shadow-2xl hover:shadow-cyan/10">
      <div className="absolute -top-1 -right-1 w-1/2 h-1/2 bg-gradient-to-bl from-violet/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="mb-6 w-16 h-16 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl text-cyan">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-light-text mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;