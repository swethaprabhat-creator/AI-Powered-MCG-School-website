import React from 'react';
import { ScreenType } from '../types';
import { SCHOOL_IMAGES, SCHOOL_PILLARS } from '../data/schoolData';

interface AboutScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onOpenTourModal }) => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-12">
      {/* Header Banner */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#efeeea] border border-[#e4e2de]">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            About Our Institution
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001428] font-bold leading-tight">
          Nurturing Intellect, Cultivating Character
        </h1>
        <p className="text-sm sm:text-base text-[#43474d] leading-relaxed">
          Founded on the ethos of timeless academic dignity and future-ready innovation, Mount Carmel Global School in Kondapur, Hyderabad, prepares young thinkers to thrive in a complex, globally interconnected world.
        </p>
      </section>

      {/* Campus Hero Photo */}
      <section className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-[#e4e2de] shadow-xl">
        <img
          src={SCHOOL_IMAGES.campusBuilding1}
          alt="Mount Carmel Global School Campus"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001428]/85 via-[#001428]/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
          <span className="text-xs font-bold text-[#fed65b] uppercase tracking-wider">
            Kondapur Knowledge Corridor
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
            A Sanctuary of Curiosity and Lifelong Mentorship
          </h2>
        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#d1e4ff] text-[#001428] flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">visibility</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#001428]">Our Vision</h3>
          <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
            To be recognized as a premier educational benchmark where intellectual rigor, empathetic moral compass, and creative courage converge—producing compassionate leaders who shape a harmonious global society.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#ffe088] text-[#745c00] flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">flag</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#001428]">Our Mission</h3>
          <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
            To provide an enriched child-centric ecosystem combining classical academic foundations, AI-augmented pedagogical inquiry, multi-disciplinary athletics, and community ethics in a nurturing, safe environment.
          </p>
        </div>
      </section>

      {/* Leadership & Pedagogical Framework */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#0f2942] text-white flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-white overflow-hidden flex-shrink-0 shadow-lg border border-white/20">
          <img
            src={SCHOOL_IMAGES.studentLeadership}
            alt="Leadership & Assemblies"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-[#fed65b] uppercase tracking-wider">
            From the Academic Directorate
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
            "Education is not merely the transmission of facts, but the ignition of curiosity."
          </h3>
          <p className="text-xs sm:text-sm text-[#b0c9e8] leading-relaxed">
            At Mount Carmel Global School, every child is greeted as an individual with distinct talents. We reject rote assembly-line schooling. Our educators serve as intellectual catalysts, encouraging inquiry, philosophical empathy, computational fluency, and resilient grit from Pre-Primary 1 all the way through Class 10.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#fed65b] text-[#001428] font-bold flex items-center justify-center text-xs">
              MC
            </div>
            <div>
              <p className="text-xs font-bold text-white">Academic Advisory Board</p>
              <p className="text-[11px] text-[#7991af]">Mount Carmel Global School, Kondapur</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Pillars of Holistic Excellence */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="text-[#735c00] uppercase tracking-widest text-xs font-bold">
            Foundational Anchors
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] leading-tight">
            The 9 Pillars of Carmel Excellence
          </h2>
          <p className="text-xs sm:text-sm text-[#43474d]">
            Integrated across daily assemblies, syllabus curricula, athletic routines, and mentorship sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCHOOL_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-[#efeeea] text-[#001428] flex items-center justify-center font-bold text-xs flex-shrink-0">
                0{idx + 1}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#001428]">{pillar}</h4>
                <p className="text-[11px] text-[#43474d] mt-1 leading-relaxed">
                  Systematically cultivated via student initiatives, lab projects, and inter-house debates.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-8 rounded-2xl bg-[#f5f3ef] border border-[#e4e2de] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="font-serif text-xl font-bold text-[#001428]">Experience Our Campus Firsthand</h3>
          <p className="text-xs text-[#43474d]">
            Book a guided tour of our Kondapur campus and interact with our admissions counselors.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onOpenTourModal}
            className="h-11 px-5 rounded-lg bg-[#001428] text-white text-xs font-bold hover:bg-[#0f2942] active:scale-95 transition-all cursor-pointer"
          >
            Schedule Campus Visit
          </button>
          <button
            type="button"
            onClick={() => onNavigate('admissions')}
            className="h-11 px-5 rounded-lg bg-[#fed65b] text-[#001428] text-xs font-bold hover:bg-[#ffe088] active:scale-95 transition-all cursor-pointer"
          >
            Apply for 2025–26
          </button>
        </div>
      </section>
    </div>
  );
};
