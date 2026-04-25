import React, { useState, useCallback, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LinkedInGrowthPage from './pages/LinkedInGrowthPage';
import VimsCardsPage from './pages/VimsCardsPage';
import JillJillAiPage from './pages/JillJillAiPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import AiAutomationPage from './pages/AiAutomationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamProfilePage from './pages/TeamProfilePage';
import { PAGE_META } from './constants';
import FloatingBookNowButton from './components/FloatingBookNowButton';
import CtaSection from './components/CtaSection';
import { ThemeProvider } from './contexts/ThemeContext';
import DynamicBackground from './components/DynamicBackground';
import LottieBackground from './components/LottieBackground';

// FIX: Removed React.FC type from component definition to resolve issue with 'children' prop being implicitly required.
const App = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);
  const [selectedMemberId, setSelectedMemberId] = useState<string>('');

  const handleNavigate = useCallback((page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      case Page.About:
        return <AboutPage onProfileClick={handleViewProfile} />;
      case Page.Contact:
        return <ContactPage />;
      case Page.TeamProfile:
        return <TeamProfilePage memberId={selectedMemberId} onBack={() => handleNavigate(Page.About)} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <DynamicBackground />
        <LottieBackground />
        <div className="flex flex-col min-h-screen bg-transparent text-slate-900 dark:text-light-text overflow-x-hidden transition-colors duration-300">
          <Navbar activePage={activePage} onNavigate={handleNavigate} />
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