import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  Activity,
  Stethoscope,
  Bed,
  HeartPulse,
  Microscope,
  Pill,
  ShieldCheck,
  Smartphone,
  Server,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Play,
  Layers,
} from 'lucide-react';

interface HospitalManagementPageProps {
  onOpenBooking: (topic?: string) => void;
}

const INTERACTIVE_MODULES = [
  {
    id: 'emr',
    icon: <Stethoscope size={18} />,
    name: 'AI Clinical EMR & CPOE',
    tag: 'Outpatient & Inpatient Care',
    headline: 'Ambient Voice Scribe & Real-Time Prescription Safety',
    description:
      'Structured SOAP clinical notes, automated ICD-10 coding suggestions, longitudinal patient history, and instant drug-allergy interaction validation.',
    highlights: [
      'Ambient voice dictation converts consultations into structured SOAP records',
      'Real-time drug-drug & allergy safety alerts before e-prescription sign-off',
      'One-tap lab & radiology orders with longitudinal vital trends',
      'ABDM / ABHA health ID linking & DPDPA 2023 compliant patient consent',
    ],
    simulation: {
      trigger: 'Simulate Drug Safety & ICD-10 Check',
      input: 'Consultation note: Hypertension patient prescribed Lisinopril 10mg alongside active Ibuprofen regimen.',
      output:
        'Safety Alert: Renal interaction flagged between ACE inhibitor & NSAID. Alternative suggested; diagnosis mapped to ICD-10 (I10).',
    },
  },
  {
    id: 'flow',
    icon: <Bed size={18} />,
    name: 'OPD Queue & IP Bed Flow',
    tag: 'Patient Logistics',
    headline: 'Live Mobile Queue Tokens & Synchronized Discharge',
    description:
      'Orchestrates patient movement from QR/WhatsApp check-in through dynamic ward bed allocation, housekeeping alerts, and 4-department discharge clearance.',
    highlights: [
      'Live OPD queue status accessible on patient smartphones',
      'Real-time ward occupancy map with automated housekeeping turnaround triggers',
      'Parallel discharge clearance uniting Doctor, Nursing, Pharmacy, and Billing',
      'Fast-track Emergency & Day-Care triage workflows',
    ],
    simulation: {
      trigger: 'Simulate Fast-Track IPD Discharge',
      input: 'Treating consultant signs discharge summary for Ward B · Bed 304.',
      output:
        'Synchronized alert sent to IP Pharmacy (return reconciliation), TPA Billing, Nursing handover, and Housekeeping—cutting wait times dramatically.',
    },
  },
  {
    id: 'critical',
    icon: <HeartPulse size={18} />,
    name: 'Connected ICU, NICU & OT',
    tag: 'Critical Care & Surgery',
    headline: 'Hourly Vital Tracking, Early Warning Scores & OT Console',
    description:
      'Centralizes ventilator logs, APACHE/SOFA & MEWS early-warning scores, surgical theatre scheduling, anesthesia records, and crash-cart readiness.',
    highlights: [
      'ICU / CCU & NICU/PICU vitals, ventilator & incubator monitoring logs',
      'Automated Modified Early Warning Score (MEWS) escalation to on-call doctors',
      'OT scheduling with pre/intra/post-op documentation & consumable tracking',
      'Labour room partograph, Blood Bank cross-match, and Infection Control (HAI)',
    ],
    simulation: {
      trigger: 'Simulate ICU Early Warning Escalation',
      input: 'ICU Bed 12 records acute SpO2 dip to 89% with elevated respiratory rate.',
      output:
        'Priority MEWS alert flashed on Central Nursing Station and pushed to Intensivist mobile app with bedside arterial blood gas order ready.',
    },
  },
  {
    id: 'diagnostics',
    icon: <Microscope size={18} />,
    name: 'Laboratory LIS, Radiology & Pharmacy',
    tag: 'Diagnostics & Supply Chain',
    headline: 'Barcoded Sample Tracking, Web Imaging & FEFO Pharmacy',
    description:
      'Eliminates manual transcription errors and medicine expiry losses with barcoded phlebotomy-to-report workflows and First-Expiry First-Out inventory control.',
    highlights: [
      'Barcoded vacutainer tracking, panic-value doctor alerts & digital PDF lab reports',
      'Radiology order routing with integrated web image viewer & structured reporting',
      'OP & IP Pharmacy with FEFO batch rotation, narcotic control & expiry shields',
      'Bedside nursing barcode verification (Right Patient, Right Drug, Right Dose)',
    ],
    simulation: {
      trigger: 'Simulate Critical Lab Value Alert',
      input: 'Biochemistry analyzer posts Serum Potassium = 6.6 mEq/L for IPD patient.',
      output:
        'Immediate panic-value notification dispatched to treating physician & ward nurse console with mandatory read-acknowledgment log.',
    },
  },
];

