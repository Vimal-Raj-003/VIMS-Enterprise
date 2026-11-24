import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  Stethoscope,
  Bed,
  HeartPulse,
  Microscope,
  Pill,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Activity,
} from 'lucide-react';

interface HospitalManagementPageProps {
  onOpenBooking: (topic?: string) => void;
}

const WORKFLOW_NODES = [
  {
    id: 'front',
    step: '01',
    short: 'Patient App & ABHA',
    title: 'Smart Front Office, Queue & ABHA Registration',
    image: '/images/hms/hms-command-center.webp',
    caption: 'Live smartphone queue tokens, ABHA health ID verification, and zero waiting-hall congestion.',
    highlights: ['ABDM / ABHA Instant ID Linking', 'Live Mobile OPD Queue Tracking', 'QR Self Check-In Kiosks'],
  },
  {
    id: 'opd',
    step: '02',
    short: 'OPD & AI Scribe',
    title: 'Doctor CPOE & Ambient AI Clinical Voice Scribe',
    image: '/images/hms/hms-clinical-ai.webp',
    caption: 'Ambient AI structures doctor consultations into SOAP notes, ICD-10 codes, and safety-checked e-prescriptions.',
    highlights: ['Ambient Consultation to SOAP Note', 'Real-Time Drug-Allergy Checks', 'One-Tap Lab & Scan Orders'],
  },
  {
    id: 'diag',
    step: '03',
    short: 'PACS & Lab LIS',
    title: 'Barcoded Diagnostics, LIS & Cloud PACS Viewer',
    image: '/images/hms/hms-pacs-lab.webp',
    caption: 'Barcoded sample tracking from phlebotomy to web PACS DICOM viewing and panic-value doctor escalations.',
    highlights: ['Barcoded Sample Lifecycle', 'Cloud Web DICOM / PACS Viewer', 'Immediate Panic-Value Alerts'],
  },
  {
    id: 'critical',
    step: '04',
    short: 'ICU, NICU & OT',
    title: 'Connected Intensive Care, Telemetry & Operation Theatre',
    image: '/images/hms/hms-command-center.webp',
    caption: 'Continuous MEWS/SOFA vitals telemetry, OT surgery scheduling, anaesthesia logs, and Blood Bank cross-match.',
    highlights: ['Automated MEWS Vital Escalation', 'Pre / Intra / Post-Op OT Console', 'Bedside Nursing Barcode MAR'],
  },
  {
    id: 'pharmacy',
    step: '05',
    short: 'FEFO Pharmacy & TPA',
    title: 'FEFO Unit-Dose Pharmacy & Synchronized TPA Discharge',
    image: '/images/hms/hms-clinical-ai.webp',
    caption: 'Batch expiry shields alongside 4-department parallel IP discharge uniting Doctor, Nurse, Pharmacy & TPA.',
    highlights: ['First-Expiry First-Out Inventory', 'Cashless TPA Pre-Auth Desk', 'Synchronized Ward Discharge'],
  },
  {
    id: 'apps',
    step: '06',
    short: '3 Mobile Apps & ABDM',
    title: 'Doctor, Nurse & Patient Native iOS / Android Suite',
    image: '/images/hms/hms-pacs-lab.webp',
    caption: 'Dedicated role-based mobile applications with ABDM compliance and DPDPA 2023 audit logging.',
    highlights: ['Doctor Rounds & OP Queue App', 'Nursing Bedside Shift App', 'Patient Reports & Rx Vault'],
  },
];

const CLINICAL_GALLERY = [
  {
    src: '/images/hms/hms-command-center.webp',
    label: 'Command & Telemetry Desk',
    title: 'Multi-Specialty Bed, OPD & ICU Command Center',
  },
  {
    src: '/images/hms/hms-pacs-lab.webp',
    label: 'Diagnostics & Cloud PACS',
    title: 'Integrated LIS Barcode Lab & Radiology Workstation',
  },
  {
    src: '/images/hms/hms-clinical-ai.webp',
    label: 'Ambient Clinical AI',
    title: 'Voice-to-SOAP Scribe & Drug Safety Intelligence',
  },
];

