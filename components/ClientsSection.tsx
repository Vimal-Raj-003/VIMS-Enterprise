import React from 'react';
import { VERIFIED_CLIENTS } from '../constants';

const CLIENT_FEEDBACK = [
  {
    company: 'Nangai Pharmacy',
    sector: 'Healthcare & Retail',
    quote:
      'They listened patiently and explained every milestone in clear, practical terms from day one to launch.',
  },
  {
    company: 'Hexuno Technologies',
    sector: 'Engineering Systems',
    quote:
      'We discussed technical requirements openly with their team—and they delivered a clean, reliable platform on schedule.',
  },
  {
    company: 'Radent Engineering',
    sector: 'Precision Manufacturing',
    quote:
      'Engineering-first and approachable. They solve real operational root causes instead of pushing generic templates.',
  },
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-22 editorial-section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-blue-400 font-semibold">
            Trusted By Growing Organizations
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            Long-Term Partnerships Built on Clarity
          </h2>
        </div>
      </div>

      {/* Frameless Continuous Marquee — Zero Boxy Logo Cards */}
      <div className="marquee-mask w-full overflow-hidden py-4">
        <div className="marquee-track flex w-max animate-marquee items-center">
          {[0, 1].map((dupIdx) => (
            <div
              key={dupIdx}
              aria-hidden={dupIdx === 1}
              className="flex items-center gap-12 sm:gap-20 px-6 sm:px-10 shrink-0"
            >
              {VERIFIED_CLIENTS.map((client) => (
                <div
                  key={`${dupIdx}-${client.name}`}
                  title={`${client.name} — ${client.sector}`}
                  className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="dark:hidden h-10 sm:h-12 max-w-[175px] w-auto object-contain"
                  />
                  <img
                    src={client.logoDark}
                    alt={client.name}
                    className="hidden dark:block h-10 sm:h-12 max-w-[175px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Open Editorial Client Perspectives — Hairline Dividers, Zero Heavy Card Boxes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-12 border-t border-slate-200/80 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-slate-800">
          {CLIENT_FEEDBACK.map((item, idx) => (
            <div
              key={item.company}
              className={`py-6 md:py-0 ${
                idx === 0 ? 'md:pr-8' : idx === 1 ? 'md:px-8' : 'md:pl-8'
              } flex flex-col justify-between space-y-5`}
            >
              <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="font-display font-bold text-slate-900 dark:text-white">{item.company}</span>
                <span className="font-mono text-slate-500 dark:text-slate-400">{item.sector}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
