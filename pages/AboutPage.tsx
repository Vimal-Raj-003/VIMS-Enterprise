import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { TEAM_MEMBERS, COMPANY_CONTACT, SUMMIT_GALLERY, GROUP_PLATFORMS } from '../constants';
import {
  Award,
  ShieldCheck,
  Target,
  Handshake,
  Users,
  ArrowRight,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MessageSquare,
} from 'lucide-react';

interface AboutPageProps {
  onProfileClick?: (memberId: string) => void;
  onOpenBooking: (topic?: string) => void;
}

const VALUES = [
  {
    icon: <Target size={19} />,
    title: 'Outcome Architecture',
    description: 'Every call flow, screen & pipeline targets measurable business clarity.',
  },
  {
    icon: <Users size={19} />,
    title: 'Human Connection',
    description: 'AI amplifies human warmth and never hides behind generic templates.',
  },
  {
    icon: <ShieldCheck size={19} />,
    title: 'Production Rigor',
    description: 'Type-safe engineering with ABDM & DPDPA 2023 compliance discipline.',
  },
  {
    icon: <Handshake size={19} />,
    title: 'Direct Leadership',
    description: 'Collaborate directly with our CEO, CTO & Project Manager end-to-end.',
  },
];

const AboutPage: React.FC<AboutPageProps> = ({ onProfileClick, onOpenBooking }) => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') setLightboxIdx((lightboxIdx + 1) % SUMMIT_GALLERY.length);
      if (e.key === 'ArrowLeft')
        setLightboxIdx((lightboxIdx - 1 + SUMMIT_GALLERY.length) % SUMMIT_GALLERY.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIdx]);

  return (
    <div className="bg-white dark:bg-[#0B0F19]">
      <HeroSection
        badge="Established March 2022 · VIMS Enterprise Group"
        headline={
          <>
            Real Engineers. Real Accountability.{' '}
            <span className="text-[#1D4ED8] dark:text-blue-400">VIMS Enterprise Group.</span>
          </>
        }
        subtext="The B2B engineering group powering Jill-Jill (Voice AI), MediCore (HMS), Embedded Skills (Automotive & MATLAB Academy), custom web systems, and operational workflows."
        primaryCta={{ text: 'Schedule a Strategy Call', onClick: () => onOpenBooking('Executive Strategy Call') }}
        secondaryCta={{
          text: 'View Summit Gallery',
          onClick: () => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Executive Leadership Team — Open Editorial Columns */}
      <section id="leadership" className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-blue-400 font-semibold">
                Executive Leadership
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
                The Team Accountable for Every Delivery
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>GST: {COMPANY_CONTACT.gstin}</span>
              <span>&middot;</span>
              <span>MSME: {COMPANY_CONTACT.udyam}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                onClick={() => onProfileClick && onProfileClick(member.id)}
                className="cursor-pointer group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={member.imageUrl}
                      alt={`${member.name} — ${member.role}`}
                      className="w-full aspect-[4/4.2] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
                      {member.badge}
                    </span>
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-[#1D4ED8] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{member.role}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {member.shortBio}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-[#1D4ED8] dark:text-blue-400">
                  <span>View Executive Profile</span>
                  <div className="flex items-center gap-3">
                    {member.whatsappUrl ? (
                      <a
                        href={member.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[#0F766E] dark:text-teal-400 hover:underline"
                      >
                        <MessageSquare size={13} />
                        <span>WhatsApp</span>
                      </a>
                    ) : null}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sibling Group Strip */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { ...GROUP_PLATFORMS.jilljill, niche: 'Multilingual AI Voice Agents' },
              { ...GROUP_PLATFORMS.embskills, niche: 'Automotive ECU & MATLAB MBD' },
            ].map((plat) => (
              <a
                key={plat.name}
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 py-2 group"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#0F766E] dark:text-teal-400 font-semibold">
                    VIMS Group Platform &middot; {plat.niche}
                  </span>
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-[#1D4ED8] transition-colors">
                    {plat.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{plat.tagline}</p>
                </div>
                <ExternalLink size={18} className="text-[#1D4ED8] dark:text-blue-400 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Celebrity & TN Digital Summit Gallery */}
      <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 editorial-section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B45309] dark:text-amber-300 font-semibold mb-2">
              <Award size={14} />
              <span>Authentic Summit &amp; Celebrity Connects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Social Eagle Recognition &amp; TN Digital Summit Gallery
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Click any photograph to view full resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUMMIT_GALLERY.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className="text-left group flex flex-col space-y-3"
              >
                <div className="relative w-full h-64 overflow-hidden rounded-2xl shadow-sm">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
                    {photo.badge}
                  </span>
                  <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{photo.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((v) => (
            <div key={v.title} className="border-t border-slate-200 dark:border-slate-800 pt-5 space-y-2">
              <div className="text-[#1D4ED8] dark:text-blue-400">{v.icon}</div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">{v.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIdx !== null ? (
        <div
          className="fixed inset-0 z-[90] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-[#111827] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close image lightbox"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/75 text-white hover:bg-[#1D4ED8] transition-colors"
            >
              <X size={20} />
            </button>

            <img
              src={SUMMIT_GALLERY[lightboxIdx].src}
              alt={SUMMIT_GALLERY[lightboxIdx].title}
              className="w-full max-h-[72vh] object-contain bg-slate-950"
            />

            <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
                  {SUMMIT_GALLERY[lightboxIdx].badge}
                </span>
                <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                  {SUMMIT_GALLERY[lightboxIdx].title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {SUMMIT_GALLERY[lightboxIdx].caption}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx((lightboxIdx - 1 + SUMMIT_GALLERY.length) % SUMMIT_GALLERY.length)
                  }
                  aria-label="Previous photo"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIdx((lightboxIdx + 1) % SUMMIT_GALLERY.length)}
                  aria-label="Next photo"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AboutPage;
