import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import { Zap, LogIn, MessageCircle, Calendar, Megaphone, Video, Globe, Star, BrainCircuit, HardHat, FileText, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AiAutomationPage: React.FC = () => {
    const [selectedWorkflow, setSelectedWorkflow] = useState<number | null>(0);

    const workflows = [
        { 
            icon: <LogIn />, 
            title: "Lead Capture & Consolidation", 
            description: "Unify leads from websites, ads, social media, and offline sources into a single CRM or database, preventing duplicates.",
            details: [
                "Connects to: Website forms, Facebook/Instagram Lead Ads, LinkedIn Ads, WhatsApp.",
                "Integrates with: Google Sheets, Airtable, Zoho, HubSpot, Pipedrive.",
                "Key Feature: Smart duplicate detection and automatic lead tagging for segmentation."
            ]
        },
        { 
            icon: <MessageCircle />, 
            title: "Instant Lead Follow-Up", 
            description: "Automated, multi-channel (WhatsApp, Email, SMS) follow-ups with escalation logic to ensure no lead goes cold.",
            details: [
                "Sends personalized messages within 60 seconds of lead capture.",
                "Configurable follow-up sequences (e.g., Day 1, Day 3, Day 5).",
                "Notifies sales team if a lead responds or shows high intent."
            ]
        },
        { 
            icon: <Calendar />, 
            title: "Appointment & Booking Automation", 
            description: "Seamlessly book demos and appointments, send reminders, and collect post-meeting feedback.",
            details: [
                "Integrates with Calendly, Google Calendar, and Outlook.",
                "Sends automated email/SMS reminders 24 hours and 1 hour before meetings.",
                "Triggers post-meeting feedback forms and 'thank you' messages."
            ]
        },
        { 
            icon: <Megaphone />, 
            title: "Marketing & Social Media System", 
            description: "Auto-post content, generate captions, and track engagement across all major social platforms.",
            details: [
                "Schedule posts for LinkedIn, Facebook, Instagram, YouTube, and Google Business Profile.",
                "Use AI to generate relevant captions and hashtags.",
                "Consolidate engagement metrics into a central dashboard."
            ]
        },
        { 
            icon: <Video />, 
            title: "UGC Video & Ad Creative Workflows", 
            description: "Generate AI-driven user-generated style videos with auto voiceovers and captions for powerful ad creatives.",
            details: [
                "Create multiple video variations from a single script.",
                "Automated voiceovers in multiple languages and accents.",
                "Directly push generated videos to social media ad managers."
            ]
        },
        { 
            icon: <Globe />, 
            title: "Localized Marketing Automation", 
            description: "Automatically translate content and create region-specific campaigns to expand your reach.",
            details: [
                "Auto-translate ad copy, social posts, and video captions.",
                "Segment audiences based on geographic location for targeted campaigns.",
                "Ensures brand consistency across different markets."
            ]
        },
        { 
            icon: <Star />, 
            title: "Feedback & Review Automation", 
            description: "Request feedback post-purchase, directing happy customers to review sites and handling negative feedback internally.",
            details: [
                "Automatically sends feedback requests after a product or service is delivered.",
                "If rating is 4-5 stars, directs user to Google, Trustpilot, etc.",
                "If rating is 1-3 stars, opens an internal ticket for customer support to resolve."
            ]
        },
        { 
            icon: <BrainCircuit />, 
            title: "AI Integrations & Intelligent Agents", 
            description: "Incorporate AI for lead scoring, content summarization, and automated decision-making in your workflows.",
            details: [
                "Automatically score leads based on their data and behavior.",
                "Summarize long email threads or documents for quick insights.",
                "Route tasks and leads based on AI-driven decisions."
            ]
        },
    ];

    const deliverables = [
        { icon: <HardHat />, title: "Workflow Design & Implementation", description: "Full design and build of your custom automation workflows in n8n or similar platforms." },
        { icon: <Zap />, title: "API & CRM Integration", description: "Seamless connection of your CRM, social media, and other essential business tools." },
        { icon: <FileText />, title: "Documentation & Support", description: "Comprehensive documentation and 20 days of post-implementation support to ensure a smooth transition." }
    ];

    const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: solutionsRef, isVisible: solutionsVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: deliverRef, isVisible: deliverVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <>
            <HeroSection
                headline={<>AI-Powered Workflows to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Scale Your Business</span></>}
                subtext="Modern workflows that capture, follow up, book, analyze, and automate core business operations across leads, content, feedback and reviews."
                primaryCta={{ text: 'Automate My Business', onClick: () => window.open('https://cal.com/vims-003/vims-enterprise', '_blank') }}
                imageUrl="https://picsum.photos/1920/1080?random=6"
                altText="Futuristic 3D automation flow diagram with nodes for social media, CRM, and payments, watched by a business owner on a large screen."
            />

            <section ref={philosophyRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className={`text-3xl font-bold font-poppins mb-4 ${philosophyVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Automation Philosophy</h2>
                            <p className={`text-slate-600 dark:text-slate-400 mb-6 ${philosophyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>We believe automation should be custom, pain-point-driven, and seamlessly integrated into your existing processes. Our goal is to save you time, increase revenue, and eliminate manual work so you can focus on what you do best.</p>
                            <div className="space-y-3">
                                <div className={`flex items-center ${philosophyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}><Zap className="h-5 w-5 text-green mr-2" /><span>Custom workflows designed for your specific needs.</span></div>
                                <div className={`flex items-center ${philosophyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}><Zap className="h-5 w-5 text-green mr-2" /><span>Integration with your favorite tools (Zoho, HubSpot, etc.).</span></div>
                                <div className={`flex items-center ${philosophyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}><Zap className="h-5 w-5 text-green mr-2" /><span>Focus on ROI: saving time and increasing revenue.</span></div>
                            </div>
                        </div>
                        <div className={`${philosophyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                            <img src="https://picsum.photos/seed/n8nworkflow/600/400" alt="A professional n8n automation workflow diagram showing interconnected business apps" className="rounded-3xl shadow-2xl shadow-cyan/20" />
                        </div>
                    </div>
                </div>
            </section>

            <section ref={solutionsRef} className="bg-slate-100 dark:bg-navy-light py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${solutionsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Automation Solutions Infographic</h2>
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${solutionsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>Click on a workflow to see more details.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workflows.map((flow, i) => (
                            <div 
                                key={i} 
                                onClick={() => setSelectedWorkflow(selectedWorkflow === i ? null : i)}
                                className={`p-6 h-full bg-white dark:bg-slate-900 rounded-3xl border transition-all duration-300 cursor-pointer ${solutionsVisible ? 'animate-fade-in-up' : 'opacity-0'} ${
                                    selectedWorkflow === i 
                                    ? 'border-cyan shadow-lg shadow-cyan/20 transform -translate-y-2' 
                                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                                }`}
                                style={{ animationDelay: `${300 + i * 100}ms` }}
                            >
                               <div className="w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl text-cyan mb-4">{flow.icon}</div>
                               <h3 className="text-lg font-bold mb-2">{flow.title}</h3>
                               <p className="text-slate-600 dark:text-slate-400 text-sm">{flow.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 min-h-[250px]">
                        {selectedWorkflow !== null && (
                            <div className="bg-white dark:bg-slate-900/50 rounded-4xl p-8 border border-cyan/50 transition-opacity duration-500 animate-fade-in-up">
                                <h3 className="text-2xl font-bold font-poppins text-cyan mb-4">{workflows[selectedWorkflow].title}</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-6">This workflow is designed to streamline the process of "{workflows[selectedWorkflow].title.toLowerCase()}" by integrating key tools and actions.</p>
                                <ul className="space-y-3">
                                    {workflows[selectedWorkflow].details.map((detail, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            <section ref={deliverRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white dark:bg-slate-900/50 rounded-4xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                        <h2 className={`text-2xl md:text-3xl font-poppins font-bold text-center mb-8 ${deliverRef ? 'animate-fade-in-up' : 'opacity-0'}`}>What We Deliver</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {deliverables.map((item, i) => (
                                <div key={i} className={`flex items-start space-x-4 ${deliverRef ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${150 + i * 150}ms` }}>
                                    {React.cloneElement(item.icon, { className: "h-8 w-8 text-cyan mt-1 flex-shrink-0" })}
                                    <div>
                                        <h3 className="text-lg font-bold">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AiAutomationPage;