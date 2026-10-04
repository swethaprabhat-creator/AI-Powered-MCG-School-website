import React from 'react';
import { ScreenType } from '../types';

interface BottomTabBarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ currentScreen, onNavigate }) => {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 pb-safe bg-[#fbf9f5]/95 backdrop-blur-xl border-t border-[#e4e2de]/80 shadow-[0_-1px_12px_rgba(0,0,0,0.06)]">
      <div className="flex justify-around items-center h-16 px-2">
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center w-14 h-12 transition-all cursor-pointer ${
            currentScreen === 'home' ? 'text-[#001428] font-bold' : 'text-[#43474d] hover:text-[#001428]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="text-[10px] tracking-tight">Home</span>
        </button>

        <button
          onClick={() => onNavigate('academics')}
          className={`flex flex-col items-center justify-center w-14 h-12 transition-all cursor-pointer ${
            currentScreen === 'academics' ? 'text-[#001428] font-bold' : 'text-[#43474d] hover:text-[#001428]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">menu_book</span>
          <span className="text-[10px] tracking-tight">Academics</span>
        </button>

        <button
          onClick={() => onNavigate('admissions')}
          className="flex flex-col items-center justify-center px-4 h-11 rounded-full bg-[#001428] text-[#fed65b] shadow-[0_4px_14px_rgba(0,20,40,0.25)] border border-[#fed65b]/40 active:scale-95 transition-all cursor-pointer"
          type="button"
        >
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
            <span className="text-[11px] font-bold text-white whitespace-nowrap">Apply</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('campus-life')}
          className={`flex flex-col items-center justify-center w-14 h-12 transition-all cursor-pointer ${
            currentScreen === 'campus-life' ? 'text-[#001428] font-bold' : 'text-[#43474d] hover:text-[#001428]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">sports_soccer</span>
          <span className="text-[10px] tracking-tight">Life</span>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className={`flex flex-col items-center justify-center w-14 h-12 transition-all cursor-pointer ${
            currentScreen === 'contact' ? 'text-[#001428] font-bold' : 'text-[#43474d] hover:text-[#001428]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">call</span>
          <span className="text-[10px] tracking-tight">Contact</span>
        </button>
      </div>
    </nav>
  );
};
