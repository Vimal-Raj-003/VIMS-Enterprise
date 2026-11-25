import React from 'react';

const DynamicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none bg-white dark:bg-[#0B0F19] transition-colors duration-300" />
  );
};

export default DynamicBackground;
