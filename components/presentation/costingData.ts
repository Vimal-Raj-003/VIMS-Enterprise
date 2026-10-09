export interface CostRowItem {
  l: string;
  s: string;
  v: string;
  p: string;
}

export interface EngineeringToolSpec {
  partDescription: string;
  oemApplication: string;
  criticalDimensions: string;
  tooling: {
    toolType: string;
    dieMaterial: string;
    cavitiesOrStations: string;
    toolCapex: string;
    amortizationPart: string;
    toolLife: string;
    maintenanceInterval: string;
  };
  physics: {
    title: string;
    stats: Array<{
      key: string;
      val: string;
      formula: string;
    }>;
  };
  dfmQuality: {
    toleranceStandard: string;
    qualityGate: string;
    yieldRatio: string;
    scrapCreditLogic: string;
  };
}

export interface CommodityData {
  key: string;
  name: string;
  commodity: string;
  material: string;
  weight: string;
  rawRate: string;
  thickness: string;
  operations: string;
  complexity: string;
  machine: string;
  spm: string;
  cycleTime: string;
  color: string;
  engineeringTool?: EngineeringToolSpec;
  costs: {
    material: CostRowItem[];
    process: CostRowItem[];
    secondary: CostRowItem[];
    overhead: CostRowItem[];
    final: CostRowItem[];
  };
  summary: {
    mat: string;
    proc: string;
    sec: string;
    oh: string;
    pl: string;
    margin: string;
    total: string;
    annual: string;
  };
  chart: number[];
}

