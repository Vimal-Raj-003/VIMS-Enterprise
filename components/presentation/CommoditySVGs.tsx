import React from 'react';

export const SheetMetalVisualSvg: React.FC = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="smFloor" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#334155"/><stop offset="1" stopColor="#0f172a"/></linearGradient>
      <linearGradient id="smPress" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#64748b"/><stop offset=".5" stopColor="#475569"/><stop offset="1" stopColor="#1e293b"/></linearGradient>
      <linearGradient id="smRam" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#94a3b8"/><stop offset="1" stopColor="#475569"/></linearGradient>
      <linearGradient id="smSheet" x1="0" x2="1"><stop offset="0" stopColor="#cbd5e1"/><stop offset=".5" stopColor="#e2e8f0"/><stop offset="1" stopColor="#94a3b8"/></linearGradient>
      <radialGradient id="smLight" cx=".5" cy="0" r=".8"><stop offset="0" stopColor="#fbbf24" stopOpacity=".5"/><stop offset="1" stopColor="#fbbf24" stopOpacity="0"/></radialGradient>
      <filter id="smGlow"><feGaussianBlur stdDeviation="2"/></filter>
    </defs>
    <rect width="400" height="200" fill="url(#smFloor)"/>
    <ellipse cx="200" cy="0" rx="180" ry="100" fill="url(#smLight)"/>
    <rect x="100" y="20" width="200" height="30" rx="3" fill="url(#smPress)"/>
    <rect x="110" y="50" width="20" height="110" fill="#334155"/>
    <rect x="270" y="50" width="20" height="110" fill="#334155"/>
    <rect x="140" y="55" width="120" height="40" rx="2" fill="url(#smRam)"/>
    <rect x="155" y="95" width="90" height="15" fill="#64748b"/>
    <polygon points="180,110 220,110 210,130 190,130" fill="#cbd5e1"/>
    <rect x="130" y="135" width="140" height="4" fill="url(#smSheet)"/>
    <rect x="130" y="139" width="140" height="2" fill="#64748b"/>
    <rect x="120" y="145" width="160" height="30" rx="2" fill="#1e293b"/>
    <rect x="180" y="145" width="40" height="10" fill="#0f172a"/>
    <rect x="80" y="175" width="240" height="15" rx="2" fill="#1e293b"/>
    <circle cx="195" cy="135" r="2" fill="#fbbf24" filter="url(#smGlow)"/>
    <circle cx="205" cy="132" r="1.5" fill="#f97316" filter="url(#smGlow)"/>
    <circle cx="188" cy="138" r="1" fill="#fef3c7"/>
    <rect x="310" y="80" width="50" height="70" rx="3" fill="#1e293b"/>
    <rect x="315" y="85" width="40" height="20" rx="1" fill="#0f172a"/>
    <circle cx="322" cy="115" r="3" fill="#10b981"/>
    <circle cx="335" cy="115" r="3" fill="#ef4444"/>
    <circle cx="348" cy="115" r="3" fill="#fbbf24"/>
  </svg>
);

