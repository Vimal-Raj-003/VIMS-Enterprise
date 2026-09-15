import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SAMPLE_COST_REPORTS, CostReportSample } from './kickoffData';
import { 
  Calculator, 
  Box, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  TrendingDown, 
  DollarSign, 
  Layers, 
  Wrench,
  Activity,
  FileSpreadsheet
} from 'lucide-react';

interface Slide3CostReportProps {
  isDarkMode: boolean;
}

export const Slide3CostReport: React.FC<Slide3CostReportProps> = ({ isDarkMode }) => {
  // Default to the L-bracket that the user explicitly emphasized!
  const [selectedReportKey, setSelectedReportKey] = useState<string>('sheet_metal_l_bracket');
  const [activePillarView, setActivePillarView] = useState<'all' | 'material' | 'machine' | 'secondary'>('all');

  const report: CostReportSample = 
    SAMPLE_COST_REPORTS[selectedReportKey] || SAMPLE_COST_REPORTS.sheet_metal_l_bracket;

  const totalMachineCost = report.processSteps.reduce((acc, step) => acc + step.stepCost, 0);
  const savingsPerPart = report.supplierQuote - report.shouldCostTarget;
  const savingsPercentage = ((savingsPerPart / report.supplierQuote) * 100).toFixed(1);
  const annualSavingsTotal = (savingsPerPart * report.annualVolume).toLocaleString();

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold mb-2">
            <Calculator size={13} />
            <span>SLIDE 03 // DETAILED SHOULD-COST REPORT & MANUFACTURING BREAKDOWN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-poppins text-white tracking-tight leading-tight">
            Interactive Should-Cost Report Anatomy
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl">
            Complete zero-based costing transparency. Left side showcases the 6-pillar line-item physics (gross/net material, machine tonnage, cycle seconds, secondary plating); right side displays the executive abstract and realized savings clawback.
          </p>
        </div>

        {/* Part Selection Tabs (Including L-Bracket, Die Casting, Plastics) */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shrink-0">
          <button
            onClick={() => setSelectedReportKey('sheet_metal_l_bracket')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedReportKey === 'sheet_metal_l_bracket' 
                ? 'bg-cyan text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)] font-black' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers size={14} />
            <span>Sheet Metal L-Bracket</span>
          </button>

          <button
            onClick={() => setSelectedReportKey('die_casting')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedReportKey === 'die_casting' 
                ? 'bg-cyan text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)] font-black' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Box size={14} />
            <span>Die Cast Housing</span>
          </button>

          <button
            onClick={() => setSelectedReportKey('plastics')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedReportKey === 'plastics' 
                ? 'bg-cyan text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)] font-black' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sparkles size={14} />
            <span>Plastic Fan Shroud</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Granular Left-Hand Breakdown (7 Cols) + Right-Hand Executive Abstract (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ======================================================== */}
        {/* LEFT-HAND SIDE: GRANULAR 6-PILLAR BOTTOM-UP LINE ITEMS */}
        {/* ======================================================== */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Pillar Filter Bar */}
          <div className="flex items-center justify-between bg-slate-950 p-2 rounded-2xl border border-slate-850">
            <span className="text-[11px] font-mono text-cyan font-bold uppercase pl-2 flex items-center gap-1.5">
              <Activity size={14} />
              <span>Granular Cost Build-Up:</span>
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActivePillarView('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                  activePillarView === 'all' ? 'bg-cyan/20 text-cyan border border-cyan/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                All 6 Pillars
              </button>
              <button
                onClick={() => setActivePillarView('material')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                  activePillarView === 'material' ? 'bg-cyan/20 text-cyan border border-cyan/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                Material
              </button>
              <button
                onClick={() => setActivePillarView('machine')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                  activePillarView === 'machine' ? 'bg-cyan/20 text-cyan border border-cyan/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                Machine Ops
              </button>
              <button
                onClick={() => setActivePillarView('secondary')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                  activePillarView === 'secondary' ? 'bg-cyan/20 text-cyan border border-cyan/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                Secondary
              </button>
            </div>
          </div>

          {/* Pillar 1: Raw Material Calculation */}
          {(activePillarView === 'all' || activePillarView === 'material') && (
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-cyan/15 text-cyan flex items-center justify-center font-mono text-xs font-bold">
                    01
                  </div>
                  <span className="text-xs font-bold font-poppins text-white uppercase tracking-wider">
                    Raw Material Net vs Gross Scrap Indexation
                  </span>
                </div>
                <span className="text-sm font-black font-mono text-cyan">
                  ${report.materialBreakdown.netMaterialCost.toFixed(2)} / pc
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-400 text-[10px]">Gross Blank Weight</div>
                  <div className="font-bold text-white mt-0.5">{report.grossWeightKg} kg</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">@ ${report.materialBreakdown.rawRatePerKg}/kg = ${report.materialBreakdown.rawCost.toFixed(2)}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-400 text-[10px]">Net Part Weight</div>
                  <div className="font-bold text-cyan mt-0.5">{report.netWeightKg} kg</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">Material Yield: {((report.netWeightKg / report.grossWeightKg) * 100).toFixed(0)}%</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-400 text-[10px]">Scrap Web / Slug</div>
                  <div className="font-bold text-amber-400 mt-0.5">{report.scrapWeightKg} kg</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">Recovery: {((report.scrapWeightKg / report.grossWeightKg) * 100).toFixed(0)}%</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-400 text-[10px]">Scrap Resale Credit</div>
                  <div className="font-bold text-emerald-400 mt-0.5">-${report.materialBreakdown.scrapCredit.toFixed(2)}</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">Index: ${report.scrapCreditRate}/kg</div>
                </div>
              </div>
            </div>
          )}

          {/* Pillar 2: Core Machine Operations Breakdown */}
          {(activePillarView === 'all' || activePillarView === 'machine') && (
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-violet-400/15 text-violet-400 flex items-center justify-center font-mono text-xs font-bold">
                    02
                  </div>
                  <span className="text-xs font-bold font-poppins text-white uppercase tracking-wider">
                    Core Machine Operations, Tonnage & Cycle Times
                  </span>
                </div>
                <span className="text-sm font-black font-mono text-violet-400">
                  ${totalMachineCost.toFixed(2)} / pc
                </span>
              </div>

              {/* Machine Operations List */}
              <div className="space-y-2">
                {report.processSteps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-850 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                        <span className="font-bold text-slate-100">{step.operation}</span>
                      </div>
                      <div className="text-slate-400 font-mono text-[11px]">
                        {step.machineName} • <span className="text-cyan font-semibold">{step.tonnageOrModel}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-[11px] self-end sm:self-center">
                      <span className="text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {step.cycleTimeSec}s @ ${step.machineRatePerHour.toFixed(1)}/hr
                      </span>
                      <span className="text-sm font-black text-cyan">
                        ${step.stepCost.toFixed(3)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pillar 3: Operator Labor & Pillar 4: Secondary Plating */}
          {(activePillarView === 'all' || activePillarView === 'secondary') && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Labor */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <div className="font-mono font-bold text-cyan text-[11px] uppercase">
                    3. Direct Operator Labor
                  </div>
                  <span className="font-mono font-bold text-white">${report.laborCost.toFixed(2)}</span>
                </div>
                <div className="space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between text-slate-400">
                    <span>Manning Allocation:</span>
                    <span className="text-slate-200">1 Operator : 2 Cells</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Factory OEE Factor:</span>
                    <span className="text-slate-200">85% Standard</span>
                  </div>
                  <div className="text-[10px] text-slate-500 pt-1">
                    Calibrated to local regional labor agreements & shift allowances
                  </div>
                </div>
              </div>

              {/* Secondary Plating & Coating */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <div className="font-mono font-bold text-emerald-400 text-[11px] uppercase">
                    4. Secondary Surface Plating
                  </div>
                  <span className="font-mono font-bold text-emerald-400">${report.secondaryCost.cost.toFixed(2)}</span>
                </div>
                <div className="space-y-1 font-mono text-[11px]">
                  <div className="text-slate-200 font-semibold truncate">
                    {report.secondaryCost.process}
                  </div>
                  <div className="text-slate-400 text-[10px]">
                    {report.secondaryCost.specification}
                  </div>
                  <div className="text-cyan text-[10px]">
                    Basis: {report.secondaryCost.rateUnit}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Pillar 5 & 6: Tooling Amortization, SG&A and Fair Profit Margin */}
          {activePillarView === 'all' && (
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                <div className="font-mono font-bold text-violet-400 text-[11px] uppercase">
                  5. Tool Amortization & 6. Plant SG&A / Fair Profit Margin
                </div>
                <span className="font-mono font-bold text-white">
                  ${(report.toolingAmortizationPerUnit + report.overheadSgAMargin.factoryOverhead + report.overheadSgAMargin.sga + report.overheadSgAMargin.profitMargin).toFixed(2)}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-400 text-[10px]">Tool Amortization</div>
                  <div className="font-bold text-white mt-0.5">${report.toolingAmortizationPerUnit.toFixed(2)} / pc</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">${report.toolingTotalInvestment.toLocaleString()} Tooling</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-400 text-[10px]">Factory Overhead (10%)</div>
                  <div className="font-bold text-slate-300 mt-0.5">${report.overheadSgAMargin.factoryOverhead.toFixed(2)}</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">Rent, QA & Utilities</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-400 text-[10px]">SG&A Admin (5%)</div>
                  <div className="font-bold text-slate-300 mt-0.5">${report.overheadSgAMargin.sga.toFixed(2)}</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">Logistics & Handling</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-slate-400 text-[10px]">Fair Vendor Margin (10%)</div>
                  <div className="font-bold text-cyan mt-0.5">${report.overheadSgAMargin.profitMargin.toFixed(2)}</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">Transparent Markup</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ======================================================== */}
        {/* RIGHT-HAND SIDE: EXECUTIVE SUMMARY ABSTRACT DOSSIER */}
        {/* ======================================================== */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-cyan/40 shadow-2xl space-y-5">
            
            {/* Top Abstract Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono text-cyan font-bold uppercase tracking-wider bg-cyan/15 px-2 py-0.5 rounded border border-cyan/30">
                  Executive Report Abstract
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{report.partNumber}</h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400">Annual EAU</span>
                <div className="text-sm font-bold text-white font-mono">{report.annualVolume.toLocaleString()} pcs</div>
              </div>
            </div>

            {/* REAL PART IMAGE & TECHNICAL CALLOUT */}
            <div className="space-y-2">
              <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-slate-700 shadow-inner group">
                <img 
                  src={report.imageUrl} 
                  alt={report.partName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-slate-950/90 text-cyan text-[10px] font-mono font-bold border border-slate-700">
                    {report.commodity}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-950/90 text-white text-[10px] font-mono border border-slate-700">
                    Net: {report.netWeightKg} kg
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <div className="font-bold text-white">{report.partName}</div>
                <div className="text-[11px] text-slate-400 font-mono">{report.materialGrade}</div>
                <div className="text-[11px] text-slate-300 leading-relaxed pt-1">
                  {report.partDescription}
                </div>
              </div>
            </div>

            {/* Baseline Supplier Quote vs VIMS Validated Target */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Current Supplier Quote:</span>
                <span className="text-base font-bold text-rose-400 font-mono line-through">
                  ${report.supplierQuote.toFixed(2)} / pc
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles size={14} className="text-cyan" />
                  Validated Should-Cost Target:
                </span>
                <span className="text-2xl font-black text-cyan font-mono">
                  ${report.shouldCostTarget.toFixed(2)} / pc
                </span>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Identified Price Gap:</span>
                <span className="text-xs font-bold text-emerald-400 font-mono bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  -${savingsPerPart.toFixed(2)} / pc (-{savingsPercentage}% Clawback)
                </span>
              </div>
            </div>

            {/* Total Annual Portfolio Impact Card */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-1">
              <div className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider font-bold">
                Projected Single-Part Annual Client Savings
              </div>
              <div className="text-3xl font-black text-emerald-400 font-mono">
                ${annualSavingsTotal} <span className="text-xs font-normal text-emerald-300">/ year</span>
              </div>
              <div className="text-[10px] text-slate-400">
                Backed by 100% open mathematical cycle formulas & scrap weights
              </div>
            </div>

            {/* Defensibility Badge */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 flex items-center gap-2.5 text-xs text-slate-300">
              <FileSpreadsheet size={16} className="text-cyan shrink-0" />
              <span className="font-mono text-[11px]">
                Supplied as an unlocked Excel Dossier with active physics formulas.
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
