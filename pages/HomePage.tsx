import React from 'react';
import { Page } from '../types';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import ClientsSection from '../components/ClientsSection';
import SoftwareSolutionsSection from '../components/SoftwareSolutionsSection';
import { motion } from 'motion/react';
import { Layers, Cpu, Code, Briefcase, Nfc, Bot, Target, Zap, CheckCircle, BarChart, Search, PenTool, BotMessageSquare, Megaphone, LineChart, Calculator, Activity, Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const services = [
    { 
      icon: <Building2 size={28} className="text-blue-500" />, 
      title: 'HMS Hospital Ecosystem', 
      description: 'End-to-end hospital platform: AI clinical EMR, bed turnover tracking, ICU telemetry, and cashless insurance.', 
      page: Page.HospitalManagement
    },
    { 
      icon: <Cpu size={28} className="text-cyan" />, 
      title: 'AI Automation & Agents', 
      description: 'Autonomous AI workflows and intelligent agent teams that eliminate repetitive manual operations.', 
      page: Page.AIAutomation
    },
    { 
      icon: <Calculator size={28} className="text-violet" />, 
      title: 'Cost Estimation & Should-Costing', 
      description: 'Scientific bottom-up should-costing and negotiation analytics for sheet metal, molding, and casting.', 
      page: Page.CostEstimation 
    },
    { 
      icon: <Bot size={28} className="text-orange" />, 
      title: 'Custom AI Voice Agent', 
      description: 'Multilingual conversational voice calling for lead qualification and automated appointment booking.', 
      page: Page.JillJillAI 
    },
  ];

  const pillars = [
    { icon: <Code size={22} className="text-cyan" />, title: 'Architecture-First', description: 'Scalable cloud infrastructure built for millions of records, fast responses, and high availability.' },
    { icon: <Zap size={22} className="text-cyan" />, title: 'High-Accuracy AI Stack', description: 'Practical AI pipelines tuned specifically to automate workflows without hallucinations.' },
    { icon: <Search size={22} className="text-cyan" />, title: 'Root-Cause Analysis', description: 'We audit your operational bottlenecks first to deliver software that produces measurable ROI.' },
    { icon: <CheckCircle size={22} className="text-cyan" />, title: 'Clean Execution', description: 'Production-ready code, rigorous testing, and on-time delivery on every release.' },
  ];

  const processSteps = [
    { number: '01', title: 'Audit & Goals', description: 'Map existing systems, data flows, and operational bottlenecks.' },
    { number: '02', title: 'System Blueprint', description: 'Design clean databases, API schemas, and intuitive workflows.' },
    { number: '03', title: 'Fast Prototype', description: 'Deploy an interactive MVP to validate usability and core logic.' },
    { number: '04', title: 'Full Build', description: 'Engineer secure, scalable software with complete integrations.' },
    { number: '05', title: 'Deploy & Scale', description: 'Continuous monitoring, performance tuning, and ongoing support.' },
  ];

  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: whyVimsRef, isVisible: whyVimsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <HeroSection
        variant="landing"
        headline={<>Intelligent Software & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Enterprise AI</span> Solutions.</>}
        subtext="We engineer reliable digital platforms: unified hospital management systems (HMS), autonomous AI agent workflows, and manufacturing should-cost estimation."
        primaryCta={{ text: 'Book a Strategy Call', onClick: () => window.open('https://cal.com/vims-003/vims-enterprise', '_blank') }}
        secondaryCta={{ text: 'Explore Solutions', onClick: () => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' }) }}
        imageUrl="https://picsum.photos/1920/1080?random=1"
        altText="A sophisticated technical architectural diagram overlaid on a futuristic workspace with AI-driven dashboards."
      />

      <ClientsSection />

      <section id="services" ref={servicesRef} className="bg-slate-100/50 dark:bg-navy-light/10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Core Capabilities</h2>
            <p className={`mt-3 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
              Specialized products and enterprise engineering built for measurable business impact.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className={`cursor-pointer ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + index * 100}ms` }} onClick={() => onNavigate(service.page)}>
                  <ServiceCard icon={service.icon} title={service.title} description={service.description} />
              </div>
            ))}
          </div>

          {/* Proprietary Product Spotlight: VIMS HMS Ecosystem */}
          <div className="mt-12 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-navy to-slate-900 border border-cyan/30 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan">
                  <Activity size={14} className="animate-pulse" />
                  <span className="uppercase font-bold tracking-wider">Hospital Management Solution</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">VIMS MediCore OS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  VIMS MediCore: Complete Hospital Ecosystem
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Unified clinical EMR, faster bed turnover, live ICU telemetry, PACS/LIS lab sync, and automated cashless insurance pre-authorization.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate(Page.HospitalManagement)}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan to-blue-600 text-white shadow-lg hover:shadow-cyan/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                  >
                    <span>Open HMS Showcase</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate(Page.HospitalManagement)}
                    className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border border-slate-700 bg-white/5 hover:bg-white/10 text-slate-200 transition-colors"
                  >
                    Calculate Bed ROI
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-slate-400">Interoperability</span>
                    <span className="text-cyan font-semibold">HL7 FHIR & ABDM Compliant</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-slate-400">Discharge Turnaround</span>
                    <span className="text-emerald-400 font-semibold tabular-nums">&lt;28 min (from 3 hrs)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-slate-400">Prescription Safety</span>
                    <span className="text-blue-400 font-semibold tabular-nums">99.98% Accuracy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Deployment</span>
                    <span className="text-violet font-semibold">Hybrid Edge + Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div id="solutions">
        <SoftwareSolutionsSection />
      </div>

      <section ref={whyVimsRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${whyVimsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Why Partner with VIMS</h2>
            <p className={`mt-3 max-w-xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 ${whyVimsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
              Engineered for reliability, transparent workflows, and measurable business performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {pillars.map((pillar, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -3 }}
                    className={`flex items-start space-x-5 p-6 sm:p-7 bg-white/40 dark:bg-slate-900/40 rounded-3xl backdrop-blur-md border border-white/20 dark:border-slate-800/30 shadow-lg ${whyVimsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
                    style={{ animationDelay: `${300 + i * 100}ms` }}
                  >
                      <div className="flex-shrink-0 p-3.5 bg-cyan/10 dark:bg-cyan/20 rounded-2xl">{pillar.icon}</div>
                      <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-light-text mb-1">{pillar.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">{pillar.description}</p>
                      </div>
                  </motion.div>
              ))}
          </div>
        </div>
      </section>

      <section id="process" ref={processRef} className="bg-slate-100/30 dark:bg-navy-light/10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${processVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our 5-Step Process</h2>
            <p className={`mt-3 max-w-xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 ${processVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
              From initial technical discovery to production deployment and long-term support.
            </p>
          </div>
          <div className="relative">
              <div className="hidden lg:block absolute top-[40%] left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2"></div>
              <div className={`hidden lg:block absolute top-[40%] left-0 w-full h-0.5 bg-gradient-to-r from-cyan via-violet to-orange ${processVisible ? 'animate-pulse' : ''}`}></div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {processSteps.map((step, i) => (
                      <div key={i} className={`relative p-6 sm:p-7 bg-white/70 dark:bg-slate-900/70 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-lg shadow-md transition-all hover:border-cyan/50 ${processVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                          <span className="absolute -top-3.5 -left-3.5 w-10 h-10 bg-gradient-to-br from-cyan to-violet text-white text-sm font-bold flex items-center justify-center rounded-xl shadow-md ring-4 ring-white dark:ring-navy">
                              {step.number}
                          </span>
                          <h3 className="text-lg font-bold mb-2 mt-2">{step.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{step.description}</p>
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