import React from 'react';

export function ContactForm1() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">PRIVATE CONSULTATION</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1] mb-6">Inquire with our Concierge</h2>
            <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-8">
              Arrange a private viewing at our Geneva atelier or discuss secure vault allocation with our senior directors.
            </p>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs text-[#7a8494]">
            <p>GENEVA ATELIER: +41 22 555 0192</p>
            <p>LONDON VAULTS: +44 20 7946 0912</p>
            <p>SECURE LINE: CONCIERGE@AETHERIS.CO</p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#13171c] border border-white/10 p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-[#7a8494]">FULL NAME</label>
              <input type="text" className="bg-[#0b0d10] border border-white/20 p-3 text-xs font-mono text-[#ece8e1] focus:outline-none focus:border-[#d4b06a]" placeholder="Lord / Lady..." />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-[#7a8494]">SECURE EMAIL</label>
              <input type="email" className="bg-[#0b0d10] border border-white/20 p-3 text-xs font-mono text-[#ece8e1] focus:outline-none focus:border-[#d4b06a]" placeholder="patron@domain.com" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-[#7a8494]">SUBJECT OF INQUIRY</label>
            <select className="bg-[#0b0d10] border border-white/20 p-3 text-xs font-mono text-[#ece8e1] focus:outline-none focus:border-[#d4b06a]">
              <option>Tourbillon Allocation</option>
              <option>Subterranean Vault Strongroom</option>
              <option>Bespoke Commission</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-[#7a8494]">MESSAGE & SPECIFICATIONS</label>
            <textarea rows={4} className="bg-[#0b0d10] border border-white/20 p-3 text-xs font-mono text-[#ece8e1] focus:outline-none focus:border-[#d4b06a]" placeholder="Provide details of your collection..." />
          </div>
          <button className="py-3.5 bg-[#d4b06a] text-[#0b0d10] text-xs font-mono tracking-widest hover:bg-[#ece8e1] transition-all">
            SUBMIT PRIVATE INQUIRY
          </button>
        </div>
      </div>
    </section>
  );
}
