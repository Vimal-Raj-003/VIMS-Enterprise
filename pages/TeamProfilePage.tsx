import React from 'react';
import { Linkedin, Mail, ArrowLeft, Calendar, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

interface TeamProfilePageProps {
  memberId: string;
  onBack: () => void;
  onOpenBooking: (topic?: string) => void;
}

const TeamProfilePage: React.FC<TeamProfilePageProps> = ({ memberId, onBack, onOpenBooking }) => {
  const member = TEAM_MEMBERS.find((m) => m.id === memberId) || TEAM_MEMBERS[0];

  return (
    <div className="min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8451E] hover:underline mb-8"
        >
          <ArrowLeft size={17} />
          <span>Back to About &amp; Leadership</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="executive-card p-6 sticky top-28 space-y-5">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full aspect-square rounded-2xl object-cover object-top border border-zinc-200 dark:border-white/10"
              />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#E8451E]">
                  {member.badge}
                </span>
                <h1 className="text-2xl font-display font-bold text-zinc-900 dark:text-white mt-0.5">
                  {member.name}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{member.role}</p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-zinc-200/80 dark:border-white/10">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 hover:text-[#E8451E] transition-colors"
                >
                  <Mail size={15} className="text-[#E8451E] shrink-0" />
                  <span className="truncate">{member.email}</span>
                </a>
                {member.phone ? (
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 hover:text-[#E8451E] transition-colors"
                  >
                    <Phone size={15} className="text-[#D4AF37] shrink-0" />
                    <span>{member.phone}</span>
                  </a>
                ) : null}
                {member.whatsappUrl ? (
                  <a
                    href={member.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs text-[#059669] dark:text-[#10B981] font-semibold hover:underline"
                  >
                    <MessageSquare size={15} className="shrink-0" />
                    <span>Direct WhatsApp</span>
                  </a>
                ) : null}
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 hover:text-[#E8451E] transition-colors"
                  >
                    <Linkedin size={15} className="text-[#D4AF37] shrink-0" />
                    <span>LinkedIn Profile</span>
                  </a>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(`Consultation with ${member.name}`)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-xs font-semibold transition-all shadow-md"
              >
                <Calendar size={14} />
                <span>Schedule Call with {member.name.split(' ')[0]}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-7">
            <div className="executive-card p-8 space-y-3">
              <h2 className="text-xl font-display font-bold text-zinc-900 dark:text-white">Executive Overview</h2>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">{member.description}</p>
            </div>

            <div className="executive-card p-8 space-y-3">
              <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-white">Track Record &amp; Impact</h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {member.experience}
              </p>
            </div>

            <div className="executive-card p-8 space-y-4">
              <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-white">Areas of Focus</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {member.expertise.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/70 dark:border-white/10 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    <CheckCircle2 size={15} className="text-[#10B981] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfilePage;
