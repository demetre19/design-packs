import React from 'react';

export function BlogCard2() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">FEATURED MONOGRAPH</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Editorial Spotlight</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Featured article large */}
          <div className="lg:col-span-7 bg-[#13171c] border border-white/10 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#7a8494] mb-4">
                <span className="text-[#d4b06a]">LEAD MONOGRAPH</span>
                <span>·</span>
                <span>NOV 2026</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#ece8e1] mb-4">
                The Philosophy of Permanent Horology in an Age of Planned Obsolescence
              </h3>
              <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-8">
                An exhaustive inquiry into how mechanical timekeepers outlast civilizations, passing unbroken through centuries of human history as silent testaments to precision.
              </p>
            </div>
            <button className="self-start px-6 py-2.5 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
              READ FULL MONOGRAPH
            </button>
          </div>

          {/* Small hairline rows right */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#13171c] border border-white/10 p-6">
              <span className="text-[10px] font-mono text-[#d4b06a] block mb-1">01 / VAULT SECURITY</span>
              <h4 className="font-serif text-lg text-[#ece8e1] mb-2">Quantum Encryption Standards</h4>
              <p className="font-sans text-xs text-[#7a8494]">Safeguarding high-value bullion and timepieces.</p>
            </div>
            <div className="bg-[#13171c] border border-white/10 p-6">
              <span className="text-[10px] font-mono text-[#d4b06a] block mb-1">02 / METALLURGY</span>
              <h4 className="font-serif text-lg text-[#ece8e1] mb-2">Grade 5 Titanium Properties</h4>
              <p className="font-sans text-xs text-[#7a8494]">Corrosion resistance and structural integrity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
