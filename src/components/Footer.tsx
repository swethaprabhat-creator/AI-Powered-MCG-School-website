import React from 'react';
import { ScreenType } from '../types';
import { SCHOOL_IMAGES } from '../data/schoolData';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#0f2942] text-white mt-12 px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pb-12 border-t border-[#002a44]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Institutional Identity */}
          <div className="flex flex-col gap-3 md:col-span-1">
            <div className="bg-white p-2.5 rounded-lg max-w-[220px] shadow-sm">
              <img
                src={SCHOOL_IMAGES.logo}
                alt="Mount Carmel Global School"
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs font-bold text-[#fed65b] tracking-widest uppercase">
              Global School · Hyderabad
            </p>
            <p className="text-xs text-[#b0c9e8] leading-relaxed">
              Empowering students with knowledge, character, creativity, and confidence for a rapidly changing world in the heart of Kondapur.
            </p>
          </div>

          {/* Col 2: Institutional Pathways */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold tracking-wider text-[#fed65b] uppercase">
              Academic Pathways
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#b0c9e8]">
              <button
                onClick={() => onNavigate('academics')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Early Years (PP1, LKG, UKG)
              </button>
              <button
                onClick={() => onNavigate('academics')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Primary School (Classes 1–5)
              </button>
              <button
                onClick={() => onNavigate('academics')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Secondary School (Classes 6–10)
              </button>
              <button
                onClick={() => onNavigate('ai-learning')}
                className="text-left hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[15px] text-[#fed65b]">neurology</span>
                <span>AI-Powered Learning Ecosystem</span>
              </button>
              <button
                onClick={() => onNavigate('campus-life')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Sports & Performing Arts
              </button>
            </div>
          </div>

          {/* Col 3: Admissions & Guidance */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold tracking-wider text-[#fed65b] uppercase">
              Admissions & Visits
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#b0c9e8]">
              <button
                onClick={() => onNavigate('admissions')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Admissions 2025–26 Overview
              </button>
              <button
                onClick={() => onNavigate('admissions')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Eligibility Matrix & Verification
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Book Guided Campus Walkthrough
              </button>
              <button
                onClick={() => onNavigate('news-and-events')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                School Circulars & Event Calendar
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Campus Infrastructure Gallery
              </button>
            </div>
          </div>

          {/* Col 4: Campus Location & Desk */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold tracking-wider text-[#fed65b] uppercase">
              Kondapur Campus
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#b0c9e8] leading-relaxed">
              <p className="text-white font-medium">
                Near HITEC City & Gachibowli Corridor, Kondapur, Hyderabad, Telangana 500084
              </p>
              <p>Admissions Desk: +91 40 4000 1122</p>
              <p>Email: admissions@mountcarmelglobalschool.com</p>
              <div className="flex items-center gap-2 pt-1 text-white">
                <span className="material-symbols-outlined text-[#fed65b] text-[16px]">schedule</span>
                <span className="text-[11px]">Mon – Sat: 9:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#002a44]">
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-lg bg-[#002a44] flex items-center justify-center text-[#fed65b] hover:bg-[#fed65b] hover:text-[#001428] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-lg bg-[#002a44] flex items-center justify-center text-[#fed65b] hover:bg-[#fed65b] hover:text-[#001428] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">camera</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-lg bg-[#002a44] flex items-center justify-center text-[#fed65b] hover:bg-[#fed65b] hover:text-[#001428] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">smart_display</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg bg-[#002a44] flex items-center justify-center text-[#fed65b] hover:bg-[#fed65b] hover:text-[#001428] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#b0c9e8]">
            <span className="material-symbols-outlined text-[#fed65b] text-[16px]">school</span>
            <span>Excellence in Global Pedagogy & Character Building</span>
          </div>
        </div>

        {/* Bottom Copyright & Accreditation */}
        <div className="pt-4 border-t border-[#002a44]/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#7991af]">
          <p>© 2025 Mount Carmel Global School, Kondapur. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Curriculum mapped from PP1 to Class 10 with progressive STEAM & AI-augmented learning frameworks.
          </p>
        </div>
      </div>
    </footer>
  );
};
