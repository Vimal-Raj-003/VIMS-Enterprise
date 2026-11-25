import { Page, SummitPhoto, TeamMember } from './types';

export const GROUP_PLATFORMS = {
  jilljill: {
    name: 'Jill-Jill',
    url: 'https://www.jilljill.in/',
    tagline: 'AI Voice Agents Platform',
  },
  embskills: {
    name: 'Embedded Skills',
    url: 'https://embskills.vimsenterprise.com/',
    tagline: 'Automotive Embedded & MATLAB Academy',
  },
};

export const COMPANY_CONTACT = {
  companyName: 'VIMS Enterprise',
  ceoName: 'Gowtham Raj M',
  founderName: 'Vimal Raj',
  ctoName: 'Vimal Raj',
  pmName: 'GuruPrasath S',
  email: 'vimal@vimsenterprise.com',
  phone: '9940660868',
  phoneFormatted: '+91 99406 60868',
  secondaryPhoneFormatted: '+91 97896 92447',
  whatsappUrl:
    'https://wa.me/919940660868?text=Hi%20Vimal%2C%20I%20visited%20vimsenterprise.com%20and%20would%20like%20to%20schedule%20a%20discovery%20call.',
  bookingUrl: 'https://cal.com/vims-003/vims-enterprise',
  gstin: '33BSRPS0448G1ZH',
  udyam: 'UDYAM-TN-04-0082183',
  location: 'Tamil Nadu, India · Serving Global Enterprise Teams',
};

export interface SolutionPillarMeta {
  index: string;
  page: Page;
  slug: string;
  shortTitle: string;
  title: string;
  badge: string;
  summary: string;
  imageUrl: string;
  platformName?: string;
  externalUrl?: string;
  bullets: string[];
  accentColor: string;
}

