import React from 'react';
import { Send } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-3xl mx-auto border-2 border-[#1b3a5c] p-8 bg-white shadow-xl relative space-y-6">
        <div className="absolute -top-3 left-8 bg-[#1b3a5c] text-white px-3 py-0.5 text-[10px]">
          ISO FRAME CONTACT // CF-02
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Schedule Architectural Review</h2>
          <p className="text-xs text-[#1b3a5c]/70">Complete the specification sheet below for direct partner consultation.</p>
        </div>

        <form className="space-y-4 text-xs pt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#1b3a5c]/70 mb-1">APPLICANT NAME</label>
              <input type="text" placeholder="FULL NAME" className="w-full border border-[#1b3a5c]/40 p-2.5 bg-white focus:border-[#1b3a5c] outline-none" />
            </div>
            <div>
              <label className="block text-[#1b3a5c]/70 mb-1">EMAIL ADDRESS</label>
              <input type="email" placeholder="EMAIL@PRACTICE.COM" className="w-full border border-[#1b3a5c]/40 p-2.5 bg-white focus:border-[#1b3a5c] outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-[#1b3a5c]/70 mb-1">INQUIRY SPECIFICATION</label>
            <textarea rows={4} placeholder="ENTER INQUIRY DETAILS..." className="w-full border border-[#1b3a5c]/40 p-2.5 bg-white focus:border-[#1b3a5c] outline-none resize-none" />
          </div>
          <button className="w-full bg-[#1b3a5c] text-white py-3.5 font-bold uppercase hover:bg-[#254e7a] transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <span>SUBMIT ISO DOSSIER</span>
            <Send className="w-4 h-4 text-cyan-300" />
          </button>
        </form>
      </div>
    </section>
  );
}
