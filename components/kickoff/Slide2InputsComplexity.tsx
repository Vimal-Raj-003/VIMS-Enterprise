import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPLEXITY_TIERS, ComplexityTier } from './kickoffData';
import { 
  Sliders, 
  Calendar, 
  Globe, 
  Box, 
  FileText, 
  CheckCircle2, 
  Sun, 
  Moon, 
  Sparkles, 
  Activity, 
  Zap,
  Maximize2
} from 'lucide-react';

interface Slide2InputsComplexityProps {
  isDarkMode: boolean;
}

export const Slide2InputsComplexity: React.FC<Slide2InputsComplexityProps> = ({ isDarkMode }) => {
  const [nightModeInspection, setNightModeInspection] = useState<boolean>(true);
  const [activeTierIndex, setActiveTierIndex] = useState<number>(1); // Medium tier default

  const activeTier = COMPLEXITY_TIERS[activeTierIndex];

  return (
    <div className="space-y-6">
      {/* Slide Header with Day/Night Blueprint Toggle */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold mb-2">
            <Sliders size={13} />
            <span>SLIDE 02 // KICKOFF DATA INTAKE & PART COMPLEXITY TRIAGE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-poppins text-white tracking-tight leading-tight">
            Kickoff Measure Inputs & Complexity Matrix
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl">
            Prerequisites for initiating a should-costing project, coupled with a 3-tier complexity triage system with realistic part references and pilot benchmarking.
          </p>
        </div>

        {/* Day / Night Inspection Visual Mode Toggle */}
        <div className="flex items-center gap-3 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shrink-0">
          <span className="text-[11px] font-mono text-slate-400 pl-2 hidden sm:inline">
            Blueprint View:
          </span>
          <button
            onClick={() => setNightModeInspection(false)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              !nightModeInspection 
                ? 'bg-amber-400 text-slate-950 shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sun size={14} />
            <span>Day Technical</span>
          </button>
          <button
            onClick={() => setNightModeInspection(true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              nightModeInspection 
                ? 'bg-cyan text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Moon size={14} />
            <span>Night Blueprint</span>
          </button>
        </div>
      </div>

      {/* 4 Core Measure Input Requirements for Kickoff Initiation */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>Core Measure Inputs Required from Client at Kickoff</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Standard Pilot Benchmark: 5 to 10 Sample Parts First
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan/50 transition-all space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan flex items-center justify-center font-bold text-xs font-mono">
                01
              </div>
              <Calendar size={16} className="text-cyan" />
            </div>
            <h3 className="text-sm font-bold text-white">Annual Volumes & Batch Sizes</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Estimated Annual Usage (EAU), order batch frequencies, and minimum run quantities. Dictates mold cavitation (1-cavity vs 16-cavity) and press automation.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-violet-500/50 transition-all space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-violet/10 border border-violet-500/30 text-violet-400 flex items-center justify-center font-bold text-xs font-mono">
                02
              </div>
              <Globe size={16} className="text-violet-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Regional Plant Sourcing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Target manufacturing country / province (India, USA, Mexico, EU, SE Asia). Sets local electricity kVA tariffs, direct operator wages, and machine burden $/hr.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-emerald/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
                03
              </div>
              <Box size={16} className="text-emerald-400" />
            </div>
            <h3 className="text-sm font-bold text-white">3D CAD Geometry Models</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Native 3D models (.STEP, .IGES, Parasolid .x_t). Used to compute net mass, projected surface area, core-cavity parting lines, and draw depths.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 transition-all space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-orange/10 border border-orange-500/30 text-orange-400 flex items-center justify-center font-bold text-xs font-mono">
                04
              </div>
              <FileText size={16} className="text-orange-400" />
            </div>
            <h3 className="text-sm font-bold text-white">2D Engineering Prints</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              PDF/DWG blueprints specifying Critical-to-Quality (CTQ) datums, GD&T tolerances, heat-treat hardness (HRC), surface plating microns, and inspection specs.
            </p>
          </div>

        </div>
      </div>

      {/* Part Complexity Classification Framework with Interactive Cards & Real Part Images */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Part Complexity Classification Framework</span>
              <span className="text-xs font-mono text-cyan bg-cyan/10 px-2.5 py-0.5 rounded-full border border-cyan/30">
                Pre-Costing Allocation
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Select a complexity tier to view its manufacturing physics, tolerance regimes, and practical part reference.
            </p>
          </div>

          {/* Tier Quick Switcher Pills */}
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {COMPLEXITY_TIERS.map((tier, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTierIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTierIndex === idx 
                    ? tier.color === 'emerald'
                      ? 'bg-emerald-500 text-slate-950 font-black'
                      : tier.color === 'cyan'
                        ? 'bg-cyan text-slate-950 font-black'
                        : 'bg-violet-400 text-slate-950 font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tier.tier}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Tier Comparative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPLEXITY_TIERS.map((tier, idx) => {
            const isSelected = activeTierIndex === idx;
            const isEmerald = tier.color === 'emerald';
            const isCyan = tier.color === 'cyan';

            return (
              <motion.div 
                key={idx}
                onClick={() => setActiveTierIndex(idx)}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  nightModeInspection
                    ? isSelected 
                      ? isEmerald 
                        ? 'bg-slate-900/90 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400' 
                        : isCyan 
                          ? 'bg-slate-900/90 border-cyan shadow-[0_0_25px_rgba(34,211,238,0.25)] ring-1 ring-cyan' 
                          : 'bg-slate-900/90 border-violet-400 shadow-[0_0_25px_rgba(167,139,250,0.25)] ring-1 ring-violet-400'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                    : isSelected
                      ? 'bg-slate-900 border-amber-400 shadow-xl'
                      : 'bg-slate-950 border-slate-800'
                }`}
              >
                {/* Visual Part Reference Image with Night Blueprint Overlay */}
                <div className="w-full h-36 rounded-2xl overflow-hidden mb-4 relative group">
                  <img 
                    src={tier.imageUrl} 
                    alt={tier.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Night Blueprint Technical Wireframe Overlay */}
                  {nightModeInspection && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-cyan-950/30 to-transparent mix-blend-screen opacity-70" />
                  )}

                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[10px] font-mono font-bold text-white flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${isEmerald ? 'bg-emerald-400' : isCyan ? 'bg-cyan' : 'bg-violet-400'}`} />
                    <span>{tier.tier} Reference</span>
                  </div>

                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/90 text-[10px] font-mono text-cyan border border-slate-800">
                    {tier.turnaround}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                      isEmerald 
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30' 
                        : isCyan 
                          ? 'bg-cyan/10 text-cyan border border-cyan/30' 
                          : 'bg-violet-950/60 text-violet-400 border border-violet-500/30'
                    }`}>
                      {tier.name}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {tier.operationsCount}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5 font-mono text-[11px]">
                    <div className="text-slate-300 flex justify-between">
                      <span className="text-slate-500">Tolerances:</span>
                      <span className="font-bold text-white">{tier.tolerances}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Representative Scope:</div>
                    <ul className="space-y-1">
                      {tier.characteristics.map((c, cIdx) => (
                        <li key={cIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                          <CheckCircle2 size={12} className="text-cyan mt-0.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sample Part Examples */}
                <div className="pt-3 mt-4 border-t border-slate-850">
                  <div className="text-[10px] font-mono text-slate-500 uppercase mb-1.5">Sample Parts:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {tier.examples.map((ex, exIdx) => (
                      <span key={exIdx} className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pilot Benchmark Calibration Protocol Strip */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan/15 via-slate-900 to-violet/15 border border-cyan/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan/20 text-cyan flex items-center justify-center shrink-0 border border-cyan/40">
            <Activity size={20} />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
              <span>Sample Pilot Calibration Protocol Prior to Full Batch Rollout</span>
              <span className="text-[10px] font-mono bg-cyan text-slate-950 px-2 py-0.5 rounded font-black">
                Phase 0 Milestone
              </span>
            </div>
            <div className="text-xs text-slate-300 mt-0.5">
              We execute 5 to 10 sample benchmark parts across Simple, Medium, and Complex tiers to calibrate raw material indices, plant wage scales, and tooling scrap policies.
            </div>
          </div>
        </div>
        <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-right shrink-0">
          <div className="text-[10px] font-mono text-slate-400 uppercase">Turnaround Time</div>
          <div className="text-xs font-mono font-bold text-cyan">48 Hours for Pilot Set</div>
        </div>
      </div>

    </div>
  );
};
