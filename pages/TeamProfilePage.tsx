import React from 'react';
import { Linkedin, Mail, ArrowLeft, Calendar, CheckCircle2 } from 'lucide-react';
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
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline mb-8"
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
                className="w-full aspect-square rounded-2xl object-cover object-top border border-slate-200 dark:border-white/10"
              />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {member.badge}
                </span>
                <h1 className="text-2xl font-poppins font-bold text-slate-900 dark:text-white mt-0.5">
                  {member.name}
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{member.role}</p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-white/[0.08]">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors"
                >
                  <Mail size={15} className="text-indigo-500 shrink-0" />
                  <span className="truncate">{member.email}</span>
                </a>
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors"
                  >
                    <Linkedin size={15} className="text-indigo-500 shrink-0" />
                    <span>LinkedIn Profile</span>
                  </a>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(`Consultation with ${member.name}`)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md"
              >
                <Calendar size={14} />
                <span>Schedule Call with {member.name.split(' ')[0]}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="executive-card p-8 space-y-4">
              <h2 className="text-xl font-poppins font-bold text-slate-900 dark:text-white">Executive Overview</h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{member.description}</p>
            </div>

            <div className="executive-card p-8 space-y-4">
              <h3 className="text-xl font-poppins font-bold text-slate-900 dark:text-white">Track Record &amp; Impact</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {member.experience}
              </p>
            </div>

            <div className="executive-card p-8 space-y-4">
              <h3 className="text-xl font-poppins font-bold text-slate-900 dark:text-white">Areas of Focus</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {member.expertise.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.06] text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 size={15} className="text-indigo-500 shrink-0" />
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
