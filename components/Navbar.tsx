import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { GROWTH_SUITE_PAGES, COMPANY_CONTACT } from '../constants';
import { Menu, X, ChevronDown, Sun, Moon, Cpu, Calculator, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (!servicesRef.current?.contains(target)) {
            setIsServicesOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const isAnyServiceActive = 
    activePage === Page.AIAutomation || 
    activePage === Page.CostEstimation || 
    GROWTH_SUITE_PAGES.some(p => p.name === activePage);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
             <a onClick={() => handleLinkClick(Page.Home)} className="flex items-center gap-2.5 cursor-pointer text-2xl font-poppins font-bold text-slate-900 dark:text-light-text group">
              <motion.img 
                whileHover={{ rotate: 5, scale: 1.1 }}
                src="https://lh3.googleusercontent.com/d/1nFXxO-oUx6f3P6a_1nfI-VGpZWDHWxvu" 
                alt="VIMS Logo" 
                className="w-10 h-10 object-contain rounded-lg shadow-sm" 
                referrerPolicy="no-referrer" 
              />
              <div className="flex flex-col">
                <span className="group-hover:text-cyan transition-colors leading-none">VIMS</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400">Engineering & AI</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-8 flex items-center space-x-6 xl:space-x-8">
              <motion.a 
                whileHover={{ y: -2 }}
                onClick={() => handleLinkClick(Page.Home)} 
                className={`cursor-pointer text-sm font-semibold transition-colors duration-200 ${
                  activePage === Page.Home ? 'text-cyan' : 'text-slate-600 dark:text-slate-300 hover:text-cyan'
                }`}
              >
                Home
              </motion.a>

              {/* SINGLE NAME DROPDOWN: Services (Housing AI Automation, Cost Estimation, Growth Suite) */}
              <div 
                className="relative" 
                ref={servicesRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button 
                  whileHover={{ y: -2 }}
                  onClick={() => setIsServicesOpen(!isServicesOpen)} 
                  className={`flex items-center gap-1.5 cursor-pointer text-sm font-semibold px-3 py-2 rounded-xl transition-all duration-200 ${
                    isAnyServiceActive 
                      ? 'text-cyan bg-cyan/10 border border-cyan/30 shadow-[0_0_12px_rgba(34,211,238,0.15)]' 
                      : 'text-slate-700 dark:text-slate-200 hover:text-cyan hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                  aria-expanded={isServicesOpen}
                >
                  <Sparkles size={15} className={isAnyServiceActive ? 'text-cyan animate-pulse' : 'text-slate-400'} />
                  <span>Services</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-cyan' : ''}`} />
                </motion.button>

                {/* Dropdown Container */}
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-50 p-3"
                    >
                      <div className="grid grid-cols-12 gap-3">
                        {/* Left Column: Top 2 Flagship Pillars */}
                        <div className="col-span-6 space-y-2 p-3 bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                          <div className="px-2 pb-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                            <span>Core Flagship Pillars</span>
                            <span className="text-cyan font-semibold">Priority</span>
                          </div>

                          {/* 1. AI Automation */}
                          <a 
                            onClick={() => handleLinkClick(Page.AIAutomation)}
                            className={`group block p-3 rounded-xl cursor-pointer transition-all border ${
                              activePage === Page.AIAutomation 
                                ? 'bg-cyan/15 border-cyan/40 text-cyan shadow-sm' 
                                : 'border-transparent bg-white/70 dark:bg-slate-900/60 hover:border-cyan/30 hover:bg-cyan/5 text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-cyan/10 text-cyan group-hover:scale-110 transition-transform">
                                  <Cpu size={16} />
                                </div>
                                <span className="font-semibold text-sm group-hover:text-cyan transition-colors">AI Automation</span>
                              </div>
                              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full bg-cyan/20 text-cyan font-bold">Top Flagship</span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 pl-8">
                              Autonomous agent workflows, voice bots, LLM integrations & operational scaling.
                            </p>
                          </a>

                          {/* 2. Cost Estimation */}
                          <a 
                            onClick={() => handleLinkClick(Page.CostEstimation)}
                            className={`group block p-3 rounded-xl cursor-pointer transition-all border ${
                              activePage === Page.CostEstimation 
                                ? 'bg-violet/15 border-violet/40 text-violet shadow-sm' 
                                : 'border-transparent bg-white/70 dark:bg-slate-900/60 hover:border-violet/30 hover:bg-violet/5 text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-violet/10 text-violet group-hover:scale-110 transition-transform">
                                  <Calculator size={16} />
                                </div>
                                <span className="font-semibold text-sm group-hover:text-violet transition-colors">Cost Estimation</span>
                              </div>
                              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full bg-violet/20 text-violet font-bold">Should-Cost</span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 pl-8">
                              Sheet metal, die casting, plastic molding & CNC machining should-costing & negotiation.
                            </p>
                          </a>

                          <div className="pt-1 px-2 flex items-center justify-between text-[11px] text-slate-400">
                            <span>Tailored B2B Sourcing & Tech</span>
                            <ArrowRight size={12} className="text-cyan" />
                          </div>
                        </div>

                        {/* Right Column: 3. Growth Suite */}
                        <div className="col-span-6 space-y-1.5 p-3 flex flex-col justify-between">
                          <div>
                            <div className="px-2 pb-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 mb-2">
                              <div className="flex items-center gap-1.5">
                                <Layers size={12} className="text-orange" />
                                <span className="text-slate-700 dark:text-slate-300 font-semibold">Growth Suite</span>
                              </div>
                              <span className="text-slate-400">Brand & Digital</span>
                            </div>

                            {GROWTH_SUITE_PAGES.map((service) => (
                              <a 
                                key={service.name} 
                                onClick={() => handleLinkClick(service.name)} 
                                className={`block w-full text-left px-2.5 py-2 rounded-xl cursor-pointer transition-all ${
                                  activePage === service.name 
                                    ? 'text-cyan bg-cyan/10 font-semibold' 
                                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan hover:bg-slate-100 dark:hover:bg-slate-800/70'
                                }`}
                              >
                                <div className="text-xs font-semibold flex items-center justify-between">
                                  <span>{service.name}</span>
                                </div>
                                <div className="text-[11px] text-slate-400 truncate">{service.desc}</div>
                              </a>
                            ))}
                          </div>

                          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 px-2">
                            <button 
                              onClick={() => window.open(COMPANY_CONTACT.bookingUrl, '_blank')}
                              className="w-full text-center py-1.5 text-xs font-bold text-cyan hover:text-light-text hover:bg-cyan/20 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                            >
                              <span>Explore custom bundles</span>
                              <ArrowRight size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a 
                whileHover={{ y: -2 }}
                onClick={() => handleLinkClick(Page.About)} 
                className={`cursor-pointer text-sm font-semibold transition-colors duration-200 ${
                  activePage === Page.About ? 'text-cyan' : 'text-slate-600 dark:text-slate-300 hover:text-cyan'
                }`}
              >
                About
              </motion.a>

              <motion.a 
                whileHover={{ y: -2 }}
                onClick={() => handleLinkClick(Page.Contact)} 
                className={`cursor-pointer text-sm font-semibold transition-colors duration-200 ${
                  activePage === Page.Contact ? 'text-cyan' : 'text-slate-600 dark:text-slate-300 hover:text-cyan'
                }`}
              >
                Contact
              </motion.a>
              
              {/* Theme Toggle */}
              <motion.button 
                whileHover={{ rotate: 15, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.button>

              {/* Direct Booking CTA */}
              <motion.button 
                whileHover={{ 
                  scale: 1.04,
                  boxShadow: "0 0 20px 4px rgba(139, 92, 246, 0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => window.open(COMPANY_CONTACT.bookingUrl, '_blank')}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-light-text bg-gradient-to-r from-orange via-pink-600 to-violet rounded-full shadow-md transition-all duration-300"
              >
                Book Strategy Call
              </motion.button>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-2">
             <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-light-text hover:text-cyan p-1.5 transition-colors" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <a 
                onClick={() => handleLinkClick(Page.Home)} 
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                  activePage === Page.Home ? 'text-cyan bg-cyan/10' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                Home
              </a>

              {/* SINGLE SERVICES ACCORDION (HOUSING AI AUTOMATION, COST ESTIMATION, GROWTH SUITE) */}
              <div className="border-t border-slate-100 dark:border-slate-800/60 pt-2">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)} 
                  className={`w-full flex justify-between items-center px-3 py-2.5 rounded-xl text-base font-semibold ${
                    isAnyServiceActive ? 'text-cyan bg-cyan/10' : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-cyan" />
                      <span>Services</span>
                    </div>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-cyan' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-3 pr-1 pt-2 space-y-2 overflow-hidden"
                    >
                        {/* 1. AI Automation */}
                        <a 
                          onClick={() => handleLinkClick(Page.AIAutomation)} 
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold ${
                            activePage === Page.AIAutomation 
                              ? 'text-cyan bg-cyan/15 border border-cyan/30' 
                              : 'text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Cpu size={16} className="text-cyan" />
                            <div>
                              <div>AI Automation</div>
                              <div className="text-[11px] font-normal text-slate-400">Workflows & Agent Systems</div>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan/20 text-cyan">Flagship</span>
                        </a>

                        {/* 2. Cost Estimation */}
                        <a 
                          onClick={() => handleLinkClick(Page.CostEstimation)} 
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold ${
                            activePage === Page.CostEstimation 
                              ? 'text-violet bg-violet/15 border border-violet/30' 
                              : 'text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Calculator size={16} className="text-violet" />
                            <div>
                              <div>Cost Estimation</div>
                              <div className="text-[11px] font-normal text-slate-400">Sheet Metal, Casting & Machining</div>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-violet/20 text-violet">Should-Cost</span>
                        </a>

                        {/* 3. Growth Suite */}
                        <div className="pt-2 pl-2">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                            <Layers size={13} className="text-orange" />
                            <span>Growth Suite (Brand & Digital)</span>
                          </div>
                          <div className="space-y-1 pl-2 border-l-2 border-slate-200 dark:border-slate-700">
                            {GROWTH_SUITE_PAGES.map((service) => (
                                <a 
                                  key={service.name} 
                                  onClick={() => handleLinkClick(service.name)} 
                                  className={`block px-2.5 py-1.5 rounded-lg text-xs transition-all ${
                                    activePage === service.name ? 'text-cyan bg-cyan/10 font-semibold' : 'text-slate-600 dark:text-slate-400'
                                  }`}
                                >
                                    <div className="font-medium">{service.name}</div>
                                    <div className="text-[10px] text-slate-400">{service.desc}</div>
                                </a>
                            ))}
                          </div>
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/60 pt-2">
                <a 
                  onClick={() => handleLinkClick(Page.About)} 
                  className={`block px-3 py-2.5 rounded-xl text-base font-medium ${
                    activePage === Page.About ? 'text-cyan bg-cyan/10' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  About VIMS
                </a>
                <a 
                  onClick={() => handleLinkClick(Page.Contact)} 
                  className={`block px-3 py-2.5 rounded-xl text-base font-medium ${
                    activePage === Page.Contact ? 'text-cyan bg-cyan/10' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Contact & Sourcing Support
                </a>
              </div>

              <div className="pt-4">
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(COMPANY_CONTACT.bookingUrl, '_blank')}
                  className="w-full px-5 py-3 text-sm font-bold uppercase tracking-wider text-light-text bg-gradient-to-r from-orange to-violet rounded-xl shadow-lg transition-all duration-300"
                >
                  Book Strategy Call
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;