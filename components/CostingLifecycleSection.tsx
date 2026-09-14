import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scan, 
  FileCode2, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Calculator, 
  TrendingDown, 
  ShieldCheck, 
  Scale, 
  DollarSign, 
  Activity, 
  Cpu, 
  Sparkles, 
  Gauge, 
  Scissors, 
  FileCheck,
  ChevronRight,
  Flame,
  Layers,
  Box,
  Wrench,
  Check,
  Zap,
  FileText
} from 'lucide-react';

interface CostingLifecycleSectionProps {
  onBookAudit?: () => void;
}

export type LifecycleStepId = 'data_intake' | 'should_cost' | 'supplier_negotiation';

interface LifecycleStep {
  id: LifecycleStepId;
  stepNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  durationSec: number;
}

const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    id: 'data_intake',
    stepNumber: '01',
    title: 'Data Intake & Geometry Feature Ingestion',
    subtitle: 'Extracting 3D CAD geometry, 2D GD&T tolerances, and material specifications',
    badge: 'Automated Ingestion',
    badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    durationSec: 6
  },
  {
    id: 'should_cost',
    stepNumber: '02',
    title: 'Physics-Based Should-Cost Calculation',
    subtitle: 'Clean-sheet bottom-up modeling: cycle thermodynamics, machine burden & scrap yield',
    badge: 'Thermodynamic & Kinematic Engine',
    badgeColor: 'text-violet bg-violet/10 border-violet/30',
    durationSec: 7
  },
  {
    id: 'supplier_negotiation',
    stepNumber: '03',
    title: 'Fact-Based Supplier Negotiation & Clawback',
    subtitle: 'Reconciling quote anomalies and closing the gap with transparent engineering proof',
    badge: 'Defensible Value Capture',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    durationSec: 6
  }
];

