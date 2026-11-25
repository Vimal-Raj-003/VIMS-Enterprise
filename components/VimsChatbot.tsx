import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  MessageSquareText,
  X,
  Send,
  Calendar,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { Page } from '../types';
import { COMPANY_CONTACT, GROUP_PLATFORMS } from '../constants';

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
  'How does Jill-Jill Voice AI work?',
  'Show me MediCore HMS workflow',
  'Tell me about Embedded Skills & FDE',
  'Who leads VIMS Enterprise?',
];

function localSmartReply(input: string): { reply: string; suggestedPage?: { label: string; page: Page } } {
  const q = input.toLowerCase();
  const sections: string[] = [];
  let suggestedPage: { label: string; page: Page } | undefined;

  if (/(hosting|hostinger|vps|vims card|nfc|mocha)/i.test(q)) {
    sections.push(
      'VIMS Enterprise focuses strictly on **Voice AI (Jill-Jill)**, **Custom Web Creation**, **AI Automations**, **MediCore HMS**, and **Academy (Embedded Skills & FDE)**. We do not offer hosting services or NFC cards.'
    );
  }
  if (/(award|social eagle|summit|ceo|cto|founder|gowtham|vimal|guru|team|about|who)/i.test(q)) {
    sections.push(
      'VIMS Enterprise is led by **Gowtham Raj M (CEO · 15+ yrs automotive/enterprise engineering)**, **Vimal Raj (Founder & CTO)**, and **GuruPrasath S (Project Manager)**, recognized on stage by **Social Eagle** at the TN Digital Summit.'
    );
    suggestedPage = { label: 'About Leadership & Summit', page: Page.About };
  }
  if (/(voice|call|inbound|outbound|tamil|multilingual|jill)/i.test(q)) {
    sections.push(
      'Our **Voice AI** (**Jill-Jill** · jilljill.in) handles 24/7 multilingual calls in Tamil, English & Hindi—answering FAQs, checking live calendar slots, handing off VIP callers, and syncing your CRM.'
    );
    suggestedPage = { label: 'Open Voice AI', page: Page.VoiceAgents };
  }
  if (/(hms|hospital|clinic|emr|opd|ipd|icu|pharmacy|abdm|doctor)/i.test(q)) {
    sections.push(
      '**VIMS MediCore HMS** connects 40+ OP & IP clinical modules—from Patient App & Ambient AI SOAP Scribe to Cloud PACS/LIS, ICU telemetry, FEFO Pharmacy, and Cashless TPA (ABDM & DPDPA ready).'
    );
    suggestedPage = { label: 'Inspect HMS Ecosystem', page: Page.HospitalManagement };
  }
  if (/(matlab|simulink|stateflow|mbd|hil|sil|mil|student|training|academy|workshop|college|fde|forward|embedded|embskills)/i.test(q)) {
    sections.push(
      '**VIMS Academy** integrates **Embedded Skills** (24 automotive ECU protocol & MATLAB/Simulink MBD modules) alongside our **Forward Deployed Engineer (FDE)** AI bootcamp.'
    );
    suggestedPage = { label: 'Explore Academy', page: Page.MatlabAcademy };
  }
  if (/(website|web|ecommerce|e-commerce|store|shop|portal)/i.test(q)) {
    sections.push(
      'We engineer bespoke B2B corporate websites, custom React web apps, and full e-commerce stores—built cleanly with fast mobile UX, payment checkout, SEO, and admin handover.'
    );
    suggestedPage = { label: 'Open Web Creation', page: Page.WebsiteCreation };
  }
  if (/(automation|workflow|agent|n8n|crm|zoho|hubspot|whatsapp|lead)/i.test(q)) {
    sections.push(
      'Our **AI Automations** connect Meta/LinkedIn Ads, websites, WhatsApp Business, and Zoho/HubSpot CRMs with sub-60s lead response and grounded LLM workflows.'
    );
    suggestedPage = { label: 'Open AI Automations', page: Page.AIAutomation };
  }
  if (/(price|pricing|cost|rate|fee|budget|package|how much|rupee|inr|\$|₹)/i.test(q)) {
    sections.push(
      'Every VIMS Enterprise engagement is tailored around your exact workflows, modules, or cohort goals—so we never publish fixed price tags.\n\nTap **Book a Call** below to meet Founder & CTO **Vimal Raj** for a custom scope.'
    );
  }

  if (sections.length > 0) {
    return { reply: sections.join('\n\n'), suggestedPage };
  }

  return {
    reply: `Ask me about **Voice AI (${GROUP_PLATFORMS.jilljill.name})**, **Web Creation**, **AI Automations**, **MediCore HMS**, or **Academy (${GROUP_PLATFORMS.embskills.name})**—or tap **Book a Call** below.`,
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
        'Hi! I’m the **VIMS Enterprise Assistant**. Ask about **Voice AI (Jill-Jill)**, **Web Creation**, **AI Automations**, **HMS**, or **Academy (Embedded Skills)**.',
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
      throw new Error('Fallback to local reply');
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
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center gap-2.5">
        {!isOpen ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open VIMS Assistant"
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white shadow-lg transition-all"
          >
            <MessageSquareText size={17} />
            <span className="text-xs sm:text-sm font-semibold">Ask VIMS</span>
          </motion.button>
        ) : null}
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70] w-[calc(100vw-2rem)] sm:w-[390px] max-h-[82vh] bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#1D4ED8] flex items-center justify-between text-white">
              <div>
                <div className="text-sm font-display font-bold leading-none">VIMS Assistant</div>
                <div className="text-[11px] text-blue-100 mt-1">Solutions &amp; Scheduling Desk</div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close VIMS Assistant"
                className="p-1.5 rounded-lg text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3.5 max-h-[360px]">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] px-4 py-3 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-[#1D4ED8] text-white rounded-br-sm'
                        : 'bg-[#F8F7F4] dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-sm'
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
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#1D4ED8] dark:text-blue-400 hover:underline px-1"
                    >
                      <span>{m.suggestedPage.label}</span>
                      <ArrowUpRight size={12} />
                    </button>
                  ) : null}
                </div>
              ))}

              {loading ? (
                <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#F8F7F4] dark:bg-slate-800 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-bounce [animation-delay:120ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-bounce [animation-delay:240ms]" />
                </div>
              ) : null}

              {messages.length <= 2 ? (
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {QUICK_PROMPTS.map((qp) => (
                    <button
                      key={qp}
                      type="button"
                      onClick={() => sendQuestion(qp)}
                      className="text-left px-2.5 py-1.5 rounded-lg bg-[#F8F7F4] dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-[11px] text-slate-700 dark:text-slate-200 transition-colors"
                    >
                      {qp}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Direct Actions */}
            <div className="px-4 py-2 bg-[#F8F7F4] dark:bg-slate-800/60 border-t border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking('Concierge Call');
                }}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1D4ED8] dark:text-blue-400 hover:underline"
              >
                <Calendar size={12} />
                <span>Book a Call</span>
              </button>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0F766E] dark:text-teal-400 hover:underline"
              >
                <MessageSquare size={12} />
                <span>WhatsApp Vimal (CTO)</span>
              </a>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendQuestion(input);
              }}
              className="p-3 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2 bg-white dark:bg-[#111827]"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Voice AI, HMS, Academy..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-[#F8F7F4] dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-1 focus:ring-[#1D4ED8]"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white disabled:opacity-40 transition-colors"
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
