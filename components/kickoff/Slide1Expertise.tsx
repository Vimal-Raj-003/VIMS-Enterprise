import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  COMMODITIES_DATA, 
  CommodityCapability 
} from './kickoffData';
import { 
  Layers, 
  Box, 
  Flame, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Factory, 
  Sliders, 
  Check, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface Slide1ExpertiseProps {
  isDarkMode: boolean;
}

const getCommodityIcon = (iconName: string, size = 20) => {
  switch (iconName) {
    case 'Layers': return <Layers size={size} />;
    case 'Box': return <Box size={size} />;
    case 'Flame': return <Flame size={size} />;
    case 'Cpu': return <Cpu size={size} />;
    case 'Wrench': return <Wrench size={size} />;
    case 'Sparkles': return <Sparkles size={size} />;
    default: return <Factory size={size} />;
  }
};

export const Slide1Expertise: React.FC<Slide1ExpertiseProps> = ({ isDarkMode }) => {
  const [selectedId, setSelectedId] = useState<string>('sheet_metal');

  const selectedCommodity: CommodityCapability = 
    COMMODITIES_DATA.find(c => c.id === selectedId) || COMMODITIES_DATA[0];

  return (
    <div className="space-y-6">
      {/* Slide Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold mb-2">
            <Award size={13} />
            <span>SLIDE 01 // 11+ YEARS MANUFACTURING EXPERTISE & PROCESS SPECTRUM</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-poppins text-white tracking-tight leading-tight">
            Comprehensive Multi-Commodity Costing Capabilities
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl">
            11+ years of clean-sheet engineering should-costing, cycle time physics, tooling mold-flow analysis, and supplier negotiation benchmarking across 6 core manufacturing commodities.
          </p>
        </div>

        {/* Experience Proof Badge */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-950 p-3 rounded-2xl border border-slate-800 shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 border border-cyan/40 flex items-center justify-center font-black text-xl text-cyan font-poppins">
            11+
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Years Costing Expertise</div>
            <div className="text-[11px] font-mono text-slate-400">45+ Manufacturing Operations</div>
          </div>
        </div>
      </div>

      {/* Commodity Selector Tabs (Horizontal Cards with Real Images) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {COMMODITIES_DATA.map((item) => {
          const isSelected = selectedId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`p-2.5 rounded-2xl border transition-all text-left flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? 'bg-slate-900 border-cyan shadow-[0_0_20px_rgba(34,211,238,0.25)] ring-1 ring-cyan'
                  : 'bg-slate-950/80 border-slate-850 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              {/* Card Background Thumbnail */}
              <div className="w-full h-16 rounded-xl overflow-hidden mb-2 relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    isSelected ? 'opacity-90' : 'opacity-50 group-hover:opacity-75'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-1.5 left-1.5 p-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-cyan border border-slate-800">
                  {getCommodityIcon(item.iconName, 14)}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase text-slate-500 group-hover:text-cyan transition-colors">
                  {item.categoryTag}
                </div>
                <div className="text-xs font-bold text-white mt-0.5 line-clamp-1">
                  {item.name}
                </div>
              </div>

              {isSelected && (
                <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-cyan shadow-[0_0_6px_#22d3ee]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Selected Commodity Deep Dive Panel */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        
        {/* Commodity Hero Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan/10 border border-cyan/30 text-cyan flex items-center justify-center shrink-0 shadow-lg">
              {getCommodityIcon(selectedCommodity.iconName, 28)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-cyan/15 text-cyan border border-cyan/30">
                  {selectedCommodity.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedCommodity.tolerances}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-white mt-1">
                {selectedCommodity.name}
              </h2>
              <p className="text-xs text-slate-300 mt-0.5 max-w-2xl">
                {selectedCommodity.headline}
              </p>
            </div>
          </div>

          {/* Reference Image Badge Preview */}
          <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-2xl border border-slate-800 shrink-0">
            <img 
              src={selectedCommodity.imageUrl} 
              alt={selectedCommodity.name}
              referrerPolicy="no-referrer"
              className="w-20 h-14 rounded-xl object-cover border border-slate-700"
            />
            <div className="pr-2">
              <div className="text-[10px] font-mono text-cyan uppercase font-bold">Practical Reference</div>
              <div className="text-xs font-bold text-white">Factory Validated</div>
            </div>
          </div>
        </div>

        {/* 3 Process Subcategory Columns (Full Exhaustive Operations) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {selectedCommodity.subcategories.map((sub, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-850">
                  <span className="text-xs font-bold font-poppins text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                    {sub.category}
                  </span>
                  <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-1.5 py-0.5 rounded">
                    {sub.operations.length} Ops
                  </span>
                </div>

                <ul className="mt-3 space-y-2">
                  {sub.operations.map((op, oIdx) => (
                    <li key={oIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 size={13} className="text-cyan mt-0.5 shrink-0" />
                      <span>{op}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-500 border-t border-slate-900">
                Parametric Clean-Sheet Cycle Model Active
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Technical Parameters & Representative Parts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2">
          {/* Key Parameters */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-850 space-y-2">
            <div className="text-[11px] font-mono uppercase text-cyan font-bold tracking-wider">
              Key Engineering Parameters & Capacities:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {selectedCommodity.keyParameters.map((p, pIdx) => (
                <div key={pIdx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-mono">{p.label}</div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">{p.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Parts Tested */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-850 space-y-2">
            <div className="text-[11px] font-mono uppercase text-violet-400 font-bold tracking-wider">
              Representative Costed Parts in Production:
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCommodity.sampleParts.map((part, pIdx) => (
                <span 
                  key={pIdx}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {part}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
