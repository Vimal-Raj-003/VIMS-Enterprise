import React, { useState } from 'react';
import { Page } from '../types';
import {
  COMPANY_CONTACT,
  CORE_PILLARS,
  GROUP_PLATFORMS,
  SUMMIT_GALLERY,
  TEAM_MEMBERS,
} from '../constants';
import ClientsSection from '../components/ClientsSection';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  ArrowRight,
  Award,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
  Phone,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (topic?: string) => void;
  onViewLeader?: (memberId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking, onViewLeader }) => {
  const [selectedNicheIdx, setSelectedNicheIdx] = useState(0);
  const activeNiche = CORE_PILLARS[selectedNicheIdx];

  return (
    <div className="space-y-0">
      {/* 1. OPEN SUNLIT EDITORIAL HERO — HUMAN PHOTOGRAPHY, ZERO BOXY CLUTTER */}
      <section className="bg-white dark:bg-[#0B0F19] pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <button
              type="button"
              onClick={() => document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B45309] dark:text-amber-300 font-semibold hover:underline"
            >
              <Award size={14} />
              <span>Social Eagle Award Recipient &middot; VIMS Enterprise Group</span>
            </button>

            <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Technology Built Around{' '}
              <span className="text-[#1D4ED8] dark:text-blue-400">People.</span>
              <br />
              Engineered for B2B Scale.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              One accountable engineering team delivering Multilingual Voice AI, Custom Websites, Operational Automations, MediCore HMS, and Engineering &amp; AI Talent.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-sm shadow-sm transition-all"
              >
                <Calendar size={16} />
                <span>Book a Discovery Call</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('niches')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-all"
              >
                <span>Explore 5 Pillars</span>
              </button>
            </div>

            {/* Clean Sibling Group Row */}
            <div className="pt-5 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono uppercase tracking-wider text-slate-400">Group Platforms:</span>
              <a
                href={GROUP_PLATFORMS.jilljill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 hover:text-[#1D4ED8]"
              >
                <span>Jill-Jill Voice</span>
                <ExternalLink size={11} />
              </a>
              <button
                type="button"
                onClick={() => onNavigate(Page.HospitalManagement)}
                className="font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0F766E]"
              >
                MediCore HMS
              </button>
              <a
                href={GROUP_PLATFORMS.embskills.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 hover:text-[#1D4ED8]"
              >
                <span>Embedded Skills</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Right Column: Natural Daylight Human Collaboration Photo */}
          <div className="lg:col-span-6 space-y-3">
            <img
              src="/images/human/hero-team.webp"
              alt="VIMS Enterprise engineering and leadership team collaborating in sunlit studio"
              className="w-full aspect-[4/3] rounded-2xl object-cover shadow-lg"
            />
            <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-slate-500 dark:text-slate-400">
              <span>Serving 30+ organizations across healthcare, manufacturing &amp; commerce</span>
              <span className="font-mono text-[#1D4ED8] dark:text-blue-400 font-semibold">Est. March 2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FRAMELESS CLIENT MARQUEE & TESTIMONIALS */}
      <ClientsSection />

      {/* 3. FIVE SPECIALIZED NICHES — OPEN INTERACTIVE HUMAN SHOWCASE (NO BOXY CARDS) */}
      <section id="niches" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-blue-400 font-semibold">
                Five Specialized Pillars
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                Practical Systems Built Around Real Teams
              </h2>
            </div>

            {/* Clean Underline Pillar Switcher */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1">
              {CORE_PILLARS.map((p, idx) => {
                const active = idx === selectedNicheIdx;
                return (
                  <button
                    key={p.page}
                    type="button"
                    onClick={() => setSelectedNicheIdx(idx)}
                    className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                      active
                        ? 'bg-[#1D4ED8] text-white'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-[#F8F7F4] dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-mono text-[11px] opacity-75 mr-1.5">{p.index}</span>
                    <span>{p.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Open 2-Column Editorial Spotlight */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNiche.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              <div className="lg:col-span-6">
                <img
                  src={activeNiche.imageUrl}
                  alt={activeNiche.title}
                  className="w-full aspect-[4/3] rounded-2xl object-cover shadow-md"
                />
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0F766E] dark:text-teal-400 font-semibold">
                  <span>{activeNiche.index}</span>
                  <span>&middot;</span>
                  <span>{activeNiche.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                  {activeNiche.title}
                </h3>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeNiche.summary}
                </p>

                <ul className="space-y-3 pt-1">
                  {activeNiche.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                      <CheckCircle2 size={17} className="text-[#0F766E] dark:text-teal-400 shrink-0 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate(activeNiche.page)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold transition-all"
                  >
                    <span>Explore {activeNiche.shortTitle}</span>
                    <ArrowRight size={15} />
                  </button>

                  {activeNiche.externalUrl ? (
                    <a
                      href={activeNiche.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#1D4ED8]"
                    >
                      <span>Open {activeNiche.platformName}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onOpenBooking(activeNiche.title)}
                      className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#1D4ED8]"
                    >
                      Book Walkthrough &rarr;
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Open 5-Column Hairline Quick Index (No Boxy Cards) */}
          <div className="pt-10 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/80 dark:divide-slate-800">
            {CORE_PILLARS.map((pillar, idx) => (
              <button
                key={pillar.page}
                type="button"
                onClick={() => setSelectedNicheIdx(idx)}
                className={`text-left py-4 lg:py-0 lg:px-5 first:lg:pl-0 last:lg:pr-0 group transition-colors ${
                  idx === selectedNicheIdx ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                }`}
              >
                <div className="text-[11px] font-mono text-[#1D4ED8] dark:text-blue-400 font-semibold">
                  {pillar.index} &middot; {pillar.badge}
                </div>
                <div className="text-sm font-display font-bold text-slate-900 dark:text-white mt-1 group-hover:text-[#1D4ED8]">
                  {pillar.shortTitle}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {pillar.summary}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUTHENTIC SOCIAL EAGLE RECOGNITION & SUMMIT GALLERY TEASER */}
      <section id="awards" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 editorial-section-alt">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <img
              src="/images/brand/social-eagle-award-stage.webp"
              alt="VIMS Enterprise team receiving the Social Eagle Award at TN Digital Summit"
              className="w-full h-72 sm:h-[400px] rounded-2xl object-cover object-top shadow-md"
            />
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B45309] dark:text-amber-300 font-semibold">
              <Award size={14} />
              <span>Verified TN Digital Summit Milestones</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight">
              Recognized on Stage by Social Eagle
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              From Digital Presence recognition by Social Eagle to summit conversations with Dr. A. Velumani, Irfan, and Actor Karunakaran—VIMS Enterprise builds with real people in front of the brand.
            </p>

            {/* Clean Frameless Photo Thumbnails */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {SUMMIT_GALLERY.slice(1, 4).map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => onNavigate(Page.About)}
                  className="group text-left space-y-1.5"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full aspect-square rounded-xl object-cover object-top group-hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                  <span className="block text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate group-hover:text-[#1D4ED8]">
                    {photo.title.replace('With ', '')}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onNavigate(Page.About)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] dark:text-blue-400 hover:underline pt-1"
            >
              <span>View Full Summit &amp; Celebrity Gallery</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. OPEN HUMAN LEADERSHIP DIRECTORY (ZERO HEAVY BOXES) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-blue-400 font-semibold">
              Accountable Leadership
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Real Leaders Behind Every Deployment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member) => {
              const isVimal = member.id === 'vimal';
              return (
                <div key={member.id} className="space-y-4">
                  <button
                    type="button"
                    onClick={() => (onViewLeader ? onViewLeader(member.id) : onNavigate(Page.About))}
                    className="block w-full overflow-hidden rounded-2xl text-left group"
                  >
                    <img
                      src={member.imageUrl}
                      alt={`${member.name} — ${member.role}`}
                      className="w-full aspect-[4/4.2] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </button>

                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
                      {member.badge}
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{member.role}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {member.shortBio}
                    </p>
                  </div>

                  {isVimal ? (
                    <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                      <a
                        href={member.whatsappUrl || COMPANY_CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F766E] dark:text-teal-400 hover:underline"
                      >
                        <MessageSquare size={14} />
                        <span>{COMPANY_CONTACT.phoneFormatted}</span>
                      </a>
                      <span className="text-slate-300 dark:text-slate-700">&middot;</span>
                      <button
                        type="button"
                        onClick={() => onOpenBooking('Direct Consultation with Vimal Raj (CTO)')}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] dark:text-blue-400 hover:underline"
                      >
                        <Phone size={12} />
                        <span>Book Call</span>
                      </button>
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => (onViewLeader ? onViewLeader(member.id) : onNavigate(Page.About))}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#1D4ED8]"
                      >
                        <span>View Executive Profile</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
