// Industrial Should-Costing & Clean-Sheet Analysis Kickoff Data Models

export interface CommodityCapability {
  id: string;
  name: string;
  badge: string;
  categoryTag: string;
  iconName: string;
  imageUrl: string;
  headline: string;
  subcategories: {
    category: string;
    operations: string[];
  }[];
  keyParameters: { label: string; value: string }[];
  tolerances: string;
  sampleParts: string[];
}

export const COMMODITIES_DATA: CommodityCapability[] = [
  {
    id: 'sheet_metal',
    name: 'Sheet Metal & Presswork',
    badge: 'Stamping, Laser & Bending',
    categoryTag: 'Fabrication & Forming',
    iconName: 'Layers',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
    headline: 'High-speed progressive stamping, tandem press lines, laser blanking, CNC brake forming & deep drawing.',
    subcategories: [
      {
        category: 'Press Operations',
        operations: ['Single Stage Press (Blanking & Piercing)', 'Progressive Tooling Dies', 'Tandem Press Lines', 'Transfer Press Systems', 'Deep Drawing & Cup Forming', 'Coining, Embossing & Staking']
      },
      {
        category: 'Cutting & Blanking',
        operations: ['High-Power Fiber Laser (0.5mm to 25mm)', 'High-Definition Oxy-Plasma Cutting', 'Abrasive Waterjet Cutting', 'Fine Blanking (Zero-Die Clearance)', 'CNC Multi-Station Turret Punching']
      },
      {
        category: 'Forming & Assembly',
        operations: ['CNC 8-Axis Hydraulic Press Brake', 'Roll Forming Lines', 'Hemming & Sheet Metal Seaming', 'PEM Clinch Fastener & Stud Insertion', 'Robotic Spot, TIG & MIG Welding', 'Wire Bending & Spring Forming']
      }
    ],
    keyParameters: [
      { label: 'Press Tonnage Range', value: '15T to 2,500T Mechanical & Hydraulic' },
      { label: 'Gauge Thickness Matrix', value: '0.3mm to 20.0mm (CRCA, HR, SS304, AL 5052/6061)' },
      { label: 'Tooling Life Standard', value: 'Class-A Hardened D2/SKD11 (500K - 1.5M Strokes)' }
    ],
    tolerances: 'DIN ISO 2768-mK / Precision features down to ±0.05 mm',
    sampleParts: ['Automotive Sub-Frame Brackets', 'EV Battery Trays', 'Server Chassis Sub-Assemblies', 'Deep-Drawn Motor Shells']
  },
  {
    id: 'plastics',
    name: 'Plastics & Polymers',
    badge: 'Injection, Blow & Thermo',
    categoryTag: 'Polymer Engineering',
    iconName: 'Box',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    headline: 'Engineering resin mold flow simulation, hot-runner multi-cavity tooling & specialized polymer processes.',
    subcategories: [
      {
        category: 'Injection Molding',
        operations: ['Single & Multi-Cavity Injection Molding', 'Hot Runner Valve Gate Manifolds', 'Gas-Assisted Injection Molding', 'Two-Shot (2K) Overmolding', 'Metal Insert Overmolding']
      },
      {
        category: 'Blow & Thermo Molding',
        operations: ['Extrusion Blow Molding (EBM)', 'Injection Stretch Blow Molding (ISBM)', 'Heavy-Gauge Vacuum Thermoforming', 'Twin-Sheet Pressure Thermoforming']
      },
      {
        category: 'Compression & Secondary',
        operations: ['Compression Molding (SMC / BMC)', 'Rotational Molding (Rotomolding)', 'Ultrasonic Welding & Thermal Staking', 'Vibration & Spin Welding', 'Pad Printing & Laser Marking']
      }
    ],
    keyParameters: [
      { label: 'Clamping Force Spectrum', value: '30T to 2,000T All-Electric & Servo-Hydraulic' },
      { label: 'Resin Competencies', value: 'PP, ABS, PC/ABS, PA66-GF30, PEEK, POM, PBT, TPU' },
      { label: 'Cavitation Strategies', value: '1x1 prototype up to 64-Cavity hot-runner production' }
    ],
    tolerances: 'DIN 16742 TG4 to TG6 (Critical features ±0.03 mm)',
    sampleParts: ['Automotive Fan Shrouds & HVAC Cases', 'Electronic Enclosures', 'Fluid Tanks & Reservoirs', 'High-Precision Connector Housings']
  },
  {
    id: 'die_casting',
    name: 'Die Casting & Foundry',
    badge: 'HPDC, LPDC & Iron Foundry',
    categoryTag: 'Melt & Metallurgy',
    iconName: 'Flame',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    headline: 'High-pressure structural aluminum, magnesium & zinc casting with integrated vacuum and iron sand foundry.',
    subcategories: [
      {
        category: 'High-Pressure Casting (HPDC)',
        operations: ['Cold Chamber Aluminum (ADC12, A380, AlSi10Mg)', 'Hot Chamber Zinc Casting (Zamak 3, Zamak 5)', 'Magnesium Die Casting (AZ91D, AM60B)', 'Vacuum-Assisted Structural Thin-Wall HPDC']
      },
      {
        category: 'Low-Pressure & Gravity',
        operations: ['Low-Pressure Die Casting (LPDC for Wheels & Heads)', 'Gravity Die Casting (GDC / Permanent Mold)', 'Tilt-Pour Permanent Mold Casting', 'Squeeze Casting (Zero Porosity)']
      },
      {
        category: 'Foundry & Ferrous Sand',
        operations: ['Green Sand Automated Line Molding', 'Resin Coated Shell Sand Core Molding', 'Ductile Spheroidal Iron (SG Iron 400/15, 500/7)', 'Grey Cast Iron (FG 200 / 260 / 300)', 'Investment Casting (Lost Wax)']
      }
    ],
    keyParameters: [
      { label: 'HPDC Machine Force', value: '180T to 2,800T Cold & Hot Chamber Locking Force' },
      { label: 'Shot Weight Capacity', value: '0.04 kg micro zinc up to 32 kg aluminum castings' },
      { label: 'Porosity & Density Control', value: 'X-Ray ASTM E505 Level 1/2 Vacuum Integrity' }
    ],
    tolerances: 'NADCA Standards / Precision net shape ±0.08 mm',
    sampleParts: ['EV Inverter Enclosures & Stator Frames', 'Transmission Cases', 'High-Output LED Heat Sinks', 'Hydraulic Pump Valve Bodies']
  },
  {
    id: 'machining',
    name: 'Precision CNC Machining',
    badge: 'VMC, HMC & 5-Axis Turning',
    categoryTag: 'Subtractive Precision',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
    headline: '5-axis simultaneous milling, twin-spindle live tooling lathes & toolroom electrical discharge machining.',
    subcategories: [
      {
        category: 'Milling Centers',
        operations: ['3-Axis Vertical Machining Centers (VMC)', '4-Axis Rotary Indexer Machining', '5-Axis Simultaneous CNC Machining Centers', 'Horizontal Machining Centers (HMC with Dual Pallet Changer)']
      },
      {
        category: 'Turning & Mill-Turn',
        operations: ['CNC Slant Bed Turning Centers', 'Twin-Spindle Lathes with Live Tooling (C & Y Axes)', 'Swiss-Type Automatic Lathe for Micro-Turned Parts', 'Conventional Facing & Center Lathes']
      },
      {
        category: 'Toolroom & Finishing',
        operations: ['High-Precision Surface & Cylindrical Grinding', 'Wire Cut EDM (Electrical Discharge Machining)', 'CNC Spark / Sink EDM', 'Gun Drilling & Precision Honing', 'Broaching, Reaming & Thread Milling']
      }
    ],
    keyParameters: [
      { label: 'Spindle Speeds & Feeds', value: 'Up to 24,000 RPM with 70-Bar Thru-Spindle Coolant' },
      { label: 'Machining Travel Envelope', value: 'Up to 2,200mm × 1,400mm × 1,000mm (X, Y, Z)' },
      { label: 'Material Competencies', value: 'Al 6061/7075, Steel 4140, SS316L, Titanium Gr5, Inconel' }
    ],
    tolerances: 'ISO 2768-fH / Micron precision down to ±0.005 mm (5 microns)',
    sampleParts: ['Aerospace Manifolds & Valve Blocks', 'Hydraulic Spools & Cartridges', 'Precision Drive Shafts', 'Hardened Tool Steel Dies']
  },
  {
    id: 'forging',
    name: 'Forging Operations',
    badge: 'Closed Die, Open Die & Ring',
    categoryTag: 'Plastic Deformation',
    iconName: 'Wrench',
    imageUrl: 'https://images.unsplash.com/photo-1589792905706-c875d654f15d?auto=format&fit=crop&w=1000&q=80',
    headline: 'Continuous grain alignment for high-fatigue, safety-critical powertrain and structural components.',
    subcategories: [
      {
        category: 'Closed Die (Drop) Forging',
        operations: ['Hot Closed Die Drop Forging', 'Warm Precision Forging', 'Near-Net Shape Bevel Gear Forging', 'Mechanical Trimming & Billet Piercing']
      },
      {
        category: 'Open Die & Upset Forging',
        operations: ['Open Die Hydraulic Free Forging', 'Horizontal Hot Upset Forging (Flanged Axle Shafts)', 'Cold Heading & Extrusion (Fasteners & Pins)']
      },
      {
        category: 'Ring Rolling & Metallurgy',
        operations: ['Radial-Axial Seamless Ring Rolling', 'Isothermal Controlled Forging', 'Induction Billet Heating & Descaling', 'Spheroidize Annealing, Normalizing, Quench & Temper']
      }
    ],
    keyParameters: [
      { label: 'Press & Hammer Tonnage', value: '1,000T to 12,000T Mechanical, Screw & Counterblow' },
      { label: 'Forged Part Weight Range', value: '0.2 kg connecting rods up to 250 kg flanged shafts' },
      { label: 'Material Grades', value: 'Carbon Steels (EN8/EN9), Alloy Steels (EN19/EN24/4140/4340)' }
    ],
    tolerances: 'EN 10243-1 Grade F / Post-machining datum alignment',
    sampleParts: ['Automotive Crankshafts & Con-Rods', 'Flanged Drive Axles', 'Heavy Ring Gear Blanks', 'Steering Knuckles & Suspension Arms']
  },
  {
    id: 'secondary_plating',
    name: 'Secondary Surface Treatments & Plating',
    badge: 'Electroplating & Coatings',
    categoryTag: 'Surface Engineering',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    headline: 'Corrosion barrier protection, electrical conductivity, cosmetic appearance & engineered surface hardness.',
    subcategories: [
      {
        category: 'Precision Electroplating',
        operations: [
          'Electroless Nickel Plating (ENP High & Mid Phosphor)',
          'Zinc Plating with Trivalent Blue, Yellow & Black Passivation',
          'Bright & Matte Tin Plating (Busbars & Terminals)',
          'Selective Gold & Silver Plating (High-Voltage Contacts)',
          'Acid & Cyanide-Free Copper Strike & Underplate',
          'Hard Chrome & Decorative Chrome Plating'
        ]
      },
      {
        category: 'Anodizing & Conversion',
        operations: [
          'Type II Sulfuric Acid Anodizing (Clear & Color Dyed)',
          'Type III Hardcoat Anodizing (MIL-A-8625 Class 1/2, 50µm)',
          'Chemical Conversion Coating (Alodine / SurTec 650 Hex-Free)',
          'Titanium Anodizing & Color Identification',
          'Manganese & Zinc Phosphating'
        ]
      },
      {
        category: 'Organic & Barrier Coatings',
        operations: [
          'Cathodic Electro-Deposition (CED / KTL E-Coat)',
          'Electrostatic Powder Coating (Epoxy, Polyester & Hybrid)',
          'Hot-Dip Galvanizing (ASTM A123 / ISO 1461)',
          'PTFE & Dry Film Lubricant Coatings',
          'Induction Hardening, Carburizing & Stress Relief Bake'
        ]
      }
    ],
    keyParameters: [
      { label: 'Salt Spray Performance', value: 'Up to 1,200+ Hours ASTM B117 Red-Rust Free' },
      { label: 'Deposit Gauge Control', value: '2 microns (flash) up to 80 microns (heavy wear-resistant)' },
      { label: 'Environmental Compliance', value: '100% RoHS, REACH, ELV & Hexavalent-Chromium Free' }
    ],
    tolerances: 'ISO 2081, ASTM B633, MIL-DTL-5541, ASTM B733 standards',
    sampleParts: ['High-Voltage EV Busbars', 'Chassis Fasteners & Brackets', 'Sealed Outdoor Radar Housings', 'Hydraulic Piston Rods']
  }
];