const OP_MODULES = [
  'Front Office & ABHA Registration',
  'OPD / CPOE Doctor Console',
  'OP Pharmacy & Expiry Alerts',
  'Laboratory (LIS) & Sample Tracking',
  'OP Billing & Digital Receipts',
  'Emergency & Day-Care Triage',
  'Radiology & Image Viewer',
  'Dialysis Session Management',
  'Vaccination & Schedules',
  'Dietician & Care Plans',
  'Physiotherapy & Rehab',
  'Orthopedics & Implant Registry',
  'Pediatrics & Growth Charts',
  'Wound Care & Pain Clinic',
  'Procedure Console & Consent',
  'Vital Room Nursing Interface',
  'Health Checkup Packages',
  'Doctor Mobile App (iOS/Android)',
  'Patient Mobile App (iOS/Android)',
];

const IP_MODULES = [
  'IP Admission & Ward Bed Config',
  'Synchronized Discharge Engine',
  'Nursing Station & Shift MAR',
  'Nursing Bedside Mobile App',
  'IP Master Billing & TPA Pre-Auth',
  'Operation Theatre (OT) Suite',
  'Labour Room & Newborn Care',
  'Blood Bank & Cross-Match',
  'ICU / CCU Telemetry & SOFA',
  'NICU / PICU Incubator & Growth',
  'IP Unit-Dose Pharmacy & Narcotics',
  'Inter-Facility Patient Transfer',
  'Transplant Registry & Follow-Up',
  'IP Chemotherapy & Isolation',
  'IP Dialysis & Fluid Balance',
  'IP Rehabilitation Tracking',
  'Hospital Infection Control (HAI)',
  'Crash Cart Readiness & Expiry',
  'Doctor IP Ward-Rounds App',
];

