import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  headline: React.ReactNode;
  subtext: string;
  primaryCta?: { text: string; onClick: () => void };
  secondaryCta?: { text: string; onClick: () => void; externalUrl?: string };
  badge?: string;
  imageUrl?: string;
  altText?: string;
  variant?: 'landing' | 'subpage';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  badge = 'VIMS Enterprise Group',
  imageUrl,
  altText = 'VIMS Enterprise Editorial Photo',
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-18 md:pb-22 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0B0F19]">
      <div
        className={`max-w-7xl mx-auto ${
          imageUrl ? 'grid grid-cols-1 lg:grid-cols-12 gap-12 items-center' : 'max-w-4xl text-center'
        }`}
      >
        <div className={imageUrl ? 'lg:col-span-6 space-y-5' : 'space-y-5'}>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            {headline}
          </h1>

          <p
            className={`text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed ${
              imageUrl ? 'max-w-xl' : 'max-w-2xl mx-auto'
            }`}
          >
            {subtext}
          </p>

          {primaryCta || secondaryCta ? (
            <div className={`pt-2 flex flex-wrap items-center gap-4 ${imageUrl ? '' : 'justify-center'}`}>
              {primaryCta ? (
                <button
                  type="button"
                  onClick={primaryCta.onClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#1D4ED8] hover:bg-[#1E40AF] text-white shadow-sm transition-all"
                >
                  <span>{primaryCta.text}</span>
                  <ArrowRight size={16} />
                </button>
              ) : null}

              {secondaryCta ? (
                secondaryCta.externalUrl ? (
                  <a
                    href={secondaryCta.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#F8F7F4] dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-all"
                  >
                    <span>{secondaryCta.text}</span>
                    <ExternalLink size={15} className="text-[#1D4ED8] dark:text-blue-400" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={secondaryCta.onClick}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#F8F7F4] dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-all"
                  >
                    <span>{secondaryCta.text}</span>
                  </button>
                )
              ) : null}
            </div>
          ) : null}
        </div>

        {imageUrl ? (
          <div className="lg:col-span-6">
            <img
              src={imageUrl}
              alt={altText}
              className="w-full aspect-[4/3] rounded-2xl object-cover shadow-lg"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default HeroSection;
