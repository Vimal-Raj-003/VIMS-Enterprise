import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Workflow, Layers, Cpu, Building2 } from 'lucide-react';

const SoftwareSolutionsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const solutions = [
    {
      icon: <Building2 size={28} className="text-blue-500" />,
      title: 'Hospital Management System (HMS)',
      description: 'Unified clinical EMR, bed turnover tracking, connected ICU telemetry, and automated cashless insurance claims.'
    },
    {
      icon: <Workflow size={28} className="text-violet" />,
      title: 'Autonomous AI Workforces',
      description: 'Self-operating AI agent flows that qualify leads, answer customer questions, and automate operational tasks.'
    },
    {
      icon: <Code size={28} className="text-cyan" />,
      title: 'Scalable SaaS Architecture',
      description: 'High-performance cloud platforms built for reliable scaling, fast speeds, and high concurrent user loads.'
    },
    {
      icon: <Cpu size={28} className="text-emerald-500" />,
      title: 'Operations & Process Modernization',
      description: 'Connected digital tools that eliminate paper bottlenecks, cut operational waste, and improve daily turnaround.'
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/5 rounded-full filter blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Software Solutions
          </h2>
          <p className={`mt-3 max-w-xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
            Practical, scalable software designed to automate operations and accelerate growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-cyan/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-5 inline-flex p-3.5 bg-white dark:bg-slate-800 rounded-2xl shadow-xs">
                {solution.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-light-text mb-2">
                {solution.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutionsSection;
