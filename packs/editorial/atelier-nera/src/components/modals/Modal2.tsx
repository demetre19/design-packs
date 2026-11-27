import React from 'react';

export function Modal2() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">modal 02 / commission dialog</div>
      <div className="border border-black/10 p-8 md:p-12 max-w-lg mx-auto bg-white space-y-6">
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-black/40">
          <span>inquiry dialog</span>
          <span className="cursor-pointer">×</span>
        </div>
        <h3 className="font-light text-2xl lowercase">request private consultation</h3>
        <p className="font-light text-xs text-black/60 leading-relaxed">
          Please provide your institutional or studio email for our Q3 appointment calendar.
        </p>
        <div className="space-y-4 pt-2">
          <input type="email" placeholder="name@institution.com" className="w-full border border-black/20 p-3 text-xs font-light lowercase focus:border-black outline-none" />
          <button className="w-full py-3 bg-black text-white text-xs font-light lowercase hover:bg-black/80 transition-colors">
            request access
          </button>
        </div>
      </div>
    </section>
  );
}
