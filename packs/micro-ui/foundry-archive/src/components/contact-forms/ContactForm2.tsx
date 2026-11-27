import React from 'react';
import { Send, FileText } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">02. SPLIT FORM: FRAMING LEFT, INPUTS RIGHT</h2>
          <span className="text-xs text-neutral-500">VAULT ACCESS</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-950 border border-neutral-800 p-8">
          <div className="lg:col-span-5 border-r border-neutral-800 pr-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">CABINET 12 PROTOCOL</span>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Request Physical Punch Inspection</h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Accredited researchers may request supervised physical access to lead matrices and copperplate strikes in our Basel reading room.
              </p>
            </div>
            <div className="text-[10px] text-neutral-500 pt-6 border-t border-neutral-800">
              RESPONSE TIME: 3–5 BUSINESS DAYS
            </div>
          </div>
          <div className="lg:col-span-7 pl-4">
            <form className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1 uppercase">Fellow ID / Accreditation Number</label>
                <input type="text" placeholder="#FELLOW-8832" className="w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-white placeholder-neutral-600 focus:outline-none" />
              </div>
              <div>
                <label className="block text-neutral-400 mb-1 uppercase">Requested Date of Visit</label>
                <input type="date" className="w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-neutral-400 mb-1 uppercase">Notes / Specific Matrices</label>
                <textarea rows={3} className="w-full bg-neutral-900 border border-neutral-700 p-3 text-white focus:outline-none font-sans"></textarea>
              </div>
              <button type="button" className="w-full bg-white text-neutral-900 py-3 font-bold hover:bg-neutral-200">
                REQUEST APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
