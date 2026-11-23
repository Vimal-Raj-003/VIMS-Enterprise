import { Page, TeamMember } from './types';

export const COMPANY_CONTACT = {
  companyName: 'VIMS Enterprise',
  founderName: 'Vimal Raj',
  email: 'vimal@vimsenterprise.com',
  phone: '9940660868',
  phoneFormatted: '+91 99406 60868',
  secondaryPhoneFormatted: '+91 97896 92447',
  whatsappUrl: 'https://wa.me/919940660868?text=Hi%20Vimal%2C%20I%20visited%20vimsenterprise.com%20and%20would%20like%20to%20schedule%20a%20discovery%20call.',
  bookingUrl: 'https://cal.com/vims-003/vims-enterprise',
  gstin: '33BSRPS0448G1ZH',
  udyam: 'UDYAM-TN-04-0082183',
  location: 'Tamil Nadu, India · Serving Global Enterprise Teams',
};

export interface SolutionPillarMeta {
  page: Page;
  slug: string;
  shortTitle: string;
  title: string;
  badge: string;
  summary: string;
}

export const CORE_PILLARS: SolutionPillarMeta[] = [
  {
    page: Page.VoiceAgents,
    slug: '/ai-voice-agents',
    shortTitle: 'AI Voice Agents',
    title: 'Multilingual AI Voice Agents',
    badge: 'Conversational AI',
    summary: 'Human-like inbound & outbound voice agents that answer enquiries, qualify leads, route calls, and book calendar appointments 24/7.',
  },
  {
    page: Page.WebsiteCreation,
    slug: '/website-creation',
    shortTitle: 'Website & E-Commerce',
    title: 'Custom Website & Store Engineering',
    badge: 'Web Architecture',
    summary: 'Bespoke B2B web platforms, conversion-engineered SaaS portals, and end-to-end e-commerce stores built around your brand.',
  },
  {
    page: Page.AIAutomation,
    slug: '/ai-automation',
    shortTitle: 'AI Automations & Agents',
    title: 'Autonomous Workflows & Agent Deployments',
    badge: 'Agentic Ops',
    summary: 'Production multi-agent pipelines, CRM & WhatsApp orchestration, lead consolidation, and intelligent operational workflows.',
  },
  {
    page: Page.HospitalManagement,
    slug: '/hms-ecosystem',
    shortTitle: 'MediCore HMS',
    title: 'VIMS MediCore Hospital OS',
    badge: 'Healthcare Flagship',
    summary: '40+ OP/IP clinical modules, ambient AI voice scribe, ICU telemetry, PACS/LIS diagnostics, mobile apps, and ABDM/ABHA compliance.',
  },
  {
    page: Page.MatlabAcademy,
    slug: '/matlab-fde-academy',
    shortTitle: 'MATLAB & FDE Academy',
    title: 'MATLAB MBD & Forward Deployed Engineer Training',
    badge: 'Talent & Academy',
    summary: 'Industry-grade mentorship for students & engineers in MATLAB, Simulink, Stateflow (MIL/SIL/HIL), and Forward Deployed AI Engineering.',
  },
];

export const PAGE_PATHS: Record<Page, string> = {
  [Page.Home]: '/',
  [Page.VoiceAgents]: '/ai-voice-agents',
  [Page.WebsiteCreation]: '/website-creation',
  [Page.AIAutomation]: '/ai-automation',
  [Page.HospitalManagement]: '/hms-ecosystem',
  [Page.MatlabAcademy]: '/matlab-fde-academy',
  [Page.About]: '/about',
  [Page.Contact]: '/contact',
  [Page.TeamProfile]: '/leadership',
  [Page.PrivacyPolicy]: '/privacy-policy',
  [Page.TermsOfService]: '/terms-of-service',
  [Page.DataDeletion]: '/data-deletion',
};

