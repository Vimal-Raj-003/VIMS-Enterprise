import React from 'react';
import { ServiceCardProps } from '../types';

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, tag }) => {
  return (
    <div className="group border-t border-slate-200 dark:border-slate-800 pt-6 space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="text-[#1D4ED8] dark:text-blue-400">{icon}</div>
        {tag ? (
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{tag}</span>
        ) : null}
      </div>
      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-[#1D4ED8] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};
