import React, { useState } from 'react';
import { ScreenType } from '../types';
import { AI_MODULES } from '../data/schoolData';

interface AILearningScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenAIAssistant: () => void;
}

export const AILearningScreen: React.FC<AILearningScreenProps> = ({
  onNavigate,
  onOpenAIAssistant,
}) => {
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'parent'>('student');
  const [demoPrompt, setDemoPrompt] = useState<string>(
    'Explain the water cycle for a Class 4 science project using an everyday kitchen experiment.'
  );
  const [demoResponse, setDemoResponse] = useState<string>(
    'Imagine boiling water in a kettle with a cold plate held above it! The steam rising is Evaporation, droplets forming under the plate is Condensation, and drops falling back is Precipitation. In our Class 4 STEAM bay at Mount Carmel, students replicate this using sealed terrarium jars!'
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const samplePrompts = {
    student: [
      'Explain photosynthesis simply with an analogy',
      'Give me 3 practice algebra word problems for Class 8',
      'What are the 3 laws of motion with real-world sports examples?',
    ],
    teacher: [
      'Generate a 3-tier differentiated worksheet on fractions',
      'Create a debate topic rubric on artificial intelligence ethics',
      'Draft a 45-minute lesson plan for ancient Indus Valley civilization',
    ],
    parent: [
      'How can I help my 7-year-old practice reading comprehension at home?',
      'What are the campus library timings and book lending rules?',
      'How does the Kondapur school bus route track evening drop-offs?',
    ],
  };

  const handleTestPrompt = async (promptText: string) => {
    setDemoPrompt(promptText);
    setIsGenerating(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `[Context: ${selectedRole.toUpperCase()} ASSISTANT DEMO] ${promptText}`,
        }),
      });
      const data = await res.json();
      setDemoResponse(data.reply || 'Our AI Learning Ecosystem provides tailored responses across student, teacher, and parent portals.');
    } catch {
      // Fallback
      if (selectedRole === 'student') {
        setDemoResponse(
          `[Student AI Response]: Great question! Let's break "${promptText}" down into 3 easy steps with relatable examples, plus a quick 2-minute knowledge check flashcard.`
        );
      } else if (selectedRole === 'teacher') {
        setDemoResponse(
          `[Teacher AI Copilot]: Here is a structured scaffold tailored to CBSE and Cambridge learning outcomes, with beginner, intermediate, and advanced tiers for your classroom.`
        );
      } else {
        setDemoResponse(
          `[Parent Guidance Prompt]: Suggested evening study prompt: Ask your child what surprised them most during today's science bay session, and encourage them to explain the concept in their own words!`
        );
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-12">
      {/* Header Banner */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#fed65b]/20 border border-[#fed65b]/40">
          <span className="material-symbols-outlined text-[#735c00] text-[16px]">neurology</span>
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Flagship Educational Innovation
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001428] font-bold leading-tight">
          AI-Powered Learning for the Next Generation
        </h1>
        <p className="text-sm sm:text-base text-[#43474d] leading-relaxed">
          At Mount Carmel Global School, artificial intelligence is not a novelty—it is a deeply integrated, ethically anchored educational framework designed to amplify human empathy, curiosity, and critical mastery.
        </p>
      </section>

      {/* 3 AI Pillars Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {AI_MODULES.map((mod) => (
          <div
            key={mod.id}
            className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-lg flex flex-col justify-between gap-5 hover:border-[#735c00]/50 transition-all"
          >
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#001428] text-[#fed65b] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">{mod.icon}</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#001428]">{mod.title}</h3>
                <span className="text-xs font-bold text-[#735c00]">{mod.subtitle}</span>
              </div>
              <p className="text-xs text-[#43474d] leading-relaxed">{mod.description}</p>
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-[#efeeea]">
              <span className="text-[10px] text-[#74777e] uppercase font-bold">Capabilities:</span>
              <ul className="flex flex-col gap-1.5 text-xs text-[#1b1c1a]">
                {mod.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#735c00] text-[16px] flex-shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="leading-snug text-[11px] text-[#43474d]">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive AI Sandbox Simulator */}
      <section className="p-6 sm:p-10 rounded-3xl bg-[#0f2942] text-white flex flex-col gap-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#fed65b]/10 blur-3xl pointer-events-none"></div>

        <div className="flex flex-col gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fed65b] text-[20px]">terminal</span>
            <span className="text-xs font-bold text-[#fed65b] uppercase tracking-wider">
              Interactive AI Sandbox
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold">
            Experience How MCGS AI Thinks
          </h2>
          <p className="text-xs sm:text-sm text-[#b0c9e8] max-w-2xl leading-relaxed">
            Switch between assistant roles and test real pedagogical prompts to see how the engine customizes answers for students, educators, and parents.
          </p>
        </div>

        {/* Role Segmented Selector */}
        <div className="flex items-center gap-2 p-1.5 bg-[#001428] rounded-xl self-start max-w-full overflow-x-auto relative z-10 border border-white/10">
          <button
            type="button"
            onClick={() => setSelectedRole('student')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedRole === 'student'
                ? 'bg-[#fed65b] text-[#001428] shadow-sm'
                : 'text-[#b0c9e8] hover:text-white'
            }`}
          >
            Student Assistant
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole('teacher')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedRole === 'teacher'
                ? 'bg-[#fed65b] text-[#001428] shadow-sm'
                : 'text-[#b0c9e8] hover:text-white'
            }`}
          >
            Teacher Copilot
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole('parent')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedRole === 'parent'
                ? 'bg-[#fed65b] text-[#001428] shadow-sm'
                : 'text-[#b0c9e8] hover:text-white'
            }`}
          >
            Parent Guide
          </button>
        </div>

        {/* Prompt Suggestions */}
        <div className="flex flex-col gap-2 relative z-10">
          <span className="text-[10px] uppercase font-bold text-[#fed65b]">Try a sample query:</span>
          <div className="flex flex-wrap gap-2">
            {samplePrompts[selectedRole].map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleTestPrompt(p)}
                className="px-3 py-1.5 rounded-lg bg-[#002a44] text-[#d1e4ff] text-xs font-medium hover:bg-[#00385c] hover:text-white border border-white/10 transition-all text-left cursor-pointer"
              >
                "{p}"
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Input & Output Box */}
        <div className="flex flex-col gap-3 relative z-10 bg-[#001428] p-4 sm:p-5 rounded-2xl border border-white/10">
          <div className="flex items-center gap-2 text-xs text-[#fed65b] font-bold">
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Current Prompt:</span>
          </div>
          <p className="text-xs sm:text-sm text-white font-medium italic">"{demoPrompt}"</p>

          <div className="h-px bg-white/10 my-1"></div>

          <div className="flex items-center gap-2 text-xs text-[#b0c9e8] font-bold">
            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            <span>Assistant Output:</span>
            {isGenerating && (
              <span className="text-[10px] text-[#fed65b] animate-pulse ml-2">Synthesizing...</span>
            )}
          </div>
          <div className="p-3.5 rounded-xl bg-[#0f2942] border border-white/10 text-xs sm:text-sm text-[#d1e4ff] leading-relaxed whitespace-pre-wrap">
            {demoResponse}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 relative z-10">
          <span className="text-[11px] text-[#b0c9e8]">
            Full interactive voice & chat integration available across our campus portal.
          </span>
          <button
            type="button"
            onClick={onOpenAIAssistant}
            className="h-10 px-4 rounded-lg bg-[#fed65b] text-[#001428] text-xs font-bold flex items-center gap-1.5 hover:bg-[#ffe088] active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">smart_toy</span>
            <span>Open MCGS AI Chat</span>
          </button>
        </div>
      </section>

      {/* AI Ethics & Digital Citizenship */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Moral Foundation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] font-bold">
            AI Ethics, Integrity & Human Agency
          </h2>
          <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
            We believe that technology without moral grounding is hollow. Every student from Class 1 through Class 10 undergoes structured digital literacy modules:
          </p>
          <div className="flex flex-col gap-2.5">
            <div className="p-3 rounded-xl bg-white border border-[#e4e2de] flex items-start gap-3">
              <span className="material-symbols-outlined text-[#735c00] text-[20px]">shield</span>
              <div>
                <h4 className="text-xs font-bold text-[#001428]">Algorithmic Bias & Critical Thinking</h4>
                <p className="text-[11px] text-[#43474d]">
                  Teaching students to question AI outputs, cross-verify scientific sources, and recognize bias.
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#e4e2de] flex items-start gap-3">
              <span className="material-symbols-outlined text-[#735c00] text-[20px]">lock</span>
              <div>
                <h4 className="text-xs font-bold text-[#001428]">Data Privacy & Digital Footprint</h4>
                <p className="text-[11px] text-[#43474d]">
                  Instilling privacy preservation, safe internet practices, and digital wellbeing habits.
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#e4e2de] flex items-start gap-3">
              <span className="material-symbols-outlined text-[#735c00] text-[20px]">palette</span>
              <div>
                <h4 className="text-xs font-bold text-[#001428]">Creative Sovereignty</h4>
                <p className="text-[11px] text-[#43474d]">
                  Using AI as a drafting assistant, while reserving authentic writing, art, and debate for human expression.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#f5f3ef] border border-[#e4e2de] flex flex-col gap-4">
          <span className="text-xs font-bold text-[#001428] uppercase">Grade-Wise Technology Roadmap</span>
          <div className="flex flex-col gap-3">
            <div className="p-3 rounded-xl bg-white border border-[#e4e2de]">
              <span className="text-xs font-bold text-[#735c00]">PP1 – Class 2</span>
              <p className="text-[11px] text-[#43474d] mt-0.5">
                Block-based visual puzzles, directional logic, pattern recognition, and screen-time moderation.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#e4e2de]">
              <span className="text-xs font-bold text-[#735c00]">Classes 3 – 5</span>
              <p className="text-[11px] text-[#43474d] mt-0.5">
                Scratch visual coding, basic sensor integration, touch typing, and digital citizenship basics.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#e4e2de]">
              <span className="text-xs font-bold text-[#735c00]">Classes 6 – 8</span>
              <p className="text-[11px] text-[#43474d] mt-0.5">
                Python scripting, micro-controllers (Arduino/Raspberry Pi), robotics mechanics, and dataset curation.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#e4e2de]">
              <span className="text-xs font-bold text-[#735c00]">Classes 9 – 10</span>
              <p className="text-[11px] text-[#43474d] mt-0.5">
                Machine learning fundamentals, computer vision exploration, data analysis, and competitive STEM olympiad preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#001428]">Experience Future-Ready Schooling</h3>
          <p className="text-xs text-[#43474d]">
            Enroll your child in an environment built for 2030 and beyond.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('admissions')}
          className="h-11 px-6 rounded-lg bg-[#001428] text-[#fed65b] font-bold text-xs hover:bg-[#0f2942] active:scale-95 transition-all cursor-pointer flex-shrink-0"
        >
          Begin Admission Process
        </button>
      </section>
    </div>
  );
};
