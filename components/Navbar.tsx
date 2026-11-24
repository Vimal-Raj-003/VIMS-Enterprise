import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { CORE_PILLARS, GROUP_PLATFORMS } from '../constants';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  PhoneCall,
  Globe,
  Workflow,
  Activity,
  GraduationCap,
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

const PILLAR_ICONS: Record<Page, React.ReactNode> = {
  [Page.Home]: null,
  [Page.VoiceAgents]: <PhoneCall size={15} className="text-[#E8451E]" />,
  [Page.WebsiteCreation]: <Globe size={15} className="text-[#D4AF37]" />,
  [Page.AIAutomation]: <Workflow size={15} className="text-[#10B981]" />,
  [Page.HospitalManagement]: <Activity size={15} className="text-[#10B981]" />,
  [Page.MatlabAcademy]: <GraduationCap size={15} className="text-[#E8451E]" />,
  [Page.About]: null,
  [Page.Contact]: null,
  [Page.TeamProfile]: null,
  [Page.PrivacyPolicy]: null,
  [Page.TermsOfService]: null,
  [Page.DataDeletion]: null,
};

const PILLAR_SHORT_TAGS: Record<Page, string> = {
  [Page.Home]: '',
  [Page.VoiceAgents]: '24/7 Multilingual Calls · Jill-Jill',
  [Page.WebsiteCreation]: 'B2B Portals & Online Stores',
  [Page.AIAutomation]: 'Multi-Agent & CRM Pipelines',
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
          ? 'bg-[#FAF8F5]/95 dark:bg-[#09090B]/95 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/10 shadow-sm'
          : 'bg-[#FAF8F5]/80 dark:bg-[#09090B]/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Clean Brand Logo — No Subtitle */}
          <button
            type="button"
            onClick={() => handleLinkClick(Page.Home)}
            className="flex items-center gap-3 text-left group focus:outline-none shrink-0"
          >
            <img
              src="/images/brand/vims-logo.webp"
              alt="VIMS Enterprise"
              className="w-9 h-9 object-contain rounded-xl border border-zinc-200/80 dark:border-white/10 shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="text-lg sm:text-xl font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-none">
              VIMS <span className="font-medium text-zinc-500 dark:text-zinc-400">Enterprise</span>
            </span>
          </button>

          {/* Desktop Navigation: Exact Single-Word Labels */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            <button
              type="button"
              onClick={() => handleLinkClick(Page.Home)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.Home
                  ? 'text-[#E8451E] dark:text-white bg-[#E8451E]/10 dark:bg-white/10'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5'
              }`}
            >
              Home
            </button>

            {/* Sleek 2-Column Visual Ecosystem Switcher */}
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
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isPillarActive
                    ? 'text-[#E8451E] dark:text-white bg-[#E8451E]/10 dark:bg-white/10'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-[#E8451E]' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isSolutionsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white dark:bg-[#111114] border border-zinc-200 dark:border-white/10 rounded-2xl shadow-2xl p-3.5 z-50"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {CORE_PILLARS.map((pillar) => (
                        <button
                          key={pillar.page}
                          type="button"
                          onClick={() => handleLinkClick(pillar.page)}
                          className={`group flex items-center gap-3 text-left p-2.5 rounded-xl border transition-all ${
                            activePage === pillar.page
                              ? 'bg-[#E8451E]/10 border-[#E8451E]/35'
                              : 'border-transparent hover:bg-zinc-100/80 dark:hover:bg-white/5 hover:border-zinc-200/80 dark:hover:border-white/10'
                          }`}
                        >
                          <img
                            src={pillar.imageUrl}
                            alt={pillar.shortTitle}
                            className="w-11 h-11 rounded-lg object-cover shrink-0 border border-zinc-200 dark:border-white/10"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              {PILLAR_ICONS[pillar.page]}
                              <span className="text-sm font-display font-bold text-zinc-900 dark:text-white truncate group-hover:text-[#E8451E] transition-colors">
                                {pillar.shortTitle}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                              {PILLAR_SHORT_TAGS[pillar.page]}
                            </p>
                          </div>
                        </button>
                      ))}

                      {/* Direct Strategy Call Mini-Card */}
                      <button
                        type="button"
                        onClick={() => {
                          setIsSolutionsOpen(false);
                          onOpenBooking('Custom B2B Strategy');
                        }}
                        className="group flex items-center justify-between p-3 rounded-xl bg-zinc-900 dark:bg-white/5 border border-zinc-800 dark:border-white/10 text-left hover:border-[#E8451E]/50 transition-all"
                      >
                        <div>
                          <div className="text-xs font-display font-bold text-white">Book a Call</div>
                          <div className="text-[11px] text-zinc-400 mt-0.5">30-Min Architecture Sync</div>
                        </div>
                        <ArrowUpRight size={16} className="text-[#E8451E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>

                    {/* VIMS Group Sibling Platforms Strip */}
                    <div className="mt-2.5 pt-2.5 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between px-1.5 text-[11px]">
                      <span className="font-mono uppercase tracking-wider text-zinc-400">VIMS Group</span>
                      <div className="flex items-center gap-4">
                        <a
                          href={GROUP_PLATFORMS.jilljill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#E8451E] transition-colors"
                        >
                          <span>Jill-Jill Voice</span>
                          <ExternalLink size={11} />
                        </a>
                        <a
                          href={GROUP_PLATFORMS.embskills.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#E8451E] transition-colors"
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

            <button
              type="button"
              onClick={() => handleLinkClick(Page.VoiceAgents)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.VoiceAgents
                  ? 'text-[#E8451E] dark:text-white bg-[#E8451E]/10 dark:bg-white/10'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5'
              }`}
            >
              Voice AI
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick(Page.HospitalManagement)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.HospitalManagement
                  ? 'text-[#E8451E] dark:text-white bg-[#E8451E]/10 dark:bg-white/10'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5'
              }`}
            >
              HMS
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick(Page.MatlabAcademy)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.MatlabAcademy
                  ? 'text-[#E8451E] dark:text-white bg-[#E8451E]/10 dark:bg-white/10'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5'
              }`}
            >
              Academy
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick(Page.About)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.About || activePage === Page.TeamProfile
                  ? 'text-[#E8451E] dark:text-white bg-[#E8451E]/10 dark:bg-white/10'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5'
              }`}
            >
              About
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick(Page.Contact)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.Contact
                  ? 'text-[#E8451E] dark:text-white bg-[#E8451E]/10 dark:bg-white/10'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-white/10 border border-transparent hover:border-zinc-300/60 dark:hover:border-white/10 transition-all"
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide bg-[#E8451E] hover:bg-[#D93814] text-white shadow-md shadow-[#E8451E]/25 transition-all"
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
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-white/10"
            >
              {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-zinc-900 dark:text-white hover:bg-zinc-200/60 dark:hover:bg-white/10"
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
            className="lg:hidden bg-[#FAF8F5] dark:bg-[#09090B] border-b border-zinc-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1.5 max-h-[82vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => handleLinkClick(Page.Home)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
                  activePage === Page.Home ? 'bg-[#E8451E]/10 text-[#E8451E]' : 'text-zinc-700 dark:text-zinc-200'
                }`}
              >
                Home
              </button>

              <div className="pt-2 pb-1 px-3.5 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                Solutions
              </div>

              {CORE_PILLARS.map((pillar) => (
                <button
                  key={pillar.page}
                  type="button"
                  onClick={() => handleLinkClick(pillar.page)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between ${
                    activePage === pillar.page
                      ? 'bg-[#E8451E]/10 text-[#E8451E] font-semibold'
                      : 'text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2.5 text-sm">
                    {PILLAR_ICONS[pillar.page]}
                    <span>{pillar.shortTitle}</span>
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">{pillar.badge}</span>
                </button>
              ))}

              <div className="border-t border-zinc-200 dark:border-white/10 pt-2 mt-2 space-y-1">
                <button
                  type="button"
                  onClick={() => handleLinkClick(Page.About)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                    activePage === Page.About ? 'bg-[#E8451E]/10 text-[#E8451E]' : 'text-zinc-700 dark:text-zinc-200'
                  }`}
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick(Page.Contact)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                    activePage === Page.Contact ? 'bg-[#E8451E]/10 text-[#E8451E]' : 'text-zinc-700 dark:text-zinc-200'
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
                  className="w-full py-3 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#E8451E]/25"
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
