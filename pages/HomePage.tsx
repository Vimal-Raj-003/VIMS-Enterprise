import React, { useState } from 'react';
import { Page } from '../types';
import { COMPANY_CONTACT, CORE_PILLARS } from '../constants';
import ClientsSection from '../components/ClientsSection';
import { motion, AnimatePresence } from 'motion/react';
import {
  PhoneCall,
  Globe,
  Cpu,
  Activity,
  GraduationCap,
  Calendar,
  ArrowRight,
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Layers,
  Workflow,
  Users,
  Volume2,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (topic?: string) => void;
  onViewLeader?: (memberId: string) => void;
}

const PREVIEW_TABS = [
  {
    id: 'voice',
    page: Page.VoiceAgents,
    label: 'AI Voice Agent',
    icon: <PhoneCall size={15} />,
    tag: 'Multilingual · 24/7 Inbound & Outbound',
    headline: 'Every Customer Call Gets a Clear Next Step',
    summary:
      'Greets callers naturally in Tamil, English, Hindi & regional languages, answers approved FAQs, checks calendar availability, books appointments, and logs structured CRM summaries.',
    steps: [
      { step: 'Caller Connected', status: 'Tamil / English Auto-Detected', tone: 'text-emerald-400' },
      { step: 'Intent & Qualification', status: 'Consultation Enquiry Verified', tone: 'text-sky-400' },
      { step: 'Live Calendar Check', status: 'Slot Confirmed on Google Meet', tone: 'text-indigo-400' },
      { step: 'CRM & Team Alert', status: 'Summary Pushed + WhatsApp Sent', tone: 'text-amber-400' },
    ],
    ctaLabel: 'Explore AI Voice Agents',
  },
  {
    id: 'web',
    page: Page.WebsiteCreation,
    label: 'Website & Store',
    icon: <Globe size={15} />,
    tag: 'B2B Platforms · E-Commerce Architecture',
    headline: 'Custom Websites & Stores Built Around Your Business',
    summary:
      'Move beyond scattered chat enquiries and generic templates. We engineer high-speed B2B platforms and full checkout stores with mobile-first UX, payment gateways, and analytics.',
    steps: [
      { step: 'Discovery & UX Blueprint', status: 'Brand Story & Funnel Mapped', tone: 'text-indigo-400' },
      { step: 'Custom UI & Catalog', status: 'Search, Variants & Responsive Grid', tone: 'text-sky-400' },
      { step: 'Checkout & Integrations', status: 'Payment Gateway & Order Emails', tone: 'text-emerald-400' },
      { step: 'QA & Admin Handover', status: 'Tested + Team Walkthrough Complete', tone: 'text-amber-400' },
    ],
    ctaLabel: 'Explore Website Creation',
  },
  {
    id: 'automation',
    page: Page.AIAutomation,
    label: 'Agent Automations',
    icon: <Cpu size={15} />,
    tag: 'Autonomous Pipelines · CRM & WhatsApp',
    headline: 'Eliminate Manual Bottlenecks Across Your Operations',
    summary:
      'Production multi-agent workflows connecting Meta/LinkedIn leads, websites, WhatsApp Business, Zoho/HubSpot CRMs, review routing, and executive reporting with zero copy-pasting.',
    steps: [
      { step: 'Multi-Source Lead Intake', status: 'Ads + Web + WhatsApp Deduplicated', tone: 'text-sky-400' },
      { step: 'Sub-60s Autonomous Outreach', status: 'Personalized WhatsApp & Email Triggered', tone: 'text-emerald-400' },
      { step: 'AI Scoring & Escalation', status: 'High-Intent Lead Routed to Closer', tone: 'text-indigo-400' },
      { step: 'Post-Meeting Pipeline', status: 'CRM Updated + Follow-Up Scheduled', tone: 'text-amber-400' },
    ],
    ctaLabel: 'Explore AI Automations',
  },
  {
    id: 'hms',
    page: Page.HospitalManagement,
    label: 'MediCore HMS',
    icon: <Activity size={15} />,
    tag: '40+ OP/IP Modules · ABDM & DPDPA Ready',
    headline: 'Unified Hospital Operating System & Clinical AI',
    summary:
      'Multi-tenant cloud-native HMS uniting Front Office, OPD/CPOE, Ambient AI Voice Scribe, ICU/NICU Telemetry, Pharmacy FEFO, Lab LIS/PACS, Cashless TPA, and iOS/Android apps.',
    steps: [
      { step: 'ABHA & Smart OPD Triage', status: 'Live Mobile Queue Token Issued', tone: 'text-sky-400' },
      { step: 'Ambient AI Clinical Scribe', status: 'SOAP Note + ICD-10 + Rx Validated', tone: 'text-emerald-400' },
      { step: 'Connected Lab & Pharmacy', status: 'Barcode FEFO & LIS Auto-Synced', tone: 'text-indigo-400' },
      { step: 'Synchronized IP Discharge', status: 'Cleared in <28 Min + TPA Ready', tone: 'text-amber-400' },
    ],
    ctaLabel: 'Explore MediCore HMS',
  },
  {
    id: 'academy',
    page: Page.MatlabAcademy,
    label: 'MATLAB & FDE Academy',
    icon: <GraduationCap size={15} />,
    tag: 'Model-Based Design · Forward Deployed AI',
    headline: 'Bridging University Classrooms to Production Engineering',
    summary:
      'Intensive mentorship for students and engineers in MATLAB, Simulink, Stateflow (MIL/SIL/HIL automotive & aerospace workflows) and Forward Deployed AI Engineer (FDE) bootcamps.',
    steps: [
      { step: 'MATLAB & Matrix Computing', status: 'Algorithms, DSP & Control Design', tone: 'text-indigo-400' },
      { step: 'Simulink & Stateflow FSM', status: 'Dynamic Plant & Logic Modeling', tone: 'text-sky-400' },
      { step: 'MIL / SIL / HIL & Code Gen', status: 'Embedded Coder C/C++ Deployment', tone: 'text-emerald-400' },
      { step: 'Forward Deployed Engineer', status: 'Client-Facing AI & Agent Shipping', tone: 'text-amber-400' },
    ],
    ctaLabel: 'Explore VIMS Academy',
  },
];

