import React from 'react';

/**
 * Exact vector replication of the user's uploaded Sheet Metal Screenshot:
 * - CRCA 2.5mm formed box/channel enclosure bracket
 * - 140 mm width bottom dashed dimension
 * - 80 mm height left dashed dimension
 * - Yellow dotted lines at corner bend reliefs
 * - Top-right gold leader callout: "CRCA 2.5mm"
 * - Two punched mounting holes on rear wall
 * - Embossed horizontal stiffening rib across rear wall
 * - Stamped rectangular slot cutout on base floor
 * - 2.5mm uniform material thickness on visible front edges
 * - Realistic brushed steel metallic gradients & ground contact shadow
 */
export const SheetMetalPartHeroSvg: React.FC = () => (
  <svg 
    viewBox="0 0 440 320" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-full h-auto max-h-[260px] select-none"
  >
    <defs>
      {/* Background radial gradient */}
      <radialGradient id="smBackdrop" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#142442" />
        <stop offset="60%" stopColor="#0a1428" />
        <stop offset="100%" stopColor="#050a16" />
      </radialGradient>

      {/* Outer top roof metal */}
      <linearGradient id="smRoofMetal" x1="0%" y1="0%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#e5ecf6" />
        <stop offset="35%" stopColor="#cbd5e1" />
        <stop offset="70%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>

      {/* Right outer face metal */}
      <linearGradient id="smRightSideMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748b" />
        <stop offset="40%" stopColor="#475569" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>

      {/* Left side wall inner face */}
      <linearGradient id="smLeftInnerMetal" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#94a3b8" />
        <stop offset="50%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>

      {/* Rear interior back wall */}
      <linearGradient id="smBackWall" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="30%" stopColor="#162238" />
        <stop offset="100%" stopColor="#0c1322" />
      </linearGradient>

      {/* Bottom interior floor */}
      <linearGradient id="smFloorMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#94a3b8" />
        <stop offset="50%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>

      {/* Front bottom return lip */}
      <linearGradient id="smBottomFrontLip" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#94a3b8" />
        <stop offset="40%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>

      {/* Material edge thickness highlight (2.5mm gauge) */}
      <linearGradient id="smGaugeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="50%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>

      {/* Contact drop shadow */}
      <filter id="smContactShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>

    {/* Vignetted dark industrial backdrop */}
    <rect width="440" height="320" rx="16" fill="url(#smBackdrop)" />

    {/* Ground contact shadow */}
    <ellipse cx="225" cy="245" rx="115" ry="16" fill="#000000" opacity="0.65" filter="url(#smContactShadow)" />

    {/* PART 3D BODY STARTS */}
    <g transform="translate(10, -5)">
      {/* 1. Outer Right Wall (extending in 3D perspective) */}
      <polygon 
        points="272,126 308,102 308,206 272,228" 
        fill="url(#smRightSideMetal)" 
      />

      {/* 2. Outer Top Roof Plate */}
      <polygon 
        points="148,102 284,102 308,102 172,102" 
        fill="none" 
      />
      <polygon 
        points="148,102 284,102 308,102 172,102" 
        fill="url(#smRoofMetal)" 
      />
      <polygon 
        points="142,126 272,126 308,102 178,102" 
        fill="url(#smRoofMetal)" 
      />

      {/* 3. Left Wall Outer Side Edge (front perspective bevel) */}
      <polygon 
        points="142,126 142,228 147,228 147,126" 
        fill="url(#smGaugeHighlight)" 
      />

      {/* 4. Left Wall Inner Surface */}
      <polygon 
        points="147,126 178,102 178,194 147,212" 
        fill="url(#smLeftInnerMetal)" 
      />

      {/* 5. Interior Rear Wall (Back Plane) */}
      <polygon 
        points="178,102 284,102 284,194 178,194" 
        fill="url(#smBackWall)" 
      />

      {/* 6. Interior Horizontal Stiffening Rib / Embossed Bead across back wall */}
      <polygon 
        points="192,132 270,132 270,136 192,136" 
        fill="#2b3b55" 
      />
      <line x1="192" y1="132" x2="270" y2="132" stroke="#64748b" strokeWidth="1.2" opacity="0.75" />
      <line x1="192" y1="136" x2="270" y2="136" stroke="#090f1d" strokeWidth="1.2" />

      {/* 7. Two Punched Mounting Holes on Rear Wall */}
      {/* Hole 1 (Left) */}
      <ellipse cx="206" cy="154" rx="10" ry="6" fill="#050a14" stroke="#1e293b" strokeWidth="1.5" />
      <ellipse cx="206" cy="154" rx="7.5" ry="4" fill="#020408" />
      <ellipse cx="206" cy="154" rx="11" ry="6.5" fill="none" stroke="#475569" strokeWidth="0.8" opacity="0.6" />

      {/* Hole 2 (Right) */}
      <ellipse cx="256" cy="154" rx="10" ry="6" fill="#050a14" stroke="#1e293b" strokeWidth="1.5" />
      <ellipse cx="256" cy="154" rx="7.5" ry="4" fill="#020408" />
      <ellipse cx="256" cy="154" rx="11" ry="6.5" fill="none" stroke="#475569" strokeWidth="0.8" opacity="0.6" />

      {/* 8. Interior Bottom Base Floor */}
      <polygon 
        points="147,212 178,194 284,194 272,212" 
        fill="url(#smFloorMetal)" 
      />

      {/* 9. Stamped Rectangular Slot Cutout on Base Floor */}
      <polygon 
        points="200,200 248,200 244,206 196,206" 
        fill="#040812" 
        stroke="#1e293b" 
        strokeWidth="1" 
      />

      {/* 10. Front Bottom Vertical Lip / Bend Return (Facing Viewer) */}
      <polygon 
        points="142,212 272,212 272,228 142,228" 
        fill="url(#smBottomFrontLip)" 
      />
      {/* Top bevel of front bottom lip showing 2.5mm gauge */}
      <polygon 
        points="142,212 272,212 272,214 142,214" 
        fill="url(#smGaugeHighlight)" 
      />

      {/* 11. Top Front Flange Lip Thickness Highlight (2.5mm Uniform Gauge) */}
      <polygon 
        points="142,126 272,126 272,128.5 142,128.5" 
        fill="url(#smGaugeHighlight)" 
      />

      {/* 12. Dotted Yellow/Orange Corner Bend Relief Indicators (as in screenshot) */}
      {/* Upper-left bend seam */}
      <line 
        x1="144" y1="126" 
        x2="155" y2="133" 
        stroke="#f5b301" 
        strokeWidth="2" 
        strokeDasharray="2,2" 
      />
      {/* Lower-left bend seam */}
      <line 
        x1="144" y1="212" 
        x2="155" y2="205" 
        stroke="#f5b301" 
        strokeWidth="2" 
        strokeDasharray="2,2" 
      />
    </g>

    {/* ENGINEERING DIMENSION CALLOUTS & LABELS (Pixel-matched to user screenshot) */}
    {/* Left Dimension: 80 mm */}
    <g transform="translate(10, -5)">
      {/* Dashed cyan vertical line */}
      <line 
        x1="128" y1="126" 
        x2="128" y2="228" 
        stroke="#38bdf8" 
        strokeWidth="1.8" 
        strokeDasharray="4,3" 
      />
      {/* Top guide tick */}
      <line x1="124" y1="126" x2="134" y2="126" stroke="#38bdf8" strokeWidth="1.8" />
      {/* Bottom guide tick */}
      <line x1="124" y1="228" x2="134" y2="228" stroke="#38bdf8" strokeWidth="1.8" />

      {/* Height Value Badge */}
      <rect x="106" y="167" width="22" height="18" rx="3" fill="#0284c7" opacity="0.9" />
      <text 
        x="117" y="180" 
        fill="#ffffff" 
        fontSize="12" 
        fontWeight="800" 
        textAnchor="middle" 
        fontFamily="Inter, system-ui, sans-serif"
      >
        80
      </text>
    </g>

    {/* Bottom Dimension: 140 mm */}
    <g transform="translate(10, -5)">
      {/* Dashed cyan horizontal line */}
      <line 
        x1="142" y1="254" 
        x2="272" y2="254" 
        stroke="#38bdf8" 
        strokeWidth="1.8" 
        strokeDasharray="4,3" 
      />
      {/* Left guide tick */}
      <line x1="142" y1="250" x2="142" y2="258" stroke="#38bdf8" strokeWidth="1.8" />
      {/* Right guide tick */}
      <line x1="272" y1="250" x2="272" y2="258" stroke="#38bdf8" strokeWidth="1.8" />

      {/* Width Label */}
      <text 
        x="207" y="272" 
        fill="#38bdf8" 
        fontSize="13" 
        fontWeight="800" 
        textAnchor="middle" 
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.5"
      >
        140 mm
      </text>
    </g>

    {/* Gold Leader Callout to Top-Right Corner: CRCA 2.5mm */}
    <g transform="translate(10, -5)">
      <circle cx="318" cy="97" r="2.5" fill="#f5b301" />
      <line 
        x1="318" y1="97" 
        x2="336" y2="88" 
        stroke="#f5b301" 
        strokeWidth="2" 
      />
      <text 
        x="340" y="90" 
        fill="#f5b301" 
        fontSize="12" 
        fontWeight="800" 
        fontFamily="Inter, system-ui, sans-serif"
      >
        CRCA 2.5mm
      </text>
    </g>
  </svg>
);

