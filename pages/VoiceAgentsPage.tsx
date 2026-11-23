import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  PhoneCall,
  Calendar,
  BrainCircuit,
  Globe2,
  UserCheck,
  Database,
  CheckCircle2,
  ArrowRight,
  PhoneForwarded,
  MessageSquare,
  ShieldCheck,
  Volume2,
} from 'lucide-react';

interface VoiceAgentsPageProps {
  onOpenBooking: (topic?: string) => void;
}

const CALL_SCENARIOS = [
  {
    id: 'healthcare',
    sector: 'Healthcare & Clinics',
    title: 'Multilingual Patient Appointment & Triage Desk',
    languages: 'Tamil · English · Hindi',
    transcript: [
      { speaker: 'Caller', line: 'Vanakkam, can I book a cardiology consultation for my father tomorrow morning?' },
      {
        speaker: 'VIMS Voice Agent',
        line: 'Vanakkam! I can help right away. Dr. Karthik has slots open tomorrow at 10:30 AM and 11:15 AM. Which time works best for your father?',
      },
      { speaker: 'Caller', line: '10:30 AM works. Please send the location on WhatsApp.' },
      {
        speaker: 'VIMS Voice Agent',
        line: 'Confirmed for 10:30 AM tomorrow. Your calendar slot is locked and a WhatsApp confirmation with clinic directions has been sent.',
      },
    ],
    actions: ['Slot Verified Before Confirmation', 'Patient Record Created in HMS/CRM', 'WhatsApp Reminder Scheduled'],
  },
  {
    id: 'b2b',
    sector: 'B2B Sales & SaaS',
    title: 'Inbound & Outbound Lead Qualification Agent',
    languages: 'English · Regional Accents',
    transcript: [
      { speaker: 'Caller', line: 'Hi, we saw your automation workflow demo and want to integrate it with our Zoho CRM.' },
      {
        speaker: 'VIMS Voice Agent',
        line: 'Glad you reached out! To connect you with the right solution architect, roughly how many daily leads does your team handle across channels?',
      },
      { speaker: 'Caller', line: 'Around 150 enquiries a day across Meta Ads and our website.' },
      {
        speaker: 'VIMS Voice Agent',
        line: 'Got it—high-volume Zoho sync is right in our wheelhouse. I have booked a 30-minute architecture call for Thursday at 4:00 PM and briefed our engineering lead.',
      },
    ],
    actions: ['BANT Qualification Scored', 'Google Meet Invited Instantly', 'Structured Call Summary Logged to Zoho'],
  },
  {
    id: 'support',
    sector: 'Commerce & Operations',
    title: 'Smart Enquiry Resolution & Human Escalation',
    languages: 'Multilingual Switch',
    transcript: [
      { speaker: 'Caller', line: 'I placed a bulk corporate order yesterday and need to update the delivery address.' },
      {
        speaker: 'VIMS Voice Agent',
        line: 'I have pulled up your order status—it has not dispatched yet. Since bulk address updates need supervisor sign-off, let me transfer you directly to our fulfilment desk with your details.',
      },
      { speaker: 'Caller', line: 'Thank you, that saves me repeating everything.' },
      {
        speaker: 'VIMS Voice Agent',
        line: 'Warm transfer initiated—handing your verified order context to the live coordinator now.',
      },
    ],
    actions: ['Approved FAQ & Order Lookup', 'Warm Transfer with Context Brief', 'Fallback Callback Guarantee if Busy'],
  },
];

const CAPABILITIES = [
  {
    icon: <Globe2 size={20} />,
    title: 'Speak Your Customer’s Language',
    description: 'Natural, low-latency voice conversations in Tamil, English, Hindi, and regional languages—tested and approved before launch.',
  },
  {
    icon: <Calendar size={20} />,
    title: 'Verified Calendar Booking',
    description: 'Checks live availability in Google Calendar, Cal.com, or Outlook and confirms bookings only after the calendar accepts the slot.',
  },
  {
    icon: <PhoneForwarded size={20} />,
    title: 'Graceful Human Handoff',
    description: 'Transfers complex or VIP callers directly to your live team when available, or records a structured callback request automatically.',
  },
  {
    icon: <Database size={20} />,
    title: 'Automatic CRM & Summary Sync',
    description: 'Every call generates clean transcripts, intent tags, action outcomes, and instant CRM/WhatsApp notifications for your staff.',
  },
  {
    icon: <BrainCircuit size={20} />,
    title: 'Outbound Follow-Up Campaigns',
    description: 'Re-engage warm enquiries, confirm upcoming appointments, and qualify inbound form leads within 60 seconds of submission.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Guardrailed Business Knowledge',
    description: 'Responds strictly from your approved FAQs, business hours, and escalation rules—eliminating off-script hallucinations.',
  },
];

const OPERATIONAL_BENCHMARKS = [
  { metric: 'Lead Response Speed', vims: 'Under 30–60 Seconds (24/7)', traditional: 'Hours or Next Business Day' },
  { metric: 'Concurrent Call Capacity', vims: 'Parallel Multi-Line Handling', traditional: '1 Call per Receptionist / SDR' },
  { metric: 'Language Coverage', vims: 'Multilingual & Consistent', traditional: 'Dependent on Staff Shift' },
  { metric: 'Calendar & CRM Logging', vims: '100% Instant Structured Sync', traditional: 'Manual Notes & Missed Updates' },
  { metric: 'After-Hours & Weekend Enquiries', vims: 'Every Caller Greeted & Booked', traditional: 'Unanswered / Voicemail Drop-off' },
];

