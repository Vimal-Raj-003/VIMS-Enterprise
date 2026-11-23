import React from 'react';
import { VERIFIED_CLIENTS } from '../constants';
import { Quote } from 'lucide-react';

const CLIENT_FEEDBACK = [
  {
    company: 'Nangai Pharmacy',
    sector: 'Healthcare & Retail',
    quote:
      'They listened patiently and explained everything in clear, practical terms. Our team always knew the exact next milestone from day one to launch.',
  },
  {
    company: 'Hexuno Technologies',
    sector: 'Engineering Systems',
    quote:
      'We could discuss technical requirements openly with the VIMS team. They kept us informed at every step and translated our ideas into a clean, reliable system.',
  },
  {
    company: 'Radent Engineering',
    sector: 'Precision Manufacturing',
    quote:
      'Approachable, engineering-first, and deeply practical. Whenever we had an operational question, they solved the root cause instead of offering generic templates.',
  },
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-y border-slate-200/70 dark:border-white/[0.06] bg-white/50 dark:bg-[#080C16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
            Trusted Across Healthcare, Engineering &amp; Commerce
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-poppins font-bold text-slate-900 dark:text-white">
            30+ Organizations Partner with VIMS Enterprise
          </h2>
        </div>

        {/* Clean Authentic Logo Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-center">
          {VERIFIED_CLIENTS.map((client) => (
            <div
              key={client.name}
              className="group h-20 px-4 rounded-2xl bg-white dark:bg-[#0D1322] border border-slate-200/80 dark:border-white/[0.07] flex items-center justify-center hover:border-indigo-500/35 transition-all"
              title={`${client.name} — ${client.sector}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-11 max-w-[120px] object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Client Relationship Perspectives */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_FEEDBACK.map((item) => (
            <div
              key={item.company}
              className="executive-card p-6 flex flex-col justify-between"
            >
              <div>
                <Quote size={18} className="text-indigo-500/70 mb-3" />
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900 dark:text-white">{item.company}</span>
                <span className="text-[11px] font-mono text-slate-400">{item.sector}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