const OP_MODULES = [
  'Front Office & ABHA',
  'OPD / CPOE Console',
  'OP Pharmacy & FEFO',
  'Laboratory (LIS)',
  'OP Billing & Receipts',
  'Emergency Triage',
  'Radiology & PACS',
  'Dialysis Unit',
  'Vaccination Schedules',
  'Dietician Plans',
  'Physiotherapy',
  'Orthopedics Registry',
  'Pediatrics Growth',
  'Pain & Wound Clinic',
  'Consent Console',
  'Vitals & Nursing',
  'Wellness Packages',
  'Doctor Mobile App',
  'Patient Mobile App',
];

const IP_MODULES = [
  'IP Admission & Beds',
  'Synchronized Discharge',
  'Nursing Station & MAR',
  'Nursing Mobile App',
  'IP Billing & TPA Desk',
  'Operation Theatre (OT)',
  'Labour & Newborn',
  'Blood Bank',
  'ICU / CCU Telemetry',
  'NICU / PICU Care',
  'IP Unit-Dose Pharmacy',
  'Facility Transfers',
  'Transplant Follow-Up',
  'Oncology Isolation',
  'IP Fluid Balance',
  'Rehab Tracking',
  'Infection Control (HAI)',
  'Crash Cart Audit',
  'Ward-Rounds App',
];

