
import { Page } from './types';

export const NAV_LINKS = [
  { name: Page.Home, path: '#home' },
  { name: Page.About, path: '#about' },
];

export const SERVICE_PAGES = [
  { name: Page.LinkedInGrowth, path: '#linkedin-growth' },
  { name: Page.VIMSCards, path: '#vims-cards' },
  { name: Page.JillJillAI, path: '#jilljill-ai' },
  { name: Page.DigitalMarketing, path: '#digital-marketing' },
  { name: Page.AIAutomation, path: '#ai-automation' },
];

export const PAGE_META: Record<Page, { title: string; description: string }> = {
    [Page.Home]: {
        title: 'VIMS Enterprises – Digital Identity, AI Automation & Personal Branding',
        description: 'VIMS Enterprises helps founders and businesses build authority, automate workflows, and scale revenue through LinkedIn branding, AI automation, digital identity and intelligent voice agents.'
    },
    [Page.LinkedInGrowth]: {
        title: 'LinkedIn Growth & Personal Branding | VIMS Enterprises',
        description: 'Turn LinkedIn into a 24x7 growth engine with our expert content creation, profile optimization, and personal branding solutions for founders, CXOs, and professionals.'
    },
    [Page.VIMSCards]: {
        title: 'VIMS Cards – Digital Identity Solutions | VIMS Enterprises',
        description: 'Achieve 2X sales growth with VIMS Cards, the modern, eco-friendly digital business card solution with NFC and QR technology for seamless networking.'
    },
    [Page.JillJillAI]: {
        title: 'JillJill AI Voice Agent for B2B Sales | VIMS Enterprises',
        description: 'Automate cold-calling, qualify leads, and book meetings 24x7 with JillJill, our intelligent AI voice agent designed for B2B sales automation.'
    },
    [Page.DigitalMarketing]: {
        title: 'Digital Marketing & Brand Growth Services | VIMS Enterprises',
        description: 'Drive growth with our integrated digital marketing services, including brand strategy, content marketing, targeted ads, and website optimization.'
    },
    [Page.AIAutomation]: {
        title: 'AI Automation Workflows for Business | VIMS Enterprises',
        description: 'Streamline your business operations with our custom AI-powered workflows for lead capture, follow-up, marketing, and feedback automation.'
    },
    [Page.About]: {
        title: 'About VIMS Enterprises',
        description: 'Learn about VIMS Enterprises, our mission to drive digital transformation, and our values of depth, ethical branding, and long-term partnerships.'
    },
    [Page.Contact]: {
        title: 'Contact Us & Book a Strategy Call | VIMS Enterprises',
        description: 'Ready to build your growth engine? Contact us to book a strategy call and discuss your business goals with our team of experts.'
    }
};
