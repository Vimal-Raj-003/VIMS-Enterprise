import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import { Bot, PhoneCall, CheckSquare, Calendar, BrainCircuit, BarChart, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const JillJillAiPage: React.FC = () => {
    const features = [
        { icon: <PhoneCall />, title: "Cold Calling Automation", description: "Makes 200-300 calls per day per agent, ensuring massive outreach without manual effort." },
        { icon: <CheckSquare />, title: "Intelligent Lead Qualification", description: "Uses BANT methodology and custom scoring to identify high-potential leads in real-time." },
        { icon: <Calendar />, title: "Seamless Appointment Booking", description: "Integrates directly with Calendly, Outlook, and Google Calendar to book meetings automatically." },
        { icon: <BrainCircuit />, title: "Advanced Objection Handling", description: "Pre-trained on common objections and continuously learns from conversations to improve performance." },
        { icon: <BarChart />, title: "Real-Time Analytics", description: "Live call monitoring, transcriptions, and dashboards provide full visibility into campaign performance." },
        { icon: <Zap />, title: "Post-Call Workflow Automation", description: "Updates your CRM, schedules callbacks, and sends follow-up emails/SMS messages instantly." },
    ];
    
    const roiMetrics = [
        { metric: "Outbound Calls/Day", ai: "180-250", human: "60-80" },
        { metric: "Lead Qualification Rate", ai: "45-60%", human: "30-40%" },
        { metric: "Meeting Booking Rate", ai: "8-15%", human: "2-5%" },
        { metric: "Lead Response Time", ai: "30-90 sec", human: "5-30 min" },
        { metric: "SDR Effort Reduction", ai: "70-90%", human: "N/A" },
        { metric: "Cost per Qualified Meeting", ai: "₹550–₹850", human: "₹3,200–₹5,800" },
    ];

    const processSteps = [
        "Discovery & Setup",
        "Script & Voice Mapping",
        "Agent Training & Test Calls",
        "Live Deployment",
        "Monitoring & Optimization",
        "Scale & Expand"
    ];

    const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: roiRef, isVisible: roiVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: workflowRef, isVisible: workflowVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <>
            <HeroSection
                headline={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">JillJill</span> – AI Voice Agent for B2B Sales</>}
                subtext="Automate cold-calling. Qualify leads. Book meetings. 24×7. JillJill handles top-of-funnel outreach so your sales team can focus on closing."
                primaryCta={{ text: 'Request a Demo', onClick: () => window.open('https://www.jilljill.in/', '_blank') }}
                imageUrl="https://picsum.photos/1920/1080?random=4"
                altText="Ultra-realistic AI voice assistant avatar speaking through a phone interface with call analytics in the background of a futuristic sales office."
            />

            <section ref={featuresRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Key Features</h2>
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>An entire top-of-funnel sales team, in one AI agent.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className={`p-6 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                               <div className="flex items-center mb-4">
                                   <div className="w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl text-cyan mr-4">{feature.icon}</div>
                                   <h3 className="text-lg font-bold">{feature.title}</h3>
                               </div>
                                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={roiRef} className="bg-slate-100 dark:bg-navy-light py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                     <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${roiVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>The ROI of AI Sales Automation</h2>
                         <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${roiVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>JillJill doesn't just save time—it drives significant, measurable financial results.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-300 dark:border-slate-700">
                                    <th className={`p-4 text-sm font-semibold uppercase text-slate-500 dark:text-slate-400 ${roiVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>Metric</th>
                                    <th className={`p-4 text-sm font-semibold uppercase text-cyan text-center ${roiVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>JillJill AI Agent</th>
                                    <th className={`p-4 text-sm font-semibold uppercase text-slate-500 text-center ${roiVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>Human SDR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roiMetrics.map((row, i) => (
                                    <tr key={i} className={`border-b border-slate-200 dark:border-slate-800 ${roiVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${400 + i * 100}ms` }}>
                                        <td className="p-4 font-medium">{row.metric}</td>
                                        <td className="p-4 text-center font-bold text-lg text-slate-900 dark:text-light-text">{row.ai}</td>
                                        <td className="p-4 text-center text-slate-600 dark:text-slate-400">{row.human}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section ref={workflowRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${workflowVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Implementation Workflow</h2>
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${workflowVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>Our structured 6-step process ensures a smooth and successful deployment.</p>
                    </div>
                     <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {processSteps.map((step, i) => (
                             <div key={i} className={`flex items-center p-3 pr-5 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-cyan/70 hover:shadow-lg hover:shadow-cyan/10 transform hover:-translate-y-1 ${workflowVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                                 <div className="w-10 h-10 flex-shrink-0 rounded-full bg-cyan text-navy dark:text-light-text flex items-center justify-center font-bold text-lg mr-4">{i + 1}</div>
                                 <span className="font-medium text-base">{step}</span>
                             </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default JillJillAiPage;