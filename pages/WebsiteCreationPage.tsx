import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  Globe,
  ShoppingBag,
  LayoutDashboard,
  Smartphone,
  CreditCard,
  Search,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface WebsiteCreationPageProps {
  onOpenBooking: (topic?: string) => void;
}

const ARCHITECTURE_TRACKS = [
  {
    id: 'b2b',
    badge: 'Executive Corporate & B2B',
    title: 'High-Authority B2B Websites & Conversion Portals',
    summary:
      'Designed for engineering firms, healthcare institutions, SaaS companies, and service leaders who need world-class credibility, crystal-clear positioning, and frictionless consultation booking.',
    deliverables: [
      'Custom architectural design system (Light & Dark modes, zero generic templates)',
      'Interactive capability showcases, case-study storytelling & executive trust sections',
      'Embedded calendar scheduling, CRM-connected lead forms & WhatsApp routing',
      'Core Web Vitals speed optimization, schema markup & technical SEO foundation',
    ],
  },
  {
    id: 'ecommerce',
    badge: 'Online Stores & D2C',
    title: 'Clear Path From Browse to Buy: Custom E-Commerce Platforms',
    summary:
      'Replace scattered chat messages and manual payment links with one cohesive online store where customers discover products, select variants, pay securely, and receive instant order updates.',
    deliverables: [
      'Structured product catalog with variant selectors, search & smart category filters',
      'Streamlined cart, shipping rule logic & verified payment gateway checkout',
      'Automated customer order emails, payment status verification & stock controls',
      'Complete admin dashboard handover & team walkthrough for effortless catalog updates',
    ],
  },
  {
    id: 'webapps',
    badge: 'Custom Web Applications',
    title: 'Bespoke Client Portals, Dashboards & AI-Native Web Apps',
    summary:
      'Full-stack React, TypeScript, and Node/PostgreSQL web applications engineered around your internal workflows, multi-role permissions, and live operational analytics.',
    deliverables: [
      'Role-based access portals for clients, operations teams, or field executives',
      'Real-time analytics dashboards, automated PDF/Excel reporting & API webhooks',
      'Built-in AI concierge chatbots grounded in your company knowledge base',
      'Rigorous mobile layout QA, security validation & clean codebase documentation',
    ],
  },
];

const CUSTOMER_JOURNEY = [
  {
    num: '01',
    title: 'Discover & Trust',
    desc: 'Visitors immediately grasp what you do, see authentic proof, and browse services or products effortlessly.',
  },
  {
    num: '02',
    title: 'Compare & Select',
    desc: 'Interactive filters, clear feature breakdowns, or variant options guide buyers without confusion.',
  },
  {
    num: '03',
    title: 'Enquire, Book or Checkout',
    desc: 'Frictionless calendar booking, structured lead intake, or connected payment gateway completion.',
  },
  {
    num: '04',
    title: 'Actionable Team Fulfilment',
    desc: 'Your team receives verified enquiries or paid orders with every detail organized in one place.',
  },
];

const SEVEN_STEP_LAUNCH = [
  { step: '1. Plan', detail: 'Align on business goals, target personas, sitemap, and conversion flows.' },
  { step: '2. Design', detail: 'Craft bespoke typography, color architecture, and responsive UI layouts.' },
  { step: '3. Content & Catalog', detail: 'Structure service narratives, product variants, and authentic visual assets.' },
  { step: '4. Conversion Flow', detail: 'Wire booking calendars, enquiry pipelines, or cart and shipping logic.' },
  { step: '5. Integrations', detail: 'Connect payment gateways, CRM webhooks, WhatsApp, and analytics.' },
  { step: '6. QA & Speed Test', detail: 'Test across mobile/desktop viewports, forms, edge cases, and Core Web Vitals.' },
  { step: '7. Launch & Handover', detail: 'Smooth go-live followed by admin access and a live walkthrough for your team.' },
];

const WebsiteCreationPage: React.FC<WebsiteCreationPageProps> = ({ onOpenBooking }) => {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const track = ARCHITECTURE_TRACKS[selectedTrack];

  return (
    <div>
      <HeroSection
        badge="Custom Web & E-Commerce Engineering"
        headline={
          <>
            Your Business Online.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400">
              Engineered Around You.
            </span>
          </>
        }
        subtext="Bespoke B2B websites, AI-ready web applications, and end-to-end online stores engineered for speed, human trust, and measurable conversion—built from the ground up without generic slop."
        primaryCta={{
          text: 'Plan My Website With VIMS',
          onClick: () => onOpenBooking('Custom Website & E-Commerce Consultation'),
        }}
        secondaryCta={{
          text: 'Explore Build Tracks',
          onClick: () => document.getElementById('web-tracks')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Interactive Web Architecture Tracks */}
      <section id="web-tracks" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
              Tailored Web Engineering
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              Select the Digital Platform Your Business Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              {ARCHITECTURE_TRACKS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTrack(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    selectedTrack === i
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20'
                      : 'executive-card text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider opacity-80">{t.badge}</span>
                  <h3 className="text-base sm:text-lg font-poppins font-bold mt-1">{t.title}</h3>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 executive-card p-7 sm:p-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider">
                <Sparkles size={13} />
                <span>{track.badge}</span>
              </div>

              <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-white">{track.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {track.summary}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Included Engineering Capabilities
                </div>
                {track.deliverables.map((d) => (
                  <div
                    key={d}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.06] text-sm text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onOpenBooking(track.title)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  <Calendar size={15} />
                  <span>Discuss Scope for {track.badge}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Architecture */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#080C17] border-y border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-poppins font-bold text-slate-900 dark:text-white">
              A Clear Journey From First Impression to Actionable Conversion
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMER_JOURNEY.map((c) => (
              <div key={c.num} className="executive-card p-6 space-y-3">
                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  STAGE {c.num}
                </span>
                <h3 className="text-lg font-poppins font-bold text-slate-900 dark:text-white">{c.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Foundation Pillars */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: <Smartphone size={18} />, label: 'Mobile-First Responsive Layouts' },
              { icon: <Search size={18} />, label: 'Technical SEO & Search Visibility' },
              { icon: <CreditCard size={18} />, label: 'Verified Payment & Booking Flows' },
              { icon: <BarChart3 size={18} />, label: 'Analytics & Conversion Tracking' },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <span className="text-indigo-500">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Steps From Idea to Launch */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
              Structured Execution
            </p>
            <h2 className="mt-2 text-3xl font-poppins font-bold text-slate-900 dark:text-white">
              Seven Steps From Idea to Launch
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SEVEN_STEP_LAUNCH.map((s) => (
              <div key={s.step} className="executive-card p-5 space-y-2">
                <div className="text-sm font-poppins font-bold text-indigo-600 dark:text-indigo-400">{s.step}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.detail}</p>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-indigo-600 text-white flex flex-col justify-between">
              <div>
                <div className="text-sm font-poppins font-bold">Ready to Scope Your Build?</div>
                <p className="text-xs text-indigo-100 mt-1">
                  Share your reference ideas and feature goals in a 30-minute session with Vimal Raj.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking('Website Build Scope Session')}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold underline underline-offset-4"
              >
                <span>Book Discovery Call</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteCreationPage;
