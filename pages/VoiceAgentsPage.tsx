import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import { GROUP_PLATFORMS } from '../constants';
import {
  Mic,
  MicOff,
  PhoneCall,
  Calendar,
  BrainCircuit,
  Globe2,
  Database,
  CheckCircle2,
  ArrowRight,
  PhoneForwarded,
  ShieldCheck,
  ExternalLink,
  Volume2,
} from 'lucide-react';

interface VoiceAgentsPageProps {
  onOpenBooking: (topic?: string) => void;
}

const SIMULATION_CHIPS = [
  {
    id: 'clinic',
    label: 'Book a clinic consultation',
    detectedLang: 'Tamil + English Detected',
    transcript: '"Vanakkam, can I book a cardiology visit for tomorrow morning at 10:30?"',
    agentReply:
      'Confirmed! Dr. Karthik has 10:30 AM open tomorrow. Slot locked on Google Calendar and WhatsApp directions sent.',
    actions: ['Slot Verified on Calendar', 'Patient Profile Created', 'WhatsApp Reminder Sent'],
  },
  {
    id: 'b2b',
    label: 'Qualify a B2B sales lead',
    detectedLang: 'English · Sales SDR Mode',
    transcript: '"We receive ~150 leads/day on Meta Ads and need Zoho CRM voice follow-up."',
    agentReply:
      'High-volume Zoho integration is a fit. I have scheduled a 30-min architecture review on Thursday at 4 PM and logged your brief.',
    actions: ['BANT Qualification Scored', 'Google Meet Invite Sent', 'Zoho Lead Summary Pushed'],
  },
  {
    id: 'order',
    label: 'Check order delivery status',
    detectedLang: 'Multilingual Escalation Mode',
    transcript: '"I placed a bulk corporate order yesterday and need to update the shipping address."',
    agentReply:
      'Order located prior to dispatch. Transferring you warmly to our fulfillment coordinator with your verified ticket ID.',
    actions: ['Order Record Pulled', 'Policy Checked', 'Warm Human Transfer Ready'],
  },
];

const JILL_CAPABILITIES = [
  {
    icon: <Globe2 size={18} />,
    title: 'Multilingual Conversations',
    desc: 'Natural Tamil, English, Hindi & regional speech with quick turn-taking.',
  },
  {
    icon: <Calendar size={18} />,
    title: 'Verified Calendar Booking',
    desc: 'Checks live Google Calendar, Outlook & Cal.com availability before confirming slots.',
  },
  {
    icon: <PhoneForwarded size={18} />,
    title: 'Warm Human Handoff',
    desc: 'Transfers VIP or complex callers straight to staff with full context.',
  },
  {
    icon: <Database size={18} />,
    title: 'Instant CRM Sync',
    desc: 'Logs clean call transcripts, intent tags & follow-up actions into Zoho or HubSpot.',
  },
  {
    icon: <BrainCircuit size={18} />,
    title: '24/7 Outbound Follow-Up',
    desc: 'Re-engages inbound leads in under 60 seconds and confirms upcoming demos.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Guardrailed Responses',
    desc: 'Answers strictly from your approved SOPs and business FAQs.',
  },
];

