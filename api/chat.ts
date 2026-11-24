const VIMS_SYSTEM_PROMPT = `You are the official VIMS Enterprise AI Concierge on www.vimsenterprise.com.
Be warm, concise, executive, and strictly factual (2 to 3 short paragraphs or crisp bullet points max).

OFFICIAL VIMS ENTERPRISE GROUP KNOWLEDGE BASE:
- Parent Company: VIMS Enterprise (Established March 2022, MSME Registered: UDYAM-TN-04-0082183, GSTIN: 33BSRPS0448G1ZH, Tamil Nadu, India, serving global B2B & healthcare teams).
- Group Ecosystem: VIMS Enterprise is the parent B2B engineering group powering Jill-Jill (Voice AI: https://www.jilljill.in/) and Embedded Skills (Automotive & MATLAB Academy: https://embskills.vimsenterprise.com/).
- Verified Leadership Roster:
  1. Gowtham Raj M — Chief Executive Officer (CEO) · 15+ years automotive & industrial engineering leadership across APTIV, KPIT & Danlaw (ADAS, V2X, IVI, ISO-26262, Agile Scrum).
  2. Vimal Raj — Founder & Chief Technology Officer (CTO) · Systems architect driving applied AI, Jill-Jill Voice AI, custom web systems, MediCore HMS, and FDE mentorship.
  3. GuruPrasath S — Project Manager · Leads sprint execution across voice, web, CRM & automation delivery.
- Verified Recognition & Summit Presence:
  - Honored on stage by Social Eagle at the TN Digital Summit for Digital Presence & Growth.
- Verified Clients (30+ organizations): Hexuno Technologies, Radent Engineering, Piest Systems, Nangai Pharmacy, Ameer Jewellery, ChipTip, and multi-specialty hospitals.
- Direct Contact & Booking:
  - Email: vimal@vimsenterprise.com
  - Direct CTO WhatsApp / Phone: +91 99406 60868 (Secondary: +91 97896 92447)
  - 30-Minute Google Meet Discovery Call: https://cal.com/vims-003/vims-enterprise

FIVE SPECIALIZED B2B NICHES:
1. Voice AI (/ai-voice-agents · Powered by Jill-Jill: https://www.jilljill.in/):
   - Multilingual 24/7 inbound & outbound voice agents (Tamil, English, Hindi & regional languages).
   - Answers FAQs, qualifies leads, books live Google Calendar / Cal.com slots, transfers priority callers to humans, and logs structured CRM call summaries.
2. Custom Website & E-Commerce Creation (/website-creation):
   - Bespoke B2B websites, React/TypeScript web applications, and online stores (catalog, variants, cart, payment checkout, SEO, analytics, and team handover).
3. AI Automations & Autonomous Agent Deployments (/ai-automation):
   - Custom n8n & grounded LLM agent pipelines, Meta/LinkedIn/Web lead deduplication into Zoho/HubSpot CRMs, sub-60s WhatsApp/email outreach, and document workflows.
4. VIMS MediCore HMS (/hms-ecosystem):
   - Connected hospital OS with 40+ OP/IP clinical modules (ABHA, OPD/CPOE, Ambient AI SOAP Scribe, Drug Safety, Lab LIS, Cloud PACS, FEFO Pharmacy, OT, ICU Telemetry, Blood Bank, Cashless TPA).
   - Includes native Doctor, Nursing, and Patient iOS/Android apps with ABDM/ABHA & DPDPA 2023 compliance.
5. Academy (/matlab-fde-academy · Integrated with Embedded Skills: https://embskills.vimsenterprise.com/):
   - Automotive Embedded & MATLAB/Simulink/Stateflow MBD (CAN/CAN FD, LIN, UDS, AUTOSAR, ISO 26262, MIL/SIL/HIL) via Embedded Skills.
   - Forward Deployed Engineer (FDE) Bootcamp: client-facing production AI & agent engineering for students & college cohorts.

STRICT GUARDRAILS (NEVER VIOLATE):
1. ZERO PRICING DISCLOSURE: Never quote, guess, or mention any currency prices, rupees, dollars, fees, or packages under any circumstance. Explain that every VIMS scope is custom tailored and invite them to book a discovery call with Founder & CTO Vimal Raj.
2. NO VIMS CARDS & NO HOSTING SERVICES: VIMS Enterprise does not sell NFC cards (VIMS Cards) or standalone web hosting packages.`;

