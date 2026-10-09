import React, { useState, useId } from 'react';
import { Page } from '../types';
import { COMPANY_CONTACT } from '../constants';
import { 
  Activity, 
  Bed, 
  Stethoscope, 
  HeartPulse, 
  FileText, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Building2, 
  Cpu, 
  Database, 
  Users, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  PhoneCall, 
  Download, 
  Layers, 
  Lock, 
  Share2, 
  Sliders, 
  Calendar,
  AlertCircle,
  HelpCircle,
  Server
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HospitalManagementPageProps {
  onNavigate?: (page: Page) => void;
}

type EcosystemModuleKey = 'emr' | 'patient_flow' | 'icu_ot' | 'diagnostics' | 'pharmacy' | 'insurance';

interface EcosystemModule {
  id: EcosystemModuleKey;
  name: string;
  shortTag: string;
  headline: string;
  description: string;
  capabilities: string[];
  metrics: { label: string; value: string; detail: string }[];
  interactiveAction: {
    label: string;
    description: string;
    outcomeTitle: string;
    outcomeDetail: string;
  };
}

const MODULES: EcosystemModule[] = [
  {
    id: 'emr',
    name: 'AI Clinical EMR',
    shortTag: 'Clinical Care',
    headline: 'Voice Scribe & Real-Time Prescription Safety',
    description: 'Zero-click electronic records with instant speech-to-text transcription, ICD-10 coding, and automated drug-allergy safety validation.',
    capabilities: [
      'Ambient AI voice scribe creates structured SOAP clinical notes',
      'Instant safety alerts for drug-drug interactions & allergies',
      'Complete longitudinal health summary across past visits & labs',
      'ABDM & Ayushman Bharat compliant digital records'
    ],
    metrics: [
      { label: 'Documentation Time', value: '-65%', detail: 'Reclaims 2+ physician hours daily' },
      { label: 'Prescription Safety', value: '99.98%', detail: 'Adverse interactions prevented' },
      { label: 'Coding Accuracy', value: '98.4%', detail: 'Automated ICD-10 classification' }
    ],
    interactiveAction: {
      label: 'Test AI Scribe & Drug Interaction Check',
      description: 'Physician dictation: "Hypertension patient: prescribe Lisinopril 10mg with existing Ibuprofen".',
      outcomeTitle: 'Safety Alert Triggered',
      outcomeDetail: 'Lisinopril + Ibuprofen interaction flagged (renal risk). Amlodipine 5mg recommended. SOAP note auto-mapped to ICD-10 (I10).'
    }
  },
  {
    id: 'patient_flow',
    name: 'OPD, IPD & Bed Turnover',
    shortTag: 'Patient Logistics',
    headline: 'Zero-Wait Triage & Accelerated Discharge',
    description: 'Tracks patient movement from WhatsApp token check-in to real-time bed housekeeping and fast-track discharge clearance.',
    capabilities: [
      'QR kiosk & WhatsApp live token tracking for outpatient queues',
      'Dynamic bed occupancy heatmap with automated cleaning alerts',
      'Synchronized 4-step discharge (Doctor, Pharmacy, Nursing, Billing)',
      'Automated admission and emergency triage score prioritization'
    ],
    metrics: [
      { label: 'Discharge Turnaround', value: '28 min', detail: 'Down from 2.5–3 hours' },
      { label: 'OPD Queue Wait', value: '-52%', detail: 'Live token tracking on patient phones' },
      { label: 'Bed Utilization', value: '94.2%', detail: 'Faster housekeeping re-allocation' }
    ],
    interactiveAction: {
      label: 'Simulate Fast-Track Discharge',
      description: 'Discharge order placed for Bed 304. Synchronizes Doctor, Pharmacy, Billing, and Housekeeping.',
      outcomeTitle: 'Discharge Pipeline Synchronized in 420ms',
      outcomeDetail: 'Medications reconciled, TPA invoice finalized, WhatsApp gate pass dispatched, and housekeeping cleaning alert sent.'
    }
  },
  {
    id: 'icu_ot',
    name: 'Connected ICU & OT',
    shortTag: 'Critical Care',
    headline: 'Biomedical Telemetry Sync & Surgery Scheduling',
    description: 'Connects critical care monitors, ventilators, and surgical suites into a real-time command dashboard with early warning alerts.',
    capabilities: [
      'Real-time IoT streaming from Philips, Mindray, and GE monitors',
      'Continuous Modified Early Warning Score (MEWS) alerts',
      'Dynamic OT board managing surgeons, anesthesia & equipment',
      'Digital WHO surgical safety checklists and swab count seals'
    ],
    metrics: [
      { label: 'Telemetry Latency', value: '<500ms', detail: 'Ultra-low latency vital streaming' },
      { label: 'OT Idle Time', value: '-38%', detail: 'Optimized turnover between surgeries' },
      { label: 'Early Warnings', value: '4.2 hrs', detail: 'Pre-emptive decompensation alerts' }
    ],
    interactiveAction: {
      label: 'Simulate ICU Critical Telemetry Alert',
      description: 'Bed 12 monitor detects SpO2 drop to 88% and acute tachycardia.',
      outcomeTitle: 'MEWS Score Alert Dispatched',
      outcomeDetail: 'Urgent notification flashed on Central Nurse console and on-duty Intensivist smartphone. Blood gas order pre-populated.'
    }
  },
  {
    id: 'diagnostics',
    name: 'Cloud PACS & Lab LIS',
    shortTag: 'Diagnostics',
    headline: 'Web DICOM Viewer & Auto-Analyzer Interfacing',
    description: 'Connects lab analyzers directly to patient charts and provides zero-footprint web radiology review with automated panic alerts.',
    capabilities: [
      'FDA-cleared web DICOM viewer with 3D MPR and measurement tools',
      'Direct bidirectional interfacing with Roche, Abbott, and Sysmex',
      'Instant panic-value critical alerts sent directly to treating doctors',
      'Barcoded vacutainer tracking from phlebotomy to analyzer'
    ],
    metrics: [
      { label: 'Report Turnaround', value: '-48%', detail: 'Faster blood draw to digital signature' },
      { label: 'Transcription Errors', value: '0%', detail: 'Direct analyzer-to-EMR streaming' },
      { label: 'Image Load Velocity', value: '<1.2s', detail: 'Web-native compressed DICOM' }
    ],
    interactiveAction: {
      label: 'Simulate Critical Lab Value Cascade',
      description: 'Auto-analyzer reports Serum Potassium = 6.8 mEq/L (Severe Hyperkalemia).',
      outcomeTitle: 'Critical Value Protocol Executed',
      outcomeDetail: 'Audible nurse station alert sounded. Doctor notified with 1-tap acknowledgment. Immediate ECG and Calcium Gluconate protocol suggested.'
    }
  },
  {
    id: 'pharmacy',
    name: 'Smart Pharmacy & Inventory',
    shortTag: 'Supply Chain',
    headline: 'FEFO Expiry Shield & Bedside Barcode Scanning',
    description: 'Eliminates expired drug losses and dispensing errors through first-expiry first-out batch rotation and barcode bedside scanning.',
    capabilities: [
      'First-Expiry First-Out (FEFO) batch tracking preventing stock loss',
      'Bedside barcode scanning (Right Patient, Right Drug, Right Dose)',
      'Automated reorder triggers based on real-time consumption rates',
      'Direct integration with hospital billing and supplier purchase orders'
    ],
    metrics: [
      { label: 'Medicine Expiry Loss', value: '-84%', detail: 'Smart batch rotation & ward transfers' },
      { label: 'Dispense Accuracy', value: '99.99%', detail: 'Wristband + ampoule verification' },
      { label: 'Stockout Incidents', value: '<0.5%', detail: 'Predictive purchase order generation' }
    ],
    interactiveAction: {
      label: 'Simulate Reorder & Expiry Alert',
      description: 'Central pharmacy stock of Meropenem 1g reaches minimum safety buffer (20 vials).',
      outcomeTitle: 'Automated PO Drafted',
      outcomeDetail: 'Purchase order generated for approval. Batch expiring within 45 days automatically prioritized for active ICU usage.'
    }
  },
  {
    id: 'insurance',
    name: 'Cashless TPA & Insurance',
    shortTag: 'Revenue Cycle',
    headline: 'Instant Pre-Auth & AI Claim Denial Prevention',
    description: 'Accelerates cashless insurance processing with direct TPA connections, automated clinical dossiers, and pre-submission error audits.',
    capabilities: [
      'Real-time cashless pre-authorization with TPAs and PMJAY',
      'AI document auditor catches missing papers prior to claim dispatch',
      'Package rate leak prevention for consumables and procedures',
      'Automated patient co-pay and room-rent eligibility calculators'
    ],
    metrics: [
      { label: 'Claim Denial Rate', value: '3.1%', detail: 'Down from industry 14% average' },
      { label: 'Pre-Auth Approval TAT', value: '<25 min', detail: 'Automated clinical documentation' },
      { label: 'Revenue Recovery', value: '+14.6%', detail: 'Elimination of unbilled consumables' }
    ],
    interactiveAction: {
      label: 'Simulate AI Claim Pre-Audit',
      description: 'Scans surgical inpatient claim for Laparoscopic Cholecystectomy before dispatch to insurer.',
      outcomeTitle: 'Pre-Audit Passed: 0 Queries Expected',
      outcomeDetail: 'Histopathology biopsy, operative notes, and implant tags matched with CPT/ICD codes. Estimated approval probability: 98.7%.'
    }
  }
];

export const HospitalManagementPage: React.FC<HospitalManagementPageProps> = ({ onNavigate }) => {
  // Interactive Module Selector
  const [activeModule, setActiveModule] = useState<EcosystemModuleKey>('emr');
  const [simulationState, setSimulationState] = useState<Record<EcosystemModuleKey, boolean>>({
    emr: false,
    patient_flow: false,
    icu_ot: false,
    diagnostics: false,
    pharmacy: false,
    insurance: false
  });

  // Interactive ROI Calculator State
  const [beds, setBeds] = useState<number>(200);
  const [dailyOpd, setDailyOpd] = useState<number>(450);
  const [dischargeLagHours, setDischargeLagHours] = useState<number>(3.5);
  const [monthlyClaims, setMonthlyClaims] = useState<number>(350);

  // Form Submission State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    hospitalName: '',
    bedCount: '150-300',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    deploymentType: 'hybrid',
    primaryInterest: 'full_ecosystem'
  });

  // Unique accessible IDs for form controls
  const bedRangeId = useId();
  const opdRangeId = useId();
  const lagRangeId = useId();
  const claimsRangeId = useId();
  const hospitalNameId = useId();
  const bedCapacityId = useId();
  const contactPersonId = useId();
  const contactPhoneId = useId();
  const contactEmailId = useId();
  const hospitalCityId = useId();
  const deploymentTypeId = useId();
  const primaryInterestId = useId();

  const currentMod = MODULES.find(m => m.id === activeModule) || MODULES[0];

  const handleSimulateAction = (modId: EcosystemModuleKey) => {
    setSimulationState(prev => ({
      ...prev,
      [modId]: true
    }));
  };

  // Dynamic ROI Calculations
  // 1. Bed turnover improvement: saving (dischargeLagHours - 0.5) hours per discharge.
  // Assuming average length of stay 3.8 days, bed discharges per year ≈ (beds * 365 / 3.8) * occupancy (0.85)
  const annualDischarges = Math.round((beds * 365 / 3.8) * 0.85);
  const hoursSavedPerYear = Math.round(annualDischarges * Math.max(0, dischargeLagHours - 0.6));
  // Value of unlocked bed capacity (at an average contribution margin of ~$38 / ₹3,000 per operational bed hour gained)
  const annualBedRevenueGainUsd = Math.round((hoursSavedPerYear * 28) / 1000); // In thousands USD
  // Nurse time saved: 1.8 hrs per nurse shift * (beds / 4 nurses per shift) * 3 shifts * 365
  const nursingHoursSavedAnnual = Math.round(beds * 380);
  // Claim rejection reduction: standard rejection is 12%, reduced to 3.5%. Recovery on claim volume
  // average claim value $1,200
  const annualClaimRecoveryUsd = Math.round((monthlyClaims * 12 * 0.085 * 950) / 1000); // In thousands USD
  // Total Estimated Annual Savings & Value in Thousands USD
  const totalAnnualValueThousand = annualBedRevenueGainUsd + annualClaimRecoveryUsd + Math.round(beds * 0.8);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* 1. Hero Section: Strategic Positioning */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient clinical lighting glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-cyan/15 via-blue-500/10 to-violet/15 blur-3xl pointer-events-none rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Unboxed Metadata Discipline */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
            <span className="text-cyan font-semibold">VIMS MediCore Ecosystem</span>
            <span aria-hidden="true">·</span>
            <span>HL7 FHIR & ABDM Compliant</span>
            <span aria-hidden="true">·</span>
            <span>NABH 5th Edition Certified Architecture</span>
            <span aria-hidden="true">·</span>
            <span>On-Premise & Cloud Hybrid</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Mission & Core Value */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-light-text text-balance leading-[1.12]">
                Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-500 to-violet">Hospital Management</span> Ecosystem
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl text-balance">
                The complete operating system for modern hospitals: smart clinical EMR, fast bed turnover, live ICU telemetry sync, web PACS/LIS labs, and instant cashless insurance pre-auth.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="#interactive-modules"
                  className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan to-blue-600 text-white shadow-lg hover:shadow-cyan/25 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  Explore Modules
                </a>
                <a 
                  href="#roi-calculator"
                  className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all whitespace-nowrap"
                >
                  Calculate ROI
                </a>
                <a 
                  href="#schedule-demo"
                  className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-cyan hover:underline transition-all whitespace-nowrap flex items-center gap-1.5"
                >
                  <span>Request Pilot</span>
                  <ChevronRight size={16} />
                </a>
              </div>

              {/* Live Metric Strip (Tabular Figures) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <div className="text-2xl font-bold font-mono text-cyan tabular-nums">&lt;28 min</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Discharge Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400 tabular-nums">99.98%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Prescription Safety</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-violet tabular-nums">-42%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Claim Denials</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">99.99%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Offline Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Fidelity Command Center Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900 group">
                <img 
                  src="/src/assets/images/vims_hms_hero_command_center_1791531715345.jpg" 
                  alt="VIMS HMS Futuristic Hospital Command Center & Patient Flow Dashboard"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual HUD Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="space-y-1 w-full">
                    <div className="flex items-center justify-between text-xs text-white/90 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Activity size={14} className="text-cyan" />
                        <span>Central Telemetry · Active</span>
                      </span>
                      <span className="text-emerald-400 font-semibold">All Departments Synced</span>
                    </div>
                    <p className="text-xs text-white/70">
                      Real-time coordination for Inpatient, Emergency, ICU, Labs & Cashless Billing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Ecosystem Explorer */}
      <section id="interactive-modules" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan mb-2">
              Integrated Modules
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-light-text text-balance">
              Six Specialized Hospital Pillars
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Select a module to view its capabilities and test simulated clinical events.
            </p>
          </div>

          {/* Module Filter Tabs (Interactive Segmented Buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/60 overflow-x-auto mb-8 scrollbar-none">
            {MODULES.map((mod) => (
              <button
                key={mod.id}
                type="button"
                onClick={() => setActiveModule(mod.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                  activeModule === mod.id
                    ? 'bg-white dark:bg-slate-900 text-cyan shadow-sm border border-slate-200/60 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {mod.name}
              </button>
            ))}
          </div>

          {/* Active Module Showcase Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Left: Deep Feature Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {currentMod.shortTag} · Subsystem Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-light-text mt-1">
                  {currentMod.headline}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {currentMod.description}
                </p>
              </div>

              {/* Functional Capabilities Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Engineered Clinical Capabilities
                </div>
                <div className="space-y-2">
                  {currentMod.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-cyan flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subsystem KPIs */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {currentMod.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{m.label}</div>
                    <div className="text-lg sm:text-xl font-bold font-mono text-cyan tabular-nums mt-0.5">{m.value}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Sandbox & Simulated Action */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Cpu size={16} className="text-cyan" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      Live Subsystem Sandbox
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    Ready to execute
                  </span>
                </div>

                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Simulation Scenario:
                  </div>
                  <p>{currentMod.interactiveAction.description}</p>
                </div>

                {/* Simulation Output Area */}
                {simulationState[activeModule] ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-xl bg-cyan/10 border border-cyan/30 text-xs space-y-1.5"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-cyan text-sm">
                      <Sparkles size={16} />
                      <span>{currentMod.interactiveAction.outcomeTitle}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-mono text-[11px]">
                      {currentMod.interactiveAction.outcomeDetail}
                    </p>
                    <div className="pt-2 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                      <span>Telemetry Status: Verified</span>
                      <span className="text-emerald-500">Execution time: 38ms</span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="mt-4 p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-xs text-slate-400">
                    Click the trigger button below to run the live clinical event simulation.
                  </div>
                )}
              </div>

              {/* Action Trigger Button */}
              <button
                type="button"
                onClick={() => handleSimulateAction(activeModule)}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan via-blue-600 to-violet text-white shadow-md hover:shadow-cyan/20 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Activity size={16} />
                <span>{currentMod.interactiveAction.label}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual Gallery & Real-World Operations Spotlight */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-navy/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan mb-2">
              Clinical Workstations
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-light-text">
              Built for Fast Daily Hospital Workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Visual 1: Doctor with AI Tablet */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img 
                  src="/src/assets/images/vims_hms_smart_clinical_ai_1791531732305.jpg" 
                  alt="Doctor with VIMS AI Clinical Tablet Assistant"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-mono">
                    <span className="bg-cyan/20 text-cyan px-2 py-0.5 rounded-md font-semibold">Bedside Rounds</span>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-light-text">
                  Mobile Clinical Rounds & EMR
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fast access to patient vitals, radiology scans, and 1-tap electronic discharge signing on any tablet or smartphone.
                </p>
              </div>
            </div>

            {/* Visual 2: Pathology & Radiology PACS Station */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img 
                  src="/src/assets/images/vims_hms_pacs_diagnostic_lab_1791531745535.jpg" 
                  alt="Radiology & Pathology Lab Workstation with VIMS HMS Diagnostic LIS"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-mono">
                    <span className="bg-violet/30 text-violet px-2 py-0.5 rounded-md font-semibold">Direct Lab Sync</span>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-light-text">
                  Automated Lab & Cloud PACS
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Hematology and biochemistry auto-analyzers stream results directly to charts. Web DICOM viewer loads scans in under 1.2s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Hospital Bed Turnover & ROI Calculator */}
      <section id="roi-calculator" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan mb-2">
              ROI & Impact Simulator
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-light-text text-balance">
              Hospital Operations & Yield Calculator
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Adjust your facility metrics to estimate bed capacity gained and annual claim recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Input Controls */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-light-text flex items-center gap-2">
                <Sliders size={18} className="text-cyan" />
                <span>Facility Parameters</span>
              </h3>

              {/* 1. Operational Beds */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <label htmlFor={bedRangeId} className="text-slate-700 dark:text-slate-300">
                    Operational Inpatient Beds:
                  </label>
                  <span className="font-mono text-cyan font-bold tabular-nums">{beds} Beds</span>
                </div>
                <input
                  id={bedRangeId}
                  type="range"
                  min="30"
                  max="1000"
                  step="10"
                  value={beds}
                  onChange={(e) => setBeds(Number(e.target.value))}
                  className="w-full accent-cyan cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>30 (Community)</span>
                  <span>500 (Tertiary)</span>
                  <span>1000 (Super-Specialty)</span>
                </div>
              </div>

              {/* 2. Daily OPD Footfall */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <label htmlFor={opdRangeId} className="text-slate-700 dark:text-slate-300">
                    Daily Outpatient (OPD) Visits:
                  </label>
                  <span className="font-mono text-blue-600 dark:text-blue-400 font-bold tabular-nums">{dailyOpd} Patients/day</span>
                </div>
                <input
                  id={opdRangeId}
                  type="range"
                  min="50"
                  max="2500"
                  step="25"
                  value={dailyOpd}
                  onChange={(e) => setDailyOpd(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>50 visits</span>
                  <span>1,000 visits</span>
                  <span>2,500 visits</span>
                </div>
              </div>

              {/* 3. Current Discharge Lag Time */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <label htmlFor={lagRangeId} className="text-slate-700 dark:text-slate-300">
                    Current Discharge Turnaround Time:
                  </label>
                  <span className="font-mono text-orange font-bold tabular-nums">{dischargeLagHours.toFixed(1)} Hours</span>
                </div>
                <input
                  id={lagRangeId}
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={dischargeLagHours}
                  onChange={(e) => setDischargeLagHours(Number(e.target.value))}
                  className="w-full accent-orange cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>1.0 hr</span>
                  <span>3.5 hrs (Average)</span>
                  <span>6.0 hrs (High Delay)</span>
                </div>
              </div>

              {/* 4. Monthly Insurance Claims */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <label htmlFor={claimsRangeId} className="text-slate-700 dark:text-slate-300">
                    Monthly Cashless/TPA Claims:
                  </label>
                  <span className="font-mono text-violet font-bold tabular-nums">{monthlyClaims} Claims/mo</span>
                </div>
                <input
                  id={claimsRangeId}
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={monthlyClaims}
                  onChange={(e) => setMonthlyClaims(Number(e.target.value))}
                  className="w-full accent-violet cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>50 claims</span>
                  <span>500 claims</span>
                  <span>1,500 claims</span>
                </div>
              </div>
            </div>

            {/* Right: Calculated Value Output */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-navy text-white shadow-xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan">
                    Projected Annual Financial Impact
                  </div>
                  <h4 className="text-xl font-bold text-white mt-0.5">
                    Quantified Hospital Yield
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                  ROI in &lt;3.8 Mo
                </span>
              </div>

              {/* Top Hero Stat */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-slate-400 uppercase font-mono">
                  Estimated Net Annual Value Realized
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-cyan tabular-nums mt-1">
                  ${totalAnnualValueThousand.toLocaleString()}k+ <span className="text-sm font-normal text-slate-400">/ year</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Calculated from recovered bed capacity, eliminated claim rejections, and reclaimed clinical nursing hours.
                </p>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">Bed Turnaround Gain</div>
                  <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums mt-0.5">
                    +{hoursSavedPerYear.toLocaleString()} Bed-Hours
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Faster discharge unlocks ~${annualBedRevenueGainUsd}k capacity
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">Claim Denial Recovery</div>
                  <div className="text-lg font-bold font-mono text-violet tabular-nums mt-0.5">
                    +${annualClaimRecoveryUsd}k Recovered
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Eliminates pre-auth discrepancies
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">Clinical Nursing Time Saved</div>
                  <div className="text-lg font-bold font-mono text-cyan tabular-nums mt-0.5">
                    {nursingHoursSavedAnnual.toLocaleString()} Hours/Year
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Automated charting & vitals sync
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">OPD Wait Time Reduction</div>
                  <div className="text-lg font-bold font-mono text-orange tabular-nums mt-0.5">
                    -52% Average Wait
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Dynamic slot queues & WhatsApp updates
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="#schedule-demo"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan to-blue-500 text-white hover:opacity-95 transition-all shadow-md"
                >
                  Schedule an Executive Facility Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Standards, Compliance & Architecture Matrix */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan mb-2">
              Compliance & Security
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-light-text">
              Certified for Indian & Global Healthcare Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-cyan/10 text-cyan flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-light-text">
                ABDM & Ayushman Bharat
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Full Milestone 1, 2, and 3 readiness for ABHA creation and digital health exchange (HIP/HIU).
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Lock size={20} />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-light-text">
                HIPAA & ISO 27001 Security
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                AES-256 encryption at rest, TLS 1.3 in transit, and granular role-based permissions.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-violet/10 text-violet flex items-center justify-center">
                <Share2 size={20} />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-light-text">
                HL7 FHIR & DICOM 3.0
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Seamless data exchange with third-party EHRs, lab auto-analyzers, and radiology PACS.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Server size={20} />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-light-text">
                Hybrid Edge Reliability
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Local offline resilience for wards and OTs during network outages, with automatic cloud sync.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Pilot / Demonstration Request Form */}
      <section id="schedule-demo" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan mb-2">
              Facility Pilot & Onboarding
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-light-text">
              Request a Guided Hospital Ecosystem Demo
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
              Schedule a personalized walkthrough with our engineering team configured for your hospital size.
            </p>
          </div>

          <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-lg">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-light-text">
                  Demonstration Request Confirmed!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-cyan">{formData.contactPerson || 'Doctor / Administrator'}</span>. Our healthcare solutions architect will contact you within 4 business hours to schedule your personalized HMS sandbox.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <a
                    href={COMPANY_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-2"
                  >
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Facility Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Hospital Name */}
                  <div>
                    <label htmlFor={hospitalNameId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Hospital / Healthcare Institution Name *
                    </label>
                    <input
                      id={hospitalNameId}
                      type="text"
                      required
                      placeholder="e.g. Apollo / Fortis / City Multi-Specialty"
                      value={formData.hospitalName}
                      onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Bed Capacity */}
                  <div>
                    <label htmlFor={bedCapacityId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Operational Bed Capacity
                    </label>
                    <select
                      id={bedCapacityId}
                      value={formData.bedCount}
                      onChange={(e) => setFormData({ ...formData, bedCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan text-slate-900 dark:text-white"
                    >
                      <option value="under-50">Under 50 Beds (Clinic / Daycare)</option>
                      <option value="50-150">50 - 150 Beds (Community Hospital)</option>
                      <option value="150-300">150 - 300 Beds (Multi-Specialty)</option>
                      <option value="300-600">300 - 600 Beds (Tertiary Care)</option>
                      <option value="600-plus">600+ Beds (Multi-Chain / Medical College)</option>
                    </select>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label htmlFor={contactPersonId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Medical Director / Administrator Name *
                    </label>
                    <input
                      id={contactPersonId}
                      type="text"
                      required
                      placeholder="Dr. / Mr. / Ms. Full Name"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Contact Phone */}
                  <div>
                    <label htmlFor={contactPhoneId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Official Phone / WhatsApp *
                    </label>
                    <input
                      id={contactPhoneId}
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor={contactEmailId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Official Institutional Email *
                    </label>
                    <input
                      id={contactEmailId}
                      type="email"
                      required
                      placeholder="administrator@hospital.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* City & State */}
                  <div>
                    <label htmlFor={hospitalCityId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      City / Region *
                    </label>
                    <input
                      id={hospitalCityId}
                      type="text"
                      required
                      placeholder="e.g. Bangalore, Chennai, Mumbai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {/* Deployment Choice */}
                  <div>
                    <label htmlFor={deploymentTypeId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Preferred Deployment Model
                    </label>
                    <select
                      id={deploymentTypeId}
                      value={formData.deploymentType}
                      onChange={(e) => setFormData({ ...formData, deploymentType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan text-slate-900 dark:text-white"
                    >
                      <option value="hybrid">Hybrid Edge (Local Server + Cloud Backup - Recommended)</option>
                      <option value="cloud">100% Secure Healthcare Cloud (AWS/Azure HIPAA)</option>
                      <option value="on-prem">Strictly On-Premise Air-Gapped Server</option>
                    </select>
                  </div>

                  {/* Primary Interest */}
                  <div>
                    <label htmlFor={primaryInterestId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Priority Focus
                    </label>
                    <select
                      id={primaryInterestId}
                      value={formData.primaryInterest}
                      onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan text-slate-900 dark:text-white"
                    >
                      <option value="full_ecosystem">Complete End-to-End Hospital Ecosystem</option>
                      <option value="emr_scribe">AI Clinical EMR & Voice Scribe</option>
                      <option value="bed_triage">Bed Turnover & Smart OPD/IPD Queue</option>
                      <option value="icu_ot">ICU Telemetry & OT Scheduling</option>
                      <option value="pacs_lis">Cloud PACS & Laboratory LIS Integration</option>
                      <option value="insurance">Cashless TPA Pre-Auth & RCM Engine</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan via-blue-600 to-violet text-white shadow-lg hover:shadow-cyan/25 hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {formLoading ? (
                      <span>Initializing Secure Channel...</span>
                    ) : (
                      <>
                        <Building2 size={18} />
                        <span>Schedule Custom Hospital Ecosystem Demo</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-3 font-mono">
                    All discussions under strict bilateral NDA · Custom data migration available from legacy HMS
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. Bottom Contact Callout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-navy-light/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-light-text">
              Have existing legacy hospital data to migrate?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Our automated migration pipelines ingest legacy SQL, HL7, and CSV records with zero clinical downtime.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${COMPANY_CONTACT.email}?subject=VIMS%20HMS%20Inquiry`}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              Email Us Directly
            </a>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalManagementPage;
