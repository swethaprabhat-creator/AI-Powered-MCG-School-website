import React from 'react';
import { ScreenType } from '../types';
import { SCHOOL_IMAGES } from '../data/schoolData';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenDrawer: () => void;
  onOpenAIAssistant: () => void;
  onOpenTourModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenDrawer,
  onOpenAIAssistant,
  onOpenTourModal,
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#fbf9f5]/95 backdrop-blur-xl border-b border-[#e4e2de]/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Mobile menu button + Brand Zone */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open Navigation Menu"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#001428] hover:bg-[#efeeea] active:scale-95 transition-all"
            onClick={onOpenDrawer}
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          >
            <img
              src={SCHOOL_IMAGES.logo}
              alt="Mount Carmel Global School"
              className="h-9 w-auto object-contain max-w-[210px] sm:max-w-xs transition-transform group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop 1440px viewport presence) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'home'
                ? 'text-[#001428] font-semibold border-b-2 border-[#735c00] pb-0.5'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about-us')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'about-us'
                ? 'text-[#001428] font-semibold border-b-2 border-[#735c00] pb-0.5'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => onNavigate('academics')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'academics'
                ? 'text-[#001428] font-semibold border-b-2 border-[#735c00] pb-0.5'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            Academics
          </button>
          <button
            onClick={() => onNavigate('ai-learning')}
            className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              currentScreen === 'ai-learning'
                ? 'text-[#001428] font-semibold border-b-2 border-[#735c00] pb-0.5'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px] text-[#735c00]">neurology</span>
            <span>AI Learning</span>
          </button>
          <button
            onClick={() => onNavigate('campus-life')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'campus-life'
                ? 'text-[#001428] font-semibold border-b-2 border-[#735c00] pb-0.5'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            Campus Life
          </button>
          <button
            onClick={() => onNavigate('gallery')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'gallery'
                ? 'text-[#001428] font-semibold border-b-2 border-[#735c00] pb-0.5'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => onNavigate('news-and-events')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'news-and-events'
                ? 'text-[#001428] font-semibold border-b-2 border-[#735c00] pb-0.5'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            News & Events
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'contact'
                ? 'text-[#001428] font-semibold border-b-2 border-[#735c00] pb-0.5'
                : 'text-[#43474d] hover:text-[#001428]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          {/* AI Assistant Quick Trigger */}
          <button
            type="button"
            onClick={onOpenAIAssistant}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#c3c6ce] text-[#001428] text-xs font-semibold hover:bg-[#efeeea] active:scale-95 transition-all cursor-pointer"
            title="Ask MCGS AI Assistant"
          >
            <span className="material-symbols-outlined text-[17px] text-[#735c00]">smart_toy</span>
            <span>MCGS AI</span>
          </button>

          {/* Book Tour CTA */}
          <button
            type="button"
            onClick={onOpenTourModal}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#efeeea] text-[#001428] text-xs font-semibold hover:bg-[#eae8e4] active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            <span>Visit Campus</span>
          </button>

          {/* Primary Apply CTA */}
          <button
            type="button"
            onClick={() => onNavigate('admissions')}
            className="h-9 px-4 flex items-center justify-center rounded-lg bg-[#fed65b] text-[#001428] text-xs font-bold shadow-[0_2px_10px_rgba(212,175,55,0.25)] hover:bg-[#ffe088] active:scale-95 transition-all cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
};
