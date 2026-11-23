import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  headline: React.ReactNode;
  subtext: string;
  primaryCta?: { text: string; onClick: () => void };
  secondaryCta?: { text: string; onClick: () => void };
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
  badge = 'VIMS Enterprise · Engineering & Applied AI',
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/70 dark:border-white/[0.06] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-mono uppercase tracking-wider mb-6"
        >
          <Sparkles size={13} />
          <span>{badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-poppins font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
        >
          {subtext}
        </motion.p>

        {(primaryCta || secondaryCta) ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {primaryCta ? (
              <button
                type="button"
                onClick={primaryCta.onClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all"
              >
                <span>{primaryCta.text}</span>
                <ArrowRight size={16} />
              </button>
            ) : null}
            {secondaryCta ? (
              <button
                type="button"
                onClick={secondaryCta.onClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 transition-all"
              >
                <span>{secondaryCta.text}</span>
              </button>
            ) : null}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default HeroSection;