export const PlasticVisualSvg: React.FC = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="plFloor" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#334155"/><stop offset="1" stopColor="#0f172a"/></linearGradient>
      <linearGradient id="plMold" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#64748b"/><stop offset="1" stopColor="#1e293b"/></linearGradient>
      <linearGradient id="plBarrel" x1="0" x2="1"><stop offset="0" stopColor="#475569"/><stop offset=".5" stopColor="#94a3b8"/><stop offset="1" stopColor="#475569"/></linearGradient>
      <radialGradient id="plHeat" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#f97316" stopOpacity=".6"/><stop offset="1" stopColor="#f97316" stopOpacity="0"/></radialGradient>
      <linearGradient id="plPellet" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#38bdf8"/><stop offset="1" stopColor="#1e40af"/></linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#plFloor)"/>
    <polygon points="60,30 100,30 110,80 50,80" fill="#334155"/>
    <rect x="55" y="80" width="50" height="10" fill="#1e293b"/>
    <circle cx="70" cy="50" r="3" fill="url(#plPellet)"/>
    <circle cx="80" cy="55" r="3" fill="url(#plPellet)"/>
    <circle cx="90" cy="48" r="3" fill="url(#plPellet)"/>
    <circle cx="75" cy="65" r="3" fill="url(#plPellet)"/>
    <circle cx="88" cy="68" r="3" fill="url(#plPellet)"/>
    <rect x="105" y="85" width="160" height="25" rx="12" fill="url(#plBarrel)"/>
    <rect x="130" y="85" width="6" height="25" fill="#f97316" opacity=".7"/>
    <rect x="160" y="85" width="6" height="25" fill="#f97316" opacity=".7"/>
    <rect x="190" y="85" width="6" height="25" fill="#f97316" opacity=".7"/>
    <rect x="220" y="85" width="6" height="25" fill="#f97316" opacity=".7"/>
    <line x1="115" y1="97" x2="260" y2="97" stroke="#1e293b" strokeWidth="1" strokeDasharray="4,2"/>
    <polygon points="265,90 285,95 285,100 265,105" fill="#475569"/>
    <rect x="285" y="70" width="90" height="50" rx="3" fill="url(#plMold)"/>
    <rect x="295" y="80" width="30" height="30" fill="#0f172a"/>
    <rect x="335" y="80" width="30" height="30" fill="#0f172a"/>
    <rect x="300" y="85" width="20" height="20" rx="2" fill="#38bdf8" opacity=".9"/>
    <rect x="340" y="85" width="20" height="20" rx="2" fill="#38bdf8" opacity=".9"/>
    <rect x="130" y="115" width="140" height="15" fill="#334155"/>
    <rect x="150" y="130" width="100" height="40" rx="2" fill="#1e293b"/>
    <rect x="140" y="120" width="5" height="50" fill="#64748b"/>
    <rect x="255" y="120" width="5" height="50" fill="#64748b"/>
    <rect x="40" y="170" width="340" height="20" rx="2" fill="#0f172a"/>
    <ellipse cx="185" cy="97" rx="80" ry="20" fill="url(#plHeat)"/>
  </svg>
);

export const DieCastingVisualSvg: React.FC = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="dcFloor" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#334155"/><stop offset="1" stopColor="#0f172a"/></linearGradient>
      <linearGradient id="dcMachine" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#64748b"/><stop offset="1" stopColor="#1e293b"/></linearGradient>
      <radialGradient id="dcMolten" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#fef3c7"/><stop offset=".4" stopColor="#fbbf24"/><stop offset="1" stopColor="#dc2626"/></radialGradient>
      <radialGradient id="dcGlow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#f97316" stopOpacity=".8"/><stop offset="1" stopColor="#f97316" stopOpacity="0"/></radialGradient>
      <linearGradient id="dcDie" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#475569"/><stop offset="1" stopColor="#0f172a"/></linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#dcFloor)"/>
    <rect x="20" y="60" width="80" height="90" rx="4" fill="url(#dcMachine)"/>
    <rect x="30" y="70" width="60" height="50" rx="2" fill="#0f172a"/>
    <ellipse cx="60" cy="100" rx="25" ry="15" fill="url(#dcMolten)"/>
    <ellipse cx="60" cy="100" rx="40" ry="25" fill="url(#dcGlow)" opacity=".6"/>
    <path d="M95 85 Q115 80 120 95 L115 110 Q100 115 95 100 Z" fill="#475569"/>
    <ellipse cx="108" cy="95" rx="10" ry="5" fill="url(#dcMolten)"/>
    <rect x="120" y="88" width="80" height="20" rx="3" fill="#334155"/>
    <rect x="125" y="92" width="70" height="12" fill="#1e293b"/>
    <rect x="115" y="90" width="10" height="16" fill="#94a3b8"/>
    <rect x="205" y="60" width="40" height="80" rx="2" fill="url(#dcDie)"/>
    <rect x="245" y="60" width="40" height="80" rx="2" fill="url(#dcDie)"/>
    <rect x="240" y="85" width="10" height="30" fill="#0f172a"/>
    <rect x="285" y="80" width="50" height="40" rx="2" fill="#94a3b8"/>
    <rect x="290" y="85" width="15" height="10" fill="#cbd5e1"/>
    <rect x="310" y="85" width="15" height="10" fill="#cbd5e1"/>
    <rect x="290" y="105" width="15" height="10" fill="#cbd5e1"/>
    <rect x="310" y="105" width="15" height="10" fill="#cbd5e1"/>
    <rect x="180" y="50" width="130" height="10" fill="#475569"/>
    <rect x="180" y="140" width="130" height="10" fill="#475569"/>
    <rect x="185" y="55" width="4" height="90" fill="#64748b"/>
    <rect x="305" y="55" width="4" height="90" fill="#64748b"/>
    <rect x="15" y="160" width="370" height="25" rx="2" fill="#0f172a"/>
    <ellipse cx="245" cy="100" rx="60" ry="40" fill="url(#dcGlow)" opacity=".3"/>
    <circle cx="250" cy="85" r="1.5" fill="#fef3c7"/>
    <circle cx="240" cy="115" r="1" fill="#fbbf24"/>
    <circle cx="255" cy="120" r="1.2" fill="#f97316"/>
  </svg>
);

