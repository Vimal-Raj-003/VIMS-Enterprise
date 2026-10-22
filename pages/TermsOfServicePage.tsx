import React from 'react';
import {
  FileText,
  Briefcase,
  Globe,
  Shield,
  UserCheck,
  Cpu,
  Layers,
  Scale,
  RefreshCw,
  Mail,
  Phone,
  CheckCircle2,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Page } from '../types';

interface TermsOfServicePageProps {
  onNavigate?: (page: Page) => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  const { ref: contentRef, isVisible: isContentVisible } = useScrollAnimation<HTMLDivElement>();

  const termsSections = [
    {
      id: 'introduction-acceptance',
      number: '01',
      title: 'Introduction & Acceptance of Terms',
      icon: <FileText className="w-6 h-6 text-cyan" />,
      badge: 'Scope & Agreement',
      summary: 'How accessing the VIMS Enterprise website or engaging with our services constitutes agreement to these Terms of Service.',
      points: [
        {
          heading: 'Overview',
          text: 'These Terms of Service ("Terms") govern your access to and use of the VIMS Enterprise website, digital channels, and related service enquiries operated by VIMS Enterprise ("VIMS", "we", "us", or "our").'
        },
        {
          heading: 'Acceptance by Use',
          text: 'By accessing this website, submitting an enquiry, communicating with our business channels, or using our public digital resources, you acknowledge that you have read, understood, and agree to follow these Terms.'
        },
        {
          heading: 'Project-Specific Agreements',
          text: 'Where you engage VIMS Enterprise for customized software, consulting, AI automation, engineering costing, or marketing services, the specific scope of work, deliverables, and commercial terms will be governed by the written proposal, statement of work, or service agreement executed between you and VIMS Enterprise.'
        }
      ]
    },
    {
      id: 'services-description',
      number: '02',
      title: 'Description of VIMS Enterprise Services',
      icon: <Briefcase className="w-6 h-6 text-violet" />,
      badge: 'Enterprise Offerings',
      summary: 'Overview of the software platforms, engineering intelligence, and AI growth solutions provided by VIMS Enterprise.',
      points: [
        {
          heading: 'Healthcare & Enterprise Software',
          text: 'VIMS Enterprise develops and provides Hospital Management System (HMS) software solutions and connected administrative, clinical, and operational workflow tools tailored for healthcare organizations.'
        },
        {
          heading: 'AI Automation & Voice Agents',
          text: 'We design and deploy business workflow automation, CRM integrations, WhatsApp Business Platform messaging workflows, and AI voice agents (including JillJill AI Voice Agent) for customer engagement, lead qualification, and appointment coordination.'
        },
        {
          heading: 'Engineering Costing & Digital Growth',
          text: 'We also provide mechanical should-costing and manufacturing cost estimation services, smart digital identity solutions (VIMS Cards), LinkedIn personal branding, and digital marketing services.'
        }
      ]
    },
    {
      id: 'website-usage',
      number: '03',
      title: 'Website Usage Conditions',
      icon: <Globe className="w-6 h-6 text-cyan" />,
      badge: 'Acceptable Use',
      summary: 'Permitted use of our website and prohibitions against misuse or unauthorized interference.',
      points: [
        {
          heading: 'Lawful & Authorized Use',
          text: 'You agree to use this website solely for lawful business and informational purposes, such as learning about VIMS Enterprise solutions, submitting genuine business enquiries, or scheduling consultations.'
        },
        {
          heading: 'Prohibited Activities',
          text: 'You must not attempt to gain unauthorized access to any portion of the website, interfere with server or network operations, introduce malicious code, scrape content at scale, or use our contact and messaging channels to transmit spam or unlawful material.'
        },
        {
          heading: 'Availability & Modifications',
          text: 'We strive to keep our website accurate and accessible, but we may update, suspend, or modify website content, calculators, interactive previews, or features at any time without prior notice.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      number: '04',
      title: 'Intellectual Property',
      icon: <Shield className="w-6 h-6 text-violet" />,
      badge: 'Ownership Rights',
      summary: 'Protection of VIMS Enterprise branding, software architecture, content, and client-provided materials.',
      points: [
        {
          heading: 'VIMS Enterprise Property',
          text: 'All content on this website—including text, visual design, graphics, logos, software demonstrations, documentation, and underlying code—is owned by or licensed to VIMS Enterprise and is protected by applicable intellectual property laws.'
        },
        {
          heading: 'Limited Viewing License',
          text: 'You may view and download publicly available pages for your internal business evaluation of VIMS Enterprise services. You may not copy, republish, redistribute, reverse-engineer, or commercially exploit our website materials without prior written consent.'
        },
        {
          heading: 'Client Materials',
          text: 'Any proprietary business information, engineering drawings, or project specifications you submit to VIMS Enterprise for an enquiry or engagement remain your property and are used only for evaluating or delivering the requested services.'
        }
      ]
    },
    {
      id: 'customer-responsibilities',
      number: '05',
      title: 'Customer Responsibilities',
      icon: <UserCheck className="w-6 h-6 text-cyan" />,
      badge: 'Client Obligations',
      summary: 'Your responsibilities when providing data, configuring workflows, or using our communication and automation tools.',
      points: [
        {
          heading: 'Accuracy of Information',
          text: 'You are responsible for ensuring that all contact details, technical specifications, and business information you provide to VIMS Enterprise are accurate, current, and authorized for sharing.'
        },
        {
          heading: 'Compliance in Communications & Data',
          text: 'When utilizing VIMS Enterprise software, CRM workflows, WhatsApp integrations, or AI voice agents in your business operations, you are responsible for obtaining any necessary consents from your end-customers and complying with applicable data protection, telecommunications, and platform rules.'
        },
        {
          heading: 'Account & Credential Security',
          text: 'Where you are provided access to client portals, dashboards, or configured integrations, you are responsible for maintaining the confidentiality of your access credentials and notifying us promptly of any suspected unauthorized use.'
        }
      ]
    },
    {
      id: 'ai-automation-limitations',
      number: '06',
      title: 'AI Automation Service Limitations',
      icon: <Cpu className="w-6 h-6 text-violet" />,
      badge: 'AI & Automation',
      summary: 'Important operational considerations regarding AI-generated outputs, voice agents, and automated workflows.',
      points: [
        {
          heading: 'Probabilistic Nature of AI Outputs',
          text: 'AI voice agents, conversational assistants, and automated workflows rely on machine learning models that generate responses probabilistically. While designed for accuracy and business alignment, AI outputs may occasionally be incomplete, inaccurate, or require human review.'
        },
        {
          heading: 'Human Oversight & Critical Decisions',
          text: 'AI automation and software tools provided by VIMS Enterprise are intended to assist operational efficiency and are not a substitute for qualified human judgment—particularly in clinical healthcare decisions, legal compliance, financial commitments, or final manufacturing engineering sign-off.'
        },
        {
          heading: 'Dependency on Underlying Inputs',
          text: 'The performance of automated workflows, cost estimations, and AI voice interactions depends on the quality of configured prompts, client-supplied data, telephony connectivity, and third-party platform availability.'
        }
      ]
    },
    {
      id: 'third-party-services',
      number: '07',
      title: 'Third-Party Services & Platforms',
      icon: <Layers className="w-6 h-6 text-cyan" />,
      badge: 'External Integrations',
      summary: 'How external platforms, scheduling tools, and messaging networks interact with our website and services.',
      points: [
        {
          heading: 'External Links & Embedded Tools',
          text: 'Our website and solutions may integrate with or link to third-party platforms—such as WhatsApp Business Platform (Meta), calendar scheduling services (such as Cal.com), cloud hosting providers, telephony carriers, and AI model providers.'
        },
        {
          heading: 'Independent Platform Terms',
          text: 'Your use of third-party applications or platforms is subject to the respective terms, acceptable use policies, and privacy practices of those third-party providers.'
        },
        {
          heading: 'Platform Availability',
          text: 'VIMS Enterprise does not control and is not responsible for unplanned outages, API policy changes, or service interruptions originating from independent third-party platforms or telecommunications networks.'
        }
      ]
    },
    {
      id: 'liability-limitations',
      number: '08',
      title: 'Liability Limitations',
      icon: <Scale className="w-6 h-6 text-rose-400" />,
      badge: 'Legal Boundaries',
      summary: 'Allocation of risk and limitations of liability to the extent permitted by applicable law.',
      points: [
        {
          heading: 'Website Provided "As Is"',
          text: 'This website and its general informational content, interactive previews, and sample calculators are provided on an "as is" and "as available" basis for informational purposes without implied warranties of uninterrupted availability or fitness for a particular purpose.'
        },
        {
          heading: 'Exclusion of Indirect Damages',
          text: 'To the maximum extent permitted by applicable law, VIMS Enterprise shall not be liable for any indirect, incidental, consequential, or special damages, or for loss of profits, revenue, data, or business opportunities arising from your use of, or inability to use, this website.'
        },
        {
          heading: 'Non-Excludable Rights',
          text: 'Nothing in these Terms excludes or limits any liability that cannot be excluded or limited under applicable law, or alters specific remedies expressly agreed in a signed written contract between you and VIMS Enterprise.'
        }
      ]
    },
    {
      id: 'changes-to-terms',
      number: '09',
      title: 'Changes to Terms',
      icon: <RefreshCw className="w-6 h-6 text-cyan" />,
      badge: 'Updates',
      summary: 'How VIMS Enterprise updates these Terms of Service as our products and operations evolve.',
      points: [
        {
          heading: 'Periodic Revisions',
          text: 'We may revise these Terms of Service from time to time to reflect new service capabilities, operational adjustments, or changes in applicable legal and platform requirements.'
        },
        {
          heading: 'Publication on Website',
          text: 'Updated Terms will be posted on this page at /terms-of-service. We encourage you to review this page periodically when visiting our website or engaging our services.'
        },
        {
          heading: 'Continued Use',
          text: 'Your continued use of the VIMS Enterprise website following the posting of revised Terms constitutes your acceptance of the updated Terms.'
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
            Terms of <span className="text-cyan">Service</span>
          </>
        }
        subtext="Clear, professional terms governing the use of the VIMS Enterprise website, enterprise software ecosystems, AI automation workflows, and engineering services."
        primaryCta={{
          text: 'Contact VIMS Enterprise',
          onClick: () => {
            window.location.href = 'mailto:vimal@vimsenterprise.com?subject=Terms%20of%20Service%20Inquiry';
          }
        }}
        imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
        altText="VIMS Enterprise Terms of Service"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Metadata & Back Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/30 shadow-xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/15 border border-cyan/30 text-cyan text-xs font-mono font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              VIMS Enterprise
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Path: <code className="text-cyan">/terms-of-service</code>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Contact: <a href="mailto:vimal@vimsenterprise.com" className="text-cyan hover:underline">vimal@vimsenterprise.com</a>
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
            Terms of Service Sections
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {termsSections.map((section) => (
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
              href="#contact-information"
              className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-cyan/10 border border-cyan/30 hover:bg-cyan/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xs font-mono font-bold text-cyan">10</span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                  Contact Information
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-cyan group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Intro Overview Card */}
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-4xl border border-slate-200/50 dark:border-slate-800/30 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-slate-900 dark:text-light-text mb-4">
            Overview
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            Welcome to <strong className="text-slate-900 dark:text-white font-semibold">VIMS Enterprise</strong>. These Terms of Service outline the conditions for using our website, interacting with our communication and AI automation channels, and engaging our software and engineering services. For information on how we handle personal data, please also review our{' '}
            {onNavigate ? (
              <a
                href="/privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(Page.PrivacyPolicy);
                }}
                className="text-cyan hover:underline font-medium"
              >
                Privacy Policy
              </a>
            ) : (
              <a href="/privacy-policy" className="text-cyan hover:underline font-medium">
                Privacy Policy
              </a>
            )}{' '}
            and{' '}
            {onNavigate ? (
              <a
                href="/data-deletion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(Page.DataDeletion);
                }}
                className="text-cyan hover:underline font-medium"
              >
                Data Deletion Instructions
              </a>
            ) : (
              <a href="/data-deletion" className="text-cyan hover:underline font-medium">
                Data Deletion Instructions
              </a>
            )}
            .
          </p>
        </div>

        {/* Main Terms Sections */}
        <div
          ref={contentRef}
          className={`space-y-8 transition-all duration-1000 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {termsSections.map((section) => (
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

          {/* Section 10: Contact Information */}
          <section
            id="contact-information"
            className="scroll-mt-28 bg-gradient-to-br from-navy/90 via-slate-900/90 to-navy/90 text-white p-8 md:p-12 rounded-4xl border border-cyan/30 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan/20 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-widest">
                  Section 10 • Contact Information
                </div>
                <h2 className="text-2xl md:text-4xl font-poppins font-bold text-white">
                  Questions About These Terms
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-2xl">
                  If you have any questions regarding these Terms of Service, our enterprise software solutions, or service agreements, please contact <strong className="text-white">VIMS Enterprise</strong> directly using the contact details below.
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
                      <p className="text-xs font-mono text-slate-400">Official Contact Email</p>
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
                    href="mailto:vimal@vimsenterprise.com?subject=Terms%20of%20Service%20Inquiry"
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

export default TermsOfServicePage;
