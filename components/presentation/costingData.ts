export interface CostRowItem {
  l: string;
  s: string;
  v: string;
  p: string;
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
    spm: '—',
    cycleTime: '38 sec/shot',
    color: '#f97316',
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
    spm: '—',
    cycleTime: '28 sec',
    color: '#8b5cf6',
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
    spm: '—',
    cycleTime: '4.2 min',
    color: '#10b981',
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
    spm: '—',
    cycleTime: '45 sec',
    color: '#ef4444',
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
