import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
  Sparkles,
  Smartphone,
  Search,
  CreditCard,
  BarChart3,
} from 'lucide-react';

interface WebsiteCreationPageProps {
  onOpenBooking: (topic?: string) => void;
}

const ARCHITECTURE_TRACKS = [
  {
    id: 'b2b',
    badge: 'Executive Corporate & B2B',
    title: 'High-Authority B2B Websites & Portals',
    summary:
      'Custom React/TypeScript corporate sites engineered for speed, clear positioning, and calendar booking—zero templates.',
    deliverables: [
      'Bespoke design system (Dark & Light modes)',
      'Interactive showcases & executive trust galleries',
      'Embedded Cal.com booking, CRM forms & WhatsApp',
      'Core Web Vitals speed & technical SEO setup',
    ],
  },
  {
    id: 'ecommerce',
    badge: 'Online Stores & D2C',
    title: 'End-to-End Custom E-Commerce Platforms',
    summary:
      'Cohesive online storefronts where buyers browse variants, pay securely, and receive instant automated updates.',
    deliverables: [
      'Product catalog, variants, search & filters',
      'Streamlined cart, shipping logic & checkout',
      'Automated order emails & payment status tracking',
      'Complete admin console handover & walkthrough',
    ],
  },
  {
    id: 'webapps',
    badge: 'SaaS & Internal Portals',
    title: 'AI-Native Web Apps & Dashboards',
    summary:
      'Full-stack custom web apps engineered around your team permissions, dashboards, and AI concierge workflows.',
    deliverables: [
      'Role-based multi-tenant client & staff portals',
      'Real-time dashboards, exports & API webhooks',
      'Grounded AI assistants inside your application',
      'Mobile QA & production observability',
    ],
  },
];

const SEVEN_STEPS = [
  { step: '01 Plan', detail: 'Align on goals, sitemap & user flow.' },
  { step: '02 Design', detail: 'Craft custom visual system & layout.' },
  { step: '03 Catalog', detail: 'Structure copy, services & imagery.' },
  { step: '04 Funnel', detail: 'Wire calendars, forms or cart checkout.' },
  { step: '05 Integrate', detail: 'Connect payment gateways, CRM & WhatsApp.' },
  { step: '06 QA Test', detail: 'Verify speed & responsiveness across devices.' },
  { step: '07 Launch', detail: 'Deploy cleanly & train your admin team.' },
];

const WebsiteCreationPage: React.FC<WebsiteCreationPageProps> = ({ onOpenBooking }) => {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const track = ARCHITECTURE_TRACKS[selectedTrack];

  return (
    <div>
      <HeroSection
        badge="Custom Web & E-Commerce Studio"
        headline={
          <>
            Custom B2B Websites{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8451E] to-[#D4AF37]">
              Engineered From Scratch.
            </span>
          </>
        }
        subtext="High-converting B2B platforms, AI-native React web applications, and complete online stores built cleanly around your brand."
        imageUrl="/images/niches/web-studio.webp"
        altText="Smoked-Glass Architectural Web Studio"
        primaryCta={{
          text: 'Scope Your Website',
          onClick: () => onOpenBooking('Custom Website & E-Commerce Consultation'),
        }}
        secondaryCta={{
          text: 'Explore Build Tracks',
          onClick: () => document.getElementById('web-tracks')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Interactive Web Tracks */}
      <section id="web-tracks" className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#E8451E] font-semibold">
              Platform Architecture
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white">
              Select the Digital System Your Business Needs
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
                      ? 'bg-[#E8451E] text-white border-[#E8451E] shadow-lg shadow-[#E8451E]/25'
                      : 'executive-card text-zinc-900 dark:text-white'
                  }`}
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider opacity-85">{t.badge}</span>
                  <h3 className="text-base sm:text-lg font-display font-bold mt-1">{t.title}</h3>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 executive-card p-7 sm:p-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#9A7209] dark:text-[#E8CA6A] text-xs font-mono uppercase tracking-wider">
                <Sparkles size={13} />
                <span>{track.badge}</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-white">{track.title}</h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">{track.summary}</p>

              <div className="space-y-3 pt-1">
                {track.deliverables.map((d) => (
                  <div
                    key={d}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/70 dark:border-white/10 text-sm text-zinc-700 dark:text-zinc-200"
                  >
                    <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(track.title)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <Calendar size={15} />
                <span>Discuss {track.badge}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: <Smartphone size={17} />, label: 'Mobile-First Responsive UX' },
              { icon: <Search size={17} />, label: 'Technical SEO & Schema' },
              { icon: <CreditCard size={17} />, label: 'Payment & Booking Flows' },
              { icon: <BarChart3 size={17} />, label: 'Conversion Analytics' },
            ].map((f) => (
              <div
                key={f.label}
                className="executive-card flex items-center gap-3 p-4 text-xs font-semibold text-zinc-800 dark:text-zinc-200"
              >
                <span className="text-[#E8451E]">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Launch Process */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8 bg-zinc-100/80 dark:bg-[#111114]/70 border-t border-zinc-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-zinc-900 dark:text-white">
              Seven Steps From Idea to Launch
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEVEN_STEPS.map((s) => (
              <div key={s.step} className="executive-card p-5 space-y-2">
                <div className="font-mono text-sm font-bold text-[#E8451E]">{s.step}</div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">{s.detail}</p>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-[#111114] border border-white/15 text-white flex flex-col justify-between">
              <div>
                <div className="text-sm font-display font-bold">Ready to Scope Your Site?</div>
                <p className="text-xs text-zinc-400 mt-1">Map pages, flows, and timeline with Vimal Raj.</p>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking('Website Build Scope')}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#E8CA6A] hover:underline"
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
