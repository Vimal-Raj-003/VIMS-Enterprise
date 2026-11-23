import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  MessageSquareText,
  X,
  Send,
  Calendar,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { Page } from '../types';
import { COMPANY_CONTACT } from '../constants';

interface VimsChatbotProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (topic?: string) => void;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  suggestedPage?: { label: string; page: Page };
}

const QUICK_PROMPTS = [
  'How do AI Voice Agents work?',
  'What is inside MediCore HMS?',
  'Tell me about MATLAB & FDE training',
  'Custom Website & Store creation',
];

function localSmartReply(input: string): { reply: string; suggestedPage?: { label: string; page: Page } } {
  const q = input.toLowerCase();

  if (/(price|pricing|cost|rate|fee|budget|package|how much|rupee|inr|\$|₹)/i.test(q)) {
    return {
      reply:
        'Every VIMS Enterprise engagement is tailored around your exact workflows, modules, languages, or cohort goals—so we never use fixed price tags on our website.\n\nTap **Book Strategy Call** below to schedule a 30-minute Google Meet with Founder & CEO **Vimal Raj** for a custom scope walkthrough.',
    };
  }
  if (/(hosting|hostinger|vps|vims card|nfc)/i.test(q)) {
    return {
      reply:
        'We do not offer standalone web-hosting services or NFC cards. VIMS Enterprise focuses strictly on AI Voice Agents, Custom Websites & E-Commerce, AI Automations, MediCore HMS, and our MATLAB & Forward Deployed Engineer Academy.',
    };
  }
  if (/(voice|call|inbound|outbound|tamil|multilingual)/i.test(q)) {
    return {
      reply:
        'Our **Multilingual AI Voice Agents** answer routine enquiries, qualify leads, check live Google/Outlook/Cal.com availability before confirming bookings, transfer priority callers to humans, and push structured call summaries to your CRM—24/7.',
      suggestedPage: { label: 'Open AI Voice Agents', page: Page.VoiceAgents },
    };
  }
  if (/(hms|hospital|clinic|emr|opd|ipd|icu|pharmacy|abdm|doctor)/i.test(q)) {
    return {
      reply:
        '**VIMS MediCore HMS** unites 40+ Outpatient & Inpatient modules—including Ambient AI SOAP Voice Scribe, drug-allergy safety alerts, connected ICU/OT, FEFO Pharmacy, Lab LIS, Cashless TPA, and iOS/Android Doctor, Nurse & Patient apps (ABDM & DPDPA 2023 ready).',
      suggestedPage: { label: 'Explore MediCore HMS', page: Page.HospitalManagement },
    };
  }
  if (/(matlab|simulink|stateflow|mbd|hil|sil|mil|student|training|academy|workshop|college|fde|forward)/i.test(q)) {
    return {
      reply:
        'The **VIMS Academy** trains students and engineers in two career-defining tracks:\n1. **MATLAB, Simulink & Stateflow (MBD)** — PID/LQR controls, FSMs, MIL/SIL/HIL & Embedded Coder.\n2. **Forward Deployed Engineer (FDE)** — architecting and shipping real client-facing LLM, Voice & Automation systems.',
      suggestedPage: { label: 'View MATLAB & FDE Academy', page: Page.MatlabAcademy },
    };
  }
  if (/(website|web|ecommerce|e-commerce|store|shop|portal)/i.test(q)) {
    return {
      reply:
        'We engineer bespoke **B2B websites, React/TypeScript web apps, and complete online stores**—covering UX design, product variants, cart & payment gateways, SEO foundation, analytics, and team handover.',
      suggestedPage: { label: 'View Website Creation', page: Page.WebsiteCreation },
    };
  }
  if (/(automation|workflow|agent|n8n|crm|zoho|hubspot|whatsapp|lead)/i.test(q)) {
    return {
      reply:
        'Our **AI Automations & Agent Deployments** connect Meta/LinkedIn Ads, websites, WhatsApp Business, and CRMs (Zoho/HubSpot) with sub-60-second automated follow-ups, appointment reminders, and grounded LLM agents.',
      suggestedPage: { label: 'Explore AI Automations', page: Page.AIAutomation },
    };
  }
  if (/(award|social eagle|summit|ceo|founder|vimal|team|about)/i.test(q)) {
    return {
      reply:
        'Led by Founder & CEO **Vimal Raj**, VIMS Enterprise was honored by **Social Eagle at the TN Digital Summit** for Digital Presence & Innovation, alongside recognition for Applied AI & Engineering Talent mentorship.',
      suggestedPage: { label: 'Meet Leadership & Awards', page: Page.About },
    };
  }
  return {
    reply:
      'I can walk you through our **AI Voice Agents**, **Custom Website & E-Commerce Creation**, **AI Automations**, **MediCore HMS**, or **MATLAB & Forward Deployed Engineer Academy**—or connect you directly with Vimal Raj via **Book Strategy Call**.',
  };
}