/**
 * Die Casting: Aluminum HPDC Inverter/Motor Housing (A380)
 * 160 mm width, 3mm wall, central cylinder bore, cooling fins & mounting bosses
 */
export const DieCastingPartHeroSvg: React.FC = () => (
  <svg 
    viewBox="0 0 440 320" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-full h-auto max-h-[260px] select-none"
  >
    <defs>
      <radialGradient id="dcBackdrop" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#1a2035" />
        <stop offset="60%" stopColor="#0d1222" />
        <stop offset="100%" stopColor="#060913" />
      </radialGradient>
      <linearGradient id="dcAlumTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f1f5f9" />
        <stop offset="40%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
      <linearGradient id="dcAlumFront" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#94a3b8" />
        <stop offset="50%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <linearGradient id="dcAlumSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <filter id="dcShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>

    <rect width="440" height="320" rx="16" fill="url(#dcBackdrop)" />
    <ellipse cx="225" cy="245" rx="125" ry="16" fill="#000000" opacity="0.65" filter="url(#dcShadow)" />

    <g transform="translate(10, -5)">
      {/* Base Flange Body */}
      <polygon points="120,180 290,180 330,150 160,150" fill="url(#dcAlumTop)" />
      <polygon points="120,180 290,180 290,225 120,225" fill="url(#dcAlumFront)" />
      <polygon points="290,180 330,150 330,195 290,225" fill="url(#dcAlumSide)" />

      {/* Raised Center Cylinder Boss */}
      <polygon points="175,150 265,150 285,130 195,130" fill="url(#dcAlumTop)" />
      <polygon points="175,150 265,150 265,180 175,180" fill="url(#dcAlumFront)" />
      <polygon points="265,150 285,130 285,160 265,180" fill="url(#dcAlumSide)" />

      {/* Machined Precision Cylinder Bore */}
      <ellipse cx="230" cy="140" rx="28" ry="10" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
      <ellipse cx="230" cy="140" rx="22" ry="7.5" fill="#020617" />

      {/* Cooling Fins on Side */}
      <line x1="135" y1="190" x2="135" y2="215" stroke="#94a3b8" strokeWidth="3" />
      <line x1="145" y1="190" x2="145" y2="215" stroke="#94a3b8" strokeWidth="3" />
      <line x1="155" y1="190" x2="155" y2="215" stroke="#94a3b8" strokeWidth="3" />

      {/* 4 Corner Bolt Bosses */}
      <ellipse cx="145" cy="168" rx="9" ry="4" fill="#64748b" stroke="#334155" strokeWidth="1" />
      <ellipse cx="145" cy="168" rx="4" ry="1.8" fill="#0f172a" />
      <ellipse cx="275" cy="168" rx="9" ry="4" fill="#64748b" stroke="#334155" strokeWidth="1" />
      <ellipse cx="275" cy="168" rx="4" ry="1.8" fill="#0f172a" />
      <ellipse cx="180" cy="142" rx="7" ry="3" fill="#64748b" stroke="#334155" strokeWidth="1" />
      <ellipse cx="180" cy="142" rx="3" ry="1.3" fill="#0f172a" />
      <ellipse cx="280" cy="142" rx="7" ry="3" fill="#64748b" stroke="#334155" strokeWidth="1" />
      <ellipse cx="280" cy="142" rx="3" ry="1.3" fill="#0f172a" />
    </g>

    {/* Dimensions & Material */}
    <g transform="translate(10, -5)">
      {/* Bottom Width: 160 mm */}
      <line x1="120" y1="250" x2="290" y2="250" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4,3" />
      <line x1="120" y1="246" x2="120" y2="254" stroke="#38bdf8" strokeWidth="1.8" />
      <line x1="290" y1="246" x2="290" y2="254" stroke="#38bdf8" strokeWidth="1.8" />
      <text x="205" y="268" fill="#38bdf8" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">
        160 mm
      </text>

      {/* Material Callout */}
      <circle cx="330" cy="150" r="2.5" fill="#f5b301" />
      <line x1="330" y1="150" x2="350" y2="136" stroke="#f5b301" strokeWidth="2" />
      <text x="354" y="138" fill="#f5b301" fontSize="12" fontWeight="800" fontFamily="Inter, system-ui, sans-serif">
        A380 · 3mm Wall
      </text>
    </g>
  </svg>
);

