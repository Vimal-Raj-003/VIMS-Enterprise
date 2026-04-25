import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Twitter, Globe, ArrowLeft } from 'lucide-react';
import { Page } from '../types';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    description: string;
    expertise: string[];
    experience: string;
    email: string;
    linkedin?: string;
    twitter?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 'vimal',
        name: 'Vimal Raj Mahadevan',
        role: 'CEO',
        imageUrl: 'https://picsum.photos/600/600?random=101',
        description: 'Vimal is the visionary leader of VIMS, dedicated to bridging the gap between traditional business and modern AI technology. He brings a unique blend of strategic foresight and technical depth to every project.',
        expertise: ['Product Development', 'Custom SaaS Implementations', 'System Analysis', 'Execution Excellence', 'AI Strategy'],
        experience: 'Expert in leading digital transformation for high-stakes industries, focusing on execution excellence and scalable product development.',
        email: 'vimal@vims-enterprise.com',
        linkedin: 'https://linkedin.com/in/vimal-raj-mahadevan'
    },
    {
        id: 'gowtham',
        name: 'Gowthamraj M',
        role: 'CFO',
        imageUrl: 'https://picsum.photos/600/600?random=102',
        description: 'With over 15 years of industrial expertise, Gowthamraj ensures the structural and fiscal integrity of our solutions. He specializes in designing architectures that not only work today but scale for tomorrow.',
        expertise: ['Product Architecture', 'Scalable System Design', 'High-quality Solution Delivery', 'Industrial Strategy', 'Financial Operations'],
        experience: '15+ years of Industrial Expertise specializing in product architecture and scalable system design across diverse tech landscapes.',
        email: 'gowtham@vims-enterprise.com',
        linkedin: 'https://linkedin.com/in/gowthamraj-m'
    },
    {
        id: 'guru',
        name: 'GuruPrasath S',
        role: 'Product Manager',
        imageUrl: 'https://picsum.photos/600/600?random=103',
        description: 'GuruPrasath is the engine room of our AI operations. He drives the execution of end-to-end SaaS platforms with a focus on workflow optimization and seamless AI integration.',
        expertise: ['AI Automation', 'Workflow Optimization', 'End-to-End SaaS Operations', 'Process Engineering', 'Platform Management'],
        experience: 'Specialist in driving AI automation and optimization, ensuring seamless execution of complex SaaS operations and digital transformations.',
        email: 'guru@vims-enterprise.com',
        linkedin: 'https://linkedin.com/in/guruprasath-s'
    }
];

interface TeamProfilePageProps {
    memberId: string;
    onBack: () => void;
}

const TeamProfilePage: React.FC<TeamProfilePageProps> = ({ memberId, onBack }) => {
    const member = TEAM_MEMBERS.find(m => m.id === memberId) || TEAM_MEMBERS[0];

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <button 
                    onClick={onBack}
                    className="flex items-center text-cyan hover:text-violet transition-colors mb-8 group"
                >
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                    Back to About
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Sidebar: Image & Info */}
                    <div className="lg:col-span-1">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-4xl p-6 border border-white/20 dark:border-slate-800/30 shadow-2xl sticky top-28"
                        >
                            <img 
                                src={member.imageUrl} 
                                alt={member.name} 
                                className="w-full aspect-square rounded-3xl object-cover mb-6 border-2 border-slate-100 dark:border-slate-700"
                            />
                            <h1 className="text-2xl font-bold font-poppins text-center mb-1">{member.name}</h1>
                            <p className="text-cyan font-medium text-center mb-6">{member.role}</p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl">
                                    <Mail className="text-cyan" size={18} />
                                    <span className="text-sm truncate">{member.email}</span>
                                </div>
                                <div className="flex justify-center gap-4">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                    )}
                                    {member.twitter && (
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan transition-colors">
                                            <Twitter size={20} />
                                        </a>
                                    )}
                                    <a href="#" className="p-3 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan transition-colors">
                                        <Globe size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12"
                        >
                            <section>
                                <h2 className="text-3xl font-bold font-poppins mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">Professional Profile</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">"{member.description}"</p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold font-poppins mb-6">Experience & Impact</h3>
                                <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-slate-800/30 shadow-xl">
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{member.experience}</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold font-poppins mb-6">Expertise</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {member.expertise.map((skill, i) => (
                                        <motion.div 
                                            key={skill}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                            className="flex items-center p-4 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm rounded-2xl border border-white/10 dark:border-slate-700/20"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-cyan mr-3 shadow-[0_0_8px_rgba(34,211,238,1)]"></div>
                                            <span className="font-medium">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            <section className="pt-8">
                                <motion.button 
                                    whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open('https://cal.com/vims-003/vims-enterprise', '_blank')}
                                    className="px-8 py-4 bg-gradient-to-r from-orange to-violet text-light-text font-bold rounded-full shadow-2xl flex items-center"
                                >
                                    Schedule a Call with {member.name.split(' ')[0]}
                                </motion.button>
                            </section>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamProfilePage;