const PILLAR_CARD_ICONS: Record<Page, React.ReactNode> = {
  [Page.Home]: null,
  [Page.VoiceAgents]: <PhoneCall size={22} className="text-indigo-500 dark:text-indigo-400" />,
  [Page.WebsiteCreation]: <Globe size={22} className="text-sky-500 dark:text-sky-400" />,
  [Page.AIAutomation]: <Workflow size={22} className="text-violet-500 dark:text-violet-400" />,
  [Page.HospitalManagement]: <Activity size={22} className="text-emerald-500 dark:text-emerald-400" />,
  [Page.MatlabAcademy]: <GraduationCap size={22} className="text-amber-500 dark:text-amber-400" />,
  [Page.About]: null,
  [Page.Contact]: null,
  [Page.TeamProfile]: null,
  [Page.PrivacyPolicy]: null,
  [Page.TermsOfService]: null,
  [Page.DataDeletion]: null,
};

const PILLAR_BULLETS: Record<string, string[]> = {
  [Page.VoiceAgents]: [
    'Inbound enquiry handling, FAQ resolution & human call-transfer rules',
    'Outbound campaign calling & intelligent BANT lead qualification',
    'Real-time Google/Outlook calendar booking & CRM call summaries',
  ],
  [Page.WebsiteCreation]: [
    'Custom B2B corporate websites, SaaS portals & high-converting landing architectures',
    'Complete e-commerce storefronts with variant catalogs, cart & payment gateways',
    'Mobile-first performance, technical SEO foundation & admin team handover',
  ],
  [Page.AIAutomation]: [
    'End-to-end n8n & custom LLM agent deployments across CRM, WhatsApp & Email',
    'Sub-60-second automated lead consolidation, deduplication & follow-up',
    'Automated review routing, social publishing & executive analytics pipelines',
  ],
  [Page.HospitalManagement]: [
    '21 OP + 19 IP clinical modules covering OPD, OT, ICU, Blood Bank, Dialysis & Lab',
    'AI-assisted ICD-10 coding, drug-interaction safety alerts & discharge automation',
    'Cross-platform Doctor, Patient & Nursing mobile apps + ABDM/ABHA compliance',
  ],
  [Page.MatlabAcademy]: [
    'MATLAB, Simulink & Stateflow Model-Based Design (MBD) for control & automotive systems',
    'Forward Deployed Engineer (FDE) track: architecting & deploying real client AI agents',
    'Hands-on capstone builds, embedded code generation & career mentorship',
  ],
};

