import React from 'react';
import { FileText, Mail, Phone, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';
import { COMPANY_CONTACT } from '../constants';

interface TermsOfServicePageProps {
  onNavigate?: (page: Page) => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-[#0B0F19]">
      <header className="bg-[#F8F7F4] dark:bg-[#0F1420] border-b border-slate-200/80 dark:border-slate-800 py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
              <FileText size={15} />
              <span>VIMS Enterprise &middot; Legal Terms</span>
            </span>
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate(Page.Home)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#1D4ED8]"
              >
                <ArrowLeft size={14} />
                <span>Back to Home</span>
              </button>
            ) : null}
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white max-w-3xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Governing terms for accessing VIMS Enterprise websites, AI voice demos, software consultations, MediCore HMS evaluations, and engineering academy programmes.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>
              Effective Date: <strong className="text-slate-900 dark:text-white">November 25, 2026</strong>
            </span>
            <span>
              Entity: <strong className="text-slate-900 dark:text-white">VIMS Enterprise</strong> ({COMPANY_CONTACT.udyam})
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">1. Acceptance &amp; Scope</h2>
          <p>
            By accessing <strong>www.vimsenterprise.com</strong>, submitting an enquiry form, or participating in a discovery consultation with VIMS Enterprise, you agree to these Terms of Service. Custom commercial engagements (software development, Jill-Jill Voice AI deployments, MediCore HMS hospital licensing, or institutional training contracts) are governed by the signed Statement of Work (SOW) between you and VIMS Enterprise.
          </p>
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">2. Core B2B Capabilities Covered</h2>
          <ul className="space-y-2 text-sm sm:text-base">
            {[
              'Multilingual AI Voice Agents (Jill-Jill) for business enquiry & appointment workflows.',
              'Custom B2B corporate websites, React web applications & e-commerce stores.',
              'AI automations, CRM/WhatsApp integrations & autonomous multi-agent deployments.',
              'VIMS MediCore Hospital Management System (HMS) multi-tenant clinical software.',
              'Engineering & Applied AI education via Embedded Skills & Forward Deployed Engineer mentorship.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#1D4ED8] dark:text-blue-400 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">3. Intellectual Property &amp; Acceptable Use</h2>
          <p>
            All website design, source code, brand photography, trademarks, and documentation remain the property of VIMS Enterprise. Client-supplied briefs, brand assets, and proprietary specifications remain client property and are held strictly in confidence. Visitors agree not to scrape, disrupt, reverse-engineer, or misuse website APIs or AI chat endpoints.
          </p>
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">4. Clinical &amp; AI Advisory Disclaimers</h2>
          <p>
            Automated AI demos, chatbot responses, and MediCore HMS decision-support tools assist trained professionals and administrators—they never replace licensed medical judgment or independent legal/regulatory counsel.
          </p>
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">5. Governing Law &amp; Contact</h2>
          <p>
            These Terms are governed by the laws of India, with jurisdiction in Tamil Nadu. Questions regarding these Terms or our{' '}
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate(Page.PrivacyPolicy)}
                className="text-[#1D4ED8] dark:text-blue-400 underline font-semibold"
              >
                Privacy Policy
              </button>
            ) : (
              <a href="/privacy-policy" className="text-[#1D4ED8] underline font-semibold">
                Privacy Policy
              </a>
            )}{' '}
            may be directed to:
          </p>
          <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-1.5 text-sm">
            <p className="font-bold text-slate-900 dark:text-white">VIMS Enterprise</p>
            <div className="flex flex-wrap gap-6">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="inline-flex items-center gap-2 text-[#1D4ED8] dark:text-blue-400 font-semibold hover:underline"
              >
                <Mail size={14} />
                <span>{COMPANY_CONTACT.email}</span>
              </a>
              <a
                href={`tel:+91${COMPANY_CONTACT.phone}`}
                className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold"
              >
                <Phone size={14} />
                <span>{COMPANY_CONTACT.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
