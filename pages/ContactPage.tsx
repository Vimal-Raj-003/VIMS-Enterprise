import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Page } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        service: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', company: '', website: '', service: '', message: '' });
    };

    const serviceOptions = [
        Page.LinkedInGrowth,
        Page.VIMSCards,
        Page.JillJillAI,
        Page.DigitalMarketing,
        Page.AIAutomation,
        'Multiple Services'
    ];
    
    const contactInfo = [
        { icon: <Mail className="h-6 w-6 text-cyan mr-4 mt-1" />, title: "Email", lines: [<a href="mailto:contact@vimsenterprise.com" className="text-slate-600 dark:text-slate-400 hover:text-cyan transition">contact@vimsenterprise.com</a>] },
        { icon: <Phone className="h-6 w-6 text-cyan mr-4 mt-1" />, title: "Phone", lines: [<a href="tel:+919940660868" className="text-slate-600 dark:text-slate-400 hover:text-cyan transition block">+91 9940660868</a>, <a href="tel:+919789692447" className="text-slate-600 dark:text-slate-400 hover:text-cyan transition block">+91 9789692447</a>] }
    ];

    const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <>
            <HeroSection
                headline={<>Let’s Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Growth Engine</span>.</>}
                subtext="Book a complimentary discovery session to discuss your challenges and goals. We'll explore how our solutions can help you achieve transformative growth."
                primaryCta={{ text: 'Book a Call', onClick: () => window.open('https://cal.com/vims-003/vims-enterprise', '_blank') }}
                imageUrl="https://picsum.photos/1920/1080?random=8"
                altText="Clean, minimalist futuristic workspace with a laptop showing a contact form and a glowing AI assistant icon."
            />

            <section ref={contactRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className={`p-8 bg-white dark:bg-slate-900/50 rounded-4xl border border-slate-200 dark:border-slate-800 ${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                                <h2 className="text-2xl font-bold font-poppins mb-6">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className={`${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:ring-cyan focus:border-cyan transition" />
                                        </div>
                                        <div className={`${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:ring-cyan focus:border-cyan transition" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                         <div className={`${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" required className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:ring-cyan focus:border-cyan transition" />
                                        </div>
                                         <div className={`${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                                            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" required className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:ring-cyan focus:border-cyan transition" />
                                        </div>
                                    </div>
                                    <div className={`${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                                        <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:ring-cyan focus:border-cyan transition text-slate-500 dark:text-slate-400">
                                            <option value="" disabled>Service Interested In...</option>
                                            {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className={`${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:ring-cyan focus:border-cyan transition"></textarea>
                                    </div>
                                    <div className={`${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
                                        <button type="submit" className="w-full px-8 py-3 text-base font-bold text-light-text bg-gradient-to-r from-orange to-violet hover:from-violet hover:to-orange rounded-full shadow-lg transition-transform transform hover:scale-105">
                                            Submit Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        <div className="space-y-8">
                            <h3 className={`text-2xl font-bold font-poppins ${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>Contact Information</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, i) => (
                                     <div key={info.title} className={`flex items-start ${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + i * 150}ms` }}>
                                        {info.icon}
                                        <div>
                                            <h4 className="font-semibold">{info.title}</h4>
                                            {info.lines.map((line, j) => <div key={j}>{line}</div>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className={`w-full flex items-center justify-center px-6 py-3 text-base font-bold text-light-text bg-green-600 hover:bg-green-700 rounded-full shadow-lg transition-colors ${contactVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                                <MessageSquare className="h-5 w-5 mr-2" />
                                Chat on WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;