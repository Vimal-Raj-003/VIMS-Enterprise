import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  LogIn,
  MessageCircle,
  Calendar,
  Megaphone,
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
    icon: <LogIn size={18} />,
    title: 'Multi-Source Lead Consolidation',
    tag: 'CRM & Ads Sync',
    description: 'Unify Meta Ads, LinkedIn, website forms & WhatsApp into one clean deduplicated CRM.',
    nodes: ['Meta / LinkedIn / Web', 'AI Deduplication', 'Zoho / HubSpot Sync', 'Closer Assigned'],
    details: [
      'Direct Meta Lead Ads, LinkedIn & WhatsApp Business API capture.',
      'Native Zoho CRM, HubSpot, Pipedrive & PostgreSQL webhooks.',
      'Automatic lead scoring and source attribution.',
    ],
  },
  {
    icon: <MessageCircle size={18} />,
    title: 'Sub-60s Autonomous Outreach',
    tag: 'Instant Follow-Up',
    description: 'Dispatch tailored WhatsApp & email follow-ups seconds after an enquiry arrives.',
    nodes: ['Inbound Lead', 'Context Enrichment', '<60s WhatsApp Touch', 'Sales Escalation'],
    details: [
      'Sub-minute automated greeting & intake questions.',
      'Smart pause rules the moment a live prospect replies.',
      'Instant handoff alert to human account closers.',
    ],
  },
  {
    icon: <BrainCircuit size={18} />,
    title: 'Multi-Agent Operations',
    tag: 'Agentic Pipelines',
    description: 'Grounded tool-calling agents for documents, inbox triage & internal knowledge.',
    nodes: ['Doc / Inbox Event', 'Grounded LLM Agent', 'Policy Validation', 'ERP / Slack Sync'],
    details: [
      'Grounded strictly in your SOPs, PDFs & databases.',
      'Human-in-the-loop approval gates for critical steps.',
      'Full run logs and deterministic error recovery.',
    ],
  },
  {
    icon: <Calendar size={18} />,
    title: 'Demo & Booking Lifecycle',
    tag: 'Zero No-Shows',
    description: 'Automate Cal.com scheduling, WhatsApp reminders & post-call CRM logging.',
    nodes: ['Cal.com Booked', '24h & 1h Reminder', 'Pre-Call Context Doc', 'Stage Updated'],
    details: [
      'Two-way sync across Cal.com, Google Calendar & Outlook.',
      'Automated WhatsApp reminders with one-tap reschedule.',
      'Post-meeting summaries pushed straight to deal cards.',
    ],
  },
  {
    icon: <Star size={18} />,
    title: 'Feedback & Review Routing',
    tag: 'CX Intelligence',
    description: 'Collect pulse checks—guiding satisfied clients to Google and issues to priority support.',
    nodes: ['Delivery Complete', 'Pulse Check Sent', '5-Star Review Link', 'Priority Escalation'],
    details: [
      'Triggers automatically after project or visit sign-off.',
      'Boosts verified Google Business ratings naturally.',
      'Catches low-score concerns internally first.',
    ],
  },
  {
    icon: <Megaphone size={18} />,
    title: 'Content & Social Pipelines',
    tag: 'Brand Engine',
    description: 'Streamline formatting, leader approvals & analytics across LinkedIn and web channels.',
    nodes: ['Core Asset Brief', 'Channel Formatting', 'Leader Approval', 'Scheduled Publish'],
    details: [
      'Turns founder insights into platform-ready updates.',
      'Centralized sign-off queue before publication.',
      'Unified performance tracking across campaigns.',
    ],
  },
];

const AiAutomationPage: React.FC<AiAutomationPageProps> = ({ onOpenBooking }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeFlow = WORKFLOWS[selectedIdx];

  return (
    <div className="bg-white dark:bg-[#0B0F19]">
      <HeroSection
        badge="Autonomous Agents & n8n Pipelines"
        headline={
          <>
            Remove Manual Handoffs{' '}
            <span className="text-[#1D4ED8] dark:text-blue-400">Across Your Operations.</span>
          </>
        }
        subtext="Practical multi-agent workflows connecting your ads, website, WhatsApp Business, and CRM so teams spend time serving real customers."
        imageUrl="/images/human/ai-automation-human.webp"
        altText="Operations director reviewing streamlined team workflows in sunlit office"
        primaryCta={{
          text: 'Book an Automation Audit',
          onClick: () => onOpenBooking('AI Automation & Agent Audit'),
        }}
        secondaryCta={{
          text: 'Inspect Live Pipelines',
          onClick: () => document.getElementById('workflows')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Open Pipeline Explorer */}
      <section id="workflows" className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-blue-400 font-semibold">
              Interactive Pipeline Explorer
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Select a Workflow Blueprint
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKFLOWS.map((flow, i) => {
              const active = selectedIdx === i;
              return (
                <button
                  key={flow.title}
                  type="button"
                  onClick={() => setSelectedIdx(i)}
                  className={`text-left p-5 rounded-xl transition-all ${
                    active
                      ? 'bg-[#1D4ED8] text-white shadow-sm'
                      : 'bg-[#F8F7F4] dark:bg-slate-800/70 text-slate-900 dark:text-white hover:bg-slate-200/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={active ? 'text-white' : 'text-[#1D4ED8] dark:text-blue-400'}>{flow.icon}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider opacity-80">{flow.tag}</span>
                  </div>
                  <h3 className="text-base font-display font-bold">{flow.title}</h3>
                  <p className={`text-xs mt-1.5 leading-relaxed ${active ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                    {flow.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Open 4-Step Pipeline Trace */}
          <div className="rounded-2xl bg-[#F8F7F4] dark:bg-[#0F1420] p-7 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0F766E] dark:text-teal-400 font-semibold">
                  Selected Workflow Topology
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  {activeFlow.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking(`Automation Pipeline: ${activeFlow.title}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-semibold transition-all"
              >
                <span>Deploy This Workflow</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {activeFlow.nodes.map((node, idx) => (
                <div key={node} className="bg-white dark:bg-slate-900 p-4 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-[#1D4ED8] dark:text-blue-400 font-bold">
                    STEP 0{idx + 1}
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{node}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {activeFlow.details.map((detail) => (
                <div key={detail} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-[#0F766E] dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 editorial-section-alt">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <Cpu size={19} />, title: 'Production Agent Runtimes', desc: 'Engineered in n8n, TypeScript & Python with retry resilience.' },
            { icon: <Database size={19} />, title: 'Authenticated API & CRM Links', desc: 'Reliable bi-directional sync across WhatsApp, CRMs & databases.' },
            { icon: <FileText size={19} />, title: 'Documentation & Handover', desc: 'Complete architecture diagrams, runbooks & error monitoring.' },
          ].map((item) => (
            <div key={item.title} className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-5">
              <div className="text-[#1D4ED8] dark:text-blue-400">{item.icon}</div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AiAutomationPage;