export const MachiningVisualSvg: React.FC = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="mcFloor" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#334155"/><stop offset="1" stopColor="#0f172a"/></linearGradient>
      <linearGradient id="mcBody" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#1e40af"/><stop offset="1" stopColor="#1e293b"/></linearGradient>
      <linearGradient id="mcColumn" x1="0" x2="1"><stop offset="0" stopColor="#475569"/><stop offset=".5" stopColor="#94a3b8"/><stop offset="1" stopColor="#475569"/></linearGradient>
      <linearGradient id="mcTable" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#64748b"/><stop offset="1" stopColor="#1e293b"/></linearGradient>
      <linearGradient id="mcTool" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#cbd5e1"/><stop offset="1" stopColor="#64748b"/></linearGradient>
      <radialGradient id="mcSpark" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#fef3c7"/><stop offset=".5" stopColor="#fbbf24"/><stop offset="1" stopColor="#fbbf24" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="400" height="200" fill="url(#mcFloor)"/>
    <rect x="60" y="30" width="280" height="140" rx="4" fill="url(#mcBody)"/>
    <rect x="80" y="40" width="60" height="120" fill="url(#mcColumn)"/>
    <rect x="150" y="50" width="80" height="40" rx="3" fill="#334155"/>
    <rect x="175" y="90" width="30" height="20" fill="#475569"/>
    <polygon points="180,110 200,110 195,130 185,130" fill="url(#mcTool)"/>
    <rect x="187" y="130" width="6" height="15" fill="#cbd5e1"/>
    <rect x="160" y="145" width="60" height="15" rx="1" fill="#94a3b8"/>
    <rect x="165" y="148" width="50" height="9" fill="#cbd5e1"/>
    <rect x="140" y="160" width="180" height="10" rx="1" fill="url(#mcTable)"/>
    <line x1="150" y1="165" x2="310" y2="165" stroke="#0f172a" strokeWidth="1"/>
    <line x1="150" y1="168" x2="310" y2="168" stroke="#0f172a" strokeWidth="1"/>
    <rect x="340" y="60" width="50" height="80" rx="3" fill="#1e293b"/>
    <rect x="345" y="65" width="40" height="25" rx="1" fill="#0f172a"/>
    <text x="350" y="82" fontSize="7" fill="#10b981" fontFamily="monospace">X 125.4</text>
    <text x="350" y="88" fontSize="7" fill="#38bdf8" fontFamily="monospace">Y 080.2</text>
    <circle cx="352" cy="100" r="2" fill="#10b981"/>
    <circle cx="360" cy="100" r="2" fill="#ef4444"/>
    <circle cx="368" cy="100" r="2" fill="#fbbf24"/>
    <circle cx="190" cy="145" r="8" fill="url(#mcSpark)"/>
    <circle cx="188" cy="143" r="1" fill="#fef3c7"/>
    <circle cx="193" cy="146" r=".8" fill="#fbbf24"/>
    <circle cx="186" cy="147" r=".8" fill="#f97316"/>
    <path d="M170 100 Q175 120 185 135" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity=".6"/>
    <rect x="50" y="170" width="300" height="20" rx="2" fill="#0f172a"/>
  </svg>
);

