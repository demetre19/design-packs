import React from 'react';

export function ContactForm2() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-xl mx-auto bg-[#13171c] border border-white/10 p-10 flex flex-col items-center text-center">
        <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">SALON APPOINTMENT</span>
        <h2 className="font-serif text-3xl text-[#ece8e1] mb-4">Request Private Viewing</h2>
        <p className="font-sans text-xs text-[#7a8494] mb-8">Select your preferred salon location and date for an exclusive presentation.</p>

        <div className="w-full flex flex-col gap-4 text-left mb-8">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono text-[#7a8494]">PATRON NAME</label>
            <input type="text" className="bg-[#0b0d10] border border-white/20 p-3 text-xs font-mono text-[#ece8e1] focus:outline-none focus:border-[#d4b06a]" placeholder="Full Name" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono text-[#7a8494]">SALON LOCATION</label>
            <select className="bg-[#0b0d10] border border-white/20 p-3 text-xs font-mono text-[#ece8e1] focus:outline-none focus:border-[#d4b06a]">
              <option>Geneva Atelier</option>
              <option>London Vaults</option>
              <option>Tokyo Salon</option>
              <option>Zurich Strongroom</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono text-[#7a8494]">PREFERRED DATE</label>
            <input type="date" className="bg-[#0b0d10] border border-white/20 p-3 text-xs font-mono text-[#ece8e1] focus:outline-none focus:border-[#d4b06a]" />
          </div>
        </div>

        <button className="w-full py-3.5 border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
          SCHEDULE APPOINTMENT
        </button>
      </div>
    </section>
  );
}
