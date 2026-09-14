import React from 'react';
import { Linkedin, Youtube, Instagram, MessageSquare, Mail, Phone } from 'lucide-react';
import { Page } from '../types';
import { COMPANY_CONTACT } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [Page.Home, Page.About, Page.Contact];
  const services = [
    Page.AIAutomation,
    Page.CostEstimation,
    Page.LinkedInGrowth,
    Page.VIMSCards,
    Page.JillJillAI,
    Page.DigitalMarketing
  ];
  
  const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan transition-colors duration-300">
      {icon}
    </a>
  );

  return (
    <footer className="bg-slate-100/40 dark:bg-navy-light/20 border-t border-slate-200 dark:border-slate-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate(Page.Home)}>
              <img src="https://lh3.googleusercontent.com/d/1nFXxO-oUx6f3P6a_1nfI-VGpZWDHWxvu" alt="VIMS Logo" className="w-9 h-9 object-contain rounded-lg" referrerPolicy="no-referrer" />
              <div>
                <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-light-text">VIMS</h3>
                <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Engineering & AI</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Pioneering Enterprise AI Automation and Mechanical Should-Costing intelligence alongside digital growth engines.
            </p>
            <div className="flex space-x-4 pt-1">
              <SocialIcon href="#" icon={<Linkedin size={20} />} />
              <SocialIcon href="#" icon={<Youtube size={20} />} />
              <SocialIcon href="#" icon={<Instagram size={20} />} />
              <SocialIcon href={COMPANY_CONTACT.whatsappUrl} icon={<MessageSquare size={20} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wider uppercase">Navigation</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(page => (
                <li key={page}>
                  <a onClick={() => onNavigate(page)} className="block cursor-pointer text-sm text-slate-600 dark:text-slate-400 hover:text-cyan transform hover:translate-x-1 transition-all duration-300">{page}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wider uppercase">Pillars & Services</h4>
            <ul className="mt-4 space-y-2">
              {services.map(service => (
                <li key={service}>
                  <a onClick={() => onNavigate(service)} className="block cursor-pointer text-sm text-slate-600 dark:text-slate-400 hover:text-cyan transform hover:translate-x-1 transition-all duration-300">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wider uppercase">Direct Contact</h4>
            <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-cyan flex-shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-cyan transition-colors">{COMPANY_CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-cyan flex-shrink-0" />
                <a href={`tel:+91${COMPANY_CONTACT.phone}`} className="hover:text-cyan transition-colors">{COMPANY_CONTACT.phoneFormatted}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare size={16} className="text-green-500 flex-shrink-0" />
                <a href={COMPANY_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp: {COMPANY_CONTACT.phoneFormatted}</a>
              </li>
              <li className="text-xs text-slate-400 pt-1">
                India • Global Sourcing & Engineering Support
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} VIMS Enterprise. All rights reserved.</p>
          <p className="text-xs text-slate-400 font-mono">Precision Engineering &bull; AI Automation &bull; Value Negotiation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;