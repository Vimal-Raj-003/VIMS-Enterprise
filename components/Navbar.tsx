import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { CORE_PILLARS } from '../constants';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  PhoneCall,
  Globe,
  Cpu,
  Activity,
  GraduationCap,
  Calendar,
  ArrowUpRight,
  Award,
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
  [Page.VoiceAgents]: <PhoneCall size={16} className="text-indigo-400" />,
  [Page.WebsiteCreation]: <Globe size={16} className="text-sky-400" />,
  [Page.AIAutomation]: <Cpu size={16} className="text-violet-400" />,
  [Page.HospitalManagement]: <Activity size={16} className="text-emerald-400" />,
  [Page.MatlabAcademy]: <GraduationCap size={16} className="text-amber-400" />,
  [Page.About]: null,
  [Page.Contact]: null,
  [Page.TeamProfile]: null,
  [Page.PrivacyPolicy]: null,
  [Page.TermsOfService]: null,
  [Page.DataDeletion]: null,
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
          ? 'bg-white/95 dark:bg-[#060911]/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm'
          : 'bg-white/70 dark:bg-[#060911]/75 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleLinkClick(Page.Home)}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <img
              src="/images/brand/vims-logo.webp"
              alt="VIMS Enterprise Logo"
              className="w-10 h-10 object-contain rounded-xl border border-slate-200/60 dark:border-white/10 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-poppins font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                VIMS <span className="font-semibold text-slate-500 dark:text-slate-400 text-sm">Enterprise</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400 mt-1">
                AI · Web · HMS · Academy
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            <button
              type="button"
              onClick={() => handleLinkClick(Page.Home)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.Home
                  ? 'text-indigo-600 dark:text-white bg-indigo-500/10 dark:bg-white/[0.07]'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
              }`}
            >
              Home
            </button>

            {/* Solutions Mega Dropdown */}
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
                    ? 'text-indigo-600 dark:text-white bg-indigo-500/10 dark:bg-white/[0.07]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-indigo-500' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isSolutionsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[660px] bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-4 z-50"
                  >
                    <div className="flex items-center justify-between px-2 pb-3 mb-3 border-b border-slate-100 dark:border-white/[0.06]">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        VIMS Enterprise Core Ecosystem
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                        <Award size={12} /> Social Eagle Award-Winning Team
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {CORE_PILLARS.map((pillar) => (
                        <button
                          key={pillar.page}
                          type="button"
                          onClick={() => handleLinkClick(pillar.page)}
                          className={`group text-left p-3 rounded-xl border transition-all ${
                            activePage === pillar.page
                              ? 'bg-indigo-500/[0.08] border-indigo-500/35'
                              : 'border-transparent hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:border-slate-200/80 dark:hover:border-white/[0.08]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06]">
                                {PILLAR_ICONS[pillar.page]}
                              </span>
                              <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                {pillar.shortTitle}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-slate-300">
                              {pillar.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 pl-8 leading-relaxed">
                            {pillar.summary}
                          </p>
                        </button>
                      ))}

                      {/* Direct Call Card in Mega Menu */}
                      <div className="p-3.5 rounded-xl bg-gradient-to-br from-indigo-600/10 via-indigo-500/5 to-transparent border border-indigo-500/20 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-indigo-600 dark:text-indigo-300">
                            Need a Custom Architecture?
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                            Speak directly with Founder &amp; CEO Vimal Raj to map your scope, integrations, and rollout plan.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setIsSolutionsOpen(false);
                            onOpenBooking('Custom Architecture Consultation');
                          }}
                          className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          <span>Schedule 30-min Meet</span>
                          <ArrowUpRight size={13} />
                        </button>
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
                  ? 'text-indigo-600 dark:text-white bg-indigo-500/10 dark:bg-white/[0.07]'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
              }`}
            >
              Voice Agents
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick(Page.HospitalManagement)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.HospitalManagement
                  ? 'text-indigo-600 dark:text-white bg-indigo-500/10 dark:bg-white/[0.07]'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
              }`}
            >
              MediCore HMS
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick(Page.MatlabAcademy)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.MatlabAcademy
                  ? 'text-indigo-600 dark:text-white bg-indigo-500/10 dark:bg-white/[0.07]'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
              }`}
            >
              MATLAB &amp; FDE Academy
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick(Page.About)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.About || activePage === Page.TeamProfile
                  ? 'text-indigo-600 dark:text-white bg-indigo-500/10 dark:bg-white/[0.07]'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
              }`}
            >
              About &amp; Awards
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick(Page.Contact)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                activePage === Page.Contact
                  ? 'text-indigo-600 dark:text-white bg-indigo-500/10 dark:bg-white/[0.07]'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all"
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all"
            >
              <Calendar size={14} />
              <span>Book Strategy Call</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06]"
            >
              {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06]"
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
            className="lg:hidden bg-white dark:bg-[#080C16] border-b border-slate-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1.5 max-h-[82vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => handleLinkClick(Page.Home)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
                  activePage === Page.Home ? 'bg-indigo-500/10 text-indigo-500' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                Home
              </button>

              <div className="pt-2 pb-1 px-3.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Core Solutions &amp; Academy
              </div>

              {CORE_PILLARS.map((pillar) => (
                <button
                  key={pillar.page}
                  type="button"
                  onClick={() => handleLinkClick(pillar.page)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between ${
                    activePage === pillar.page
                      ? 'bg-indigo-500/10 text-indigo-500 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="flex items-center gap-2.5 text-sm">
                    {PILLAR_ICONS[pillar.page]}
                    <span>{pillar.shortTitle}</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{pillar.badge}</span>
                </button>
              ))}

              <div className="border-t border-slate-200 dark:border-white/[0.08] pt-2 mt-2 space-y-1">
                <button
                  type="button"
                  onClick={() => handleLinkClick(Page.About)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                    activePage === Page.About ? 'bg-indigo-500/10 text-indigo-500' : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  About, Leadership &amp; Awards
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick(Page.Contact)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                    activePage === Page.Contact ? 'bg-indigo-500/10 text-indigo-500' : 'text-slate-700 dark:text-slate-200'
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
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                >
                  <Calendar size={16} />
                  <span>Book Strategy Call with Vimal Raj</span>
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