// ----------------------------------------------------
// SLIDE 2 DATA: Part Complexity Triage Models
// ----------------------------------------------------
export interface ComplexityTier {
  tier: string;
  name: string;
  color: string;
  operationsCount: string;
  tolerances: string;
  turnaround: string;
  description: string;
  imageUrl: string;
  characteristics: string[];
  examples: string[];
}

export const COMPLEXITY_TIERS: ComplexityTier[] = [
  {
    tier: 'Tier 1',
    name: 'Simple Parts',
    color: 'emerald',
    operationsCount: '1 - 3 Operations',
    tolerances: '±0.1 mm or wider',
    turnaround: '2 - 4 Hours / Part',
    description: 'Single-setup geometry with standard stock materials, standard bend radii, laser blanking and minimal secondary processing.',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    characteristics: [
      'Standard raw materials (CRCA, Aluminum 6061, ABS, Mild Steel)',
      'No custom tooling or simple single-stage punch/die sets',
      'Straightforward nesting yield calculation from standard sheet/coil widths',
      'Direct cycle time estimation via cutting speed and press stroke rate'
    ],
    examples: ['2D Laser Blanked L-Brackets', 'Single-Bend Mounting Tabs', 'Turned Bushings & Spacers', 'Flat 1-Cavity Plastic Dust Caps']
  },
  {
    tier: 'Tier 2',
    name: 'Medium Complexity Parts',
    color: 'cyan',
    operationsCount: '4 - 8 Operations',
    tolerances: '±0.05 mm to ±0.02 mm',
    turnaround: '6 - 8 Hours / Part',
    description: 'Multi-stage tooling, progressive dies or 4-axis machining with secondary tapping, clinch hardware insertion, or protective plating.',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    characteristics: [
      'Progressive stamping dies or 2-cavity molds with mechanical side-actions',
      'Secondary operations: vibratory deburring, tapping, clinch PEM nuts, zinc plating',
      'Thermal cycle simulation for mold cooling and die casting chill rates',
      'Balanced scrap skeleton recovery and runner-to-part ratio calculations'
    ],
    examples: ['Progressive Stamped Motor Brackets with PEM Studs', '4-Axis CNC Milled Mounting Yokes', 'Multi-Slide Automotive Terminals', '2-Cavity Die-Cast Enclosure Halves']
  },
  {
    tier: 'Tier 3',
    name: 'Complex Parts',
    color: 'violet',
    operationsCount: '9+ Operations & Multi-Process',
    tolerances: '< ±0.01 mm (Tight GD&T)',
    turnaround: '12 - 16 Hours / Part',
    description: 'High-cavitation Class-A molds, 5-axis simultaneous CNC, structural die casting with vacuum, or complex fluid manifold assemblies.',
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
    characteristics: [
      'Multi-action tooling: hydraulic core pulls, conformal cooling channels, angled lifters',
      'Complex GD&T datums, true position callouts, runout, and surface Ra < 0.4',
      'Multi-tier assemblies with ultrasonic welding, brazing, or specialized heat treat',
      'Detailed finite-element tooling cost build-up and tool refurbishment life reserves'
    ],
    examples: ['EV Inverter Cast Liquid-Cooled Housings', '5-Axis Aerospace Turbine Manifolds', 'Multi-Cavity Hot-Runner Fan Shrouds', 'High-Pressure Hydraulic Valve Blocks']
  }
];

