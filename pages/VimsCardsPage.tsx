
import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import { Nfc, QrCode, Smartphone, Users, Briefcase, Zap, Globe, DollarSign, Share2, Phone, Mail, Globe2, ShoppingCart, Download, Star, CreditCard, PlayCircle, BarChart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VimsCardsPage: React.FC = () => {

    const technologies = [
        { icon: <Nfc size={28} />, title: "NFC Technology", description: "Contactless sharing with a single tap. Our cards are ISO, RoHS, and CE certified for quality and safety." },
        { icon: <QrCode size={28} />, title: "QR Code Functionality", "description": "Universal compatibility. A quick scan with any smartphone camera instantly opens your digital card." },
        { icon: <Smartphone size={28} />, title: "Multi-Platform Digital Cards", "description": "Customizable templates with rich media support, accessible from any device, anywhere." }
    ];

    const benefits = [
        { icon: <Globe />, text: "Eco-friendly and paperless" },
        { icon: <Zap />, text: "Always-current info with real-time updates" },
        { icon: <Briefcase />, text: "Modern, professional image" },
        { icon: <DollarSign />, text: "Cost-effective (one card replaces thousands)" },
        { icon: <BarChart />, text: "Data-driven networking via analytics" },
        { icon: <Share2 />, text: "Easy sharing via NFC/QR" },
    ];
    
    const catalogItems = [
        { name: "Social Media Cards", price: "₹699", features: ["Classic", "Trendy", "Professional"], color: "bg-cyan/10" },
        { name: "LinkedIn Professional Cards", price: "₹899", features: ["Doodle", "Professional", "Custom"], color: "bg-violet/10" },
        { name: "Google Review Cards", price: "₹899", features: ["Review-focused", "Brand Colors"], color: "bg-orange/10" },
    ];

    const ctaGroups = {
        Immediate: [{ icon: <Phone />, text: 'Call' }, { icon: <Mail />, text: 'Email' }, { icon: <Download />, text: 'Save Contact' }],
        Engagement: [{ icon: <Globe2 />, text: 'Website' }, { icon: <Briefcase />, text: 'Portfolio' }, { icon: <Users />, text: 'Socials' }],
        Conversion: [{ icon: <ShoppingCart />, text: 'Quote Request' }, { icon: <Download />, text: 'Downloads' }, { icon: <Star />, text: 'Reviews' }],
        Advanced: [{ icon: <CreditCard />, text: 'Payments' }, { icon: <PlayCircle />, text: 'Demos' }, { icon: <Zap />, text: 'Exclusive Content' }]
    };

    const { ref: techRef, isVisible: techVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: catalogRef, isVisible: catalogVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <>
            <HeroSection
                headline={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">VIMS Cards</span> - Your Digital Identity</>}
                subtext="Our mission: help businesses achieve 2X sales growth through a powerful, modern, and sustainable digital identity."
                primaryCta={{ text: 'View VIMS Card', onClick: () => window.open('https://www.vimscard.com/', '_blank') }}
                secondaryCta={{ text: 'Explore NFC VIMS Card', onClick: () => window.open('https://enterprise.vimscard.com/', '_blank') }}
                imageUrl="https://picsum.photos/1920/1080?random=3"
                altText="Hyper-realistic close-up of a sleek NFC digital business card being tapped on a smartphone with a glowing contact transfer effect."
            />

            <section ref={techRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${techVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Core Technology & Features</h2>
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-400 ${techVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>Powered by the latest tech for seamless and impressive networking.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {technologies.map((tech, i) => (
                            <div key={i} className={`p-8 text-center bg-slate-900/50 rounded-3xl border border-slate-800 ${techVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-slate-800 rounded-2xl text-cyan">{tech.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                                <p className="text-slate-400">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={benefitsRef} className="bg-navy-light py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${benefitsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Key Benefits</h2>
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-400 ${benefitsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>More than just a card, it's a powerful business tool.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {benefits.map((benefit, i) => (
                            <div key={i} className={`flex items-center p-4 bg-slate-900 rounded-2xl ${benefitsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                                <div className="w-10 h-10 mr-4 flex-shrink-0 flex items-center justify-center bg-slate-800 rounded-full text-cyan">{benefit.icon}</div>
                                <span className="text-sm md:text-base">{benefit.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section ref={catalogRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${catalogVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Product Catalog</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {catalogItems.map((item, i) => (
                            <div key={i} className={`p-8 rounded-4xl border border-slate-800 flex flex-col ${item.color} ${catalogVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${150 + i * 100}ms` }}>
                                <h3 className="text-2xl font-bold font-poppins">{item.name}</h3>
                                <p className="text-4xl font-bold my-4 text-cyan">{item.price}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.features.map(f => <span key={f} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full">{f}</span>)}
                                </div>
                                <button className="mt-auto w-full px-6 py-3 text-base font-bold text-light-text bg-slate-800/50 border-2 border-slate-700 hover:bg-slate-700/50 hover:border-cyan rounded-full transition-all duration-300">
                                    Purchase Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section ref={ctaRef} className="bg-navy-light py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Powerful Call-to-Actions</h2>
                         <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-400 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>Turn every interaction into an opportunity with over 15+ configurable CTAs.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(ctaGroups).map(([groupName, ctas], groupIndex) => (
                            <div key={groupName} className={`${ctaVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + groupIndex * 100}ms` }}>
                                <h3 className="text-lg font-bold text-cyan mb-4">{groupName}</h3>
                                <div className="space-y-3">
                                    {ctas.map((cta, i) => (
                                        <div key={i} className="flex items-center text-slate-300">
                                            {React.cloneElement(cta.icon, {className: "h-5 w-5 mr-3 text-slate-500"})}
                                            <span>{cta.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </section>
        </>
    );
}

export default VimsCardsPage;