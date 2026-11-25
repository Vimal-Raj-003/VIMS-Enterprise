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
    <div className="bg-white dark:bg-[#0B0F19]">
      <HeroSection
        badge="Direct Executive & Engineering Desk"
        headline={
          <>
            Start the Conversation.{' '}
            <span className="text-[#1D4ED8] dark:text-blue-400">Book Your VIMS Call.</span>
          </>
        }
        subtext="Bring your Voice AI call-flows, custom website goals, automation bottlenecks, MediCore HMS requirements, or Academy batch enquiries."
        primaryCta={{ text: 'Open Live Booking Calendar', onClick: () => onOpenBooking() }}
      />

      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Open Form Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Send a Project or Training Brief
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Routed directly to Founder &amp; CTO Vimal Raj and CEO Gowtham Raj&apos;s delivery desk.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#F8F7F4] dark:bg-slate-800/60 space-y-4">
                <div className="flex items-center gap-3 text-[#0F766E] dark:text-teal-400">
                  <CheckCircle2 size={22} />
                  <span className="font-bold text-base">Brief Logged Successfully</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thank you! Vimal Raj (Founder &amp; CTO) and the VIMS engineering team will respond within one business day.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(formData.service)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-semibold"
                  >
                    <Calendar size={14} />
                    <span>Pick a 30-Min Meet Slot</span>
                  </button>
                  <a
                    href={whatsappPrefilled}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F766E] hover:bg-teal-800 text-white text-xs font-semibold"
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
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:border-[#1D4ED8] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:border-[#1D4ED8] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99406 60868"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:border-[#1D4ED8] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Company / Hospital / College
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Organization name"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:border-[#1D4ED8] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Focus Pillar *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:border-[#1D4ED8] outline-none"
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Project Goals *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your requirements, preferred languages, integrations, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:border-[#1D4ED8] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-sm transition-all disabled:opacity-60"
                >
                  <Send size={15} />
                  <span>{submitting ? 'Sending...' : 'Send Enquiry'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels Sidebar */}
          <div className="lg:col-span-5 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-10 space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/brand/vimal-ceo.webp"
                  alt="Vimal Raj — Founder & CTO"
                  className="w-14 h-14 rounded-2xl object-cover object-top"
                />
                <div>
                  <div className="text-lg font-display font-bold text-slate-900 dark:text-white">Vimal Raj</div>
                  <div className="text-xs font-mono text-[#1D4ED8] dark:text-blue-400 font-semibold">
                    Founder &amp; CTO &middot; Direct Desk
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-sm">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-[#1D4ED8]"
                >
                  <Mail size={16} className="text-[#1D4ED8] shrink-0" />
                  <span>{COMPANY_CONTACT.email}</span>
                </a>
                <a
                  href={`tel:+91${COMPANY_CONTACT.phone}`}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-[#1D4ED8]"
                >
                  <Phone size={16} className="text-slate-500 shrink-0" />
                  <span>
                    {COMPANY_CONTACT.phoneFormatted} / {COMPANY_CONTACT.secondaryPhoneFormatted}
                  </span>
                </a>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <Clock size={15} className="text-slate-400 shrink-0" />
                  <span>Mon – Sat &middot; 9:00 AM – 8:00 PM IST</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-semibold"
                >
                  <Calendar size={15} />
                  <span>Book 30-Min Meet</span>
                </button>
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0F766E] hover:bg-teal-800 text-white text-xs font-semibold"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
                <ShieldCheck size={15} />
                <span>Call Prep Guide</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
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
