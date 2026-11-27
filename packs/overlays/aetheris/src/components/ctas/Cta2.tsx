import React from 'react';

export function Cta2() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col items-start">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">SPLIT CALL TO ACTION</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1] mb-6">The Ultimate Expression of Time & Custody</h2>
          <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-8">
            Experience our master horology firsthand in Geneva or London. Private viewings arranged upon verified credentials.
          </p>
          <button className="px-8 py-3 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
            SCHEDULE VIEWING
          </button>
        </div>

        {/* Corner-framed image plate */}
        <div className="lg:col-span-6 h-80 bg-[#13171c] border border-white/10 relative p-4 flex items-center justify-center">
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#d4b06a]" />
          <span className="font-serif text-lg text-[#ece8e1] italic">Salon Privé Presentation Plate</span>
        </div>
      </div>
    </section>
  );
}
