import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  Stethoscope,
  Bed,
  HeartPulse,
  Microscope,
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
    image: '/images/human/hms-care-human.webp',
    caption: 'Live smartphone queue tokens, ABHA health ID verification, and calm waiting-hall coordination.',
    highlights: ['ABDM / ABHA Instant ID Linking', 'Live Mobile OPD Queue Tracking', 'QR Self Check-In'],
  },
  {
    id: 'opd',
    step: '02',
    short: 'OPD & AI Scribe',
    title: 'Doctor CPOE & Ambient AI Clinical Voice Scribe',
    image: '/images/hms/hms-clinical-ai.webp',
    caption: 'Ambient voice notes convert consultations into structured SOAP records, ICD-10 codes, and safety-checked prescriptions.',
    highlights: ['Ambient Consultation to SOAP Note', 'Real-Time Drug-Allergy Checks', 'One-Tap Lab & Scan Orders'],
  },
  {
    id: 'diag',
    step: '03',
    short: 'PACS & Lab LIS',
    title: 'Barcoded Diagnostics, LIS & Cloud PACS Viewer',
    image: '/images/hms/hms-pacs-lab.webp',
    caption: 'Barcoded sample tracking from collection to web PACS DICOM viewing and panic-value alerts.',
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
    image: '/images/human/hms-care-human.webp',
    caption: 'Dedicated role-based mobile apps built cleanly for ABDM compliance and DPDPA 2023 audit logging.',
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
    <div className="bg-white dark:bg-[#0B0F19]">
      <HeroSection
        badge="VIMS MediCore OS · Connected Healthcare Platform"
        headline={
          <>
            Hospital Systems Built for{' '}
            <span className="text-[#0F766E] dark:text-teal-400">Clinicians &amp; Patients.</span>
          </>
        }
        subtext="40+ Outpatient and Inpatient modules connecting patient check-in, ambient clinical scribe, cloud PACS/LIS, ICU telemetry, FEFO pharmacy, and ABDM apps."
        imageUrl="/images/human/hms-care-human.webp"
        altText="Doctor consulting warmly with a patient using clinical tablet"
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
      <section id="hms-workflow" className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#0F766E] dark:text-teal-400 font-semibold">
              Connected Hospital Workflow
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Click Any Station to Inspect Patient &amp; Data Flow
            </h2>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <svg
                className="hidden lg:block w-full h-8 mb-2 overflow-visible"
                viewBox="0 0 1000 32"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="60" y1="16" x2="940" y2="16" stroke="rgba(148,163,184,0.35)" strokeWidth="2" />
                <line
                  x1="60"
                  y1="16"
                  x2={60 + (activeNodeIdx / (WORKFLOW_NODES.length - 1)) * 880}
                  y2="16"
                  stroke="#0F766E"
                  strokeWidth="3"
                  strokeDasharray="6 4"
                />
              </svg>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {WORKFLOW_NODES.map((node, idx) => {
                  const active = idx === activeNodeIdx;
                  const passed = idx <= activeNodeIdx;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNodeIdx(idx)}
                      className={`text-left p-4 rounded-xl transition-all ${
                        active
                          ? 'bg-[#0F766E] text-white shadow-sm'
                          : passed
                          ? 'bg-teal-50 dark:bg-teal-950/40 text-slate-900 dark:text-white'
                          : 'bg-[#F8F7F4] dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-slate-200/70'
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <div className="lg:col-span-6">
                <img
                  src={activeNode.image}
                  alt={activeNode.title}
                  className="w-full h-64 sm:h-80 rounded-2xl object-cover shadow-md"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0F766E] dark:text-teal-400 font-semibold">
                  <Activity size={14} />
                  <span>Station {activeNode.step} Active</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                  {activeNode.title}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{activeNode.caption}</p>

                <div className="space-y-2.5 pt-2">
                  {activeNode.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-[#0F766E] dark:text-teal-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Clinical Views Strip */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 editorial-section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLINICAL_GALLERY.map((item) => (
              <div key={item.title} className="space-y-3">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-56 rounded-2xl object-cover shadow-sm"
                  loading="lazy"
                />
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#0F766E] dark:text-teal-400 font-semibold">
                    {item.label}
                  </div>
                  <h3 className="text-base font-display font-bold text-slate-900 dark:text-white mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open OP & IP Directory */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Complete OP &amp; IP Module Coverage
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Doctor, Nurse &amp; Patient Apps Included &middot; ABDM &amp; DPDPA 2023 Ready
              </p>
            </div>

            <div className="inline-flex rounded-xl p-1 bg-[#F8F7F4] dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setModuleTab('op')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  moduleTab === 'op' ? 'bg-[#0F766E] text-white' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                Outpatient Suite (19)
              </button>
              <button
                type="button"
                onClick={() => setModuleTab('ip')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  moduleTab === 'ip' ? 'bg-[#0F766E] text-white' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                Inpatient &amp; ICU Suite (19)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            {(moduleTab === 'op' ? OP_MODULES : IP_MODULES).map((mod) => (
              <div
                key={mod}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 py-1.5 border-b border-slate-100 dark:border-slate-800/70"
              >
                <CheckCircle2 size={15} className="text-[#0F766E] dark:text-teal-400 shrink-0" />
                <span>{mod}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {[
              { icon: <Stethoscope size={17} />, title: 'Ambient AI Scribe', desc: 'Voice-to-SOAP notes & ICD-10 checks.' },
              { icon: <Bed size={17} />, title: 'Live Ward & OT Board', desc: 'Synchronized discharge & bed flow.' },
              { icon: <Smartphone size={17} />, title: '3 Native Apps', desc: 'Doctor, Nurse & Patient vaults.' },
              { icon: <HeartPulse size={17} />, title: 'ICU & NICU Telemetry', desc: 'MEWS escalation & ventilator charts.' },
              { icon: <Microscope size={17} />, title: 'LIS & Cloud PACS', desc: 'Barcoded lab samples & DICOM viewer.' },
              { icon: <ShieldCheck size={17} />, title: 'ABDM & DPDPA Ready', desc: 'Role-based security & audit compliance.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="text-[#0F766E] dark:text-teal-400 pt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => onOpenBooking('MediCore HMS Hospital Architecture Demo')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold transition-all"
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
