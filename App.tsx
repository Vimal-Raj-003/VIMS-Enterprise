import React, { useState, useCallback, useEffect } from 'react';
import { Page } from './types';
import { PAGE_META, PAGE_PATHS } from './constants';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CtaSection from './components/CtaSection';
import BookingModal from './components/BookingModal';
import VimsChatbot from './components/VimsChatbot';
import DynamicBackground from './components/DynamicBackground';
import CookieConsent from './components/CookieConsent';
import ScrollProgressBar from './components/ScrollProgressBar';

import HomePage from './pages/HomePage';
import VoiceAgentsPage from './pages/VoiceAgentsPage';
import WebsiteCreationPage from './pages/WebsiteCreationPage';
import AiAutomationPage from './pages/AiAutomationPage';
import HospitalManagementPage from './pages/HospitalManagementPage';
import MatlabAcademyPage from './pages/MatlabAcademyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamProfilePage from './pages/TeamProfilePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import DataDeletionPage from './pages/DataDeletionPage';

const getPageFromLocation = (): Page => {
  if (typeof window === 'undefined') return Page.Home;
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '').replace(/\.html$/, '') || '/';
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

  const matchByPath = (Object.entries(PAGE_PATHS) as [Page, string][]).find(
    ([, p]) => p.toLowerCase() === path
  );
  if (matchByPath) return matchByPath[0];

  if (hash === 'privacy-policy') return Page.PrivacyPolicy;
  if (hash === 'terms-of-service') return Page.TermsOfService;
  if (hash === 'data-deletion') return Page.DataDeletion;
  if (hash === 'hms-ecosystem') return Page.HospitalManagement;
  if (hash === 'ai-automation') return Page.AIAutomation;
  if (hash === 'ai-voice-agents' || hash === 'jilljill-ai') return Page.VoiceAgents;
  if (hash === 'website-creation') return Page.WebsiteCreation;
  if (hash === 'matlab-fde-academy') return Page.MatlabAcademy;
  if (hash === 'about') return Page.About;
  if (hash === 'contact') return Page.Contact;

  return Page.Home;
};

const App = () => {
  const [activePage, setActivePage] = useState<Page>(() => getPageFromLocation());
  const [selectedMemberId, setSelectedMemberId] = useState<string>('vimal');
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [bookingTopic, setBookingTopic] = useState<string>('');

  const handleOpenBooking = useCallback((topic?: string) => {
    setBookingTopic(topic || '');
    setBookingOpen(true);
  }, []);

  const handleNavigate = useCallback((page: Page) => {
    setActivePage(page);
    if (typeof window !== 'undefined') {
      const targetPath = PAGE_PATHS[page] || '/';
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ page }, '', targetPath);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    if (typeof window !== 'undefined') {
      window.history.pushState({ page: Page.TeamProfile, memberId }, '', PAGE_PATHS[Page.TeamProfile]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onViewLeader={handleViewProfile}
          />
        );
      case Page.VoiceAgents:
        return <VoiceAgentsPage onOpenBooking={handleOpenBooking} />;
      case Page.WebsiteCreation:
        return <WebsiteCreationPage onOpenBooking={handleOpenBooking} />;
      case Page.AIAutomation:
        return <AiAutomationPage onOpenBooking={handleOpenBooking} />;
      case Page.HospitalManagement:
        return <HospitalManagementPage onOpenBooking={handleOpenBooking} />;
      case Page.MatlabAcademy:
        return <MatlabAcademyPage onOpenBooking={handleOpenBooking} />;
      case Page.About:
        return <AboutPage onProfileClick={handleViewProfile} onOpenBooking={handleOpenBooking} />;
      case Page.Contact:
        return <ContactPage onOpenBooking={handleOpenBooking} />;
      case Page.TeamProfile:
        return (
          <TeamProfilePage
            memberId={selectedMemberId}
            onBack={() => handleNavigate(Page.About)}
            onOpenBooking={handleOpenBooking}
          />
        );
      case Page.PrivacyPolicy:
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case Page.TermsOfService:
        return <TermsOfServicePage onNavigate={handleNavigate} />;
      case Page.DataDeletion:
        return <DataDeletionPage onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onViewLeader={handleViewProfile}
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col text-slate-900 dark:text-slate-100">
        <DynamicBackground />
        <CookieConsent />
        <Navbar
          activePage={activePage}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
        <ScrollProgressBar activePage={activePage} />

        <main className="flex-grow pt-20 relative z-10">{renderPage()}</main>

        <CtaSection onOpenBooking={handleOpenBooking} />
        <Footer onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          defaultTopic={bookingTopic}
        />
        <VimsChatbot onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
      </div>
    </ThemeProvider>
  );
};

export default App;