export const ForgingVisualSvg: React.FC = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="fgFloor" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#334155"/><stop offset="1" stopColor="#0f172a"/></linearGradient>
      <linearGradient id="fgHammer" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#64748b"/><stop offset="1" stopColor="#1e293b"/></linearGradient>
      <radialGradient id="fgHot" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#fef3c7"/><stop offset=".3" stopColor="#fbbf24"/><stop offset=".7" stopColor="#f97316"/><stop offset="1" stopColor="#dc2626"/></radialGradient>
      <radialGradient id="fgGlow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#f97316" stopOpacity=".7"/><stop offset="1" stopColor="#f97316" stopOpacity="0"/></radialGradient>
      <linearGradient id="fgAnvil" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#475569"/><stop offset="1" stopColor="#0f172a"/></linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#fgFloor)"/>
    <rect x="20" y="50" width="70" height="100" rx="4" fill="#1e293b"/>
    <rect x="30" y="60" width="50" height="70" rx="2" fill="#0f172a"/>
    <ellipse cx="55" cy="100" rx="20" ry="25" fill="url(#fgGlow)"/>
    <ellipse cx="55" cy="105" rx="12" ry="15" fill="url(#fgHot)"/>
    <rect x="120" y="20" width="200" height="20" rx="2" fill="#334155"/>
    <rect x="130" y="40" width="20" height="130" fill="#1e293b"/>
    <rect x="290" y="40" width="20" height="130" fill="#1e293b"/>
    <rect x="170" y="45" width="100" height="50" rx="3" fill="url(#fgHammer)"/>
    <rect x="180" y="95" width="80" height="20" fill="#475569"/>
    <path d="M190 115 L250 115 L245 130 L195 130 Z" fill="#1e293b"/>
    <rect x="185" y="130" width="70" height="20" rx="2" fill="url(#fgHot)"/>
    <ellipse cx="220" cy="140" rx="50" ry="20" fill="url(#fgGlow)" opacity=".5"/>
    <path d="M170 150 L270 150 L265 170 L175 170 Z" fill="url(#fgAnvil)"/>
    <rect x="150" y="170" width="140" height="15" fill="#0f172a"/>
    <circle cx="340" cy="100" r="10" fill="#1e293b"/>
    <rect x="332" y="110" width="16" height="30" rx="2" fill="#1e293b"/>
    <rect x="320" y="120" width="15" height="4" fill="#1e293b"/>
    <line x1="260" y1="140" x2="320" y2="122" stroke="#64748b" strokeWidth="2"/>
    <circle cx="180" cy="128" r="1.5" fill="#fef3c7"/>
    <circle cx="260" cy="128" r="1.5" fill="#fef3c7"/>
    <circle cx="175" cy="125" r="1" fill="#fbbf24"/>
    <circle cx="265" cy="125" r="1" fill="#fbbf24"/>
    <circle cx="170" cy="135" r=".8" fill="#f97316"/>
    <circle cx="270" cy="135" r=".8" fill="#f97316"/>
    <rect x="100" y="185" width="240" height="10" fill="#0f172a"/>
  </svg>
);

