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
    description: 'AI amplifies human warmth and never hides behind cold generic templates.',
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
    <div>
      <HeroSection
        badge="Established March 2022 · VIMS Enterprise Group"
        headline={
          <>
            Real Engineers. Real Accountability.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8451E] to-[#D4AF37]">
              VIMS Enterprise Group.
            </span>
          </>
        }
        subtext="The B2B engineering group powering Jill-Jill (Voice AI), MediCore (HMS), Embedded Skills (Automotive & MATLAB Academy), custom web systems, and autonomous workflows."
        primaryCta={{ text: 'Schedule a Strategy Call', onClick: () => onOpenBooking('Executive Strategy Call') }}
        secondaryCta={{
          text: 'View Summit Gallery',
          onClick: () => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Executive Leadership Team */}
      <section id="leadership" className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#E8451E] font-semibold">
                Executive Leadership
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white">
                The Team Accountable for Every Delivery
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                GST: {COMPANY_CONTACT.gstin}
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                MSME: {COMPANY_CONTACT.udyam}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                onClick={() => onProfileClick && onProfileClick(member.id)}
                className="executive-card overflow-hidden cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/4.1] overflow-hidden bg-[#09090B]">
                    <img
                      src={member.imageUrl}
                      alt={`${member.name} — ${member.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#E8CA6A] border border-white/15">
                      {member.badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-white group-hover:text-[#E8451E] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-[#E8451E]">{member.role}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                      {member.shortBio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-zinc-200/70 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-[#E8451E]">
                  <span>View Executive Profile</span>
                  <div className="flex items-center gap-3">
                    {member.whatsappUrl ? (
                      <a
                        href={member.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[#10B981] hover:underline"
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

          {/* Group Ecosystem Platforms Bridge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {[
              { ...GROUP_PLATFORMS.jilljill, niche: 'Multilingual AI Voice Agents' },
              { ...GROUP_PLATFORMS.embskills, niche: 'Automotive ECU & MATLAB MBD' },
            ].map((plat) => (
              <a
                key={plat.name}
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="executive-card p-6 flex items-center justify-between gap-4 group"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37]">
                    VIMS Group Platform &middot; {plat.niche}
                  </span>
                  <h3 className="text-lg font-display font-bold text-zinc-900 dark:text-white mt-1 group-hover:text-[#E8451E] transition-colors">
                    {plat.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{plat.tagline}</p>
                </div>
                <ExternalLink size={18} className="text-[#E8451E] shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Celebrity & TN Digital Summit Gallery */}
      <section
        id="gallery"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-100/80 dark:bg-[#111114]/70 border-y border-zinc-200/80 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
              <Award size={14} />
              <span>Authentic Summit &amp; Celebrity Connects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white">
              Social Eagle Recognition &amp; TN Digital Summit Gallery
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Click any photo to view full resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUMMIT_GALLERY.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className="executive-card overflow-hidden text-left group flex flex-col"
              >
                <div className="relative w-full h-64 overflow-hidden bg-[#09090B]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </span>
                </div>
                <div className="p-5 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E8451E]">
                    {photo.badge}
                  </span>
                  <h3 className="text-base font-display font-bold text-zinc-900 dark:text-white">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{photo.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v) => (
            <div key={v.title} className="executive-card p-6 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#E8451E]/10 text-[#E8451E] flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="text-base font-display font-bold text-zinc-900 dark:text-white">{v.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIdx !== null ? (
        <div
          className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111114] border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close image lightbox"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-[#E8451E] transition-colors"
            >
              <X size={20} />
            </button>

            <img
              src={SUMMIT_GALLERY[lightboxIdx].src}
              alt={SUMMIT_GALLERY[lightboxIdx].title}
              className="w-full max-h-[72vh] object-contain bg-black"
            />

            <div className="p-5 sm:p-6 flex items-center justify-between gap-4 border-t border-white/10 text-white">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#E8CA6A]">
                  {SUMMIT_GALLERY[lightboxIdx].badge}
                </span>
                <h4 className="text-lg font-display font-bold">{SUMMIT_GALLERY[lightboxIdx].title}</h4>
                <p className="text-xs text-zinc-400 mt-0.5">{SUMMIT_GALLERY[lightboxIdx].caption}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx((lightboxIdx - 1 + SUMMIT_GALLERY.length) % SUMMIT_GALLERY.length)
                  }
                  aria-label="Previous photo"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIdx((lightboxIdx + 1) % SUMMIT_GALLERY.length)}
                  aria-label="Next photo"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20"
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
