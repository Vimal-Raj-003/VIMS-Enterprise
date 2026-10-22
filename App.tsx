import React, { useState, useCallback, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HospitalManagementPage from './pages/HospitalManagementPage';
import LinkedInGrowthPage from './pages/LinkedInGrowthPage';
import VimsCardsPage from './pages/VimsCardsPage';
import JillJillAiPage from './pages/JillJillAiPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import AiAutomationPage from './pages/AiAutomationPage';
import CostEstimationPage from './pages/CostEstimationPage';
import KickoffPresentationPage from './pages/KickoffPresentationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamProfilePage from './pages/TeamProfilePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import DataDeletionPage from './pages/DataDeletionPage';
import { PAGE_META } from './constants';
import FloatingBookNowButton from './components/FloatingBookNowButton';
import CtaSection from './components/CtaSection';
import { ThemeProvider } from './contexts/ThemeContext';
import DynamicBackground from './components/DynamicBackground';
import SystemTelemetry from './components/SystemTelemetry';
import CookieConsent from './components/CookieConsent';
import ScrollProgressBar from './components/ScrollProgressBar';

const getPageFromLocation = (): Page => {
  if (typeof window === 'undefined') return Page.Home;
  const normalizedPath = window.location.pathname
    .toLowerCase()
    .replace(/\/+$/, '')
    .replace(/\.html$/, '');
  const normalizedHash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

  if (normalizedPath === '/privacy-policy' || normalizedHash === 'privacy-policy') {
    return Page.PrivacyPolicy;
  }
  if (normalizedPath === '/terms-of-service' || normalizedHash === 'terms-of-service') {
    return Page.TermsOfService;
  }
  if (normalizedPath === '/data-deletion' || normalizedHash === 'data-deletion') {
    return Page.DataDeletion;
  }
  return Page.Home;
};

const getPathForPage = (page: Page): string => {
  switch (page) {
    case Page.PrivacyPolicy:
      return '/privacy-policy';
    case Page.TermsOfService:
      return '/terms-of-service';
    case Page.DataDeletion:
      return '/data-deletion';
    default:
      return '/';
  }
};

// FIX: Removed React.FC type from component definition to resolve issue with 'children' prop being implicitly required.
const App = () => {
  const [activePage, setActivePage] = useState<Page>(() => getPageFromLocation());
  const [selectedMemberId, setSelectedMemberId] = useState<string>('');

  const handleNavigate = useCallback((page: Page) => {
    setActivePage(page);
    if (typeof window !== 'undefined') {
      const targetPath = getPathForPage(page);
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ page }, '', targetPath);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setActivePage(event.state.page as Page);
      } else {
        setActivePage(getPageFromLocation());
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleViewProfile = useCallback((memberId: string) => {
    setSelectedMemberId(memberId);
    setActivePage(Page.TeamProfile);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  useEffect(() => {
    const meta = PAGE_META[activePage];
    if (meta) {
        document.title = meta.title;
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
          descriptionTag.setAttribute('content', meta.description);
        }
    }
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case Page.Home:
        return <HomePage onNavigate={handleNavigate} />;
      case Page.HospitalManagement:
        return <HospitalManagementPage onNavigate={handleNavigate} />;
      case Page.LinkedInGrowth:
        return <LinkedInGrowthPage />;
      case Page.VIMSCards:
        return <VimsCardsPage />;
      case Page.JillJillAI:
        return <JillJillAiPage />;
      case Page.DigitalMarketing:
        return <DigitalMarketingPage />;
      case Page.AIAutomation:
        return <AiAutomationPage />;
      case Page.CostEstimation:
        return <CostEstimationPage onNavigate={handleNavigate} />;
      case Page.KickoffPresentation:
        return <KickoffPresentationPage onNavigate={handleNavigate} />;
      case Page.About:
        return <AboutPage onProfileClick={handleViewProfile} />;
      case Page.Contact:
        return <ContactPage />;
      case Page.TeamProfile:
        return <TeamProfilePage memberId={selectedMemberId} onBack={() => handleNavigate(Page.About)} />;
      case Page.PrivacyPolicy:
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case Page.TermsOfService:
        return <TermsOfServicePage onNavigate={handleNavigate} />;
      case Page.DataDeletion:
        return <DataDeletionPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  if (activePage === Page.KickoffPresentation) {
    return (
      <ThemeProvider>
        <div className="relative min-h-screen">
          <DynamicBackground />
          <SystemTelemetry />
          <KickoffPresentationPage onNavigate={handleNavigate} />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <DynamicBackground />
        <SystemTelemetry />
        <CookieConsent />
        <div className="flex flex-col min-h-screen bg-transparent text-slate-900 dark:text-light-text overflow-x-hidden transition-colors duration-300">
          <Navbar activePage={activePage} onNavigate={handleNavigate} />
          <ScrollProgressBar activePage={activePage} />
          <main className="flex-grow pt-20 relative z-10">
            {renderPage()}
          </main>
          <CtaSection />
          <FloatingBookNowButton />
          <Footer onNavigate={handleNavigate} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;