
import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
// FIX: Import Check icon from lucide-react for consistency and remove local SVG definition.
import { Layers, Target, Users, Code, PenTool, Film, Globe, Search, Bot, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const DigitalMarketingPage: React.FC = () => {

    const services = [
        { icon: <Layers />, title: "Digital Strategy Overview", description: "Brand positioning, persona-driven content, conversion funnels, and multi-platform automation." },
        { icon: <Target />, title: "Brand Building", description: "Defining your story, mission, USP, and communication style for a powerful brand identity." },
        { icon: <Users />, title: "Personal / Persona Branding", description: "Specialized strategies for founders, consultants, and CXOs to build thought leadership." },
        { icon: <Code />, title: "Website Design & Optimization", description: "Mobile-responsive UX/UI design, speed optimization, and high-converting landing pages." },
        { icon: <PenTool />, title: "Content Marketing", description: "Creation of blogs, ebooks, LinkedIn carousels, and social content that engages and converts." },
        { icon: <Film />, title: "Targeted Ad Campaigns + Video Ads", description: "Campaigns on FB, IG, YT, Google with retargeting, lookalikes, and professional video production." },
        { icon: <Globe />, title: "Localized Marketing + CRO + SEO", description: "Local language campaigns, landing page conversion rate optimization, and full-stack SEO." },
        { icon: <Bot />, title: "Social Media Automation + YouTube Creation", description: "Automated posting, DM flows, lead capture, and full YouTube channel management." },
    ];
    
    const strategyPoints = [
        "In-depth Market & Competitor Analysis",
        "Customer Persona & Journey Mapping",
        "Multi-Channel Content & Distribution Plan",
        "KPI & Performance Measurement Framework"
    ];

    const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: strategyRef, isVisible: strategyVisible } = useScrollAnimation<HTMLDivElement>();


    return (
        <>
            <HeroSection
                headline={<>Digital Marketing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Brand Growth</span></>}
                subtext="An integrated approach to growth. We combine digital marketing, automation, content, and brand strategy to build a powerful presence for businesses, founders, and entrepreneurs."
                primaryCta={{ text: 'Plan Your Strategy', onClick: () => window.open('https://cal.com/vims-003/vims-enterprise', '_blank') }}
                imageUrl="https://picsum.photos/1920/1080?random=5"
                altText="Realistic marketing team in a studio reviewing holographic ad campaigns and creative storyboards with floating social media icons."
            />

            <section ref={servicesRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Services</h2>
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-400 ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>A complete suite of digital marketing services to elevate your brand.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className={`p-6 h-full bg-slate-900/50 rounded-3xl border border-slate-800 ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                               <div className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-xl text-cyan mb-4">{service.icon}</div>
                               <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                               <p className="text-slate-400 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={strategyRef} className="bg-navy-light py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className={`${strategyVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <img src="https://picsum.photos/600/400?random=11" alt="Team collaborating on a digital marketing strategy" className="rounded-3xl shadow-2xl shadow-violet/20" />
                        </div>
                        <div>
                            <h2 className={`text-3xl font-bold font-poppins mb-4 ${strategyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>Strategy is Everything</h2>
                            <p className={`text-slate-400 mb-6 ${strategyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '250ms' }}>We don't just execute tasks; we build comprehensive, data-driven strategies tailored to your specific business goals. Our process begins with a deep dive into your brand, audience, and competitive landscape to create a roadmap for sustainable growth.</p>
                            <ul className="space-y-3">
                                {strategyPoints.map((point, i) => (
                                    <li key={i} className={`flex items-start ${strategyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${400 + i * 100}ms` }}><Check className="h-5 w-5 text-green mt-1 mr-2 flex-shrink-0" /><span>{point}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DigitalMarketingPage;