function buildGroundedReply(userText: string): string {
  const q = userText.toLowerCase();
  const sections: string[] = [];

  if (/(hosting|hostinger|vps hosting|domain hosting|vims card|nfc card|business card|mocha)/i.test(q)) {
    sections.push(
      'VIMS Enterprise does not offer hosting packages or NFC cards. We focus exclusively on five B2B niches: **Voice AI (Jill-Jill)**, **Custom Web Creation**, **AI Automations**, **VIMS MediCore HMS**, and **Academy (Embedded Skills & FDE)**.'
    );
  }

  if (/(award|social eagle|summit|ceo|cto|founder|gowtham|vimal|guru|team|about|who)/i.test(q)) {
    sections.push(
      '**VIMS Enterprise** is led by **Gowtham Raj M (CEO · 15+ yrs automotive & enterprise leadership)**, **Vimal Raj (Founder & CTO)**, and **GuruPrasath S (Project Manager)**, recognized on stage by **Social Eagle** at the TN Digital Summit.'
    );
  }

  if (/(voice|call|reception|inbound|outbound|telephony|tamil|jill)/i.test(q)) {
    sections.push(
      'Our **Voice AI** platform (**Jill-Jill**, https://www.jilljill.in/) handles 24/7 inbound and outbound conversations in Tamil, English, Hindi & regional languages—with verified calendar booking, human handoff, and automatic CRM sync.'
    );
  }

  if (/(hms|hospital|clinic|emr|ehr|opd|ipd|icu|pharmacy|abdm|abha|doctor|patient)/i.test(q)) {
    sections.push(
      '**VIMS MediCore HMS** connects **40+ OP and IP clinical modules**—uniting Patient Apps, Ambient AI SOAP Scribe, Cloud PACS/LIS, ICU Telemetry, OT, FEFO Pharmacy, and Cashless TPA with ABDM & DPDPA 2023 compliance.'
    );
  }

  if (/(matlab|simulink|stateflow|mbd|hil|sil|mil|student|training|academy|workshop|college|fde|forward|embedded|embskills)/i.test(q)) {
    sections.push(
      'Our **VIMS Academy** pairs **Embedded Skills** (https://embskills.vimsenterprise.com/ — 24 automotive ECU protocol & MATLAB/Simulink MBD modules) with our **Forward Deployed Engineer (FDE)** AI bootcamp for students and colleges.'
    );
  }

  if (/(website|web|ecommerce|e-commerce|store|shop|landing|portal|redesign)/i.test(q)) {
    sections.push(
      'We architect custom B2B websites, React web apps, and end-to-end e-commerce stores—built cleanly with responsive speed, search filters, verified payment checkout, SEO foundations, and full admin handover.'
    );
  }

  if (/(automation|workflow|agent|n8n|crm|zoho|hubspot|whatsapp|lead)/i.test(q)) {
    sections.push(
      'Our **AI Automations & Agent Deployments** connect Meta/LinkedIn Ads, websites, WhatsApp Business, and CRM systems (Zoho, HubSpot, Sheets) with sub-60s lead response and grounded tool-calling LLM workflows.'
    );
  }

  if (/(price|pricing|cost|rate|fee|budget|charge|package|how much|rupee|inr|\$|₹)/i.test(q)) {
    sections.push(
      'Every VIMS Enterprise engagement is tailored to your workflows, clinical modules, or cohort goals—so we never publish generic pricing. Tap **Book a Call** below to schedule a 30-minute session with Founder & CTO **Vimal Raj** (or WhatsApp **+91 99406 60868**) for a custom scope.'
    );
  }

  if (sections.length > 0) {
    return sections.join('\n\n');
  }

  return 'Hello! I’m the **VIMS Enterprise Concierge**. Ask me about **Voice AI (Jill-Jill)**, **Web Creation**, **AI Automations**, **MediCore HMS**, or **Academy (Embedded Skills & FDE)**—or book directly with **Vimal Raj (Founder & CTO)**.';
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
      /(price|pricing|cost|rate|fee|budget|how much|rupee|inr|\$|₹|hosting|hostinger|vims card|nfc card|mocha)/i.test(
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
            generationConfig: { temperature: 0.3, maxOutputTokens: 360 },
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
          max_tokens: 360,
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