const BUILD_STEPS = [
  { step: '01', title: 'Map the Calls', detail: 'Review your frequent caller questions, qualification criteria, and desired next actions.' },
  { step: '02', title: 'Configure Voice & Connections', detail: 'Set up natural voice personas, approved knowledge base, calendar, and CRM webhooks.' },
  { step: '03', title: 'Test Real Scenarios Together', detail: 'Run live multilingual test calls, edge cases, and human fallback transfers for your sign-off.' },
  { step: '04', title: 'Go Live & Monitor', detail: 'Launch cleanly on your business line with call transcripts, outcome logs, and ongoing tuning.' },
];

const VoiceAgentsPage: React.FC<VoiceAgentsPageProps> = ({ onOpenBooking }) => {
  const [activeScenario, setActiveScenario] = useState(0);
  const scenario = CALL_SCENARIOS[activeScenario];

  return (
    <div>
      <HeroSection
        badge="Multilingual Conversational Voice AI"
        headline={
          <>
            Give Every Customer Call a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400">
              Clear Next Step.
            </span>
          </>
        }
        subtext="Answer routine enquiries, qualify inbound & outbound leads, book verified calendar appointments, and route priority callers to your team—24/7 in your customer's language."
        primaryCta={{
          text: 'Book a Live Voice Agent Demo',
          onClick: () => onOpenBooking('AI Voice Agent Live Demo'),
        }}
        secondaryCta={{
          text: 'Inspect Live Call Flows',
          onClick: () => document.getElementById('call-simulator')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Interactive Connected Call Journey Simulator */}
      <section id="call-simulator" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
              Interactive Call-Flow Walkthrough
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              See How Your AI Voice Agent Handles Real Conversations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Scenario Selector */}
            <div className="lg:col-span-4 space-y-3">
              {CALL_SCENARIOS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveScenario(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    activeScenario === idx
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20'
                      : 'executive-card text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider opacity-80">{item.sector}</div>
                  <div className="text-base font-poppins font-bold mt-1">{item.title}</div>
                  <div className="text-xs opacity-80 mt-2 flex items-center gap-1.5">
                    <Volume2 size={13} />
                    <span>{item.languages}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Transcript & Automated Actions */}
            <div className="lg:col-span-8 rounded-3xl bg-slate-900 dark:bg-[#0B101D] border border-slate-800 dark:border-white/10 p-6 sm:p-8 text-white shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    {scenario.title}
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.06] text-indigo-300">
                  {scenario.languages}
                </span>
              </div>

              <div className="space-y-3.5">
                {scenario.transcript.map((turn, i) => {
                  const isAgent = turn.speaker !== 'Caller';
                  return (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl text-sm leading-relaxed ${
                        isAgent
                          ? 'bg-indigo-500/15 border border-indigo-400/25 ml-0 sm:mr-8'
                          : 'bg-white/[0.04] border border-white/[0.07] sm:ml-8'
                      }`}
                    >
                      <div className="text-[11px] font-mono uppercase tracking-wider mb-1 text-indigo-300">
                        {turn.speaker}
                      </div>
                      <p className="text-slate-100">{turn.line}</p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Post-Call Automated Actions Triggered
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {scenario.actions.map((act) => (
                    <div
                      key={act}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium"
                    >
                      <CheckCircle2 size={14} className="shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#080C17] border-y border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              Engineered for Reliability, Warmth &amp; Action
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Every call flow includes clear answers, verified bookings, and a real person fallback when needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="executive-card p-6 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-poppins font-bold text-slate-900 dark:text-white">{cap.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Impact Table (Zero Pricing!) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-poppins font-bold text-slate-900 dark:text-white">
              Operational Impact Across Your Call Desk
            </h2>
          </div>

          <div className="executive-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-white/[0.03] border-b border-slate-200 dark:border-white/10">
                    <th className="p-4 font-mono text-xs uppercase tracking-wider text-slate-500">Capability Dimension</th>
                    <th className="p-4 font-mono text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      VIMS AI Voice Agent
                    </th>
                    <th className="p-4 font-mono text-xs uppercase tracking-wider text-slate-500">
                      Manual Phone Handling Alone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {OPERATIONAL_BENCHMARKS.map((row) => (
                    <tr
                      key={row.metric}
                      className="border-b border-slate-100 dark:border-white/[0.06] last:border-0"
                    >
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">{row.metric}</td>
                      <td className="p-4 font-semibold text-emerald-600 dark:text-emerald-400">{row.vims}</td>
                      <td className="p-4 text-slate-500 dark:text-slate-400">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Implementation */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-slate-900 dark:text-white text-center mb-12">
            How We Build &amp; Launch With You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUILD_STEPS.map((b) => (
              <div key={b.step} className="executive-card p-6 space-y-2.5">
                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  PHASE {b.step}
                </span>
                <h3 className="text-base font-poppins font-bold text-slate-900 dark:text-white">{b.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{b.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => onOpenBooking('AI Voice Agent Scope Discussion')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all"
            >
              <PhoneCall size={16} />
              <span>Map Your Custom Voice Agent Call Flow</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceAgentsPage;
