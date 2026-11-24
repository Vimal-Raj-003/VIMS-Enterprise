import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { Mail, Phone, MessageSquare, CheckCircle2, Calendar, Send, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT, CORE_PILLARS } from '../constants';

interface ContactPageProps {
  onOpenBooking: (topic?: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: CORE_PILLARS[0].title,
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'contact-page' }),
      }).catch(() => {});
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappPrefilled = `https://wa.me/91${COMPANY_CONTACT.phone}?text=${encodeURIComponent(
    `Hi Vimal, I'm ${formData.name || 'reaching out'} (${formData.company || 'Business Enquiry'}) regarding ${formData.service}. ${formData.message}`
  )}`;

  return (
    <div>
      <HeroSection
        badge="Direct Executive & Engineering Desk"
        headline={
          <>
            Start the Conversation.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8451E] to-[#D4AF37]">
              Book Your VIMS Call.
            </span>
          </>
        }
        subtext="Bring your Voice AI call-flows, custom website goals, automation bottlenecks, MediCore HMS requirements, or Academy batch enquiries."
        primaryCta={{ text: 'Open Live Booking Calendar', onClick: () => onOpenBooking() }}
      />

      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="executive-card p-7 sm:p-10">
              <h2 className="text-2xl font-display font-bold text-zinc-900 dark:text-white mb-2">
                Send a Project or Training Brief
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                Routed directly to our Founder &amp; CTO Vimal Raj and CEO Gowtham Raj&apos;s delivery desk.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/25 space-y-4">
                  <div className="flex items-center gap-3 text-[#059669] dark:text-[#10B981]">
                    <CheckCircle2 size={22} />
                    <span className="font-bold text-base">Brief Logged Successfully</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Thank you! Vimal Raj (Founder &amp; CTO) and the VIMS engineering team will respond within one business day.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(formData.service)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-xs font-semibold"
                    >
                      <Calendar size={14} />
                      <span>Pick a 30-Min Meet Slot</span>
                    </button>
                    <a
                      href={whatsappPrefilled}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold"
                    >
                      <MessageSquare size={14} />
                      <span>WhatsApp Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-sm focus:border-[#E8451E] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-sm focus:border-[#E8451E] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99406 60868"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-sm focus:border-[#E8451E] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                        Company / Hospital / College
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization name"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-sm focus:border-[#E8451E] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Focus Niche *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#18181B] border border-zinc-200 dark:border-white/10 text-sm focus:border-[#E8451E] outline-none"
                    >
                      {CORE_PILLARS.map((p) => (
                        <option key={p.page} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                      <option value="Multi-Pillar Enterprise Partnership">
                        Multi-Pillar Enterprise Partnership
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Project Goals *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your requirements, preferred languages, integrations, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-sm focus:border-[#E8451E] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white font-semibold text-sm shadow-lg shadow-[#E8451E]/25 transition-all disabled:opacity-60"
                  >
                    <Send size={15} />
                    <span>{submitting ? 'Sending...' : 'Send Enquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="executive-card p-7 space-y-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/brand/vimal-ceo.webp"
                  alt="Vimal Raj — Founder & CTO"
                  className="w-14 h-14 rounded-2xl object-cover object-top border border-[#E8451E]/40"
                />
                <div>
                  <div className="text-lg font-display font-bold text-zinc-900 dark:text-white">Vimal Raj</div>
                  <div className="text-xs font-mono text-[#E8451E] font-semibold">
                    Founder &amp; CTO &middot; Direct Desk
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 pt-2 border-t border-zinc-200/80 dark:border-white/10 text-sm">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 hover:text-[#E8451E] transition-colors"
                >
                  <Mail size={17} className="text-[#E8451E] shrink-0" />
                  <span>{COMPANY_CONTACT.email}</span>
                </a>
                <a
                  href={`tel:+91${COMPANY_CONTACT.phone}`}
                  className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 hover:text-[#E8451E] transition-colors"
                >
                  <Phone size={17} className="text-[#D4AF37] shrink-0" />
                  <span>
                    {COMPANY_CONTACT.phoneFormatted} / {COMPANY_CONTACT.secondaryPhoneFormatted}
                  </span>
                </a>
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                  <Clock size={16} className="text-zinc-400 shrink-0" />
                  <span>Mon – Sat &middot; 9:00 AM – 8:00 PM IST</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-xs font-semibold transition-all"
                >
                  <Calendar size={15} />
                  <span>Book 30-Min Meet</span>
                </button>
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold transition-all"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            <div className="executive-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E8451E]">
                <ShieldCheck size={15} />
                <span>Call Prep Guide</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <li>&bull; <strong>Voice AI (Jill-Jill):</strong> Languages, call volume &amp; CRM tools.</li>
                <li>&bull; <strong>Web Creation:</strong> Brand references, catalog or feature scope.</li>
                <li>&bull; <strong>AI Automations &amp; HMS:</strong> Bottlenecks or clinical modules needed.</li>
                <li>&bull; <strong>Academy (Embedded Skills):</strong> Cohort track &amp; student batch details.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
