import React from 'react';
import { Send, FileText, CheckSquare } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-block border border-cyan-300 px-3 py-1 text-[10px] text-cyan-300">
            CONTACT FORM // CF-01
          </div>
          <h2 className="text-3xl font-bold uppercase tracking-tight">Initiate Project Consultation</h2>
          <p className="text-xs text-cyan-100 leading-relaxed">
            Submit project parameters, structural scope requirements, and site coordinates for initial architectural review.
          </p>

          <div className="border border-white/30 p-5 bg-[#142d48] space-y-3 text-xs">
            <div className="text-cyan-300 font-bold">SPECIFICATION CHECKLIST</div>
            <div className="flex items-center gap-2 text-cyan-100"><CheckSquare className="w-3.5 h-3.5 text-cyan-300" /><span>Initial Zoned Feasibility Study</span></div>
            <div className="flex items-center gap-2 text-cyan-100"><CheckSquare className="w-3.5 h-3.5 text-cyan-300" /><span>Preliminary Structural Calculation</span></div>
          </div>
        </div>

        {/* Split form + project details title block */}
        <div className="lg:col-span-6 border-2 border-white/40 p-6 bg-[#142d48] relative">
          <div className="absolute -top-3 left-6 bg-cyan-400 text-[#1b3a5c] px-3 py-0.5 text-[10px] font-bold">
            PROJECT DETAILS TITLE BLOCK
          </div>

          <form className="space-y-4 pt-4 text-xs" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-cyan-300 mb-1">CLIENT / PRACTICE NAME</label>
              <input type="text" placeholder="ENTER NAME" className="w-full bg-[#11263d] border border-white/30 p-2.5 text-white placeholder-white/40 focus:border-cyan-300 outline-none" />
            </div>
            <div>
              <label className="block text-cyan-300 mb-1">SITE LOCATION / COORDINATES</label>
              <input type="text" placeholder="ENTER ADDRESS OR LAT/LONG" className="w-full bg-[#11263d] border border-white/30 p-2.5 text-white placeholder-white/40 focus:border-cyan-300 outline-none" />
            </div>
            <div>
              <label className="block text-cyan-300 mb-1">PROJECT SCOPE DESCRIPTION</label>
              <textarea rows={4} placeholder="ENTER STRUCTURAL REQUIREMENTS..." className="w-full bg-[#11263d] border border-white/30 p-2.5 text-white placeholder-white/40 focus:border-cyan-300 outline-none resize-none" />
            </div>
            <button className="w-full border border-cyan-400 bg-cyan-400 text-[#1b3a5c] py-3 font-bold uppercase hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <span>TRANSMIT PROJECT DOSSIER</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
