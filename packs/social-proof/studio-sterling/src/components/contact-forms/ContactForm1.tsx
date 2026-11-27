import React from 'react';
import { Send } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-4xl mx-auto border border-black p-8 bg-white">
        <div className="border-b border-black pb-4 mb-6 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">COMMISSION FORM // DOC 01</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">PROJECT INQUIRY DOCUMENT</h2>
          </div>
          <span className="border border-black px-2 py-1 text-xs font-bold uppercase">CONFIDENTIAL</span>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2">01 / APPLICANT OR INSTITUTION</label>
              <input 
                type="text" 
                placeholder="E.G. KUNSTHALLE ZURICH" 
                className="w-full border border-black p-3 text-xs uppercase tracking-wider bg-neutral-50 focus:outline-none focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2">02 / ELECTRONIC ADDRESS</label>
              <input 
                type="email" 
                placeholder="CONTACT@INSTITUTION.ORG" 
                className="w-full border border-black p-3 text-xs uppercase tracking-wider bg-neutral-50 focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold mb-2">03 / PROJECT SCOPE & TIMELINE</label>
            <textarea 
              rows={4} 
              placeholder="DESCRIBE SCOPE, PUBLICATION FORMAT, OR WAYVINDING REQUIREMENTS..." 
              className="w-full border border-black p-3 text-xs uppercase tracking-wider bg-neutral-50 focus:outline-none focus:bg-white"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-bold uppercase tracking-widest py-3 text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
            Submit Inquiry Document <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
