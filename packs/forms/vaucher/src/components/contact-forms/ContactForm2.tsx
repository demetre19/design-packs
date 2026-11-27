import React, { useState } from 'react';

export function ContactForm2() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="max-w-xl mx-auto bg-white border border-[#d0d0cc] p-8 md:p-12 space-y-8 shadow-sm">
        <div className="text-center space-y-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">CONTACT 02 · CENTERED NARROW FORM</div>
          <h2 className="text-2xl font-light tracking-[0.06em] text-[#232a30]">Atelier Correspondence</h2>
        </div>

        {sent ? (
          <div className="text-center py-8 font-mono text-xs text-[#2e5e8e] tracking-widest">
            CORRESPONDENCE RECORDED SUCCESSFULLY.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#232a30]/60">Name</label>
              <input required type="text" className="w-full bg-[#f4f4f2] border-b border-[#232a30] py-2 px-1 font-mono text-xs outline-none focus:border-[#2e5e8e]" placeholder="Collector Name" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#232a30]/60">Email</label>
              <input required type="email" className="w-full bg-[#f4f4f2] border-b border-[#232a30] py-2 px-1 font-mono text-xs outline-none focus:border-[#2e5e8e]" placeholder="collector@atelier.ch" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#232a30]/60">Message</label>
              <textarea required rows={3} className="w-full bg-[#f4f4f2] border-b border-[#232a30] py-2 px-1 font-mono text-xs outline-none focus:border-[#2e5e8e]" placeholder="Specify your request..." />
            </div>
            <button type="submit" className="w-full bg-[#1c2128] text-white font-mono text-xs tracking-[0.25em] py-3 hover:bg-[#2e5e8e] transition-colors">
              DISPATCH MESSAGE
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