export const commoditiesData: Record<string, CommodityData> = {
  sheetmetal: {
    key: 'sheetmetal',
    name: 'CRCA Enclosure Bracket',
    commodity: 'Sheet Metal · Progressive Stamping',
    material: 'CRCA Steel (IS 513 Gr.D / 2.5mm)',
    weight: '0.380 kg (Net finished)',
    rawRate: '₹ 68 / kg',
    thickness: '2.5 mm (Uniform Gauge)',
    operations: '5-Station (Pierce, Emboss, Form, Cutoff)',
    complexity: 'Medium',
    machine: 'Progressive Press 110T',
    spm: '45 strokes/min',
    cycleTime: '1.33 sec',
    color: '#2f7df7',
    engineeringTool: {
      partDescription: 'Heavy-duty CRCA cold-rolled steel bracket for automotive inverter/chassis enclosures. 140 mm width × 80 mm height channel profile with two rear mounting holes, a base wireway slot, an embossed stiffening rib across the back wall to prevent resonance vibration, and formed 90° flanges with 2.5 mm bend reliefs.',
      oemApplication: 'EV Power Electronics Enclosure Mounting Subassembly (Tier-1 Body-in-White)',
      criticalDimensions: '140 mm (±0.25mm) width · 80 mm (±0.20mm) height · 2.5 mm uniform cold-rolled gauge',
      tooling: {
        toolType: 'Class-A 5-Stage Progressive Die with Carbide Inserts',
        dieMaterial: 'AISI D2 Tool Steel (60–62 HRC) Punch/Die, Ground Nitrogen Spring Stripper',
        cavitiesOrStations: '5 Active Stations (Pierce, Emboss, Form 1, Form 2, Cam Cutoff)',
        toolCapex: '₹ 3,20,000 (One-time tooling asset)',
        amortizationPart: '₹ 1.60 / pc (Amortized over 2,00,000 pcs volume)',
        toolLife: '2,00,000 Strokes (Regrind every 25,000 strokes)',
        maintenanceInterval: 'Preventive punch inspection every 10,000 strokes'
      },
      physics: {
        title: 'Progressive Press Sizing & Strip Physics',
        stats: [
          { key: '1. Shearing / Cutting Force', val: '75.6 Tonnes', formula: 'F_cut = L × t × τ_shear = 926.5mm × 2.5mm × 320 N/mm² = 741.2 kN' },
          { key: '2. Bending & Stripping Force', val: '25.5 Tonnes', formula: '2× 90° bends with R=2.5mm (1t) + 10% bottoming stripping reserve' },
          { key: '3. Machine Tonnage Sized', val: '110 Tonne Mechanical Press', formula: 'Total 101.1 T required · 1.1x safety margin on 110T mechanical crank press' },
          { key: '4. Strip Nesting & Scrap', val: '71.2% Yield · 0.154 kg Scrap', formula: 'Developed blank 195 × 140 mm · Gross 0.534 kg · Scrap credit @ ₹28/kg = −₹4.31' }
        ]
      },
      dfmQuality: {
        toleranceStandard: 'DIN ISO 2768-m (Fine-to-Medium Stamping Standard)',
        qualityGate: '100% Go/No-Go Gauge on Hole Pitch · CMM 5-Piece First Article Inspection',
        yieldRatio: '71.2% Strip Nesting Yield (140mm strip pitch)',
        scrapCreditLogic: 'Offal skeleton recovered at ₹ 28.00/kg (₹ 4.31 recovery per piece)'
      }
    },
    costs: {
      material: [
        { l: 'Raw Material Rate', s: 'CRCA IS 513 Gr.D coil · per kg', v: '₹ 68.00', p: 'Base' },
        { l: 'Gross Blank (195 × 140 × 2.5)', s: 'Developed flat layout · 0.534 kg @ ₹68', v: '₹ 36.31', p: 'Blank' },
        { l: 'Net Part Weight (finished)', s: '0.380 kg after slot & 2 holes punched', v: '₹ 25.84', p: 'Net' },
        { l: 'Scrap Recovery Offset', s: '0.154 kg skeleton offal @ ₹ 28/kg', v: '− ₹ 4.31', p: 'Offset' },
        { l: 'Strip Nesting Utilization', s: '140mm width pitch · 71.2% utilization', v: '71.2 %', p: 'Yield' }
      ],
      process: [
        { l: 'Primary Stamping · Progressive', s: '110T Press (75.6T cut + 18T bend force)', v: '₹ 1.42', p: 'Core' },
        { l: 'Machine Hour Rate (MHR)', s: 'Progressive Press 110T · ₹ 420 / hr', v: '₹ 420 /hr', p: 'MHR' },
        { l: 'Stroke Rate & Cycle Time', s: '45 SPM · 1.33 sec cycle @ 80% OEE', v: '1.33 sec', p: 'Cycle' },
        { l: 'Direct Operator & Helper', s: '1 skilled setter + 1 feeder crew', v: '₹ 0.85', p: 'Labor' },
        { l: 'Lubricant & Maintenance', s: 'Forming oil & die wear reserve share', v: '₹ 0.42', p: 'Cons.' }
      ],
      secondary: [
        { l: 'Vibratory Deburring', s: 'Edge break on 2.5mm sheared faces', v: '₹ 1.20', p: 'Finish' },
        { l: 'Trivalent Zinc Plating', s: 'Fe/Zn 8μm blue passivation (ASTM B633)', v: '₹ 4.80', p: 'Plate' },
        { l: 'Inspection & Gauging', s: 'Go/No-Go 140×80mm gauge + CMM sample', v: '₹ 0.60', p: 'QA' }
      ],
      overhead: [
        { l: 'Progressive Die Amortization', s: '₹ 3,20,000 tool ÷ 2,00,000 parts', v: '₹ 1.60', p: 'Amort.' },
        { l: 'Factory & Admin Overhead', s: 'Plant power, floor space, supervision (10%)', v: '₹ 3.47', p: 'OH' }
      ],
      final: [
        { l: 'Export Packaging', s: 'Corrugated nesting trays · 150 pcs/box', v: '₹ 0.90', p: 'Pack' },
        { l: 'Inbound Logistics', s: 'Plant to tier-1 assembly hub · LTL', v: '₹ 1.10', p: 'Log.' },
        { l: 'Margin', s: '10% on total landed manufacturing cost', v: '₹ 4.02', p: 'Margin' }
      ]
    },
    summary: {
      mat: '₹ 23.69',
      proc: '₹ 2.69',
      sec: '₹ 6.60',
      oh: '₹ 5.07',
      pl: '₹ 2.00',
      margin: '₹ 4.02',
      total: '₹ 44.07',
      annual: 'Annual @ 2,00,000 pcs · ₹ 88.14 L'
    },
    chart: [38, 8, 18, 12, 5, 9]
  },

  diecasting: {
    key: 'diecasting',
    name: 'HPDC Housing',
    commodity: 'Die Casting · HPDC',
    material: 'Aluminum A380',
    weight: '0.42 kg',
    rawRate: '₹ 240 / kg',
    thickness: '3.0 mm wall',
    operations: 'HPDC + trim + machine',
    complexity: 'Medium',
    machine: 'HPDC 400T',
    spm: 'N/A',
    cycleTime: '38 sec/shot',
    color: '#f97316',
    engineeringTool: {
      partDescription: 'High-Pressure Die Cast A380 Aluminum housing for automotive inverter/stator assembly. 160 mm × 110 mm with 3.0 mm uniform wall, integrated heat dissipation cooling fins, a central Ø55 mm stator bore, four corner M6 tapped mounting bosses with generous internal radii (R3.5mm), and a 1.5° draft angle.',
      oemApplication: 'EV Traction Inverter & Power Electronic Housing Cell (Underhood Tier-1 Powertrain)',
      criticalDimensions: '160 mm (±0.30mm) length · 110 mm (±0.25mm) width · 3.0 mm uniform wall thickness',
      tooling: {
        toolType: '2-Cavity Vacuum-Assisted HPDC Die with PVD Nitrided Inserts',
        dieMaterial: 'Premium AISI H13 ESR Tool Steel (48–52 HRC) Core & Cavity Inserts',
        cavitiesOrStations: '2-Cavity Balanced Runner with Chill Vents & Hydraulic Side Cores',
        toolCapex: '₹ 4,80,000 (Die casting mold tooling asset)',
        amortizationPart: '₹ 8.00 / pc (Amortized over 60,000 pcs volume)',
        toolLife: '60,000 Shots (Thermal stress-relief temper every 15,000 shots)',
        maintenanceInterval: 'Die parting line cleaning & ejector lubrication every shift'
      },
      physics: {
        title: 'HPDC Thermal & Clamping Physics',
        stats: [
          { key: '1. Projected Shot Area', val: '435 cm²', formula: '2 cavities (2×175 cm²) + runner/biscuit (85 cm²) = 435 cm²' },
          { key: '2. Specific Metal Pressure', val: '750 kg/cm² (73.5 MPa)', formula: 'High-integrity casting with minimal porosity requires 750 kg/cm² intensifier pressure' },
          { key: '3. Clamping Tonnage Sized', val: '400 Tonne HPDC Cell', formula: 'F_clamp = 435 cm² × 750 kg/cm² ÷ 1000 = 326.25 T × 1.2 safety factor = 391.5 T → 400T Press' },
          { key: '4. Thermal Cooling & Cycle', val: '38.0 sec Cycle Time', formula: 'Fill 28ms + solidification (t=3mm) 14.5s + dwell 8s + robot ladle/spray/eject 15.5s' }
        ]
      },
      dfmQuality: {
        toleranceStandard: 'NADCA Product Standard Grade 2 (Commercial High-Precision Die Casting)',
        qualityGate: '100% Helium Leak Testing at 1.5 Bar · X-Ray ASTM E505 Radiographic Inspection',
        yieldRatio: '82.3% Metal Recovery Yield (Runner remelt offset @ ₹ 140/kg = −₹ 17.64)',
        scrapCreditLogic: 'Runners, biscuits, and overflows remelted in adjacent reverberatory furnace'
      }
    },
    costs: {
      material: [
        { l: 'Raw Material Rate', s: 'Aluminum A380 · per kg', v: '₹ 240.00', p: 'Base' },
        { l: 'Gross Weight (with runner)', s: 'Net 0.42 kg + runner 0.09 kg', v: '₹ 122.40', p: 'Gross' },
        { l: 'Net Material Cost', s: '0.42 kg × ₹ 240', v: '₹ 100.80', p: 'Net' },
        { l: 'Scrap Recovery (18%)', s: 'Runner & overflow @ ₹ 140/kg', v: '− ₹ 17.64', p: 'Offset' },
        { l: 'Parts per Shot', s: '2-cavity tool', v: '2 parts', p: 'Ratio' }
      ],
      process: [
        { l: 'Primary Process · HPDC', s: 'High Pressure Die Casting · 400T', v: '₹ 8.92', p: 'Core' },
        { l: 'Machine Hour Rate', s: 'HPDC 400T · ₹ 850 / hr', v: '₹ 850 /hr', p: 'MHR' },
        { l: 'Cycle Time', s: '38 sec/shot · 2 parts/shot', v: '19 sec/pc', p: 'Cycle' },
        { l: 'Direct Labor', s: '1 operator × standard minute', v: '₹ 2.10', p: 'Direct' },
        { l: 'Consumables', s: 'Release agent, lubricants, sleeves', v: '₹ 1.45', p: 'Cons.' }
      ],
      secondary: [
        { l: 'Deburring & Trimming', s: 'Runner removal, flash trim', v: '₹ 3.20', p: 'Finish' },
        { l: 'Shot Blasting', s: 'Surface prep for coating', v: '₹ 4.50', p: 'Prep' },
        { l: 'Powder Coating', s: 'Epoxy-polyester · 60–80 μm', v: '₹ 12.80', p: 'Coat' },
        { l: 'CNC Drilling & Tapping', s: 'VMC · 4 holes M6 × 12 deep', v: '₹ 6.40', p: 'Mach.' },
        { l: 'Inspection (CMM)', s: 'Critical dims, GD&T validation', v: '₹ 1.80', p: 'QA' }
      ],
      overhead: [
        { l: 'Tooling Amortization', s: '₹ 4,80,000 ÷ 60,000 pcs/yr', v: '₹ 8.00', p: 'Amort.' },
        { l: 'Factory & Admin Overhead', s: 'Utilities, supervision · 12%', v: '₹ 18.96', p: 'OH' }
      ],
      final: [
        { l: 'Packaging', s: 'Corrugated dividers · 120 pcs/box', v: '₹ 3.40', p: 'Pack' },
        { l: 'Inbound Logistics', s: 'Plant to customer · LTL', v: '₹ 4.20', p: 'Log.' },
        { l: 'Margin', s: '10% on total cost', v: '₹ 18.87', p: 'Margin' }
      ]
    },
    summary: {
      mat: '₹ 83.16',
      proc: '₹ 20.87',
      sec: '₹ 28.70',
      oh: '₹ 26.96',
      pl: '₹ 7.60',
      margin: '₹ 18.87',
      total: '₹ 207.80',
      annual: 'Annual @ 60,000 pcs · ₹ 1.25 Cr'
    },
    chart: [40, 10, 14, 13, 4, 9]
  },

  plastic: {
    key: 'plastic',
    name: 'Injection Molded Cover',
    commodity: 'Plastic · Injection Molding',
    material: 'ABS Natural (Hi-Flow)',
    weight: '0.18 kg',
    rawRate: '₹ 165 / kg',
    thickness: '2.0 mm wall',
    operations: 'Molding + pad print',
    complexity: 'Medium',
    machine: 'IMM 180T',
    spm: 'N/A',
    cycleTime: '28 sec',
    color: '#8b5cf6',
    engineeringTool: {
      partDescription: 'Precision injection molded modular electronic enclosure top cover (180 × 130 mm, 2.0 mm nominal wall) molded in high-flow engineering ABS. Designed with 4 cantilever snap-fit hooks for screw-less assembly, internal orthogonal stiffening ribs (1.2 mm thick, 60% of wall) to avoid surface sink marks, cable pass-throughs, and a fine VDI 27 spark-textured cosmetic finish.',
      oemApplication: 'Industrial Gateway & IoT Edge Controller Top Shell (Tier-1 Electronics Packaging)',
      criticalDimensions: '180 mm (±0.20mm) length · 130 mm (±0.20mm) width · 2.0 mm uniform nominal wall',
      tooling: {
        toolType: '2-Cavity Valve-Gated Hot Runner Injection Mold with Beryllium Copper Chills',
        dieMaterial: 'AISI P20+Ni Pre-Hardened Tool Steel (30–34 HRC) Cavity & Core Plates',
        cavitiesOrStations: '2 Cavities with Direct Valve Pin Gating on Non-Cosmetic Underside',
        toolCapex: '₹ 3,80,000 (Injection mold tooling asset)',
        amortizationPart: '₹ 1.27 / pc (Amortized over 3,00,000 pcs volume)',
        toolLife: '3,00,000 Shots (Complete strip & ultrasonic clean every 50,000 shots)',
        maintenanceInterval: 'Ejector pin alignment check & parting line cleaning every 24h'
      },
      physics: {
        title: 'Injection Pressure & Clamping Physics',
        stats: [
          { key: '1. Projected Mold Area', val: '265 cm²', formula: '2 cavities (2 × 115 cm²) + hot runner manifold drop area (35 cm²) = 265 cm²' },
          { key: '2. Peak Cavity Pressure', val: '420 kg/cm² (41.2 MPa)', formula: 'Thin-wall flow length ratio (L/t = 90) requires 420 kg/cm² in cavity at transition' },
          { key: '3. Machine Clamp Sized', val: '180 Tonne Servo IMM', formula: 'F_clamp = 265 cm² × 420 kg/cm² ÷ 1000 = 111.3 T × 1.3 clamp safety = 144.7 T → 180T IMM' },
          { key: '4. Thermal Cooling & Cycle', val: '28.0 sec Cycle Time', formula: 'Injection 2.1s + hold 4.5s + cooling (t=2mm) 14.8s + mold open/eject/close 6.6s' }
        ]
      },
      dfmQuality: {
        toleranceStandard: 'DIN 16742-TG4 (Precision Engineering Thermoplastics Standard)',
        qualityGate: 'Critical snap-fit retention pull force test (min 45 N) · 100% cosmetic inspection',
        yieldRatio: '95.5% Production Yield (Hot runner direct drop with 20% reground runner offset)',
        scrapCreditLogic: 'Cold sprue trim reground and blended at 20% controlled ratio (−₹ 1.32/pc)'
      }
    },
    costs: {
      material: [
        { l: 'Raw Material Rate', s: 'ABS Natural Hi-Flow · per kg', v: '₹ 165.00', p: 'Base' },
        { l: 'Shot Weight', s: 'Part 0.18 kg + runner 0.04 kg', v: '₹ 36.30', p: 'Shot' },
        { l: 'Net Material Cost', s: '0.18 kg × ₹ 165', v: '₹ 29.70', p: 'Net' },
        { l: 'Reground Reuse', s: 'Runner reused at 20% mix', v: '− ₹ 1.32', p: 'Offset' },
        { l: 'Cavities', s: '2-cavity hot runner', v: '2 parts', p: 'Ratio' }
      ],
      process: [
        { l: 'Primary Process · IMM', s: 'Injection Molding · 180T', v: '₹ 1.85', p: 'Core' },
        { l: 'Machine Hour Rate', s: 'IMM 180T · ₹ 380 / hr', v: '₹ 380 /hr', p: 'MHR' },
        { l: 'Cycle Time', s: '28 sec/shot · 2 parts/shot', v: '14 sec/pc', p: 'Cycle' },
        { l: 'Direct Labor', s: '1 operator', v: '₹ 0.55', p: 'Direct' },
        { l: 'Consumables', s: 'Mold release, color masterbatch', v: '₹ 0.60', p: 'Cons.' }
      ],
      secondary: [
        { l: 'Degating', s: 'Runner trim, gate vestige', v: '₹ 0.80', p: 'Finish' },
        { l: 'Pad Printing', s: 'Logo + part number', v: '₹ 2.40', p: 'Print' },
        { l: 'Visual Inspection', s: '100% cosmetic check', v: '₹ 0.50', p: 'QA' }
      ],
      overhead: [
        { l: 'Tooling Amortization', s: '₹ 3,80,000 ÷ 3,00,000 pcs', v: '₹ 1.27', p: 'Amort.' },
        { l: 'Factory & Admin Overhead', s: '10% of direct cost', v: '₹ 3.57', p: 'OH' }
      ],
      final: [
        { l: 'Packaging', s: 'Poly bag + carton · 500 pcs', v: '₹ 0.45', p: 'Pack' },
        { l: 'Inbound Logistics', s: 'Plant to customer', v: '₹ 0.55', p: 'Log.' },
        { l: 'Margin', s: '10% on total cost', v: '₹ 4.07', p: 'Margin' }
      ]
    },
    summary: {
      mat: '₹ 28.38',
      proc: '₹ 3.00',
      sec: '₹ 3.70',
      oh: '₹ 4.84',
      pl: '₹ 1.00',
      margin: '₹ 4.07',
      total: '₹ 44.99',
      annual: 'Annual @ 3,00,000 pcs · ₹ 1.35 Cr'
    },
    chart: [42, 8, 10, 12, 3, 9]
  },

  machining: {
    key: 'machining',
    name: 'CNC Machined Shaft',
    commodity: 'Machining · Turning Center',
    material: 'EN8 Steel (Bright Bar)',
    weight: '0.62 kg',
    rawRate: '₹ 110 / kg',
    thickness: 'Ø30 × 80 mm',
    operations: 'Turn + mill + drill',
    complexity: 'Medium',
    machine: 'Turning Center + VMC',
    spm: 'N/A',
    cycleTime: '4.2 min',
    color: '#10b981',
    engineeringTool: {
      partDescription: 'High-precision stepped transmission drive shaft (Ø30 mm × 80 mm length) manufactured from cold-drawn EN8 bright carbon steel bar. Machined with precision stepped bearing seats (toleranced to ISO js6), an 8 mm wide DIN 6885 drive keyway slot, and a Ø6 mm cross-drilled lubrication hole. Bearing journals are precision centerless ground to Ra 0.8 μm surface finish.',
      oemApplication: 'Agricultural Pump & Gearbox Input Pinion Drive Shaft (Tier-1 Drivetrain)',
      criticalDimensions: 'Ø30 mm (+0.009/−0.004mm js6) bearing seats · 80 mm (±0.15mm) total length',
      tooling: {
        toolType: 'Precision 3-Jaw Hydraulic Chucking + VMC 4th-Axis Rotary Tombstone Fixture',
        dieMaterial: 'Hardened Ground Steel Fixture Subplates with TiAlN-Coated Solid Carbide Endmills',
        cavitiesOrStations: 'Dual Setup (Op 10 Turning CNC Lathe + Op 20 Milling/Drilling 3-Axis VMC)',
        toolCapex: '₹ 78,000 (Fixture and bespoke soft jaw asset per annual model)',
        amortizationPart: '₹ 6.50 / pc (Amortized over 12,000 pcs annual volume)',
        toolLife: 'Insert tool life: 80 parts per corner index (CNMG 120408 Carbide Insert)',
        maintenanceInterval: 'Spindle runout & backlash inspection every 500 operating hours'
      },
      physics: {
        title: 'Machining Chip Formation & Power Physics',
        stats: [
          { key: '1. Metal Removal Rate (MRR)', val: '42.8 cm³/min', formula: 'MRR = V_c × d × f = 180 m/min × 2.5 mm depth × 0.28 mm/rev feed' },
          { key: '2. Cutting Power Required', val: '4.65 kW at Spindle', formula: 'P_c = (MRR × k_c) ÷ 60,000 = (42.8 × 2,200 N/mm²) ÷ 60,000 = 1.57 kW specific' },
          { key: '3. Machine Sizing & Tooling', val: '7.5 kW CNC Lathe + 5.5 kW VMC', formula: 'Turning Center (₹ 550/hr MHR) + 3-Axis VMC (₹ 650/hr MHR) blended @ ₹ 585/hr' },
          { key: '4. Surface Finish & Grinding', val: 'Ra 0.8 μm Bearing Seats', formula: 'Cylindrical grind journal Ra = 0.8 μm · DIN 6885 Keyway width 8.0 mm (P9)' }
        ]
      },
      dfmQuality: {
        toleranceStandard: 'ISO 2768-f (Fine Precision Machining Grade)',
        qualityGate: '100% Air-Gauging on Ø30 js6 bearing journal · CMM Keyway symmetry audit',
        yieldRatio: '79.5% Material Buy-to-Fly (Input 0.78 kg → Net 0.62 kg finished part)',
        scrapCreditLogic: 'EN8 curled chips recovered at dry machine shop scrap rate of ₹ 32.00/kg'
      }
    },
    costs: {
      material: [
        { l: 'Raw Material Rate', s: 'EN8 Bright Bar · per kg', v: '₹ 110.00', p: 'Base' },
        { l: 'Input Weight', s: 'Ø35 × 85 mm · 0.78 kg', v: '₹ 85.80', p: 'Input' },
        { l: 'Net Weight', s: 'Finished 0.62 kg', v: '₹ 68.20', p: 'Net' },
        { l: 'Chip Recovery', s: 'EN8 chips @ ₹ 32/kg', v: '− ₹ 5.12', p: 'Offset' },
        { l: 'Buy-to-Fly', s: 'Material utilization 79%', v: '79 %', p: 'Ratio' }
      ],
      process: [
        { l: 'Turning Operation', s: 'CNC Turning Center · rough + finish', v: '₹ 42.50', p: 'Core' },
        { l: 'Milling (Keyway)', s: 'VMC · 8 mm keyway', v: '₹ 18.40', p: 'Mill' },
        { l: 'Cross Drilling', s: 'Ø6 through hole', v: '₹ 6.80', p: 'Drill' },
        { l: 'Machine Hour Rate', s: 'Turning ₹ 550/hr · VMC ₹ 650/hr', v: ' blended', p: 'MHR' },
        { l: 'Cycle Time', s: '4.2 min total · 1 pc/batch', v: '4.2 min', p: 'Cycle' },
        { l: 'Direct Labor', s: 'Skilled operator', v: '₹ 8.50', p: 'Direct' }
      ],
      secondary: [
        { l: 'Deburring', s: 'Manual edge break', v: '₹ 3.20', p: 'Finish' },
        { l: 'Black Oxide', s: 'Anti-corrosion finish', v: '₹ 8.40', p: 'Coat' },
        { l: 'CMM Inspection', s: 'Full layout · critical dims', v: '₹ 12.00', p: 'QA' }
      ],
      overhead: [
        { l: 'Tooling Amortization', s: 'Inserts, fixtures per batch', v: '₹ 6.50', p: 'Amort.' },
        { l: 'Factory & Admin Overhead', s: '12% of direct cost', v: '₹ 12.70', p: 'OH' }
      ],
      final: [
        { l: 'Packaging', s: 'VCI paper + box · 25 pcs', v: '₹ 4.80', p: 'Pack' },
        { l: 'Inbound Logistics', s: 'Plant to customer', v: '₹ 5.60', p: 'Log.' },
        { l: 'Margin', s: '12% on total cost', v: '₹ 21.10', p: 'Margin' }
      ]
    },
    summary: {
      mat: '₹ 63.08',
      proc: '₹ 76.20',
      sec: '₹ 23.60',
      oh: '₹ 19.20',
      pl: '₹ 10.40',
      margin: '₹ 21.10',
      total: '₹ 196.88',
      annual: 'Annual @ 12,000 pcs · ₹ 23.62 L'
    },
    chart: [32, 39, 12, 10, 5, 11]
  },

  forging: {
    key: 'forging',
    name: 'Closed Die Crank Arm',
    commodity: 'Forging · Closed Die',
    material: 'EN19 (AISI 4140)',
    weight: '1.85 kg',
    rawRate: '₹ 95 / kg',
    thickness: 'Forged section',
    operations: 'Forge + trim + machine',
    complexity: 'Complex',
    machine: 'Friction Screw Press 630T',
    spm: 'N/A',
    cycleTime: '45 sec',
    color: '#ef4444',
    engineeringTool: {
      partDescription: 'Closed-die hot forged automotive connecting rod / crank arm (210 mm center-to-center) forged from high-tensile EN19 (AISI 4140) alloy steel. Engineered with a balanced I-beam shank cross-section providing high strength-to-weight ratio under 45 kN dynamic cyclic tension-compression loads. Flash trimmed hot on a dedicated 150T press, followed by shot-peening and quench & temper heat treatment to 28–32 HRC.',
      oemApplication: 'Commercial Vehicle & Industrial Engine Crankshaft Con-Rod Subassembly',
      criticalDimensions: '210 mm (±0.40mm) c-to-c · Big end Ø52 mm · Small end pin eye Ø28 mm',
      tooling: {
        toolType: '2-Impression Closed Forging Die Block with Insert Pockets',
        dieMaterial: 'AISI H13 / DIN 1.2344 Hot Work Tool Steel (42–46 HRC) Die Blocks with Hardfacing',
        cavitiesOrStations: 'Dual Impression (Blower/Buster Rougher + Finisher with Flash Gutter)',
        toolCapex: '₹ 8,50,000 (Die block, ejector mechanism, and hot trimming die asset)',
        amortizationPart: '₹ 56.67 / pc (Amortized over 15,000 pcs production volume)',
        toolLife: '15,000 Forgings (Weld hardfacing re-cut impression at 7,500 parts)',
        maintenanceInterval: 'Die lubricant spray nozzle check & thermal crack inspection every shift'
      },
      physics: {
        title: 'Hot Forging Pressure & Energy Physics',
        stats: [
          { key: '1. Total Forging Load', val: '585 Tonnes Force', formula: 'F_forge = A_proj × σ_flow × C_flash = 125 cm² × 32 kg/mm² × 1.45 flash factor = 580 T' },
          { key: '2. Billet Induction Preheating', val: '1,150°C Uniform', formula: 'Billet (Ø45 × 185 mm) heated to 1,150°C in 35 kW induction coil · 45s cycle' },
          { key: '3. Machine Sizing Sized', val: '630 Tonne Friction Screw Press', formula: 'F_req 585 T + 10% bottoming reserve → 630T Friction Screw Forging Press (₹ 950/hr MHR)' },
          { key: '4. Heat Treatment & Hardness', val: '28–32 HRC Quench & Temper', formula: 'Austenitized 860°C + oil quench + tempered 580°C · Yield strength > 750 MPa' }
        ]
      },
      dfmQuality: {
        toleranceStandard: 'EN 10243-1 Grade F (Steel Die Forgings Precision Tolerances)',
        qualityGate: '100% Magnetic Particle Inspection (MPI) for seam cracks · Hardness 28–32 HRC',
        yieldRatio: '82.2% Material Utilization (Billet 2.25 kg → Net Part 1.85 kg)',
        scrapCreditLogic: 'Parting line flash + scale (0.40 kg) recovered at ₹ 28.00/kg (−₹ 11.20/pc)'
      }
    },
    costs: {
      material: [
        { l: 'Raw Material Rate', s: 'EN19 (AISI 4140) · per kg', v: '₹ 95.00', p: 'Base' },
        { l: 'Input Weight', s: 'Net + flash + scale = 2.25 kg', v: '₹ 213.75', p: 'Input' },
        { l: 'Net Weight', s: 'Finished 1.85 kg', v: '₹ 175.75', p: 'Net' },
        { l: 'Scrap Recovery', s: 'Flash + scale @ ₹ 28/kg', v: '− ₹ 11.20', p: 'Offset' },
        { l: 'Yield', s: 'Material utilization 82%', v: '82 %', p: 'Ratio' }
      ],
      process: [
        { l: 'Heating', s: 'Induction · 1150°C · 45 sec', v: '₹ 12.50', p: 'Heat' },
        { l: 'Closed Die Forging', s: 'Friction Screw Press 630T', v: '₹ 38.40', p: 'Core' },
        { l: 'Trimming', s: 'Flash trim on mechanical press', v: '₹ 8.60', p: 'Trim' },
        { l: 'Machine Hour Rate', s: '630T press · ₹ 950 / hr', v: '₹ 950 /hr', p: 'MHR' },
        { l: 'Cycle Time', s: '45 sec/pc including handling', v: '45 sec', p: 'Cycle' },
        { l: 'Direct Labor', s: '2 operators (forge + trim)', v: '₹ 6.80', p: 'Direct' }
      ],
      secondary: [
        { l: 'Shot Blasting', s: 'Scale removal, surface prep', v: '₹ 6.40', p: 'Prep' },
        { l: 'Annealing', s: 'Stress relief · 650°C', v: '₹ 9.20', p: 'HT' },
        { l: 'Rough Machining', s: 'Boss faces, bore prep', v: '₹ 24.50', p: 'Mach.' },
        { l: 'MPI Inspection', s: 'Critical areas · batch basis', v: '₹ 4.80', p: 'QA' }
      ],
      overhead: [
        { l: 'Die Amortization', s: '₹ 8,50,000 ÷ 15,000 pcs', v: '₹ 56.67', p: 'Amort.' },
        { l: 'Factory & Admin Overhead', s: '14% of direct cost', v: '₹ 22.40', p: 'OH' }
      ],
      final: [
        { l: 'Packaging', s: 'Palletized · 40 pcs/pallet', v: '₹ 5.20', p: 'Pack' },
        { l: 'Inbound Logistics', s: 'Plant to customer · FTL', v: '₹ 7.80', p: 'Log.' },
        { l: 'Margin', s: '12% on total cost', v: '₹ 45.80', p: 'Margin' }
      ]
    },
    summary: {
      mat: '₹ 164.55',
      proc: '₹ 66.30',
      sec: '₹ 44.90',
      oh: '₹ 79.07',
      pl: '₹ 13.00',
      margin: '₹ 45.80',
      total: '₹ 421.42',
      annual: 'Annual @ 15,000 pcs · ₹ 63.21 L'
    },
    chart: [39, 16, 11, 19, 3, 11]
  }
};
