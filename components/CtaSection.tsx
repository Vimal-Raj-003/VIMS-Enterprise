import React from 'react';
import { Calendar, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../constants';

interface CtaSectionProps {
  onOpenBooking: (topic?: string) => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-slate-900 dark:bg-[#0B1120] border border-slate-800 dark:border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle architectural glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/20 blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-sky-500/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-indigo-300 text-xs font-mono uppercase tracking-wider">
                <span>Direct Engineering Consultation</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-poppins font-bold text-white tracking-tight leading-tight">
                Ready to Architect Your Next Voice Agent, Web Platform, or Enterprise System?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Work directly with Founder &amp; CEO Vimal Raj and the VIMS engineering team. Bring your current workflow, hospital module checklist, or student cohort goals—we will map a clear, practical execution blueprint.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" /> 30-Minute Google Meet Discovery
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Tailored Scope &amp; Architecture Walkthrough
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Real Engineering Team Behind Every Build
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all"
              >
                <Calendar size={17} />
                <span>Book My VIMS Strategy Call</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-sm transition-all"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>Speak on WhatsApp ({COMPANY_CONTACT.phoneFormatted})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
