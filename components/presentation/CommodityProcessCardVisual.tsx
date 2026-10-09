import React, { useState } from 'react';

export interface ProcessMediaInfo {
  commodityKey: string;
  badgeTitle: string;
  badgeColor?: string;
  
  // Machine Details
  machineName: string;
  machineType: string;
  machineSpecs: string;
  machineImageUrl: string;
  machineScenario: string;
  
  // Real Part Details
  partName: string;
  partSpecs: string;
  partImageUrl: string;
  partScenario: string;
  
  // Physics & Logic parameters for practical deep-dive
  physicsFormula: string;
  practicalMetrics: { label: string; value: string }[];
}

export const COMMODITY_PROCESS_DETAILS: Record<string, ProcessMediaInfo> = {
  sheetmetal: {
    commodityKey: 'sheetmetal',
    badgeTitle: 'Sheet Metal',
    badgeColor: '#38bdf8',
    machineName: 'Sheetmetal Stamping Press Line',
    machineType: '800T Hydraulic Deep Draw & Progressive Stamping Press',
    machineSpecs: '800-Ton · 25 SPM · Multi-Stage Tooling Bed',
    machineImageUrl: '/images/manufacturing/sheetmetal_press.jpg',
    machineScenario: 'Automated decoiling, straightener feeder, progressive stamping die bed, and hydraulic deep-drawing ram with automated blank lubrication.',
    partName: 'Stamped & Deep-Drawn Parts',
    partSpecs: 'CRCA Steel 2.0mm · Deep Drawn Shells & Flanged Brackets',
    partImageUrl: '/images/manufacturing/sheetmetal_parts.jpg',
    partScenario: 'Real cold-rolled deep-drawn cups and stamped automotive brackets featuring pierced datum holes, 90° bend reliefs, and uniform wall thickness.',
    physicsFormula: 'Blanking Force: F = L × t × τ_max × (1 + clearance_factor) · Deep Draw Limiting Draw Ratio (LDR) ≈ 2.0',
    practicalMetrics: [
      { label: 'Tonnage Capacity', value: '15T to 2,500T' },
      { label: 'Feed Speed', value: '15 to 45 Strokes/Min' },
      { label: 'Die Clearance', value: '8% to 12% Sheet Thickness' },
      { label: 'Material Yield', value: '78% to 86% Strip Utilization' }
    ]
  },
  plastic: {
    commodityKey: 'plastic',
    badgeTitle: 'Plastic Molding',
    badgeColor: '#a78bfa',
    machineName: 'Plastic Injection Molding Machine',
    machineType: '350T Servo-Hydraulic Horizontal Injection Molding Machine',
    machineSpecs: '350-Ton Clamp · Hot Runner · Digital Temperature Zones',
    machineImageUrl: '/images/manufacturing/plastic_molding_machine.jpg',
    machineScenario: 'Thermoplastic resin pellet drying, heated reciprocating screw barrel, hydraulic toggle mold clamping, and automatic robotic part ejection.',
    partName: 'Precision Molded Plastic Parts',
    partSpecs: 'Engineering ABS/PC Alloy · 2.2mm Wall · Matte VDI 27',
    partImageUrl: '/images/manufacturing/plastic_parts.jpg',
    partScenario: 'Real injection molded modular electronics housings with internal structural stiffening ribs, threaded screw bosses, and snap-fit cantilever joints.',
    physicsFormula: 'Cooling Time: t_c = (h² / (π² · α)) × ln((4/π) · (T_melt - T_mold)/(T_eject - T_mold))',
    practicalMetrics: [
      { label: 'Clamping Force', value: '350 Metric Tons' },
      { label: 'Cycle Time', value: '18.4 seconds (1x4 Cavity)' },
      { label: 'Melt Temperature', value: '235°C to 255°C' },
      { label: 'Shrinkage Allowance', value: '0.4% to 0.6% Volumetric' }
    ]
  },
  machining: {
    commodityKey: 'machining',
    badgeTitle: 'Precision Machining',
    badgeColor: '#10b981',
    machineName: 'CNC Vertical Machining Center (VMC)',
    machineType: '3-Axis & 4-Axis VMC Milling Machine with High-Torque Spindle',
    machineSpecs: '12,000 RPM · BT40 Tool Spindle · Through-Tool Coolant',
    machineImageUrl: '/images/manufacturing/vmc_machining_center.png',
    machineScenario: 'Rigid cast-iron column VMC, automatic 24-pocket tool changer, flooded chip flush, and synchronized rigid tapping on solid billets.',
    partName: 'Precision CNC Machined Parts',
    partSpecs: 'EN8 / 6061-T6 Billet · Ra 0.8μm Finish · ±0.01mm Tolerance',
    partImageUrl: '/images/manufacturing/machined_parts.jpg',
    partScenario: 'Real precision CNC turned shafts and milled prismatic manifolds with precision bearing journals, O-ring grooves, and ground dowel bores.',
    physicsFormula: 'Kienzle Cutting Force: F_c = b × h^(1-z) × k_c1.1 · Spindle Power: P_c = (F_c × V_c) / (60,000 × η)',
    practicalMetrics: [
      { label: 'Spindle Power', value: '15 kW High-Torque' },
      { label: 'Rapid Traverse', value: '36 m/min (X/Y/Z)' },
      { label: 'Surface Roughness', value: 'Ra 0.4μm to 1.6μm' },
      { label: 'Tolerance Grade', value: 'ISO 2768-fH (Micron Precision)' }
    ]
  },
  forging: {
    commodityKey: 'forging',
    badgeTitle: 'Forging',
    badgeColor: '#f97316',
    machineName: 'Heavy Industrial Forging Press',
    machineType: '2,500T Closed-Die Hydraulic & Mechanical Drop Forging Press',
    machineSpecs: '2,500-Ton Force · 1200°C Billet Induction Line',
    machineImageUrl: '/images/manufacturing/forging_press.jpg',
    machineScenario: 'Continuous induction heating of round alloy billets to 1200°C, automated descaling, blocker and finisher impression dies under heavy hydraulic ram.',
    partName: 'Hot Closed-Die Forged Parts',
    partSpecs: 'EN19 / 4140 Alloy Steel · Normalized & Shot-Peened',
    partImageUrl: '/images/manufacturing/forged_parts.jpg',
    partScenario: 'Real high-tensile hot forged automotive connecting rods and flanged drive yokes exhibiting continuous metallurgical grain flow and flash trim lines.',
    physicsFormula: 'Forging Load: P = σ_f × A_projected × (1 + (μ × d) / (3 × h)) · Flash Resistance Factor',
    practicalMetrics: [
      { label: 'Billet Pre-Heat', value: '1,180°C to 1,220°C' },
      { label: 'Blow Energy', value: '160 kJ High Energy' },
      { label: 'Die Life Standard', value: '25,000 to 45,000 strikes' },
      { label: 'Grain Alignment', value: '100% Unbroken Flow Lines' }
    ]
  },
  secondary: {
    commodityKey: 'secondary',
    badgeTitle: 'Secondary Process',
    badgeColor: '#f5b301',
    machineName: 'Plating Booth & Surface Line',
    machineType: 'Automated Electroplating Line & Controlled Coating Booth',
    machineSpecs: 'Multi-Tank Immersion · Cathodic Bar Racks · Exhaust Filtration',
    machineImageUrl: '/images/manufacturing/plating_booth.jpg',
    machineScenario: 'Automated hoist conveyor transfer through degreasing, acid pickling, electrodeposition baths, trivalent passivating rinses, and hot-air drying booths.',
    partName: 'Electroplated & Passivated Hardware',
    partSpecs: 'Fe/Zn 8μm Blue Trivalent Passivation & Electroless Nickel',
    partImageUrl: '/images/manufacturing/plated_parts.jpg',
    partScenario: 'Real batch-plated stamped fasteners, precision brackets, and zinc-plated structural hardware displaying iridescent blue corrosion protection.',
    physicsFormula: "Faraday's Law of Electrolysis: Coating Thickness d = (I × t × M) / (z × F × ρ × Area)",
    practicalMetrics: [
      { label: 'Plating Thickness', value: '8μm to 12μm Uniform' },
      { label: 'Salt Spray Life', value: '120h to 240h White Rust (ASTM B117)' },
      { label: 'Bath Temperature', value: '28°C to 35°C Controlled' },
      { label: 'Environmental', value: 'RoHS & REACH Compliant Trivalent' }
    ]
  },
  diecasting: {
    commodityKey: 'diecasting',
    badgeTitle: 'Die Casting',
    badgeColor: '#ec4899',
    machineName: 'High Pressure Die Casting Cell',
    machineType: '800T Cold Chamber HPDC Machine with Robotic Ladle',
    machineSpecs: '800-Ton Locking · Multi-Cavity Tool · Vacuum Assist',
    machineImageUrl: '/images/manufacturing/die_casting_machine.jpg',
    machineScenario: 'Molten aluminum holding furnace at 680°C, automated dosing ladle, high-velocity shot sleeve injection, and hydraulic core pulling slides.',
    partName: 'Die Cast Aluminum Housings',
    partSpecs: 'A380 / ADC12 Alloy · Complex Thin-Wall Enclosure with Fins',
    partImageUrl: '/images/manufacturing/die_casting_machine.jpg',
    partScenario: 'Real high-pressure die cast inverter housing with integral heat dissipation fins, cored mounting bosses, and precision CNC gasket surfaces.',
    physicsFormula: 'Cavity Fill Time: t_fill = k × ((T_cast - T_liquidus + S) / (T_liquidus - T_die)) × Wall_Thickness',
    practicalMetrics: [
      { label: 'Locking Force', value: '800 Metric Tons' },
      { label: 'Plunger Velocity', value: '4.5 m/s 2nd Stage' },
      { label: 'Die Pre-heat', value: '180°C to 240°C Thermoregulated' },
      { label: 'Intensification', value: '750 Bar Final Squeeze' }
    ]
  }
};

