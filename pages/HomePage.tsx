import React from 'react';
import { Page } from '../types';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import ClientsSection from '../components/ClientsSection';
import SoftwareSolutionsSection from '../components/SoftwareSolutionsSection';
import { motion } from 'motion/react';
import { Layers, Cpu, Code, Briefcase, Nfc, Bot, Target, Zap, CheckCircle, BarChart, Search, PenTool, BotMessageSquare, Megaphone, LineChart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const services = [
    { 
      icon: <Layers size={32} />, 
      title: 'Enterprise SaaS & Web Apps', 
      description: 'End-to-end development of scalable SaaS platforms, custom enterprise applications, and high-performance web ecosystems.', 
      page: Page.About // Placeholder for deep service page
    },
    { 
      icon: <Bot size={32} />, 
      title: 'Custom AI Agent Workforce', 
      description: 'We build intelligent AI agents that handle operations, qualified lead generation, and workflow automation autonomously.', 
      page: Page.JillJillAI 
    },
    { 
      icon: <Cpu size={32} />, 
      title: 'Digital Transformation & IR 4.0', 
      description: 'Modernizing industrial and business workflows with IoT, system analysis, and execution excellence for the digital age.', 
      page: Page.About 
    },
    { 
      icon: <Nfc size={32} />, 
      title: 'Digital Identity & Networking', 
      description: 'NFC-integrated digital identity solutions that transform how professional networking and authority-building happens.', 
      page: Page.VIMSCards 
    },
  ];

  const pillars = [
    { icon: <Code size={24} className="text-cyan" />, title: 'Architecture-First Development', description: 'We don\'t just code; we design scalable architectures that support millions of records and seamless user journeys.' },
    { icon: <Zap size={24} className="text-cyan" />, title: 'High-Performance AI Stack', description: 'Our automation systems are built on proprietary AI models and optimized LLM flows for maximum precision and speed.' },
    { icon: <Search size={24} className="text-cyan" />, title: 'Deep System Analysis', description: 'Every solution starts with a rigorous audit of your existing bottlenecks to ensure our tech solves real business problems.' },
    { icon: <CheckCircle size={24} className="text-cyan" />, title: 'Execution Excellence', description: 'Our culture is built on pixel-perfect delivery, robust testing, and a "solutions-only" mindset for complex technical challenges.' },
  ];

  const processSteps = [
    { number: '01', title: 'Technical Audit', description: 'In-depth analysis of existing systems, bottlenecks, and data flows to identify optimization zones.' },
    { number: '02', title: 'Architecture Design', description: 'Drafting the blueprint for scalable databases, API structures, and intelligent AI workflows.' },
    { number: '03', title: 'Rapid Prototype', description: 'Developing an MVP (Minimum Viable Product) to validate the core logic and user experience early.' },
    { number: '04', title: 'Full-Stack Execution', description: 'Engineering the complete ecosystem with robust frontend, secure backend, and AI integration.' },
    { number: '05', title: 'Scale & Support', description: 'Continuous monitoring, performance tuning, and scaling the infrastructure as your user base grows.' },
  ];

  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: whyVimsRef, isVisible: whyVimsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <HeroSection
        headline={<>Architecting the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Enterprise Tech</span> & AI.</>}
        subtext="Deep-dive analysis meets professional engineering. We build high-scale SaaS platforms, intelligent AI agent workforces, and industrial-grade software solutions for global business owners."
        primaryCta={{ text: 'Book a Strategy Call', onClick: () => window.open('https://cal.com/vims-003/vims-enterprise', '_blank') }}
        secondaryCta={{ text: 'View Architectural Solutions', onClick: () => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' }) }}
        imageUrl="https://picsum.photos/1920/1080?random=1"
        altText="A sophisticated technical architectural diagram overlaid on a futuristic workspace with AI-driven dashboards."
      />

      <ClientsSection />

      <section id="services" ref={servicesRef} className="bg-slate-100/50 dark:bg-navy-light/10 py-16 md:py-32 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-5xl font-poppins font-bold ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Core Competencies</h2>
            <p className={`mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
               We don't just build websites; we engineer industrial-grade digital ecosystems that solve complex business problems through code and intelligence.
            </p>
          </div>
          <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className={`cursor-pointer ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + index * 100}ms` }} onClick={() => onNavigate(service.page)}>
                  <ServiceCard icon={service.icon} title={service.title} description={service.description} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div id="solutions">
        <SoftwareSolutionsSection />
      </div>

      <section ref={whyVimsRef} className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-5xl font-poppins font-bold ${whyVimsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>The VIMS Advantage</h2>
            <p className={`mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 ${whyVimsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
               Combining system analysis with execution excellence to deliver results that go beyond "standard" implementation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {pillars.map((pillar, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className={`flex items-start space-x-6 p-8 bg-white/40 dark:bg-slate-900/40 rounded-4xl backdrop-blur-md border border-white/20 dark:border-slate-800/30 shadow-2xl ${whyVimsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
                    style={{ animationDelay: `${300 + i * 100}ms` }}
                  >
                      <div className="flex-shrink-0 p-4 bg-cyan/10 dark:bg-cyan/20 rounded-2xl">{pillar.icon}</div>
                      <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-light-text mb-2">{pillar.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.description}</p>
                      </div>
                  </motion.div>
              ))}
          </div>
        </div>
      </section>

      <section id="process" ref={processRef} className="bg-slate-100/30 dark:bg-navy-light/10 py-16 md:py-32 px-4 sm:px-6 lg:px-8 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-5xl font-poppins font-bold ${processVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Execution Lifecycle</h2>
            <p className={`mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 ${processVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
               A rigorous, data-driven methodology tailored for high-stakes enterprise projects.
            </p>
          </div>
          <div className="relative">
              <div className="hidden lg:block absolute top-[40%] left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2"></div>
              <div className={`hidden lg:block absolute top-[40%] left-0 w-full h-0.5 bg-gradient-to-r from-cyan via-violet to-orange ${processVisible ? 'animate-pulse' : ''}`}></div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {processSteps.map((step, i) => (
                      <div key={i} className={`relative p-8 bg-white/70 dark:bg-slate-900/70 rounded-4xl border border-slate-200 dark:border-slate-800 backdrop-blur-lg shadow-2xl transition-all hover:border-cyan/50 ${processVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                          <span className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan to-violet text-white font-bold flex items-center justify-center rounded-2xl shadow-lg ring-4 ring-white dark:ring-navy">
                              {step.number}
                          </span>
                          <h3 className="text-xl font-bold mb-4 mt-2">{step.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-navy to-navy-light dark:from-slate-900 dark:to-slate-800 rounded-5xl p-8 md:p-16 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet/10 blur-[100px] rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
                    <div className="mx-auto h-16 w-16 bg-cyan/20 rounded-3xl flex items-center justify-center text-cyan">
                        <BarChart size={36}/>
                    </div>
                    <div>
                        <p className="text-5xl font-bold font-poppins text-white">3-5x</p>
                        <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-2">Operational Growth</p>
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
                    <div className="mx-auto h-16 w-16 bg-violet/20 rounded-3xl flex items-center justify-center text-violet">
                        <Megaphone size={36}/>
                    </div>
                    <div>
                        <p className="text-5xl font-bold font-poppins text-white">24/7</p>
                        <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-2">Autonomous Agency</p>
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
                    <div className="mx-auto h-16 w-16 bg-orange/20 rounded-3xl flex items-center justify-center text-orange">
                        <LineChart size={36}/>
                    </div>
                    <div>
                        <p className="text-5xl font-bold font-poppins text-white">90%</p>
                        <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-2">Logic Automation</p>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;