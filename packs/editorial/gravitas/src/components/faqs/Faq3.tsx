import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq3() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-3xl mx-auto border border-neutral-800 bg-neutral-950 p-8 sm:p-12 space-y-8">
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">FAQ 03 // Single-Column Hairline FAQ</div>
        <h2 className="text-3xl font-light tracking-tight text-white">Licensing & Technical Inquiries</h2>
        
        <div className="space-y-6 pt-4 divide-y divide-neutral-900">
          <div className="space-y-2 pt-4">
            <h3 className="text-lg font-bold text-white">Can I use Gravitas in mobile applications?</h3>
            <p className="text-xs font-light text-neutral-400">Yes, mobile app embedding is fully covered under the Studio and Enterprise tiers.</p>
          </div>
          <div className="space-y-2 pt-4">
            <h3 className="text-lg font-bold text-white">Are trial weights available for testing?</h3>
            <p className="text-xs font-light text-neutral-400">Trial cuts in weight 400 (Regular) are available upon request for evaluation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