const VoiceAgentsPage: React.FC<VoiceAgentsPageProps> = ({ onOpenBooking }) => {
  const [selectedChipIdx, setSelectedChipIdx] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [liveStatus, setLiveStatus] = useState<'ready' | 'listening' | 'matched' | 'unsupported'>('ready');
  const recognitionRef = useRef<any>(null);

  const activeSim = SIMULATION_CHIPS[selectedChipIdx];

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const handleToggleMic = () => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      setLiveStatus(liveTranscript ? 'matched' : 'ready');
      return;
    }

    const w = window as any;
    const SpeechRec = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SpeechRec) {
      setLiveStatus('unsupported');
      return;
    }

    try {
      const rec = new SpeechRec();
      rec.lang = 'en-IN';
      rec.interimResults = true;
      rec.maxAlternatives = 1;

      rec.onstart = () => {
        setIsListening(true);
        setLiveStatus('listening');
        setLiveTranscript('');
      };
      rec.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((r: any) => r[0].transcript)
          .join(' ');
        setLiveTranscript(transcript);
        if (event.results[0]?.isFinal) {
          setLiveStatus('matched');
        }
      };
      rec.onerror = () => {
        setIsListening(false);
        setLiveStatus('matched');
      };
      rec.onend = () => {
        setIsListening(false);
        if (liveTranscript) setLiveStatus('matched');
      };
      recognitionRef.current = rec;
      rec.start();
    } catch {
      setLiveStatus('unsupported');
      setIsListening(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0B0F19]">
      <HeroSection
        badge="VIMS Enterprise × Jill-Jill Voice AI"
        headline={
          <>
            Human-Sounding Voice AI{' '}
            <span className="text-[#1D4ED8] dark:text-blue-400">Powered by Jill-Jill.</span>
          </>
        }
        subtext="AI voice agents that greet your callers naturally 24/7, answer FAQs, check live calendar availability, and sync summaries cleanly to your team."
        imageUrl="/images/human/voice-ai-human.webp"
        altText="Business founder taking a clear call in sunlit office"
        primaryCta={{
          text: 'Book Live Voice Demo',
          onClick: () => onOpenBooking('Jill-Jill AI Voice Agent Demo'),
        }}
        secondaryCta={{
          text: 'Launch Jill-Jill Platform',
          externalUrl: GROUP_PLATFORMS.jilljill.url,
          onClick: () => {},
        }}
      />

      {/* Interactive Voice Recognition Console — Open Editorial */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-blue-400 font-semibold">
                Live Voice Recognition Preview
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
                Experience How Jill-Jill Understands Callers
              </h2>
            </div>
            <a
              href={GROUP_PLATFORMS.jilljill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] dark:text-blue-400 hover:underline"
            >
              <span>Visit www.jilljill.in</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Input Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>LIVE MICROPHONE</span>
                  <span className="text-[#0F766E] dark:text-teal-400">Web Speech API</span>
                </div>
                <button
                  type="button"
                  onClick={handleToggleMic}
                  className={`w-full py-3.5 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all ${
                    isListening
                      ? 'bg-[#0F766E] text-white'
                      : 'bg-[#1D4ED8] hover:bg-[#1E40AF] text-white'
                  }`}
                >
                  {isListening ? <MicOff size={17} /> : <Mic size={17} />}
                  <span>{isListening ? 'Stop Listening' : 'Speak With Live Mic'}</span>
                </button>
                {liveStatus === 'unsupported' ? (
                  <p className="text-xs text-[#B45309] dark:text-amber-300">
                    Microphone capture is unavailable in this browser context—try any preset scenario below.
                  </p>
                ) : null}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Instant Call Scenarios
                </div>
                {SIMULATION_CHIPS.map((chip, idx) => {
                  const active = selectedChipIdx === idx && !liveTranscript;
                  return (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => {
                        setSelectedChipIdx(idx);
                        setLiveTranscript('');
                        setLiveStatus('ready');
                      }}
                      className={`w-full text-left px-4 py-3.5 rounded-xl transition-all flex items-center justify-between ${
                        active
                          ? 'bg-[#1D4ED8] text-white font-semibold'
                          : 'bg-[#F8F7F4] dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-sm">{chip.label}</span>
                      <Volume2 size={15} className="shrink-0 opacity-80" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Conversation Flow */}
            <div className="lg:col-span-7 rounded-2xl bg-[#F8F7F4] dark:bg-[#0F1420] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold">
                  {liveTranscript ? 'Live Spoken Audio Captured' : activeSim.detectedLang}
                </span>

                <div className="flex items-center gap-1 h-4">
                  {[0.5, 1, 0.7, 0.9, 0.4].map((scale, i) => (
                    <span
                      key={i}
                      style={{ height: `${Math.round(scale * (isListening ? 16 : 10))}px` }}
                      className={`w-1 rounded-full transition-all ${
                        isListening ? 'bg-[#0F766E] animate-pulse' : 'bg-[#1D4ED8]/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Caller Enquiry
                  </div>
                  <p className="text-sm sm:text-base text-slate-900 dark:text-white">
                    {liveTranscript ? `"${liveTranscript}"` : activeSim.transcript}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border-l-4 border-[#1D4ED8]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#1D4ED8] dark:text-blue-400 font-semibold mb-1">
                    Jill-Jill Voice Agent Response
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed">
                    {liveTranscript
                      ? 'Intent detected. Google Calendar availability verified—ready to lock booking and sync CRM.'
                      : activeSim.agentReply}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                {activeSim.actions.map((act) => (
                  <div
                    key={act}
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#0F766E] dark:text-teal-400"
                  >
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Capabilities Band */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8 editorial-section-alt">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
                Built for Real Business Call Desks
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Engineered by VIMS Enterprise &middot; Operated live on Jill-Jill.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenBooking('Jill-Jill Voice AI Scope')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs sm:text-sm font-semibold"
            >
              <PhoneCall size={15} />
              <span>Configure Your Voice Agent</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pt-4">
            {JILL_CAPABILITIES.map((cap) => (
              <div key={cap.title} className="space-y-2 border-t border-slate-200/80 dark:border-slate-800 pt-5">
                <div className="text-[#1D4ED8] dark:text-blue-400">{cap.icon}</div>
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">{cap.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceAgentsPage;
