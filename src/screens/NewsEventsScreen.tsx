import React, { useState } from 'react';
import { NewsItem, ScreenType } from '../types';
import { NEWS_BULLETIN } from '../data/schoolData';

interface NewsEventsScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
}

export const NewsEventsScreen: React.FC<NewsEventsScreenProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<NewsItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = ['all', 'Admissions Notice', 'STEM & AI Innovation', 'Annual Sports', 'Academic Milestone'];

  const filteredNews =
    selectedCategory === 'all'
      ? NEWS_BULLETIN
      : NEWS_BULLETIN.filter((item) => item.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-10">
      {/* Header Banner */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#efeeea] border border-[#e4e2de]">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Campus Bulletin
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001428] font-bold leading-tight">
          News, Circulars & Upcoming Events
        </h1>
        <p className="text-sm sm:text-base text-[#43474d] leading-relaxed">
          Stay connected with institutional announcements, academic milestones, athletic triumphs, and community celebrations at Mount Carmel Global School.
        </p>
      </section>

      {/* Category Filter */}
      <section className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-[#e4e2de]">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#001428] text-white shadow-sm'
                : 'bg-[#f5f3ef] text-[#43474d] hover:bg-[#efeeea]'
            }`}
          >
            {cat === 'all' ? 'All Circulars' : cat}
          </button>
        ))}
      </section>

      {/* News List Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNews.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-sm flex flex-col justify-between gap-4 hover:shadow-md hover:border-[#735c00]/50 transition-all"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#efeeea] text-[10px] font-bold text-[#735c00] uppercase tracking-wider">
                  {item.category}
                </span>
                <div className="flex items-center gap-2 text-[11px] text-[#74777e]">
                  <span>{item.date}</span>
                  <span>·</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#001428] leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">{item.summary}</p>
            </div>

            <div className="pt-2 border-t border-[#efeeea] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="text-xs font-bold text-[#001428] hover:text-[#735c00] flex items-center gap-1 cursor-pointer"
              >
                <span>Read Full Announcement</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Detail Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001428]/60 backdrop-blur-sm"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#e4e2de] shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#efeeea] pb-3">
              <span className="px-3 py-1 rounded-full bg-[#efeeea] text-[10px] font-bold text-[#735c00] uppercase">
                {activeItem.category}
              </span>
              <button
                onClick={() => setActiveItem(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#74777e] hover:bg-[#efeeea] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <h2 className="font-serif text-xl font-bold text-[#001428]">
              {activeItem.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-[#74777e]">
              <span>Published: {activeItem.date}</span>
              <span>·</span>
              <span>Admissions Directorate</span>
            </div>
            <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
              {activeItem.summary}
            </p>
            <p className="text-xs text-[#43474d] leading-relaxed bg-[#f5f3ef] p-3.5 rounded-xl border border-[#e4e2de]">
              For detailed circular copies, academic calendars, or registration paperwork, please visit our front desk in Kondapur or connect directly with our administration office.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveItem(null);
                  onNavigate('admissions');
                }}
                className="px-4 py-2 rounded-lg bg-[#001428] text-white text-xs font-bold hover:bg-[#0f2942] cursor-pointer"
              >
                Admissions Portal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Subscription Box */}
      <section className="p-8 rounded-3xl bg-[#0f2942] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-1 max-w-md">
          <span className="text-xs font-bold text-[#fed65b] uppercase tracking-wider">
            Carmel Parent Dispatch
          </span>
          <h3 className="font-serif text-xl font-bold text-white">Subscribe to Campus Bulletins</h3>
          <p className="text-xs text-[#b0c9e8]">
            Receive monthly academic calendars, exam schedules, and circular summaries directly in your inbox.
          </p>
        </div>

        {!newsletterSubscribed ? (
          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email..."
              className="h-11 px-4 rounded-xl bg-[#001428] border border-white/20 text-xs text-white placeholder:text-[#7991af] outline-none focus:border-[#fed65b]"
            />
            <button
              type="submit"
              className="h-11 px-5 rounded-xl bg-[#fed65b] text-[#001428] text-xs font-bold hover:bg-[#ffe088] active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-2 text-xs font-bold text-[#fed65b]">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            <span>Thank you! You are subscribed to Carmel Parent Dispatch.</span>
          </div>
        )}
      </section>
    </div>
  );
};