const HospitalManagementPage: React.FC<HospitalManagementPageProps> = ({ onOpenBooking }) => {
  const [activeNodeIdx, setActiveNodeIdx] = useState(0);
  const [moduleTab, setModuleTab] = useState<'op' | 'ip'>('op');
  const activeNode = WORKFLOW_NODES[activeNodeIdx];

  return (
    <div>
      <HeroSection
        badge="VIMS MediCore OS · Connected Healthcare Platform"
        headline={
          <>
            Visual Hospital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#D4AF37]">
              Operating Ecosystem.
            </span>
          </>
        }
        subtext="40+ Outpatient and Inpatient modules connecting patient check-in, ambient clinical AI, cloud PACS/LIS, ICU telemetry, FEFO pharmacy, and ABDM apps."
        imageUrl="/images/hms/hms-command-center.webp"
        altText="VIMS MediCore HMS Hospital Command Center"
        primaryCta={{
          text: 'Book HMS Live Demo',
          onClick: () => onOpenBooking('VIMS MediCore HMS Walkthrough'),
        }}
        secondaryCta={{
          text: 'Inspect Workflow Map',
          onClick: () => document.getElementById('hms-workflow')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Interactive SVG Hospital Ecosystem Flow Map */}
      <section id="hms-workflow" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#10B981] font-semibold">
              End-to-End Clinical Flow Visualization
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white">
              Click Any Node to Inspect Live Patient &amp; Data Flow
            </h2>
          </div>

          {/* Interactive SVG Flow Pipeline */}
          <div className="rounded-3xl bg-[#111114] border border-white/15 p-5 sm:p-8 shadow-2xl space-y-6">
            <div className="relative">
              {/* Connecting Animated Vector Line (Desktop) */}
              <svg
                className="hidden lg:block w-full h-10 mb-2 overflow-visible"
                viewBox="0 0 1000 40"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="60"
                  y1="20"
                  x2="940"
                  y2="20"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="2"
                />
                <line
                  x1="60"
                  y1="20"
                  x2={60 + ((activeNodeIdx / (WORKFLOW_NODES.length - 1)) * 880)}
                  y2="20"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray="6 4"
                />
              </svg>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {WORKFLOW_NODES.map((node, idx) => {
                  const active = idx === activeNodeIdx;
                  const passed = idx <= activeNodeIdx;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNodeIdx(idx)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        active
                          ? 'bg-[#10B981] text-[#09090B] border-[#10B981] shadow-lg shadow-[#10B981]/25 scale-[1.02]'
                          : passed
                          ? 'bg-white/10 text-white border-[#10B981]/40'
                          : 'bg-white/5 text-zinc-300 border-white/10 hover:border-white/25'
                      }`}
                    >
                      <div className="font-mono text-[11px] font-bold opacity-80">STEP {node.step}</div>
                      <div className="text-xs sm:text-sm font-display font-bold mt-1 leading-snug">
                        {node.short}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Node Detail Panel With Real Clinical Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-4 border-t border-white/10">
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-[#09090B]">
                <img
                  src={activeNode.image}
                  alt={activeNode.title}
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-4 text-white">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#10B981]">
                  <Activity size={14} />
                  <span>Station {activeNode.step} Active</span>
                </div>
                <h3 className="text-2xl font-display font-bold">{activeNode.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{activeNode.caption}</p>

                <div className="space-y-2 pt-1">
                  {activeNode.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 size={15} className="text-[#10B981] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Visual Clinical Suite Showcase */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-zinc-100/80 dark:bg-[#111114]/70 border-y border-zinc-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLINICAL_GALLERY.map((item) => (
              <div key={item.title} className="executive-card overflow-hidden">
                <img src={item.src} alt={item.title} className="w-full h-52 object-cover" loading="lazy" />
                <div className="p-5 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#10B981]">{item.label}</div>
                  <h3 className="text-base font-display font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact 40+ Module Explorer */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-white">
                Complete OP &amp; IP Module Coverage
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Includes Doctor, Nurse &amp; Patient Apps · ABDM &amp; DPDPA 2023 Ready
              </p>
            </div>

            <div className="inline-flex rounded-xl p-1 bg-zinc-200/70 dark:bg-white/5 border border-zinc-300/60 dark:border-white/10">
              <button
                type="button"
                onClick={() => setModuleTab('op')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  moduleTab === 'op' ? 'bg-[#10B981] text-[#09090B]' : 'text-zinc-700 dark:text-zinc-300'
                }`}
              >
                Outpatient Suite (19)
              </button>
              <button
                type="button"
                onClick={() => setModuleTab('ip')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  moduleTab === 'ip' ? 'bg-[#10B981] text-[#09090B]' : 'text-zinc-700 dark:text-zinc-300'
                }`}
              >
                Inpatient &amp; ICU Suite (19)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {(moduleTab === 'op' ? OP_MODULES : IP_MODULES).map((mod) => (
              <div
                key={mod}
                className="executive-card px-4 py-3.5 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200"
              >
                <CheckCircle2 size={14} className="text-[#10B981] shrink-0" />
                <span>{mod}</span>
              </div>
            ))}
          </div>

          {/* Highlight Footer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {[
              { icon: <Stethoscope size={17} />, title: 'Ambient AI Scribe', desc: 'Voice-to-SOAP notes & ICD-10 checks.' },
              { icon: <Bed size={17} />, title: 'Live Ward & OT Board', desc: 'Synchronized discharge & bed flow.' },
              { icon: <Smartphone size={17} />, title: '3 Native Apps', desc: 'Doctor, Nurse BAR-MAR & Patient vaults.' },
              { icon: <HeartPulse size={17} />, title: 'ICU & NICU Telemetry', desc: 'MEWS escalation & ventilator charts.' },
              { icon: <Microscope size={17} />, title: 'LIS & Cloud PACS', desc: 'Barcoded lab samples & DICOM viewer.' },
              { icon: <ShieldCheck size={17} />, title: 'ABDM & DPDPA Ready', desc: 'Role-based security & audit compliance.' },
            ].map((item) => (
              <div key={item.title} className="executive-card p-5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#10B981]/10 text-[#10B981] shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-display font-bold text-zinc-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => onOpenBooking('MediCore HMS Hospital Architecture Demo')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-sm font-semibold shadow-lg transition-all"
            >
              <Calendar size={16} />
              <span>Book Your Hospital Walkthrough</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalManagementPage;