export const SecondaryVisualSvg: React.FC = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="spFloor" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#334155"/><stop offset="1" stopColor="#0f172a"/></linearGradient>
      <linearGradient id="spTank" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#475569"/><stop offset="1" stopColor="#1e293b"/></linearGradient>
      <linearGradient id="spNickel" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#fef3c7"/><stop offset=".5" stopColor="#fbbf24"/><stop offset="1" stopColor="#b45309"/></linearGradient>
      <linearGradient id="spZinc" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#e2e8f0"/><stop offset=".5" stopColor="#94a3b8"/><stop offset="1" stopColor="#475569"/></linearGradient>
      <linearGradient id="spChrome" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#f8fafc"/><stop offset=".5" stopColor="#cbd5e1"/><stop offset="1" stopColor="#64748b"/></linearGradient>
      <linearGradient id="spLiquid" x1="0" x2="0" y2="1"><stop offset="0" stopColor="#38bdf8" stopOpacity=".3"/><stop offset="1" stopColor="#1e40af" stopOpacity=".7"/></linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#spFloor)"/>
    <rect x="20" y="50" width="100" height="110" rx="4" fill="url(#spTank)"/>
    <rect x="25" y="55" width="90" height="100" fill="url(#spLiquid)"/>
    <rect x="40" y="40" width="60" height="4" fill="#64748b"/>
    <line x1="50" y1="44" x2="50" y2="130" stroke="#64748b" strokeWidth="1.5"/>
    <line x1="70" y1="44" x2="70" y2="130" stroke="#64748b" strokeWidth="1.5"/>
    <line x1="90" y1="44" x2="90" y2="130" stroke="#64748b" strokeWidth="1.5"/>
    <rect x="42" y="70" width="16" height="10" rx="1" fill="url(#spNickel)"/>
    <rect x="42" y="90" width="16" height="10" rx="1" fill="url(#spNickel)"/>
    <rect x="42" y="110" width="16" height="10" rx="1" fill="url(#spNickel)"/>
    <rect x="62" y="70" width="16" height="10" rx="1" fill="url(#spNickel)"/>
    <rect x="62" y="90" width="16" height="10" rx="1" fill="url(#spNickel)"/>
    <rect x="62" y="110" width="16" height="10" rx="1" fill="url(#spNickel)"/>
    <rect x="82" y="70" width="16" height="10" rx="1" fill="url(#spNickel)"/>
    <rect x="82" y="90" width="16" height="10" rx="1" fill="url(#spNickel)"/>
    <rect x="82" y="110" width="16" height="10" rx="1" fill="url(#spNickel)"/>
    <text x="70" y="175" fontSize="9" fill="#fbbf24" textAnchor="middle" fontFamily="Inter" fontWeight="700">NICKEL</text>
    <rect x="150" y="50" width="100" height="110" rx="4" fill="url(#spTank)"/>
    <rect x="155" y="55" width="90" height="100" fill="url(#spLiquid)"/>
    <rect x="170" y="40" width="60" height="4" fill="#64748b"/>
    <line x1="180" y1="44" x2="180" y2="130" stroke="#64748b" strokeWidth="1.5"/>
    <line x1="200" y1="44" x2="200" y2="130" stroke="#64748b" strokeWidth="1.5"/>
    <line x1="220" y1="44" x2="220" y2="130" stroke="#64748b" strokeWidth="1.5"/>
    <rect x="172" y="70" width="16" height="10" rx="1" fill="url(#spZinc)"/>
    <rect x="172" y="90" width="16" height="10" rx="1" fill="url(#spZinc)"/>
    <rect x="172" y="110" width="16" height="10" rx="1" fill="url(#spZinc)"/>
    <rect x="192" y="70" width="16" height="10" rx="1" fill="url(#spZinc)"/>
    <rect x="192" y="90" width="16" height="10" rx="1" fill="url(#spZinc)"/>
    <rect x="192" y="110" width="16" height="10" rx="1" fill="url(#spZinc)"/>
    <rect x="212" y="70" width="16" height="10" rx="1" fill="url(#spZinc)"/>
    <rect x="212" y="90" width="16" height="10" rx="1" fill="url(#spZinc)"/>
    <rect x="212" y="110" width="16" height="10" rx="1" fill="url(#spZinc)"/>
    <text x="200" y="175" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="Inter" fontWeight="700">ZINC</text>
    <rect x="280" y="50" width="100" height="110" rx="4" fill="url(#spTank)"/>
    <rect x="285" y="55" width="90" height="100" fill="url(#spLiquid)"/>
    <rect x="300" y="40" width="60" height="4" fill="#64748b"/>
    <line x1="310" y1="44" x2="310" y2="130" stroke="#64748b" strokeWidth="1.5"/>
    <line x1="330" y1="44" x2="330" y2="130" stroke="#64748b" strokeWidth="1.5"/>
    <line x1="350" y1="44" x2="350" y2="130" stroke="#64748b" strokeWidth="1.5"/>
    <rect x="302" y="70" width="16" height="10" rx="1" fill="url(#spChrome)"/>
    <rect x="302" y="90" width="16" height="10" rx="1" fill="url(#spChrome)"/>
    <rect x="302" y="110" width="16" height="10" rx="1" fill="url(#spChrome)"/>
    <rect x="322" y="70" width="16" height="10" rx="1" fill="url(#spChrome)"/>
    <rect x="322" y="90" width="16" height="10" rx="1" fill="url(#spChrome)"/>
    <rect x="322" y="110" width="16" height="10" rx="1" fill="url(#spChrome)"/>
    <rect x="342" y="70" width="16" height="10" rx="1" fill="url(#spChrome)"/>
    <rect x="342" y="90" width="16" height="10" rx="1" fill="url(#spChrome)"/>
    <rect x="342" y="110" width="16" height="10" rx="1" fill="url(#spChrome)"/>
    <text x="330" y="175" fontSize="9" fill="#cbd5e1" textAnchor="middle" fontFamily="Inter" fontWeight="700">CHROME</text>
    <circle cx="40" cy="100" r="2" fill="#fff" opacity=".4"/>
    <circle cx="60" cy="80" r="1.5" fill="#fff" opacity=".4"/>
    <circle cx="100" cy="120" r="2" fill="#fff" opacity=".4"/>
    <circle cx="170" cy="90" r="1.5" fill="#fff" opacity=".4"/>
    <circle cx="210" cy="110" r="2" fill="#fff" opacity=".4"/>
    <circle cx="300" cy="100" r="1.5" fill="#fff" opacity=".4"/>
    <circle cx="340" cy="80" r="2" fill="#fff" opacity=".4"/>
    <rect x="10" y="30" width="380" height="6" fill="#1e293b"/>
    <rect x="10" y="160" width="380" height="6" fill="#0f172a"/>
  </svg>
);
