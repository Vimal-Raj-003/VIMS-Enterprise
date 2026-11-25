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
    <footer className="bg-[#F8F7F4] dark:bg-[#080C14] border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate(Page.Home)}
              className="flex items-center gap-3 text-left"
            >
              <img
                src="/images/brand/vims-logo.webp"
                alt="VIMS Enterprise"
                className="w-9 h-9 object-contain rounded-xl border border-slate-200 dark:border-slate-700"
              />
              <span className="text-xl font-display font-bold text-slate-900 dark:text-white leading-none">
                VIMS <span className="font-medium text-slate-500 dark:text-slate-400">Enterprise</span>
              </span>
            </button>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Human-centered B2B technology group powering Jill-Jill Voice AI, MediCore HMS, custom web systems, operational automations, and Embedded Skills Academy.
            </p>

            <div className="flex flex-wrap gap-3 pt-1 text-xs">
              <button
                type="button"
                onClick={() => onNavigate(Page.About)}
                className="inline-flex items-center gap-1.5 text-[#B45309] dark:text-amber-300 font-semibold hover:underline"
              >
                <Award size={13} /> Social Eagle Award Recipient
              </button>
              <span className="text-slate-300 dark:text-slate-700">&middot;</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-slate-600 dark:text-slate-400">
                <ShieldCheck size={13} className="text-[#0F766E] dark:text-teal-400" /> MSME Registered
              </span>
            </div>
          </div>

          {/* 5 Specialized Niches */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5">
              {CORE_PILLARS.map((p) => (
                <li key={p.page}>
                  <button
                    type="button"
                    onClick={() => onNavigate(p.page)}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#1D4ED8] dark:hover:text-white transition-colors text-left"
                  >
                    {p.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* VIMS Group & Legal */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Group &amp; Compliance
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={GROUP_PLATFORMS.jilljill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-[#1D4ED8] dark:hover:text-white transition-colors"
                >
                  <span>Jill-Jill Voice AI</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={GROUP_PLATFORMS.embskills.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-[#1D4ED8] dark:hover:text-white transition-colors"
                >
                  <span>Embedded Skills Academy</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(Page.PrivacyPolicy);
                  }}
                  className="text-slate-700 dark:text-slate-300 font-medium hover:text-[#1D4ED8] dark:hover:text-white transition-colors"
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
                  className="text-slate-600 dark:text-slate-400 hover:text-[#1D4ED8] dark:hover:text-white transition-colors"
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
                  className="text-slate-600 dark:text-slate-400 hover:text-[#1D4ED8] dark:hover:text-white transition-colors"
                >
                  Data Deletion Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Desk */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Direct Desk
            </h4>
            <div className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400 pt-1">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center gap-2.5 hover:text-[#1D4ED8] dark:hover:text-white transition-colors"
              >
                <Mail size={15} className="text-[#1D4ED8] dark:text-blue-400 shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </a>
              <a
                href={`tel:+91${COMPANY_CONTACT.phone}`}
                className="flex items-center gap-2.5 hover:text-[#1D4ED8] dark:hover:text-white transition-colors"
              >
                <Phone size={15} className="text-slate-500 shrink-0" />
                <span>{COMPANY_CONTACT.phoneFormatted}</span>
              </a>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#0F766E] transition-colors"
              >
                <MessageSquare size={15} className="text-[#0F766E] dark:text-teal-400 shrink-0" />
                <span>WhatsApp Vimal Raj (CTO)</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-semibold transition-all shadow-sm"
              >
                <Calendar size={14} />
                <span>Book a Strategy Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-7 border-t border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span>&copy; {new Date().getFullYear()} VIMS Enterprise. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">&bull;</span>
            <span className="font-mono text-[11px]">GSTIN: {COMPANY_CONTACT.gstin}</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">&bull;</span>
            <span className="font-mono text-[11px]">Udyam: {COMPANY_CONTACT.udyam}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.PrivacyPolicy);
              }}
              className="font-medium hover:text-[#1D4ED8] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.TermsOfService);
              }}
              className="hover:text-[#1D4ED8] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/data-deletion"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.DataDeletion);
              }}
              className="hover:text-[#1D4ED8] transition-colors"
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
