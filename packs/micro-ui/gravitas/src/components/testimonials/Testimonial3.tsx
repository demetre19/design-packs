import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial3() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-16">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Testimonial 03 // Press Cluster</span>
          <div className="flex flex-col items-center tracking-tighter leading-none py-4">
            <h2 className="text-6xl font-extralight text-white">ACCLAIM</h2>
            <h2 className="text-6xl font-normal text-neutral-400">ACCLAIM</h2>
            <h2 className="text-6xl font-black text-neutral-700">ACCLAIM</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
          <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-4">
            <span className="text-white font-bold">TYPOGRAPHISCHE MONATSBLÄTTER</span>
            <p className="text-neutral-400 font-light leading-relaxed">
              "Gravitas sets a rigorous new standard for digital specimen distribution and variable font craftsmanship."
            </p>
          </div>
          <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-4">
            <span className="text-white font-bold">EYE MAGAZINE LONDON</span>
            <p className="text-neutral-400 font-light leading-relaxed">
              "An exceptional display of geometric purity and uncompromising monochrome typographic restraint."
            </p>
          </div>
          <div className="border border-neutral-800 bg-neutral-950 p-6 space-y-4">
            <span className="text-white font-bold">IDEA MAGAZINE TOKYO</span>
            <p className="text-neutral-400 font-light leading-relaxed">
              "Masterful execution of weight spectra and optical kerning across all twelve discrete cuts."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
