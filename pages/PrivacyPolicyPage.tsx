import React from 'react';
import {
  Shield,
  Database,
  MessageSquare,
  Bell,
  Mic,
  Lock,
  Trash2,
  Mail,
  Phone,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  FileText,
  Globe,
  RefreshCw
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Page } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate?: (page: Page) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const { ref: contentRef, isVisible: isContentVisible } = useScrollAnimation<HTMLDivElement>();

  const policySections = [
    {
      id: 'data-collection',
      number: '01',
      title: 'Customer Data Collection & Processing Purposes',
      icon: <Database className="w-6 h-6 text-cyan" />,
      badge: 'Data Intake & Purpose',
      summary: 'What personal and business information VIMS Enterprise collects and the specific purposes for which it is processed.',
      points: [
        {
          heading: 'Information You Provide Directly',
          text: 'When you submit a contact form, book a strategy call, request a quotation, or communicate with us, we may collect your name, business email address, phone number, company name, role/designation, and service or project enquiry details.'
        },
        {
          heading: 'Purposes of Personal Data Processing',
          text: 'We process personal and business information to respond to your enquiries, evaluate project requirements, deliver requested VIMS Enterprise products and services (including HMS software consultations, AI Automation workflows, Mechanical Cost Estimation, VIMS Cards, LinkedIn Growth, and Digital Marketing), manage client relationships, provide customer support, and comply with applicable legal obligations.'
        },
        {
          heading: 'Cookies, Local Storage & Analytics',
          text: 'Our website uses browser local storage (such as the "vims_cookie_consent" setting) to remember your interface theme and cookie preferences (Essential, Analytics, and Marketing modules), alongside basic technical metadata (such as browser type, device type, and page interactions) to maintain website stability and performance.'
        }
      ]
    },
    {
      id: 'whatsapp-communication',
      number: '02',
      title: 'WhatsApp Business Platform & Communication',
      icon: <MessageSquare className="w-6 h-6 text-green-400" />,
      badge: 'Messaging & Opt-Out',
      summary: 'How we handle customer communications, service updates, and opt-out requests across WhatsApp Business Platform integrations.',
      points: [
        {
          heading: 'Service & Transactional Messaging',
          text: 'When you initiate a WhatsApp chat with us or request project coordination over WhatsApp, we process your mobile number, profile name, and message content through WhatsApp Business Platform tools and our internal CRM to respond to enquiries, confirm appointments, and deliver customer support.'
        },
        {
          heading: 'Channel Rules & Platform Governance',
          text: 'Service and conversational messages are sent in response to your direct enquiries or active engagements. Communications conducted via WhatsApp are also subject to Meta / WhatsApp’s applicable platform terms and privacy policies.'
        },
        {
          heading: 'Withdrawing Consent & Opt-Out Requests',
          text: 'You can opt out of WhatsApp marketing or non-essential communications at any time by emailing vimal@vimsenterprise.com with your phone number, using a supported unsubscribe option where provided in a message, or requesting removal directly in chat for manual processing by our team.'
        }
      ]
    },
    {
      id: 'marketing-consent',
      number: '03',
      title: 'Marketing Consent & Preferences',
      icon: <Bell className="w-6 h-6 text-violet" />,
      badge: 'Opt-In Standards',
      summary: 'How promotional outreach is governed and how you can withdraw marketing consent at any time.',
      points: [
        {
          heading: 'Enquiries Do Not Equal Marketing Consent',
          text: 'Submitting a business enquiry, providing a phone number for a consultation or quote, or being added to our CRM does not automatically constitute consent to receive promotional WhatsApp broadcasts or marketing messages.'
        },
        {
          heading: 'Permitted Opt-In Marketing Only',
          text: 'Promotional or marketing messages (including WhatsApp marketing communications or email updates) are sent only when appropriate opt-in consent has been obtained and where permitted by applicable WhatsApp Business Platform policies and data protection laws.'
        },
        {
          heading: 'Marketing Consent Withdrawal',
          text: 'You may withdraw your marketing consent at any time by contacting vimal@vimsenterprise.com or by using any supported unsubscribe channel provided in our communications. Upon receiving your request, our team will update your CRM communication preferences so you no longer receive promotional outreach, without affecting active project or support communications.'
        }
      ]
    },
    {
      id: 'ai-voice-agents',
      number: '04',
      title: 'AI Voice Agents & Automated Interactions',
      icon: <Mic className="w-6 h-6 text-cyan" />,
      badge: 'AI Services',
      summary: 'How our AI voice agents (including JillJill AI Voice Agent) process audio, transcripts, call metadata, and appointment details.',
      points: [
        {
          heading: 'Audio, Transcripts & Appointment Data',
          text: 'When you interact with VIMS Enterprise AI voice agents, the system may process spoken audio inputs, generate real-time or post-call text transcripts, log call metadata (such as caller phone number, call timestamps, duration, and interaction status), and capture appointment or enquiry details you provide during the call.'
        },
        {
          heading: 'Conditional Call Recording',
          text: 'Not all calls are recorded by default. Where call recording is enabled for a specific service workflow or quality review, audio recordings are captured conditionally and in accordance with applicable notice and consent requirements.'
        },
        {
          heading: 'Human Assistance & Exclusion Requests',
          text: 'You may request to speak with a human team member or ask to be excluded from automated AI voice follow-ups at any time by stating your preference during the interaction or by contacting vimal@vimsenterprise.com.'
        }
      ]
    },
    {
      id: 'service-providers-sharing',
      number: '05',
      title: 'Service Providers, Data Sharing & Transfers',
      icon: <Globe className="w-6 h-6 text-cyan" />,
      badge: 'Sharing & Transfers',
      summary: 'How we work with infrastructure providers and protect data across operational environments.',
      points: [
        {
          heading: 'No Sale of Personal Data',
          text: 'VIMS Enterprise does not sell, rent, or trade your personal contact information, enquiry records, or project files to unaffiliated third parties.'
        },
        {
          heading: 'Authorized Service Providers',
          text: 'To operate our website, CRM, WhatsApp Business Platform messaging, telephony/AI voice services, and cloud infrastructure, we may share necessary data with trusted third-party service providers and platform partners strictly to perform services on our behalf, or when required by applicable law.'
        },
        {
          heading: 'International Data Transfers',
          text: 'Where our communications platforms, AI service providers, or cloud hosting infrastructure process data outside your country of residence, we take reasonable steps to ensure such transfers are handled through reputable providers with appropriate contractual and technical protections.'
        }
      ]
    },
    {
      id: 'data-security-retention',
      number: '06',
      title: 'Data Security & Data Retention',
      icon: <Lock className="w-6 h-6 text-violet" />,
      badge: 'Safeguards & Lifecycle',
      summary: 'How we safeguard your information and determine how long personal data is retained.',
      points: [
        {
          heading: 'Data Security Safeguards',
          text: 'We apply reasonable administrative, technical, and organizational safeguards—including encrypted web transport (HTTPS/TLS) and restricted internal access controls—to protect personal data, communications, and confidential business or engineering files against unauthorized access, alteration, or misuse.'
        },
        {
          heading: 'Data Retention Principles',
          text: 'Personal data is retained only for as long as reasonably necessary to fulfill the specified service or enquiry purpose, support legitimate operational and business record-keeping needs, resolve disputes, and comply with applicable legal, tax, or regulatory requirements.'
        },
        {
          heading: 'Security Reporting & Limitations',
          text: 'Because no electronic transmission or storage system can be guaranteed to be completely free of risk, we encourage you to contact us immediately at vimal@vimsenterprise.com if you have any reason to believe your interaction with us has been compromised.'
        }
      ]
    },
    {
      id: 'privacy-rights-deletion',
      number: '07',
      title: 'Privacy Rights & Access, Correction or Deletion Requests',
      icon: <Trash2 className="w-6 h-6 text-rose-400" />,
      badge: 'User Rights',
      summary: 'Your applicable privacy rights and how to request access, correction, consent withdrawal, or deletion of your data.',
      points: [
        {
          heading: 'Applicable Privacy Rights',
          text: 'Depending on applicable data protection laws, you have the right to request access to the personal data we hold about you, ask for inaccurate or incomplete information to be corrected, withdraw marketing consent, or request deletion of your personal data.'
        },
        {
          heading: 'Submitting Access, Correction or Deletion Requests',
          text: 'To exercise your rights—including requesting permanent deletion of your contact details, WhatsApp messaging history, CRM records, or AI voice interaction data—please email vimal@vimsenterprise.com with your request and the email address or phone number associated with your interactions.'
        },
        {
          heading: 'Identity Verification & Handling',
          text: 'To protect your information from unauthorized requests, we may verify your identity before completing access, correction, or deletion actions. Once verified, we will process your request and remove or update eligible personal data unless retention is required for active contractual obligations or applicable law.'
        }
      ]
    },
    {
      id: 'updates-effective-date',
      number: '08',
      title: 'Effective Date & Policy Updates',
      icon: <RefreshCw className="w-6 h-6 text-cyan" />,
      badge: 'Governance',
      summary: 'How this policy is maintained as our website, AI services, and messaging integrations evolve.',
      points: [
        {
          heading: 'Current Policy Scope',
          text: 'This Privacy Policy applies to the VIMS Enterprise website, customer and prospect enquiries, relevant AI voice and automation services, and our WhatsApp Business Platform communications.'
        },
        {
          heading: 'Future Policy Updates',
          text: 'We may update this Privacy Policy periodically to reflect operational changes, new product capabilities, or updated legal and platform requirements. Any revised version will be posted at /privacy-policy.'
        },
        {
          heading: 'Effective Date & Review',
          text: 'This Privacy Policy is currently in effect and is reviewed regularly to maintain alignment with our active business practices. Please check this page periodically for the latest information on our privacy practices.'
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
            Privacy <span className="text-cyan">Policy</span>
          </>
        }
        subtext="Transparent information on how VIMS Enterprise collects, communicates, secures, and respects your data across our website, WhatsApp Business Platform channels, and AI voice solutions."
        primaryCta={{
          text: 'Contact Privacy Team',
          onClick: () => {
            window.location.href = 'mailto:vimal@vimsenterprise.com?subject=Privacy%20Policy%20Inquiry';
          }
        }}
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
        altText="VIMS Enterprise Privacy Policy and Data Security"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Metadata & Back Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/30 shadow-xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/15 border border-cyan/30 text-cyan text-xs font-mono font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              VIMS Enterprise
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Path: <code className="text-cyan">/privacy-policy</code>
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

        {/* Quick Section Jump Bar */}
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/30 shadow-lg">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan" />
            Policy Sections
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {policySections.map((section) => (
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
              href="#contact-details"
              className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-cyan/10 border border-cyan/30 hover:bg-cyan/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xs font-mono font-bold text-cyan">09</span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                  Contact Details
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-cyan group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Intro Overview Card */}
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-4xl border border-slate-200/50 dark:border-slate-800/30 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-slate-900 dark:text-light-text mb-4">
            Overview & Scope
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            This Privacy Policy describes how <strong className="text-slate-900 dark:text-white font-semibold">VIMS Enterprise</strong> (&ldquo;VIMS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, shares, and safeguards personal and business information across the VIMS Enterprise website, our WhatsApp Business Platform communications, our AI voice and automation services, and related customer interactions. We are committed to transparent, consent-respecting data practices and clear channels for exercising your privacy rights.
          </p>
        </div>

        {/* Main Policy Sections */}
        <div
          ref={contentRef}
          className={`space-y-8 transition-all duration-1000 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {policySections.map((section) => (
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

          {/* Section 09: Contact Details */}
          <section
            id="contact-details"
            className="scroll-mt-28 bg-gradient-to-br from-navy/90 via-slate-900/90 to-navy/90 text-white p-8 md:p-12 rounded-4xl border border-cyan/30 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan/20 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-widest">
                  Section 09 • Contact Details
                </div>
                <h2 className="text-2xl md:text-4xl font-poppins font-bold text-white">
                  Privacy Inquiries & Data Requests
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-2xl">
                  If you have questions about this Privacy Policy, wish to withdraw marketing consent, or want to submit a data access, correction, or deletion request, please contact <strong className="text-white">VIMS Enterprise</strong> via our official privacy contact email below.
                </p>
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
                      <p className="text-xs font-mono text-slate-400">Official Privacy & Data Requests Contact</p>
                      <a
                        href="mailto:vimal@vimsenterprise.com"
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
                    href="mailto:vimal@vimsenterprise.com?subject=Data%20Deletion%20or%20Privacy%20Request"
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

export default PrivacyPolicyPage;