/**
 * Plastic: ABS Electronic Enclosure Cover
 * 180 mm width, 2mm wall, snap-fits, core-cavity parting line & textured matte finish
 */
export const PlasticPartHeroSvg: React.FC = () => (
  <svg 
    viewBox="0 0 440 320" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-full h-auto max-h-[260px] select-none"
  >
    <defs>
      <radialGradient id="plBackdrop" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#1e1836" />
        <stop offset="60%" stopColor="#110d22" />
        <stop offset="100%" stopColor="#090514" />
      </radialGradient>
      <linearGradient id="plMatTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="40%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#581c87" />
      </linearGradient>
      <linearGradient id="plMatFront" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7e22ce" />
        <stop offset="100%" stopColor="#3b0764" />
      </linearGradient>
      <filter id="plShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>

    <rect width="440" height="320" rx="16" fill="url(#plBackdrop)" />
    <ellipse cx="225" cy="245" rx="125" ry="16" fill="#000000" opacity="0.65" filter="url(#plShadow)" />

    <g transform="translate(10, -5)">
      {/* Dome/curved Enclosure Body */}
      <path d="M 120 200 Q 120 110 220 95 Q 320 110 320 200 Z" fill="url(#plMatFront)" />
      {/* Top curved face */}
      <ellipse cx="220" cy="118" rx="90" ry="24" fill="url(#plMatTop)" />
      {/* Mold Parting Line */}
      <path d="M 120 200 Q 220 216 320 200" stroke="#3b0764" strokeWidth="1.8" fill="none" strokeDasharray="4,2" />
      {/* Ejector Pin Marks */}
      <circle cx="180" cy="155" r="2.5" fill="#581c87" opacity="0.7" />
      <circle cx="260" cy="155" r="2.5" fill="#581c87" opacity="0.7" />
      <circle cx="220" cy="175" r="2.5" fill="#581c87" opacity="0.7" />
    </g>

    {/* Dimensions & Material */}
    <g transform="translate(10, -5)">
      <line x1="120" y1="250" x2="320" y2="250" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4,3" />
      <line x1="120" y1="246" x2="120" y2="254" stroke="#38bdf8" strokeWidth="1.8" />
      <line x1="320" y1="246" x2="320" y2="254" stroke="#38bdf8" strokeWidth="1.8" />
      <text x="220" y="268" fill="#38bdf8" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">
        180 mm
      </text>

      <circle cx="320" cy="118" r="2.5" fill="#f5b301" />
      <line x1="320" y1="118" x2="340" y2="106" stroke="#f5b301" strokeWidth="2" />
      <text x="344" y="108" fill="#f5b301" fontSize="12" fontWeight="800" fontFamily="Inter, system-ui, sans-serif">
        ABS · 2mm Wall
      </text>
    </g>
  </svg>
);

