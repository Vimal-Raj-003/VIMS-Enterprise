import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import { Target, ShieldCheck, Handshake, Briefcase, Nfc, Bot, Zap, Megaphone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutPage: React.FC = () => {

    const values = [
        { icon: <Target />, title: "Depth, Not Fluff", description: "We focus on strategies that deliver real, measurable business outcomes, not just vanity metrics." },
        { icon: <ShieldCheck />, title: "Ethical Branding", description: "Our methods are built on authenticity and transparency to build genuine trust with your audience." },
        { icon: <Briefcase />, title: "Industry Specialization", description: "Deep expertise in Automotive, Manufacturing, AI, Tech, and B2B allows us to speak your language." },
        { icon: <Handshake />, title: "Long-term Partnerships", description: "We aim to become an extension of your team, dedicated to your long-term growth and success." },
    ];
    
    const teamMembers = [
        { name: "Placeholder Name", role: "Founder & CEO", imageUrl: "https://picsum.photos/400/400?random=15" },
        { name: "Placeholder Name", role: "Head of Automation", imageUrl: "https://picsum.photos/400/400?random=16" },
        { name: "Placeholder Name", role: "Lead LinkedIn Strategist", imageUrl: "https://picsum.photos/400/400?random=17" },
    ];
    
    const focusAreas = [
        { icon: <Briefcase className="text-cyan" />, name: "LinkedIn Authority" },
        { icon: <Nfc className="text-violet" />, name: "Digital Identity" },
        { icon: <Bot className="text-orange" />, name: "AI Voice Agents" },
        { icon: <Zap className="text-green" />, name: "AI Automation" },
        { icon: <Megaphone className="text-cyan" />, name: "Personal Branding" },
    ];

    const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation<HTMLDivElement>();


    return (
        <>
            <HeroSection
                headline={<>About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">VIMS Enterprises</span></>}
                subtext="We are a modern digital transformation partner dedicated to helping businesses and their leaders build unshakable authority and automated growth systems."
                primaryCta={{ text: 'Meet the Team', onClick: () => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }) }}
                imageUrl="https://picsum.photos/1920/1080?random=7"
                altText="Realistic team photo of diverse Indian professionals in a futuristic office with holographic screens showing business diagrams."
            />

            <section ref={storyRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className={`${storyVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <h2 className="text-3xl font-bold font-poppins mb-4">Our Story</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">VIMS Enterprises was founded with a single mission: to bridge the gap between traditional business practices and the immense potential of digital technology and AI. We saw brilliant founders and established companies struggling to translate their real-world expertise into online authority and efficient operations.</p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Today, we are a dedicated partner for businesses in specialized industries, providing the strategic guidance and technical implementation needed to thrive in the digital age. Our integrated approach ensures that every piece of your digital presence—from your personal brand to your sales process—works together as a powerful, cohesive growth engine.</p>
                        </div>
                        <div className={`bg-white dark:bg-slate-900/50 p-8 rounded-4xl border border-slate-200 dark:border-slate-800 ${storyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                            <h3 className="text-xl font-bold mb-6 text-center">Our Core Focus Areas</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {focusAreas.map((area, i) => (
                                    <div key={area.name} className={`flex flex-col items-center text-center ${storyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                                        <div className="w-16 h-16 mb-2 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full">{React.cloneElement(area.icon, {size: 28})}</div>
                                        <p className="text-sm font-medium">{area.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={valuesRef} className="bg-slate-100 dark:bg-navy-light py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${valuesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Values</h2>
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${valuesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>The principles that guide every strategy we build and every partnership we form.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className={`p-6 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 ${valuesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                               <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl text-cyan">{value.icon}</div>
                               <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                               <p className="text-slate-600 dark:text-slate-400 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="team" ref={teamRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${teamVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Founders & Team</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {teamMembers.map((member, i) => (
                            <div key={i} className={`text-center ${teamVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${150 + i * 100}ms` }}>
                                <img src={member.imageUrl} alt={`Photo of ${member.name}`} className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-slate-300 dark:border-slate-700 mb-4" />
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-cyan">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;