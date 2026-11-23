import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  GraduationCap,
  Cpu,
  Code2,
  Layers,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Terminal,
  GitBranch,
  Gauge,
  Award,
  Users,
} from 'lucide-react';

interface MatlabAcademyPageProps {
  onOpenBooking: (topic?: string) => void;
}

const ACADEMY_TRACKS = [
  {
    id: 'matlab',
    badge: 'Core Engineering Track · Automotive, Aerospace & Controls',
    title: 'MATLAB, Simulink, Stateflow & Model-Based Design (MBD)',
    subtitle: 'From matrix fundamentals to production MIL / SIL / HIL simulation and embedded C/C++ code generation.',
    modules: [
      {
        code: 'MBD-01',
        name: 'MATLAB Architecture & Vectorized M-Script',
        topics: 'Workspace architecture, numeric/struct/cell arrays, vectorized matrix operations, custom functions, debugging, and 2D/3D engineering visualization.',
      },
      {
        code: 'MBD-02',
        name: 'Dynamic System Modeling in Simulink',
        topics: 'Continuous & discrete-time block diagrams, plant & sensor modeling, PID / Lead-Lag / LQR controller design, solver configuration, and frequency-domain analysis.',
      },
      {
        code: 'MBD-03',
        name: 'Stateflow: Finite State Machines & Event Logic',
        topics: 'Hierarchical state charts, truth tables, fault-handling supervisory control logic, and hybrid Simulink-Stateflow co-simulation.',
      },
      {
        code: 'MBD-04',
        name: 'Verification (MIL / SIL / HIL) & Embedded Code Generation',
        topics: 'Model-in-the-Loop & Software-in-the-Loop testing workflows, automotive ADAS/powertrain control case studies, and Embedded Coder C/C++ deployment.',
      },
    ],
    outcomes: [
      'Build complete plant-controller-feedback loops ready for automotive & industrial interviews',
      'Master industry MBD standards used across OEMs, Tier-1 suppliers, and R&D labs',
      'Graduate with a documented Simulink + Stateflow capstone portfolio',
    ],
  },
  {
    id: 'fde',
    badge: 'Applied AI Engineering Track · Industry Deployment',
    title: 'Forward Deployed Engineer (FDE) Bootcamp',
    subtitle: 'Learn to sit directly with business & clinical problems, architect AI systems, and ship production software end-to-end.',
    modules: [
      {
        code: 'FDE-01',
        name: 'Problem Discovery & Systems Architecture',
        topics: 'Translating ambiguous client bottlenecks into crisp data schemas, API contracts, latency budgets, and measurable acceptance criteria.',
      },
      {
        code: 'FDE-02',
        name: 'Applied LLM, RAG & Conversational Voice Pipelines',
        topics: 'Prompt engineering with strict guardrails, structured outputs, tool calling, low-latency multilingual voice agents, and evaluation harnesses.',
      },
      {
        code: 'FDE-03',
        name: 'Full-Stack & Workflow Integration (TypeScript, Python, n8n)',
        topics: 'Building clean React/TypeScript interfaces, webhook APIs, CRM/WhatsApp integrations, authentication, and error-resilient orchestration.',
      },
      {
        code: 'FDE-04',
        name: 'Production Deployment, Security & Client Handover',
        topics: 'Cloud deployment, observability logs, live stakeholder walkthroughs, rapid iteration in the field, and executive communication.',
      },
    ],
    outcomes: [
      'Bridge the gap between coding tutorials and real client-facing AI engineering',
      'Ship a live end-to-end AI Voice/Automation or SaaS capstone reviewed by VIMS architects',
      'Top performers qualify for VIMS Enterprise internship & live project mentorship pathways',
    ],
  },
];

const FORMATS = [
  {
    icon: <Users size={20} />,
    title: 'University & College Workshops',
    description: 'Hands-on campus bootcamps and department FDPs/workshops tailored for ECE, EEE, Mechanical, Mechatronics, and CSE/AI cohorts.',
  },
  {
    icon: <Terminal size={20} />,
    title: 'Guided Cohort Mentorship',
    description: 'Structured live sessions with real problem statements, code/model reviews, and capstone project evaluations by practicing engineers.',
  },
  {
    icon: <Award size={20} />,
    title: 'Capstone Portfolio & Certification',
    description: 'Every participant completes verifiable engineering models or deployed AI agents with VIMS Enterprise completion credentials.',
  },
];

const MatlabAcademyPage: React.FC<MatlabAcademyPageProps> = ({ onOpenBooking }) => {
  const [activeTrackIdx, setActiveTrackIdx] = useState(0);
  const track = ACADEMY_TRACKS[activeTrackIdx];

  return (
    <div>
      <HeroSection
        badge="VIMS Engineering & Applied AI Academy"
        headline={
          <>
            MATLAB Model-Based Design &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400">
              Forward Deployed Engineer
            </span>{' '}
            Training.
          </>
        }
        subtext="We train ambitious engineering students and early-career technologists in the two disciplines shaping modern industry: MATLAB/Simulink Control Systems (MBD) and client-facing Forward Deployed AI Engineering."
        primaryCta={{
          text: 'Enquire for Student Cohort or Campus Workshop',
          onClick: () => onOpenBooking('MATLAB & Forward Deployed Engineer Academy'),
        }}
        secondaryCta={{
          text: 'Inspect Curriculum Tracks',
          onClick: () => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Track Switcher & Curriculum */}
      <section id="curriculum" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
                Industry-Built Syllabi
              </p>
              <h2 className="mt-1 text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
                Two Specialized Engineering Tracks
              </h2>
            </div>

            <div className="inline-flex rounded-2xl p-1.5 bg-slate-200/70 dark:bg-white/[0.06] border border-slate-300/60 dark:border-white/10">
              <button
                type="button"
                onClick={() => setActiveTrackIdx(0)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTrackIdx === 0
                    ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                <Gauge size={15} />
                <span>MATLAB &amp; Simulink MBD</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTrackIdx(1)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTrackIdx === 1
                    ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                <Code2 size={15} />
                <span>Forward Deployed Engineer (FDE)</span>
              </button>
            </div>
          </div>

          <div className="executive-card p-7 sm:p-10 space-y-8">
            <div className="space-y-2 border-b border-slate-200/80 dark:border-white/[0.08] pb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {track.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-slate-900 dark:text-white">
                {track.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">{track.subtitle}</p>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {track.modules.map((m) => (
                <div
                  key={m.code}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.07] space-y-2.5"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                    {m.code}
                  </span>
                  <h4 className="text-base sm:text-lg font-poppins font-bold text-slate-900 dark:text-white">
                    {m.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{m.topics}</p>
                </div>
              ))}
            </div>

            {/* Outcomes + Action */}
            <div className="rounded-2xl bg-slate-900 dark:bg-[#070B14] border border-slate-800 dark:border-white/10 p-6 sm:p-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-white">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Graduate Readiness Outcomes
                </div>
                <ul className="space-y-2">
                  {track.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(`Academy Enquiry: ${track.title}`)}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg transition-all"
              >
                <Calendar size={15} />
                <span>Request Batch / Workshop Details</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#080C17] border-t border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-poppins font-bold text-slate-900 dark:text-white">
              Designed for Students, Colleges &amp; Aspiring Engineers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FORMATS.map((f) => (
              <div key={f.title} className="executive-card p-7 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="text-lg font-poppins font-bold text-slate-900 dark:text-white">{f.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MatlabAcademyPage;