/**
 * Machining: CNC Stepped Turned Drive Shaft (EN8 Steel)
 * Ø30 × 80mm, keyway, cross-hole, ground bearing journals Ra 0.8
 */
export const MachiningPartHeroSvg: React.FC = () => (
  <svg 
    viewBox="0 0 440 320" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-full h-auto max-h-[260px] select-none"
  >
    <defs>
      <radialGradient id="mcBackdrop" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#14213d" />
        <stop offset="60%" stopColor="#0a1222" />
        <stop offset="100%" stopColor="#040810" />
      </radialGradient>
      <linearGradient id="mcCylinderMetal" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="25%" stopColor="#cbd5e1" />
        <stop offset="50%" stopColor="#64748b" />
        <stop offset="85%" stopColor="#334155" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <filter id="mcShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>

    <rect width="440" height="320" rx="16" fill="url(#mcBackdrop)" />
    <ellipse cx="225" cy="245" rx="125" ry="14" fill="#000000" opacity="0.65" filter="url(#mcShadow)" />

    <g transform="translate(10, -5)">
      {/* Main Turned Shaft */}
      <rect x="130" y="145" width="180" height="46" rx="2" fill="url(#mcCylinderMetal)" />
      {/* Left End Face */}
      <ellipse cx="130" cy="168" rx="8" ry="23" fill="#475569" stroke="#334155" strokeWidth="1" />
      {/* Right Stepped Flange */}
      <ellipse cx="310" cy="168" rx="10" ry="32" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
      {/* Keyway Slot on shaft */}
      <rect x="200" y="145" width="30" height="7" rx="1" fill="#0f172a" stroke="#1e293b" strokeWidth="0.8" />
      {/* Cross hole */}
      <ellipse cx="260" cy="168" rx="4" ry="7" fill="#020617" stroke="#1e293b" strokeWidth="0.8" />
      {/* Turning tool marks */}
      <line x1="145" y1="156" x2="295" y2="156" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.6" />
      <line x1="145" y1="168" x2="295" y2="168" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.6" />
    </g>

    {/* Dimensions */}
    <g transform="translate(10, -5)">
      <line x1="130" y1="240" x2="310" y2="240" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4,3" />
      <line x1="130" y1="236" x2="130" y2="244" stroke="#38bdf8" strokeWidth="1.8" />
      <line x1="310" y1="236" x2="310" y2="244" stroke="#38bdf8" strokeWidth="1.8" />
      <text x="220" y="258" fill="#38bdf8" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">
        80 mm
      </text>

      <line x1="112" y1="145" x2="112" y2="191" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4,3" />
      <line x1="108" y1="145" x2="116" y2="145" stroke="#38bdf8" strokeWidth="1.8" />
      <line x1="108" y1="191" x2="116" y2="191" stroke="#38bdf8" strokeWidth="1.8" />
      <text x="94" y="172" fill="#38bdf8" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">
        Ø30
      </text>

      <circle cx="310" cy="136" r="2.5" fill="#f5b301" />
      <line x1="310" y1="136" x2="330" y2="124" stroke="#f5b301" strokeWidth="2" />
      <text x="334" y="126" fill="#f5b301" fontSize="12" fontWeight="800" fontFamily="Inter, system-ui, sans-serif">
        EN8 · Ra 0.8
      </text>
    </g>
  </svg>
);

