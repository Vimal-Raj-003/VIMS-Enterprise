import React from 'react';
import {
  Trash2,
  Database,
  Mail,
  UserCheck,
  ShieldAlert,
  RefreshCw,
  Phone,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  FileText,
  Lock
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Page } from '../types';

interface DataDeletionPageProps {
  onNavigate?: (page: Page) => void;
}

const DataDeletionPage: React.FC<DataDeletionPageProps> = ({ onNavigate }) => {
  const { ref: contentRef, isVisible: isContentVisible } = useScrollAnimation<HTMLDivElement>();

  const deletionSections = [
    {
      id: 'processed-data',
      number: '01',
      title: 'What Personal Data May Be Processed',
      icon: <Database className="w-6 h-6 text-cyan" />,
      badge: 'Scope of Data',
      summary: 'Categories of personal and business contact data held by VIMS Enterprise that may be subject to a deletion request.',
      points: [
        {
          heading: 'Website & Business Enquiry Records',
          text: 'Contact details and enquiry information you submitted through our website forms, consultation bookings, or email correspondence—such as your full name, business email address, phone number, company name, role/designation, and project notes.'
        },
        {
          heading: 'WhatsApp & CRM Communication Logs',
          text: 'Your mobile phone number, WhatsApp profile name, message history, and communication preference records stored in our CRM when you interact with VIMS Enterprise over WhatsApp Business Platform channels.'
        },
        {
          heading: 'AI Voice Agent Interaction Data',
          text: 'Call metadata (phone number, call timestamps, duration, and interaction status), call transcripts, conditional audio recordings (where enabled), and appointment scheduling details captured during interactions with our AI voice agents.'
        }
      ]
    },
    {
      id: 'how-to-request-deletion',
      number: '02',
      title: 'How to Request Personal Data Deletion',
      icon: <Mail className="w-6 h-6 text-violet" />,
      badge: 'Step-by-Step Instructions',
      summary: 'Follow these clear steps to submit a formal personal data deletion request to VIMS Enterprise.',
      points: [
        {
          heading: 'Step 1: Send an Email Request',
          text: 'Send an email directly to our official privacy contact at vimal@vimsenterprise.com using the suggested subject line: "Personal Data Deletion Request".'
        },
        {
          heading: 'Step 2: Identify Your Contact Details',
          text: 'In the body of your email, clearly specify the email address and/or mobile phone number (including country code) associated with your website enquiry, WhatsApp messages, CRM record, or AI voice interactions.'
        },
        {
          heading: 'Step 3: Specify the Scope (Optional)',
          text: 'Let us know whether you are requesting complete deletion of all personal data held by VIMS Enterprise or removal from specific channels (such as WhatsApp communications, CRM records, or AI voice follow-up lists).'
        }
      ]
    },
    {
      id: 'verification-and-security',
      number: '03',
      title: 'Identity Verification & Credential Safety',
      icon: <UserCheck className="w-6 h-6 text-cyan" />,
      badge: 'Verification & Safety',
      summary: 'How we protect your records against unauthorized deletion requests and keep your credentials safe.',
      points: [
        {
          heading: 'Identity Verification Requirement',
          text: 'To protect your data from unauthorized removal or fraudulent requests, we may ask you to confirm ownership of the email address or phone number associated with the data before executing the deletion.'
        },
        {
          heading: 'Never Share Passwords or OTPs',
          text: 'VIMS Enterprise will never ask you for your account passwords, one-time passwords (OTPs), banking PINs, or other sensitive security credentials to process a data deletion request. Please do not include any passwords, OTPs, or sensitive credentials in your email.'
        },
        {
          heading: 'Authorized Representatives',
          text: 'If you are submitting a deletion request on behalf of another individual or organization, we may request reasonable written confirmation of your authority to act on their behalf.'
        }
      ]
    },
    {
      id: 'deletion-and-retention',
      number: '04',
      title: 'Deletion Processing & Legal Retention Exceptions',
      icon: <Trash2 className="w-6 h-6 text-rose-400" />,
      badge: 'Data Removal',
      summary: 'How eligible personal data is removed or anonymized once your deletion request is verified.',
      points: [
        {
          heading: 'Deletion or Anonymization of Eligible Data',
          text: 'Once your request and identity are verified, our team will manually review and delete or irreversibly anonymize your eligible personal data across our active CRM, WhatsApp contact lists, website enquiry records, and AI service logs.'
        },
        {
          heading: 'Legal & Contractual Retention Requirements',
          text: 'Certain limited records may be retained where strictly necessary to fulfill an active contract, maintain required accounting, invoicing, or tax documentation, resolve ongoing disputes, enforce agreements, or comply with applicable law.'
        },
        {
          heading: 'Communication Suppression Records',
          text: 'Where you request to opt out of future communications alongside data deletion, we may retain a minimal suppression record (such as a blocked contact entry) solely to ensure you are not contacted again.'
        }
      ]
    },
    {
      id: 'status-updates',
      number: '05',
      title: 'Requesting an Update on Your Deletion Request',
      icon: <RefreshCw className="w-6 h-6 text-cyan" />,
      badge: 'Status Follow-Up',
      summary: 'How to check the status of a pending deletion request or ask follow-up questions.',
      points: [
        {
          heading: 'Confirmation of Receipt & Completion',
          text: 'After you submit a Personal Data Deletion Request to vimal@vimsenterprise.com, our team reviews the request manually and will reply via email once verification and processing are completed.'
        },
        {
          heading: 'How to Request a Status Update',
          text: 'If you wish to request an update on the progress of a previously submitted deletion request, simply reply to your original email thread or send a follow-up email to vimal@vimsenterprise.com referencing "Personal Data Deletion Request – Status Update".'
        },
        {
          heading: 'No Login Required',
          text: 'You do not need an account or password login to submit a deletion request or to follow up on its status. This page and our email request process are publicly accessible to all users and customers.'
        }
      ]
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      <HeroSection
        variant="subpage"
        headline={
          <>
            Data Deletion <span className="text-cyan">Instructions</span>
          </>
        }
        subtext="Clear, step-by-step instructions on how to request the deletion of your personal data held by VIMS Enterprise across our website, WhatsApp channels, CRM, and AI voice services."
        primaryCta={{
          text: 'Submit Deletion Request via Email',
          onClick: () => {
            window.location.href =
              'mailto:vimal@vimsenterprise.com?subject=Personal%20Data%20Deletion%20Request&body=Hello%20VIMS%20Enterprise%20Privacy%20Team%2C%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20personal%20data.%0A%0A-%20Name%3A%20%0A-%20Email%20Address%20Associated%20with%20My%20Data%3A%20%0A-%20Phone%20Number%20Associated%20with%20My%20Data%3A%20%0A%0AThank%20you.';
          }
        }}
        imageUrl="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80"
        altText="VIMS Enterprise Personal Data Deletion Instructions"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Metadata & Back Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/30 shadow-xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/15 border border-cyan/30 text-cyan text-xs font-mono font-bold uppercase tracking-wider">
              <Trash2 className="w-3.5 h-3.5" />
              VIMS Enterprise
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Path: <code className="text-cyan">/data-deletion</code>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Official Privacy Contact: <a href="mailto:vimal@vimsenterprise.com" className="text-cyan hover:underline">vimal@vimsenterprise.com</a>
            </span>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate(Page.Home)}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan transition-colors self-start sm:self-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          )}
        </div>

        {/* Quick Action Summary Card */}
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-4xl border border-cyan/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan font-bold">
                Quick Summary • Publicly Accessible (No Login Required)
              </span>
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-slate-900 dark:text-light-text">
                How to Submit a Personal Data Deletion Request
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                To request the deletion of personal data held by <strong className="text-slate-900 dark:text-white font-semibold">VIMS Enterprise</strong>, send an email to{' '}
                <a href="mailto:vimal@vimsenterprise.com?subject=Personal%20Data%20Deletion%20Request" className="text-cyan hover:underline font-semibold">
                  vimal@vimsenterprise.com
                </a>{' '}
                with the subject line <code className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-navy text-cyan font-mono text-sm">Personal Data Deletion Request</code> and include the email address or phone number associated with your data.
              </p>
              <div className="flex items-start gap-2.5 pt-2 text-xs md:text-sm text-amber-600 dark:text-amber-400">
                <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Security Notice:</strong> Never include passwords, one-time passwords (OTPs), or sensitive financial/security credentials in your deletion request email.
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-100/80 dark:bg-navy/70 p-6 rounded-3xl border border-slate-200/70 dark:border-slate-800 space-y-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Send Request To</p>
                <p className="text-sm md:text-base font-mono font-bold text-cyan break-all mt-1">vimal@vimsenterprise.com</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Suggested Email Subject</p>
                <p className="text-sm font-mono font-semibold text-slate-900 dark:text-white mt-1">Personal Data Deletion Request</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Required Identifier</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Your associated email address and/or phone number</p>
              </div>
              <a
                href="mailto:vimal@vimsenterprise.com?subject=Personal%20Data%20Deletion%20Request"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-gradient-to-r from-cyan to-violet text-white font-bold text-xs md:text-sm shadow-md hover:opacity-95 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Compose Deletion Email
              </a>
            </div>
          </div>
        </div>

        {/* Quick Section Jump Bar */}
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/30 shadow-lg">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan" />
            Data Deletion Guide Sections
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {deletionSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-100/70 dark:bg-navy/60 border border-slate-200/60 dark:border-slate-800 hover:border-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xs font-mono font-bold text-cyan">{section.number}</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-cyan transition-colors">
                    {section.title}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </a>
            ))}
            <a
              href="#contact-privacy-team"
              className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-cyan/10 border border-cyan/30 hover:bg-cyan/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xs font-mono font-bold text-cyan">06</span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                  Contact & Follow-Up
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-cyan group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Main Sections */}
        <div
          ref={contentRef}
          className={`space-y-8 transition-all duration-1000 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {deletionSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-4xl border border-slate-200/50 dark:border-slate-800/30 shadow-xl hover:border-cyan/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200/60 dark:border-slate-800/80">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-navy flex items-center justify-center border border-slate-200/60 dark:border-slate-800 shadow-inner flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-cyan uppercase tracking-widest">
                        Section {section.number}
                      </span>
                      <span className="text-slate-400 dark:text-slate-600">•</span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {section.badge}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-poppins font-bold text-slate-900 dark:text-light-text mt-1">
                      {section.title}
                    </h2>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">
                {section.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-slate-50/70 dark:bg-navy/50 border border-slate-200/50 dark:border-slate-800/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0" />
                        <h3 className="text-base font-poppins font-bold text-slate-900 dark:text-light-text">
                          {point.heading}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Section 06: Contact & Follow-Up */}
          <section
            id="contact-privacy-team"
            className="scroll-mt-28 bg-gradient-to-br from-navy/90 via-slate-900/90 to-navy/90 text-white p-8 md:p-12 rounded-4xl border border-cyan/30 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan/20 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-widest">
                  Section 06 • Contact & Status Updates
                </div>
                <h2 className="text-2xl md:text-4xl font-poppins font-bold text-white">
                  Submit or Track a Deletion Request
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-2xl">
                  To submit a new deletion request or ask for an update on an existing request, email <strong className="text-white">VIMS Enterprise</strong> at <a href="mailto:vimal@vimsenterprise.com?subject=Personal%20Data%20Deletion%20Request" className="text-cyan hover:underline">vimal@vimsenterprise.com</a> with the email address or phone number associated with your records.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
                  <Lock className="w-4 h-4 text-cyan flex-shrink-0" />
                  <span>Remember: Never send passwords, OTPs, or sensitive credentials in your request.</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 space-y-5">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-cyan mb-1">Company</p>
                  <p className="text-xl font-poppins font-bold text-white">VIMS Enterprise</p>
                </div>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400">Official Data Deletion & Privacy Email</p>
                      <a
                        href="mailto:vimal@vimsenterprise.com?subject=Personal%20Data%20Deletion%20Request"
                        className="text-sm md:text-base font-semibold text-cyan hover:underline break-all"
                      >
                        vimal@vimsenterprise.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400">General Business Contact Number</p>
                      <a
                        href="tel:+918122259505"
                        className="text-sm md:text-base font-semibold text-white hover:text-cyan transition-colors"
                      >
                        +91 8122259505
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:vimal@vimsenterprise.com?subject=Personal%20Data%20Deletion%20Request"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-cyan to-violet text-white font-bold text-sm shadow-lg hover:opacity-95 transition-opacity"
                  >
                    <Mail className="w-4 h-4" />
                    Email vimal@vimsenterprise.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPage;
