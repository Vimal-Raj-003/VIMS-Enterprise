
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { NAV_LINKS, SERVICE_PAGES } from '../constants';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      isActive ? 'text-cyan' : 'text-slate-300 hover:text-light-text'
    }`;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/50 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
             <a onClick={() => handleLinkClick(Page.Home)} className="cursor-pointer text-2xl font-poppins font-bold text-light-text">
              VIMS<span className="text-cyan">.</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <a key={link.name} onClick={() => handleLinkClick(link.name)} className={navItemClasses(link.name)}>
                  {link.name}
                </a>
              ))}
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <button className={`flex items-center ${navItemClasses('Services')}`}>
                  Services <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate-900/80 backdrop-blur-lg rounded-xl border border-slate-800 shadow-2xl overflow-hidden animate-fade-in-up" style={{ animationDuration: '300ms' }}>
                    <div className="p-2">
                      {SERVICE_PAGES.map((service) => (
                        <a key={service.name} onClick={() => handleLinkClick(service.name)} className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === service.name ? 'text-cyan bg-slate-800' : 'text-slate-300 hover:text-light-text hover:bg-slate-800/50'}`}>
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => window.open('https://cal.com/vims-003/vims-enterprise', '_blank')}
                className="ml-4 px-5 py-2.5 text-sm font-bold text-light-text bg-gradient-to-r from-orange to-violet hover:from-violet hover:to-orange rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-light-text hover:text-cyan transition-colors" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a key={link.name} onClick={() => handleLinkClick(link.name)} className={`block px-3 py-2 rounded-md text-base font-medium ${navItemClasses(link.name)}`}>
                {link.name}
              </a>
            ))}
            {/* Mobile Services Section */}
            <div>
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${navItemClasses('Services')}`}>
                  <span>Services</span>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                      {SERVICE_PAGES.map((service) => (
                          <a key={service.name} onClick={() => handleLinkClick(service.name)} className={`block px-3 py-2 rounded-md text-base font-medium ${navItemClasses(service.name)}`}>
                              {service.name}
                          </a>
                      ))}
                  </div>
              )}
            </div>
            <div className="pt-4 px-3">
              <button 
                onClick={() => window.open('https://cal.com/vims-003/vims-enterprise', '_blank')}
                className="w-full px-5 py-3 text-sm font-bold text-light-text bg-gradient-to-r from-orange to-violet rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;