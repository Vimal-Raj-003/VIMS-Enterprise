import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { GROUP_PLATFORMS } from '../constants';
import {
  Gauge,
  Code2,
  CheckCircle2,
  ArrowRight,
  Calendar,
  ExternalLink,
  Cpu,
  Terminal,
  Users,
} from 'lucide-react';

interface MatlabAcademyPageProps {
  onOpenBooking: (topic?: string) => void;
}

const SIGNAL_MODES = [
  {
    id: 'can',
    label: 'CAN 500 kbit/s',
    frameId: '0x18DAF110',
    dlc: 'DLC: 8',
    payload: 'FE 03 12 00 A1 7C 00 55',
    summary: 'Real-time vehicle CAN / CAN FD bus decoding & UDS diagnostics on Embedded Skills.',
    pathD: 'M 0 38 L 35 38 L 35 12 L 80 12 L 80 38 L 115 38 L 115 12 L 170 12 L 170 38 L 220 38 L 220 12 L 265 12 L 265 38 L 320 38',
  },
  {
    id: 'simulink',
    label: 'Simulink PID',
    frameId: 'MIL // SIL',
    dlc: 'Ts: 10ms',
    payload: 'Kp=1.42 Ki=0.38 Settling=0.45s',
    summary: 'Closed-loop dynamic plant & controller modeling with Embedded Coder C/C++ verification.',
    pathD: 'M 0 42 C 45 42, 65 8, 110 14 C 155 20, 175 26, 220 22 C 265 20, 290 21, 320 21',
  },
  {
    id: 'stateflow',
    label: 'Stateflow BMS',
    frameId: 'ISO-26262',
    dlc: 'ASIL-C',
    payload: 'STATE: PRECHARGE -> DRIVE_READY',
    summary: 'Deterministic fault-handling finite state machines for EV battery & ADAS supervisors.',
    pathD: 'M 0 40 L 65 40 L 65 26 L 145 26 L 145 10 L 235 10 L 235 26 L 320 26',
  },
];

const EMBEDDED_SKILLS_DOMAINS = [
  'CAN / CAN FD & LIN Bus Protocols',
  'UDS Diagnostics & OBD-II / DTC',
  'AUTOSAR Classic & RTE Mapping',
  'MATLAB, Simulink & Stateflow MBD',
  'MIL / SIL / HIL Verification',
  'ISO 26262 Functional Safety & ASPICE',
  'Embedded C, RTOS & Bootloaders',
  'EV Battery Management (BMS) & ADAS',
];

const FDE_MODULES = [
  {
    code: 'FDE-01',
    name: 'Client Systems Discovery',
    desc: 'Translating real client challenges into clear APIs, schemas & deliverables.',
  },
  {
    code: 'FDE-02',
    name: 'Applied LLM & Voice AI',
    desc: 'Tool calling, guardrailed RAG & multilingual Voice AI workflows.',
  },
  {
    code: 'FDE-03',
    name: 'Full-Stack Integrations',
    desc: 'TypeScript, React, Python & CRM/WhatsApp webhook automation pipelines.',
  },
  {
    code: 'FDE-04',
    name: 'Live Production Shipping',
    desc: 'Real client deployment, telemetry observability & capstone mentorship.',
  },
];

