import React from 'react';
import { motion } from 'motion/react';
import HeroSection from '../components/HeroSection';
import { Nfc, QrCode, Smartphone, Users, Briefcase, Zap, Globe, DollarSign, Share2, Phone, Mail, Globe2, ShoppingCart, Download, Star, CreditCard, PlayCircle, BarChart, ShoppingBag } from 'lucide-react';
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
        { name: "Social Media Cards", price: "₹699", features: ["Classic", "Trendy", "Professional"], color: "bg-cyan/10 dark:bg-cyan/10" },
        { name: "LinkedIn Professional Cards", price: "₹899", features: ["Doodle", "Professional", "Custom"], color: "bg-violet/10 dark:bg-violet/10" },
        { name: "Google Review Cards", price: "₹899", features: ["Review-focused", "Brand Colors"], color: "bg-orange/10 dark:bg-orange/10" },
    ];

    const testimonials = [
        { name: "Rajesh Kumar", role: "Marketing Head, Nexus Retail", videoId: "ScMzIvxBSi4", thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=225" },
        { name: "Ananya Dave", role: "Founder, GreenSpace Designs", videoId: "mXjZ_Yl-kFk", thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=225" },
        { name: "Vikram Singh", role: "Real Estate Consultant", videoId: "dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=225" }
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
    const { ref: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation<HTMLDivElement>();
    const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <>
            <HeroSection
                variant="subpage"
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
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${techVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>Powered by the latest tech for seamless and impressive networking.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {technologies.map((tech, i) => (
                            <div key={i} className={`p-8 text-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/20 dark:border-slate-800/10 shadow-lg ${techVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl text-cyan">{tech.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={benefitsRef} className="bg-slate-100/30 dark:bg-navy-light/10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${benefitsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Key Benefits</h2>
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${benefitsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>More than just a card, it's a powerful business tool.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {benefits.map((benefit, i) => (
                            <div key={i} className={`flex items-center p-4 bg-white/50 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-slate-800/10 shadow-sm ${benefitsVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                                <div className="w-10 h-10 mr-4 flex-shrink-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full text-cyan">{benefit.icon}</div>
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
                            <motion.div 
                                key={i} 
                                whileHover={{ 
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className={`group p-8 rounded-4xl border-2 border-transparent hover:border-cyan/50 flex flex-col ${item.color} ${catalogVisible ? 'animate-fade-in-up' : 'opacity-0'} relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]`} 
                                style={{ animationDelay: `${150 + i * 100}ms` }}
                            >
                                {/* Decorative Glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan/20 blur-[50px] group-hover:bg-cyan/40 transition-colors duration-500"></div>

                                <h3 className="text-2xl font-bold font-poppins relative z-10 transition-colors duration-300 group-hover:text-cyan">{item.name}</h3>
                                
                                <div className="flex items-baseline space-x-2 my-4 relative z-10">
                                    <motion.p 
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="text-4xl font-bold text-cyan"
                                    >
                                        {item.price}
                                    </motion.p>
                                    <span className="text-sm text-slate-500">/ per card</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                    {item.features.map(f => (
                                        <motion.span 
                                            key={f} 
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.2)" }}
                                            className="text-xs bg-slate-200/50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full border border-transparent hover:border-cyan/30 transition-all cursor-default"
                                        >
                                            {f}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="space-y-3 mb-8 relative z-10">
                                    {["Premium NFC Chip", "Dynamic QR Code", "Lifetime Access"].map((feat, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                                            <Zap size={14} className="text-cyan group-hover:scale-125 transition-transform" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <motion.button 
                                    whileHover={{ 
                                        scale: 1.05, 
                                        backgroundColor: "#22d3ee",
                                        color: "#0f172a",
                                        boxShadow: "0 0 20px 5px rgba(34, 211, 238, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-auto w-full px-6 py-4 text-base font-bold text-slate-900 dark:text-light-text bg-white/80 dark:bg-slate-800/80 border-2 border-slate-300 dark:border-slate-700 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                                >
                                    Purchase Now
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={testimonialRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${testimonialVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Success Stories</h2>
                        <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${testimonialVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>See how VIMS Cards are transforming professional networking across industries.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={testimonialVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="group bg-white/10 dark:bg-navy-light/20 backdrop-blur-xl rounded-4xl border border-white/20 dark:border-cyan/10 overflow-hidden shadow-2xl"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <iframe 
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${t.videoId}?modestbranding=1&autohide=1&showinfo=0&controls=1`}
                                        title={t.name}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    {/* Overlay for better aesthetic when not playing */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy/80 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className="w-8 h-[1px] bg-cyan/50"></div>
                                        <span className="text-[10px] uppercase tracking-widest text-cyan font-bold leading-none">Verified Client</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-light-text">{t.name}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

             <section ref={ctaRef} className="bg-slate-100/30 dark:bg-navy-light/10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-poppins font-bold ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Powerful Call-to-Actions</h2>
                         <p className={`mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>Turn every interaction into an opportunity with over 15+ configurable CTAs.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(ctaGroups).map(([groupName, ctas], groupIndex) => (
                            <div key={groupName} className={`${ctaVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + groupIndex * 100}ms` }}>
                                <h3 className="text-lg font-bold text-cyan mb-4">{groupName}</h3>
                                <div className="space-y-3">
                                    {ctas.map((cta, i) => (
                                        <div key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                                            <div className="h-5 w-5 mr-3 text-slate-500">
                                                {cta.icon}
                                            </div>
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