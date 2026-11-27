import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">03. IN THE RECORD: PRESS QUOTES</h2>
          <span className="text-xs text-neutral-500">HAIRLINE HEADER</span>
        </div>
        <div className="space-y-6">
          <div className="bg-neutral-950 border border-neutral-800 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-xs text-neutral-300 font-sans max-w-2xl mb-4 sm:mb-0">
              "The most significant typographic restoration project of the decade. A triumph of archival fidelity."
            </p>
            <span className="text-[10px] text-neutral-500 uppercase font-mono">TYPOGRAPHY TODAY REVIEW, 1984</span>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-xs text-neutral-300 font-sans max-w-2xl mb-4 sm:mb-0">
              "Every designer seeking to understand the root of modern grotesque typefaces must study these master plates."
            </p>
            <span className="text-[10px] text-neutral-500 uppercase font-mono">INTERNATIONAL DESIGN GAZETTE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
