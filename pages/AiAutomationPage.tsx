import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  Workflow,
  LogIn,
  MessageCircle,
  Calendar,
  Megaphone,
  Globe,
  Star,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  FileText,
  ArrowRight,
} from 'lucide-react';

interface AiAutomationPageProps {
  onOpenBooking: (topic?: string) => void;
}

const WORKFLOWS = [
  {
    icon: <LogIn size={20} />,
    title: 'Multi-Source Lead Consolidation',
    tag: 'CRM & Ads Sync',
    description: 'Unify enquiries from website forms, Meta/LinkedIn Lead Ads, WhatsApp, and landing pages into one deduplicated CRM pipeline.',
    nodes: ['Meta / LinkedIn / Web Form', 'AI Deduplication & Tagging', 'Zoho / HubSpot / Sheets Sync', 'Owner Assigned Instantly'],
    details: [
      'Connects directly to Website forms, Meta Lead Ads, LinkedIn Ads, and WhatsApp Business API.',
      'Integrates natively with Zoho CRM, HubSpot, Pipedrive, Airtable, PostgreSQL, and Google Workspace.',
      'Automatic source attribution, lead scoring, and territory/rep routing in real time.',
    ],
  },
  {
    icon: <MessageCircle size={20} />,
    title: 'Sub-60s Autonomous Lead Follow-Up',
    tag: 'Omnichannel Speed',
    description: 'Trigger personalized WhatsApp, email, and voice touchpoints within seconds of an enquiry—ensuring zero leads go cold.',
    nodes: ['Inbound Enquiry', 'Context Enrichment', '<60s WhatsApp + Email', 'High-Intent Sales Alert'],
    details: [
      'Dispatches tailored responses within 60 seconds of enquiry submission.',
      'Configurable multi-day nurture sequences that pause automatically the moment a prospect replies.',
      'Escalates hot leads directly to your closer with full conversation context.',
    ],
  },
  {
    icon: <BrainCircuit size={20} />,
    title: 'Autonomous Multi-Agent Deployments',
    tag: 'Agentic Workforces',
    description: 'Deploy specialized LLM agents for document extraction, inbox triage, RFP/proposal drafting, and internal knowledge Q&A.',
    nodes: ['Document / Email Trigger', 'Grounded LLM Agent', 'Validation Guardrail', 'ERP / Slack / CRM Action'],
    details: [
      'Custom tool-calling agents grounded strictly in your internal SOPs, PDFs, and databases.',
      'Human-in-the-loop approval gates for sensitive financial or client-facing actions.',
      'Full execution observability, audit logs, and deterministic fallback handling.',
    ],
  },
  {
    icon: <Calendar size={20} />,
    title: 'Appointment & Demo Lifecycle',
    tag: 'Zero No-Shows',
    description: 'Automate meeting scheduling, WhatsApp/SMS reminders, pre-call briefing docs, and post-call follow-up summaries.',
    nodes: ['Cal.com / Google Meet', '24h & 1h WhatsApp Reminder', 'Pre-Call Executive Brief', 'Post-Call CRM Action'],
    details: [
      'Bi-directional sync across Cal.com, Google Calendar, Microsoft Outlook, and CRM deals.',
      'Automated 24-hour and 1-hour WhatsApp + Email reminders with one-tap reschedule links.',
      'Instant post-meeting action-item dispatch and pipeline stage progression.',
    ],
  },
  {
    icon: <Star size={20} />,
    title: 'Customer Feedback & Reputation Routing',
    tag: 'CX Intelligence',
    description: 'Collect post-service feedback automatically—guiding delighted clients to public reviews and routing concerns to priority support.',
    nodes: ['Service Completed', 'Automated Pulse Check', '4–5★ Public Review Link', '1–3★ Priority Support Ticket'],
    details: [
      'Triggers automatically upon hospital discharge, order delivery, or project milestone completion.',
      'Routes satisfied customers seamlessly to Google Business Profile.',
      'Opens an immediate internal escalation ticket for any low score before issues go public.',
    ],
  },
  {
    icon: <Megaphone size={20} />,
    title: 'Content & Multi-Platform Publishing',
    tag: 'Brand Engine',
    description: 'Streamline content adaptation, scheduling, and analytics consolidation across LinkedIn, Instagram, YouTube, and web channels.',
    nodes: ['Core Brief / Video', 'Brand-Voice Adaptation', 'Approval Queue', 'Multi-Channel Publish + Analytics'],
    details: [
      'Repurpose founder insights into platform-native LinkedIn, YouTube, and social assets.',
      'Centralized approval dashboard so nothing publishes without brand sign-off.',
      'Unified campaign performance reporting across organic and paid channels.',
    ],
  },
];

