import React, { useState } from 'react';
import { ScreenType } from '../types';
import { ACADEMIC_STAGES, SCHOOL_IMAGES } from '../data/schoolData';

interface AcademicsScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
}

export const AcademicsScreen: React.FC<AcademicsScreenProps> = ({ onNavigate, onOpenTourModal }) => {
  const [activeStageId, setActiveStageId] = useState<string>('early-years');

  const selectedStage =
    ACADEMIC_STAGES.find((s) => s.id === activeStageId) || ACADEMIC_STAGES[0];

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-12">
      {/* Header Banner */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#efeeea] border border-[#e4e2de]">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Academic Excellence
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001428] font-bold leading-tight">
          A Rigorous, Inquiry-Driven Continuum
        </h1>
        <p className="text-sm sm:text-base text-[#43474d] leading-relaxed">
          From early sensory discovery in Pre-Primary through intellectual mastery in secondary board exams, our progressive curriculum is designed to inspire lifelong critical thinkers.
        </p>
      </section>

      {/* Stage Selector Tabs */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2 border-b border-[#e4e2de] pb-2 overflow-x-auto scrollbar-none">
          {ACADEMIC_STAGES.map((stage) => {
            const isSelected = activeStageId === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#001428] text-white shadow-md'
                    : 'bg-[#f5f3ef] text-[#43474d] hover:bg-[#efeeea]'
                }`}
              >
                {stage.stage} ({stage.classes})
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#e4e2de] shadow-xl flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#735c00] uppercase">
              <span className="material-symbols-outlined text-[18px]">school</span>
              <span>{selectedStage.age}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] font-bold">
              {selectedStage.title}
            </h2>
            <p className="text-sm text-[#43474d] leading-relaxed">
              {selectedStage.description}
            </p>

            <div className="p-4 rounded-xl bg-[#f5f3ef] border border-[#e4e2de] flex flex-col gap-1.5">
              <span className="text-xs font-bold text-[#001428]">Developmental Focus:</span>
              <p className="text-xs text-[#43474d] leading-relaxed">{selectedStage.focus}</p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-bold text-[#001428]">Key Curricular Elements:</span>
              <div className="flex flex-wrap gap-2">
                {selectedStage.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#efeeea] text-xs font-semibold text-[#001428]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 flex gap-3">
              <button
                type="button"
                onClick={() => onNavigate('admissions')}
                className="h-10 px-5 rounded-lg bg-[#001428] text-white text-xs font-bold hover:bg-[#0f2942] active:scale-95 transition-all cursor-pointer"
              >
                Apply for {selectedStage.stage}
              </button>
              <button
                type="button"
                onClick={onOpenTourModal}
                className="h-10 px-5 rounded-lg bg-[#efeeea] text-[#001428] text-xs font-bold hover:bg-[#eae8e4] active:scale-95 transition-all cursor-pointer"
              >
                Book Walkthrough
              </button>
            </div>
          </div>

          {/* Visual Representative */}
          <div className="w-full lg:w-96 h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#f5f3ef] border border-[#e4e2de] shadow-md flex-shrink-0">
            <img
              src={
                activeStageId === 'early-years'
                  ? SCHOOL_IMAGES.experientialLearning
                  : activeStageId === 'primary'
                  ? SCHOOL_IMAGES.joyfulClassroom
                  : SCHOOL_IMAGES.campusBuilding1
              }
              alt={selectedStage.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Teaching Methodology & Innovation Matrix */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#d1e4ff] text-[#001428] flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">smart_display</span>
          </div>
          <h3 className="font-serif text-base font-bold text-[#001428]">Smart Classrooms</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Every classroom is equipped with high-resolution interactive touch panels, curated digital media libraries, and student response clickers for immediate formative understanding.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#ffe088] text-[#745c00] flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">science</span>
          </div>
          <h3 className="font-serif text-base font-bold text-[#001428]">Experiential STEM Labs</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Composite science laboratories, physics and chemistry experimentation stations, and robotics assembly bays where theoretical equations transform into practical prototypes.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#cce5ff] text-[#001524] flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">auto_stories</span>
          </div>
          <h3 className="font-serif text-base font-bold text-[#001428]">Bilingual & Literary Depth</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Rigorous English language arts, secondary language options (Hindi, Telugu, French), structured public speech forums, and rich classical & contemporary library holdings.
          </p>
        </div>
      </section>

      {/* Assessment Framework */}
      <section className="p-8 rounded-3xl bg-[#f5f3ef] border border-[#e4e2de] flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Evaluation Philosophy
          </span>
          <h3 className="font-serif text-2xl text-[#001428] font-bold">
            Continuous Holistic Assessment
          </h3>
          <p className="text-xs sm:text-sm text-[#43474d] max-w-2xl leading-relaxed">
            We avoid single high-stress exams. Our multi-faceted evaluation model tracks regular portfolio submissions, oral presentations, collaborative lab work, and adaptive diagnostic quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-[#e4e2de] flex flex-col gap-1">
            <span className="text-xs font-bold text-[#001428]">Formative Checks</span>
            <p className="text-[11px] text-[#43474d]">Weekly comprehension check-ins without grade stigma.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#e4e2de] flex flex-col gap-1">
            <span className="text-xs font-bold text-[#001428]">Project Portfolios</span>
            <p className="text-[11px] text-[#43474d]">Hands-on research dossiers and collaborative experiments.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#e4e2de] flex flex-col gap-1">
            <span className="text-xs font-bold text-[#001428]">AI Diagnostics</span>
            <p className="text-[11px] text-[#43474d]">Pinpointing learning bottlenecks for timely teacher support.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#e4e2de] flex flex-col gap-1">
            <span className="text-xs font-bold text-[#001428]">Summative Benchmarks</span>
            <p className="text-[11px] text-[#43474d]">Term-end synthesis mapped to national board patterns.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