// ----------------------------------------------------
// SLIDE 3 DATA: Cost Report Samples
// ----------------------------------------------------
export interface CostReportSample {
  id: string;
  partNumber: string;
  partName: string;
  commodity: string;
  materialGrade: string;
  imageUrl: string;
  partDescription: string;
  annualVolume: number;
  batchSize: number;
  netWeightKg: number;
  grossWeightKg: number;
  scrapWeightKg: number;
  scrapCreditRate: number;
  supplierQuote: number;
  shouldCostTarget: number;
  materialBreakdown: {
    rawRatePerKg: number;
    rawCost: number;
    scrapCredit: number;
    netMaterialCost: number;
  };
  processSteps: {
    operation: string;
    machineName: string;
    tonnageOrModel: string;
    machineRatePerHour: number;
    cycleTimeSec: number;
    partsPerCycle: number;
    stepCost: number;
  }[];
  laborCost: number;
  secondaryCost: {
    process: string;
    specification: string;
    rateUnit: string;
    cost: number;
  };
  toolingAmortizationPerUnit: number;
  toolingTotalInvestment: number;
  overheadSgAMargin: {
    factoryOverhead: number;
    sga: number;
    profitMargin: number;
  };
}

export const SAMPLE_COST_REPORTS: Record<string, CostReportSample> = {
  sheet_metal_l_bracket: {
    id: 'sheet_metal_l_bracket',
    partNumber: 'VIMS-STAMP-L204',
    partName: 'Automotive Precision Stamped L-Bracket with PEM Clinch Studs',
    commodity: 'Sheet Metal Stamping & Fabrication',
    materialGrade: 'CRCA Cold Rolled Steel (DIN EN 10130 DC01 / 2.0mm)',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    partDescription: 'Structural chassis reinforcement L-bracket featuring 90° precision V-bend, 4 pierced mounting slots, and 2 pressed M6 PEM clinch studs.',
    annualVolume: 50000,
    batchSize: 5000,
    netWeightKg: 0.62,
    grossWeightKg: 0.88,
    scrapWeightKg: 0.26,
    scrapCreditRate: 0.42,
    supplierQuote: 4.85,
    shouldCostTarget: 3.32,
    materialBreakdown: {
      rawRatePerKg: 1.48,
      rawCost: 1.30,
      scrapCredit: 0.11,
      netMaterialCost: 1.19
    },
    processSteps: [
      { 
        operation: 'Blank & Pierce Strip', 
        machineName: 'High-Speed Mechanical C-Frame Press', 
        tonnageOrModel: '250-Ton Press (45 SPM)', 
        machineRatePerHour: 34.0, 
        cycleTimeSec: 2.5, 
        partsPerCycle: 1, 
        stepCost: 0.024 
      },
      { 
        operation: 'Precision 90° V-Bend', 
        machineName: 'CNC Multi-Axis Hydraulic Press Brake', 
        tonnageOrModel: '110-Ton / 3m Bed', 
        machineRatePerHour: 28.0, 
        cycleTimeSec: 12.0, 
        partsPerCycle: 1, 
        stepCost: 0.093 
      },
      { 
        operation: 'PEM Clinch Stud Insertion (2x M6)', 
        machineName: 'Automatic Clinch Fastener Press', 
        tonnageOrModel: 'Haeger 824-OneTouch', 
        machineRatePerHour: 22.0, 
        cycleTimeSec: 10.0, 
        partsPerCycle: 1, 
        stepCost: 0.061 
      },
      { 
        operation: 'Vibratory Deburr & Edge Chamfer', 
        machineName: 'Vibratory Spiral Bowl Tumbler', 
        tonnageOrModel: '350L Ceramic Media', 
        machineRatePerHour: 14.0, 
        cycleTimeSec: 16.0, 
        partsPerCycle: 1, 
        stepCost: 0.062 
      }
    ],
    laborCost: 0.24,
    secondaryCost: {
      process: 'Trivalent Zinc Plating + Clear/Blue Passivation (Fe/Zn 8/A)',
      specification: '8-12 microns thickness, ASTM B633 Type III, 240 hrs red rust salt spray',
      rateUnit: '6.5 dm² @ $0.052/dm²',
      cost: 0.34
    },
    toolingAmortizationPerUnit: 0.46,
    toolingTotalInvestment: 23000,
    overheadSgAMargin: {
      factoryOverhead: 0.31,
      sga: 0.16,
      profitMargin: 0.38
    }
  },
  die_casting: {
    id: 'die_casting',
    partNumber: 'VIMS-HPDC-7841',
    partName: 'EV Power Inverter Cooling Housing with CNC Milling & ENP Plating',
    commodity: 'High-Pressure Die Casting (HPDC)',
    materialGrade: 'Aluminum ADC12 / ASTM B85 Die Cast Alloy',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    partDescription: 'Complex thin-wall cast liquid cooling enclosure with internal cooling fins, precision gasket seal face milling, and 8 tapped holes.',
    annualVolume: 25000,
    batchSize: 2000,
    netWeightKg: 1.42,
    grossWeightKg: 2.10,
    scrapWeightKg: 0.68,
    scrapCreditRate: 1.65,
    supplierQuote: 38.70,
    shouldCostTarget: 26.90,
    materialBreakdown: {
      rawRatePerKg: 2.85,
      rawCost: 5.98,
      scrapCredit: 1.12,
      netMaterialCost: 4.86
    },
    processSteps: [
      { 
        operation: 'HPDC Aluminum Casting with Vacuum', 
        machineName: 'Cold Chamber Die Casting Machine', 
        tonnageOrModel: '650-Ton Locking Force', 
        machineRatePerHour: 52.0, 
        cycleTimeSec: 42.0, 
        partsPerCycle: 1, 
        stepCost: 0.61 
      },
      { 
        operation: 'Degating & Flash Trim', 
        machineName: 'Hydraulic Trim Press with Slide Table', 
        tonnageOrModel: '30-Ton Hydraulic Trim', 
        machineRatePerHour: 18.0, 
        cycleTimeSec: 14.0, 
        partsPerCycle: 1, 
        stepCost: 0.07 
      },
      { 
        operation: 'Precision CNC Face Milling & Tapping', 
        machineName: 'High-Speed 4-Axis Vertical Machining Center', 
        tonnageOrModel: 'VMC 12,000 RPM / Dual Pallet', 
        machineRatePerHour: 38.0, 
        cycleTimeSec: 195.0, 
        partsPerCycle: 1, 
        stepCost: 2.06 
      },
      { 
        operation: 'Multi-Stage Ultrasonic Clean & Vacuum Dry', 
        machineName: 'Automated 5-Stage Aqueous Wash Line', 
        tonnageOrModel: 'Ultrasonic Degrease + DI Rinse', 
        machineRatePerHour: 15.0, 
        cycleTimeSec: 25.0, 
        partsPerCycle: 1, 
        stepCost: 0.10 
      }
    ],
    laborCost: 0.88,
    secondaryCost: {
      process: 'Electroless Nickel Plating (ENP 15-20µm) + Selective Seal Groove Masking',
      specification: 'High phosphor (>10% P), MIL-C-26074 Class 1, ASTM B733',
      rateUnit: '8.4 dm² @ $0.18/dm² + $0.35 Masking',
      cost: 1.86
    },
    toolingAmortizationPerUnit: 0.42,
    toolingTotalInvestment: 42000,
    overheadSgAMargin: {
      factoryOverhead: 1.05,
      sga: 0.52,
      profitMargin: 1.08
    }
  },
  plastics: {
    id: 'plastics',
    partNumber: 'VIMS-MOLD-9104',
    partName: 'Automotive Radiator Fan Shroud with Integral Mounting Brackets',
    commodity: 'Plastic Injection Molding',
    materialGrade: 'Polyamide PA66 30% Glass-Filled (PA66-GF30)',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    partDescription: 'Complex aerodynamic cooling fan shroud with integrated vibration dampers, wire harness clips, and ultrasonic brass inserts.',
    annualVolume: 40000,
    batchSize: 3500,
    netWeightKg: 1.15,
    grossWeightKg: 1.22,
    scrapWeightKg: 0.07,
    scrapCreditRate: 0.80,
    supplierQuote: 22.40,
    shouldCostTarget: 15.65,
    materialBreakdown: {
      rawRatePerKg: 4.10,
      rawCost: 5.00,
      scrapCredit: 0.06,
      netMaterialCost: 4.94
    },
    processSteps: [
      { 
        operation: 'Injection Molding (Hot Runner Valve Gate)', 
        machineName: 'All-Electric High-Precision Injection Press', 
        tonnageOrModel: '850-Ton Clamping Force', 
        machineRatePerHour: 48.0, 
        cycleTimeSec: 46.0, 
        partsPerCycle: 1, 
        stepCost: 0.61 
      },
      { 
        operation: 'Robotic Part Extraction & Sprue Separation', 
        machineName: 'Integrated 3-Axis Servo Top-Entry Robot', 
        tonnageOrModel: 'Pneumatic End-of-Arm Tooling', 
        machineRatePerHour: 8.0, 
        cycleTimeSec: 8.0, 
        partsPerCycle: 1, 
        stepCost: 0.02 
      },
      { 
        operation: 'Brass Threaded Insert Ultrasonic Staking (4x M5)', 
        machineName: 'Multi-Head Ultrasonic Staking Machine', 
        tonnageOrModel: '20 kHz / 2000W Generator', 
        machineRatePerHour: 20.0, 
        cycleTimeSec: 22.0, 
        partsPerCycle: 1, 
        stepCost: 0.12 
      }
    ],
    laborCost: 0.55,
    secondaryCost: {
      process: 'Automated 2D Laser Datamatrix Marking & Part Inspection',
      specification: 'ISO/IEC 16022 Barcode Grade A, 100% vision camera validation',
      rateUnit: 'Inline Vision Cell @ $0.18/pc',
      cost: 0.18
    },
    toolingAmortizationPerUnit: 0.72,
    toolingTotalInvestment: 58000,
    overheadSgAMargin: {
      factoryOverhead: 0.58,
      sga: 0.32,
      profitMargin: 0.63
    }
  }
};
