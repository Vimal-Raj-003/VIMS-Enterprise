import React from 'react';
import { Calendar, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../constants';

interface CtaSectionProps {
  onOpenBooking: (topic?: string) => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-[#111114] border border-white/10 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#E8451E]/20 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#D4AF37]/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E8CA6A] text-xs font-mono uppercase tracking-wider">
                <span>VIMS Enterprise Architecture Desk</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Ready to Build Your Next B2B AI System?
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Speak directly with Founder &amp; CTO Vimal Raj and CEO Gowtham Raj&apos;s engineering team to map your exact Voice AI, Web, Automation, HMS, or Academy roadmap.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-300 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#10B981]" /> 30-Min Google Meet
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#10B981]" /> Tailored Scope Blueprint
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#10B981]" /> Direct CTO WhatsApp
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#E8451E] hover:bg-[#D93814] text-white font-semibold text-sm shadow-lg shadow-[#E8451E]/25 transition-all"
              >
                <Calendar size={17} />
                <span>Book a Discovery Call</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all"
              >
                <MessageSquare size={16} className="text-[#10B981]" />
                <span>WhatsApp {COMPANY_CONTACT.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
