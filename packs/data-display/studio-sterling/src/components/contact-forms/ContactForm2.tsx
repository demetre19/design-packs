import React from 'react';

export function ContactForm2() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto border border-black grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 bg-black text-white p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-2">SPLIT INQUIRY PANEL</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">INITIATE COMMISSION</h2>
            <p className="text-xs uppercase tracking-wider text-neutral-300 leading-relaxed">
              Studio Sterling accepts a strictly limited number of institutional commissions per calendar year. Complete the form to request availability.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/40 text-xs uppercase tracking-widest text-neutral-400">
            <div>LONDON: +44 20 7946 0912</div>
            <div>ZURICH: +41 44 555 0192</div>
          </div>
        </div>
        <div className="lg:col-span-7 p-8 bg-white">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-1">CLIENT NAME</label>
              <input type="text" placeholder="NAME / ORGANIZATION" className="w-full border border-black p-3 text-xs uppercase" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-1">EMAIL ADDRESS</label>
              <input type="email" placeholder="EMAIL@DOMAIN.COM" className="w-full border border-black p-3 text-xs uppercase" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-1">PROJECT DETAILS</label>
              <textarea rows={3} placeholder="SCOPE AND TIMELINE SPECIFICATIONS..." className="w-full border border-black p-3 text-xs uppercase"></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white font-bold uppercase py-3 text-xs hover:bg-neutral-800 transition-colors">
              Transmit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