const MatlabAcademyPage: React.FC<MatlabAcademyPageProps> = ({ onOpenBooking }) => {
  const [signalIdx, setSignalIdx] = useState(0);
  const [trackIdx, setTrackIdx] = useState<'mbd' | 'fde'>('mbd');
  const sig = SIGNAL_MODES[signalIdx];

  return (
    <div className="bg-white dark:bg-[#0B0F19]">
      <HeroSection
        badge="VIMS Enterprise × Embedded Skills Academy"
        headline={
          <>
            Engineering Mentorship:{' '}
            <span className="text-[#1D4ED8] dark:text-blue-400">Embedded Skills &amp; FDE AI.</span>
          </>
        }
        subtext="Preparing engineering students and graduates with hands-on automotive ECU protocols, MATLAB/Simulink MBD (Embedded Skills), and Forward Deployed AI engineering."
        imageUrl="/images/human/academy-students-human.webp"
        altText="Senior mentor guiding engineering students at laptops beside automotive electronics bench"
        primaryCta={{
          text: 'Book Cohort / Campus Workshop',
          onClick: () => onOpenBooking('Academy Cohort / Campus Workshop'),
        }}
        secondaryCta={{
          text: 'Visit Embedded Skills Portal',
          externalUrl: GROUP_PLATFORMS.embskills.url,
          onClick: () => {},
        }}
      />

      {/* Live CAN Bus & MATLAB Lab Preview — Clean Light Surface */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-blue-400 font-semibold">
              Live Embedded &amp; MATLAB Lab Preview
            </p>
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white leading-tight">
              Train on Real Bus Frames &amp; Control Loops
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Integrated directly with{' '}
              <a
                href={GROUP_PLATFORMS.embskills.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1D4ED8] dark:text-blue-400 hover:underline"
              >
                embskills.vimsenterprise.com
              </a>
              —learners decode real ECUs, build Simulink models, and deploy real software.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {SIGNAL_MODES.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSignalIdx(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                    signalIdx === idx
                      ? 'bg-[#1D4ED8] text-white'
                      : 'bg-[#F8F7F4] dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200/70'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl bg-[#F8F7F4] dark:bg-[#0F1420] p-6 sm:p-8 space-y-5 border border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800 font-mono text-xs">
              <span className="inline-flex items-center gap-2 text-[#0F766E] dark:text-teal-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                DECODING LIVE // {sig.frameId}
              </span>
              <span className="text-slate-500">{sig.dlc}</span>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900">
              <svg viewBox="0 0 320 52" className="w-full h-24 overflow-visible">
                <line x1="0" y1="26" x2="320" y2="26" stroke="rgba(148,163,184,0.35)" strokeDasharray="4 4" />
                <path
                  d={sig.pathD}
                  fill="none"
                  stroke="#0F766E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs bg-white dark:bg-slate-900 px-4 py-3 rounded-xl">
              <span className="text-[#1D4ED8] dark:text-blue-400 font-semibold">{sig.payload}</span>
              <a
                href={GROUP_PLATFORMS.embskills.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-800 dark:text-white hover:text-[#1D4ED8] font-semibold"
              >
                <span>Open Full Embedded Skills Labs</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">{sig.summary}</p>
          </div>
        </div>
      </section>

      {/* Two Track Directory */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8 editorial-section-alt">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Two Practical Industry Tracks
            </h2>

            <div className="inline-flex rounded-xl p-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setTrackIdx('mbd')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                  trackIdx === 'mbd' ? 'bg-[#1D4ED8] text-white' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                <Gauge size={14} />
                <span>Embedded Skills &amp; MATLAB MBD</span>
              </button>
              <button
                type="button"
                onClick={() => setTrackIdx('fde')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                  trackIdx === 'fde' ? 'bg-[#1D4ED8] text-white' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                <Code2 size={14} />
                <span>Forward Deployed AI (FDE)</span>
              </button>
            </div>
          </div>

          {trackIdx === 'mbd' ? (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
                    Powered by Embedded Skills
                  </span>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                    Automotive ECUs, CAN/AUTOSAR &amp; MATLAB Model-Based Design
                  </h3>
                </div>
                <a
                  href={GROUP_PLATFORMS.embskills.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold"
                >
                  <span>Explore embskills.vimsenterprise.com</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 pt-2">
                {EMBEDDED_SKILLS_DOMAINS.map((mod) => (
                  <div
                    key={mod}
                    className="py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 size={16} className="text-[#0F766E] dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0F766E] dark:text-teal-400 font-semibold">
                  VIMS Applied AI Cohort
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                  Forward Deployed Engineer (FDE) Training
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {FDE_MODULES.map((m) => (
                  <div key={m.code} className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-1.5">
                    <span className="font-mono text-xs font-bold text-[#1D4ED8] dark:text-blue-400">{m.code}</span>
                    <h4 className="text-base font-display font-bold text-slate-900 dark:text-white">{m.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Delivery Formats */}
          <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users size={18} />, title: 'Campus & Department Workshops', desc: 'Tailored bootcamps for ECE, EEE, Mechanical & CSE cohorts.' },
              { icon: <Terminal size={18} />, title: 'Live Engineer Reviews', desc: 'Hands-on bus decoding, Simulink & LLM agent evaluations.' },
              { icon: <Cpu size={18} />, title: 'Capstone Portfolio', desc: 'Practical simulations & live deployments reviewed by engineers.' },
            ].map((f) => (
              <div key={f.title} className="space-y-2">
                <div className="text-[#1D4ED8] dark:text-blue-400">{f.icon}</div>
                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white">{f.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenBooking('Academy Cohort or Campus Workshop')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold transition-all"
            >
              <Calendar size={16} />
              <span>Request Batch or College Workshop</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MatlabAcademyPage;
