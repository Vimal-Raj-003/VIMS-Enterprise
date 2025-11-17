import React from 'react';
import { Page } from '../types';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { Briefcase, Nfc, Bot, Target, Zap, CheckCircle, BarChart, Search, PenTool, BotMessageSquare, Megaphone, LineChart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const services = [
    { icon: <Briefcase size={32} />, title: 'LinkedIn Growth & Personal Branding', description: 'Build authority and turn your LinkedIn presence into a consistent lead generation engine.', page: Page.LinkedInGrowth },
    { icon: <Nfc size={32} />, title: 'VIMS Cards - Digital Identity', description: 'Modernize your networking with our NFC-enabled digital business cards.', page: Page.VIMSCards },
    { icon: <Bot size={32} />, title: 'JillJill AI Voice Agent', description: 'Automate B2B cold calling, qualify leads, and book meetings 24/7 with our intelligent voice agent.', page: Page.JillJillAI },
    { icon: <Target size={32} />, title: 'AI Automation & Digital Marketing', description: 'Scale your business with automated workflows and data-driven digital marketing strategies.', page: Page.AIAutomation },
  ];

  const pillars = [
    { icon: <Briefcase size={24} className="text-cyan" />, title: 'Deep Industry Experience', description: 'Specialized expertise in Automotive, Manufacturing, AI, Tech, and B2B sectors.' },
    { icon: <Zap size={24} className="text-cyan" />, title: 'AI-Driven Systems', description: 'We build integrated, automated systems, not just one-off services, for sustainable growth.' },
    { icon: <PenTool size={24} className="text-cyan" />, title: 'Story-Driven & Authentic', description: 'Our approach combines compelling storytelling with automation for ethical and authentic branding.' },
    { icon: <CheckCircle size={24} className="text-cyan" />, title: 'Outcome-Focused', description: 'We focus on tangible results: turning visibility into engagement, and engagement into qualified leads.' },
  ];

  const processSteps = [
    { number: '01', title: 'Audit & Strategy', description: 'We analyze your current digital footprint and define a clear roadmap for growth.' },
    { number: '02', title: 'Blueprint & Design', description: 'We design the content frameworks, automation workflows, and brand identity.' },
    { number: '03', title: 'Creation & Implementation', description: 'Our team creates high-quality content and builds the technical infrastructure.' },
    { number: '04', title: 'Automation Setup', description: 'We deploy AI agents and automation systems to streamline your processes.' },
    { number: '05', title: 'Growth & Optimization', description: 'We monitor performance, providing insights and continuous optimization.' },
  ];

  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: whyVimsRef, isVisible: whyVimsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <HeroSection
        headline={<>Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Digital Presence</span> into a Growth Engine.</>}
        subtext="VIMS Enterprises helps founders, CXOs and growth-focused businesses build authority, automate workflows, and scale revenue through LinkedIn branding, AI automation, digital identity and intelligent voice agents."
        primaryCta={{ text: 'Book a Strategy Call', onClick: () => window.open('https://cal.com/vims-003/vims-enterprise', '_blank') }}
        secondaryCta={{ text: 'Explore Services', onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}
        imageUrl="https://picsum.photos/1920/1080?random=1"
        altText="A futuristic digital command center in an Indian B2B tech office with professionals collaborating around holographic dashboards."
      />

      <section id="services" ref={servicesRef} className="bg-slate-100 dark:bg-navy-light py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>What We Do</h2>
            <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>We provide a suite of services designed to build, automate, and scale your brand.</p>
          </div>
          <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className={`cursor-pointer ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + index * 100}ms` }} onClick={() => onNavigate(service.page)}>
                  <ServiceCard icon={service.icon} title={service.title} description={service.description} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section ref={whyVimsRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${whyVimsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Why Choose VIMS Enterprises?</h2>
            <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${whyVimsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>Our unique approach combines deep expertise with cutting-edge technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, i) => (
                  <div key={i} className={`flex items-start space-x-4 p-6 bg-white dark:bg-slate-900/30 rounded-3xl ${whyVimsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                      <div className="flex-shrink-0">{pillar.icon}</div>
                      <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-light-text">{pillar.title}</h3>
                          <p className="mt-1 text-slate-600 dark:text-slate-400">{pillar.description}</p>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </section>

      <section id="process" ref={processRef} className="bg-slate-100 dark:bg-navy-light py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${processVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Process</h2>
            <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${processVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>A proven 5-step methodology to ensure your success.</p>
          </div>
          <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2"></div>
              <div className={`hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan to-violet ${processVisible ? 'animate-pulse' : ''}`}></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {processSteps.map((step, i) => (
                      <div key={i} className={`relative p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 ${processVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                          <div className="text-3xl font-bold text-cyan mb-4">{step.number}</div>
                          <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">{step.description}</p>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="bg-white dark:bg-slate-900/50 rounded-4xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                    <BarChart className="mx-auto h-12 w-12 text-cyan mb-3"/>
                    <p className="text-4xl font-bold font-poppins">3-5x</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Engagement Uplift</p>
                </div>
                <div className="p-4 border-y md:border-y-0 md:border-x border-slate-200 dark:border-slate-800">
                    <Megaphone className="mx-auto h-12 w-12 text-violet mb-3"/>
                    <p className="text-4xl font-bold font-poppins">24/7</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Consistent Online Presence</p>
                </div>
                <div className="p-4">
                    <LineChart className="mx-auto h-12 w-12 text-orange mb-3"/>
                    <p className="text-4xl font-bold font-poppins">90%</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Automated Lead Flows</p>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;