const DELIVERY_STEPS = [
  {
    num: '01',
    title: 'Operational Discovery',
    desc: 'We listen to your team, map real workflow bottlenecks, and agree on measurable outcomes before writing a line of code.',
  },
  {
    num: '02',
    title: 'System Blueprint',
    desc: 'Clean architecture covering user journeys, voice/agent logic, database schemas, and third-party CRM or clinical integrations.',
  },
  {
    num: '03',
    title: 'Interactive Prototype',
    desc: 'Validate real screens, live call flows, or workflow triggers early together with your stakeholders.',
  },
  {
    num: '04',
    title: 'Production Engineering',
    desc: 'Rigorous testing across mobile layouts, edge cases, fallback logic, role permissions, and security guardrails.',
  },
  {
    num: '05',
    title: 'Go-Live & Team Handover',
    desc: 'Smooth deployment, complete admin walkthroughs, staff enablement, and responsive post-launch partnership.',
  },
];

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking, onViewLeader }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activePreview = PREVIEW_TABS[activeTabIdx];

  return (
    <div className="space-y-0">
      {/* 1. EXECUTIVE HERO SECTION */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Narrative & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/[0.12] border border-amber-500/25 text-amber-700 dark:text-amber-300 text-xs font-medium hover:bg-amber-500/20 transition-colors"
            >
              <Award size={14} className="text-amber-500 shrink-0" />
              <span>Social Eagle Award Winner · Digital Presence &amp; Talent Recognition</span>
              <ArrowRight size={12} />
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl xl:text-[3.4rem] font-poppins font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Applied AI, Bespoke Web Platforms &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-400">
                Enterprise Systems
              </span>{' '}
              Built With Human Precision.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl"
            >
              VIMS Enterprise partners with ambitious businesses, healthcare institutions, and future engineers to ship multilingual{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">AI Voice Agents</strong>, high-converting{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">Websites</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">Autonomous Agent Workflows</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">MediCore HMS</strong>, and{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">MATLAB &amp; Forward Deployed Engineer</strong> mastery.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all"
              >
                <Calendar size={16} />
                <span>Book Strategy Call</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all"
              >
                <Layers size={16} className="text-indigo-500" />
                <span>Explore 5 Core Pillars</span>
              </button>
            </motion.div>

            {/* Authentic Human Executive Proof Bar (Replaces fake avatars!) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center gap-6"
            >
              <button
                type="button"
                onClick={() => (onViewLeader ? onViewLeader('vimal') : onNavigate(Page.About))}
                className="flex items-center gap-3 text-left group"
              >
                <img
                  src="/images/brand/vimal-ceo.webp"
                  alt="Vimal Raj — Founder & CEO of VIMS Enterprise"
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40 group-hover:border-indigo-400 transition-colors"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                    Led by Vimal Raj · Founder &amp; CEO
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Direct Architecture &amp; Implementation Team
                  </div>
                </div>
              </button>

              <div className="hidden sm:block h-8 w-px bg-slate-200 dark:bg-white/10" />

              <div className="flex items-center gap-5 text-xs">
                <div>
                  <div className="font-poppins font-bold text-base text-slate-900 dark:text-white">30+</div>
                  <div className="text-slate-500 dark:text-slate-400">Clients Served</div>
                </div>
                <div>
                  <div className="font-poppins font-bold text-base text-slate-900 dark:text-white">40+</div>
                  <div className="text-slate-500 dark:text-slate-400">HMS Clinical Modules</div>
                </div>
                <div>
                  <div className="font-poppins font-bold text-base text-slate-900 dark:text-white">24/7</div>
                  <div className="text-slate-500 dark:text-slate-400">Voice &amp; Agent Ops</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Live Ecosystem Console */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl bg-white dark:bg-[#0B101D] border border-slate-200/90 dark:border-white/10 shadow-2xl overflow-hidden">
              {/* Interactive Pillar Selector Tabs */}
              <div className="p-2.5 bg-slate-100/80 dark:bg-[#070B14] border-b border-slate-200/80 dark:border-white/[0.07] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {PREVIEW_TABS.map((tab, idx) => {
                  const active = idx === activeTabIdx;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabIdx(idx)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        active
                          ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Console View */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePreview.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="p-6 sm:p-8 space-y-6"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      <Volume2 size={13} />
                      <span>{activePreview.tag}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-slate-900 dark:text-white">
                      {activePreview.headline}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {activePreview.summary}
                    </p>
                  </div>

                  {/* Live Architecture Trace */}
                  <div className="rounded-2xl bg-slate-900 dark:bg-[#070A12] border border-slate-800 dark:border-white/[0.08] p-4 sm:p-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-white/[0.07]">
                      <span>LIVE EXECUTION BLUEPRINT</span>
                      <span className="inline-flex items-center gap-1.5 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Production Verified
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {activePreview.steps.map((s, i) => (
                        <div
                          key={s.step}
                          className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs"
                        >
                          <div className="flex items-center gap-2.5 text-slate-200 font-medium">
                            <span className="w-5 h-5 rounded-md bg-white/[0.07] font-mono text-[10px] flex items-center justify-center text-slate-300">
                              0{i + 1}
                            </span>
                            <span>{s.step}</span>
                          </div>
                          <span className={`font-mono text-[11px] ${s.tone}`}>{s.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => onNavigate(activePreview.page)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <span>{activePreview.ctaLabel}</span>
                      <ArrowRight size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(activePreview.label)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.06] hover:bg-indigo-600 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all"
                    >
                      <Calendar size={13} />
                      <span>Book Demo for {activePreview.label}</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VERIFIED CLIENTS & RELATIONSHIPS */}
      <ClientsSection />

      {/* 3. THE 5-PILLAR VIMS ECOSYSTEM */}
      <section id="ecosystem" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
              Focused Enterprise Capabilities
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white tracking-tight">
              Five Specialized Niches. One Accountable Engineering Partner.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every solution is architected around your exact workflows, languages, and operational goals—with transparent feature scopes and direct engineering support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {CORE_PILLARS.map((pillar, idx) => {
              const spanClass = idx < 2 ? 'lg:col-span-3' : 'lg:col-span-2';
              const bullets = PILLAR_BULLETS[pillar.page] || [];
              return (
                <div
                  key={pillar.page}
                  className={`${spanClass} executive-card p-7 flex flex-col justify-between group`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] flex items-center justify-center">
                        {PILLAR_CARD_ICONS[pillar.page]}
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {pillar.summary}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 pt-5 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate(pillar.page)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <span>View Capabilities</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(pillar.title)}
                      className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      Discuss Scope &rarr;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. AWARDS & INDUSTRY RECOGNITION (AUTHENTIC SOCIAL EAGLE & TN DIGITAL SUMMIT PHOTOS) */}
      <section
        id="awards"
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#080C17] border-y border-slate-200/80 dark:border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-300 text-xs font-mono uppercase tracking-wider">
                <Award size={14} />
                <span>Industry Honours &amp; Recognition</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                Recognized by Social Eagle for Digital Presence &amp; Talent Excellence.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Behind every VIMS deployment is an award-winning engineering and AI team. We were honored on stage at the{' '}
                <strong className="text-slate-900 dark:text-white">TN Digital Summit by Social Eagle</strong> for outstanding Digital Presence &amp; Applied AI execution, alongside recognition for nurturing emerging engineering and AI talent.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-500 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Social Eagle Award — Digital Presence &amp; Growth
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Awarded to VIMS Enterprise at the TN Digital Summit for building high-impact digital ecosystems and business automation.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-500 shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Talent &amp; Applied AI Mentorship Recognition
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Recognized for equipping engineers and students with real-world generative AI, agent deployment, and systems skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate(Page.About)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>Meet Our Leadership &amp; View Full Story</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Authentic Photography Mosaic */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-12 relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl group">
                <img
                  src="/images/brand/social-eagle-award-stage.webp"
                  alt="VIMS Enterprise receiving the Social Eagle Award at TN Digital Summit"
                  className="w-full h-72 sm:h-96 object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-2 text-white">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
                      TN Digital Summit · Stage Honour
                    </span>
                    <h3 className="text-base sm:text-lg font-bold">
                      Vimal Raj &amp; VIMS Enterprise Team Receiving the Social Eagle Trophy
                    </h3>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg group">
                <img
                  src="/images/brand/tn-summit-ai-automation.jpg"
                  alt="VIMS AI Automation Team at TN Digital Summit"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold">
                  VIMS AI Automation Engineering Delegation · TN Digital Summit
                </div>
              </div>

              <div className="sm:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg group">
                <img
                  src="/images/brand/social-eagle-certificate.webp"
                  alt="Social Eagle Talent & AI Program Recognition"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold">
                  Applied AI &amp; Talent Excellence Recognition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HUMAN CONNECT: FOUNDER & CEO EXECUTIVE NOTE */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-white dark:bg-[#0B101D] border border-slate-200/90 dark:border-white/10 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              <div className="relative w-56 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-xl">
                <img
                  src="/images/brand/vimal-ceo.webp"
                  alt="Vimal Raj — Founder & Chief Executive Officer, VIMS Enterprise"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center lg:text-left">
                <h3 className="text-xl font-poppins font-bold text-slate-900 dark:text-white">Vimal Raj</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mt-0.5">
                  Founder &amp; Chief Executive Officer
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Sparkles size={14} className="text-indigo-500" />
                <span>Human-First Engineering Philosophy</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-poppins font-semibold text-slate-900 dark:text-white leading-snug">
                &ldquo;Technology only creates value when your team and your customers actually love using it. Whether we are deploying a multilingual voice agent, a 40-module hospital platform, or training a student in MATLAB and Forward Deployed AI, a real engineer stands accountable behind every outcome.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                At VIMS Enterprise, you never get handed off to generic templates or black-box software. We sit down with you to map your exact call flows, clinical workflows, conversion pages, and system integrations—testing together before going live.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Founder Strategy Call with Vimal Raj')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-md shadow-indigo-600/20"
                >
                  <Calendar size={15} />
                  <span>Book a Call with Vimal Raj</span>
                </button>

                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all"
                >
                  <MessageSquare size={15} className="text-emerald-500" />
                  <span>Direct WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate(Page.About)}
                  className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Meet Full Leadership Team &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 5-STEP DELIVERY DISCIPLINE */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
              How Engagement Works
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              Structured Five-Stage Delivery
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Clear milestones, transparent testing, and complete team handover on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {DELIVERY_STEPS.map((s) => (
              <div key={s.num} className="executive-card p-6 space-y-3">
                <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                  STEP {s.num}
                </span>
                <h3 className="text-base font-poppins font-bold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