export const VERIFIED_CLIENTS = [
  { name: 'Hexuno Technologies', logo: '/images/clients/hexuno.webp', sector: 'Engineering Technology' },
  { name: 'Radent Engineering', logo: '/images/clients/radent.webp', sector: 'Precision Manufacturing' },
  { name: 'Piest Systems', logo: '/images/clients/piest.webp', sector: 'Embedded & IoT Systems' },
  { name: 'Nangai Pharmacy', logo: '/images/clients/nangai-pharmacy.webp', sector: 'Healthcare & Retail' },
  { name: 'Ameer Jewellery', logo: '/images/clients/ameer-jewellery.webp', sector: 'Luxury Commerce' },
  { name: 'ChipTip', logo: '/images/clients/chiptip.webp', sector: 'Digital Commerce' },
  { name: 'Mocha', logo: '/images/clients/mocha.webp', sector: 'Consumer Brand' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'vimal',
    name: 'Vimal Raj',
    role: 'Founder & Chief Executive Officer',
    badge: 'Founder & CEO',
    imageUrl: '/images/brand/vimal-ceo.webp',
    shortBio: 'Systems architect and AI strategist leading VIMS Enterprise across conversational voice AI, bespoke web engineering, MediCore HMS, and Forward Deployed Engineer mentorship.',
    description:
      'Vimal Raj founded VIMS Enterprise with a clear conviction: enterprise technology should feel human, move fast, and solve real operational bottlenecks without complexity. Blending deep systems engineering roots—spanning automotive/control-systems MATLAB architecture, multi-tenant healthcare platforms, and applied generative AI—he works directly with founders, hospital directors, and engineering teams from initial blueprint to production launch.',
    expertise: [
      'Applied GenAI & Voice Agent Architecture',
      'Forward Deployed AI Engineering',
      'Enterprise Web & SaaS Systems',
      'Healthcare Digital Transformation (HMS)',
      'MATLAB, Simulink & Control Systems (MBD)',
      'Executive Product Strategy',
    ],
    experience:
      'Recognized at the TN Digital Summit by Social Eagle for Digital Presence & AI Innovation, Vimal has guided 30+ organizations across healthcare, engineering, and B2B commerce while mentoring the next generation of MATLAB and Forward Deployed Engineers.',
    email: 'vimal@vimsenterprise.com',
  },
  {
    id: 'gowtham',
    name: 'Gowtham Raj M',
    role: 'Chief Financial Officer & Enterprise Strategy',
    badge: 'CFO & Strategy',
    imageUrl: '/images/brand/gowtham-cfo.webp',
    shortBio: '15+ years of industrial and enterprise governance steering financial architecture, operational scale, and long-term B2B client partnerships.',
    description:
      'With over 15 years of industrial and enterprise leadership, Gowtham Raj oversees financial governance, enterprise structuring, and delivery discipline at VIMS Enterprise—ensuring every software and AI deployment aligns with measurable business outcomes.',
    expertise: [
      'Enterprise Governance & Strategy',
      'B2B Partnership Structuring',
      'Operational Risk & Compliance',
      'Scalable Delivery Operations',
      'Industrial Systems Advisory',
      'Program Execution Oversight',
    ],
    experience:
      '15+ years of cross-sector experience guiding multi-disciplinary engineering and digital programs from scoping through sustained multi-year operations.',
    email: 'gowtham@vimsenterprise.com',
    linkedin: 'https://linkedin.com/in/gowthamraj-m',
  },
  {
    id: 'guru',
    name: 'GuruPrasath S',
    role: 'Product & Project Manager',
    badge: 'Product Delivery',
    imageUrl: '/images/brand/guru-pm.webp',
    shortBio: 'Drives end-to-end execution of AI voice agents, custom web platforms, and multi-system CRM/automation deployments.',
    description:
      'GuruPrasath orchestrates day-to-day product delivery across VIMS Enterprise—translating client discovery blueprints into tested, production-ready web platforms, voice workflows, and autonomous agent pipelines.',
    expertise: [
      'Agile Product & Sprint Delivery',
      'AI Workflow & CRM Integration',
      'Voice Agent QA & Call-Flow Mapping',
      'Full-Lifecycle Client Onboarding',
      'SaaS Operations Management',
    ],
    experience:
      'Specialist in taking B2B web systems, e-commerce platforms, and multi-channel AI automation pipelines from wireframe to reliable production launch.',
    email: 'guru@vimsenterprise.com',
    linkedin: 'https://linkedin.com/in/guruprasath-s',
  },
];

