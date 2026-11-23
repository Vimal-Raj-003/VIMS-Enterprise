import React from 'react';
import HeroSection from '../components/HeroSection';
import { TEAM_MEMBERS, COMPANY_CONTACT } from '../constants';
import {
  Award,
  ShieldCheck,
  Target,
  Handshake,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Building2,
} from 'lucide-react';

interface AboutPageProps {
  onProfileClick?: (memberId: string) => void;
  onOpenBooking: (topic?: string) => void;
}

const VALUES = [
  {
    icon: <Target size={20} />,
    title: 'Outcome-Driven Architecture',
    description: 'Every call flow, clinical screen, and automation workflow is designed around measurable operational clarity—never cosmetic complexity.',
  },
  {
    icon: <Users size={20} />,
    title: 'Human-First Connection',
    description: 'AI should amplify human warmth, not replace accountability. Your callers, patients, and buyers always experience clarity and respect.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Production Reliability',
    description: 'Engineered with clean type-safe code, role-based security, explicit fallback paths, and Indian regulatory alignment (ABDM & DPDPA 2023).',
  },
  {
    icon: <Handshake size={20} />,
    title: 'Direct Founder Accountability',
    description: 'You collaborate directly with our architects and leadership from initial discovery call through launch and team training.',
  },
];

const AWARD_GALLERY = [
  {
    src: '/images/brand/social-eagle-award-stage.webp',
    badge: 'TN Digital Summit Award',
    title: 'Social Eagle Award for Digital Presence & Innovation',
    caption: 'Founder & CEO Vimal Raj and the VIMS Enterprise team honored on stage with the Social Eagle trophy.',
  },
  {
    src: '/images/brand/tn-summit-ai-automation.jpg',
    badge: 'AI Automation Practice',
    title: 'VIMS AI Automation Engineering Team at TN Digital Summit',
    caption: 'Representing real-world business workflow & conversational AI deployments.',
  },
  {
    src: '/images/brand/social-eagle-certificate.webp',
    badge: 'Talent & AI Excellence',
    title: 'Recognition for Applied Generative AI & Talent Enablement',
    caption: 'Advancing industry-ready engineering, automation, and AI deployment skills.',
  },
  {
    src: '/images/brand/tn-summit-vimal.jpg',
    badge: 'Executive Representation',
    title: 'Founder Vimal Raj at TN Digital Summit',
    caption: 'Building lasting B2B partnerships across healthcare, manufacturing, and digital commerce.',
  },
];

const AboutPage: React.FC<AboutPageProps> = ({ onProfileClick, onOpenBooking }) => {
  const founder = TEAM_MEMBERS[0];

  return (
    <div>
      <HeroSection
        badge="Established March 2022 · MSME Registered Enterprise"
        headline={
          <>
            Real Engineers. Real Accountability.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400">
              Built for the Next Decade.
            </span>
          </>
        }
        subtext="VIMS Enterprise unites enterprise software engineering, applied conversational & agentic AI, healthcare operating systems, and hands-on engineering mentorship under one roof."
        primaryCta={{ text: 'Schedule a Call with Vimal Raj', onClick: () => onOpenBooking('Executive Discovery Call') }}
        secondaryCta={{
          text: 'Meet Leadership Team',
          onClick: () => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />

      {/* Founder Executive Story */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 max-w-md mx-auto w-full lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-900">
              <img
                src={founder.imageUrl}
                alt={`${founder.name} — ${founder.role}`}
                className="w-full aspect-[4/4.6] object-cover object-top"
              />
              <div className="p-5 bg-slate-950/90 border-t border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-poppins font-bold">{founder.name}</h3>
                    <p className="text-xs font-mono text-indigo-400">{founder.role}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onProfileClick && onProfileClick(founder.id)}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                  >
                    Full Bio &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-mono uppercase tracking-wider">
              <Building2 size={13} />
              <span>Our Story &amp; Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white leading-tight">
              From Systems Engineering Roots to an Award-Winning Applied AI Ecosystem
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {founder.description}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Today, VIMS Enterprise serves 30+ organizations across healthcare, manufacturing, retail, and B2B technology—delivering five focused capabilities: <strong className="text-slate-900 dark:text-white">AI Voice Agents</strong>, <strong className="text-slate-900 dark:text-white">Custom Website &amp; E-Commerce Platforms</strong>, <strong className="text-slate-900 dark:text-white">Autonomous Agent Deployments</strong>, <strong className="text-slate-900 dark:text-white">MediCore Hospital Management System</strong>, and our <strong className="text-slate-900 dark:text-white">MATLAB MBD &amp; Forward Deployed Engineer Academy</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                <div className="text-[11px] font-mono uppercase text-slate-400">GST Registration</div>
                <div className="text-sm font-mono font-bold text-slate-900 dark:text-white mt-1">
                  {COMPANY_CONTACT.gstin}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                <div className="text-[11px] font-mono uppercase text-slate-400">MSME / Udyam Enterprise</div>
                <div className="text-sm font-mono font-bold text-slate-900 dark:text-white mt-1">
                  {COMPANY_CONTACT.udyam}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section
        id="leadership"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-[#080C17] border-y border-slate-200/80 dark:border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold">
              Executive &amp; Product Leadership
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              The People Accountable for Your Delivery
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Click any profile to inspect domain expertise, background, and direct consultation options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                onClick={() => onProfileClick && onProfileClick(member.id)}
                className="executive-card p-6 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 border border-slate-200 dark:border-white/10 bg-slate-900">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-indigo-300 border border-white/10">
                      {member.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-poppins font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">{member.role}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {member.shortBio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <span>View Executive Profile</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Gallery */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
              <Award size={14} />
              <span>Awards &amp; Ecosystem Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              Celebrated for Digital Impact &amp; Talent Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AWARD_GALLERY.map((item) => (
              <div key={item.title} className="executive-card overflow-hidden flex flex-col">
                <div className="h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-poppins font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-poppins font-bold text-slate-900 dark:text-white">
              Principles That Govern Every Build
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="executive-card p-6 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-base font-poppins font-bold text-slate-900 dark:text-white">{v.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
