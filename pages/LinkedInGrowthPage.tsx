
import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import { Testimonial } from '../types';
import { CheckCircle, Zap, TrendingUp, UserCheck, Star, Edit, Bot } from 'lucide-react';

const LinkedInGrowthPage: React.FC = () => {
  const philosophyPoints = [
    "Your LinkedIn profile is your digital identity.",
    "Your content is your 24/7 sales force.",
    "Your personal brand is your reputation capital.",
    "Consistency builds trust, trust builds opportunities."
  ];

  const contentOutcomes = [
    "Build authority in your niche",
    "Improve follower engagement",
    "Position as a Top Voice",
    "Attract inbound opportunities"
  ];
  
  const profileOptimizationPoints = [
      "Headline rewriting", "About section storytelling", "Experience as achievement-based", "Skills & featured section optimization", "SEO keywords", "Profile photo & banner guidance", "CTA alignment to capture leads"
  ];
  
  const personalBrandingPoints = [
      "Brand identity definition", "Niche positioning", "Authority building roadmap", "Story frameworks & signature content formats", "Weekly brand consulting", "Engagement & reputation strategy"
  ];

  const processSteps = ["Audit & Strategy", "Content Blueprint", "Creation & Optimization", "Automation Setup", "Growth & Review"];

  const testimonials: Testimonial[] = [
    { quote: "VIMS transformed my LinkedIn presence. The content strategy was spot-on for the automotive tech industry, leading to a 400% increase in profile views and several key partnership inquiries.", name: "Aarav Sharma", role: "CTO, AutoTech Innovators" },
    { quote: "The personal branding roadmap was a game-changer. They helped me define my voice and consistently position myself as a thought leader in AI manufacturing.", name: "Priya Singh", role: "Founder, AI Manufacturing Solutions" },
  ];

  return (
    <>
      <HeroSection
        headline={<>LinkedIn Growth & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">Personal Branding</span></>}
        subtext="Driving Authority. Visibility. Trust. VIMS Enterprises helps founders, CXOs & professionals in automotive, deep tech, AI, manufacturing and B2B sectors turn LinkedIn into a 24×7 growth engine."
        primaryCta={{ text: 'Get Your LinkedIn Audit', onClick: () => window.open('https://cal.com/vims-003/vims-enterprise', '_blank') }}
        imageUrl="https://picsum.photos/1920/1080?random=2"
        altText="Professional Indian CXO in a modern office looking at a large transparent screen with a LinkedIn profile and performance charts."
      />
      
      <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-poppins">Our Core Philosophy</h2>
                  <p className="mt-4 text-slate-400">We believe in a strategic, long-term approach to building your most valuable professional asset: your reputation.</p>
              </div>
              <div className="space-y-4">
                  {philosophyPoints.map((point, i) => (
                      <div key={i} className="flex items-center p-4 bg-slate-900/50 rounded-2xl">
                          <CheckCircle className="h-6 w-6 text-green mr-4 flex-shrink-0" />
                          <span className="text-slate-300">{point}</span>
                      </div>
                  ))}
              </div>
          </div>
      </Section>

      <Section className="bg-navy-light">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="p-8 bg-slate-900 rounded-4xl border border-slate-800">
                <div className="flex items-center mb-4"><TrendingUp className="h-8 w-8 text-cyan mr-3" /> <h3 className="text-2xl font-bold font-poppins">LinkedIn Content Creation</h3></div>
                <p className="text-slate-400 mb-6">Daily/weekly niche-specific content (Automotive, ADAS, EV, AI, Manufacturing) using story-driven, educational & viral formats. Includes a 30/60/90-day SEO-optimized content calendar.</p>
                <div className="space-y-3">
                    {contentOutcomes.map((item, i) => (
                        <div key={i} className="flex items-center"><Star className="h-5 w-5 text-orange mr-2" /><span>{item}</span></div>
                    ))}
                </div>
            </div>
            {/* Service 2 */}
            <div className="p-8 bg-slate-900 rounded-4xl border border-slate-800">
                <div className="flex items-center mb-4"><UserCheck className="h-8 w-8 text-cyan mr-3" /> <h3 className="text-2xl font-bold font-poppins">LinkedIn Profile Optimization</h3></div>
                <p className="text-slate-400 mb-6">We rewrite and optimize every section of your profile to tell a compelling story, attract the right audience, and convert visitors into leads.</p>
                <div className="flex flex-wrap gap-2">
                    {profileOptimizationPoints.map((item, i) => <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full">{item}</span>)}
                </div>
            </div>
            {/* Service 3 */}
            <div className="p-8 bg-slate-900 rounded-4xl border border-slate-800">
                <div className="flex items-center mb-4"><Edit className="h-8 w-8 text-cyan mr-3" /> <h3 className="text-2xl font-bold font-poppins">Personal Branding Development</h3></div>
                <p className="text-slate-400 mb-6">Go beyond the profile. We help you define your unique brand identity, position yourself as an authority, and create a roadmap for long-term influence.</p>
                <div className="flex flex-wrap gap-2">
                    {personalBrandingPoints.map((item, i) => <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full">{item}</span>)}
                </div>
            </div>
            {/* Service 4 */}
            <div className="p-8 bg-slate-900 rounded-4xl border border-slate-800">
                <div className="flex items-center mb-4"><Bot className="h-8 w-8 text-cyan mr-3" /> <h3 className="text-2xl font-bold font-poppins">LinkedIn AI-Agent</h3></div>
                <p className="text-slate-400 mb-6">Achieve unparalleled consistency. Our AI agent automatically posts your approved content at peak times, ensuring you're always visible. 5x consistency, zero manual posting.</p>
                 <div className="flex items-center text-green"><Zap className="h-5 w-5 mr-2" /><span>Works with long-form, short-form, and carousel posts.</span></div>
            </div>
          </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold">Our LinkedIn Growth Process</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {processSteps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-cyan flex items-center justify-center text-xl font-bold mb-3">{i + 1}</div>
                <p className="font-semibold">{step}</p>
              </div>
              {i < processSteps.length - 1 && <div className="hidden md:block flex-grow h-0.5 bg-slate-700"></div>}
            </React.Fragment>
          ))}
        </div>
      </Section>
      
      <Section className="bg-navy-light">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                  <div key={i} className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800">
                      <p className="text-slate-300 italic mb-6">"{t.quote}"</p>
                      <div>
                          <p className="font-bold text-light-text">{t.name}</p>
                          <p className="text-sm text-cyan">{t.role}</p>
                      </div>
                  </div>
              ))}
          </div>
      </Section>
    </>
  );
};

export default LinkedInGrowthPage;