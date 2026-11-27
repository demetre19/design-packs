import React from 'react';

export function Content10() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-24 px-6 font-mono border-b border-neutral-800 relative overflow-hidden">
      {/* Razor-thin horizontal cutting rule bisecting behind the monumental statement */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 border-t border-neutral-800 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-stretch gap-6 lg:gap-10">
          {/* Rotated vertical micro-attribution along the left bleed */}
          <div className="hidden sm:flex items-center justify-center shrink-0 border-r border-neutral-800 pr-4">
            <span className="text-[10px] tracking-[0.28em] text-neutral-500 uppercase [writing-mode:vertical-rl] rotate-180">
              THESIS NO. 09 · PARMA TO BASEL (1757–1983)
            </span>
          </div>

          <div className="flex-1 relative">
            {/* Enormous full-bleed typographic statement breaking across the section */}
            <h2 className="font-serif font-bold text-5xl sm:text-7xl lg:text-[6.5rem] leading-[0.88] tracking-tight text-white">
              EVERY SERIF IS A{' '}
              <span className="italic text-neutral-400 font-normal">MEMORY</span> OF STEEL
              <sup className="text-lg sm:text-2xl font-mono text-neutral-400 align-top ml-1">
                [†]
              </sup>
            </h2>

            {/* Unexpectedly cornered & tucked micro-annotation inside the negative space below/right */}
            <div className="mt-8 lg:mt-4 lg:flex lg:justify-end">
              <div className="lg:max-w-md border-t border-neutral-700 pt-3 text-[11px] text-neutral-400 font-sans leading-relaxed">
                <span className="font-mono text-white font-bold mr-1.5">[†]</span>
                Tempered steel counterpunches struck into brass matrices at 380°C; digitized at 1200 DPI in Basel (1957) and Zürich (1983) by Typographica Archiv.
                <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-2">
                  CURATORIAL AXIOM · DR. H. VANDERBILT, CABINET 12
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
