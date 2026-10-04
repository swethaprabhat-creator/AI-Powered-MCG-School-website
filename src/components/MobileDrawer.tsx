import React from 'react';
import { ScreenType } from '../types';
import { SCHOOL_IMAGES } from '../data/schoolData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  currentScreen,
  onNavigate,
  onOpenTourModal,
}) => {
  const handleItemClick = (screen: ScreenType) => {
    onNavigate(screen);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[#001428]/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[84vw] max-w-xs bg-[#ffffff] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col justify-between overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#efeeea]">
            <img
              src={SCHOOL_IMAGES.logo}
              alt="Mount Carmel Global School"
              className="h-9 w-auto object-contain max-w-[180px]"
              referrerPolicy="no-referrer"
            />
            <button
              className="w-10 h-10 rounded-lg flex items-center justify-center text-[#43474d] hover:bg-[#efeeea] active:scale-95 transition-all cursor-pointer"
              onClick={onClose}
              type="button"
              aria-label="Close Navigation"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          <div className="py-2.5">
            <p className="text-[11px] font-semibold text-[#74777e] uppercase tracking-wider">
              Institutional Navigation
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 mt-1">
            <button
              className={`flex items-center gap-3.5 h-11 px-3 rounded-lg text-sm font-medium transition-all text-left cursor-pointer ${
                currentScreen === 'home'
                  ? 'bg-[#efeeea] text-[#001428] font-bold'
                  : 'text-[#1b1c1a] hover:bg-[#f5f3ef]'
              }`}
              onClick={() => handleItemClick('home')}
            >
              <span className="material-symbols-outlined text-[#001428] text-[20px]">home</span>
              <span>Home</span>
            </button>

            <button
              className={`flex items-center gap-3.5 h-11 px-3 rounded-lg text-sm font-medium transition-all text-left cursor-pointer ${
                currentScreen === 'about-us'
                  ? 'bg-[#efeeea] text-[#001428] font-bold'
                  : 'text-[#1b1c1a] hover:bg-[#f5f3ef]'
              }`}
              onClick={() => handleItemClick('about-us')}
            >
              <span className="material-symbols-outlined text-[#001428] text-[20px]">corporate_fare</span>
              <span>About Us</span>
            </button>

            <button
              className={`flex items-center gap-3.5 h-11 px-3 rounded-lg text-sm font-medium transition-all text-left cursor-pointer ${
                currentScreen === 'academics'
                  ? 'bg-[#efeeea] text-[#001428] font-bold'
                  : 'text-[#1b1c1a] hover:bg-[#f5f3ef]'
              }`}
              onClick={() => handleItemClick('academics')}
            >
              <span className="material-symbols-outlined text-[#001428] text-[20px]">menu_book</span>
              <span>Academics</span>
            </button>

            <button
              className={`flex items-center justify-between h-11 px-3 rounded-lg text-sm font-medium transition-all text-left cursor-pointer ${
                currentScreen === 'ai-learning'
                  ? 'bg-[#efeeea] text-[#001428] font-bold'
                  : 'text-[#1b1c1a] hover:bg-[#f5f3ef]'
              }`}
              onClick={() => handleItemClick('ai-learning')}
            >
              <div className="flex items-center gap-3.5">
                <span className="material-symbols-outlined text-[#735c00] text-[20px]">neurology</span>
                <span>AI Learning</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#fed65b]/30 text-[#735c00] text-[10px] font-bold">
                PRO
              </span>
            </button>

            <button
              className={`flex items-center gap-3.5 h-11 px-3 rounded-lg text-sm font-medium transition-all text-left cursor-pointer ${
                currentScreen === 'campus-life'
                  ? 'bg-[#efeeea] text-[#001428] font-bold'
                  : 'text-[#1b1c1a] hover:bg-[#f5f3ef]'
              }`}
              onClick={() => handleItemClick('campus-life')}
            >
              <span className="material-symbols-outlined text-[#001428] text-[20px]">sports_soccer</span>
              <span>Campus Life</span>
            </button>

            <button
              className={`flex items-center gap-3.5 h-11 px-3 rounded-lg text-sm font-medium transition-all text-left cursor-pointer ${
                currentScreen === 'admissions'
                  ? 'bg-[#efeeea] text-[#001428] font-bold'
                  : 'text-[#1b1c1a] hover:bg-[#f5f3ef]'
              }`}
              onClick={() => handleItemClick('admissions')}
            >
              <span className="material-symbols-outlined text-[#001428] text-[20px]">how_to_reg</span>
              <span>Admissions</span>
            </button>

            <button
              className={`flex items-center gap-3.5 h-11 px-3 rounded-lg text-sm font-medium transition-all text-left cursor-pointer ${
                currentScreen === 'gallery'
                  ? 'bg-[#efeeea] text-[#001428] font-bold'
                  : 'text-[#1b1c1a] hover:bg-[#f5f3ef]'
              }`}
              onClick={() => handleItemClick('gallery')}
            >
              <span className="material-symbols-outlined text-[#001428] text-[20px]">photo_library</span>
              <span>Gallery</span>
            </button>

            <button
              className={`flex items-center gap-3.5 h-11 px-3 rounded-lg text-sm font-medium transition-all text-left cursor-pointer ${
                currentScreen === 'news-and-events'
                  ? 'bg-[#efeeea] text-[#001428] font-bold'
                  : 'text-[#1b1c1a] hover:bg-[#f5f3ef]'
              }`}
              onClick={() => handleItemClick('news-and-events')}
            >
              <span className="material-symbols-outlined text-[#001428] text-[20px]">campaign</span>
              <span>News & Events</span>
            </button>

            <button
              className={`flex items-center gap-3.5 h-11 px-3 rounded-lg text-sm font-medium transition-all text-left cursor-pointer ${
                currentScreen === 'contact'
                  ? 'bg-[#efeeea] text-[#001428] font-bold'
                  : 'text-[#1b1c1a] hover:bg-[#f5f3ef]'
              }`}
              onClick={() => handleItemClick('contact')}
            >
              <span className="material-symbols-outlined text-[#001428] text-[20px]">alternate_email</span>
              <span>Contact</span>
            </button>
          </nav>

          <div className="pt-4 mt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenTourModal();
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-[#efeeea] text-[#001428] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#eae8e4] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[17px]">calendar_month</span>
              <span>Book Guided Campus Tour</span>
            </button>
          </div>
        </div>

        {/* Institutional Accreditation Footnote */}
        <div className="p-5 bg-[#f5f3ef] border-t border-[#e4e2de] flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#735c00] text-[18px]">verified</span>
            <span className="text-xs font-semibold text-[#001428]">Cambridge & CBSE Aligned</span>
          </div>
          <p className="text-[11px] text-[#43474d] leading-relaxed">
            Kondapur, HITEC City Corridor, Hyderabad, Telangana 500084
          </p>
        </div>
      </aside>
    </>
  );
};
