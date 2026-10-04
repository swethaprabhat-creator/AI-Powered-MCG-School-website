import React, { useState } from 'react';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [studentGrade, setStudentGrade] = useState('PP1');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [attendees, setAttendees] = useState('2');
  const [isBooked, setIsBooked] = useState(false);
  const [passId, setPassId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `MCGS-TOUR-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassId(id);
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setParentName('');
    setPhone('');
    setEmail('');
    setDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#001428]/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#ffffff] rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-[#efeeea]">
        {/* Header */}
        <div className="p-4 bg-[#001428] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#fed65b] text-[22px]">calendar_month</span>
            <div>
              <h3 className="text-sm font-bold text-white">Book a Guided Campus Walkthrough</h3>
              <p className="text-[11px] text-[#b0c9e8]">Kondapur Campus · Mon – Sat (9 AM – 4 PM)</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#b0c9e8] hover:text-white hover:bg-[#0f2942] transition-all cursor-pointer"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {!isBooked ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <p className="text-xs text-[#43474d] leading-relaxed">
                Experience our smart classrooms, science labs, athletic courts, and AI learning stations firsthand with an academic coordinator.
              </p>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#001428]">Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Dr. Rajesh Sharma"
                  className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] text-xs text-[#1b1c1a] border border-[#c3c6ce] focus:border-[#001428] outline-none"
                />
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
                    className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] text-xs text-[#1b1c1a] border border-[#c3c6ce] focus:border-[#001428] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#001428]">Grade of Interest *</label>
                  <select
                    value={studentGrade}
                    onChange={(e) => setStudentGrade(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] text-xs text-[#1b1c1a] border border-[#c3c6ce] focus:border-[#001428] outline-none"
                  >
                    <option value="PP1">PP1 (Pre-Primary 1)</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
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
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#001428]">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] text-xs text-[#1b1c1a] border border-[#c3c6ce] focus:border-[#001428] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#001428]">Time Slot *</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg bg-[#f5f3ef] text-xs text-[#1b1c1a] border border-[#c3c6ce] focus:border-[#001428] outline-none"
                  >
                    <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:30 AM">11:30 AM - 12:30 PM</option>
                    <option value="2:00 PM">2:00 PM - 3:00 PM</option>
                    <option value="3:30 PM">3:30 PM - 4:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#001428]">Number of Attendees</label>
                <div className="flex items-center gap-2">
                  {['1', '2', '3', '4+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setAttendees(num)}
                      className={`flex-1 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                        attendees === num
                          ? 'bg-[#001428] text-white border-[#001428]'
                          : 'bg-[#f5f3ef] text-[#43474d] border-[#c3c6ce] hover:bg-[#eae8e4]'
                      }`}
                    >
                      {num} {num === '1' ? 'Person' : 'People'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full h-11 rounded-lg bg-[#fed65b] text-[#001428] font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-[#ffe088] active:scale-95 transition-all cursor-pointer"
              >
                <span>Confirm Walkthrough Appointment</span>
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center gap-3 py-2">
              <div className="w-14 h-14 rounded-full bg-[#d1e4ff] text-[#001428] flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>
              <h4 className="text-base font-bold text-[#001428]">
                Campus Walkthrough Confirmed!
              </h4>
              <p className="text-xs text-[#43474d] leading-relaxed max-w-sm">
                Thank you, <strong>{parentName}</strong>. Your campus orientation for <strong>{studentGrade}</strong> has been logged.
              </p>

              {/* Digital Pass Card */}
              <div className="w-full p-4 rounded-xl bg-[#f5f3ef] border border-[#e4e2de] text-left flex flex-col gap-2 my-1">
                <div className="flex items-center justify-between border-b border-[#e4e2de] pb-2">
                  <span className="text-[10px] uppercase font-bold text-[#74777e]">Pass Reference</span>
                  <span className="text-xs font-mono font-bold text-[#001428]">{passId}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-[#74777e] block">Scheduled Date</span>
                    <span className="font-semibold text-[#001428]">{date || 'Upcoming Saturday'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#74777e] block">Time Window</span>
                    <span className="font-semibold text-[#001428]">{timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#74777e] block">Campus Desk</span>
                    <span className="font-semibold text-[#001428]">Admissions Reception</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#74777e] block">Visitors</span>
                    <span className="font-semibold text-[#001428]">{attendees} Guests</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-[#74777e]">
                An SMS and email confirmation have been queued to {phone || 'your phone'}. Please present this reference code at the security gate upon arrival.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-2 px-6 py-2 rounded-lg bg-[#001428] text-white text-xs font-semibold hover:bg-[#0f2942] transition-all cursor-pointer"
              >
                Close Pass
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
