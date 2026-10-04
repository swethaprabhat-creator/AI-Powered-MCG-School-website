import React, { useState } from 'react';
import { ScreenType } from '../types';
import { ADMISSION_STEPS, SCHOOL_IMAGES } from '../data/schoolData';

interface AdmissionsScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
}

export const AdmissionsScreen: React.FC<AdmissionsScreenProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  const [selectedGrade, setSelectedGrade] = useState('PP1');
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentDob, setStudentDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showProspectusModal, setShowProspectusModal] = useState(false);

  const gradeMatrix: Record<
    string,
    { age: string; seatStatus: string; description: string; feeBand: string }
  > = {
    PP1: {
      age: '3+ Years as of May 31, 2025',
      seatStatus: 'Limited Seats Available',
      description: 'Foundational play, sensory motor development, phonics, and socialization.',
      feeBand: 'Pre-Primary Tier (All-inclusive digital tools & snacks)',
    },
    LKG: {
      age: '4+ Years as of May 31, 2025',
      seatStatus: 'Open for Registration',
      description: 'Linguistic discovery, early arithmetic concepts, rhythm, and outdoor coordination.',
      feeBand: 'Kindergarten Tier (Includes activity supplies & sports)',
    },
    UKG: {
      age: '5+ Years as of May 31, 2025',
      seatStatus: 'Open for Registration',
      description: 'Structured phonics, reading sentences, bilingual basics, and environmental curiosity.',
      feeBand: 'Kindergarten Tier (Includes activity supplies & sports)',
    },
    'Class 1': {
      age: '6+ Years as of May 31, 2025',
      seatStatus: 'Open for Registration',
      description: 'Formal language arts, environmental studies, arithmetic reasoning, and computer basics.',
      feeBand: 'Primary Grade Tier',
    },
    'Class 2': {
      age: '7+ Years as of May 31, 2025',
      seatStatus: 'Open for Registration',
      description: 'Project-based learning, second language foundations, and scientific exploration.',
      feeBand: 'Primary Grade Tier',
    },
    'Class 3': {
      age: '8+ Years as of May 31, 2025',
      seatStatus: 'Open for Registration',
      description: 'Collaborative lab experiments, creative writing, and mental mathematics.',
      feeBand: 'Primary Grade Tier',
    },
    'Class 4': {
      age: '9+ Years as of May 31, 2025',
      seatStatus: 'Open for Registration',
      description: 'STEAM workstations, robotics logic, social studies, and swimming/athletics.',
      feeBand: 'Primary Grade Tier',
    },
    'Class 5': {
      age: '10+ Years as of May 31, 2025',
      seatStatus: 'Few Seats Remaining',
      description: 'Transition to middle school logic, debate, analytical problem solving.',
      feeBand: 'Primary Grade Tier',
    },
    'Class 6': {
      age: '11+ Years as of May 31, 2025',
      seatStatus: 'Open for Registration',
      description: 'Specialized science branches, computational coding in Python, third language.',
      feeBand: 'Secondary Grade Tier',
    },
    'Class 7': {
      age: '12+ Years as of May 31, 2025',
      seatStatus: 'Open for Registration',
      description: 'Physics, chemistry, biology lab practicals, algebra, and model parliament.',
      feeBand: 'Secondary Grade Tier',
    },
    'Class 8': {
      age: '13+ Years as of May 31, 2025',
      seatStatus: 'Open for Registration',
      description: 'Advanced computational logic, olympiad prep, and career orientation.',
      feeBand: 'Secondary Grade Tier',
    },
    'Class 9': {
      age: '14+ Years as of May 31, 2025',
      seatStatus: 'Merit Assessment Required',
      description: 'Secondary board curriculum alignment, rigorous lab experiments, mentorship.',
      feeBand: 'Secondary Grade Tier',
    },
    'Class 10': {
      age: '15+ Years as of May 31, 2025',
      seatStatus: 'Transfer Verification Required',
      description: 'Board examination mastery, mock tests, and senior career counseling.',
      feeBand: 'Senior Secondary Tier',
    },
  };

  const currentGradeInfo = gradeMatrix[selectedGrade] || gradeMatrix['PP1'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setParentName('');
    setStudentName('');
    setStudentDob('');
    setPhone('');
    setEmail('');
    setNotes('');
    setConsent(false);
    setIsSubmitted(false);
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-12">
      {/* Header Banner */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#fed65b]/25 border border-[#fed65b]/50">
          <span className="w-2 h-2 rounded-full bg-[#735c00] animate-pulse"></span>
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Admissions Open 2025–26
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001428] font-bold leading-tight">
          Begin Your Child's Journey of Excellence
        </h1>
        <p className="text-sm sm:text-base text-[#43474d] leading-relaxed">
          We welcome applications from Pre-Primary 1 through Class 10. Our admissions process is designed to be transparent, friendly, and focused on finding the right mutual fit for your child's growth.
        </p>
      </section>

      {/* 4-Step Journey Cards */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Clear 4-Step Pathway
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] font-bold">
            How to Apply
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADMISSION_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-[#001428] text-white font-bold text-sm flex items-center justify-center">
                  0{step.step}
                </span>
                <h3 className="font-serif text-base font-bold text-[#001428]">{step.title}</h3>
                <p className="text-xs text-[#43474d] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Grade & Age Eligibility Explorer */}
      <section className="p-6 sm:p-10 rounded-3xl bg-[#f5f3ef] border border-[#e4e2de] flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Grade Eligibility Matrix
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] font-bold">
            Check Age Criteria & Curriculum Focus
          </h2>
          <p className="text-xs sm:text-sm text-[#43474d]">
            Select a class level to view age cutoff, current availability, and developmental milestones.
          </p>
        </div>

        {/* Grade Pills */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(gradeMatrix).map((gr) => (
            <button
              key={gr}
              type="button"
              onClick={() => setSelectedGrade(gr)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedGrade === gr
                  ? 'bg-[#001428] text-white shadow-sm'
                  : 'bg-white text-[#43474d] hover:bg-[#efeeea]'
              }`}
            >
              {gr}
            </button>
          ))}
        </div>

        {/* Selected Grade Detail Card */}
        <div className="p-6 rounded-2xl bg-white border border-[#e4e2de] shadow-sm flex flex-col sm:flex-row justify-between gap-6 items-start sm:items-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-xl font-bold text-[#001428]">{selectedGrade}</h3>
              <span className="px-2.5 py-1 rounded-full bg-[#ffe088] text-[#745c00] text-[10px] font-bold uppercase">
                {currentGradeInfo.seatStatus}
              </span>
            </div>
            <p className="text-xs font-semibold text-[#735c00] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">cake</span>
              <span>Age Requirement: {currentGradeInfo.age}</span>
            </p>
            <p className="text-xs text-[#43474d] max-w-xl leading-relaxed">
              {currentGradeInfo.description}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end flex-shrink-0">
            <button
              type="button"
              onClick={onOpenTourModal}
              className="h-10 px-5 rounded-lg bg-[#001428] text-white text-xs font-bold hover:bg-[#0f2942] active:scale-95 transition-all cursor-pointer"
            >
              Tour Campus for {selectedGrade}
            </button>
            <button
              type="button"
              onClick={() => setShowProspectusModal(true)}
              className="text-xs font-bold text-[#735c00] underline cursor-pointer"
            >
              View Prospectus Summary
            </button>
          </div>
        </div>
      </section>

      {/* Main Form & Document Checklist Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Document Verification Checklist */}
        <div className="flex flex-col gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#735c00] text-[22px]">checklist</span>
              <h3 className="font-serif text-lg font-bold text-[#001428]">Document Checklist for Enrollment</h3>
            </div>
            <p className="text-xs text-[#43474d] leading-relaxed">
              Upon provisional offer confirmation, the following physical or digital copies are submitted to the registrar:
            </p>
            <div className="flex flex-col gap-2.5 text-xs text-[#1b1c1a]">
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f5f3ef]">
                <span className="material-symbols-outlined text-[#735c00] text-[18px]">verified</span>
                <div>
                  <span className="font-bold text-[#001428]">Birth Certificate</span>
                  <p className="text-[11px] text-[#43474d]">Issued by Municipal Corporation or authorized Registrar.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f5f3ef]">
                <span className="material-symbols-outlined text-[#735c00] text-[18px]">verified</span>
                <div>
                  <span className="font-bold text-[#001428]">Passport Size Photographs</span>
                  <p className="text-[11px] text-[#43474d]">4 copies of student and 2 copies each of both parents.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f5f3ef]">
                <span className="material-symbols-outlined text-[#735c00] text-[18px]">verified</span>
                <div>
                  <span className="font-bold text-[#001428]">Transfer Certificate (TC) & Previous Report Card</span>
                  <p className="text-[11px] text-[#43474d]">Mandatory for Class 2 and above from recognized board.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f5f3ef]">
                <span className="material-symbols-outlined text-[#735c00] text-[18px]">verified</span>
                <div>
                  <span className="font-bold text-[#001428]">Immunization & Medical Record</span>
                  <p className="text-[11px] text-[#43474d]">Standard pediatric record for emergency campus care.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f5f3ef]">
                <span className="material-symbols-outlined text-[#735c00] text-[18px]">verified</span>
                <div>
                  <span className="font-bold text-[#001428]">Proof of Residence & ID Proof</span>
                  <p className="text-[11px] text-[#43474d]">Aadhaar Card, Passport, or Utility bill for transport routing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#001428] text-white flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#fed65b] text-[#001428] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[24px]">contact_phone</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need Personal Assistance?</h4>
              <p className="text-xs text-[#b0c9e8] mt-0.5">
                Our admissions director is available at <strong>+91 40 4000 1122</strong> for guidance on curriculum shifts or mid-term transfers.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Online Enquiry Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e4e2de] shadow-lg flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-[#efeeea] pb-3">
            <span className="material-symbols-outlined text-[#735c00] text-[24px]">assignment</span>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#001428]">Official Admission Application</h3>
              <p className="text-[11px] text-[#43474d]">Academic Session 2025–26</p>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
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
                  <label className="text-[11px] font-bold text-[#001428]">Student Full Name *</label>
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
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                >
                  {Object.keys(gradeMatrix).map((gr) => (
                    <option key={gr} value={gr}>
                      {gr}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#001428]">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#001428]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="parent@domain.com"
                    className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#001428]">Previous School / Specific Needs</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention previous board, sibling in school, or transport area..."
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
                  I confirm the details provided are accurate and consent to communications regarding admission assessments.
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 w-full h-11 rounded-lg bg-[#001428] text-[#fed65b] font-bold text-xs shadow-md hover:bg-[#0f2942] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Candidate Application</span>
                <span className="material-symbols-outlined text-[17px]">send</span>
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-[#efeeea] flex flex-col items-center text-center gap-3">
              <span className="w-12 h-12 rounded-full bg-[#ffe088] text-[#745c00] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">check_circle</span>
              </span>
              <h4 className="font-serif text-lg text-[#001428] font-bold">
                Application Registered!
              </h4>
              <p className="text-xs text-[#43474d] leading-relaxed max-w-sm">
                Thank you, <strong>{parentName}</strong>. Application for <strong>{studentName}</strong> ({selectedGrade}) has been received. Our desk will contact you at {phone} within 24 hours.
              </p>
              <div className="p-3 bg-white rounded-xl border border-[#e4e2de] text-xs text-[#001428] font-mono font-bold">
                Application Token: MCGS-2025-{Math.floor(1000 + Math.random() * 9000)}
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-1 text-xs font-bold text-[#735c00] underline cursor-pointer"
              >
                Submit another application
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Prospectus Modal */}
      {showProspectusModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001428]/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full border border-[#efeeea] shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#efeeea] pb-3">
              <h3 className="font-serif text-base font-bold text-[#001428]">
                2025–26 Institutional Prospectus
              </h3>
              <button
                onClick={() => setShowProspectusModal(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#74777e] hover:bg-[#efeeea]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <p className="text-xs text-[#43474d] leading-relaxed">
              The Mount Carmel Global School comprehensive curriculum and institutional prospectus contains detailed syllabi, fee schedules, code of conduct, and transport grids.
            </p>
            <div className="p-3 bg-[#f5f3ef] rounded-xl text-xs flex flex-col gap-1 text-[#43474d]">
              <div className="flex justify-between">
                <span>Academic Year:</span>
                <strong className="text-[#001428]">2025–2026</strong>
              </div>
              <div className="flex justify-between">
                <span>Format:</span>
                <strong className="text-[#001428]">Official Digital Edition</strong>
              </div>
              <div className="flex justify-between">
                <span>Kondapur Campus:</span>
                <strong className="text-[#001428]">Verified Accreditation</strong>
              </div>
            </div>
            <button
              onClick={() => {
                alert('Digital Prospectus has been sent to your recorded email address!');
                setShowProspectusModal(false);
              }}
              className="h-10 rounded-lg bg-[#001428] text-[#fed65b] font-bold text-xs hover:bg-[#0f2942] active:scale-95 transition-all"
            >
              Request PDF Via Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
