import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { NAV_LINKS, SERVICE_PAGES } from '../constants';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
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
  const mobileServicesRef = useRef<HTMLDivElement>(null);

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
        if (
            !servicesRef.current?.contains(target) &&
            !mobileServicesRef.current?.contains(target)
        ) {
            setIsServicesOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const isServicesPageActive = SERVICE_PAGES.some(p => p.name === activePage);

  const navItemClasses = (page: Page | 'Services') => {
    let isActive = page === 'Services' ? isServicesPageActive : activePage === page;
    return `cursor-pointer text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-cyan' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-light-text'
    }`;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/50 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
             <a onClick={() => handleLinkClick(Page.Home)} className="flex items-center gap-2 cursor-pointer text-2xl font-poppins font-bold text-slate-900 dark:text-light-text group">
              <motion.img 
                whileHover={{ rotate: 5, scale: 1.1 }}
                src="https://lh3.googleusercontent.com/d/1nFXxO-oUx6f3P6a_1nfI-VGpZWDHWxvu" 
                alt="VIMS Logo" 
                className="w-10 h-10 object-contain rounded-lg" 
                referrerPolicy="no-referrer" 
              />
              <span className="group-hover:text-cyan transition-colors">VIMS</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <motion.a 
                  key={link.name} 
                  whileHover={{ y: -2 }}
                  onClick={() => handleLinkClick(link.name)} 
                  className={navItemClasses(link.name)}
                >
                  {link.name}
                </motion.a>
              ))}
              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <motion.button 
                  whileHover={{ y: -2 }}
                  onClick={() => setIsServicesOpen(!isServicesOpen)} 
                  className={`flex items-center ${navItemClasses('Services')}`}
                >
                  Services <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-fade-in-up" style={{ animationDuration: '300ms' }}>
                    <div className="p-2">
                      {SERVICE_PAGES.map((service) => (
                        <a key={service.name} onClick={() => handleLinkClick(service.name)} className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === service.name ? 'text-cyan bg-slate-100 dark:bg-slate-800' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-light-text hover:bg-slate-100 dark:hover:bg-slate-800/50'}`}>
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <motion.button 
                whileHover={{ rotate: 15, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="ml-4 p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>

              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px 5px rgba(139, 92, 246, 0.4)",
                  filter: "brightness(1.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://cal.com/vims-003/vims-enterprise', '_blank')}
                className="px-5 py-2.5 text-sm font-bold text-light-text bg-gradient-to-r from-orange to-violet rounded-full shadow-lg transition-all duration-300"
              >
                Book Strategy Call
              </motion.button>
            </div>
          </div>
          <div className="md:hidden flex items-center gap-2">
             <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-light-text hover:text-cyan transition-colors" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  onClick={() => handleLinkClick(link.name)} 
                  className={`block px-3 py-3 rounded-xl text-lg font-medium transition-all ${
                    activePage === link.name ? 'text-cyan bg-cyan/5' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Services Section */}
              <div ref={mobileServicesRef} className="border-t border-slate-100 dark:border-slate-800/50 pt-2">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)} 
                  className={`w-full flex justify-between items-center px-3 py-3 rounded-xl text-lg font-medium transition-all ${
                    isServicesPageActive ? 'text-cyan' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                    <span>Services</span>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1 overflow-hidden"
                    >
                        {SERVICE_PAGES.map((service) => (
                            <a 
                              key={service.name} 
                              onClick={() => handleLinkClick(service.name)} 
                              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                                activePage === service.name ? 'text-cyan bg-cyan/5' : 'text-slate-500 dark:text-slate-400'
                              }`}
                            >
                                {service.name}
                            </a>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-6">
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://cal.com/vims-003/vims-enterprise', '_blank')}
                  className="w-full px-5 py-4 text-base font-bold text-light-text bg-gradient-to-r from-orange to-violet rounded-2xl shadow-xl transition-all duration-300"
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