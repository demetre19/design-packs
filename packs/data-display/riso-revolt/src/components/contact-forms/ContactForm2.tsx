import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm2() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border-3 border-[#111111] shadow-hard-xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 mb-2 shadow-hard-sm">
              QUICK AUDIT
            </div>
            <h2 className="font-grotesk font-black text-3xl sm:text-4xl uppercase">BOOK A DESIGN AUDIT.</h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-mono text-xs">
            <div>
              <label className="block font-bold mb-1">YOUR NAME</label>
              <input type="text" placeholder="Elena Vance" className="w-full bg-[#fffdf5] border-2 border-[#111111] p-3 focus:outline-none shadow-hard-sm" />
            </div>
            <div>
              <label className="block font-bold mb-1">WORK EMAIL</label>
              <input type="email" placeholder="elena@company.com" className="w-full bg-[#fffdf5] border-2 border-[#111111] p-3 focus:outline-none shadow-hard-sm" />
            </div>
            <div>
              <label className="block font-bold mb-1">WEBSITE OR PORTFOLIO URL</label>
              <input type="text" placeholder="https://company.com" className="w-full bg-[#fffdf5] border-2 border-[#111111] p-3 focus:outline-none shadow-hard-sm" />
            </div>
            <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-sm py-4 w-full flex items-center justify-center gap-2 mt-4">
              <span>SCHEDULE AUDIT SESSION</span>
              <ArrowRight size={16} strokeWidth={3} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
