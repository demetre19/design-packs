import React from 'react';

export function Cta3() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10 text-center flex flex-col items-center">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <span className="text-[10px] font-mono tracking-[0.4em] text-[#d4b06a] uppercase block mb-3">DIRECT ACCESS</span>
        <h2 className="font-serif text-3xl text-[#ece8e1] mb-6">Inquire with the Senior Director</h2>
        <button className="px-8 py-3 rounded-full border border-white/25 text-[#ece8e1] text-xs font-mono tracking-widest hover:border-[#d4b06a] hover:text-[#d4b06a] transition-all">
          INITIATE SECURE CHAT
        </button>
      </div>
    </section>
  );
}