export const CORE_PILLARS: SolutionPillarMeta[] = [
  {
    index: '01',
    page: Page.VoiceAgents,
    slug: '/ai-voice-agents',
    shortTitle: 'Voice AI',
    title: 'Multilingual AI Voice Agents',
    badge: 'Powered by Jill-Jill',
    summary: '24/7 inbound & outbound voice agents that answer naturally, qualify leads, book slots, and sync CRMs.',
    imageUrl: '/images/human/voice-ai-human.webp',
    platformName: 'Jill-Jill',
    externalUrl: GROUP_PLATFORMS.jilljill.url,
    bullets: [
      'Natural Tamil, English & Hindi conversations',
      'Live Google Calendar & Cal.com slot booking',
      'Warm human transfer & instant CRM transcripts',
    ],
    accentColor: '#1D4ED8',
  },
  {
    index: '02',
    page: Page.WebsiteCreation,
    slug: '/website-creation',
    shortTitle: 'Web Creation',
    title: 'Custom Websites & Online Stores',
    badge: 'Web Engineering',
    summary: 'Human-centered corporate sites, custom web apps, and online stores built cleanly around your brand.',
    imageUrl: '/images/human/web-studio-human.webp',
    bullets: [
      'Bespoke B2B corporate & SaaS React platforms',
      'Full variant catalogs, carts & verified checkouts',
      'Core Web Vitals speed & technical SEO setup',
    ],
    accentColor: '#0F766E',
  },
  {
    index: '03',
    page: Page.AIAutomation,
    slug: '/ai-automation',
    shortTitle: 'AI Automations',
    title: 'Autonomous Agents & CRM Workflows',
    badge: 'Operational Workflows',
    summary: 'End-to-end CRM, WhatsApp, and grounded AI workflows that remove repetitive manual bottlenecks.',
    imageUrl: '/images/human/ai-automation-human.webp',
    bullets: [
      'Sub-60s WhatsApp & email lead follow-up engine',
      'Multi-source CRM deduplication (Zoho / HubSpot)',
      'Tool-calling AI agents with human approval gates',
    ],
    accentColor: '#1D4ED8',
  },
  {
    index: '04',
    page: Page.HospitalManagement,
    slug: '/hms-ecosystem',
    shortTitle: 'HMS',
    title: 'VIMS MediCore Hospital OS',
    badge: '40+ Clinical Modules',
    summary: 'Connected hospital platform uniting patient apps, AI clinical scribe, ICU telemetry, and ABDM workflows.',
    imageUrl: '/images/human/hms-care-human.webp',
    platformName: 'MediCore OS',
    bullets: [
      '21 OP + 19 IP modules incl. OT, ICU & Blood Bank',
      'Ambient AI SOAP voice scribe & drug-safety checks',
      'Doctor, Nurse & Patient apps · ABDM & DPDPA ready',
    ],
    accentColor: '#0F766E',
  },
  {
    index: '05',
    page: Page.MatlabAcademy,
    slug: '/matlab-fde-academy',
    shortTitle: 'Academy',
    title: 'Embedded Skills & FDE Academy',
    badge: 'Engineering & AI Talent',
    summary: 'Practical mentorship in automotive ECUs, MATLAB/Simulink MBD, and Forward Deployed AI engineering.',
    imageUrl: '/images/human/academy-students-human.webp',
    platformName: 'Embedded Skills',
    externalUrl: GROUP_PLATFORMS.embskills.url,
    bullets: [
      '24 ECU protocol labs via Embedded Skills portal',
      'MATLAB, Simulink & Stateflow MIL / SIL / HIL',
      'Forward Deployed Engineer (FDE) AI mentorship',
    ],
    accentColor: '#1D4ED8',
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
  {
    name: 'Hexuno Technologies',
    logo: '/images/clients/hexuno-clean.webp',
    logoDark: '/images/clients/hexuno-dark.webp',
    sector: 'Engineering Systems',
  },
  {
    name: 'Radent Engineering',
    logo: '/images/clients/radent-clean.webp',
    logoDark: '/images/clients/radent-dark.webp',
    sector: 'Precision Manufacturing',
  },
  {
    name: 'Piest Systems',
    logo: '/images/clients/piest-clean.webp',
    logoDark: '/images/clients/piest-dark.webp',
    sector: 'Embedded & IoT',
  },
  {
    name: 'Nangai Pharmacy',
    logo: '/images/clients/nangai-pharmacy-clean.webp',
    logoDark: '/images/clients/nangai-pharmacy-dark.webp',
    sector: 'Healthcare & Retail',
  },
  {
    name: 'Ameer Jewellery',
    logo: '/images/clients/ameer-jewellery-clean.webp',
    logoDark: '/images/clients/ameer-jewellery-dark.webp',
    sector: 'Luxury Commerce',
  },
  {
    name: 'ChipTip',
    logo: '/images/clients/chiptip-clean.webp',
    logoDark: '/images/clients/chiptip-dark.webp',
    sector: 'Digital Commerce',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'gowtham',
    name: 'Gowtham Raj M',
    role: 'Chief Executive Officer (CEO)',
    badge: 'CEO · 15+ Yrs Experience',
    imageUrl: '/images/brand/gowtham-ceo.webp',
    shortBio:
      '15+ years across APTIV, KPIT & Danlaw steering automotive systems engineering, Agile governance, and B2B growth.',
    description:
      'As Chief Executive Officer of VIMS Enterprise, Gowtham Raj brings over 15 years of mission-critical automotive and industrial systems leadership across APTIV, KPIT, and Danlaw. A veteran Agile Scrum Master and Technical Leader spanning ADAS, V2X, IVI, and ISO-26262 safety compliance, he ensures every VIMS engagement runs with industrial rigor and measurable ROI.',
    expertise: [
      'Executive B2B Strategy & Governance',
      'Automotive Systems (ADAS · V2X · IVI)',
      'ISO-26262 Functional Safety & V&V',
      'Agile Scrum & Enterprise Delivery',
      'OEM & Tier-1 Partnership Architecture',
    ],
    experience:
      '15+ years leading cross-functional automotive engineering, validation, and digital transformation programs with Tier-1 leaders including APTIV, Danlaw, and KPIT.',
    email: 'gowtham@vimsenterprise.com',
    linkedin: 'https://linkedin.com/in/gowthamraj-m',
  },
  {
    id: 'vimal',
    name: 'Vimal Raj',
    role: 'Founder & Chief Technology Officer (CTO)',
    badge: 'Founder & CTO',
    imageUrl: '/images/brand/vimal-ceo.webp',
    shortBio:
      'Systems architect leading applied AI, Jill-Jill Voice AI, MediCore HMS, custom web systems, and FDE mentorship.',
    description:
      'Vimal Raj founded VIMS Enterprise in 2022 to make industrial-grade AI and full-stack software feel effortlessly human. Architecting across conversational voice agents (Jill-Jill), multi-tenant healthcare platforms (MediCore HMS), custom B2B web systems, and MATLAB MBD / Forward Deployed Engineer cohorts (Embedded Skills), he works directly with clients from blueprint to live production.',
    expertise: [
      'Conversational Voice AI (Jill-Jill)',
      'Multi-Agent LLM & CRM Architectures',
      'MediCore Hospital OS Engineering',
      'MATLAB MBD & Forward Deployed AI',
      'Full-Stack B2B Web Systems',
    ],
    experience:
      'Honored on stage by Social Eagle at the TN Digital Summit for Digital Presence & Growth, Vimal has architected systems for 30+ organizations while mentoring aspiring MATLAB and Forward Deployed AI engineers.',
    email: 'vimal@vimsenterprise.com',
    phone: '+91 99406 60868',
    whatsappUrl:
      'https://wa.me/919940660868?text=Hi%20Vimal%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20VIMS%20Enterprise.',
  },
  {
    id: 'guru',
    name: 'GuruPrasath S',
    role: 'Project Manager',
    badge: 'Project Manager',
    imageUrl: '/images/brand/guru-pm.webp',
    shortBio:
      'Orchestrates sprint execution across Voice AI, custom websites, CRM pipelines, and live client onboarding.',
    description:
      'GuruPrasath leads project delivery and operational execution across VIMS Enterprise—turning technical blueprints into thoroughly tested web platforms, multilingual voice call flows, and reliable multi-system CRM automations.',
    expertise: [
      'Agile Sprint & Delivery Management',
      'Voice Agent QA & Call-Flow Mapping',
      'CRM & WhatsApp Workflow Rollout',
      'Client Onboarding & Admin Training',
      'Web & Storefront Launch Operations',
    ],
    experience:
      'Coordinates multi-disciplinary engineering, design, and client operations teams from discovery scoping through production launch and post-go-live support.',
    email: 'guru@vimsenterprise.com',
    linkedin: 'https://linkedin.com/in/guruprasath-s',
  },
];

export const SUMMIT_GALLERY: SummitPhoto[] = [
  {
    id: 'social-eagle-trophy',
    src: '/images/brand/social-eagle-award-stage.webp',
    badge: 'TN Digital Summit · Stage Honour',
    title: 'Social Eagle Award — Digital Presence & Growth',
    caption: 'VIMS Enterprise team honored on stage with the Social Eagle trophy at the TN Digital Summit.',
  },
  {
    id: 'dr-velumani',
    src: '/images/brand/summit-dr-velumani.webp',
    badge: 'Industry Leadership Connect',
    title: 'With Dr. A. Velumani · Founder, Thyrocare',
    caption: 'Vimal Raj and VIMS leadership connecting with healthcare & business icon Dr. A. Velumani.',
  },
  {
    id: 'irfan-view',
    src: '/images/brand/summit-irfan.webp',
    badge: 'Creator & Digital Presence',
    title: "With Irfan (Irfan's View) · Digital Creator",
    caption: "Behind the scenes with prominent YouTube creator Irfan at the TN Digital Summit.",
  },
  {
    id: 'actor-karunakaran',
    src: '/images/brand/summit-karunakaran.webp',
    badge: 'Summit Spotlight',
    title: 'With Actor Karunakaran · Gowtham & Vimal',
    caption: 'CEO Gowtham Raj and Founder & CTO Vimal Raj meeting Actor Karunakaran at the summit.',
  },
  {
    id: 'blue-carpet',
    src: '/images/brand/summit-blue-carpet.webp',
    badge: 'Social Eagle Blue Carpet',
    title: 'VIMS Leadership on the Blue Carpet',
    caption: 'Gowtham Raj and Vimal Raj representing VIMS Enterprise Group at the TN Digital Summit.',
  },
  {
    id: 'ai-delegation',
    src: '/images/brand/tn-summit-ai-automation.jpg',
    badge: 'AI Automation Practice',
    title: 'VIMS Enterprise AI Automation Delegation',
    caption: 'Showcasing applied conversational AI, automations, and B2B engineering solutions.',
  },
];

export const PAGE_META: Record<Page, { title: string; description: string }> = {
  [Page.Home]: {
    title: 'VIMS Enterprise — Voice AI, Custom Web Systems, AI Automations, HMS & Engineering Academy',
    description:
      'VIMS Enterprise Group: Multilingual Voice AI (Jill-Jill), Custom B2B Websites, Autonomous AI Agents, MediCore HMS, and MATLAB/Automotive Academy (Embedded Skills).',
  },
  [Page.VoiceAgents]: {
    title: 'Voice AI · Powered by Jill-Jill | VIMS Enterprise',
    description:
      'Multilingual B2B AI voice agents for inbound enquiries, outbound sales, live calendar booking, and automatic CRM sync — powered by Jill-Jill.',
  },
  [Page.WebsiteCreation]: {
    title: 'Custom Website & E-Commerce Creation | VIMS Enterprise',
    description:
      'Bespoke B2B corporate websites, custom React web apps, and high-converting online stores engineered around your brand.',
  },
  [Page.AIAutomation]: {
    title: 'AI Automations & Autonomous Agent Deployments | VIMS Enterprise',
    description:
      'Production multi-agent pipelines connecting WhatsApp Business, CRM, Meta/LinkedIn Ads, and internal databases.',
  },
  [Page.HospitalManagement]: {
    title: 'HMS · VIMS MediCore Hospital Operating System',
    description:
      'Visual connected hospital ecosystem: 40+ OP/IP clinical modules, Ambient AI voice scribe, ICU telemetry, PACS/LIS, and ABDM/ABHA apps.',
  },
  [Page.MatlabAcademy]: {
    title: 'Academy · Embedded Skills & Forward Deployed AI | VIMS Enterprise',
    description:
      'Hands-on automotive ECU protocols, MATLAB, Simulink & Stateflow MBD via Embedded Skills, plus Forward Deployed Engineer (FDE) AI mentorship.',
  },
  [Page.About]: {
    title: 'About VIMS Enterprise — Leadership, Story & Summit Recognition',
    description:
      'Meet CEO Gowtham Raj M, Founder & CTO Vimal Raj, Project Manager GuruPrasath S, and explore our Social Eagle Award & TN Digital Summit moments.',
  },
  [Page.Contact]: {
    title: 'Contact VIMS Enterprise — Book a Strategy Call',
    description:
      'Schedule a 30-minute discovery call or message Vimal Raj directly on WhatsApp (+91 99406 60868) or at vimal@vimsenterprise.com.',
  },
  [Page.TeamProfile]: {
    title: 'Executive Leadership Profile | VIMS Enterprise',
    description: 'Executive profile and engineering background at VIMS Enterprise.',
  },
  [Page.PrivacyPolicy]: {
    title: 'Privacy Policy | VIMS Enterprise',
    description:
      'Privacy Policy for VIMS Enterprise covering customer data collection, WhatsApp communication, AI voice agents, data security, and deletion requests.',
  },
  [Page.TermsOfService]: {
    title: 'Terms of Service | VIMS Enterprise',
    description:
      'Terms of Service governing access to VIMS Enterprise websites, software platforms, AI deployments, and training programs.',
  },
  [Page.DataDeletion]: {
    title: 'Personal Data Deletion Instructions | VIMS Enterprise',
    description:
      'Instructions to request deletion of personal data held by VIMS Enterprise across web enquiries, WhatsApp, CRM records, and AI voice interactions.',
  },
};
