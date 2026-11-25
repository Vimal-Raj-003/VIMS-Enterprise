import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { CORE_PILLARS, GROUP_PLATFORMS } from '../constants';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Calendar,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  onOpenBooking: (topic?: string) => void;
}

const PILLAR_SHORT_TAGS: Record<Page, string> = {
  [Page.Home]: '',
  [Page.VoiceAgents]: '24/7 Multilingual Voice · Jill-Jill',
  [Page.WebsiteCreation]: 'Custom Websites & Stores',
  [Page.AIAutomation]: 'CRM & WhatsApp Workflows',
  [Page.HospitalManagement]: '40+ Modules · MediCore OS',
  [Page.MatlabAcademy]: 'Embedded Skills & FDE Cohort',
  [Page.About]: '',
  [Page.Contact]: '',
  [Page.TeamProfile]: '',
  [Page.PrivacyPolicy]: '',
  [Page.TermsOfService]: '',
  [Page.DataDeletion]: '',
};

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const solutionsRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!solutionsRef.current?.contains(e.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    setIsSolutionsOpen(false);
  };

  const isPillarActive = CORE_PILLARS.some((p) => p.page === activePage);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 shadow-sm'
          : 'bg-white/85 dark:bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo — Clean Single Line, Zero Subtitle */}
          <button
            type="button"
            onClick={() => handleLinkClick(Page.Home)}
            className="flex items-center gap-3 text-left group focus:outline-none shrink-0"
          >
            <img
              src="/images/brand/vims-logo.webp"
              alt="VIMS Enterprise"
              className="w-9 h-9 object-contain rounded-xl border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform"
            />
            <span className="text-lg sm:text-xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-none">
              VIMS <span className="font-medium text-slate-500 dark:text-slate-400">Enterprise</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            <button
              type="button"
              onClick={() => handleLinkClick(Page.Home)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePage === Page.Home
                  ? 'text-[#1D4ED8] dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Home
            </button>

            {/* Solutions Visual Switcher */}
            <div
              ref={solutionsRef}
              className="relative"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setIsSolutionsOpen(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => setIsSolutionsOpen(false), 140);
              }}
            >
              <button
                type="button"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                aria-expanded={isSolutionsOpen}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isPillarActive
                    ? 'text-[#1D4ED8] dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-[#1D4ED8]' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isSolutionsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-3.5 z-50"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {CORE_PILLARS.map((pillar) => (
                        <button
                          key={pillar.page}
                          type="button"
                          onClick={() => handleLinkClick(pillar.page)}
                          className={`group flex items-center gap-3 text-left p-2.5 rounded-xl transition-all ${
                            activePage === pillar.page
                              ? 'bg-blue-50 dark:bg-blue-500/15'
                              : 'hover:bg-[#F8F7F4] dark:hover:bg-white/5'
                          }`}
                        >
                          <img
                            src={pillar.imageUrl}
                            alt={pillar.shortTitle}
                            className="w-11 h-11 rounded-lg object-cover shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <span className="block text-sm font-display font-bold text-slate-900 dark:text-white truncate group-hover:text-[#1D4ED8] transition-colors">
                              {pillar.shortTitle}
                            </span>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                              {PILLAR_SHORT_TAGS[pillar.page]}
                            </p>
                          </div>
                        </button>
                      ))}

                      <button
                        type="button"
                        onClick={() => {
                          setIsSolutionsOpen(false);
                          onOpenBooking('Custom B2B Strategy');
                        }}
                        className="group flex items-center justify-between p-3 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-left text-white transition-all"
                      >
                        <div>
                          <div className="text-xs font-display font-bold">Book a Discovery Call</div>
                          <div className="text-[11px] text-blue-100 mt-0.5">30-Min Architecture Sync</div>
                        </div>
                        <ArrowUpRight size={16} className="shrink-0" />
                      </button>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between px-2 text-[11px]">
                      <span className="font-mono uppercase tracking-wider text-slate-400">VIMS Group</span>
                      <div className="flex items-center gap-5">
                        <a
                          href={GROUP_PLATFORMS.jilljill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 hover:text-[#1D4ED8]"
                        >
                          <span>Jill-Jill Voice</span>
                          <ExternalLink size={11} />
                        </a>
                        <a
                          href={GROUP_PLATFORMS.embskills.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 hover:text-[#1D4ED8]"
                        >
                          <span>Embedded Skills</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {[
              { page: Page.VoiceAgents, label: 'Voice AI' },
              { page: Page.HospitalManagement, label: 'HMS' },
              { page: Page.MatlabAcademy, label: 'Academy' },
              { page: Page.About, label: 'About' },
              { page: Page.Contact, label: 'Contact' },
            ].map((item) => {
              const isAct =
                activePage === item.page || (item.page === Page.About && activePage === Page.TeamProfile);
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleLinkClick(item.page)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isAct
                      ? 'text-[#1D4ED8] dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide bg-[#1D4ED8] hover:bg-[#1E40AF] text-white shadow-sm transition-all"
            >
              <Calendar size={14} />
              <span>Book a Call</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[82vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => handleLinkClick(Page.Home)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
                  activePage === Page.Home ? 'bg-blue-50 dark:bg-blue-500/15 text-[#1D4ED8]' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                Home
              </button>

              <div className="pt-2 pb-1 px-3.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Solutions
              </div>

              {CORE_PILLARS.map((pillar) => (
                <button
                  key={pillar.page}
                  type="button"
                  onClick={() => handleLinkClick(pillar.page)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between ${
                    activePage === pillar.page
                      ? 'bg-blue-50 dark:bg-blue-500/15 text-[#1D4ED8] font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="text-sm">{pillar.shortTitle}</span>
                  <span className="text-[11px] font-mono text-slate-400">{pillar.badge}</span>
                </button>
              ))}

              <div className="border-t border-slate-200 dark:border-slate-800 pt-2 mt-2 space-y-1">
                <button
                  type="button"
                  onClick={() => handleLinkClick(Page.About)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                    activePage === Page.About ? 'bg-blue-50 dark:bg-blue-500/15 text-[#1D4ED8]' : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick(Page.Contact)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                    activePage === Page.Contact ? 'bg-blue-50 dark:bg-blue-500/15 text-[#1D4ED8]' : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  Contact
                </button>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  <span>Book a Call</span>
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
