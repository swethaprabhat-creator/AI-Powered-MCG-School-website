import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, ScreenType } from '../types';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: ScreenType) => void;
  onOpenTourModal: () => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    role: 'assistant',
    content:
      'Welcome to Mount Carmel Global School, Kondapur! I am your AI Admissions & Academic Advisor. How can I assist you with admissions, curriculum, fee details, or booking a campus walkthrough today?',
    timestamp: 'Just now',
  },
];

const SUGGESTED_QUERIES = [
  'What classes are offered?',
  'Admissions process for 2025–26',
  'Tell me about the AI Learning Ecosystem',
  'Book a campus visit',
  'School transport & bus routes',
  'What is the student-teacher ratio?',
];

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenTourModal,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'Our admissions desk is available at +91 40 4000 1122 to answer your queries.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      // Offline fallback
      let fallbackText =
        'Thank you for your inquiry. Mount Carmel Global School in Kondapur offers holistic schooling from PP1 through Class 10. Our admissions desk will be pleased to assist you directly at +91 40 4000 1122.';
      const qLower = trimmed.toLowerCase();
      if (qLower.includes('visit') || qLower.includes('tour')) {
        fallbackText =
          'You can visit our Kondapur campus Monday through Saturday from 9:00 AM to 4:00 PM. Would you like to schedule an appointment right now using our campus visit booking form?';
      } else if (qLower.includes('fee') || qLower.includes('cost')) {
        fallbackText =
          'Our transparent fee structure is tailored by grade level (PP1 to Class 10) and includes digital smart classroom access, sports coaching, and laboratory access. Please fill out our admission enquiry form for the official fee schedule.';
      } else if (qLower.includes('ai') || qLower.includes('stem')) {
        fallbackText =
          'MCGS integrates a triple-tier AI Learning Ecosystem: Student AI for adaptive practice, Teacher AI for personalized lesson design, and Parent AI for home guidance prompts.';
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#001428]/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#ffffff] rounded-2xl shadow-2xl w-full max-w-lg h-[620px] max-h-[90vh] flex flex-col overflow-hidden border border-[#efeeea]">
        {/* Modal Header */}
        <div className="p-4 bg-[#001428] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0f2942] border border-[#fed65b]/40 flex items-center justify-center text-[#fed65b]">
              <span className="material-symbols-outlined text-[22px]">smart_toy</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">MCGS AI Assistant</h3>
                <span className="w-2 h-2 rounded-full bg-[#fed65b] animate-pulse"></span>
              </div>
              <p className="text-[11px] text-[#b0c9e8]">
                Admissions & Academic Intelligence · Kondapur Campus
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#b0c9e8] hover:text-white hover:bg-[#0f2942] active:scale-95 transition-all cursor-pointer"
            aria-label="Close Assistant"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[#fbf9f5]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 max-w-[88%] ${
                msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-[#001428] flex-shrink-0 flex items-center justify-center text-[#fed65b]">
                  <span className="material-symbols-outlined text-[15px]">smart_toy</span>
                </div>
              )}
              <div
                className={`p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-[#001428] text-white rounded-tr-none'
                    : 'bg-white text-[#1b1c1a] border border-[#efeeea] rounded-tl-none'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
                <span
                  className={`text-[9px] mt-1 block ${
                    msg.role === 'user' ? 'text-[#b0c9e8] text-right' : 'text-[#74777e]'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 self-start p-3 rounded-2xl bg-white border border-[#efeeea] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#735c00] animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-[#735c00] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-[#735c00] animate-bounce [animation-delay:0.4s]"></span>
              <span className="text-[11px] text-[#74777e] ml-1">Consulting MCGS Academic Engine...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries Chips */}
        <div className="p-3 bg-white border-t border-[#efeeea] flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-[#74777e] uppercase tracking-wider">
            Quick Inquiries:
          </span>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {SUGGESTED_QUERIES.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="flex-shrink-0 px-2.5 py-1 rounded-full bg-[#efeeea] text-[#001428] text-[11px] font-medium hover:bg-[#eae8e4] active:scale-95 transition-all text-left cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigate('admissions');
              }}
              className="py-1.5 px-2 rounded-lg bg-[#efeeea] text-[#001428] text-[11px] font-semibold flex items-center justify-center gap-1.5 hover:bg-[#eae8e4] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px] text-[#735c00]">how_to_reg</span>
              <span>Open Admissions</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenTourModal();
              }}
              className="py-1.5 px-2 rounded-lg bg-[#efeeea] text-[#001428] text-[11px] font-semibold flex items-center justify-center gap-1.5 hover:bg-[#eae8e4] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px] text-[#735c00]">calendar_month</span>
              <span>Book Walkthrough</span>
            </button>
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 bg-[#f5f3ef] border-t border-[#efeeea] flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage(inputValue);
              }
            }}
            placeholder="Type your question for MCGS AI..."
            className="flex-1 h-10 px-3 rounded-lg bg-white border border-[#c3c6ce] text-xs text-[#1b1c1a] outline-none focus:border-[#001428] shadow-sm"
          />
          <button
            type="button"
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isLoading}
            className="w-10 h-10 rounded-lg bg-[#001428] text-[#fed65b] flex items-center justify-center disabled:opacity-50 active:scale-95 transition-all cursor-pointer shadow-sm"
            aria-label="Send Message"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};
