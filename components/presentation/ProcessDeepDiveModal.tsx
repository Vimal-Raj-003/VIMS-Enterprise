import React from 'react';
import { ProcessMediaInfo } from './CommodityProcessCardVisual';

interface ProcessDeepDiveModalProps {
  info: ProcessMediaInfo | null;
  onClose: () => void;
}

export const ProcessDeepDiveModal: React.FC<ProcessDeepDiveModalProps> = ({ info, onClose }) => {
  if (!info) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span 
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
            style={{ backgroundColor: info.badgeColor || '#38bdf8' }}
          >
            {info.badgeTitle}
          </span>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{info.machineName}</h2>
            <p className="text-sm text-slate-400 font-mono mt-0.5">{info.machineType}</p>
          </div>
        </div>

        {/* Side-by-Side Visuals: Machine vs Real Part */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Exact Machine */}
          <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col">
            <div className="relative h-56 bg-slate-950">
              <img 
                src={info.machineImageUrl} 
                alt={info.machineName} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-blue-600/90 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                Practical Machine Scenario
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-sm text-white mb-1">{info.machineName}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{info.machineScenario}</p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan">
                {info.machineSpecs}
              </div>
            </div>
          </div>

          {/* Real Manufactured Part */}
          <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col">
            <div className="relative h-56 bg-slate-950">
              <img 
                src={info.partImageUrl} 
                alt={info.partName} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-emerald-600/90 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                Real Manufactured Component
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-sm text-white mb-1">{info.partName}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{info.partScenario}</p>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
                {info.partSpecs}
              </div>
            </div>
          </div>
        </div>

        {/* Physics & Logic Clean-Sheet Formulas */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            Clean-Sheet Costing Physics & Formula
          </div>
          <p className="font-mono text-xs text-slate-200 bg-slate-900/90 p-3 rounded-lg border border-slate-700/60 leading-relaxed">
            {info.physicsFormula}
          </p>
        </div>

        {/* Practical Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {info.practicalMetrics.map((metric, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">{metric.label}</div>
              <div className="text-xs font-bold text-white font-mono">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
