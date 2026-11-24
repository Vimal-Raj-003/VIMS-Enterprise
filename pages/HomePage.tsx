import React, { useState, useRef } from 'react';
import { Page } from '../types';
import {
  COMPANY_CONTACT,
  CORE_PILLARS,
  GROUP_PLATFORMS,
  SUMMIT_GALLERY,
  TEAM_MEMBERS,
  SolutionPillarMeta,
} from '../constants';
import ClientsSection from '../components/ClientsSection';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import {
  Calendar,
  ArrowRight,
  Award,
  CheckCircle2,
  MessageSquare,
  RotateCw,
  ExternalLink,
  Layers,
  Phone,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (topic?: string) => void;
  onViewLeader?: (memberId: string) => void;
}

const HERO_MODES = [
  {
    id: 'hub',
    label: 'VIMS Core',
    title: 'VIMS Enterprise Group',
    tag: '5 Specialized B2B Niches',
    outcome: 'Unified AI, Web, Healthcare OS & Engineering Talent',
    imageUrl: '/images/niches/hero-3d-hub.webp',
    page: Page.About,
  },
  ...CORE_PILLARS.map((p) => ({
    id: p.slug,
    label: p.shortTitle,
    title: p.title,
    tag: p.badge,
    outcome: p.summary,
    imageUrl: p.imageUrl,
    page: p.page,
  })),
];

interface NicheFlipCardProps {
  pillar: SolutionPillarMeta;
  spanClass: string;
  onNavigate: (page: Page) => void;
  onOpenBooking: (topic?: string) => void;
}

