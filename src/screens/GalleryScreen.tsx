import React, { useState } from 'react';
import { GalleryItem, ScreenType } from '../types';
import { GALLERY_ITEMS } from '../data/schoolData';

interface GalleryScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
}

export const GalleryScreen: React.FC<GalleryScreenProps> = ({ onNavigate, onOpenTourModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-10">
      {/* Header Banner */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#efeeea] border border-[#e4e2de]">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Campus Visuals
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001428] font-bold leading-tight">
          Moments of Discovery & Growth
        </h1>
        <p className="text-sm sm:text-base text-[#43474d] leading-relaxed">
          Glimpses into our sunlit classrooms, experiential science bays, athletic courtyards, and creative ateliers in Kondapur, Hyderabad.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-[#e4e2de]">
        {[
          { id: 'all', label: 'All Photos' },
          { id: 'campus', label: 'Campus Architecture' },
          { id: 'learning', label: 'Classrooms & Labs' },
          { id: 'arts', label: 'Arts & Creativity' },
          { id: 'events', label: 'Leadership & Events' },
        ].map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#001428] text-white shadow-sm'
                : 'bg-[#f5f3ef] text-[#43474d] hover:bg-[#efeeea]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxItem(item)}
            className="group rounded-2xl overflow-hidden bg-white border border-[#e4e2de] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
          >
            <div className="relative h-60 w-full overflow-hidden bg-[#f5f3ef]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#001428]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#001428] text-xs font-bold shadow-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                  <span>View Fullsize</span>
                </span>
              </div>
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#001428]/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                {item.category}
              </span>
            </div>
            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-serif text-sm font-bold text-[#001428] group-hover:text-[#735c00] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">{item.caption}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#001428]/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[65vh] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="max-h-[65vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black active:scale-95 transition-all cursor-pointer"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-5 sm:p-6 flex flex-col gap-2 bg-[#fbf9f5]">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#efeeea] text-[10px] font-bold text-[#735c00] uppercase tracking-wider">
                  {activeLightboxItem.category}
                </span>
                <span className="text-[11px] text-[#74777e]">Mount Carmel Global School, Kondapur</span>
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#001428]">
                {activeLightboxItem.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tour CTA */}
      <section className="p-8 rounded-2xl bg-[#f5f3ef] border border-[#e4e2de] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#001428]">See Our Vibrant Campus In Person</h3>
          <p className="text-xs text-[#43474d]">
            Schedule an appointment for a guided tour of our facilities with an admissions coordinator.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenTourModal}
          className="h-11 px-5 rounded-lg bg-[#001428] text-white text-xs font-bold hover:bg-[#0f2942] active:scale-95 transition-all cursor-pointer flex-shrink-0"
        >
          Book Guided Walkthrough
        </button>
      </section>
    </div>
  );
};
