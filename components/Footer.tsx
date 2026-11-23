import React from 'react';
import { Mail, Phone, MessageSquare, Calendar, ShieldCheck, Award } from 'lucide-react';
import { Page } from '../types';
import { COMPANY_CONTACT, CORE_PILLARS } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (topic?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-white dark:bg-[#050811] border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Credentials */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate(Page.Home)}
              className="flex items-center gap-3 text-left"
            >
              <img
                src="/images/brand/vims-logo.webp"
                alt="VIMS Enterprise Logo"
                className="w-10 h-10 object-contain rounded-xl border border-slate-200 dark:border-white/10"
              />
              <div>
                <div className="text-xl font-poppins font-bold text-slate-900 dark:text-white leading-none">
                  VIMS Enterprise
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400 mt-1">
                  Applied AI · Web Systems · Healthcare OS
                </div>
              </div>
            </button>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Human-centered enterprise engineering partner building multilingual AI voice agents, high-converting web platforms, autonomous agent workflows, MediCore HMS, and industry-ready engineering talent.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] font-medium text-amber-700 dark:text-amber-300">
                <Award size={12} /> Social Eagle Award Recipient
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                <ShieldCheck size={12} className="text-indigo-500" /> MSME Registered
              </span>
            </div>
          </div>

          {/* Core Ecosystem */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Solutions &amp; Academy
            </h4>
            <ul className="mt-4 space-y-2.5">
              {CORE_PILLARS.map((p) => (
                <li key={p.page}>
                  <button
                    type="button"
                    onClick={() => onNavigate(p.page)}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-left"
                  >
                    {p.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Compliance */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(Page.Home)}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(Page.About)}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  About &amp; Awards
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(Page.Contact)}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(Page.PrivacyPolicy);
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(Page.TermsOfService);
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/data-deletion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(Page.DataDeletion);
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  Data Deletion
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Executive Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Direct Executive Desk
            </h4>
            <div className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400 pt-1">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center gap-2.5 hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                <Mail size={15} className="text-indigo-500 shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </a>
              <a
                href={`tel:+91${COMPANY_CONTACT.phone}`}
                className="flex items-center gap-2.5 hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                <Phone size={15} className="text-indigo-500 shrink-0" />
                <span>{COMPANY_CONTACT.phoneFormatted}</span>
              </a>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-500 transition-colors"
              >
                <MessageSquare size={15} className="text-emerald-500 shrink-0" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <Calendar size={14} />
                <span>Book a 30-Min Strategy Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Registration Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span>&copy; {new Date().getFullYear()} VIMS Enterprise. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">&bull;</span>
            <span className="font-mono text-[11px]">GSTIN: {COMPANY_CONTACT.gstin}</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">&bull;</span>
            <span className="font-mono text-[11px]">Udyam: {COMPANY_CONTACT.udyam}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.PrivacyPolicy);
              }}
              className="hover:text-indigo-500 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms-of-service"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.TermsOfService);
              }}
              className="hover:text-indigo-500 transition-colors"
            >
              Terms
            </a>
            <a
              href="/data-deletion"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.DataDeletion);
              }}
              className="hover:text-indigo-500 transition-colors"
            >
              Data Deletion
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
