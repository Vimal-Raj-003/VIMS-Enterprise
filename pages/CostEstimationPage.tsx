import React, { useState, useMemo } from 'react';
import { Page } from '../types';
import { COMPANY_CONTACT } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import CostingLifecycleSection from '../components/CostingLifecycleSection';
import { 
  Calculator, 
  TrendingDown, 
  Layers, 
  ShieldCheck, 
  FileSpreadsheet, 
  BarChart3, 
  Target, 
  Cpu, 
  Wrench, 
  Flame, 
  Box, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Percent, 
  Coins, 
  Search, 
  FileText, 
  Sliders, 
  Award, 
  Scale, 
  DollarSign, 
  Factory,
  ChevronRight,
  TrendingUp,
  Clock,
  Briefcase,
  Activity
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CostEstimationPageProps {
  onNavigate?: (page: Page) => void;
}

type CommodityType = 'sheet_metal' | 'die_casting' | 'plastic_molding' | 'cnc_machining' | 'wire_harness';

interface CommodityProfile {
  id: CommodityType;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  defaultMaterialCost: number;
  defaultProcessCost: number;
  defaultLaborCost: number;
  defaultToolingAmortization: number;
  defaultSgaMargin: number;
  typicalSupplierQuote: number;
  keyDrivers: string[];
  processesCovered: string[];
  physicsModel: string;
  caseStudy: {
    part: string;
    industry: string;
    initialQuote: string;
    shouldCost: string;
    clawbackSavings: string;
    insight: string;
  };
}

const COMMODITY_PROFILES: Record<CommodityType, CommodityProfile> = {
  sheet_metal: {
    id: 'sheet_metal',
    name: 'Sheet Metal & Fabrication',
    tagline: 'Laser cutting, CNC punching, press brake bending & progressive stamping',
    icon: <Layers className="text-cyan" size={22} />,
    defaultMaterialCost: 4.80,
    defaultProcessCost: 3.20,
    defaultLaborCost: 1.40,
    defaultToolingAmortization: 0.60,
    defaultSgaMargin: 1.25,
    typicalSupplierQuote: 16.50,
    keyDrivers: [
      'Sheet sheet-nesting utilization percentage (target: >82%)',
      'Cut perimeter laser cutting speed based on material grade & assist gas (O2 vs N2)',
      'Bending stroke cycle times, manual flip rotations & stage tooling setups',
      'Scrap metal skeleton resale credit indexing (CRCA / SS304 / Aluminum)'
    ],
    processesCovered: [
      'Fiber Laser Cutting (0.8mm to 20mm)',
      'CNC Turret Punching & Nibbling',
      'Multi-axis CNC Press Brake Bending',
      'Progressive & Compound Stamping Dies',
      'TIG/MIG Robotic Seam Welding',
      'Electrostatic Powder Coating & CED'
    ],
    physicsModel: 'Parametric sheet thickness nesting algorithm factoring assist gas consumption (kW/hr), laser pierces, and press brake tonnage per linear foot.',
    caseStudy: {
      part: 'Industrial Server Rack Chassis Enclosure',
      industry: 'Telecommunications & Data Centers',
      initialQuote: '$24.80 / unit',
      shouldCost: '$17.40 / unit',
      clawbackSavings: '29.8% ($222,000 / yr)',
      insight: 'Audit revealed supplier was calculating single-piece blanking instead of 84% nested multi-part cutting, plus charging 2.5x standard nitrogen gas rates.'
    }
  },
  die_casting: {
    id: 'die_casting',
    name: 'High-Pressure Die Casting',
    tagline: 'Aluminum & Zinc precision castings, molten metal yield & secondary machining',
    icon: <Flame className="text-orange" size={22} />,
    defaultMaterialCost: 8.50,
    defaultProcessCost: 5.40,
    defaultLaborCost: 2.10,
    defaultToolingAmortization: 1.80,
    defaultSgaMargin: 2.30,
    typicalSupplierQuote: 27.90,
    keyDrivers: [
      'Molten alloy melt loss percentage (3.5% vs 8% charged)',
      'Machine clamp tonnage sizing (500T vs 850T cold chamber)',
      'Die cavity thermal cooling cycle time optimization',
      'Runner, gate & biscuit remelt scrap credit calculations'
    ],
    processesCovered: [
      'Cold Chamber Aluminum Die Casting (ADC12, A380)',
      'Hot Chamber Zinc / Zamak Alloy Casting',
      'Robotic Ladling & Auto-Spraying',
      'Secondary Hydraulic Trim Die Flash Removal',
      'Shot Blasting, Impregnation & Vibratory Deburring',
      'Precision In-Line CNC Machining of Bearing Seats'
    ],
    physicsModel: 'Thermodynamic solidification calculation based on Chvorinov’s rule, clamping force safety limits, and shot sleeve fill ratio.',
    caseStudy: {
      part: 'Electric Vehicle Powertrain Inverter Housing',
      industry: 'Automotive & Clean Mobility',
      initialQuote: '$42.50 / unit',
      shouldCost: '$31.20 / unit',
      clawbackSavings: '26.6% ($565,000 / yr)',
      insight: 'Supplier had quoted on an oversized 900-ton press with an artificially slow 62-second cycle; our thermodynamic audit proved 41 seconds on a 650-ton machine.'
    }
  },
  plastic_molding: {
    id: 'plastic_molding',
    name: 'Plastic Injection Molding',
    tagline: 'Engineering polymers, hot runner mold amortizations & cooling physics',
    icon: <Box className="text-pink-500" size={22} />,
    defaultMaterialCost: 3.20,
    defaultProcessCost: 2.10,
    defaultLaborCost: 0.80,
    defaultToolingAmortization: 0.45,
    defaultSgaMargin: 0.95,
    typicalSupplierQuote: 11.20,
    keyDrivers: [
      'Resin pricing indexing (Polypropylene, ABS, PC/PBT, Glass-filled Nylon)',
      'Fourier-based thermal cooling time derived from thickest wall cross-section',
      'Tool cavitation scaling (single cavity vs 1x4 family vs 1x8 hot-runner)',
      'Regrind blend allowance (10% to 15% permissible virgin resin deduction)'
    ],
    processesCovered: [
      'Precision Thermoplastic Injection (50T to 1200T)',
      'Overmolding & Two-Shot (2K) Injection',
      'Hot Runner & Valve-Gate Tooling Systems',
      'Automated In-Mold Labeling (IML)',
      'Sonic & Vibration Plastic Welding',
      'Pad Printing, Textured Spark Erosion & Chrome Plating'
    ],
    physicsModel: 'Ballman-Dutton mold cooling equation accounting for thermal diffusivity, melt temperature, mold coolant flow velocity, and ejection ejection rigidity.',
    caseStudy: {
      part: 'Medical Device Diagnostic Sensor Bezel',
      industry: 'Healthcare & Life Sciences',
      initialQuote: '$8.90 / unit',
      shouldCost: '$5.45 / unit',
      clawbackSavings: '38.7% ($310,500 / yr)',
      insight: 'Supplier amortized entire mold tooling costs into piece price over 50,000 units while continuing to charge the exact same price through unit 200,000.'
    }
  },
  cnc_machining: {
    id: 'cnc_machining',
    name: 'Precision CNC Machining',
    tagline: '3-axis, 5-axis milling, mill-turn multi-spindle & tight aerospace tolerances',
    icon: <Wrench className="text-violet" size={22} />,
    defaultMaterialCost: 12.00,
    defaultProcessCost: 9.50,
    defaultLaborCost: 3.80,
    defaultToolingAmortization: 1.50,
    defaultSgaMargin: 3.40,
    typicalSupplierQuote: 44.00,
    keyDrivers: [
      'Billet vs Near-Net-Shape raw stock weight ratio (chip generation volume)',
      'Speed and feed spindle utilization ($V_c$, $f_z$, MRR in cm³/min)',
      'Insert cutter wear depreciation and specialty tool fixture setups',
      'Machine shop hourly burden rate (Depreciation, kVA power, coolant)'
    ],
    processesCovered: [
      'Multi-axis CNC Vertical & Horizontal Machining',
      'Mill-Turn Swiss Lathes with Live Tooling',
      'Hard Turning & Cylindrical Surface Grinding',
      'Wire & Sinker EDM for Tool Steel Profiles',
      'Anodizing (Type II / Type III Hardcoat) & Passivation',
      'Zeiss CMM 3D Coordinate Verification'
    ],
    physicsModel: 'Kienzle specific cutting force formulation calculating spindle torque requirements, metal removal rate (MRR), and true roughing/finishing cycle hours.',
    caseStudy: {
      part: 'Aerospace Hydraulic Actuator Manifold Block',
      industry: 'Aerospace & Defense',
      initialQuote: '$68.00 / unit',
      shouldCost: '$47.50 / unit',
      clawbackSavings: '30.1% ($410,000 / yr)',
      insight: 'Identified that supplier was running standard feeds on 6061-T6 aluminum instead of high-speed trochoidal milling paths, inflating machine spindle time by 48%.'
    }
  },
  wire_harness: {
    id: 'wire_harness',
    name: 'Wiring Harness & Electromechanical',
    tagline: 'Automated wire prep, terminal crimping, ultrasonic splicing & harness testing',
    icon: <Cpu className="text-emerald-500" size={22} />,
    defaultMaterialCost: 6.20,
    defaultProcessCost: 2.80,
    defaultLaborCost: 3.50,
    defaultToolingAmortization: 0.80,
    defaultSgaMargin: 1.60,
    typicalSupplierQuote: 21.00,
    keyDrivers: [
      'Copper LME / MCX raw wire indexation per meter weight',
      'Terminal crimp applicator tooling setup vs automated Komax cutting',
      'Loom braiding, heat shrink sleeve & connector insertion cycle seconds',
      '100% electrical continuity and high-pot dielectric test verification'
    ],
    processesCovered: [
      'Automated Cut, Strip & Crimp (Komax / Schleuniger)',
      'Ultrasonic Copper Wire Splicing & Taping',
      'Connector Housing Insertion & Secondary Lock Inspection',
      'Braided Conduit & Corrugated Tube Looming',
      'Low-Pressure Hotmelt Overmolding of Grommets',
      'Cirris & Synor Automated Harness Continuity Testing'
    ],
    physicsModel: 'Direct labor motion study (MOST/MTM) calibrated to automated cut/strip rates and LME London Metal Exchange copper conductor index.',
    caseStudy: {
      part: 'Commercial Tractor Cab Main Power Harness',
      industry: 'Heavy Commercial Vehicles & AgTech',
      initialQuote: '$36.20 / unit',
      shouldCost: '$26.40 / unit',
      clawbackSavings: '27.1% ($294,000 / yr)',
      insight: 'Supplier had applied unverified 35% manual assembly labor allowances for connections that were standard automated crimp-to-terminal lines.'
    }
  }
};

const CostEstimationPage: React.FC<CostEstimationPageProps> = ({ onNavigate }) => {
  const [selectedCommodity, setSelectedCommodity] = useState<CommodityType>('sheet_metal');
  const [productionVolume, setProductionVolume] = useState<number>(25000);
  const [selectedRegion, setSelectedRegion] = useState<'india' | 'se_asia' | 'western'>('india');
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'playbook' | 'case_studies'>('overview');

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: methodsRef, isVisible: methodsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: simRef, isVisible: simVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: commoditiesRef, isVisible: commoditiesVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: negotiationRef, isVisible: negotiationVisible } = useScrollAnimation<HTMLDivElement>();

  const currentProfile = COMMODITY_PROFILES[selectedCommodity];

  // Dynamic regional multiplier for machine & labor burden
  const regionalMultipliers = {
    india: { labor: 1.0, machine: 1.0, overhead: 1.0, label: 'India / Best-Cost Hub' },
    se_asia: { labor: 1.15, machine: 1.1, overhead: 1.08, label: 'Southeast Asia' },
    western: { labor: 2.8, machine: 1.6, overhead: 1.5, label: 'Western / Nearshore' }
  };

  const currentMult = regionalMultipliers[selectedRegion];

  // Calculated dynamic cost components
  const calculatedCosts = useMemo(() => {
    const rawMaterial = currentProfile.defaultMaterialCost;
    const processRate = currentProfile.defaultProcessCost * currentMult.machine;
    const laborRate = currentProfile.defaultLaborCost * currentMult.labor;
    
    // Tooling amortization scales inversely with volume (with standard minimums)
    const baseAmort = (currentProfile.defaultToolingAmortization * 25000) / Math.max(productionVolume, 5000);
    const toolingAmort = Math.min(Math.max(baseAmort, 0.15), currentProfile.defaultToolingAmortization * 2.5);

    const sgaMargin = (rawMaterial + processRate + laborRate + toolingAmort) * 0.11 * currentMult.overhead;
    const shouldCost = rawMaterial + processRate + laborRate + toolingAmort + sgaMargin;
    
    // Typical supplier quote with unearned margin & padded cycle time
    const supplierQuote = currentProfile.typicalSupplierQuote * (selectedRegion === 'western' ? 1.4 : 1.0);
    const costGap = Math.max(supplierQuote - shouldCost, 0);
    const savingsPercent = ((costGap / supplierQuote) * 100);
    const totalAnnualSavings = costGap * productionVolume;

    return {
      rawMaterial: Number(rawMaterial.toFixed(2)),
      processRate: Number(processRate.toFixed(2)),
      laborRate: Number(laborRate.toFixed(2)),
      toolingAmort: Number(toolingAmort.toFixed(2)),
      sgaMargin: Number(sgaMargin.toFixed(2)),
      shouldCost: Number(shouldCost.toFixed(2)),
      supplierQuote: Number(supplierQuote.toFixed(2)),
      costGap: Number(costGap.toFixed(2)),
      savingsPercent: Number(savingsPercent.toFixed(1)),
      totalAnnualSavings: Math.round(totalAnnualSavings)
    };
  }, [currentProfile, productionVolume, selectedRegion]);

  return (
    <div className="relative overflow-hidden">
      {/* BACKGROUND SCIENTIFIC GRID & GLOW ACCENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-cyan/10 via-violet/10 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-cyan/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      {/* HERO SECTION */}
      <section ref={heroRef} className="pt-12 pb-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 dark:bg-cyan/15 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-widest mb-6 shadow-sm"
          >
            <Calculator size={14} className="animate-pulse" />
            <span>Parametric Should-Costing & Zero-Based Costing (ZBC)</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
          >
            Scientific Mechanical Cost Intelligence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-violet to-orange">Supplier Negotiation</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
          >
            We eliminate supplier quote guesswork. Using bottom-up manufacturing physics, cycle time thermal modeling, and regional shop burden rates, VIMS equips enterprise procurement teams with defensible clean-sheet should-cost models that claw back <span className="text-cyan font-bold">12% to 32% direct material margins</span>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(34, 211, 238, 0.35)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(COMPANY_CONTACT.bookingUrl, '_blank')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan via-blue-600 to-violet text-white font-bold text-sm tracking-wide shadow-xl flex items-center gap-2"
            >
              <FileSpreadsheet size={18} />
              <span>Book Costing Strategy Session</span>
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementById('costing-lifecycle');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-4 rounded-2xl bg-cyan/10 hover:bg-cyan/20 border border-cyan/40 text-cyan font-bold text-sm transition-all flex items-center gap-2"
            >
              <Activity size={18} />
              <span>Watch Costing Lifecycle (3 Steps)</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementById('interactive-simulator');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm hover:border-cyan/50 transition-all flex items-center gap-2"
            >
              <Sliders size={18} className="text-cyan" />
              <span>Test Interactive Cost Simulator</span>
            </motion.button>
          </motion.div>

          {/* Key Proof Metrics Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="p-3">
              <div className="text-3xl font-black font-poppins text-cyan">18.4%</div>
              <div className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mt-1">Average Direct Savings</div>
            </div>
            <div className="p-3">
              <div className="text-3xl font-black font-poppins text-violet">1,400+</div>
              <div className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mt-1">CAD Components Analyzed</div>
            </div>
            <div className="p-3">
              <div className="text-3xl font-black font-poppins text-orange">15+ Yrs</div>
              <div className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mt-1">Industrial Tooling Expertise</div>
            </div>
            <div className="p-3">
              <div className="text-3xl font-black font-poppins text-emerald-500">100%</div>
              <div className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mt-1">Defensible Excel Dossiers</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THREE CORE METHODOLOGY PILLARS */}
      <section ref={methodsRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            How VIMS Rewrites The Procurement Equation
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Most procurement teams negotiate using historical percentage discounts. We break down the CAD geometry from pure physical thermodynamics and factory floor reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Should-Costing */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
            <div className="p-3 w-fit rounded-2xl bg-cyan/10 text-cyan mb-6">
              <Scale size={28} />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white mb-3">
              Bottom-Up Should-Costing
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              We extract blank dimensions, mold cavitations, cycle seconds, scrap recovery credits, and exact machine shop hour rates to calculate the true mathematical cost of manufacturing.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan shrink-0" />
                <span>Raw material net vs gross scrap indexation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan shrink-0" />
                <span>Empirical machine clamp tonnage & speed rates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan shrink-0" />
                <span>Secondary ops (powder coat, heat-treat, CNC)</span>
              </li>
            </ul>
          </motion.div>

          {/* Pillar 2: Zero-Based Costing (ZBC) */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
            <div className="p-3 w-fit rounded-2xl bg-violet/10 text-violet mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white mb-3">
              Zero-Based Costing (ZBC)
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Starting from a clean sheet rather than last year's supplier invoice. We eliminate unearned overhead allocations, obsolete tooling charges, and hidden supplier margin cushions.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-violet shrink-0" />
                <span>Separating piece-price from fully amortized tooling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-violet shrink-0" />
                <span>Benchmarking SG&A vs global industry standards</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-violet shrink-0" />
                <span>Eliminating arbitrary price escalation clauses</span>
              </li>
            </ul>
          </motion.div>

          {/* Pillar 3: Supplier Negotiation Dossier */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
            <div className="p-3 w-fit rounded-2xl bg-orange/10 text-orange mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white mb-3">
              Fact-Based Supplier Negotiation
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              We provide sourcing teams with battle-tested negotiation dossiers. Instead of confrontational haggling, you present transparent engineering data that vendors cannot refute.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-orange shrink-0" />
                <span>Side-by-side supplier quote reconciliation sheets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-orange shrink-0" />
                <span>Identified cost gaps broken down to cents</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-orange shrink-0" />
                <span>Collaborative win-win DFM suggestions for vendors</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* COSTING LIFECYCLE (DATA INTAKE -> SHOULD COST -> SUPPLIER NEGOTIATION) */}
      <div id="costing-lifecycle">
        <CostingLifecycleSection onBookAudit={() => window.open(COMPANY_CONTACT.bookingUrl, '_blank')} />
      </div>

      {/* INTERACTIVE CLEAN-SHEET SHOULD-COST SIMULATOR */}
      <section id="interactive-simulator" ref={simRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 md:p-12 rounded-4xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-2xl text-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-slate-800 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/20 text-cyan text-xs font-mono uppercase tracking-wider mb-3">
                <Sliders size={13} />
                <span>Live Cost Teardown Engine</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold">
                Interactive Clean-Sheet Simulator
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Select a manufacturing commodity, customize annual production volume, and select manufacturing region to view real-time cost waterfalls and defensible negotiation gaps.
              </p>
            </div>

            {/* Region Selector */}
            <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700 w-fit">
              <span className="text-xs text-slate-400 px-2 font-mono uppercase">Region:</span>
              {(['india', 'se_asia', 'western'] as const).map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedRegion === reg 
                      ? 'bg-cyan text-slate-950 shadow-md font-bold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {reg === 'india' ? 'India (Best-Cost)' : reg === 'se_asia' ? 'SE Asia' : 'Western / EU'}
                </button>
              ))}
            </div>
          </div>

          {/* Commodity Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {(Object.keys(COMMODITY_PROFILES) as CommodityType[]).map((key) => {
              const prof = COMMODITY_PROFILES[key];
              const isSelected = selectedCommodity === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCommodity(key)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-2xl border text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan/20 to-violet/20 border-cyan text-cyan shadow-lg shadow-cyan/10'
                      : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                  }`}
                >
                  {prof.icon}
                  <span>{prof.name}</span>
                </button>
              );
            })}
          </div>

          {/* Simulator Main Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls & Physics Breakdown (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700/60 space-y-6">
                <div>
                  <div className="flex justify-between items-center text-sm font-medium mb-2">
                    <span className="text-slate-300">Annual Production Volume</span>
                    <span className="text-cyan font-mono font-bold">{productionVolume.toLocaleString()} units/yr</span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={200000}
                    step={5000}
                    value={productionVolume}
                    onChange={(e) => setProductionVolume(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                    <span>5,000 (Low Batch)</span>
                    <span>50,000</span>
                    <span>200,000 (High Scale)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/60">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Physics Formulation Model</div>
                  <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    "{currentProfile.physicsModel}"
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Parametric Cost Drivers</div>
                  <ul className="space-y-1.5">
                    {currentProfile.keyDrivers.map((driver, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <ChevronRight size={13} className="text-cyan shrink-0 mt-0.5" />
                        <span>{driver}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Case Study Snapshot */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-cyan/10 to-violet/10 border border-cyan/30 text-xs space-y-2">
                <div className="font-bold text-cyan flex items-center gap-1.5 uppercase font-mono tracking-wider">
                  <Award size={14} />
                  <span>Real Audit Teardown: {currentProfile.caseStudy.part}</span>
                </div>
                <div className="text-slate-300">
                  Industry: <span className="font-semibold text-white">{currentProfile.caseStudy.industry}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono">
                  <div className="bg-slate-900/80 p-2 rounded-lg">
                    <div className="text-[10px] text-slate-400">Supplier Original</div>
                    <div className="text-red-400 font-bold">{currentProfile.caseStudy.initialQuote}</div>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded-lg">
                    <div className="text-[10px] text-slate-400">VIMS Settled Price</div>
                    <div className="text-emerald-400 font-bold">{currentProfile.caseStudy.shouldCost}</div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 pt-1 leading-normal">
                  <strong className="text-cyan">Finding:</strong> {currentProfile.caseStudy.insight}
                </p>
              </div>
            </div>

            {/* Right Cost Waterfall & Gap Analysis (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Sourcing Savings Delta Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-3xl bg-slate-800/40 border border-slate-700/60">
                  <div className="text-xs text-slate-400 font-mono uppercase">Typical Supplier Quote</div>
                  <div className="text-2xl font-bold font-poppins text-slate-200 mt-1">${calculatedCosts.supplierQuote}</div>
                  <div className="text-[11px] text-slate-500 mt-1">Market benchmark quote</div>
                </div>

                <div className="p-5 rounded-3xl bg-cyan/15 border border-cyan/40">
                  <div className="text-xs text-cyan font-mono uppercase">VIMS Should-Cost</div>
                  <div className="text-2xl font-bold font-poppins text-cyan mt-1">${calculatedCosts.shouldCost}</div>
                  <div className="text-[11px] text-cyan/80 mt-1">Defensible target price</div>
                </div>

                <div className="p-5 rounded-3xl bg-emerald-500/15 border border-emerald-500/40">
                  <div className="text-xs text-emerald-400 font-mono uppercase">Target Margin Clawback</div>
                  <div className="text-2xl font-bold font-poppins text-emerald-400 mt-1">
                    {calculatedCosts.savingsPercent}%
                  </div>
                  <div className="text-[11px] text-emerald-300 mt-1">-${calculatedCosts.costGap} / piece gap</div>
                </div>
              </div>

              {/* Total Annual Value Impact Banner */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/60 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">Projected Annual Sourcing Savings</div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mt-0.5">
                    ${calculatedCosts.totalAnnualSavings.toLocaleString()} <span className="text-xs font-normal text-slate-400">USD / Year</span>
                  </div>
                </div>
                <button
                  onClick={() => window.open(COMPANY_CONTACT.bookingUrl, '_blank')}
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  Claim Sourcing Audit
                </button>
              </div>

              {/* Clean-Sheet Waterfall Breakdown */}
              <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 space-y-4">
                <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-slate-400 border-b border-slate-700/60 pb-3">
                  <span>Line-Item Cost Breakdown</span>
                  <span>Calculated Cost ($)</span>
                </div>

                {/* 1. Raw Material */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan inline-block"></span>
                      <span>Raw Material (Net Weight + Scrap Credit)</span>
                    </span>
                    <span className="font-mono text-cyan font-semibold">${calculatedCosts.rawMaterial}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(calculatedCosts.rawMaterial / calculatedCosts.supplierQuote) * 100}%` }}
                      className="h-full bg-cyan rounded-full"
                    />
                  </div>
                </div>

                {/* 2. Process & Machine Rate */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-violet inline-block"></span>
                      <span>Machine Cycle & Spindle Burden Rate</span>
                    </span>
                    <span className="font-mono text-violet font-semibold">${calculatedCosts.processRate}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(calculatedCosts.processRate / calculatedCosts.supplierQuote) * 100}%` }}
                      className="h-full bg-violet rounded-full"
                    />
                  </div>
                </div>

                {/* 3. Direct Labor */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block"></span>
                      <span>Direct Operator & Inspection Labor</span>
                    </span>
                    <span className="font-mono text-blue-400 font-semibold">${calculatedCosts.laborRate}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(calculatedCosts.laborRate / calculatedCosts.supplierQuote) * 100}%` }}
                      className="h-full bg-blue-400 rounded-full"
                    />
                  </div>
                </div>

                {/* 4. Tooling Amortization */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange inline-block"></span>
                      <span>Tooling & Fixture Amortization</span>
                    </span>
                    <span className="font-mono text-orange font-semibold">${calculatedCosts.toolingAmort}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(calculatedCosts.toolingAmort / calculatedCosts.supplierQuote) * 100}%` }}
                      className="h-full bg-orange rounded-full"
                    />
                  </div>
                </div>

                {/* 5. SG&A & Benchmark Margin */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-pink-400 inline-block"></span>
                      <span>Factory SG&A + Healthy Margin (11%)</span>
                    </span>
                    <span className="font-mono text-pink-400 font-semibold">${calculatedCosts.sgaMargin}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(calculatedCosts.sgaMargin / calculatedCosts.supplierQuote) * 100}%` }}
                      className="h-full bg-pink-400 rounded-full"
                    />
                  </div>
                </div>

                {/* 6. Unearned Supplier Overcharge Buffer */}
                <div className="space-y-1.5 pt-2 border-t border-slate-700/60">
                  <div className="flex justify-between text-xs font-bold text-red-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block animate-pulse"></span>
                      <span>Unearned Supplier Cushion / Overcharge Gap</span>
                    </span>
                    <span className="font-mono">${calculatedCosts.costGap}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-red-500/30">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(calculatedCosts.costGap / calculatedCosts.supplierQuote) * 100}%` }}
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED COMMODITY CAPABILITIES */}
      <section ref={commoditiesRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 text-violet text-xs font-mono uppercase tracking-wider mb-3">
            <Factory size={14} />
            <span>Industrial Breadth</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Manufacturing Commodities We Analyze
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Every manufacturing process has unique physics, scrap dynamics, and machine burden structures. We deliver bottom-up calculations tailored to your commodity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(COMMODITY_PROFILES).map((commodity) => (
            <motion.div
              key={commodity.id}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800">
                    {commodity.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                    Core Commodity
                  </span>
                </div>
                <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white mb-2">
                  {commodity.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {commodity.tagline}
                </p>

                <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">Capabilities Covered:</div>
                  {commodity.processesCovered.slice(0, 4).map((proc, i) => (
                    <div key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan"></div>
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan">View Parametric Teardown</span>
                <ChevronRight size={16} className="text-cyan" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUPPLIER NEGOTIATION PLAYBOOK & DOSSIER DELIVERABLES */}
      <section ref={negotiationRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/70 dark:bg-slate-900/40 rounded-4xl border border-slate-200 dark:border-slate-800/80 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider mb-3">
              <FileSpreadsheet size={14} />
              <span>Tangible Deliverables</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              The VIMS Sourcing Negotiation Dossier
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              When you partner with VIMS, you don't receive vague consulting advice. You receive fully unlocked, transparent engineering models that your procurement and sourcing teams can directly present to vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="p-3 rounded-2xl bg-cyan/10 text-cyan w-fit">
                <FileSpreadsheet size={22} />
              </div>
              <h3 className="text-lg font-bold font-poppins text-slate-900 dark:text-white">
                Unlocked Parametric Excel Models
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Full clean-sheet formulas containing cycle times, blank weights, clamp pressures, and operator counts. Completely editable for future batch sizing changes.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="p-3 rounded-2xl bg-violet/10 text-violet w-fit">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-lg font-bold font-poppins text-slate-900 dark:text-white">
                Vendor Quote Reconciliation Sheet
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Side-by-side delta highlighting exactly where the vendor overquoted (e.g., 40% inflated laser cycle time, over-estimated sprue scrap, or double-counted tooling).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="p-3 rounded-2xl bg-orange/10 text-orange w-fit">
                <TrendingUp size={22} />
              </div>
              <h3 className="text-lg font-bold font-poppins text-slate-900 dark:text-white">
                Commodity Raw Material Indexing
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Live linking to global raw commodity indices (LME, MCX, ICIS) so future contract renegotiations automatically align with genuine material drops.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-lg font-bold font-poppins text-slate-900 dark:text-white">
                Supplier Meeting Talking Points
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                A concise executive brief arming your category managers with fact-based questions that steer negotiations constructively while maintaining solid vendor partnerships.
              </p>
            </div>
          </div>

          {/* Executive Leadership Box */}
          <div className="mt-10 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6">
            <img 
              src="https://lh3.googleusercontent.com/d/1CKMyl3Nl2Q8PjlXdZ2ffj3DemiFrCjDm" 
              alt="Gowtham Raj M" 
              className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-cyan/40 shadow-md"
              referrerPolicy="no-referrer"
            />
            <div className="text-center sm:text-left space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan font-bold">Led by Industrial Leadership</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Gowtham Raj M – CEO & Industrial Architect</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                With 15+ years of hands-on industrial engineering, tool design, and global sourcing leadership, Gowtham Raj personally directs every should-cost analysis to ensure factory-floor precision and defensible mathematics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL PILOT AUDIT CTA */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="p-8 md:p-14 rounded-5xl bg-gradient-to-r from-cyan/20 via-violet/20 to-orange/20 border border-cyan/30 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 text-cyan text-xs font-mono uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Pilot Engagement Available</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-black text-slate-900 dark:text-white">
            Send 3 CAD Drawings. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">We'll Prove The Savings Potential.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Test VIMS with a single high-spend component or assembly. We'll conduct a complete bottom-up teardown and deliver a benchmarked should-cost model showing exactly where money is being left on the table.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open(COMPANY_CONTACT.bookingUrl, '_blank')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan to-violet text-white font-bold text-sm tracking-wider uppercase shadow-xl"
            >
              Request Pilot Should-Cost Audit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(`mailto:${COMPANY_CONTACT.email}?subject=CAD%20Should-Cost%20Audit%20Inquiry`, '_blank')}
              className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm"
            >
              Email CAD Files Directly
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostEstimationPage;