const NicheFlipCard: React.FC<NicheFlipCardProps> = ({
  pillar,
  spanClass,
  onNavigate,
  onOpenBooking,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`${spanClass} perspective-1200 h-[370px] sm:h-[390px]`}>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full preserve-3d cursor-pointer"
        onClick={() => setFlipped((prev) => !prev)}
      >
        {/* FRONT FACE */}
        <div
          className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/15 bg-[#111114] shadow-xl flex flex-col justify-between group ${
            flipped ? 'pointer-events-none' : ''
          }`}
        >
          <img
            src={pillar.imageUrl}
            alt={pillar.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/50 to-[#09090B]/20" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between p-5">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-mono text-xs font-semibold text-[#E8CA6A]">
              {pillar.index} &middot; {pillar.shortTitle.toUpperCase()}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(true);
              }}
              aria-label={`Rotate ${pillar.shortTitle} card`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-[#E8451E] backdrop-blur-md border border-white/15 text-[11px] font-mono text-white transition-colors"
            >
              <RotateCw size={12} />
              <span>Inspect</span>
            </button>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 p-6 space-y-2 text-white">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
              {pillar.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold leading-snug">
              {pillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
              {pillar.summary}
            </p>
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/15 bg-white dark:bg-[#111114] p-6 sm:p-7 flex flex-col justify-between shadow-2xl ${
            !flipped ? 'pointer-events-none' : ''
          }`}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: pillar.accentColor }}
          />

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#E8451E] font-semibold">
                {pillar.index} &middot; {pillar.badge}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
                aria-label={`Flip back ${pillar.shortTitle} card`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/10 text-[11px] font-mono text-zinc-700 dark:text-zinc-200 hover:text-[#E8451E] transition-colors"
              >
                <RotateCw size={11} />
                <span>Front</span>
              </button>
            </div>

            <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-white leading-tight">
              {pillar.title}
            </h3>

            <ul className="space-y-2.5 pt-1">
              {pillar.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300"
                >
                  <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="pt-4 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => onNavigate(pillar.page)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-xs font-semibold transition-all"
            >
              <span>Open {pillar.shortTitle}</span>
              <ArrowRight size={13} />
            </button>

            {pillar.externalUrl ? (
              <a
                href={pillar.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#E8451E] transition-colors"
              >
                <span>{pillar.platformName}</span>
                <ExternalLink size={12} />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onOpenBooking(pillar.title)}
                className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-[#E8451E] transition-colors"
              >
                Book Demo &rarr;
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking, onViewLeader }) => {
  const [heroIdx, setHeroIdx] = useState(0);
  const activeHero = HERO_MODES[heroIdx];

  // Smooth 3D pointer tilt for the Hero Stage
  const stageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 160, damping: 22 });
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 160, damping: 22 });

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleStageMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const vimalLeader = TEAM_MEMBERS.find((m) => m.id === 'vimal')!;

  return (
    <div className="space-y-0">
      {/* 1. KINETIC 3D LANDING HERO */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#9A7209] dark:text-[#E8CA6A] text-xs font-mono uppercase tracking-wider hover:bg-[#D4AF37]/25 transition-colors"
            >
              <Award size={13} className="text-[#D4AF37]" />
              <span>Social Eagle Award Winner · VIMS Group</span>
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl xl:text-[3.75rem] font-display font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.06]"
            >
              Autonomous AI.
              <br />
              B2B Systems.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8451E] via-[#FF6B47] to-[#D4AF37]">
                Built to Scale.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg"
            >
              Five specialized B2B capabilities under one roof: Voice AI, Custom Web Platforms, AI Automations, MediCore HMS, and Engineering Academy.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white font-semibold text-sm shadow-lg shadow-[#E8451E]/25 transition-all"
              >
                <Calendar size={16} />
                <span>Book Discovery Call</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('niches')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/15 text-zinc-900 dark:text-white font-semibold text-sm transition-all"
              >
                <Layers size={16} className="text-[#D4AF37]" />
                <span>Explore 5 Niches</span>
              </button>
            </motion.div>

            {/* VIMS Group Sibling Pill Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="pt-4 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center gap-3 text-xs"
            >
              <span className="font-mono uppercase tracking-wider text-zinc-400">Ecosystem:</span>
              <a
                href={GROUP_PLATFORMS.jilljill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:border-[#E8451E]/50 font-medium transition-colors"
              >
                <span>Jill-Jill Voice</span>
                <ExternalLink size={11} className="text-[#E8451E]" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate(Page.HospitalManagement)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:border-[#10B981]/50 font-medium transition-colors"
              >
                <span>MediCore HMS</span>
              </button>
              <a
                href={GROUP_PLATFORMS.embskills.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:border-[#D4AF37]/50 font-medium transition-colors"
              >
                <span>Embedded Skills</span>
                <ExternalLink size={11} className="text-[#D4AF37]" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Tilt & Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="lg:col-span-6 space-y-4"
          >
            <div
              ref={stageRef}
              onMouseMove={handleStageMouseMove}
              onMouseLeave={handleStageMouseLeave}
              className="perspective-1200"
            >
              <motion.div
                style={{ rotateX, rotateY }}
                className="preserve-3d relative rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/15 bg-[#111114] shadow-2xl aspect-[4/3]"
              >
                {/* Slow rotating architectural light halo */}
                <div className="absolute -inset-24 rounded-full border border-[#D4AF37]/15 animate-orbit-spin pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeHero.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeHero.imageUrl}
                      alt={activeHero.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/95 via-[#09090B]/25 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Top live pill */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span>{activeHero.tag}</span>
                  </span>
                </div>

                {/* Floating Glass Readout Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 sm:p-5 rounded-2xl bg-[#09090B]/85 backdrop-blur-xl border border-white/15 flex items-center justify-between gap-4 text-white">
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-display font-bold truncate">
                      {activeHero.title}
                    </div>
                    <p className="text-xs text-zinc-300 truncate mt-0.5">{activeHero.outcome}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate(activeHero.page)}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-xs font-semibold text-white transition-all"
                  >
                    <span>Open</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Interactive Selector Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {HERO_MODES.map((m, idx) => {
                const active = idx === heroIdx;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setHeroIdx(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap border transition-all ${
                      active
                        ? 'bg-[#E8451E] border-[#E8451E] text-white shadow-md shadow-[#E8451E]/25'
                        : 'bg-white dark:bg-[#111114] border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-[#E8451E]/40'
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BLENDED CLIENT MARQUEE & CLEAN TESTIMONIALS */}
      <ClientsSection />

      {/* 3. FIVE SPECIALIZED NICHES — 3D ROTATABLE CARDS */}
      <section id="niches" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#E8451E] font-semibold">
                Five Specialized Niches
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
                One Group. Complete B2B Execution.
              </h2>
            </div>
            <p className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
              <span>Click any 3D card to rotate &amp; inspect capabilities</span>
              <RotateCw size={13} className="text-[#E8451E] shrink-0" />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {CORE_PILLARS.map((pillar, idx) => (
              <NicheFlipCard
                key={pillar.page}
                pillar={pillar}
                spanClass={idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUTHENTIC SOCIAL EAGLE RECOGNITION & SUMMIT MOMENTS */}
      <section
        id="awards"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-100/80 dark:bg-[#111114]/70 border-y border-zinc-200/80 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Verified Trophy Stage Photo */}
          <motion.div
            initial={{ opacity: 0.92, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/15 bg-[#09090B] shadow-2xl group"
          >
            <img
              src="/images/brand/social-eagle-award-stage.webp"
              alt="VIMS Enterprise team receiving the Social Eagle Award at TN Digital Summit"
              className="w-full h-72 sm:h-[420px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/95 via-[#09090B]/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8CA6A]">
                TN Digital Summit &middot; Stage Recognition
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold">
                Social Eagle Award for Digital Presence &amp; Growth
              </h3>
            </div>
          </motion.div>

          {/* Summit Delegation + Celebrity Previews */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#9A7209] dark:text-[#E8CA6A] text-xs font-mono uppercase tracking-wider">
              <Award size={13} />
              <span>Real People. Verified Milestones.</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-zinc-900 dark:text-white leading-tight">
              Recognized at the TN Digital Summit Alongside Industry Icons
            </h2>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              From stage recognition by Social Eagle to conversations with Dr. A. Velumani, Irfan, and Actor Karunakaran—VIMS Enterprise builds with authentic visibility and human accountability.
            </p>

            {/* 3 Clean Authentic Preview Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {SUMMIT_GALLERY.slice(1, 4).map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => onNavigate(Page.About)}
                  className="group relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 aspect-square bg-[#09090B]"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 right-2 text-[10px] font-semibold text-white truncate text-left">
                    {photo.title.replace('With ', '')}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onNavigate(Page.About)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8451E] hover:underline"
            >
              <span>Open Full Celebrity &amp; Summit Gallery</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. SHORT & REALISTIC EXECUTIVE LEADERSHIP STRIP */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#E8451E] font-semibold">
              <Sparkles size={13} />
              <span>Accountable Leadership</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white">
              Real Engineers &amp; Leaders Behind Every Build
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => {
              const isVimal = member.id === 'vimal';
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45 }}
                  className={`executive-card overflow-hidden flex flex-col justify-between ${
                    isVimal ? 'ring-1 ring-[#E8451E]/40' : ''
                  }`}
                >
                  <div>
                    <div
                      onClick={() => (onViewLeader ? onViewLeader(member.id) : onNavigate(Page.About))}
                      className="relative aspect-[4/3.6] overflow-hidden bg-[#09090B] cursor-pointer group"
                    >
                      <img
                        src={member.imageUrl}
                        alt={`${member.name} — ${member.role}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#E8CA6A]">
                        {member.badge}
                      </span>
                    </div>

                    <div className="p-6 space-y-2.5">
                      <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono text-[#E8451E] font-semibold">{member.role}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {member.shortBio}
                      </p>
                    </div>
                  </div>

                  {/* Realistic Direct Action Strip */}
                  <div className="px-6 pb-6 pt-3 border-t border-zinc-200/70 dark:border-white/10 space-y-3">
                    {isVimal ? (
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href={vimalLeader.whatsappUrl || COMPANY_CONTACT.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 text-[#059669] dark:text-[#10B981] text-xs font-semibold transition-all"
                        >
                          <MessageSquare size={14} />
                          <span>{COMPANY_CONTACT.phoneFormatted}</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => onOpenBooking('Direct Consultation with Vimal Raj (CTO)')}
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-xs font-semibold transition-all"
                        >
                          <Phone size={13} />
                          <span>Book Call</span>
                        </button>
                      </div>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => (onViewLeader ? onViewLeader(member.id) : onNavigate(Page.About))}
                      className="w-full inline-flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#E8451E] transition-colors"
                    >
                      <span>View Executive Profile</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
