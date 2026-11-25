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
    <div className="bg-white dark:bg-[#0B0F19] min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft size={17} />
          <span>Back to About &amp; Leadership</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-5">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full aspect-square rounded-2xl object-cover object-top shadow-md"
            />
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
                {member.badge}
              </span>
              <h1 className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-0.5">
                {member.name}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{member.role}</p>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-slate-200 dark:border-slate-800">
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 hover:text-[#1D4ED8]"
              >
                <Mail size={15} className="text-[#1D4ED8] shrink-0" />
                <span className="truncate">{member.email}</span>
              </a>
              {member.phone ? (
                <a
                  href={`tel:${member.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 hover:text-[#1D4ED8]"
                >
                  <Phone size={15} className="text-slate-500 shrink-0" />
                  <span>{member.phone}</span>
                </a>
              ) : null}
              {member.whatsappUrl ? (
                <a
                  href={member.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-[#0F766E] dark:text-teal-400 font-semibold hover:underline"
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
                  className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 hover:text-[#1D4ED8]"
                >
                  <Linkedin size={15} className="text-[#1D4ED8] shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking(`Consultation with ${member.name}`)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-semibold transition-all"
            >
              <Calendar size={14} />
              <span>Schedule Call with {member.name.split(' ')[0]}</span>
            </button>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-3">
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">Executive Overview</h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{member.description}</p>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            <div className="space-y-3">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Track Record &amp; Impact</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {member.experience}
              </p>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Areas of Focus</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {member.expertise.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 py-2 border-b border-slate-100 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 size={15} className="text-[#0F766E] dark:text-teal-400 shrink-0" />
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
