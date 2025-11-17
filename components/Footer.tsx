import React from 'react';
import { Linkedin, Youtube, Instagram, MessageSquare } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [Page.Home, Page.About, Page.Contact];
  const services = [Page.LinkedInGrowth, Page.VIMSCards, Page.JillJillAI, Page.DigitalMarketing, Page.AIAutomation];
  
  const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan transition-colors duration-300">
      {icon}
    </a>
  );

  return (
    <footer className="bg-slate-100 dark:bg-navy-light border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-light-text">VIMS<span className="text-cyan">.</span></h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Transforming your digital presence into a growth engine.</p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={<Linkedin size={20} />} />
              <SocialIcon href="#" icon={<Youtube size={20} />} />
              <SocialIcon href="#" icon={<Instagram size={20} />} />
              <SocialIcon href="#" icon={<MessageSquare size={20} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(page => (
                <li key={page}>
                  <a onClick={() => onNavigate(page)} className="block cursor-pointer text-base text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-light-text transform hover:translate-x-1 transition-all duration-300">{page}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wider uppercase">Services</h4>
            <ul className="mt-4 space-y-2">
              {services.map(service => (
                <li key={service}>
                  <a onClick={() => onNavigate(service)} className="block cursor-pointer text-base text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-light-text transform hover:translate-x-1 transition-all duration-300">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wider uppercase">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400 text-base">
              <li><a href="mailto:contact@vimsenterprise.com" className="block hover:text-slate-900 dark:hover:text-light-text transform hover:translate-x-1 transition-all duration-300">contact@vimsenterprise.com</a></li>
              <li><a href="tel:+919940660868" className="block hover:text-slate-900 dark:hover:text-light-text transform hover:translate-x-1 transition-all duration-300">+91 9940660868 / +91 9789692447</a></li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
          <p className="text-base text-slate-500">&copy; {new Date().getFullYear()} VIMS Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;