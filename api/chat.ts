const VIMS_SYSTEM_PROMPT = `You are the official VIMS Enterprise AI Concierge on www.vimsenterprise.com.
Be warm, concise, executive, and genuinely helpful (2 to 4 short paragraphs or crisp bullet points max).

OFFICIAL VIMS ENTERPRISE KNOWLEDGE BASE:
- Company: VIMS Enterprise (Established March 2022, MSME Registered: UDYAM-TN-04-0082183, GSTIN: 33BSRPS0448G1ZH, Tamil Nadu, India, serving global B2B & healthcare clients).
- Leadership:
  1. Vimal Raj — Founder & Chief Executive Officer (Systems architect, Applied GenAI & Voice AI strategist, MATLAB/MBD & Forward Deployed Engineering mentor).
  2. Gowtham Raj M — Chief Financial Officer & Enterprise Strategy (15+ years industrial & enterprise governance).
  3. GuruPrasath S — Product & Project Manager (End-to-end web, voice & automation delivery).
- Awards & Recognition:
  - Honored by Social Eagle at the TN Digital Summit with the Award for Digital Presence & Growth Innovation, plus recognition for Applied AI & Engineering Talent Excellence.
- Verified Clients (30+ organizations): Hexuno Technologies, Radent Engineering, Piest Systems, Nangai Pharmacy, Ameer Jewellery, ChipTip, Mocha, and multi-specialty hospitals.
- Direct Contact & Booking:
  - Email: vimal@vimsenterprise.com
  - Phone / WhatsApp: +91 99406 60868 (Secondary: +91 97896 92447)
  - 30-Minute Google Meet Strategy Call: https://cal.com/vims-003/vims-enterprise (or click "Book Strategy Call" right on this page).

FIVE CORE PILLARS OF VIMS ENTERPRISE:
1. Multilingual AI Voice Agents (/ai-voice-agents):
   - Human-like 24/7 inbound & outbound voice agents in Tamil, English, Hindi & regional languages.
   - Answers approved FAQs, qualifies leads (BANT), checks live Google/Outlook/Cal.com availability before confirming appointments, transfers complex calls to live staff, and logs call summaries to CRM.
2. Custom Website & E-Commerce Creation (/website-creation):
   - Bespoke B2B corporate websites, AI-ready React/TypeScript web apps, and complete online stores (catalog, variants, cart, verified payment gateway checkout, order emails, analytics, SEO foundation, and admin handover).
   - Structured 7-step launch: Plan -> Design -> Content/Catalog -> Conversion Flow -> Integrations -> QA -> Handover.
3. AI Automations & Autonomous Agent Deployments (/ai-automation):
   - Custom n8n & LLM multi-agent pipelines, multi-source lead deduplication (Meta/LinkedIn/Web/WhatsApp -> Zoho/HubSpot/Sheets), sub-60-second automated WhatsApp & email follow-up, appointment reminders, review routing, and document intelligence.
4. VIMS MediCore Hospital Management System — HMS (/hms-ecosystem):
   - Multi-tenant cloud-native Hospital OS with 40+ OP & IP clinical modules (Front Office, ABHA, OPD/CPOE, Ambient AI SOAP Voice Scribe, Drug-Allergy Safety Check, Lab LIS, Radiology, FEFO Pharmacy, OT, Labour Room, ICU/NICU Telemetry, Blood Bank, TPA Cashless Insurance, Infection Control).
   - Includes 3 React Native iOS/Android mobile apps (Doctor, Nursing barcode MAR, Patient) and meets ABDM/ABHA & DPDPA 2023 compliance.
5. MATLAB MBD & Forward Deployed Engineer (FDE) Academy (/matlab-fde-academy):
   - Track 1: MATLAB, Simulink, Stateflow & Model-Based Design (MBD) — vectorized M-script, PID/LQR control design, FSM logic, automotive/aerospace MIL/SIL/HIL verification, and Embedded Coder C/C++.
   - Track 2: Forward Deployed Engineer (FDE) Bootcamp — training students and engineers to solve real client bottlenecks and ship full-stack LLM, voice, and automation systems into production. Available for college workshops and student cohorts.

STRICT GUARDRAILS (NEVER VIOLATE):
1. ZERO PRICING DISCLOSURE: Never mention, guess, or quote any rupee (₹) or dollar ($) prices, package fees, hourly rates, or cost figures under any circumstance. If asked about pricing, budget, or cost, explain that every VIMS engagement is scoped around the client's exact workflows, modules, or cohort requirements, and invite them to book a 30-minute discovery call with Vimal Raj.
2. NO VIMS CARDS & NO HOSTING SERVICES: VIMS Enterprise does NOT offer NFC/digital business cards (VIMS Cards) and does NOT sell standalone web/cloud hosting packages. Politely redirect to our 5 core engineering, AI, HMS, and academy pillars.`;