/**
 * Forging: Closed-Die Forged Connecting Rod (EN19 Alloy Steel)
 * 210 mm center distance, I-beam cross section, Ø60 boss & trimmed parting flash
 */
export const ForgingPartHeroSvg: React.FC = () => (
  <svg 
    viewBox="0 0 440 320" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-full h-auto max-h-[260px] select-none"
  >
    <defs>
      <radialGradient id="fgBackdrop" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#221815" />
        <stop offset="60%" stopColor="#130e0b" />
        <stop offset="100%" stopColor="#080504" />
      </radialGradient>
      <linearGradient id="fgSteel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="35%" stopColor="#94a3b8" />
        <stop offset="70%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <filter id="fgShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>

    <rect width="440" height="320" rx="16" fill="url(#fgBackdrop)" />
    <ellipse cx="225" cy="245" rx="130" ry="14" fill="#000000" opacity="0.65" filter="url(#fgShadow)" />

    <g transform="translate(10, -5)">
      {/* I-Beam Central Shank */}
      <polygon points="150,158 290,158 290,178 150,178" fill="url(#fgSteel)" />
      <polygon points="160,150 280,150 290,158 150,158" fill="#cbd5e1" />
      <polygon points="150,178 290,178 280,186 160,186" fill="#475569" />

      {/* Left Big End Eye Boss */}
      <ellipse cx="145" cy="168" rx="34" ry="38" fill="url(#fgSteel)" />
      <ellipse cx="145" cy="168" rx="26" ry="30" fill="#475569" />
      <ellipse cx="145" cy="168" rx="14" ry="16" fill="#050a14" stroke="#1e293b" strokeWidth="1.2" />

      {/* Right Small End Eye Boss */}
      <ellipse cx="300" cy="168" rx="26" ry="28" fill="url(#fgSteel)" />
      <ellipse cx="300" cy="168" rx="19" ry="21" fill="#475569" />
      <ellipse cx="300" cy="168" rx="9" ry="11" fill="#050a14" stroke="#1e293b" strokeWidth="1.2" />

      {/* Forging Parting Line */}
      <line x1="110" y1="168" x2="330" y2="168" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
    </g>

    {/* Dimensions */}
    <g transform="translate(10, -5)">
      <line x1="145" y1="240" x2="300" y2="240" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4,3" />
      <line x1="145" y1="236" x2="145" y2="244" stroke="#38bdf8" strokeWidth="1.8" />
      <line x1="300" y1="236" x2="300" y2="244" stroke="#38bdf8" strokeWidth="1.8" />
      <text x="222" y="258" fill="#38bdf8" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">
        210 mm
      </text>

      <circle cx="300" cy="140" r="2.5" fill="#f5b301" />
      <line x1="300" y1="140" x2="320" y2="128" stroke="#f5b301" strokeWidth="2" />
      <text x="324" y="130" fill="#f5b301" fontSize="12" fontWeight="800" fontFamily="Inter, system-ui, sans-serif">
        EN19 · 1.85 kg
      </text>
    </g>
  </svg>
);

