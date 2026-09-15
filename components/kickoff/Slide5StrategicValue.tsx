import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_CONTACT } from '../../constants';
import { Page } from '../../types';
import { 
  ShieldCheck, 
  TrendingDown, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  FolderLock, 
  FileSpreadsheet, 
  Users, 
  Award,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface Slide5StrategicValueProps {
  isDarkMode: boolean;
  onNavigate?: (page: Page) => void;
}

export const Slide5StrategicValue: React.FC<Slide5StrategicValueProps> = ({ isDarkMode, onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold mb-2">
            <Award size={13} />
            <span>SLIDE 05 // STRATEGIC VALUE & DAY-1 KICKOFF ROADMAP</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-poppins text-white tracking-tight leading-tight">
            Strategic Value Delivery & Action Plan
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl">
            Why leading procurement and engineering leaders partner with VIMS for should-costing: instant capacity scaling, 100% defensible physics, and proven double-digit EBITDA margin expansion.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-gradient-to-r from-cyan/15 to-violet/15 p-3 rounded-2xl border border-cyan/40 shrink-0">
          <div className="text-right">
            <div className="text-[10px] font-mono text-cyan uppercase font-bold">Standard Value Impact</div>
            <div className="text-sm font-black text-white font-mono">15% - 25% Direct Clawback</div>
          </div>
        </div>
      </div>

      {/* 3 Core Value Multiplier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan/50 transition-all space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/30 text-cyan flex items-center justify-center">
            <Zap size={24} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-poppins">Instant Expert Scale</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero recruiting or ramp-up delays. Gain instant access to our senior tooling leads and commodity specialists across all 6 manufacturing domains.
            </p>
          </div>
          <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-cyan shrink-0" />
              <span>Dedicated SPOC Delivery Manager</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-cyan shrink-0" />
              <span>Strict 48h - 72h turnaround SLAs</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-cyan shrink-0" />
              <span>Plug-and-play procurement integration</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-violet-500/50 transition-all space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-violet-400/10 border border-violet-500/30 text-violet-400 flex items-center justify-center">
            <ShieldCheck size={24} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-poppins">100% Defensible Physics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No black-box guesses or arbitrary percentage cuts. Every should-cost figure is backed by machine tonnage, cycle seconds, and LME scrap credits.
            </p>
          </div>
          <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-violet-400 shrink-0" />
              <span>Senior 15+ yr toolmaker peer audit</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-violet-400 shrink-0" />
              <span>Fully unlocked mathematical Excel models</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-violet-400 shrink-0" />
              <span>Suppliers cannot dispute line-item physics</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
            <TrendingDown size={24} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-poppins">Measurable EBITDA Margin</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Generate direct, audited procurement savings that drop straight to your bottom line, while preserving healthy, win-win relationships with key vendors.
            </p>
          </div>
          <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span>Average 18.4% realized price reduction</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span>Collaborative DFM for supplier cost-down</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span>Contractual indexing safeguards against inflation</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Day-1 Action Roadmap Checklist */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        <div>
          <div className="text-xs font-mono text-cyan font-bold uppercase tracking-wider">
            Clear Day-1 Kickoff Activation Checklist
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-poppins text-white mt-1">
            How We Initiate Your Project Within 24 Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-cyan/15 text-cyan flex items-center justify-center font-mono font-bold text-xs">
              01
            </div>
            <div className="text-sm font-bold text-white">Execute Mutual NDA</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sign bilateral confidentiality agreement and establish your dedicated encrypted project folder.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-cyan/15 text-cyan flex items-center justify-center font-mono font-bold text-xs">
              02
            </div>
            <div className="text-sm font-bold text-white">Share 5-10 Pilot Parts</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Upload initial sample parts spanning Simple, Medium, and Complex tiers along with 2D prints and volumes.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-cyan/15 text-cyan flex items-center justify-center font-mono font-bold text-xs">
              03
            </div>
            <div className="text-sm font-bold text-white">Calibration Review</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Conduct a 60-minute technical session to review pilot models, fine-tune scrap rules, and validate wage scales.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-cyan/15 text-cyan flex items-center justify-center font-mono font-bold text-xs">
              04
            </div>
            <div className="text-sm font-bold text-white">Scale Full Portfolio</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Begin recurring sprint deliveries of unlocked dossiers and start armed supplier negotiation support.
            </p>
          </div>

        </div>

        {/* Kickoff Call to Action Strip */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Ready to calibrate your first batch? Let's book your project kickoff strategy session.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.open(COMPANY_CONTACT.bookingUrl, '_blank')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan via-blue-600 to-violet hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl flex items-center gap-2 transition-all"
            >
              <Calendar size={16} />
              <span>Schedule Project Kickoff Session</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
