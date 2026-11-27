import React from 'react';
import { X, Calendar, User, FileText, CheckCircle2 } from 'lucide-react';

export function Modal3() {
  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6 flex justify-end">
      <div className="w-full max-w-md bg-[#faf6f0] rounded-[32px] p-8 shadow-2xl relative border border-[#122420]/10 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#122420]/15 mb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold">Session Summary</span>
              <h3 className="font-serif text-2xl text-[#122420]">Consultation Details</h3>
            </div>
            <button className="w-9 h-9 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#122420] hover:bg-[#1d4f47] hover:text-[#faf6f0] transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#2a7a6d]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#122420]/60 font-semibold">Client</p>
                <p className="font-serif text-lg text-[#122420]">Dr. Alexander Vance</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#2a7a6d]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#122420]/60 font-semibold">Date & Time</p>
                <p className="font-serif text-lg text-[#122420]">November 28, 2026 — 14:00 CET</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#2a7a6d]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#122420]/60 font-semibold">Scope</p>
                <p className="font-serif text-lg text-[#122420]">Boutique Brand Architecture</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#122420]/15 mt-8">
          <button className="w-full py-3.5 rounded-full bg-[#1d4f47] text-[#faf6f0] text-sm font-medium hover:bg-[#153b34] transition-all flex items-center justify-center gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Mark Consultation Confirmed</span>
          </button>
        </div>
      </div>
    </section>
  );
}