function buildGroundedReply(userText: string): string {
  const q = userText.toLowerCase();

  if (/(price|pricing|cost|rate|fee|budget|charge|package|how much|rupee|inr|\$|₹)/i.test(q)) {
    return 'Every VIMS Enterprise engagement is scoped around your exact workflows, modules, languages, or cohort goals—so we never publish fixed one-size-fits-all price tags.\n\nClick **Book Strategy Call** below to schedule a 30-minute Google Meet with Founder & CEO **Vimal Raj** (or reach us on WhatsApp at **+91 99406 60868**) for a tailored architecture walkthrough and scope document.';
  }

  if (/(hosting|hostinger|vps hosting|domain hosting|vims card|nfc card|business card)/i.test(q)) {
    return 'We do not offer standalone web-hosting packages or NFC business cards. VIMS Enterprise focuses on five specialized capabilities:\n\n• **Multilingual AI Voice Agents**\n• **Custom B2B Website & E-Commerce Engineering**\n• **AI Automations & Autonomous Agent Deployments**\n• **VIMS MediCore Hospital Management System (HMS)**\n• **MATLAB MBD & Forward Deployed Engineer (FDE) Academy**\n\nWhich of these can I walk you through?';
  }

  if (/(voice|call|reception|inbound|outbound|telephony|tamil|multilingual)/i.test(q)) {
    return 'Our **Multilingual AI Voice Agents** handle inbound calls and outbound follow-ups 24/7 in Tamil, English, Hindi, and regional languages:\n\n• **Verified Calendar Booking:** Checks live Google/Outlook/Cal.com slots and confirms only after calendar acceptance.\n• **Human Transfer & CRM Sync:** Routes priority callers to your live team with context and logs automatic call transcripts & summaries.';
  }

  if (/(hms|hospital|clinic|emr|ehr|opd|ipd|icu|pharmacy|abdm|abha|doctor|patient)/i.test(q)) {
    return '**VIMS MediCore HMS** unites **40+ Outpatient and Inpatient clinical modules** on a multi-tenant cloud platform:\n\n• **Clinical AI:** Ambient SOAP voice scribe, ICD-10 coding assistance, and drug-allergy safety validation.\n• **Connected Hospital Ops:** Live OPD mobile tokens, <28-min synchronized IP discharge, ICU/NICU & OT suites, FEFO Pharmacy, Lab LIS, Radiology, and Cashless TPA.\n• **Mobile & Compliance:** Includes Doctor, Nursing, and Patient iOS/Android apps with ABDM/ABHA & DPDPA 2023 readiness.';
  }

  if (/(matlab|simulink|stateflow|mbd|hil|sil|mil|student|training|academy|workshop|college|fde|forward deploy)/i.test(q)) {
    return 'Our **VIMS Engineering & Applied AI Academy** runs two practical tracks for students, colleges, and aspiring engineers:\n\n1. **MATLAB, Simulink & Stateflow (MBD):** Vectorized M-Script, PID/LQR control loops, Stateflow FSMs, automotive/aerospace MIL/SIL/HIL verification, and Embedded Coder C/C++.\n2. **Forward Deployed Engineer (FDE) Bootcamp:** Hands-on client-facing AI engineering—shipping production Voice Agents, LLM pipelines, and full-stack automations.';
  }

  if (/(website|web|ecommerce|e-commerce|store|shop|landing|portal|redesign)/i.test(q)) {
    return 'We engineer **custom B2B websites, React/TypeScript web applications, and complete e-commerce stores** built around your brand:\n\n• High-speed responsive layouts, technical SEO foundation, embedded scheduling, and CRM lead pipelines.\n• Full online store architecture with product variants, search/filters, verified payment gateways, automated order emails, and team admin handover.';
  }

  if (/(automation|workflow|agent|n8n|crm|zoho|hubspot|whatsapp|lead)/i.test(q)) {
    return 'Our **AI Automations & Autonomous Agent Deployments** connect your ads, website, WhatsApp Business, and CRM (Zoho, HubSpot, Sheets) with zero manual copy-pasting:\n\n• Sub-60-second automated WhatsApp & email lead follow-up.\n• Multi-source lead deduplication, demo reminders, review routing, and custom tool-calling LLM agents.';
  }

  if (/(award|social eagle|summit|ceo|founder|vimal|team|about|who)/i.test(q)) {
    return '**VIMS Enterprise** is led by **Vimal Raj (Founder & CEO)** alongside **Gowtham Raj M (CFO)** and **GuruPrasath S (Product Manager)**.\n\nWe were honored on stage by **Social Eagle at the TN Digital Summit** for Digital Presence & Growth Innovation and recognized for Applied AI & Talent Excellence, serving 30+ organizations across healthcare, engineering, and commerce.';
  }

  return 'Hello! I am the **VIMS Enterprise AI Concierge**. Ask me anything about:\n\n• **AI Voice Agents** (multilingual inbound/outbound calls & booking)\n• **Custom Website & E-Commerce Creation**\n• **AI Automations & Agent Deployments**\n• **VIMS MediCore HMS** (40+ hospital modules)\n• **MATLAB MBD & Forward Deployed Engineer Academy**\n\nOr tap **Book Strategy Call** below to speak directly with Founder & CEO **Vimal Raj**.';
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json().catch(() => ({}));
    const messages = Array.isArray(body?.messages) ? body.messages : [];
    const latestUserMsg =
      [...messages].reverse().find((m: any) => m?.role === 'user')?.content || '';

    if (!latestUserMsg || typeof latestUserMsg !== 'string') {
      return Response.json({ reply: buildGroundedReply('') });
    }

    if (
      /(price|pricing|cost|rate|fee|budget|how much|rupee|inr|\$|₹|hosting|hostinger|vims card|nfc card)/i.test(
        latestUserMsg
      )
    ) {
      return Response.json({ reply: buildGroundedReply(latestUserMsg) });
    }

    const geminiKey = process.env.GEMINI_API_KEY;
    const gatewayToken =
      process.env.AI_GATEWAY_API_KEY ||
      process.env.VERCEL_OIDC_TOKEN ||
      request.headers.get('x-vercel-oidc-token');

    if (geminiKey) {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(
          geminiKey
        )}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: VIMS_SYSTEM_PROMPT }] },
            contents: messages.slice(-8).map((m: any) => ({
              role: m.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: String(m.content || '').slice(0, 1500) }],
            })),
            generationConfig: { temperature: 0.3, maxOutputTokens: 420 },
          }),
        }
      );

      if (geminiRes.ok) {
        const data: any = await geminiRes.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return Response.json({ reply: text });
      }
    }

    if (gatewayToken) {
      const gwRes = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${gatewayToken}`,
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          temperature: 0.3,
          max_tokens: 420,
          messages: [
            { role: 'system', content: VIMS_SYSTEM_PROMPT },
            ...messages.slice(-8).map((m: any) => ({
              role: m.role === 'assistant' ? 'assistant' : 'user',
              content: String(m.content || '').slice(0, 1500),
            })),
          ],
        }),
      });

      if (gwRes.ok) {
        const data: any = await gwRes.json();
        const text = data?.choices?.[0]?.message?.content;
        if (text) return Response.json({ reply: text });
      }
    }

    return Response.json({ reply: buildGroundedReply(latestUserMsg) });
  } catch (err) {
    console.error('VIMS chat handler error:', err);
    return Response.json({ reply: buildGroundedReply('') });
  }
}
