import React from 'react';
import { Globe, Building2, Cpu, Sparkles, Hexagon, ShieldCheck, Zap, Layers } from 'lucide-react';

const clients = [
  { name: 'Product Cost Solutions', type: 'Global', icon: <Globe className="w-6 h-6 text-cyan" /> },
  { name: 'chiptip', type: 'Global', icon: <Cpu className="w-6 h-6 text-violet" /> },
  { name: 'Hexuno Technologies', type: 'Global', icon: <Hexagon className="w-6 h-6 text-orange" /> },
  { name: 'Radent Engineering', type: 'Indian', icon: <Building2 className="w-6 h-6 text-green" /> },
  { name: 'Piest Systems', type: 'Indian', icon: <Layers className="w-6 h-6 text-cyan" /> },
  { name: 'Ameer Jewellery', type: 'Indian', icon: <Sparkles className="w-6 h-6 text-yellow-500" /> },
  { name: 'n+', type: 'Indian', icon: <Zap className="w-6 h-6 text-red-500" /> },
  { name: 'mochsha', type: 'Indian', icon: <ShieldCheck className="w-6 h-6 text-violet" /> },
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50/30 dark:bg-navy-light/10 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative backdrop-blur-sm">
      {/* Gradient Overlays for smooth fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50/50 dark:from-navy-light/50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50/50 dark:from-navy-light/50 to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-sm uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400 mb-2">
          Trusted By Industry Leaders
        </h2>
        <p className="text-2xl md:text-3xl font-poppins font-bold text-slate-900 dark:text-light-text">
          Global & Indian Clients
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap items-center space-x-8 px-4">
          {clients.concat(clients).map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center space-x-3 px-8 py-5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 min-w-[240px] hover:shadow-md hover:border-cyan/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              {client.icon}
              <span className="text-lg font-bold text-slate-700 dark:text-slate-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap items-center space-x-8 px-4">
          {clients.concat(clients).map((client, index) => (
            <div 
              key={`clone-${index}`} 
              className="flex items-center justify-center space-x-3 px-8 py-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 min-w-[240px] hover:shadow-md hover:border-cyan/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              {client.icon}
              <span className="text-lg font-bold text-slate-700 dark:text-slate-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