function detectSuggestedPage(userMsg: string): { label: string; page: Page } | undefined {
  return localSmartReply(userMsg).suggestedPage;
}

const VimsChatbot: React.FC<VimsChatbotProps> = ({ onNavigate, onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hi! I’m the **VIMS Enterprise AI Concierge**. Ask me about our AI Voice Agents, Custom Websites, Agent Automations, MediCore HMS, or MATLAB & FDE Academy.',
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, isOpen]);

  const sendQuestion = async (rawText: string) => {
    const trimmed = rawText.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: trimmed,
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextHistory.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data = await res.json();
        if (data?.reply) {
          setMessages((prev) => [
            ...prev,
            {
              id: `a-${Date.now()}`,
              role: 'assistant',
              content: data.reply,
              suggestedPage: detectSuggestedPage(trimmed),
            },
          ]);
          return;
        }
      }
      throw new Error('Fallback to client knowledge engine');
    } catch {
      const fallback = localSmartReply(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: fallback.reply,
          suggestedPage: fallback.suggestedPage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className={idx > 0 ? 'mt-1.5' : ''}>
          {parts.map((part, i) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={i} className="font-semibold text-slate-900 dark:text-white">
                {part.slice(2, -2)}
              </strong>
            ) : (
              <React.Fragment key={i}>{part}</React.Fragment>
            )
          )}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center gap-2.5">
        {!isOpen ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open VIMS AI Concierge"
            className="flex items-center gap-2 pl-3.5 pr-4 py-2.5 sm:pl-4 sm:pr-5 sm:py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xl shadow-indigo-600/35 border border-indigo-400/30 transition-all"
          >
            <MessageSquareText size={17} />
            <span className="text-xs sm:text-sm font-semibold">Ask VIMS AI</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </motion.button>
        ) : null}
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70] w-[calc(100vw-2rem)] sm:w-[400px] max-h-[82vh] bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-slate-900 dark:bg-[#070B14] border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600/25 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                  <Sparkles size={17} />
                </div>
                <div>
                  <div className="text-sm font-poppins font-bold leading-none">VIMS AI Concierge</div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Ecosystem &amp; Solutions Guide</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close VIMS AI Concierge"
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3.5 max-h-[370px]">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] px-4 py-3 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-sm'
                        : 'bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-white/[0.07] rounded-bl-sm'
                    }`}
                  >
                    {m.role === 'assistant' ? renderFormattedText(m.content) : m.content}
                  </div>

                  {m.suggestedPage ? (
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate(m.suggestedPage!.page);
                        setIsOpen(false);
                      }}
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline px-1"
                    >
                      <span>{m.suggestedPage.label}</span>
                      <ArrowUpRight size={12} />
                    </button>
                  ) : null}
                </div>
              ))}

              {loading ? (
                <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/[0.05] text-xs text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:120ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:240ms]" />
                </div>
              ) : null}

              {/* Quick Prompts on initial state */}
              {messages.length <= 2 ? (
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {QUICK_PROMPTS.map((qp) => (
                    <button
                      key={qp}
                      type="button"
                      onClick={() => sendQuestion(qp)}
                      className="text-left px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] hover:bg-indigo-500/10 border border-slate-200 dark:border-white/10 text-[11px] text-slate-600 dark:text-slate-300 transition-colors"
                    >
                      {qp}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Instant Executive Action Strip */}
            <div className="px-4 py-2 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking('Concierge Chat Strategy Call');
                }}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <Calendar size={12} />
                <span>Book Strategy Call</span>
              </button>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <MessageSquare size={12} />
                <span>WhatsApp Vimal Raj</span>
              </a>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendQuestion(input);
              }}
              className="p-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-2 bg-white dark:bg-[#0B101D]"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Voice AI, HMS, Websites, MATLAB..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 transition-colors"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default VimsChatbot;
