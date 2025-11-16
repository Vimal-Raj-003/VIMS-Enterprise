
import React from 'react';

interface HeroSectionProps {
  headline: React.ReactNode;
  subtext: string;
  primaryCta: { text: string; onClick: () => void; };
  secondaryCta?: { text: string; onClick: () => void; };
  imageUrl: string;
  altText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ headline, subtext, primaryCta, secondaryCta, imageUrl, altText }) => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-label={altText}
        role="img"
      >
        <div className="absolute inset-0 bg-navy/70 backdrop-brightness-50"></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-violet/10 rounded-full filter blur-3xl animate-float animation-delay-3000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold tracking-tight text-light-text">
          {headline}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
          {subtext}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={primaryCta.onClick}
            className="w-full sm:w-auto px-8 py-3 text-base font-bold text-light-text bg-gradient-to-r from-orange to-violet hover:from-violet hover:to-orange rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            {primaryCta.text}
          </button>
          {secondaryCta && (
            <button 
              onClick={secondaryCta.onClick}
              className="w-full sm:w-auto px-8 py-3 text-base font-bold text-light-text bg-slate-800/50 border-2 border-slate-700 hover:bg-slate-700/50 hover:border-cyan rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {secondaryCta.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
