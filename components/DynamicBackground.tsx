import React from 'react';

const DynamicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-[#FAF8F5] dark:bg-[#09090B] transition-colors duration-500">
      {/* Crisp architectural blueprint grid */}
      <div className="absolute inset-0 executive-grid [mask-image:radial-gradient(ellipse_85%_70%_at_50%_15%,#000_35%,transparent_100%)]" />

      {/* Warm Carbon / Vermilion / Champagne lighting — subtle studio depth */}
      <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[880px] h-[460px] rounded-full bg-[#E8451E]/[0.05] dark:bg-[#E8451E]/[0.06] blur-[150px]" />
      <div className="absolute top-[42%] -right-48 w-[520px] h-[520px] rounded-full bg-[#D4AF37]/[0.04] dark:bg-[#D4AF37]/[0.05] blur-[150px]" />
      <div className="absolute bottom-[-14rem] -left-44 w-[500px] h-[500px] rounded-full bg-[#10B981]/[0.03] dark:bg-[#10B981]/[0.04] blur-[150px]" />
    </div>
  );
};

export default DynamicBackground;
