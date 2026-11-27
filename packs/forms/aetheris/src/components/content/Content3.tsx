import React from 'react';

interface InterlockEntry {
  side: 'left' | 'right';
  code: string;
  tag: string;
  title: string;
  body: string;
  datum: string;
}

const INTERLOCK_ITEMS: InterlockEntry[] = [
  {
    side: 'left',
    code: '01',
    tag: 'ACOUSTIC ISOLATION',
    title: 'Cathedral Gong Resonance',
    body: 'Hardened alloy chimes anchored directly to the caseband bypass dial damping, projecting clear harmonic thirds across 4.2 meters.',
    datum: '4,186 Hz FUNDAMENTAL',
  },
  {
    side: 'right',
    code: '02',
    tag: 'BIOMETRIC KEYING',
    title: 'Tri-Modal Chamber Lock',
    body: 'Vascular palm geometry, iris dispersion, and physical titanium key-bit must concur simultaneously within a 900ms window.',
    datum: 'FALSE ACCEPT < 10⁻⁹',
  },
  {
    side: 'left',
    code: '03',
    tag: 'THERMAL COMPENSATION',
    title: 'Free-Sprung Silicon Balance',
    body: 'Four recessed platinum timing weights adjust inertia without altering hairspring breathing geometry under rapid altitude shifts.',
    datum: '±0.08 s/d DRIFT',
  },
  {
    side: 'right',
    code: '04',
    tag: 'SEISMIC SUSPENSION',
    title: 'Sub-Bedrock Isolation Core',
    body: 'Strongroom pedestals float on damped elastomeric bearings engineered to decouple 8.0-magnitude subterranean shear waves.',
    datum: 'DEPTH: -42 METERS',
  },
  {
    side: 'left',
    code: '05',
    tag: 'PROVENANCE CHAIN',
    title: 'Micro-Engraved Ownership Seal',
    body: 'Each bridge underside bears a 0.15mm laser-inscribed cipher cross-referenced to our notarized Geneva parchment register.',
    datum: 'IMMUTABLE FOLIO',
  },
  {
    side: 'right',
    code: '06',
    tag: 'ATMOSPHERIC CONTROL',
    title: 'Positive-Pressure Nitrogen Loop',
    body: 'Inert archival chambers purge ambient oxygen continuously, halting lubricant oxidation and brass patina over multi-decade storage.',
    datum: '44% RH // 18.0°C',
  },
];

export function Content3() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#d4b06a] uppercase block mb-2">
            DUAL-AXIS ARCHITECTURE // HOROLOGY &amp; CUSTODY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">
            Where Mechanical Craft Meets Physical Permanence
          </h2>
        </div>

        {/* Continuous Center Spine with Meshing Zipper Teeth */}
        <div className="relative">
          {/* Continuous Vertical Spine (Desktop Center, Mobile Left) */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/20 md:-translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          >
            {/* Top & Bottom Crosshair Terminators */}
            <span className="absolute -top-1.5 -left-[5px] w-3 h-3 border border-[#d4b06a]/60 rotate-45 bg-[#0b0d10]" />
            <span className="absolute -bottom-1.5 -left-[5px] w-3 h-3 border border-[#d4b06a]/60 rotate-45 bg-[#0b0d10]" />
          </div>

          <div className="flex flex-col gap-6 md:gap-0">
            {INTERLOCK_ITEMS.map((item, idx) => {
              const isLeft = item.side === 'left';
              return (
                <div
                  key={item.code}
                  className={`relative grid grid-cols-1 md:grid-cols-2 items-center ${
                    idx > 0 ? 'md:-mt-8' : ''
                  }`}
                >
                  {isLeft ? (
                    <>
                      {/* Left Tooth Overlapping Center Line */}
                      <div className="pl-12 md:pl-0 md:pr-12 py-4 md:text-right relative z-10">
                        <div className="inline-flex md:flex items-center md:justify-end gap-3 mb-2 w-full">
                          <span className="text-[10px] font-mono tracking-[0.22em] text-[#d4b06a] uppercase">
                            {item.tag}
                          </span>
                          {/* Overlapping Numeral Tab Crossing the Spine */}
                          <span className="hidden md:inline-flex items-center justify-center px-3 py-1 bg-[#13171c] border border-[#d4b06a]/60 font-serif text-lg text-[#ece8e1] md:-mr-18 relative z-20">
                            {item.code}
                          </span>
                        </div>
                        {/* Mobile Node */}
                        <span className="md:hidden absolute left-1.5 top-5 w-5 h-5 bg-[#13171c] border border-[#d4b06a] text-[10px] font-mono text-[#d4b06a] flex items-center justify-center">
                          {item.code}
                        </span>
                        {/* Horizontal Arm Connecting to Spine */}
                        <div
                          className="hidden md:block absolute right-0 top-9 w-12 h-[1px] bg-[#d4b06a]/45"
                          aria-hidden="true"
                        />
                        <h3 className="font-serif text-2xl text-[#ece8e1] mb-2">{item.title}</h3>
                        <p className="font-sans text-xs text-[#7a8494] leading-relaxed md:ml-auto max-w-md mb-2">
                          {item.body}
                        </p>
                        <span className="font-mono text-[10px] text-[#ece8e1]/70 tracking-widest">
                          ◆ {item.datum}
                        </span>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      {/* Right Tooth Overlapping Center Line (Staggered Lower) */}
                      <div className="pl-12 md:pl-12 py-4 md:pt-12 text-left relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          {/* Overlapping Numeral Tab Crossing the Spine */}
                          <span className="hidden md:inline-flex items-center justify-center px-3 py-1 bg-[#13171c] border border-[#d4b06a]/60 font-serif text-lg text-[#ece8e1] md:-ml-18 relative z-20">
                            {item.code}
                          </span>
                          <span className="text-[10px] font-mono tracking-[0.22em] text-[#d4b06a] uppercase">
                            {item.tag}
                          </span>
                        </div>
                        {/* Mobile Node */}
                        <span className="md:hidden absolute left-1.5 top-5 w-5 h-5 bg-[#13171c] border border-[#d4b06a] text-[10px] font-mono text-[#d4b06a] flex items-center justify-center">
                          {item.code}
                        </span>
                        {/* Horizontal Arm Connecting to Spine */}
                        <div
                          className="hidden md:block absolute left-0 top-16 w-12 h-[1px] bg-[#d4b06a]/45"
                          aria-hidden="true"
                        />
                        <h3 className="font-serif text-2xl text-[#ece8e1] mb-2">{item.title}</h3>
                        <p className="font-sans text-xs text-[#7a8494] leading-relaxed max-w-md mb-2">
                          {item.body}
                        </p>
                        <span className="font-mono text-[10px] text-[#ece8e1]/70 tracking-widest">
                          {item.datum} ◆
                        </span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
