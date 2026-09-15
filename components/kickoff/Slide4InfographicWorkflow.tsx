import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Workflow, 
  FolderLock, 
  Sliders, 
  Cpu, 
  ShieldCheck, 
  FileSpreadsheet, 
  Scale, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Factory, 
  Users, 
  FileCheck,
  TrendingDown
} from 'lucide-react';

interface Slide4InfographicWorkflowProps {
  isDarkMode: boolean;
}

interface WorkflowStage {
  stepNumber: string;
  stageTitle: string;
  timeline: string;
  icon: string;
  headline: string;
  deliverables: string[];
  stakeholders: string;
  qualityGate: string;
}

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    stepNumber: '01',
    stageTitle: 'Kickoff & Data Intake',
    timeline: 'Days 1 - 3',
    icon: 'FolderLock',
    headline: 'Secure ISO-compliant cloud vault setup, bilateral NDA execution, and 3D CAD/2D print ingestion.',
    deliverables: [
      'Bilateral mutual NDA execution',
      'Encrypted cloud project workspace',
      'Completeness audit on 3D CAD & 2D prints',
      'Initial Part Complexity tier assignment'
    ],
    stakeholders: 'Client Sourcing Lead + VIMS Delivery SPOC',
    qualityGate: 'Data Sanity & Geometry Checkpoint Passed'
  },
  {
    stepNumber: '02',
    stageTitle: 'Phase 0 Pilot Calibration',
    timeline: 'Days 4 - 7',
    icon: 'Sliders',
    headline: 'Pre-kickoff calibration on 5 to 10 sample parts to align on material indices and wage burdens.',
    deliverables: [
      '5-10 Pilot Benchmark Parts execution',
      'LME / Platts raw material index alignment',
      'Regional machine $/hr and labor wage sign-off',
      'Tooling scrap & runner policy agreement'
    ],
    stakeholders: 'VIMS Lead Cost Engineer + Client Technical Lead',
    qualityGate: 'Methodology Calibration Protocol Approved'
  },
  {
    stepNumber: '03',
    stageTitle: 'Parametric Clean-Sheet Modeling',
    timeline: 'Continuous Sprints',
    icon: 'Cpu',
    headline: 'First-principles manufacturing physics modeling, tonnage calculation, and bottom-up cost build-up.',
    deliverables: [
      'Raw material net vs gross blank optimization',
      'Empirical machine tonnage & cycle second simulation',
      'Direct operator labor headcount calculation',
      'Secondary surface plating & heat treatment costing'
    ],
    stakeholders: 'VIMS Commodity Cost Specialists (Sheet/Plastics/Casting)',
    qualityGate: 'Thermodynamic Cycle Simulation Validated'
  },
  {
    stepNumber: '04',
    stageTitle: 'Senior Toolmaker & DFM Audit',
    timeline: 'Prior to Release',
    icon: 'ShieldCheck',
    headline: 'Independent quality gate where a senior tool designer (15+ yrs exp) audits manufacturing reality.',
    deliverables: [
      'Tooling cavitation feasibility check',
      'Parting line, draft angle & side action review',
      'Scrap skeleton & runner optimization',
      'DFM engineering cost-down recommendations'
    ],
    stakeholders: 'VIMS Senior Tool Design Lead (15+ Yrs Industry Exp)',
    qualityGate: 'Zero-Hallucination Toolmaker Sign-Off'
  },
  {
    stepNumber: '05',
    stageTitle: 'Dossier Release & Quote Reconciliation',
    timeline: 'Weekly Delivery',
    icon: 'FileSpreadsheet',
    headline: '100% transparent unlocked Excel dossier delivery with side-by-side supplier quote variance analysis.',
    deliverables: [
      '100% Unlocked Excel Dossiers with live formulas',
      'Side-by-side quote reconciliation matrices',
      'Clear cent-by-cent price gap identification',
      'Executive summary presentation deck'
    ],
    stakeholders: 'Client Procurement Director & Sourcing Managers',
    qualityGate: 'Formal Dossier Acceptance & Delivery Review'
  },
  {
    stepNumber: '06',
    stageTitle: 'Fact-Based Supplier Negotiation',
    timeline: 'Commercial Sprints',
    icon: 'Scale',
    headline: 'Empower client sourcing teams with incontrovertible engineering dossiers to eliminate price friction.',
    deliverables: [
      'Supplier negotiation battle-card briefing',
      'Collaborative supplier DFM workshops',
      'Fair vendor margin protection (no vendor squeeze)',
      'Agreed cost-down revisions locked in contracts'
    ],
    stakeholders: 'Client Category Sourcing Lead + Tier-1 Vendors',
    qualityGate: 'Commercial Purchase Order Price Alignment'
  },
  {
    stepNumber: '07',
    stageTitle: 'Series Production & Clawback Lock-In',
    timeline: 'Series Production',
    icon: 'Factory',
    headline: 'Smooth transition into SOP, annual index auditing, and permanent EBITDA cost clawback realization.',
    deliverables: [
      'SOP ramp-up cost stabilization verification',
      'Quarterly raw material index pass-through audit',
      'Tooling life stroke tracking & maintenance reserves',
      'Annualized realized savings audit report'
    ],
    stakeholders: 'Plant Operations Lead + Financial Controller',
    qualityGate: '100% Value Realization Audit Passed'
  }
];

