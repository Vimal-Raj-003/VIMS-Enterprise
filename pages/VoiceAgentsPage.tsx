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
  Sparkles,
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
    actions: ['Slot Verified on Calendar', 'Patient Profile Created', 'WhatsApp Reminder Scheduled'],
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
    desc: 'Fluent in Tamil, English, Hindi & regional speech with natural sub-second turn-taking.',
  },
  {
    icon: <Calendar size={18} />,
    title: 'Verified Calendar Booking',
    desc: 'Checks live Google Calendar, Outlook & Cal.com slots before confirming any appointment.',
  },
  {
    icon: <PhoneForwarded size={18} />,
    title: 'Warm Human Handoff',
    desc: 'Transfers VIP or complex callers directly to live staff with full spoken summary context.',
  },
  {
    icon: <Database size={18} />,
    title: 'Instant CRM & Webhook Sync',
    desc: 'Pushes structured call transcripts, lead scores & next steps into Zoho, HubSpot, or Sheets.',
  },
  {
    icon: <BrainCircuit size={18} />,
    title: '24/7 Outbound Follow-Up',
    desc: 'Re-engages web & ad leads under 60 seconds and confirms upcoming bookings automatically.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Guardrailed Knowledge',
    desc: 'Responds strictly from your approved SOPs and FAQs—zero off-script claims.',
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
    <div>
      <HeroSection
        badge="VIMS Enterprise × Jill-Jill Voice AI"
        headline={
          <>
            Multilingual Voice AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8451E] to-[#D4AF37]">
              Powered by Jill-Jill.
            </span>
          </>
        }
        subtext="Ready-to-work AI voice agents that answer calls naturally 24/7, qualify B2B leads, verify live calendar slots, and sync your CRM automatically."
        imageUrl="/images/niches/voice-ai-orb.webp"
        altText="Jill-Jill Acoustic AI Voice Sphere"
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

      {/* Interactive Live Voice Recognition Console */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#E8451E] font-semibold">
                Live Automatic Voice Recognition
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white">
                Test How Jill-Jill Understands &amp; Books Calls
              </h2>
            </div>
            <a
              href={GROUP_PLATFORMS.jilljill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8451E] hover:underline"
            >
              <span>Visit www.jilljill.in</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Controls: Mic + Instant Simulation Scenarios */}
            <div className="lg:col-span-5 space-y-4">
              <div className="executive-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Speech Input
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#10B981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    Web Speech API
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleToggleMic}
                  className={`w-full py-3.5 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all ${
                    isListening
                      ? 'bg-[#10B981] text-white shadow-lg shadow-[#10B981]/30'
                      : 'bg-[#E8451E] hover:bg-[#D93814] text-white shadow-lg shadow-[#E8451E]/25'
                  }`}
                >
                  {isListening ? <MicOff size={17} /> : <Mic size={17} />}
                  <span>{isListening ? 'Stop Listening' : 'Speak With Live Mic'}</span>
                </button>

                {liveStatus === 'unsupported' ? (
                  <p className="text-xs text-[#D4AF37]">
                    Microphone recognition unavailable in this browser context—try any preset scenario below.
                  </p>
                ) : null}
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 px-1">
                  Or Run Instant Scenario
                </div>
                {SIMULATION_CHIPS.map((chip, idx) => (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => {
                      setSelectedChipIdx(idx);
                      setLiveTranscript('');
                      setLiveStatus('ready');
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      selectedChipIdx === idx && !liveTranscript
                        ? 'bg-[#E8451E] text-white border-[#E8451E] shadow-lg shadow-[#E8451E]/20'
                        : 'executive-card text-zinc-800 dark:text-zinc-200'
                    }`}
                  >
                    <span className="text-sm font-semibold">{chip.label}</span>
                    <Volume2 size={15} className="shrink-0 opacity-80" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Interactive Transcript + Intent Readout */}
            <div className="lg:col-span-7 rounded-3xl bg-[#111114] border border-white/15 p-6 sm:p-8 text-white shadow-2xl flex flex-col justify-between space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Sparkles size={15} className="text-[#E8451E]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                    {liveTranscript ? 'Live Spoken Audio Captured' : activeSim.detectedLang}
                  </span>
                </div>

                {/* Equalizer Waves */}
                <div className="flex items-center gap-1 h-4">
                  {[0.5, 1, 0.7, 0.9, 0.4].map((scale, i) => (
                    <span
                      key={i}
                      style={{ height: `${Math.round(scale * (isListening ? 16 : 10))}px` }}
                      className={`w-1 rounded-full transition-all ${
                        isListening ? 'bg-[#10B981] animate-pulse' : 'bg-[#D4AF37]/70'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    Incoming Caller Audio
                  </div>
                  <p className="text-sm sm:text-base text-zinc-100">
                    {liveTranscript ? `"${liveTranscript}"` : activeSim.transcript}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#E8451E]/15 border border-[#E8451E]/30">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#E8CA6A] mb-1">
                    Jill-Jill AI Agent Response
                  </div>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    {liveTranscript
                      ? 'Intent detected. Cal.com & Google Calendar availability checked—ready to qualify enquiry and lock confirmation.'
                      : activeSim.agentReply}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {activeSim.actions.map((act) => (
                  <div
                    key={act}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#10B981]/15 border border-[#10B981]/25 text-xs text-[#6EE7B7] font-medium"
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

      {/* Capabilities Grid */}
      <section className="py-16 md:py-22 px-4 sm:px-6 lg:px-8 bg-zinc-100/80 dark:bg-[#111114]/70 border-t border-zinc-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-zinc-900 dark:text-white">
                Built for Real Business Call Desks
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Engineered by VIMS Enterprise &middot; Operated live on Jill-Jill.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenBooking('Jill-Jill Voice AI Scope')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E8451E] hover:bg-[#D93814] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
            >
              <PhoneCall size={15} />
              <span>Configure Your Voice Agent</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {JILL_CAPABILITIES.map((cap) => (
              <div key={cap.title} className="executive-card p-6 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#E8451E]/10 text-[#E8451E] flex items-center justify-center">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-zinc-900 dark:text-white">{cap.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceAgentsPage;
