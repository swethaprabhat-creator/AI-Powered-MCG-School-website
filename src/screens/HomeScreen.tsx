import React, { useState } from 'react';
import { ScreenType } from '../types';
import {
  SCHOOL_IMAGES,
  SCHOOL_PILLARS,
  WHY_CHOOSE_US,
  ACADEMIC_STAGES,
  FAQS,
} from '../data/schoolData';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
  onOpenAIAssistant: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenTourModal,
  onOpenAIAssistant,
}) => {
  // Enquiry Form State
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentDob, setStudentDob] = useState('');
  const [gradeApply, setGradeApply] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentNotes, setParentNotes] = useState('');
  const [consent, setConsent] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Home AI Micro-Chatbot State
  const [homeChatMessages, setHomeChatMessages] = useState<
    Array<{ role: 'assistant' | 'user'; text: string }>
  >([
    {
      role: 'assistant',
      text: 'Hi! I am the Mount Carmel Global School AI Assistant. How can I assist you with admissions, curriculum, or campus life in Kondapur today?',
    },
  ]);
  const [homeInputText, setHomeInputText] = useState('');
  const [isHomeChatLoading, setIsHomeChatLoading] = useState(false);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetEnquiryForm = () => {
    setParentName('');
    setStudentName('');
    setStudentDob('');
    setGradeApply('');
    setParentPhone('');
    setParentEmail('');
    setParentNotes('');
    setConsent(false);
    setFormSubmitted(false);
  };

  const handleSendHomeChat = async (queryText: string) => {
    const trimmed = queryText.trim();
    if (!trimmed || isHomeChatLoading) return;

    setHomeChatMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setHomeInputText('');
    setIsHomeChatLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      setHomeChatMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text:
            data.reply ||
            'Mount Carmel Global School admissions counseling team is available at the Kondapur campus to assist your child onboarding.',
        },
      ]);
    } catch {
      // Local fallback
      const qLower = trimmed.toLowerCase();
      let reply =
        "Thank you for asking! Our admissions counseling team is available at the Kondapur campus to assist your child's onboarding.";
      if (
        qLower.includes('class') ||
        qLower.includes('grades') ||
        qLower.includes('offered')
      ) {
        reply =
          'Mount Carmel Global School Kondapur offers holistic schooling from PP1 (Pre-Primary 1 / Nursery), LKG, UKG up to Class 10 with balanced academic and extracurricular immersion.';
      } else if (
        qLower.includes('admission') ||
        qLower.includes('process') ||
        qLower.includes('apply')
      ) {
        reply =
          'Admissions follow a friendly 4-step route: 1. Fill the online enquiry form, 2. Campus tour, 3. Student-educator baseline interaction, 4. Enrolment documentation.';
      } else if (
        qLower.includes('visit') ||
        qLower.includes('tour') ||
        qLower.includes('campus')
      ) {
        reply =
          'We welcome campus visits Monday through Saturday between 9:00 AM and 4:00 PM. Fill out the quick enquiry form or click Visit Campus to book your slot.';
      } else if (
        qLower.includes('ai') ||
        qLower.includes('technology') ||
        qLower.includes('learning')
      ) {
        reply =
          'Our AI Learning Ecosystem provides smart concept explanations and personalized quizzes for students, aids teachers in dynamic lesson planning, and assists parents with homework support guidance.';
      } else if (
        qLower.includes('location') ||
        qLower.includes('where') ||
        qLower.includes('contact')
      ) {
        reply =
          'We are located in Kondapur, Hyderabad (near HITEC City & Gachibowli). You can reach our front office at +91 40 4000 1122 or admissions@mountcarmelglobalschool.com.';
      }

      setHomeChatMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    } finally {
      setIsHomeChatLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-12 flex flex-col gap-6 overflow-hidden max-w-7xl mx-auto w-full">
        {/* Ambient gold decorative glow */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#fed65b]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-[#d1e4ff]/25 blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col gap-5 flex-1">
            {/* Institutional Badge */}
            <div className="flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#efeeea] shadow-sm border border-[#e4e2de]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#735c00] animate-pulse"></span>
              <span className="text-[#735c00] font-bold text-xs tracking-wide">
                PP1 to Class 10 • Kondapur, Hyderabad
              </span>
            </div>

            {/* Hero Title & Subtitle */}
            <div className="flex flex-col gap-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001428] font-bold tracking-tight leading-[1.18]">
                Where Young Minds{' '}
                <span className="italic text-[#735c00] font-serif">Learn, Grow</span> & Lead
              </h1>
              <p className="text-[#43474d] text-base sm:text-lg leading-relaxed max-w-xl">
                Empowering students with knowledge, character, creativity, and confidence for a rapidly changing world in the heart of Kondapur.
              </p>
            </div>

            {/* CTA Stack */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('admissions')}
                className="h-12 px-6 rounded-lg bg-[#001428] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-[#0f2942] active:scale-95 transition-all cursor-pointer"
              >
                <span>Explore Admissions</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <button
                type="button"
                onClick={onOpenTourModal}
                className="h-12 px-6 rounded-lg bg-[#efeeea] text-[#001428] text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#eae8e4] active:scale-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Schedule Campus Tour</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="flex items-center gap-4 pt-2 text-xs text-[#43474d]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#735c00] text-[18px]">verified</span>
                <span>CBSE & Cambridge Aligned</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#735c00] text-[18px]">psychology</span>
                <span>AI-Assisted Learning</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Visual Frame (Requested Images) */}
          <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl bg-white border border-[#e4e2de]">
            <div className="grid grid-cols-2 gap-1 w-full h-72 sm:h-80">
              <div className="relative h-full overflow-hidden group">
                <img
                  src={SCHOOL_IMAGES.campusBuilding1}
                  alt="Mount Carmel Global School Building"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#001428]/85 backdrop-blur-sm text-white text-[11px] font-semibold">
                  Campus Building
                </div>
              </div>
              <div className="relative h-full overflow-hidden group">
                <img
                  src={SCHOOL_IMAGES.experientialLearning}
                  alt="Mount Carmel Early Years Hands-on Learning"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#001428]/85 backdrop-blur-sm text-white text-[11px] font-semibold">
                  Experiential Learning
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#001428]/80 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md">
              <span className="material-symbols-outlined text-[#735c00] text-[16px]">psychology</span>
              <span className="text-[11px] text-[#001428] font-bold">Smart Future-Ready Learning</span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0f2942]/90 backdrop-blur-md text-white border border-white/10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#fed65b] text-[20px]">workspace_premium</span>
                <span className="text-xs font-bold">Holistic Development Ecosystem</span>
              </div>
              <span className="text-[11px] text-[#fed65b] font-bold">PP1 – Class 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION STRIP (Horizontal Flow) */}
      <section className="px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e4e2de] shadow-sm">
            <span className="material-symbols-outlined text-[#001428] text-[20px]">school</span>
            <span className="text-[#001428] text-xs font-bold">PP1 – Class 10</span>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e4e2de] shadow-sm">
            <span className="material-symbols-outlined text-[#735c00] text-[20px]">auto_stories</span>
            <span className="text-[#001428] text-xs font-bold">Holistic Learning</span>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e4e2de] shadow-sm">
            <span className="material-symbols-outlined text-[#001428] text-[20px]">smart_display</span>
            <span className="text-[#001428] text-xs font-bold">Smart Classrooms</span>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e4e2de] shadow-sm">
            <span className="material-symbols-outlined text-[#735c00] text-[20px]">sports_cricket</span>
            <span className="text-[#001428] text-xs font-bold">Sports & Athletics</span>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e4e2de] shadow-sm">
            <span className="material-symbols-outlined text-[#001428] text-[20px]">shield</span>
            <span className="text-[#001428] text-xs font-bold">Safe & Caring Environment</span>
          </div>
        </div>
      </section>

      {/* WELCOME & PHILOSOPHY */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto w-full flex flex-col gap-8" id="welcome-philosophy">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex flex-col gap-3 flex-1">
            <span className="text-[#735c00] uppercase tracking-widest text-xs font-bold">
              Institutional Ethos
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#001428] leading-tight">
              Building Confident Learners for a Changing World
            </h2>
            <p className="text-[#43474d] text-sm sm:text-base leading-relaxed">
              At Mount Carmel Global School, Kondapur, we cultivate an intellectually vibrant sanctuary where academic curiosity aligns seamlessly with moral conviction. Our pedagogy harmonizes classical discipline with innovative experiential inquiry.
            </p>

            {/* 9 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-4">
              {SCHOOL_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#efeeea] shadow-sm hover:border-[#735c00]/40 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#ffe088] flex items-center justify-center text-[#745c00] flex-shrink-0">
                    <span className="material-symbols-outlined text-[15px]">check</span>
                  </span>
                  <span className="text-xs text-[#001428] font-bold">{pillar}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about-us')}
                className="h-11 px-5 rounded-lg bg-[#efeeea] text-[#001428] text-xs font-bold inline-flex items-center gap-2 hover:bg-[#eae8e4] active:scale-95 transition-all cursor-pointer"
              >
                <span>Learn More About Us</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </button>
            </div>
          </div>

          {/* Visual Pair */}
          <div className="w-full lg:w-96 flex flex-col sm:flex-row lg:flex-col gap-3">
            <div className="h-48 sm:h-52 rounded-xl overflow-hidden relative bg-white border border-[#e4e2de] shadow-sm flex-1">
              <img
                src={SCHOOL_IMAGES.campusBuilding2}
                alt="Mount Carmel School Campus Building"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#fbf9f5]/90 backdrop-blur-sm text-xs text-[#001428] font-bold">
                Our Campus
              </span>
            </div>
            <div className="h-48 sm:h-52 rounded-xl overflow-hidden relative bg-white border border-[#e4e2de] shadow-sm flex-1">
              <img
                src={SCHOOL_IMAGES.joyfulClassroom}
                alt="Mount Carmel Classrooms and Co-curricular Activities"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#fbf9f5]/90 backdrop-blur-sm text-xs text-[#001428] font-bold">
                Joyful Learning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE MCGS (6 Interactive Cards) */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 bg-[#f5f3ef] border-y border-[#e4e2de]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 max-w-xl">
            <span className="text-[#735c00] uppercase tracking-widest text-xs font-bold">
              The Carmel Standard
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] leading-tight">
              Why Families Choose Mount Carmel
            </h2>
            <p className="text-[#43474d] text-sm">
              Six foundational reasons parents entrust us with their child's holistic formation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#efeeea] shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.badgeColor}`}>
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#74777e]">{item.number}</span>
                </div>
                <h3 className="font-serif text-base text-[#001428] font-bold">{item.title}</h3>
                <p className="text-xs text-[#43474d] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC JOURNEY (Learning Stages) */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-7xl mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          <span className="text-[#735c00] uppercase tracking-widest text-xs font-bold">
            Progressive Pedagogy
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] leading-tight">
            The Academic Journey
          </h2>
          <p className="text-[#43474d] text-sm">
            Deliberately structured developmental milestones customized for each age group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ACADEMIC_STAGES.map((stage) => (
            <div
              key={stage.id}
              className="p-6 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col justify-between gap-4 hover:border-[#735c00]/50 transition-all"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-[#efeeea] pb-3">
                  <span className="px-3 py-1 rounded-full bg-[#ffe088] text-[#745c00] text-[11px] font-bold uppercase tracking-wider">
                    {stage.stage}
                  </span>
                  <span className="text-xs text-[#74777e] font-semibold">{stage.classes}</span>
                </div>
                <h3 className="font-serif text-lg text-[#001428] font-bold">{stage.title}</h3>
                <p className="text-xs text-[#43474d] leading-relaxed">{stage.description}</p>
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-[#efeeea]">
                <span className="text-[10px] text-[#74777e] uppercase font-bold">Core Focus Areas:</span>
                <div className="flex flex-wrap gap-1.5">
                  {stage.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#f5f3ef] text-[11px] text-[#43474d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliation Note Box */}
        <div className="p-4 rounded-xl bg-[#efeeea] border border-[#e4e2de] flex items-start gap-3">
          <span className="material-symbols-outlined text-[#735c00] text-[22px] flex-shrink-0 mt-0.5">
            info
          </span>
          <p className="text-xs text-[#43474d] leading-relaxed">
            <strong className="text-[#001428] font-bold">Curriculum Disclosure:</strong> Curriculum strictly aligned with contemporary national & global educational standards (CBSE and Cambridge benchmarks).
          </p>
        </div>
      </section>

      {/* SPECIAL DIFFERENTIATOR: AI-POWERED LEARNING ECOSYSTEM */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-7xl mx-auto w-full">
        <div className="bg-[#0f2942] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl flex flex-col gap-8">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#fed65b]/15 blur-3xl pointer-events-none"></div>

          <div className="flex flex-col gap-2 max-w-2xl relative z-10">
            <div className="flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#002a44] text-[#fed65b] text-[11px] font-bold uppercase tracking-wider border border-[#fed65b]/20">
              <span className="material-symbols-outlined text-[15px]">bolt</span>
              Innovation Flagship
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white leading-tight">
              AI-Powered Learning for the Next Generation
            </h2>
            <p className="text-[#b0c9e8] text-sm sm:text-base leading-relaxed">
              How Mount Carmel seamlessly bridges artificial intelligence with compassionate classroom mentorship for students, teachers, and parents.
            </p>
          </div>

          {/* 3 Connected AI Roles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {/* Student AI Assistant */}
            <div className="p-5 rounded-2xl bg-[#001428] border border-white/10 text-white flex flex-col gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#fed65b]/20 text-[#fed65b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">psychology_alt</span>
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">Student AI Assistant</h4>
                  <span className="text-[11px] text-[#fed65b]">24/7 Personalized Revision</span>
                </div>
              </div>
              <p className="text-xs text-[#b0c9e8] leading-relaxed">
                Simplifies complex scientific & mathematical concepts, generates custom practice flashcards, and provides instant adaptive test feedback.
              </p>
            </div>

            {/* Teacher AI Assistant */}
            <div className="p-5 rounded-2xl bg-[#001428] border border-white/10 text-white flex flex-col gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#fed65b]/20 text-[#fed65b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">co_present</span>
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">Teacher AI Assistant</h4>
                  <span className="text-[11px] text-[#fed65b]">Pedagogical Supercharger</span>
                </div>
              </div>
              <p className="text-xs text-[#b0c9e8] leading-relaxed">
                Assists faculty with creative lesson design, multi-tier question papers, student comprehension diagnostics, and tailored learning interventions.
              </p>
            </div>

            {/* Parent AI Assistant */}
            <div className="p-5 rounded-2xl bg-[#001428] border border-white/10 text-white flex flex-col gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#fed65b]/20 text-[#fed65b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">family_restroom</span>
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">Parent AI Assistant</h4>
                  <span className="text-[11px] text-[#fed65b]">Empowered Home Guidance</span>
                </div>
              </div>
              <p className="text-xs text-[#b0c9e8] leading-relaxed">
                Provides homework support prompts, tracks academic progress milestones, and supplies instant answers to campus schedule queries.
              </p>
            </div>
          </div>

          {/* AI Ecosystem Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 relative z-10 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('ai-learning')}
              className="h-12 px-6 rounded-lg bg-[#fed65b] text-[#001428] font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-[#ffe088] active:scale-95 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">neurology</span>
              <span>Explore AI Learning Platform</span>
            </button>

            <button
              type="button"
              onClick={onOpenAIAssistant}
              className="h-12 px-6 rounded-lg bg-[#002a44] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#00385c] active:scale-95 transition-all border border-white/10 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">smart_toy</span>
              <span>Launch Interactive Assistant</span>
            </button>
          </div>
        </div>
      </section>

      {/* CAMPUS & STUDENT LIFE HIGHLIGHTS */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-7xl mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          <span className="text-[#735c00] uppercase tracking-widest text-xs font-bold">
            Vibrant Campus
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] leading-tight">
            Life at Mount Carmel
          </h2>
          <p className="text-[#43474d] text-sm">
            Purpose-built learning spaces situated within Hyderabad's premier cyber and academic corridor.
          </p>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-3 p-3 rounded-2xl bg-white border border-[#e4e2de] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-36 rounded-xl bg-[#f5f3ef] overflow-hidden">
              <img
                src={SCHOOL_IMAGES.joyfulClassroom}
                alt="Classrooms and early learning activities at Mount Carmel Global School"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#001428]">Smart Classrooms</h4>
              <p className="text-xs text-[#43474d] mt-1 leading-relaxed">
                Interactive, student-centric audiovisual classrooms & pods.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3 rounded-2xl bg-white border border-[#e4e2de] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-36 rounded-xl bg-[#f5f3ef] overflow-hidden">
              <img
                src={SCHOOL_IMAGES.experientialLearning}
                alt="Foundational hands-on learning at Mount Carmel Global School"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#001428]">Hands-on Pedagogy</h4>
              <p className="text-xs text-[#43474d] mt-1 leading-relaxed">
                Sensory exploration, coding logic, and conceptual bays.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3 rounded-2xl bg-white border border-[#e4e2de] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-36 rounded-xl bg-[#f5f3ef] overflow-hidden">
              <img
                src={SCHOOL_IMAGES.artsCreative}
                alt="Creative arts and student expression at Mount Carmel"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#001428]">Arts & Creativity</h4>
              <p className="text-xs text-[#43474d] mt-1 leading-relaxed">
                Visual arts, drawing exhibits, music, and performance stages.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-3 rounded-2xl bg-white border border-[#e4e2de] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-36 rounded-xl bg-[#f5f3ef] overflow-hidden">
              <img
                src={SCHOOL_IMAGES.studentLeadership}
                alt="Student leadership and public speaking events at Mount Carmel"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#001428]">Student Leadership</h4>
              <p className="text-xs text-[#43474d] mt-1 leading-relaxed">
                Stage presentations, assemblies, debate, and character development.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => onNavigate('campus-life')}
            className="h-11 px-5 rounded-lg bg-[#efeeea] text-[#001428] text-xs font-bold inline-flex items-center gap-2 hover:bg-[#eae8e4] active:scale-95 transition-all cursor-pointer"
          >
            <span>Explore Campus Life</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* ADMISSIONS SECTION & 4-STEP TIMELINE */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 bg-[#f5f3ef] border-y border-[#e4e2de]" id="admissions-section">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 max-w-xl">
            <span className="text-[#735c00] uppercase tracking-widest text-xs font-bold">
              Admissions Open 2025–26
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] leading-tight">
              Open the Door to Possibilities
            </h2>
            <p className="text-[#43474d] text-sm">
              Begin your child's transformative educational voyage with a structured, transparent four-step pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: 4-Step Process & Parent Partnership Card */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e4e2de] shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-[#001428] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold text-[#001428]">Online Enquiry</h4>
                    <p className="text-[11px] text-[#43474d] mt-0.5 leading-relaxed">
                      Fill the form to register your candidate interest with our admissions desk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e4e2de] shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-[#fed65b] text-[#001428] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold text-[#001428]">Campus Walkthrough</h4>
                    <p className="text-[11px] text-[#43474d] mt-0.5 leading-relaxed">
                      Tour our Kondapur campus and interact with academic coordinators.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e4e2de] shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-[#001524] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold text-[#001428]">Baseline Interaction</h4>
                    <p className="text-[11px] text-[#43474d] mt-0.5 leading-relaxed">
                      Friendly informal exchange for early years or age-appropriate concept check.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e4e2de] shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-[#ffe088] text-[#745c00] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold text-[#001428]">Enrolment Confirmation</h4>
                    <p className="text-[11px] text-[#43474d] mt-0.5 leading-relaxed">
                      Offer dispatch, document verification, and welcome kit onboarding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Photo Card */}
              <div className="rounded-2xl overflow-hidden bg-white border border-[#e4e2de] shadow-sm flex flex-col sm:flex-row">
                <div className="w-full sm:w-52 h-44 bg-[#f5f3ef] overflow-hidden flex-shrink-0">
                  <img
                    src={SCHOOL_IMAGES.parentConsultation}
                    alt="Parents during admission consultation at Mount Carmel Global School"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center gap-1.5">
                  <div className="flex items-center gap-1.5 text-[#735c00] text-[11px] font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">support_agent</span>
                    <span>Parent Partnership</span>
                  </div>
                  <h4 className="font-serif text-sm text-[#001428] font-bold">
                    Personalized Admission Consultation
                  </h4>
                  <p className="text-xs text-[#43474d] leading-relaxed">
                    Our coordinators conduct one-on-one sessions to understand your child's learning style and ensure a smooth transition.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Embedded Interactive Mobile Enquiry Form */}
            <div className="p-6 rounded-2xl bg-white border border-[#e4e2de] shadow-md flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-[#efeeea] pb-3">
                <span className="material-symbols-outlined text-[#735c00] text-[24px]">edit_note</span>
                <div>
                  <h3 className="font-serif text-base text-[#001428] font-bold">Quick Admission Enquiry</h3>
                  <p className="text-[11px] text-[#43474d]">
                    Our admissions counselor will connect within 24 business hours.
                  </p>
                </div>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-bold text-[#001428]">Parent / Guardian Full Name *</label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#001428]">Student Name *</label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#001428]">Date of Birth *</label>
                      <input
                        type="date"
                        required
                        value={studentDob}
                        onChange={(e) => setStudentDob(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-bold text-[#001428]">Grade Applying For *</label>
                    <select
                      required
                      value={gradeApply}
                      onChange={(e) => setGradeApply(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                    >
                      <option value="" disabled>Select class level...</option>
                      <option value="PP1">Pre-Primary 1 (PP1 / Nursery)</option>
                      <option value="LKG">Lower Kindergarten (LKG)</option>
                      <option value="UKG">Upper Kindergarten (UKG)</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#001428]">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#001428]">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={parentEmail}
                        onChange={(e) => setParentEmail(e.target.value)}
                        placeholder="parent@domain.com"
                        className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-bold text-[#001428]">Questions / Specific Interests</label>
                    <textarea
                      rows={2}
                      value={parentNotes}
                      onChange={(e) => setParentNotes(e.target.value)}
                      placeholder="Tell us about previous curriculum, transport needs, or sports interests..."
                      className="w-full p-2.5 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-2 pt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded text-[#001428]"
                    />
                    <span className="text-[11px] text-[#43474d] leading-tight">
                      I consent to Mount Carmel Global School contacting me via Phone/WhatsApp for admissions guidance and event notices.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="mt-2 w-full h-11 rounded-lg bg-[#001428] text-[#fed65b] font-bold text-xs shadow-md hover:bg-[#0f2942] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Admission Enquiry</span>
                    <span className="material-symbols-outlined text-[17px]">send</span>
                  </button>
                </form>
              ) : (
                <div className="p-6 rounded-xl bg-[#efeeea] flex flex-col items-center text-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-[#ffe088] text-[#745c00] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">check_circle</span>
                  </span>
                  <h4 className="font-serif text-base text-[#001428] font-bold">
                    Enquiry Successfully Logged!
                  </h4>
                  <p className="text-xs text-[#43474d] leading-relaxed">
                    Thank you for choosing Mount Carmel Global School. An admissions officer will contact you within 24 hours to schedule your candidate consultation.
                  </p>
                  <button
                    type="button"
                    onClick={resetEnquiryForm}
                    className="mt-2 text-xs font-bold text-[#735c00] underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FAQ ACCORDION */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-4xl mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col gap-1.5 text-center items-center">
          <span className="text-[#735c00] uppercase tracking-widest text-xs font-bold">
            Got Questions?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#43474d] text-sm max-w-md">
            Key details parents ask most regarding our Kondapur institution.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {FAQS.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#e4e2de] shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className="text-sm font-bold text-[#001428]">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-[#74777e] text-[22px] transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#735c00]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-[#efeeea]">
                    <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE MCGS AI ASSISTANT (Embedded Micro-Chatbot Widget) */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto w-full">
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-xl flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#efeeea]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#001428] flex items-center justify-center text-[#fed65b]">
                <span className="material-symbols-outlined text-[22px]">smart_toy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#001428]">MCGS AI Assistant</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#735c00] animate-pulse"></span>
                  <span className="text-[10px] text-[#74777e]">Online • Powered by Gemini AI</span>
                </div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#efeeea] text-[10px] text-[#001428] font-bold">
              v2.4
            </span>
          </div>

          {/* Chat Stream Box */}
          <div className="flex flex-col gap-2.5 p-4 rounded-2xl bg-[#f5f3ef] max-h-72 overflow-y-auto">
            {homeChatMessages.map((msg, mIdx) => (
              <div
                key={mIdx}
                className={`flex items-start gap-2 max-w-[85%] ${
                  msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#001428] flex-shrink-0 flex items-center justify-center text-[#fed65b] text-[12px]">
                    <span className="material-symbols-outlined text-[14px]">smart_toy</span>
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-[#001428] text-white rounded-tr-none'
                      : 'bg-white text-[#1b1c1a] border border-[#e4e2de] rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isHomeChatLoading && (
              <div className="flex items-center gap-2 self-start p-2.5 rounded-xl bg-white border border-[#e4e2de]">
                <span className="w-2 h-2 rounded-full bg-[#735c00] animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-[#735c00] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-[#735c00] animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
          </div>

          {/* Suggested Chips */}
          <div className="flex flex-col gap-1.5 pt-1">
            <span className="text-[10px] text-[#74777e] uppercase font-bold tracking-wider">
              Suggested Quick Inquiries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'What classes are offered?',
                'Admissions process',
                'Campus visit booking',
                'AI Learning features',
                'School location & contact',
              ].map((chip, cIdx) => (
                <button
                  key={cIdx}
                  type="button"
                  onClick={() => handleSendHomeChat(chip)}
                  className="px-3 py-1 rounded-full bg-[#efeeea] text-[#001428] text-[11px] font-semibold hover:bg-[#eae8e4] active:scale-95 transition-all text-left cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="text"
              value={homeInputText}
              onChange={(e) => setHomeInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendHomeChat(homeInputText);
                }
              }}
              placeholder="Type a question for MCGS AI..."
              className="flex-grow h-11 px-3.5 rounded-xl bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] outline-none focus:border-[#001428]"
            />
            <button
              type="button"
              onClick={() => handleSendHomeChat(homeInputText)}
              disabled={!homeInputText.trim() || isHomeChatLoading}
              className="w-11 h-11 rounded-xl bg-[#001428] text-[#fed65b] flex items-center justify-center active:scale-95 transition-all disabled:opacity-50 cursor-pointer shadow-sm"
              aria-label="Send"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT HIGHLIGHT */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-7xl mx-auto w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="text-[#735c00] uppercase tracking-widest text-xs font-bold">
            Visit Our Campus
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] leading-tight">
            Kondapur Campus
          </h2>
          <p className="text-[#43474d] text-sm">
            Strategically located in Hyderabad's knowledge corridor, easily accessible from Gachibowli, Madhapur, and KPHB.
          </p>
        </div>

        {/* Map Trigger Container */}
        <div
          className="w-full h-52 sm:h-64 rounded-2xl bg-cover bg-center overflow-hidden relative shadow-md border border-[#e4e2de]"
          style={{ backgroundImage: `url('${SCHOOL_IMAGES.mapBackground}')` }}
        >
          <div className="absolute inset-0 bg-[#001428]/40 backdrop-blur-[2px] flex items-center justify-center">
            <a
              href="https://maps.google.com/?q=Kondapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/95 backdrop-blur-md text-[#001428] text-xs font-bold shadow-lg flex items-center gap-2 hover:bg-white active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[#735c00] text-[20px]">near_me</span>
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="tel:+914040001122"
            className="p-4 rounded-xl bg-white border border-[#e4e2de] shadow-sm flex items-center gap-3.5 hover:border-[#735c00]/50 transition-all"
          >
            <span className="w-10 h-10 rounded-full bg-[#001428] text-[#fed65b] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[18px]">call</span>
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#74777e] uppercase font-bold">Direct Admissions Desk</span>
              <span className="text-xs font-bold text-[#001428]">+91 40 4000 1122</span>
            </div>
          </a>

          <a
            href="mailto:admissions@mountcarmelglobalschool.com"
            className="p-4 rounded-xl bg-white border border-[#e4e2de] shadow-sm flex items-center gap-3.5 hover:border-[#735c00]/50 transition-all"
          >
            <span className="w-10 h-10 rounded-full bg-[#001428] text-[#fed65b] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-[#74777e] uppercase font-bold">Email Inquiries</span>
              <span className="text-xs font-bold text-[#001428] truncate">admissions@mountcarmel.edu</span>
            </div>
          </a>

          <div className="p-4 rounded-xl bg-white border border-[#e4e2de] shadow-sm flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-full bg-[#001428] text-[#fed65b] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#74777e] uppercase font-bold">Admissions Office Hours</span>
              <span className="text-xs font-bold text-[#001428]">Mon – Sat: 9:00 AM – 4:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
