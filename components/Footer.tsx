import React from 'react';
import { Mail, Phone, MessageSquare, Calendar, ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { Page } from '../types';
import { COMPANY_CONTACT, CORE_PILLARS, GROUP_PLATFORMS } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (topic?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-white dark:bg-[#070709] border-t border-zinc-200/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Authentic Social Eagle Badge */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate(Page.Home)}
              className="flex items-center gap-3 text-left"
            >
              <img
                src="/images/brand/vims-logo.webp"
                alt="VIMS Enterprise"
                className="w-9 h-9 object-contain rounded-xl border border-zinc-200 dark:border-white/10"
              />
              <span className="text-xl font-display font-bold text-zinc-900 dark:text-white leading-none">
                VIMS <span className="font-medium text-zinc-500 dark:text-zinc-400">Enterprise</span>
              </span>
            </button>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              B2B engineering group building Jill-Jill Voice AI, MediCore HMS, custom web systems, autonomous workflows, and Embedded Skills Academy.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                onClick={() => onNavigate(Page.About)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[11px] font-medium text-[#B8860B] dark:text-[#E8CA6A] hover:bg-[#D4AF37]/25 transition-colors"
              >
                <Award size={12} /> Social Eagle Award Recipient
              </button>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
                <ShieldCheck size={12} className="text-[#10B981]" /> MSME Registered
              </span>
            </div>
          </div>

          {/* 5 Specialized Niches */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5">
              {CORE_PILLARS.map((p) => (
                <li key={p.page}>
                  <button
                    type="button"
                    onClick={() => onNavigate(p.page)}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#E8451E] dark:hover:text-white transition-colors text-left"
                  >
                    {p.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* VIMS Group & Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              VIMS Group
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={GROUP_PLATFORMS.jilljill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-[#E8451E] dark:hover:text-white transition-colors"
                >
                  <span>Jill-Jill Voice</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={GROUP_PLATFORMS.embskills.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-[#E8451E] dark:hover:text-white transition-colors"
                >
                  <span>Embedded Skills</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(Page.About)}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-[#E8451E] dark:hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(Page.Contact)}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-[#E8451E] dark:hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Desk */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Direct Desk
            </h4>
            <div className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400 pt-1">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center gap-2.5 hover:text-[#E8451E] dark:hover:text-white transition-colors"
              >
                <Mail size={15} className="text-[#E8451E] shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </a>
              <a
                href={`tel:+91${COMPANY_CONTACT.phone}`}
                className="flex items-center gap-2.5 hover:text-[#E8451E] dark:hover:text-white transition-colors"
              >
                <Phone size={15} className="text-[#D4AF37] shrink-0" />
                <span>{COMPANY_CONTACT.phoneFormatted}</span>
              </a>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#10B981] transition-colors"
              >
                <MessageSquare size={15} className="text-[#10B981] shrink-0" />
                <span>WhatsApp Vimal Raj (CTO)</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-xs font-semibold transition-all shadow-sm"
              >
                <Calendar size={14} />
                <span>Book a Strategy Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-7 border-t border-zinc-200/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span>&copy; {new Date().getFullYear()} VIMS Enterprise. All rights reserved.</span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">&bull;</span>
            <span className="font-mono text-[11px]">GSTIN: {COMPANY_CONTACT.gstin}</span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">&bull;</span>
            <span className="font-mono text-[11px]">Udyam: {COMPANY_CONTACT.udyam}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.PrivacyPolicy);
              }}
              className="hover:text-[#E8451E] transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms-of-service"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.TermsOfService);
              }}
              className="hover:text-[#E8451E] transition-colors"
            >
              Terms
            </a>
            <a
              href="/data-deletion"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.DataDeletion);
              }}
              className="hover:text-[#E8451E] transition-colors"
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
