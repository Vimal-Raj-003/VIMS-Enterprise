
import { Page } from './types';

export const COMPANY_CONTACT = {
  email: 'Vimal@vimsenterprise.com',
  phone: '8122259505',
  phoneFormatted: '+91 8122259505',
  whatsappUrl: 'https://wa.me/918122259505',
  bookingUrl: 'https://cal.com/vims-003/vims-enterprise'
};

export const NAV_LINKS = [
  { name: Page.Home, path: '#home' },
  { name: Page.About, path: '#about' },
  { name: Page.Contact, path: '#contact' }
];

// Highlighted Top Two Core Enterprise Pillars
export const PRIMARY_SERVICES = [
  { name: Page.AIAutomation, path: '#ai-automation', badge: 'Flagship AI' },
  { name: Page.CostEstimation, path: '#cost-estimation', badge: 'Engineering & Sourcing' }
];

// Growth and Digital Suite combined under dropdown
export const GROWTH_SUITE_PAGES = [
  { name: Page.LinkedInGrowth, path: '#linkedin-growth', desc: 'Personal branding & authority engine' },
  { name: Page.VIMSCards, path: '#vims-cards', desc: 'Smart NFC & digital identity cards' },
  { name: Page.JillJillAI, path: '#jilljill-ai', desc: '24x7 intelligent voice sales agent' },
  { name: Page.DigitalMarketing, path: '#digital-marketing', desc: 'Performance marketing & SEO' },
];

export const ALL_SERVICES = [
  ...PRIMARY_SERVICES,
  ...GROWTH_SUITE_PAGES
];

export const SERVICE_PAGES = ALL_SERVICES;

export const PAGE_META: Record<Page, { title: string; description: string }> = {
    [Page.Home]: {
        title: 'VIMS – AI Automation, Should-Costing & Digital Growth Ecosystem',
        description: 'VIMS empowers enterprises and manufacturers with autonomous AI workflows, scientific mechanical should-costing (Sheet Metal, Plastic, Die Casting, Machining), and end-to-end digital growth.'
    },
    [Page.AIAutomation]: {
        title: 'Enterprise AI Automation & Autonomous Agents | VIMS',
        description: 'Streamline business operations with custom LLM-powered autonomous agent workforces, lead capture, CRM pipelines, and intelligent process automation.'
    },
    [Page.CostEstimation]: {
        title: 'Mechanical Cost Estimation, Sheet Costing & Supplier Negotiation | VIMS',
        description: 'Scientific bottom-up should-costing, sheet metal costing, plastic injection molding, die casting, and CNC machining estimation with fact-based supplier negotiation intelligence.'
    },
    [Page.LinkedInGrowth]: {
        title: 'LinkedIn Growth & Personal Branding | VIMS',
        description: 'Turn LinkedIn into a 24x7 growth engine with our expert content creation, profile optimization, and personal branding solutions for founders and CXOs.'
    },
    [Page.VIMSCards]: {
        title: 'VIMS Cards – Digital Identity Solutions | VIMS',
        description: 'Achieve 2X sales growth with VIMS Cards, the modern, eco-friendly digital business card solution with NFC and QR technology.'
    },
    [Page.JillJillAI]: {
        title: 'JillJill AI Voice Agent for B2B Sales | VIMS',
        description: 'Automate cold-calling, qualify leads, and book meetings 24x7 with JillJill, our intelligent AI voice agent designed for sales automation.'
    },
    [Page.DigitalMarketing]: {
        title: 'Digital Marketing & Brand Growth Services | VIMS',
        description: 'Drive growth with integrated digital marketing, performance ad campaigns, SEO, and enterprise conversion funnel optimization.'
    },
    [Page.About]: {
        title: 'About VIMS – Systems Engineering & Digital Innovation',
        description: 'Learn about VIMS, our engineering roots, our mission in AI automation and mechanical costing intelligence, and our values of precision and partnership.'
    },
    [Page.Contact]: {
        title: 'Contact Us & Book a Strategy Call | VIMS',
        description: 'Reach out to VIMS at Vimal@vimsenterprise.com or +91 8122259505 to discuss AI automation, mechanical should-costing, or digital growth.'
    },
    [Page.TeamProfile]: {
        title: 'Team Profile | VIMS',
        description: 'Meet the engineering and growth minds behind VIMS driving digital transformation, costing intelligence, and AI innovation.'
    }
};
