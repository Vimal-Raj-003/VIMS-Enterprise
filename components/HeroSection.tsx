import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  headline: React.ReactNode;
  subtext: string;
  primaryCta?: { text: string; onClick: () => void };
  secondaryCta?: { text: string; onClick: () => void; externalUrl?: string };
  badge?: string;
  imageUrl?: string;
  altText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  badge = 'VIMS Enterprise Group',
  imageUrl,
  altText = 'VIMS Enterprise Studio Visual',
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-18 md:pb-22 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/80 dark:border-white/10 overflow-hidden">
      <div
        className={`max-w-7xl mx-auto relative z-10 ${
          imageUrl ? 'grid grid-cols-1 lg:grid-cols-12 gap-10 items-center' : 'max-w-4xl text-center'
        }`}
      >
        <div className={imageUrl ? 'lg:col-span-7 space-y-5' : 'space-y-5'}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8451E]/10 border border-[#E8451E]/25 text-[#D93814] dark:text-[#FF6B47] text-xs font-mono uppercase tracking-wider"
          >
            <Sparkles size={13} />
            <span>{badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed ${
              imageUrl ? 'max-w-xl' : 'max-w-2xl mx-auto'
            }`}
          >
            {subtext}
          </motion.p>

          {primaryCta || secondaryCta ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`pt-2 flex flex-wrap items-center gap-3.5 ${imageUrl ? '' : 'justify-center'}`}
            >
              {primaryCta ? (
                <button
                  type="button"
                  onClick={primaryCta.onClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#E8451E] hover:bg-[#D93814] text-white shadow-lg shadow-[#E8451E]/25 transition-all"
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
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/15 transition-all"
                  >
                    <span>{secondaryCta.text}</span>
                    <ExternalLink size={15} className="text-[#D4AF37]" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={secondaryCta.onClick}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/15 transition-all"
                  >
                    <span>{secondaryCta.text}</span>
                  </button>
                )
              ) : null}
            </motion.div>
          ) : null}
        </div>

        {imageUrl ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/15 bg-[#111114] shadow-2xl">
              <img src={imageUrl} alt={altText} className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default HeroSection;