const DELIVERABLES = [
  {
    icon: <Cpu size={22} />,
    title: 'Custom Architecture & Build',
    description: 'End-to-end design and deployment of production workflows in n8n, TypeScript/Python agent runtimes, and serverless webhooks.',
  },
  {
    icon: <Database size={22} />,
    title: 'Seamless Tool & API Integration',
    description: 'Clean, authenticated connections across your CRM, WhatsApp Business, ERP, calendars, and internal databases.',
  },
  {
    icon: <FileText size={22} />,
    title: 'Documentation & Team Enablement',
    description: 'Complete architecture diagrams, runbooks, error-alert monitoring, and hands-on handover for your operations team.',
  },
];

const AiAutomationPage: React.FC<AiAutomationPageProps> = ({ onOpenBooking }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeFlow = WORKFLOWS[selectedIdx];

  return (
    <div>
      <HeroSection
        badge="Autonomous Workflows & Agent Deployments"
        headline={
          <>
            Replace Repetitive Chaos With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400">
              Autonomous Precision.
            </span>
          </>
        }
        subtext="We architect and deploy production AI agents and multi-system automations that capture leads, trigger instant WhatsApp/CRM follow-ups, process documents, and keep your team focused on high-value work."
        primaryCta={{
          text: 'Book an Automation Audit',
          onClick: () => onOpenBooking('AI Automation & Agent Deployment Audit'),
        }}
        secondaryCta={{
          text: 'Explore Agent Workflows',
          onClick: () => document.getElementById('workflows')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Interactive Workflow & Node Inspector */}
      <section id="workflows" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
              Interactive Pipeline Explorer
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              Production Agent &amp; Workflow Blueprints
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {WORKFLOWS.map((flow, i) => (
              <button
                key={flow.title}
                type="button"
                onClick={() => setSelectedIdx(i)}
                className={`text-left p-6 rounded-2xl border transition-all ${
                  selectedIdx === i
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-xl shadow-indigo-600/20'
                    : 'executive-card text-slate-900 dark:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      selectedIdx === i
                        ? 'bg-white/15 text-white'
                        : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                    }`}
                  >
                    {flow.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-80">{flow.tag}</span>
                </div>
                <h3 className="text-base font-poppins font-bold">{flow.title}</h3>
                <p
                  className={`text-xs mt-2 leading-relaxed ${
                    selectedIdx === i ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {flow.description}
                </p>
              </button>
            ))}
          </div>

          {/* Live Node Execution Blueprint */}
          <div className="rounded-3xl bg-slate-900 dark:bg-[#0B101D] border border-slate-800 dark:border-white/10 p-7 sm:p-10 text-white shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                  Selected Pipeline Architecture
                </span>
                <h3 className="text-2xl font-poppins font-bold mt-1">{activeFlow.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking(`Automation Blueprint: ${activeFlow.title}`)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold transition-all"
              >
                <span>Deploy This Workflow</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Visual Node Chain */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
              {activeFlow.nodes.map((node, idx) => (
                <div
                  key={node}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-indigo-300">NODE 0{idx + 1}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-1.5">{node}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {activeFlow.details.map((detail) => (
                <div key={detail} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#080C17] border-t border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold text-slate-900 dark:text-white text-center mb-12">
            What Every VIMS Automation Engagement Delivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DELIVERABLES.map((item) => (
              <div key={item.title} className="executive-card p-7 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-poppins font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAutomationPage;
