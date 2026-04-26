import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Workflow, Layers, Cpu } from 'lucide-react';

const SoftwareSolutionsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const solutions = [
    {
      icon: <Code size={32} className="text-cyan" />,
      title: 'Scalable SaaS Architecture',
      description: 'We develop multi-tenant SaaS ecosystems with highly resilient backends, ensuring your platform handles concurrent growth without performance degradation.'
    },
    {
      icon: <Workflow size={32} className="text-violet" />,
      title: 'Autonomous Agent Workflows',
      description: 'Beyond simple bots—we engineer self-correcting agent chains that manage complex business logic, lead qualifying, and operational data piping.'
    },
    {
      icon: <Layers size={32} className="text-orange" />,
      title: 'Heterogeneous System Integration',
      description: 'Unified synchronization between disparate ERPs, CRMs, and proprietary databases using robust API gateway architectures and webhooks.'
    },
    {
      icon: <Cpu size={32} className="text-green" />,
      title: 'Industrial Digital Transformation',
      description: 'Deep-dive system analysis to bridge the gap between physical operations and digital intelligence, utilizing AI to predict and optimize output.'
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Software & Digital Solutions
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
            We are able to build robust software solutions, intelligent agent flows, and complete system integrations to digitalize your workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-cyan/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-6 inline-flex p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-light-text mb-3">
                {solution.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