export const CostingLifecycleSection: React.FC<CostingLifecycleSectionProps> = ({ onBookAudit }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  // Sub-controls for Step 1 interactive demo
  const [activeCadSample, setActiveCadSample] = useState<'sheet_metal' | 'die_cast'>('sheet_metal');
  const [scanActive, setScanActive] = useState<boolean>(true);

  // Sub-controls for Step 2 interactive demo
  const [cycleSpeed, setCycleSpeed] = useState<number>(42);
  const [isSimulatingCalc, setIsSimulatingCalc] = useState<boolean>(false);

  // Sub-controls for Step 3 interactive demo
  const [negotiated, setNegotiated] = useState<boolean>(true);

  const currentStep = LIFECYCLE_STEPS[activeStepIndex];

  // Auto-playing sequence timer with progress bar
  useEffect(() => {
    if (!isPlaying) return;

    const intervalMs = 50;
    const totalDurationMs = currentStep.durationSec * 1000;
    const increment = (intervalMs / totalDurationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStepIndex((prevIdx) => (prevIdx + 1) % LIFECYCLE_STEPS.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, activeStepIndex, currentStep.durationSec]);

  const handleSelectStep = (index: number) => {
    setActiveStepIndex(index);
    setProgress(0);
  };

  const handleReset = () => {
    setActiveStepIndex(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan/15 to-violet/15 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-widest mb-4">
          <Activity size={14} className="animate-pulse" />
          <span>End-To-End Methodology</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold text-slate-900 dark:text-white tracking-tight">
          The Scientific Costing Lifecycle
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Experience how VIMS transforms raw 3D CAD files and RFQs into defensible, million-dollar direct material savings through three synchronized engineering phases.
        </p>
      </div>

      {/* Main Lifecycle Container */}
      <div className="rounded-4xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden relative text-white">
        {/* Ambient background glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan/10 blur-3xl pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet/10 blur-3xl pointer-events-none rounded-full"></div>

        {/* STEP CONTROLS & TIMELINE BAR */}
        <div className="p-4 sm:p-6 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
          {/* Step Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {LIFECYCLE_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx;

              return (
                <button
                  key={step.id}
                  onClick={() => handleSelectStep(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden group ${
                    isActive 
                      ? 'bg-slate-800/90 border-cyan/60 shadow-lg shadow-cyan/5 ring-1 ring-cyan/40' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  {/* Step Progress Fill Indicator (when active) */}
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan via-violet to-orange rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                        isActive 
                          ? 'bg-cyan text-slate-950 shadow-sm' 
                          : isPassed 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-slate-800 text-slate-400'
                      }`}>
                        {isPassed ? <Check size={12} /> : step.stepNumber}
                      </span>
                      <span className={`text-xs font-mono uppercase tracking-wider ${isActive ? 'text-cyan font-bold' : 'text-slate-400'}`}>
                        Phase {step.stepNumber}
                      </span>
                    </div>

                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${step.badgeColor}`}>
                      {step.badge}
                    </span>
                  </div>

                  <h3 className={`text-sm font-poppins font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {step.title.split('&')[0]}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {step.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Timeline Playback Bar */}
          <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-1.5"
                title={isPlaying ? 'Pause auto-cycle' : 'Play auto-cycle'}
              >
                {isPlaying ? <Pause size={14} className="text-cyan" /> : <Play size={14} className="text-emerald-400" />}
                <span className="hidden sm:inline text-[11px]">{isPlaying ? 'Pause Auto-Run' : 'Resume Sequence'}</span>
              </button>

              <button
                onClick={handleReset}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Restart from Phase 1"
              >
                <RotateCcw size={14} />
              </button>

              <span className="text-[11px] text-slate-500 hidden md:inline">
                Phase {activeStepIndex + 1} of 3 ({Math.round(progress)}%)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500">Auto-advances every ~6 seconds</span>
              <button
                onClick={() => handleSelectStep((activeStepIndex + 1) % LIFECYCLE_STEPS.length)}
                className="px-3 py-1.5 rounded-xl bg-cyan/10 hover:bg-cyan/20 text-cyan border border-cyan/30 flex items-center gap-1 text-[11px] font-semibold transition-all"
              >
                <span>Next Phase</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* STEP CONTENT & MICRO-ANIMATIONS STAGE */}
        <div className="p-6 sm:p-10 min-h-[520px] flex items-center">
          <AnimatePresence mode="wait">
            {/* ========================================================================= */}
            {/* STEP 1: DATA INTAKE & GEOMETRY EXTRACTION */}
            {/* ========================================================================= */}
            {activeStepIndex === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Interactive CAD Scanner Visualization */}
                <div className="lg:col-span-7">
                  <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 relative overflow-hidden shadow-inner">
                    {/* Header bar of the CAD viewport */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                        <span className="text-xs font-mono text-slate-400 ml-2">
                          VIMS_CAD_INGESTION_ENGINE_v4.2 // {activeCadSample === 'sheet_metal' ? 'CHASSIS_BRACKET.STEP' : 'POWERTRAIN_HOUSING.IGES'}
                        </span>
                      </div>

                      {/* Sample switcher */}
                      <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px]">
                        <button
                          onClick={() => setActiveCadSample('sheet_metal')}
                          className={`px-2.5 py-1 rounded-lg transition-all ${
                            activeCadSample === 'sheet_metal' ? 'bg-cyan text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Sheet Metal
                        </button>
                        <button
                          onClick={() => setActiveCadSample('die_cast')}
                          className={`px-2.5 py-1 rounded-lg transition-all ${
                            activeCadSample === 'die_cast' ? 'bg-cyan text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Die Casting
                        </button>
                      </div>
                    </div>

                    {/* CAD Wireframe Canvas Area */}
                    <div className="relative h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800/60 flex items-center justify-center overflow-hidden">
                      {/* Isometric Grid Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

                      {/* Animated Laser Scanning Beam */}
                      {scanActive && (
                        <motion.div
                          animate={{
                            top: ['0%', '100%', '0%']
                          }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className="absolute left-0 right-0 h-0.5 bg-cyan shadow-[0_0_15px_#22d3ee] z-20 pointer-events-none"
                        >
                          <div className="absolute right-4 -top-3 text-[9px] font-mono text-cyan bg-slate-950/80 px-2 py-0.5 rounded border border-cyan/40">
                            SURFACE LASER SCANNING...
                          </div>
                        </motion.div>
                      )}

                      {/* CAD Part Geometry Mock SVG */}
                      <div className="relative z-10 w-full max-w-xs sm:max-w-sm flex items-center justify-center">
                        {activeCadSample === 'sheet_metal' ? (
                          <svg viewBox="0 0 320 200" className="w-full h-auto drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                            {/* Sheet Metal Bracket Geometry */}
                            <polygon points="50,140 100,60 220,60 270,140" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 2" />
                            <polygon points="70,140 110,80 210,80 250,140" fill="#0e7490" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2.5" />
                            {/* Bending Flanges */}
                            <line x1="110" y1="80" x2="110" y2="40" stroke="#22d3ee" strokeWidth="2.5" />
                            <line x1="210" y1="80" x2="210" y2="40" stroke="#22d3ee" strokeWidth="2.5" />
                            <polygon points="110,40 210,40 210,80 110,80" fill="#38bdf8" fillOpacity="0.15" stroke="#22d3ee" strokeWidth="1.5" />
                            {/* Laser Cut Pierces & Holes */}
                            <circle cx="160" cy="110" r="18" fill="#0284c7" fillOpacity="0.3" stroke="#22d3ee" strokeWidth="2" />
                            <circle cx="95" cy="120" r="8" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                            <circle cx="225" cy="120" r="8" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                            {/* Bend Radius Annotations */}
                            <path d="M 100,70 A 10 10 0 0 1 120,70" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 320 200" className="w-full h-auto drop-shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                            {/* Die Cast Inverter Housing Geometry */}
                            <rect x="60" y="50" width="200" height="100" rx="16" fill="#7c2d12" fillOpacity="0.2" stroke="#f97316" strokeWidth="2" />
                            {/* Thermal Cooling Rib Fins */}
                            {[75, 95, 115, 135, 155, 175, 195, 215, 235].map((xPos, i) => (
                              <line key={i} x1={xPos} y1="50" x2={xPos} y2="85" stroke="#fb923c" strokeWidth="1.5" strokeOpacity="0.8" />
                            ))}
                            {/* Cavity Bosses */}
                            <circle cx="110" cy="115" r="14" fill="#ea580c" fillOpacity="0.3" stroke="#fdba74" strokeWidth="2" />
                            <circle cx="210" cy="115" r="14" fill="#ea580c" fillOpacity="0.3" stroke="#fdba74" strokeWidth="2" />
                            <circle cx="160" cy="115" r="22" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="3 3" />
                          </svg>
                        )}
                      </div>

                      {/* Real-time GD&T Annotation Pins */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-4 left-4 bg-slate-900/90 border border-cyan/40 px-2.5 py-1 rounded-lg text-[10px] font-mono text-cyan flex items-center gap-1.5 shadow-md"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan animate-ping"></span>
                        <span>Wall Thk: 2.00mm ± 0.05</span>
                      </motion.div>

                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute bottom-4 right-4 bg-slate-900/90 border border-violet/40 px-2.5 py-1 rounded-lg text-[10px] font-mono text-violet flex items-center gap-1.5 shadow-md"
                      >
                        <Sparkles size={11} />
                        <span>Nesting Yield: 84.6%</span>
                      </motion.div>

                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.9 }}
                        className="absolute top-4 right-4 bg-slate-900/90 border border-orange/40 px-2.5 py-1 rounded-lg text-[10px] font-mono text-orange flex items-center gap-1.5 shadow-md"
                      >
                        <span>Material: {activeCadSample === 'sheet_metal' ? 'CRCA IS 513 D' : 'ADC12 Al Alloy'}</span>
                      </motion.div>
                    </div>

                    {/* Telemetry Stream Log */}
                    <div className="mt-4 bg-slate-950 p-3 rounded-2xl border border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="flex items-center gap-2 text-cyan">
                        <CheckCircle2 size={13} />
                        <span>CAD Ingestion: 12,480 surface polygons verified & closed manifold</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <CheckCircle2 size={13} className="text-emerald-400" />
                        <span>Critical Tolerances: 4 primary datums detected from 2D PDF drawing</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <CheckCircle2 size={13} className="text-violet" />
                        <span>Commodity Linked: LME Aluminium raw ingot index mapped ($2,380/MT)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Explanation & Ingestion Capabilities */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-cyan font-bold mb-2">
                      Phase 01 // Input Verification
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white leading-tight">
                      Zero Guesswork From Day One
                    </h3>
                    <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                      Suppliers frequently quote based on worst-case scrap allowances, oversized stock sheets, or arbitrary machine hours. VIMS ingests your exact 3D models and 2D engineering prints to extract pure physical parameters.
                    </p>
                  </div>

                  {/* Feature Ingestion Checklist */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-cyan/10 text-cyan shrink-0 mt-0.5">
                        <Scan size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">CAD Volumetric & Surface Geometry Extraction</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Calculates true net weight, bounding box, cutting perimeters, and hole pierces directly from 3D models.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-violet/10 text-violet shrink-0 mt-0.5">
                        <FileCode2 size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">2D GD&T & Surface Finish Audit</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Scans drawings for Ra surface roughness, tight hole fits (H7), and secondary plating requirements that influence cycle time.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                        <Scale size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Scrap & Nesting Efficiency Indexing</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Computes multi-part nesting layouts to claim legitimate scrap skeleton credits (typically 12% to 20% credit).
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => handleSelectStep(1)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan to-violet text-white text-xs font-bold flex items-center gap-2 shadow-lg hover:shadow-cyan/20 transition-all"
                    >
                      <span>Proceed to Should-Cost Engine</span>
                      <ArrowRight size={14} />
                    </button>
                    <span className="text-xs text-slate-500 font-mono">Next: Cycle Time Physics</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* STEP 2: SHOULD-COST PHYSICS CALCULATION */}
            {/* ========================================================================= */}
            {activeStepIndex === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Physics Computation Engine Dashboard */}
                <div className="lg:col-span-7">
                  <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                      <div className="flex items-center gap-2">
                        <Gauge size={16} className="text-violet animate-spin" style={{ animationDuration: '8s' }} />
                        <span className="text-xs font-mono font-bold text-slate-200">
                          PARAMETRIC_PHYSICS_SOLVER // CHVORINOV_THERMAL_MODEL
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet/20 text-violet border border-violet/40">
                        ZBC Clean-Sheet Active
                      </span>
                    </div>

                    {/* Animated Physics Gauges & Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                      {/* Machine Clamp Force */}
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                        <div className="text-[10px] font-mono uppercase text-slate-400">Optimum Clamp Force</div>
                        <div className="text-xl font-mono font-extrabold text-cyan mt-1">450 Tons</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                          <TrendingDown size={11} />
                          <span>Supplier Quoted 650T</span>
                        </div>
                      </div>

                      {/* True Solidification Cycle Time */}
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                        <div className="text-[10px] font-mono uppercase text-slate-400">Physics Cycle Time</div>
                        <div className="text-xl font-mono font-extrabold text-violet mt-1">32.4 sec</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                          <TrendingDown size={11} />
                          <span>-18.6s vs Quote</span>
                        </div>
                      </div>

                      {/* Net Hourly Machine Rate */}
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 col-span-2 sm:col-span-1">
                        <div className="text-[10px] font-mono uppercase text-slate-400">Machine Shop Burden</div>
                        <div className="text-xl font-mono font-extrabold text-orange mt-1">$48.20 / hr</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          Deprec. + kVA Power
                        </div>
                      </div>
                    </div>

                    {/* Real-Time Formula Breakdown Visualizer */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-violet/10 via-slate-950 to-cyan/10 border border-violet/30 mb-5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center justify-between">
                        <span>Bottom-Up Should-Cost Formulation</span>
                        <span className="text-cyan font-bold">Defensible Clean-Sheet</span>
                      </div>
                      
                      {/* Mathematical Equation Display */}
                      <div className="font-mono text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 overflow-x-auto whitespace-nowrap">
                        <span className="text-cyan font-bold">$7.10</span> (Mat Net) 
                        - <span className="text-emerald-400 font-bold">$0.85</span> (Scrap) 
                        + <span className="text-violet font-bold">$4.34</span> (Process) 
                        + <span className="text-blue-400 font-bold">$1.80</span> (Labor) 
                        + <span className="text-orange font-bold">$0.65</span> (Amort) 
                        + <span className="text-pink-400 font-bold">$1.43</span> (11% SG&A)
                      </div>

                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800">
                        <span className="text-xs text-slate-400">Total Mathematical Should-Cost:</span>
                        <motion.span 
                          key={activeStepIndex}
                          initial={{ scale: 0.8, color: '#a855f7' }}
                          animate={{ scale: 1, color: '#22d3ee' }}
                          className="text-2xl font-mono font-black text-cyan"
                        >
                          $14.47 <span className="text-xs font-normal text-slate-400">/ unit</span>
                        </motion.span>
                      </div>
                    </div>

                    {/* Cycle Time Simulation Slider */}
                    <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400">Adjust Cooling/Spindle Cycle Rate:</span>
                        <span className="text-violet font-bold">{cycleSpeed} seconds/stroke</span>
                      </div>
                      <input
                        type="range"
                        min={20}
                        max={70}
                        value={cycleSpeed}
                        onChange={(e) => setCycleSpeed(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-slate-500">
                        <span>20s (Optimized Tooling)</span>
                        <span>42s (VIMS Target)</span>
                        <span>70s (Supplier Padded)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Explanation of Calculation */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-violet font-bold mb-2">
                      Phase 02 // Clean-Sheet Synthesis
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white leading-tight">
                      Thermodynamics Over Vendor Intuition
                    </h3>
                    <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                      Vendors pad quotes with conservative cycle times and inflated machine hourly rates. VIMS applies physical formulas—like Fourier's heat conduction and Kienzle cutting force models—to calculate exact cycle durations.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-violet/10 text-violet shrink-0 mt-0.5">
                        <Flame size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Thermodynamic Cycle Optimization</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Calculates exact cooling seconds using resin thermal diffusivity and water chiller flow rates, eliminating 15–30 seconds of padding.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-cyan/10 text-cyan shrink-0 mt-0.5">
                        <Cpu size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Machine Sizing Calibration</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Ensures you don't pay 850-ton machine hourly rates ($75/hr) for parts that easily run on a 450-ton machine ($45/hr).
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-orange/10 text-orange shrink-0 mt-0.5">
                        <DollarSign size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Zero-Based Overhead & SG&A Index</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Pins plant overhead and vendor profit margins to standard 10–12% industry benchmarks rather than 28%+ hidden markups.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => handleSelectStep(2)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet to-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg hover:shadow-violet/20 transition-all"
                    >
                      <span>Proceed to Negotiation Dossier</span>
                      <ArrowRight size={14} />
                    </button>
                    <span className="text-xs text-slate-500 font-mono">Next: Quote Reconciliation</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* STEP 3: SUPPLIER NEGOTIATION & CLAWBACK REALIZATION */}
            {/* ========================================================================= */}
            {activeStepIndex === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Interactive Quote Reconciliation & Negotiation Stamping */}
                <div className="lg:col-span-7">
                  <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-400" />
                        <span className="text-xs font-mono font-bold text-slate-200">
                          SUPPLIER_RECONCILIATION_MATRIX // AUDIT_REF_#8492
                        </span>
                      </div>

                      {/* Before / After Toggle */}
                      <button
                        onClick={() => setNegotiated(!negotiated)}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono hover:border-emerald-500/50 transition-colors"
                      >
                        <span className="text-slate-400">View:</span>
                        <span className={negotiated ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                          {negotiated ? 'After VIMS Audit (Clawback)' : 'Original Supplier Quote'}
                        </span>
                      </button>
                    </div>

                    {/* Side-by-Side Delta Waterfall */}
                    <div className="space-y-3 mb-6">
                      {/* Original Supplier Quote */}
                      <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-mono uppercase text-red-400 font-semibold">Original Vendor Submission</div>
                          <div className="text-lg font-bold text-white mt-0.5">$23.80 / unit</div>
                          <div className="text-[10px] text-slate-400">Padded 58s cycle time, single-part blanking, no scrap credit</div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 font-mono text-xs font-bold border border-red-500/40">
                          Overcharged
                        </span>
                      </div>

                      {/* Animated Margin Gap Clawback Bracket */}
                      <div className="relative py-1 flex items-center justify-center">
                        <div className="absolute left-6 right-6 h-px bg-gradient-to-r from-red-500/40 via-emerald-500/40 to-cyan/40"></div>
                        <motion.div 
                          initial={{ scale: 0.9 }}
                          animate={{ scale: [0.95, 1.05, 0.95] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="relative z-10 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 font-mono text-xs font-extrabold shadow-lg flex items-center gap-1.5"
                        >
                          <Scissors size={13} />
                          <span>Margin Clawback: -$7.60 / piece (31.9% Savings)</span>
                        </motion.div>
                      </div>

                      {/* Settled Target Should-Cost */}
                      <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">Defensible VIMS Target Price</div>
                          <div className="text-2xl font-bold font-poppins text-emerald-300 mt-0.5">$16.20 / unit</div>
                          <div className="text-[10px] text-slate-400">Validated 34s cycle, 82% nested blank, transparent 11% SG&A</div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/40 flex items-center gap-1">
                          <CheckCircle2 size={13} />
                          <span>Accepted by Vendor</span>
                        </span>
                      </div>
                    </div>

                    {/* Annualized Savings Impact Banner */}
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between font-mono">
                      <div>
                        <div className="text-[10px] uppercase text-slate-400">Annual Spend Clawback (35,000 Units/Yr)</div>
                        <div className="text-2xl font-extrabold text-white mt-0.5">
                          $266,000 <span className="text-xs text-emerald-400 font-normal">Realized Net EBITDA</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <TrendingDown size={24} />
                      </div>
                    </div>

                    {/* Stamp of Defensibility */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <div className="flex items-center gap-2">
                        <FileCheck size={14} className="text-cyan" />
                        <span>Ready-to-present negotiation dossier compiled</span>
                      </div>
                      <span className="text-cyan font-bold">100% Defensible Math</span>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Explanation of Negotiation */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2">
                      Phase 03 // Value Realization
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white leading-tight">
                      Collaborative, Non-Refutable Negotiations
                    </h3>
                    <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                      Suppliers reject arbitrary procurement discount demands. But when you walk into the room with cycle-time calculations, nesting coordinates, and machine burden sheets, suppliers agree because the math is irrefutable.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Eliminating Obsolete Tooling Amortization</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Detects tools amortized past initial contract volumes, removing $0.50–$3.00/unit in phantom recurring charges.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-cyan/10 text-cyan shrink-0 mt-0.5">
                        <Scale size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Commodity Price Index Linking</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Contracts are tied directly to LME/MCX indices with transparent passthroughs, shielding you from arbitrary vendor price hikes.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-violet/10 text-violet shrink-0 mt-0.5">
                        <FileText size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Win-Win DFM Engineering Guidance</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          We provide suppliers with cycle-reduction recommendations (e.g. conformal cooling lines, bend relief clearances) so they protect their profit while lowering your cost.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => onBookAudit ? onBookAudit() : window.open('https://calendar.app.google/vims', '_blank')}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
                    >
                      <Zap size={15} />
                      <span>Start CAD Should-Cost Audit</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-white font-mono flex items-center gap-1"
                    >
                      <RotateCcw size={12} />
                      <span>Replay Lifecycle</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CostingLifecycleSection;