const HospitalManagementPage: React.FC<HospitalManagementPageProps> = ({ onOpenBooking }) => {
  const [selectedModIdx, setSelectedModIdx] = useState(0);
  const [simTriggered, setSimTriggered] = useState(false);

  const activeModule = INTERACTIVE_MODULES[selectedModIdx];

  const handleSelectModule = (idx: number) => {
    setSelectedModIdx(idx);
    setSimTriggered(false);
  };

  return (
    <div>
      <HeroSection
        badge="VIMS MediCore OS · Multi-Tenant Cloud Healthcare Platform"
        headline={
          <>
            Complete Hospital Management System{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-400">
              Engineered for Clinical Clarity.
            </span>
          </>
        }
        subtext="Unite 40+ Outpatient and Inpatient clinical modules, AI-assisted doctor workflows, connected ICU/OT consoles, barcoded pharmacy & lab operations, and iOS/Android mobile apps on one ABDM-ready platform."
        primaryCta={{
          text: 'Schedule an HMS Architecture Walkthrough',
          onClick: () => onOpenBooking('VIMS MediCore HMS Hospital Demo'),
        }}
        secondaryCta={{
          text: 'Explore All 40+ Modules',
          onClick: () => document.getElementById('hms-modules')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Interactive Clinical Workflow Simulator */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
              Interactive Clinical Command Preview
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              Experience Connected Hospital Workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              {INTERACTIVE_MODULES.map((m, i) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleSelectModule(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    selectedModIdx === i
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20'
                      : 'executive-card text-slate-900 dark:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider opacity-80">
                    {m.icon}
                    <span>{m.tag}</span>
                  </div>
                  <div className="text-base font-poppins font-bold mt-1.5">{m.name}</div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 executive-card p-7 sm:p-10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {activeModule.tag}
                </span>
                <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-white">
                  {activeModule.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeModule.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModule.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.06] text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Clinical Simulation Box */}
              <div className="rounded-2xl bg-slate-900 dark:bg-[#070B14] border border-slate-800 dark:border-white/10 p-5 sm:p-6 text-white space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-300">
                      LIVE WORKFLOW VERIFICATION
                    </span>
                    <p className="text-xs text-slate-300 mt-1">{activeModule.simulation.input}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSimTriggered(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold transition-all"
                  >
                    <Play size={12} />
                    <span>{activeModule.simulation.trigger}</span>
                  </button>
                </div>

                {simTriggered ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-200 leading-relaxed">
                    <strong className="text-emerald-300 block mb-0.5">System Response Executed:</strong>
                    {activeModule.simulation.output}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete 40+ OP & IP Clinical Module Matrix */}
      <section
        id="hms-modules"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#080C17] border-y border-slate-200/80 dark:border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
              Comprehensive Multi-Specialty Scope
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              40+ Integrated Outpatient, Inpatient &amp; Mobile Modules
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Scales effortlessly from single multi-specialty hospitals to multi-branch healthcare networks without data re-migration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="executive-card p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.07] pb-4">
                <h3 className="text-lg font-poppins font-bold text-slate-900 dark:text-white">
                  Outpatient (OP) &amp; Specialty Suite
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                  OP Clinical Core
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {OP_MODULES.map((m) => (
                  <div key={m} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={13} className="text-indigo-500 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="executive-card p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.07] pb-4">
                <h3 className="text-lg font-poppins font-bold text-slate-900 dark:text-white">
                  Inpatient (IP), Critical Care &amp; OT Suite
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                  IP Acute Care
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {IP_MODULES.map((m) => (
                  <div key={m} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise Architecture & Compliance Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="executive-card p-6 space-y-2">
              <div className="flex items-center gap-2 text-indigo-500 font-semibold text-sm">
                <Smartphone size={18} />
                <span>3 Native Mobile Apps Included</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicated iOS &amp; Android apps for Doctors (OP queues &amp; IP ward rounds), Nurses (barcode MAR &amp; bedside vitals), and Patients (appointments, prescriptions &amp; lab PDFs).
              </p>
            </div>

            <div className="executive-card p-6 space-y-2">
              <div className="flex items-center gap-2 text-emerald-500 font-semibold text-sm">
                <ShieldCheck size={18} />
                <span>Indian Healthcare Regulatory Ready</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Built for ABDM / ABHA integration, DPDPA 2023 patient data protection, Clinical Establishments Act standards, and 22+ role-based access control (RBAC) policies.
              </p>
            </div>

            <div className="executive-card p-6 space-y-2">
              <div className="flex items-center gap-2 text-sky-500 font-semibold text-sm">
                <Server size={18} />
                <span>Resilient Cloud-Native Stack</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                TypeScript, React, Node.js, PostgreSQL (ACID clinical records), Redis caching, real-time WebSocket queue alerts, and Dockerized multi-branch scalability.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onOpenBooking('VIMS MediCore HMS Scope & Hospital Demo')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all"
            >
              <Calendar size={16} />
              <span>Book a MediCore HMS Walkthrough for Your Hospital</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalManagementPage;
