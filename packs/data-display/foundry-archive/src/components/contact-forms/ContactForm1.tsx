import React from 'react';
import { Send, FileText } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">01. RESEARCH INQUIRY FORM</h2>
          <span className="text-xs text-neutral-500">DOSSIER REQUEST #57</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8">
          <form className="space-y-6 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-neutral-400 mb-2 uppercase tracking-wider">01. SCHOLAR / FELLOW NAME</label>
                <input type="text" placeholder="Dr. Eleanor Vance" className="w-full bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-600 focus:outline-none" />
              </div>
              <div>
                <label className="block text-neutral-400 mb-2 uppercase tracking-wider">02. INSTITUTION / AFFILIATION</label>
                <input type="text" placeholder="Basel Academy of Design" className="w-full bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-600 focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-neutral-400 mb-2 uppercase tracking-wider">03. ARCHIVAL SPECIMEN REFERENCE</label>
              <input type="text" placeholder="REF-5701 (Bodoni Époque Master Plate)" className="w-full bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-600 focus:outline-none" />
            </div>
            <div>
              <label className="block text-neutral-400 mb-2 uppercase tracking-wider">04. NATURE OF RESEARCH INQUIRY</label>
              <textarea rows={4} placeholder="Describe the scope of your typographic study..." className="w-full bg-neutral-900 border border-neutral-700 p-4 text-white placeholder-neutral-600 focus:outline-none font-sans"></textarea>
            </div>
            <button type="button" className="w-full bg-white text-neutral-900 py-4 font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2">
              <Send className="w-4 h-4" />
              <span>SUBMIT ARCHIVAL INQUIRY</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
