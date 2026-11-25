import React from 'react';
import { Trash2, Mail, Phone, ArrowLeft, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { Page } from '../types';
import { COMPANY_CONTACT } from '../constants';

interface DataDeletionPageProps {
  onNavigate?: (page: Page) => void;
}

const DataDeletionPage: React.FC<DataDeletionPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-[#0B0F19]">
      {/* Clean Open Header */}
      <header className="bg-[#F8F7F4] dark:bg-[#0F1420] border-b border-slate-200/80 dark:border-slate-800 py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
              <Trash2 size={15} />
              <span>VIMS Enterprise &middot; User Data Deletion</span>
            </span>
            <div className="flex items-center gap-6 text-xs font-semibold">
              {onNavigate ? (
                <>
                  <button
                    type="button"
                    onClick={() => onNavigate(Page.PrivacyPolicy)}
                    className="text-slate-600 dark:text-slate-300 hover:text-[#1D4ED8]"
                  >
                    Privacy Policy
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate(Page.Home)}
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-[#1D4ED8]"
                  >
                    <ArrowLeft size={14} />
                    <span>Back to Home</span>
                  </button>
                </>
              ) : null}
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white max-w-3xl">
            Personal Data Deletion Instructions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Clear step-by-step instructions to request removal of your personal information held by VIMS Enterprise across Meta/Facebook Lead Ads enquiries, website forms, WhatsApp Business chats, and AI voice logs.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>
              Last Updated: <strong className="text-slate-900 dark:text-white">November 25, 2026</strong>
            </span>
            <span>
              Resolution SLA: <strong className="text-slate-900 dark:text-white">Within 7 Business Days</strong>
            </span>
            <a
              href={`mailto:${COMPANY_CONTACT.email}?subject=Personal%20Data%20Deletion%20Request`}
              className="text-[#1D4ED8] dark:text-blue-400 hover:underline font-semibold"
            >
              {COMPANY_CONTACT.email}
            </a>
          </div>
        </div>
      </header>

      {/* Open Editorial Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-4">
          <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">STEP 01 &ndash; 03</div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            How to Request Permanent Data Deletion
          </h2>
          <ol className="space-y-4 pt-2">
            <li className="flex items-start gap-3">
              <span className="font-mono text-xs font-bold text-[#1D4ED8] dark:text-blue-400 pt-1">01.</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Send an Email Request:</strong> Email{' '}
                <a
                  href={`mailto:${COMPANY_CONTACT.email}?subject=Personal%20Data%20Deletion%20Request`}
                  className="text-[#1D4ED8] dark:text-blue-400 underline font-semibold"
                >
                  {COMPANY_CONTACT.email}
                </a>{' '}
                with the subject line <em>&ldquo;Personal Data Deletion Request&rdquo;</em>.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-xs font-bold text-[#1D4ED8] dark:text-blue-400 pt-1">02.</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Specify Your Identifiers:</strong> Mention the email address and/or mobile/WhatsApp phone number (with country code) you used on our website, Facebook/Instagram Lead Ad form, WhatsApp chat, or Jill-Jill Voice call.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono text-xs font-bold text-[#1D4ED8] dark:text-blue-400 pt-1">03.</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Verification &amp; Confirmation:</strong> To protect against unauthorized removal, we verify email/phone ownership (never asking for passwords or OTPs) and confirm deletion across CRM, WhatsApp, and enquiry records within 7 business days.
              </div>
            </li>
          </ol>
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            What Gets Deleted &amp; Statutory Exceptions
          </h2>
          <ul className="space-y-2.5 text-sm sm:text-base">
            {[
              'Website contact form entries, booking notes & email correspondence threads.',
              'Meta/Facebook & Instagram Lead Ad prospect contact records stored in our CRM.',
              'WhatsApp Business message logs, profile tags & follow-up queues.',
              'AI voice agent call transcripts & metadata associated with your phone number.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#0F766E] dark:text-teal-400 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600 dark:text-slate-400 pt-2">
            <strong>Statutory Exceptions:</strong> Executed GST tax invoices and legally required billing books are retained solely for statutory audit compliance, and a minimal opt-out suppression flag may be kept if requested so we never contact your number again.
          </p>
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <ShieldCheck size={14} className="text-[#1D4ED8]" />
            <span>Direct Deletion Desk</span>
          </div>
          <div className="border-l-2 border-[#1D4ED8] pl-5 space-y-2 text-sm">
            <p className="font-bold text-slate-900 dark:text-white">
              VIMS Enterprise &middot; Privacy Desk (Vimal Raj)
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href={`mailto:${COMPANY_CONTACT.email}?subject=Personal%20Data%20Deletion%20Request`}
                className="inline-flex items-center gap-2 text-[#1D4ED8] dark:text-blue-400 font-semibold hover:underline"
              >
                <Mail size={15} />
                <span>{COMPANY_CONTACT.email}</span>
              </a>
              <a
                href={`tel:+91${COMPANY_CONTACT.phone}`}
                className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold hover:text-[#1D4ED8]"
              >
                <Phone size={15} />
                <span>{COMPANY_CONTACT.phoneFormatted}</span>
              </a>
            </div>
            {onNavigate ? (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate(Page.PrivacyPolicy)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#1D4ED8]"
                >
                  <FileText size={13} />
                  <span>Read Full Privacy Policy &rarr;</span>
                </button>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataDeletionPage;
