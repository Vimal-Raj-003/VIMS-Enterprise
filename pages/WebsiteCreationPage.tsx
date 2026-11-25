import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
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
      'Custom React/TypeScript websites engineered around human clarity, brand credibility, and effortless discovery calls.',
    deliverables: [
      'Clean bespoke design system (Light & Dark modes)',
      'Clear storytelling, summit proof & team showcases',
      'Embedded Cal.com booking, CRM forms & WhatsApp',
      'Core Web Vitals speed & technical SEO setup',
    ],
  },
  {
    id: 'ecommerce',
    badge: 'Online Stores & D2C',
    title: 'End-to-End Custom E-Commerce Platforms',
    summary:
      'Cohesive online storefronts where customers browse variants, pay securely, and receive instant order updates.',
    deliverables: [
      'Product catalog, variants, search & filters',
      'Streamlined cart, shipping rules & verified checkouts',
      'Automated customer order emails & stock control',
      'Complete admin console handover & team training',
    ],
  },
  {
    id: 'webapps',
    badge: 'SaaS & Client Portals',
    title: 'Custom Web Applications & Dashboards',
    summary:
      'Full-stack React and TypeScript portals built around internal team roles, live operations, and API integrations.',
    deliverables: [
      'Role-based multi-tenant client & staff dashboards',
      'Live reporting, exports & API webhook bridges',
      'Grounded AI concierge assistants inside your portal',
      'Responsive device QA & production observability',
    ],
  },
];

const SEVEN_STEPS = [
  { step: '01 Plan', detail: 'Align on goals, sitemap & conversion flow.' },
  { step: '02 Design', detail: 'Craft typography, layout & imagery.' },
  { step: '03 Content', detail: 'Structure clear narratives & assets.' },
  { step: '04 Funnel', detail: 'Wire calendars, forms or cart checkout.' },
  { step: '05 Integrate', detail: 'Connect payment gateways, CRM & WhatsApp.' },
  { step: '06 QA Test', detail: 'Verify mobile speed & edge cases.' },
  { step: '07 Launch', detail: 'Deploy cleanly & train your admin team.' },
];

const WebsiteCreationPage: React.FC<WebsiteCreationPageProps> = ({ onOpenBooking }) => {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const track = ARCHITECTURE_TRACKS[selectedTrack];

  return (
    <div className="bg-white dark:bg-[#0B0F19]">
      <HeroSection
        badge="Custom Web & E-Commerce Engineering"
        headline={
          <>
            Human-Centered Websites{' '}
            <span className="text-[#1D4ED8] dark:text-blue-400">Built From Scratch.</span>
          </>
        }
        subtext="Clean, responsive B2B corporate websites, web apps, and online stores built around human trust—never generic template clutter."
        imageUrl="/images/human/web-studio-human.webp"
        altText="Product designer and engineer collaborating warmly at bright studio display"
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
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-blue-400 font-semibold">
              Platform Architecture
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Select the Digital Platform Your Business Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-2.5">
              {ARCHITECTURE_TRACKS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTrack(i)}
                  className={`w-full text-left p-5 rounded-xl transition-all ${
                    selectedTrack === i
                      ? 'bg-[#1D4ED8] text-white'
                      : 'bg-[#F8F7F4] dark:bg-slate-800/70 text-slate-900 dark:text-white hover:bg-slate-200/70'
                  }`}
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider opacity-80">{t.badge}</span>
                  <h3 className="text-base sm:text-lg font-display font-bold mt-1">{t.title}</h3>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 lg:pl-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0F766E] dark:text-teal-400 font-semibold">
                {track.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                {track.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{track.summary}</p>

              <div className="space-y-3 pt-1">
                {track.deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 dark:text-slate-200">
                    <CheckCircle2 size={17} className="text-[#0F766E] dark:text-teal-400 shrink-0 mt-1" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(track.title)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold transition-all"
              >
                <Calendar size={15} />
                <span>Discuss {track.badge}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Smartphone size={17} />, label: 'Mobile-First Responsive UX' },
              { icon: <Search size={17} />, label: 'Technical SEO & Schema' },
              { icon: <CreditCard size={17} />, label: 'Payment & Booking Flows' },
              { icon: <BarChart3 size={17} />, label: 'Conversion Analytics' },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span className="text-[#1D4ED8] dark:text-blue-400">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Launch Process */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8 editorial-section-alt">
        <div className="max-w-7xl mx-auto space-y-10">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
            Seven Steps From Idea to Launch
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SEVEN_STEPS.map((s) => (
              <div key={s.step} className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-1.5">
                <div className="font-mono text-sm font-bold text-[#1D4ED8] dark:text-blue-400">{s.step}</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{s.detail}</p>
              </div>
            ))}

            <div className="border-t-2 border-[#1D4ED8] pt-4 space-y-2">
              <div className="text-sm font-display font-bold text-slate-900 dark:text-white">Ready to Scope?</div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Map your site &amp; timeline with Vimal Raj.</p>
              <button
                type="button"
                onClick={() => onOpenBooking('Website Build Scope')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] dark:text-blue-400 hover:underline pt-1"
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