export const PAGE_META: Record<Page, { title: string; description: string }> = {
  [Page.Home]: {
    title: 'VIMS Enterprise — AI Voice Agents, Custom Web Systems, MediCore HMS & Engineering Academy',
    description:
      'Award-winning B2B engineering & AI partner led by Vimal Raj. Multilingual AI Voice Agents, Custom Websites & E-Commerce, Autonomous Agent Deployments, MediCore HMS, and MATLAB/FDE Training.',
  },
  [Page.VoiceAgents]: {
    title: 'AI Voice Agents for Inbound & Outbound Business Calls | VIMS Enterprise',
    description:
      'Human-like, multilingual AI voice agents configured around your business to answer routine enquiries, qualify leads, book calendar appointments, and sync your CRM.',
  },
  [Page.WebsiteCreation]: {
    title: 'Custom B2B Website & E-Commerce Engineering | VIMS Enterprise',
    description:
      'High-converting custom websites, SaaS web applications, and e-commerce platforms engineered with clean UX, mobile speed, payment integration, and conversion architecture.',
  },
  [Page.AIAutomation]: {
    title: 'AI Automations & Autonomous Agent Deployments | VIMS Enterprise',
    description:
      'Production multi-agent workflows, WhatsApp & CRM automation, instant lead follow-up, and custom LLM pipelines engineered for zero manual bottlenecks.',
  },
  [Page.HospitalManagement]: {
    title: 'VIMS MediCore HMS — Connected Hospital Management System & Clinical AI',
    description:
      '40+ OP & IP clinical modules, ambient AI voice scribe, connected ICU telemetry, cloud PACS/LIS, Doctor/Patient/Nursing apps, and ABDM/ABHA compliance.',
  },
  [Page.MatlabAcademy]: {
    title: 'MATLAB, Simulink MBD & Forward Deployed Engineer (FDE) Training | VIMS Academy',
    description:
      'Practical engineering mentorship for students and professionals: MATLAB, Simulink, Stateflow, MIL/SIL/HIL control systems, and Forward Deployed AI Engineering.',
  },
  [Page.About]: {
    title: 'About VIMS Enterprise — Leadership, Story & Social Eagle Recognition',
    description:
      'Meet Founder & CEO Vimal Raj and the VIMS Enterprise team—recognized by Social Eagle at the TN Digital Summit for Digital Presence and Talent Excellence.',
  },
  [Page.Contact]: {
    title: 'Book a Strategy Call with Vimal Raj | VIMS Enterprise',
    description:
      'Schedule a 30-minute discovery session or connect with VIMS Enterprise at vimal@vimsenterprise.com or +91 99406 60868.',
  },
  [Page.TeamProfile]: {
    title: 'Leadership Profile | VIMS Enterprise',
    description: 'Meet the leadership and product engineering team behind VIMS Enterprise.',
  },
  [Page.PrivacyPolicy]: {
    title: 'Privacy Policy | VIMS Enterprise',
    description: 'Privacy Policy for VIMS Enterprise covering customer data collection, WhatsApp communication, AI voice agents, data security, and deletion requests.',
  },
  [Page.TermsOfService]: {
    title: 'Terms of Service | VIMS Enterprise',
    description: 'Terms of Service governing access to VIMS Enterprise websites, software platforms, AI deployments, and training programs.',
  },
  [Page.DataDeletion]: {
    title: 'Personal Data Deletion Instructions | VIMS Enterprise',
    description: 'Instructions to request deletion of personal data held by VIMS Enterprise across web enquiries, WhatsApp, CRM records, and AI voice interactions.',
  },
};
