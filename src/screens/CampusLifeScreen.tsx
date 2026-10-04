import React, { useState } from 'react';
import { ScreenType } from '../types';
import { SCHOOL_IMAGES } from '../data/schoolData';

interface CampusLifeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
}

export const CampusLifeScreen: React.FC<CampusLifeScreenProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  const [activeDayTime, setActiveDayTime] = useState<string>('morning');

  const dailySchedule = [
    {
      time: '08:30 AM',
      period: 'morning',
      title: 'Morning Assembly & Mindfulness',
      desc: 'Students convene in the sunlit central quadrangle for invocation, thought for the day, national anthem, and 5 minutes of focused breathing.',
    },
    {
      time: '09:00 AM – 11:15 AM',
      period: 'morning',
      title: 'Core Academic Blocks & Lab Practical',
      desc: 'Mathematics reasoning, physical sciences experiments, and language arts in smart interactive classrooms.',
    },
    {
      time: '11:15 AM – 11:45 AM',
      period: 'midday',
      title: 'Nutritious Snack & Outdoor Play',
      desc: 'Wholesome organic meals in the cafeteria accompanied by supervised courtyard play.',
    },
    {
      time: '11:45 AM – 01:15 PM',
      period: 'midday',
      title: 'STEAM, AI Stations & Collaborative Projects',
      desc: 'Robotics kits, coding bays, model United Nations rehearsals, or bilingual creative workshops.',
    },
    {
      time: '01:15 PM – 02:00 PM',
      period: 'afternoon',
      title: 'Lunch & Library Leisure',
      desc: 'Dining hall companionship followed by quiet reading or chess games in the central library.',
    },
    {
      time: '02:00 PM – 03:15 PM',
      period: 'afternoon',
      title: 'Sports Coaching & Performing Arts',
      desc: 'Football drills, basketball practice, classical music raga exercises, or drama club rehearsals.',
    },
    {
      time: '03:15 PM – 03:30 PM',
      period: 'afternoon',
      title: 'Reflection & Bus Dispersal',
      desc: 'Daily reflection journaling and orderly boarding of GPS-monitored campus buses.',
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-12">
      {/* Header Banner */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#efeeea] border border-[#e4e2de]">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Holistic Student Life
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001428] font-bold leading-tight">
          Vibrant, Joyful & Character-Forming
        </h1>
        <p className="text-sm sm:text-base text-[#43474d] leading-relaxed">
          Education transcends textbooks. At Mount Carmel Global School, Kondapur, campus life is an exhilarating tapestry of athletics, theatrical arts, technological exploration, and lifelong camaraderie.
        </p>
      </section>

      {/* 4 Feature Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#fed65b]/20 text-[#745c00] flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">sports_soccer</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[#001428]">Sports & Athletics</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Multi-sport astro turf, basketball & badminton courts, cricket nets, martial arts dojo, and daily physical fitness under certified NIS coaches.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#d1e4ff] text-[#001428] flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">palette</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[#001428]">Arts & Performance</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Dedicated fine arts atelier, classical Hindustani & Carnatic vocal studios, western acoustic guitar rooms, and theatrical black-box stages.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#ffe088] text-[#745c00] flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">diversity_3</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[#001428]">Student Clubs</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Oratorical & Model UN club, Robotics builders guild, Eco-Conservation warriors, Young Writers press, and Mathematical logic society.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#cce5ff] text-[#001524] flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">health_and_safety</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[#001428]">Safety & Wellbeing</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            24/7 CCTV surveillance across all corners, full-time campus nurse and infirmary, child-friendly ergonomics, and GPS-enabled bus transport.
          </p>
        </div>
      </section>

      {/* Visual Photo Montage */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative h-60 rounded-2xl overflow-hidden shadow-md">
          <img
            src={SCHOOL_IMAGES.artsCreative}
            alt="Arts and Creativity"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 text-white">
            <span className="text-xs font-bold">Creative Arts Atelier</span>
          </div>
        </div>
        <div className="relative h-60 rounded-2xl overflow-hidden shadow-md">
          <img
            src={SCHOOL_IMAGES.studentLeadership}
            alt="Leadership Assembly"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 text-white">
            <span className="text-xs font-bold">Investiture & Public Speaking</span>
          </div>
        </div>
        <div className="relative h-60 rounded-2xl overflow-hidden shadow-md">
          <img
            src={SCHOOL_IMAGES.joyfulClassroom}
            alt="Joyful Classroom"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 text-white">
            <span className="text-xs font-bold">Collaborative Group Learning</span>
          </div>
        </div>
      </section>

      {/* Interactive Day in the Life Timeline */}
      <section className="p-6 sm:p-10 rounded-3xl bg-[#f5f3ef] border border-[#e4e2de] flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Daily Rhythm
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] font-bold">
            A Day in the Life of an MCGS Student
          </h2>
          <p className="text-xs sm:text-sm text-[#43474d] max-w-2xl">
            A balanced cadence ensuring intellectual stimulation, physical vigor, wholesome nutrition, and creative reflection.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2">
          {['all', 'morning', 'midday', 'afternoon'].map((period) => (
            <button
              key={period}
              type="button"
              onClick={() => setActiveDayTime(period)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                activeDayTime === period
                  ? 'bg-[#001428] text-white'
                  : 'bg-white text-[#43474d] hover:bg-[#efeeea]'
              }`}
            >
              {period === 'all' ? 'Full Day' : period}
            </button>
          ))}
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-3">
          {dailySchedule
            .filter((item) => activeDayTime === 'all' || item.period === activeDayTime)
            .map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#efeeea] text-[#001428] flex items-center justify-center text-xs font-bold font-mono flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#001428]">{item.title}</h4>
                    <p className="text-xs text-[#43474d] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#efeeea] text-xs font-mono font-bold text-[#735c00] flex-shrink-0">
                  {item.time}
                </span>
              </div>
            ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#001428] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-white">Tour Our Athletic & Cultural Facilities</h3>
          <p className="text-xs text-[#b0c9e8]">
            Walkthrough our Kondapur campus this week and see our students in action.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onOpenTourModal}
            className="h-11 px-5 rounded-lg bg-[#fed65b] text-[#001428] text-xs font-bold hover:bg-[#ffe088] active:scale-95 transition-all cursor-pointer"
          >
            Book Guided Walkthrough
          </button>
        </div>
      </section>
    </div>
  );
};
