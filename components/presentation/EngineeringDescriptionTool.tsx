import React, { useState } from 'react';
import { CommodityData } from './costingData';

interface EngineeringDescriptionToolProps {
  commodity: CommodityData;
}

export const EngineeringDescriptionTool: React.FC<EngineeringDescriptionToolProps> = ({ commodity }) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'physics' | 'audit'>('specs');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const tool = commodity.engineeringTool;

  if (!tool) {
    return null;
  }

  const handleTabClick = (tab: 'specs' | 'physics' | 'audit') => {
    setActiveTab(tab);
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <div className="eng-desc-tool-card mt-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden text-left transition-all">
      {/* Tool Header & Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <div 
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => setIsExpanded(!isExpanded)}
          title="Click to toggle Engineering Tool panel"
        >
          <div className="w-6 h-6 rounded-md bg-blue-500/10 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
            ⚙️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-none">
                Engineering Description & Tooling Suite
              </h4>
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">
                {isExpanded ? '▾' : '▸'}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
              Interactive OEM Service Tool · {commodity.name}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Minimal Tool Tab Switcher */}
          <div className="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700/60">
            <button
              type="button"
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                activeTab === 'specs'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              onClick={() => handleTabClick('specs')}
            >
              📋 Description & Tooling
            </button>
            <button
              type="button"
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                activeTab === 'physics'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              onClick={() => handleTabClick('physics')}
            >
              ⚡ Physics Engine
            </button>
            <button
              type="button"
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                activeTab === 'audit'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              onClick={() => handleTabClick('audit')}
            >
              🔍 DFM & Audit
            </button>
          </div>

          <button
            type="button"
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Collapse tool panel" : "Expand tool panel"}
          >
            {isExpanded ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Content Area */}
      {isExpanded && (
        <>

      {/* Tab 1: Description & Tooling Specs */}
      {activeTab === 'specs' && (
        <div className="p-3.5 space-y-3">
          {/* Part Technical Description */}
          <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Part Engineering Description & Geometry
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 font-mono font-medium">
                {tool.criticalDimensions}
              </span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {tool.partDescription}
            </p>
            <div className="mt-2 pt-2 border-t border-blue-200/40 dark:border-blue-900/30 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Target Application: <span className="font-normal">{tool.oemApplication}</span>
              </span>
            </div>
          </div>

          {/* Tooling Specification Matrix */}
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Production Tooling Specification & Asset Amortization
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mb-0.5">Tool Architecture</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{tool.tooling.toolType}</span>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Die Material: <span className="font-medium text-slate-700 dark:text-slate-300">{tool.tooling.dieMaterial}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mb-0.5">Tool Capex & Amortization</span>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-slate-100">{tool.tooling.toolCapex}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">{tool.tooling.amortizationPart}</span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Tool Life: <span className="font-medium text-slate-700 dark:text-slate-300">{tool.tooling.toolLife}</span>
                </div>
              </div>
            </div>

            <div className="mt-2 p-2 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
              <span><b>Maintenance Regimen:</b> {tool.tooling.maintenanceInterval}</span>
              <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">
                Stations/Cavities: {tool.tooling.cavitiesOrStations}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Physics Engine */}
      {activeTab === 'physics' && (
        <div className="p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {tool.physics.title}
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              Engineering Sizing Rules
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tool.physics.stats.map((st, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
              >
                <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  {st.key}
                </div>
                <div className="text-sm font-bold font-mono text-blue-600 dark:text-blue-400 mt-0.5">
                  {st.val}
                </div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1 pt-1 border-t border-slate-200/60 dark:border-slate-700/60 break-words">
                  {st.formula}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: DFM & Quality Audit */}
      {activeTab === 'audit' && (
        <div className="p-3.5 space-y-2.5 text-xs">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Design For Manufacturing (DFM) & Quality Gate Checklist
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mb-0.5">
                Tolerance Standard
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {tool.dfmQuality.toleranceStandard}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mb-0.5">
                Quality Gate & Metrology
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {tool.dfmQuality.qualityGate}
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-200">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[11px]">Material Yield & Scrap Credit Calculation</span>
              <span className="font-mono font-bold text-xs">{tool.dfmQuality.yieldRatio}</span>
            </div>
            <p className="text-[11px] text-emerald-800/90 dark:text-emerald-300/90 leading-relaxed font-mono">
              {tool.dfmQuality.scrapCreditLogic}
            </p>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
};