export interface RealPartPhotoInfo {
  url: string;
  caption: string;
  tag: string;
  finish: string;
}

export const realPartPhotos: Record<string, RealPartPhotoInfo> = {
  sheetmetal: {
    url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    caption: 'Real Workshop Sample: CRCA Cold Rolled Steel Bracket with Stamped Slots, Bend Flanges & Trivalent Zinc Plating',
    tag: 'CRCA 2.5mm · Stamped & Bent',
    finish: 'Fe/Zn 8μm Blue Passivated'
  },
  diecasting: {
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    caption: 'Real Workshop Sample: High-Pressure Die Cast A380 Aluminum Enclosure Housing with Cooling Fins and Precision CNC Facing',
    tag: 'A380 Aluminum · HPDC 400T',
    finish: 'Shot-Blasted & CNC Machined Faces'
  },
  plastic: {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    caption: 'Real Workshop Sample: Precision Injection Molded Engineering ABS Modular Enclosure Cover with Snap-Joints',
    tag: 'ABS Thermoplastic · 2mm Wall',
    finish: 'VDI 27 Matte Spark Textured'
  },
  machining: {
    url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    caption: 'Real Workshop Sample: Precision CNC Turned & Milled Stepped Drive Shaft with Keyway and Ground Bearing Journals',
    tag: 'EN8 Carbon Steel · CNC Lathe',
    finish: 'Cylindrical Ground Ra 0.8 μm'
  },
  forging: {
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    caption: 'Real Workshop Sample: Closed-Die Hot Forged High-Tensile Steel Connecting Rod with I-Beam Web and Machined Eye Bores',
    tag: 'EN19 Forged Alloy Steel',
    finish: 'Shot-Peened & Normalized'
  }
};

export const PartHeroVisual: React.FC<{ 
  commodityKey: string;
  viewMode?: 'cad' | 'photo';
}> = ({ commodityKey, viewMode = 'cad' }) => {
  if (viewMode === 'photo') {
    const photo = realPartPhotos[commodityKey] || realPartPhotos.sheetmetal;
    return (
      <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center relative overflow-hidden rounded-xl bg-slate-950 p-2">
        <img 
          src={photo.url} 
          alt={photo.caption}
          referrerPolicy="no-referrer"
          className="w-full h-[190px] object-cover rounded-lg shadow-2xl border border-white/10 transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/40 text-[10px] font-mono font-bold text-emerald-400">
          ● {photo.tag}
        </div>
        <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan/40 text-[10px] font-mono font-semibold text-cyan">
          {photo.finish}
        </div>
      </div>
    );
  }

  switch (commodityKey) {
    case 'sheetmetal':
      return <SheetMetalPartHeroSvg />;
    case 'diecasting':
      return <DieCastingPartHeroSvg />;
    case 'plastic':
      return <PlasticPartHeroSvg />;
    case 'machining':
      return <MachiningPartHeroSvg />;
    case 'forging':
      return <ForgingPartHeroSvg />;
    default:
      return <SheetMetalPartHeroSvg />;
  }
};
