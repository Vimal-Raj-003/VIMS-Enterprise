import React from 'react';

const DynamicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-[#FAFAF9] dark:bg-[#060911] transition-colors duration-500">
      {/* Subtle architectural grid */}
      <div className="absolute inset-0 executive-grid [mask-image:radial-gradient(ellipse_80%_65%_at_50%_15%,#000_35%,transparent_100%)]" />

      {/* Restrained ambient lighting — zero neon noise */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[920px] h-[520px] rounded-full bg-indigo-500/[0.08] dark:bg-indigo-500/[0.11] blur-[130px]" />
      <div className="absolute top-[38%] -right-48 w-[540px] h-[540px] rounded-full bg-sky-500/[0.05] dark:bg-sky-500/[0.07] blur-[140px]" />
      <div className="absolute bottom-[-12rem] -left-40 w-[520px] h-[520px] rounded-full bg-indigo-600/[0.04] dark:bg-indigo-600/[0.06] blur-[140px]" />
    </div>
  );
};

export default DynamicBackground;
