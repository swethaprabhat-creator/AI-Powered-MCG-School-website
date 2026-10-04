import React, { useState, useEffect } from 'react';
import { ScreenType } from './types';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { BottomTabBar } from './components/BottomTabBar';
import { Footer } from './components/Footer';
import { AIAssistantModal } from './components/AIAssistantModal';
import { TourModal } from './components/TourModal';

import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { AcademicsScreen } from './screens/AcademicsScreen';
import { AILearningScreen } from './screens/AILearningScreen';
import { CampusLifeScreen } from './screens/CampusLifeScreen';
import { AdmissionsScreen } from './screens/AdmissionsScreen';
import { GalleryScreen } from './screens/GalleryScreen';
import { NewsEventsScreen } from './screens/NewsEventsScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  // Scroll to top whenever screen switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1b1c1a] flex flex-col relative selection:bg-[#fed65b] selection:text-[#001428]">
      {/* Top Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Slide-over Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-16 pb-safe lg:pb-0 flex flex-col">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
          />
        )}
        {currentScreen === 'about-us' && (
          <AboutScreen
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}
        {currentScreen === 'academics' && (
          <AcademicsScreen
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}
        {currentScreen === 'ai-learning' && (
          <AILearningScreen
            onNavigate={handleNavigate}
            onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
          />
        )}
        {currentScreen === 'campus-life' && (
          <CampusLifeScreen
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}
        {currentScreen === 'admissions' && (
          <AdmissionsScreen
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}
        {currentScreen === 'gallery' && (
          <GalleryScreen
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}
        {currentScreen === 'news-and-events' && (
          <NewsEventsScreen
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}
        {currentScreen === 'contact' && (
          <ContactScreen
            onNavigate={handleNavigate}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}
      </main>

      {/* Floating MCGS AI Assistant Trigger Button (Matches user's HTML) */}
      <div className="fixed bottom-24 lg:bottom-8 right-4 z-40">
        <button
          type="button"
          aria-label="Ask MCGS AI Assistant"
          onClick={() => setIsAIAssistantOpen(true)}
          className="flex items-center gap-2 px-4 h-12 rounded-full bg-[#001428] text-[#fed65b] shadow-[0_8px_24px_rgba(0,21,36,0.35)] border border-[#fed65b]/40 active:scale-95 hover:bg-[#0f2942] transition-all cursor-pointer group"
        >
          <span className="material-symbols-outlined text-[#fed65b] text-[22px] group-hover:rotate-12 transition-transform">
            smart_toy
          </span>
          <span className="text-xs font-bold text-white tracking-wide">MCGS AI</span>
          <span className="w-2 h-2 rounded-full bg-[#fed65b] animate-pulse"></span>
        </button>
      </div>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Bottom Tab Bar */}
      <BottomTabBar currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Interactive AI Assistant Modal */}
      <AIAssistantModal
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
        onNavigate={handleNavigate}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Guided Campus Tour Appointment Modal */}
      <TourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </div>
  );
}
