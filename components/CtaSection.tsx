import React from 'react';
import { Calendar, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../constants';

interface CtaSectionProps {
  onOpenBooking: (topic?: string) => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
            Direct Engineering Consultation
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Ready to Discuss Your Next System With Our Team?
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Speak directly with Founder &amp; CTO Vimal Raj and CEO Gowtham Raj&apos;s delivery team to map your Voice AI, Website, Automation, HMS, or Academy roadmap.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400 pt-1">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#0F766E] dark:text-teal-400" /> 30-Min Google Meet
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#0F766E] dark:text-teal-400" /> Clear Scope Walkthrough
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#0F766E] dark:text-teal-400" /> Direct CTO WhatsApp
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-sm shadow-sm transition-all"
          >
            <Calendar size={17} />
            <span>Book a Discovery Call</span>
            <ArrowRight size={16} />
          </button>

          <a
            href={COMPANY_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium text-sm transition-all"
          >
            <MessageSquare size={16} className="text-[#0F766E] dark:text-teal-400" />
            <span>WhatsApp {COMPANY_CONTACT.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
