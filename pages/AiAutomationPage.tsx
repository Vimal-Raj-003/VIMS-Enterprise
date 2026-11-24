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
    description: 'Dispatch personalized WhatsApp & email sequences seconds after an enquiry.',
    nodes: ['Inbound Lead', 'Context Enrichment', '<60s WhatsApp Touch', 'Sales Escalation'],
    details: [
      'Sub-minute automated greeting & intake questions.',
      'Smart pause rules when a live prospect replies.',
      'Instant handoff alert to human account closers.',
    ],
  },
  {
    icon: <BrainCircuit size={18} />,
    title: 'Multi-Agent Operations',
    tag: 'Agentic Pipelines',
    description: 'Deploy grounded tool-calling agents for documents, inbox triage & internal knowledge.',
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
    description: 'Collect client pulse checks—guiding 4–5 star ratings to Google and issues to support.',
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
    description: 'Streamline content formatting, approvals & analytics across LinkedIn and web channels.',
    nodes: ['Core Asset Brief', 'Channel Formatting', 'Leader Approval', 'Scheduled Publish'],
    details: [
      'Turns founder briefings into platform-ready updates.',
      'Centralized sign-off queue before publication.',
      'Unified performance tracking across campaigns.',
    ],
  },
];

const AiAutomationPage: React.FC<AiAutomationPageProps> = ({ onOpenBooking }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeFlow = WORKFLOWS[selectedIdx];

  return (
    <div>
      <HeroSection
        badge="Autonomous Agents & n8n Pipelines"
        headline={
          <>
            Eliminate Manual Handoffs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#D4AF37]">
              Across Operations.
            </span>
          </>
        }
        subtext="Production multi-agent workflows connecting your ads, websites, WhatsApp Business, and CRM with sub-60s autonomous speed."
        imageUrl="/images/niches/ai-automations.webp"
        altText="Modular Autonomous Agent Pipeline Cube Matrix"
        primaryCta={{
          text: 'Book an Automation Audit',
          onClick: () => onOpenBooking('AI Automation & Agent Audit'),
        }}
        secondaryCta={{
          text: 'Inspect Live Pipelines',
          onClick: () => document.getElementById('workflows')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Interactive Workflow Blueprint */}
      <section id="workflows" className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#10B981] font-semibold">
              Interactive Pipeline Architecture
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white">
              Select a Workflow Blueprint
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORKFLOWS.map((flow, i) => (
              <button
                key={flow.title}
                type="button"
                onClick={() => setSelectedIdx(i)}
                className={`text-left p-6 rounded-2xl border transition-all ${
                  selectedIdx === i
                    ? 'bg-[#E8451E] text-white border-[#E8451E] shadow-xl shadow-[#E8451E]/25'
                    : 'executive-card text-zinc-900 dark:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      selectedIdx === i ? 'bg-white/15 text-white' : 'bg-[#10B981]/10 text-[#10B981]'
                    }`}
                  >
                    {flow.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-85">{flow.tag}</span>
                </div>
                <h3 className="text-base font-display font-bold">{flow.title}</h3>
                <p
                  className={`text-xs mt-2 leading-relaxed ${
                    selectedIdx === i ? 'text-white/90' : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {flow.description}
                </p>
              </button>
            ))}
          </div>

          {/* Selected Node Trace */}
          <div className="rounded-3xl bg-[#111114] border border-white/15 p-7 sm:p-10 text-white shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#10B981]">
                  Selected Pipeline Topology
                </span>
                <h3 className="text-2xl font-display font-bold mt-1">{activeFlow.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking(`Automation Pipeline: ${activeFlow.title}`)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-xs font-semibold transition-all"
              >
                <span>Deploy This Workflow</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {activeFlow.nodes.map((node, idx) => (
                <div
                  key={node}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-[#E8CA6A]">NODE 0{idx + 1}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-1.5">{node}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {activeFlow.details.map((detail) => (
                <div key={detail} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                  <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-100/80 dark:bg-[#111114]/70 border-t border-zinc-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: <Cpu size={19} />, title: 'Production Agent Runtimes', desc: 'Engineered in n8n, TypeScript & Python with retry resilience.' },
            { icon: <Database size={19} />, title: 'Authenticated API & CRM Links', desc: 'Reliable bi-directional sync across WhatsApp, CRMs & databases.' },
            { icon: <FileText size={19} />, title: 'Documentation & Handover', desc: 'Complete architecture diagrams, runbooks & error monitoring.' },
          ].map((item) => (
            <div key={item.title} className="executive-card p-6 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#E8451E]/10 text-[#E8451E] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AiAutomationPage;
