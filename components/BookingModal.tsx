import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  X,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  CheckCircle2,
  ExternalLink,
  Send,
  ShieldCheck,
  Clock,
  Video,
} from 'lucide-react';
import { COMPANY_CONTACT, CORE_PILLARS } from '../constants';
import { useTheme } from '../contexts/ThemeContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultTopic = '' }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'calendar' | 'brief'>('calendar');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: defaultTopic || CORE_PILLARS[0].title,
    notes: '',
  });

  useEffect(() => {
    if (defaultTopic) {
      setForm((prev) => ({ ...prev, topic: defaultTopic }));
    }
  }, [defaultTopic]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmitBrief = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'booking-modal' }),
      }).catch(() => {});
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappDirectHref = `https://wa.me/91${COMPANY_CONTACT.phone}?text=${encodeURIComponent(
    `Hi Vimal, I'm ${form.name || 'reaching out'} from ${form.company || 'our team'}. Interested in discussing: ${form.topic}. ${form.notes}`
  )}`;

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-label="Schedule a Strategy Call with VIMS Enterprise"
            className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50/80 dark:bg-[#080C16]">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/brand/vimal-ceo.webp"
                  alt="Vimal Raj — Founder & CEO"
                  className="w-11 h-11 rounded-full object-cover border border-indigo-500/40"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Book a Discovery Call with Vimal Raj
                    </h3>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Direct Founder Access
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-3 mt-0.5">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> 30 Minutes
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Video size={12} /> Google Meet
                    </span>
                    <span className="hidden md:inline-flex items-center gap-1">
                      <ShieldCheck size={12} /> Architecture &amp; Scope Walkthrough
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-xl p-1 bg-slate-200/70 dark:bg-white/[0.06] text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setActiveTab('calendar')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                      activeTab === 'calendar'
                        ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Calendar size={13} />
                    <span>Live Calendar</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('brief')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                      activeTab === 'brief'
                        ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Send size={13} />
                    <span>Project Brief</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close booking dialog"
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === 'calendar' ? (
                <div className="flex flex-col h-[540px] sm:h-[580px] bg-slate-50 dark:bg-[#090D18]">
                  <iframe
                    src={`${COMPANY_CONTACT.bookingUrl}?layout=month_view&theme=${theme}`}
                    title="VIMS Enterprise Strategy Call Calendar"
                    style={{ colorScheme: theme }}
                    className="w-full flex-1 border-0 bg-white dark:bg-[#090D18]"
                    loading="lazy"
                  />
                  <div className="px-6 py-3 bg-white dark:bg-[#080C16] border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={`tel:+91${COMPANY_CONTACT.phone}`}
                        className="inline-flex items-center gap-1.5 hover:text-indigo-500 transition-colors font-medium"
                      >
                        <Phone size={13} className="text-indigo-500" />
                        {COMPANY_CONTACT.phoneFormatted}
                      </a>
                      <a
                        href={COMPANY_CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-emerald-500 transition-colors font-medium"
                      >
                        <MessageSquare size={13} className="text-emerald-500" />
                        Instant WhatsApp
                      </a>
                      <a
                        href={`mailto:${COMPANY_CONTACT.email}`}
                        className="inline-flex items-center gap-1.5 hover:text-indigo-500 transition-colors"
                      >
                        <Mail size={13} className="text-indigo-500" />
                        {COMPANY_CONTACT.email}
                      </a>
                    </div>
                    <a
                      href={COMPANY_CONTACT.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
                    >
                      <span>Open full-screen scheduler</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7">
                    {submitted ? (
                      <div className="p-8 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/25 text-center space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                          <CheckCircle2 size={26} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          Brief Received — We’ll Reach Out Shortly
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                          Thank you! Vimal Raj and the VIMS engineering team have logged your brief. Want an immediate response right now?
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 pt-2">
                          <a
                            href={whatsappDirectHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all"
                          >
                            <MessageSquare size={16} />
                            <span>Continue on WhatsApp</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => setActiveTab('calendar')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all"
                          >
                            <Calendar size={16} />
                            <span>Pick a Meet Slot</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitBrief} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Your full name"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-sm focus:border-indigo-500 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="you@company.com"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-sm focus:border-indigo-500 outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                              Phone / WhatsApp *
                            </label>
                            <input
                              type="tel"
                              required
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-sm focus:border-indigo-500 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                              Organization / Institution
                            </label>
                            <input
                              type="text"
                              value={form.company}
                              onChange={(e) => setForm({ ...form, company: e.target.value })}
                              placeholder="Company, Hospital, or University"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-sm focus:border-indigo-500 outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                            Focus Pillar
                          </label>
                          <select
                            value={form.topic}
                            onChange={(e) => setForm({ ...form, topic: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#101729] border border-slate-200 dark:border-white/10 text-sm focus:border-indigo-500 outline-none"
                          >
                            {CORE_PILLARS.map((p) => (
                              <option key={p.page} value={p.title}>
                                {p.title}
                              </option>
                            ))}
                            <option value="Multi-Pillar Enterprise Engagement">Multi-Pillar Enterprise Engagement</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                            What are you building or solving? *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={form.notes}
                            onChange={(e) => setForm({ ...form, notes: e.target.value })}
                            placeholder="Share your workflow, desired outcomes, languages, modules, or timeline..."
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-sm focus:border-indigo-500 outline-none"
                          />
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-1">
                          <button
                            type="submit"
                            disabled={submitting}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/20 transition-all disabled:opacity-60"
                          >
                            <Send size={15} />
                            <span>{submitting ? 'Submitting...' : 'Submit Project Brief'}</span>
                          </button>

                          <a
                            href={whatsappDirectHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 font-semibold text-sm transition-all"
                          >
                            <MessageSquare size={15} />
                            <span>Send via WhatsApp Instead</span>
                          </a>
                        </div>
                      </form>
                    )}
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] space-y-3">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        What Happens on Your 30-Min Call
                      </h4>
                      <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                          <span>Direct architecture &amp; workflow review—no generic sales pitch.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                          <span>Live walkthrough of relevant demos (Voice Agent, HMS, Automation, Web, or MATLAB MBD).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                          <span>Tailored implementation roadmap &amp; scope document aligned to your exact goals.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] space-y-2.5 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white">Direct Executive Channels</div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                        <Phone size={14} className="text-indigo-500" />
                        <a href={`tel:+91${COMPANY_CONTACT.phone}`} className="hover:underline">
                          {COMPANY_CONTACT.phoneFormatted}
                        </a>
                        <span className="text-slate-400">·</span>
                        <span>{COMPANY_CONTACT.secondaryPhoneFormatted}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                        <Mail size={14} className="text-indigo-500" />
                        <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:underline">
                          {COMPANY_CONTACT.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default BookingModal;
