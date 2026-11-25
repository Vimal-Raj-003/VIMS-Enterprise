import React from 'react';
import {
  ShieldCheck,
  Mail,
  Phone,
  ArrowLeft,
  ExternalLink,
  Trash2,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { Page } from '../types';
import { COMPANY_CONTACT } from '../constants';

interface PrivacyPolicyPageProps {
  onNavigate?: (page: Page) => void;
}

const TOC_ITEMS = [
  { id: 'overview', num: '01', label: 'Overview & Legal Entity' },
  { id: 'data-collected', num: '02', label: 'Information We Collect' },
  { id: 'meta-facebook-ads', num: '03', label: 'Meta / Facebook Ads & Pixel' },
  { id: 'whatsapp-business', num: '04', label: 'WhatsApp Business & Consent' },
  { id: 'ai-voice-agents', num: '05', label: 'AI Voice Agents (Jill-Jill)' },
  { id: 'how-we-use', num: '06', label: 'How We Use Information' },
  { id: 'sharing-transfers', num: '07', label: 'Third-Party Processors' },
  { id: 'retention-security', num: '08', label: 'Retention, Security & HMS' },
  { id: 'rights-deletion', num: '09', label: 'Privacy Rights & Deletion' },
  { id: 'children-updates', num: '10', label: 'Children & Policy Updates' },
  { id: 'grievance-contact', num: '11', label: 'Grievance Officer Contact' },
];

const DATA_TABLE = [
  {
    category: 'Direct Business & Enquiry Details',
    examples: 'Full name, work/personal email, phone/WhatsApp number, organization/hospital/college name, role, project brief.',
    source: 'Website forms, Cal.com booking, email & direct phone enquiries',
  },
  {
    category: 'Meta / Facebook & Instagram Lead Ads',
    examples: 'Contact fields you actively submit via Meta Instant Forms, selected service interest, campaign & ad set identifier.',
    source: 'Meta Lead Ads forms on Facebook & Instagram',
  },
  {
    category: 'WhatsApp Business Messaging',
    examples: 'Mobile number, WhatsApp display name, conversation messages, opt-in / opt-out status, scheduling confirmations.',
    source: 'WhatsApp Business Platform chats initiated by you or consented updates',
  },
  {
    category: 'AI Voice Agents (Jill-Jill)',
    examples: 'Spoken enquiry inputs, automated transcripts, caller number, call timestamp & duration, appointment booking logs.',
    source: 'Inbound or requested outbound voice agent calls (recording conditional)',
  },
  {
    category: 'Technical, Cookie & Ad Attribution',
    examples: 'Browser type, device viewport, page URL, theme & cookie preference (vims_cookie_consent), referral/campaign tags.',
    source: 'Essential browser storage, server logs & ad measurement tags',
  },
];

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-[#0B0F19]">
      {/* Clean Open Editorial Header */}
      <header className="bg-[#F8F7F4] dark:bg-[#0F1420] border-b border-slate-200/80 dark:border-slate-800 py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
              <ShieldCheck size={15} />
              <span>VIMS Enterprise &middot; Legal &amp; Meta Compliance</span>
            </span>
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate(Page.Home)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#1D4ED8] transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Home</span>
              </button>
            ) : null}
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white max-w-3xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Clear, human-readable commitment explaining how VIMS Enterprise collects, uses, protects, and deletes personal data across our website, Meta/Facebook Lead Ads, WhatsApp Business channels, and AI voice solutions.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>
              Effective Date: <strong className="text-slate-900 dark:text-white">November 25, 2026</strong>
            </span>
            <span>
              Last Updated: <strong className="text-slate-900 dark:text-white">November 25, 2026</strong>
            </span>
            <span>
              Entity: <strong className="text-slate-900 dark:text-white">VIMS Enterprise</strong> (MSME: {COMPANY_CONTACT.udyam})
            </span>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="text-[#1D4ED8] dark:text-blue-400 hover:underline font-semibold"
            >
              {COMPANY_CONTACT.email}
            </a>
          </div>
        </div>
      </header>

      {/* Editorial 2-Column Reading Canvas (No Boxes) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sticky Table of Contents */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                  <FileText size={13} />
                  <span>Contents</span>
                </p>
                <nav aria-label="Privacy Policy Sections" className="border-l border-slate-200 dark:border-slate-800 space-y-1">
                  {TOC_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block pl-4 py-1.5 -ml-px border-l-2 border-transparent hover:border-[#1D4ED8] text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-[#1D4ED8] dark:hover:text-white transition-colors"
                    >
                      <span className="font-mono text-[11px] text-slate-400 mr-2">{item.num}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                <p className="font-semibold text-slate-900 dark:text-white">Need Data Removed?</p>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Request permanent erasure of your lead, WhatsApp, or voice records at any time.
                </p>
                {onNavigate ? (
                  <button
                    type="button"
                    onClick={() => onNavigate(Page.DataDeletion)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] dark:text-blue-400 hover:underline"
                  >
                    <Trash2 size={13} />
                    <span>Data Deletion Instructions &rarr;</span>
                  </button>
                ) : (
                  <a
                    href="/data-deletion"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] dark:text-blue-400 hover:underline"
                  >
                    <Trash2 size={13} />
                    <span>Data Deletion Instructions &rarr;</span>
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* Right Wide Editorial Prose */}
          <article className="lg:col-span-9 max-w-3xl space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
            {/* 01 */}
            <section id="overview" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 01</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Overview, Scope &amp; Legal Entity Identity
              </h2>
              <p>
                This Privacy Policy explains how <strong>VIMS Enterprise</strong> (&ldquo;VIMS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, discloses, and safeguards personal information when you visit{' '}
                <a href="https://www.vimsenterprise.com" className="text-[#1D4ED8] dark:text-blue-400 underline">
                  https://www.vimsenterprise.com
                </a>
                , interact with our Meta (Facebook and Instagram) advertisements and Lead Ads instant forms, message our WhatsApp Business accounts, speak with our AI voice agents (including <strong>Jill-Jill</strong>), or enquire about <strong>MediCore HMS</strong>, custom website engineering, AI automations, and <strong>Embedded Skills / FDE Academy</strong> programmes.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Legal Entity Details:</strong> VIMS Enterprise &middot; Registered MSME ({COMPANY_CONTACT.udyam}) &middot; GSTIN: {COMPANY_CONTACT.gstin} &middot; Established March 2022 &middot; Operating from Tamil Nadu, India and serving enterprise clients globally.
              </p>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 02 */}
            <section id="data-collected" className="scroll-mt-28 space-y-5">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 02</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Information We Collect
              </h2>
              <p>
                We collect only the information reasonably necessary to respond to your enquiries, schedule consultations, deliver engineering projects, and measure the relevance of our communications.
              </p>

              <div className="overflow-x-auto border-y border-slate-200 dark:border-slate-800">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <th className="py-3.5 pr-4">Category</th>
                      <th className="py-3.5 px-4">Personal Information</th>
                      <th className="py-3.5 pl-4">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800/80">
                    {DATA_TABLE.map((row) => (
                      <tr key={row.category} className="align-top">
                        <td className="py-4 pr-4 font-semibold text-slate-900 dark:text-white whitespace-nowrap sm:whitespace-normal">
                          {row.category}
                        </td>
                        <td className="py-4 px-4 text-slate-600 dark:text-slate-300">{row.examples}</td>
                        <td className="py-4 pl-4 text-slate-500 dark:text-slate-400 text-xs">{row.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 03 */}
            <section id="meta-facebook-ads" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 03</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Meta Platforms, Facebook Ads, Lead Ads &amp; Attribution Technologies
              </h2>
              <p>
                VIMS Enterprise runs informational and lead-generation advertising campaigns on <strong>Meta Platforms</strong> (Facebook and Instagram). When you interact with our ads or submit a Meta Lead Ad Instant Form:
              </p>
              <ul className="space-y-2.5 pl-1">
                {[
                  'Information you voluntarily submit in Facebook or Instagram Instant Lead Forms (such as name, phone number, email address, city, or service interest) is securely transmitted to VIMS Enterprise solely to follow up on your specific request.',
                  'We may use the Meta Pixel, Conversions API, and cookie-controlled campaign parameters on our website solely when analytics/marketing preferences allow, in order to measure ad campaign effectiveness and understand which services visitors find helpful.',
                  'We strictly NEVER sell, rent, broker, or distribute Meta/Facebook Lead Ads contact lists or user data to any external marketers or unaffiliated third parties.',
                  'You can opt out of interest-based advertising or modify your Meta ad preferences anytime at Facebook Ad Preferences or withdraw consent directly by emailing vimal@vimsenterprise.com.',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm sm:text-base">
                    <CheckCircle2 size={17} className="text-[#0F766E] dark:text-teal-400 shrink-0 mt-1" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm">
                Manage your Meta ad controls anytime:{' '}
                <a
                  href="https://www.facebook.com/adpreferences/ad_settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#1D4ED8] dark:text-blue-400 hover:underline font-medium"
                >
                  <span>Meta Ad Preferences</span>
                  <ExternalLink size={12} />
                </a>
                .
              </p>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 04 */}
            <section id="whatsapp-business" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 04</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                WhatsApp Business Platform &amp; Promotional Consent Rules
              </h2>
              <p>
                When you message VIMS Enterprise on WhatsApp or ask to receive consultation details, calendar invitations, or technical proposals on WhatsApp, we process your mobile number and chat messages to respond promptly.
              </p>
              <ul className="space-y-2.5 pl-1 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={17} className="text-[#0F766E] dark:text-teal-400 shrink-0 mt-1" />
                  <span>
                    <strong>Enquiries Are Not Blanket Marketing Opt-Ins:</strong> Submitting a contact form or Meta Lead Ad enquiry for a quote or demo does not enroll you in unrelated promotional broadcasts. Promotional messages are sent only where explicit opt-in permission has been given.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={17} className="text-[#0F766E] dark:text-teal-400 shrink-0 mt-1" />
                  <span>
                    <strong>Instant Opt-Out:</strong> Reply <strong>STOP</strong> in any WhatsApp thread or email{' '}
                    <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-[#1D4ED8] dark:text-blue-400 underline">
                      {COMPANY_CONTACT.email}
                    </a>{' '}
                    to stop future WhatsApp updates immediately.
                  </span>
                </li>
              </ul>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 05 */}
            <section id="ai-voice-agents" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 05</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                AI Voice Agents (Jill-Jill) &amp; Automated Interactions
              </h2>
              <p>
                Interactions with VIMS Enterprise voice demonstrations or automated reception/qualification workflows (powered by <strong>Jill-Jill</strong>) process spoken audio in real time to detect language (such as Tamil, English, or Hindi), verify calendar slots, and summarize your request for our team.
              </p>
              <p>
                <strong>Human Control &amp; Recording Notice:</strong> Audio recordings are enabled only where required for demonstration review or explicit workflow configuration. Callers may request a live human team member or ask to be excluded from automated follow-up calls at any time.
              </p>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 06 */}
            <section id="how-we-use" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 06</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                How We Use Information &amp; Lawful Bases
              </h2>
              <ul className="space-y-2.5 pl-1 text-sm sm:text-base">
                {[
                  'Responding to consultation requests, demo bookings (Cal.com / Google Meet), and technical scoping enquiries.',
                  'Delivering contracted B2B web systems, AI voice/automation workflows, MediCore HMS deployments, and student training cohorts.',
                  'Verifying caller/user requests, maintaining site reliability, preventing spam or fraudulent access, and keeping consent suppression lists accurate.',
                  'Complying with statutory Indian accounting, GST invoicing, and regulatory obligations.',
                ].map((useItem) => (
                  <li key={useItem} className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-[#1D4ED8] dark:text-blue-400 shrink-0 mt-1" />
                    <span>{useItem}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 07 */}
            <section id="sharing-transfers" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 07</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Third-Party Service Providers &amp; Data Sharing
              </h2>
              <p>
                We share minimum necessary data only with vetted infrastructure partners strictly required to operate our communications, scheduling, and application services—including <strong>Meta Platforms</strong> (Facebook/Instagram Ads &amp; WhatsApp Business), <strong>Google Workspace / Calendar</strong>, <strong>Cal.com</strong>, <strong>Vercel</strong> (cloud edge/serverless hosting), and authorized CRM/AI inference providers operating under confidentiality obligations. We do not sell personal data.
              </p>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 08 */}
            <section id="retention-security" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 08</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Data Retention, Security Safeguards &amp; MediCore HMS Distinction
              </h2>
              <p>
                <strong>Retention Lifecycles:</strong> Prospective lead and consultation records are retained only as long as active follow-up is relevant (typically up to 24 months unless you request earlier deletion). Executed client project and GST billing records are retained as required by Indian tax and corporate law.
              </p>
              <p>
                <strong>Security:</strong> All website traffic and API submissions are protected in transit using HTTPS/TLS encryption with strict role-based internal access controls.
              </p>
              <p>
                <strong>MediCore HMS Patient Data Boundary:</strong> When hospitals license VIMS MediCore HMS for clinical operations, the subscribing healthcare institution remains the legal <em>Data Fiduciary / Controller</em> responsible for patient consent under India&apos;s <strong>DPDPA 2023</strong> and <strong>ABDM</strong> guidelines; VIMS Enterprise acts strictly as a technical software processor according to institutional agreements.
              </p>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 09 */}
            <section id="rights-deletion" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 09</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Your Privacy Rights (DPDPA 2023 / GDPR / CCPA) &amp; Data Deletion
              </h2>
              <p>
                Regardless of whether you contacted us through Meta Ads, WhatsApp, email, or our website, you have the right to:
              </p>
              <ul className="space-y-2 pl-1 text-sm sm:text-base">
                <li>&bull; <strong>Access &amp; Correction:</strong> Request a copy of your stored contact/enquiry record or correct inaccuracies.</li>
                <li>&bull; <strong>Withdraw Consent:</strong> Opt out of marketing messages, Lead Ad follow-ups, or non-essential cookies.</li>
                <li>&bull; <strong>Permanent Erasure / Deletion:</strong> Request deletion of your CRM profile, WhatsApp history, email enquiries, and AI voice logs.</li>
              </ul>
              <div className="pt-2">
                {onNavigate ? (
                  <button
                    type="button"
                    onClick={() => onNavigate(Page.DataDeletion)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold transition-colors"
                  >
                    <Trash2 size={15} />
                    <span>View Step-by-Step User Data Deletion Instructions</span>
                  </button>
                ) : (
                  <a
                    href="/data-deletion"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold transition-colors"
                  >
                    <Trash2 size={15} />
                    <span>View Step-by-Step User Data Deletion Instructions</span>
                  </a>
                )}
              </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 10 */}
            <section id="children-updates" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 10</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Children&apos;s Privacy &amp; Policy Updates
              </h2>
              <p>
                Our B2B platforms, ads, and engineering programmes are intended for adults (18+) or college students participating under institutional coordination. We do not knowingly collect personal data from children under 13 (or minors without parental/guardian consent). Updates to this Privacy Policy will be published directly at{' '}
                <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[#1D4ED8] dark:text-blue-400">
                  https://www.vimsenterprise.com/privacy-policy
                </code>{' '}
                with an updated effective date.
              </p>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 11 */}
            <section id="grievance-contact" className="scroll-mt-28 space-y-4">
              <div className="text-xs font-mono font-semibold text-[#1D4ED8] dark:text-blue-400">SECTION 11</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Official Privacy &amp; Grievance Officer Contact
              </h2>
              <p>
                For any privacy enquiry, Meta Lead Ads opt-out, consent withdrawal, or personal data deletion request (acknowledged within 48 business hours):
              </p>

              <div className="pt-2 space-y-2.5 text-sm border-l-2 border-[#1D4ED8] pl-5">
                <p className="font-bold text-slate-900 dark:text-white text-base">
                  VIMS Enterprise &mdash; Attention: Vimal Raj (Founder, CTO &amp; Privacy Officer)
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  MSME: {COMPANY_CONTACT.udyam} &middot; GSTIN: {COMPANY_CONTACT.gstin} &middot; Tamil Nadu, India
                </p>
                <div className="flex flex-wrap gap-6 pt-1">
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}?subject=Privacy%20%2F%20Data%20Request`}
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
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
