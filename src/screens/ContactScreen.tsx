import React, { useState } from 'react';
import { ScreenType } from '../types';
import { SCHOOL_IMAGES } from '../data/schoolData';

interface ContactScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  onNavigate,
  onOpenTourModal,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-12">
      {/* Header Banner */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#efeeea] border border-[#e4e2de]">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Connect With Us
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#001428] font-bold leading-tight">
          Visit Our Campus in Kondapur
        </h1>
        <p className="text-sm sm:text-base text-[#43474d] leading-relaxed">
          Conveniently located within Hyderabad's premier cyber and residential corridor. Our admissions and front office team is ready to welcome your family.
        </p>
      </section>

      {/* Info Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#001428] text-[#fed65b] flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">location_on</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[#001428]">Campus Address</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Mount Carmel Global School, Kondapur Main Road, Near HITEC City Corridor, Hyderabad, Telangana 500084, India.
          </p>
          <a
            href="https://maps.google.com/?q=Kondapur+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#735c00] underline mt-auto pt-2 inline-flex items-center gap-1"
          >
            <span>Get Driving Directions</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#001428] text-[#fed65b] flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">call</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[#001428]">Telephony & Helpdesk</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Direct Admissions Desk: <br />
            <strong className="text-[#001428]">+91 40 4000 1122</strong>
          </p>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Administrative Reception: <br />
            <strong className="text-[#001428]">+91 40 4000 1123</strong>
          </p>
          <p className="text-xs text-[#74777e] mt-auto">Mon – Sat: 9:00 AM – 4:00 PM</p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#e4e2de] shadow-sm flex flex-col gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#001428] text-[#fed65b] flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">mail</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[#001428]">Electronic Inquiries</h3>
          <p className="text-xs text-[#43474d] leading-relaxed">
            Admissions Bureau: <br />
            <a href="mailto:admissions@mountcarmelglobalschool.com" className="font-semibold text-[#001428] underline">
              admissions@mountcarmelglobalschool.com
            </a>
          </p>
          <p className="text-xs text-[#43474d] leading-relaxed">
            General Queries: <br />
            <a href="mailto:info@mountcarmelglobalschool.com" className="font-semibold text-[#001428] underline">
              info@mountcarmelglobalschool.com
            </a>
          </p>
          <p className="text-xs text-[#74777e] mt-auto">Typical email response within 12 hours</p>
        </div>
      </section>

      {/* Map & Corridor Directions */}
      <section className="p-6 sm:p-10 rounded-3xl bg-[#f5f3ef] border border-[#e4e2de] flex flex-col lg:flex-row gap-8 items-center">
        <div
          className="w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl bg-cover bg-center overflow-hidden relative shadow-md border border-[#e4e2de]"
          style={{ backgroundImage: `url('${SCHOOL_IMAGES.mapBackground}')` }}
        >
          <div className="absolute inset-0 bg-[#001428]/40 flex items-center justify-center">
            <a
              href="https://maps.google.com/?q=Kondapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/95 text-[#001428] text-xs font-bold shadow-lg flex items-center gap-2 hover:bg-white active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[#735c00] text-[20px]">near_me</span>
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Transit & Accessibility
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#001428] font-bold">
            Prime Centrality in Western Hyderabad
          </h2>
          <div className="flex flex-col gap-3 text-xs text-[#43474d]">
            <div className="p-3 bg-white rounded-xl border border-[#e4e2de] flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#735c00] text-[20px]">directions_car</span>
              <div>
                <strong className="text-[#001428]">From HITEC City / Cyber Towers (10 Mins):</strong>
                <p className="text-[11px] text-[#43474d] mt-0.5">Direct arterial connectivity via Botanical Garden Road.</p>
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#e4e2de] flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#735c00] text-[20px]">directions_car</span>
              <div>
                <strong className="text-[#001428]">From Gachibowli & Financial District (12 Mins):</strong>
                <p className="text-[11px] text-[#43474d] mt-0.5">Smooth flow along Gachibowli-Miyapur Road corridor.</p>
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#e4e2de] flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#735c00] text-[20px]">directions_bus</span>
              <div>
                <strong className="text-[#001428]">School Bus Transport Routes:</strong>
                <p className="text-[11px] text-[#43474d] mt-0.5">Covering Kondapur, Madhapur, Gachibowli, Miyapur, KPHB, and Chandanagar with GPS tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Submission Form */}
      <section className="max-w-2xl mx-auto w-full p-6 sm:p-10 rounded-3xl bg-white border border-[#e4e2de] shadow-lg flex flex-col gap-6">
        <div className="flex flex-col gap-1 text-center items-center">
          <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
            Direct Communication
          </span>
          <h2 className="font-serif text-2xl text-[#001428] font-bold">
            Send a Message to Front Office
          </h2>
          <p className="text-xs text-[#43474d]">
            Have a specific query? Drop us a note and we will route it to the right department.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#001428]">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                />
              </div>
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#001428]">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#001428]">Subject *</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Admissions 2025-26">Admissions 2025–26</option>
                  <option value="Fee Structure Enquiry">Fee Structure Enquiry</option>
                  <option value="Transport / Bus Routes">Transport / Bus Routes</option>
                  <option value="Careers / Faculty Opportunities">Careers / Faculty Opportunities</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-[#001428]">Message *</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How may our campus counselors assist you?"
                className="w-full p-3 rounded-lg bg-[#f5f3ef] border border-[#c3c6ce] text-xs text-[#1b1c1a] focus:border-[#001428] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full h-11 rounded-lg bg-[#001428] text-[#fed65b] font-bold text-xs shadow-md hover:bg-[#0f2942] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Transmit Message</span>
              <span className="material-symbols-outlined text-[17px]">send</span>
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-[#efeeea] flex flex-col items-center text-center gap-3">
            <span className="w-12 h-12 rounded-full bg-[#ffe088] text-[#745c00] flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
            </span>
            <h4 className="font-serif text-lg text-[#001428] font-bold">Message Dispatched!</h4>
            <p className="text-xs text-[#43474d] leading-relaxed">
              Thank you, <strong>{name}</strong>. Your message regarding {subject} has been assigned to our Kondapur campus team. We will get back to you at {email}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setMessage('');
              }}
              className="mt-1 text-xs font-bold text-[#735c00] underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        )}
      </section>

      {/* Campus Tour Floating Prompt */}
      <section className="p-8 rounded-2xl bg-[#0f2942] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-1">
          <h3 className="font-serif text-xl font-bold text-white">Prefer an In-Person Walkthrough?</h3>
          <p className="text-xs text-[#b0c9e8]">
            Book a slot Monday through Saturday to see our classrooms, science labs, and sports courts in action.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenTourModal}
          className="h-11 px-6 rounded-lg bg-[#fed65b] text-[#001428] text-xs font-bold hover:bg-[#ffe088] active:scale-95 transition-all cursor-pointer flex-shrink-0"
        >
          Book Guided Campus Walkthrough
        </button>
      </section>
    </div>
  );
};
