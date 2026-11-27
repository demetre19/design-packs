import React from 'react';
import { Send, FileText } from 'lucide-react';

export function ContactForm3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">03. MINIMAL CATALOG INQUIRY</h2>
          <span className="text-xs text-neutral-500">REF #03</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8">
          <form className="space-y-4 text-xs">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block mb-1">CATALOG REFERENCE</span>
              <input type="text" value="BODONI ÉPOQUE — LICENSE ACQUISITION" readOnly className="w-full bg-neutral-900 border border-neutral-800 px-3 py-2 text-neutral-400 font-mono" />
            </div>
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block mb-1">EMAIL ADDRESS</span>
              <input type="email" placeholder="researcher@university.edu" className="w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-white placeholder-neutral-600 focus:outline-none" />
            </div>
            <button type="button" className="w-full bg-white text-neutral-900 py-3 font-bold hover:bg-neutral-200">
              SEND ACQUISITION REQUEST
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