export const Slide4InfographicWorkflow: React.FC<Slide4InfographicWorkflowProps> = ({ isDarkMode }) => {
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(0);

  const selectedStage = WORKFLOW_STAGES[selectedStageIdx];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold mb-2">
            <Workflow size={13} />
            <span>SLIDE 04 // PROJECT EXECUTION INFOGRAPHIC & LIFECYCLE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-poppins text-white tracking-tight leading-tight">
            From Project Kickoff to Series Production
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl">
            A disciplined, infographical 7-stage delivery methodology ensuring zero engineering hallucination, rigorous toolmaker peer review, and concrete commercial savings clawback.
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 shrink-0">
          <Clock size={16} className="text-cyan" />
          <div className="text-left">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Standard Project SLA</div>
            <div className="text-xs font-bold text-white">48 - 72h Per Batch Sprint</div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL INFOGRAPHIC PIPELINE STEPPER (Interactive 7 Milestone Nodes) */}
      <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl overflow-x-auto">
        <div className="min-w-[850px] relative pb-2">
          {/* Connecting Track Line */}
          <div className="absolute top-6 left-8 right-8 h-1 bg-slate-800 -z-0" />
          <div 
            className="absolute top-6 left-8 h-1 bg-gradient-to-r from-cyan via-violet to-emerald-400 -z-0 transition-all duration-300" 
            style={{ width: `${(selectedStageIdx / (WORKFLOW_STAGES.length - 1)) * 92}%` }}
          />

          <div className="grid grid-cols-7 gap-2 relative z-10">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const isSelected = selectedStageIdx === idx;
              const isPassed = selectedStageIdx > idx;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedStageIdx(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circle Node */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                    isSelected
                      ? 'bg-cyan text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)] scale-110 ring-4 ring-cyan/20'
                      : isPassed
                        ? 'bg-violet-600 text-white border border-violet-400'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700'
                  }`}>
                    {stage.stepNumber}
                  </div>

                  <div className="mt-2.5 space-y-0.5">
                    <div className={`text-xs font-bold transition-colors line-clamp-1 ${
                      isSelected ? 'text-cyan' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {stage.stageTitle}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">
                      {stage.timeline}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* DETAILED ACTIVE STAGE CARD INFOGRAPHIC BREAKDOWN */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        
        {/* Stage Hero Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan/15 text-cyan border border-cyan/30 flex items-center justify-center font-black text-2xl font-mono shrink-0 shadow-lg">
              {selectedStage.stepNumber}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-cyan uppercase font-bold bg-cyan/10 px-2 py-0.5 rounded border border-cyan/30">
                  Lifecycle Phase {selectedStage.stepNumber} of 07
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Timeline: {selectedStage.timeline}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-white mt-1">
                {selectedStage.stageTitle}
              </h2>
              <p className="text-xs text-slate-300 mt-0.5 max-w-2xl">
                {selectedStage.headline}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-right shrink-0">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Stage Quality Gate</div>
            <div className="text-xs font-bold text-emerald-400 mt-0.5 flex items-center gap-1.5 justify-end">
              <CheckCircle2 size={13} />
              <span>{selectedStage.qualityGate}</span>
            </div>
          </div>
        </div>

        {/* 3 Detail Columns: Deliverables, Governance & Commercial Value */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Column 1: Key Deliverables */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan font-bold uppercase pb-2 border-b border-slate-850">
              <FileCheck size={14} />
              <span>Concrete Deliverables:</span>
            </div>
            <ul className="space-y-2">
              {selectedStage.deliverables.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 size={13} className="text-cyan mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Stakeholders & Roles */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-bold uppercase pb-2 border-b border-slate-850">
              <Users size={14} />
              <span>Operational Stakeholders:</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Responsible Team:</div>
              <div className="text-xs font-bold text-white mt-1">
                {selectedStage.stakeholders}
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every stage has an assigned Single Point of Contact (SPOC) ensuring real-time communication via weekly burndown syncs and secure tickets.
            </p>
          </div>

          {/* Column 3: Commercial & Technical Impact */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase pb-2 border-b border-slate-850">
              <TrendingDown size={14} />
              <span>Client Commercial Impact:</span>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Eliminates 15% - 25% supplier quote padding</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Zero supplier hostility through collaborative DFM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Continuous quarterly index alignment locks in gains</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
