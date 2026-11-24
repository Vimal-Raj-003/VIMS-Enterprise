import React from 'react';
import { VERIFIED_CLIENTS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const CLIENT_FEEDBACK = [
  {
    company: 'Nangai Pharmacy',
    sector: 'Healthcare & Retail',
    quote:
      'They listened patiently and explained every milestone in clear terms from day one to go-live.',
  },
  {
    company: 'Hexuno Technologies',
    sector: 'Engineering Systems',
    quote:
      'We could discuss complex technical needs openly—and they shipped a clean, reliable platform on schedule.',
  },
  {
    company: 'Radent Engineering',
    sector: 'Precision Manufacturing',
    quote:
      'Engineering-first and approachable. They solve real operational root causes instead of pushing templates.',
  },
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 border-y border-zinc-200/80 dark:border-white/10 bg-white/60 dark:bg-[#111114]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#E8451E] font-semibold">
            Trusted Client Ecosystem
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-white">
            Partnering Across Healthcare, Engineering &amp; Commerce
          </h2>
        </div>
      </div>

      {/* Smooth Palette-Blended Dual-Track Infinite Marquee */}
      <div className="marquee-mask w-full overflow-hidden py-3">
        <div className="marquee-track flex w-max animate-marquee">
          {[0, 1].map((dupIdx) => (
            <div
              key={dupIdx}
              aria-hidden={dupIdx === 1}
              className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5 shrink-0"
            >
              {VERIFIED_CLIENTS.map((client) => (
                <div
                  key={`${dupIdx}-${client.name}`}
                  title={`${client.name} — ${client.sector}`}
                  className="group flex items-center justify-center h-20 px-6 rounded-2xl border border-zinc-200/75 dark:border-white/10 bg-[#FAF8F5]/80 dark:bg-white/5 backdrop-blur-sm hover:border-[#D4AF37]/50 transition-all shrink-0"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="dark:hidden max-h-11 max-w-[165px] w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all"
                  />
                  <img
                    src={client.logoDark}
                    alt={client.name}
                    className="hidden dark:block max-h-11 max-w-[165px] w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Simple, Neat & Clean Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CLIENT_FEEDBACK.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="executive-card p-6 flex flex-col justify-between"
            >
              <div>
                <Quote size={17} className="text-[#D4AF37] mb-3" />
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-zinc-200/70 dark:border-white/10 flex items-center justify-between gap-2">
                <span className="text-sm font-display font-bold text-zinc-900 dark:text-white">{item.company}</span>
                <span className="text-[11px] font-mono text-zinc-400">{item.sector}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