interface CommodityProcessCardVisualProps {
  commodityKey: string;
  fallbackSvg?: React.ReactNode;
  onOpenDeepDive?: (info: ProcessMediaInfo) => void;
}

export const CommodityProcessCardVisual: React.FC<CommodityProcessCardVisualProps> = ({
  commodityKey,
  fallbackSvg,
  onOpenDeepDive
}) => {
  const [viewMode, setViewMode] = useState<'machine' | 'part'>('machine');
  const [imgError, setImgError] = useState(false);

  const info = COMMODITY_PROCESS_DETAILS[commodityKey] || COMMODITY_PROCESS_DETAILS.sheetmetal;

  const currentImage = viewMode === 'machine' ? info.machineImageUrl : info.partImageUrl;
  const currentTitle = viewMode === 'machine' ? info.machineName : info.partName;
  const currentSpecs = viewMode === 'machine' ? info.machineSpecs : info.partSpecs;
  
  const altImage = viewMode === 'machine' ? info.partImageUrl : info.machineImageUrl;
  const altLabel = viewMode === 'machine' ? 'Real Part' : 'Machine';

  return (
    <div className="relative w-full h-[180px] group overflow-hidden bg-slate-950 flex flex-col justify-end">
      {/* Background Image / Practical Visual */}
      {!imgError ? (
        <img
          src={currentImage}
          alt={currentTitle}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          {fallbackSvg || <div className="text-slate-500 text-xs">Process Visualization</div>}
        </div>
      )}

      {/* Atmospheric Industrial Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

      {/* Top Header Bar with Commodity Badge & Mode Toggle */}
      <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10">
        <span 
          className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: `1px solid ${info.badgeColor || '#38bdf8'}40` }}
        >
          {info.badgeTitle}
        </span>

        {/* Machine vs Real Part Segmented Control */}
        <div className="inline-flex p-0.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('machine');
            }}
            className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all duration-200 ${
              viewMode === 'machine'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
            title="View practical manufacturing machine"
          >
            Machine
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('part');
            }}
            className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all duration-200 ${
              viewMode === 'part'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
            title="View real manufactured component"
          >
            Real Part
          </button>
        </div>
      </div>

      {/* Picture-in-Picture (PIP) Thumbnail in Lower Right Corner */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setViewMode(viewMode === 'machine' ? 'part' : 'machine');
        }}
        className="absolute bottom-2.5 right-2.5 z-20 w-14 h-14 rounded-lg overflow-hidden border-2 border-white/40 shadow-xl bg-slate-900 group-hover:border-cyan transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        title={`Click to switch to ${altLabel}`}
      >
        <img
          src={altImage}
          alt={altLabel}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 bottom-0 bg-slate-950/85 text-[8px] font-mono text-center font-bold text-cyan py-0.5 tracking-tighter">
          {altLabel}
        </div>
      </button>

      {/* Bottom Information Overlay */}
      <div className="relative z-10 px-3 pb-2.5 pt-4 pr-16 pointer-events-none">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-white drop-shadow-sm truncate">
          <span className={`w-1.5 h-1.5 rounded-full ${viewMode === 'machine' ? 'bg-blue-400 animate-pulse' : 'bg-emerald-400'}`} />
          <span className="truncate">{currentTitle}</span>
        </div>
        <div className="text-[9.5px] font-mono text-slate-300 drop-shadow truncate mt-0.5">
          {currentSpecs}
        </div>
      </div>

      {/* Hover Deep-Dive Button */}
      {onOpenDeepDive && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDeepDive(info);
          }}
          className="absolute top-2.5 right-28 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30"
          title="Inspect manufacturing physics & logic"
        >
          Physics & Logic
        </button>
      )}
    </div>
  );
};
