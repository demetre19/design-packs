import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">03. SINGLE-COLUMN READING-ROOM FAQ</h2>
          <span className="text-xs text-neutral-500">READING ROOM GUIDELINES</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8 space-y-6 text-xs">
          <div>
            <h3 className="font-bold text-white mb-2">Q: Are digital font files licensed for commercial broadcasting?</h3>
            <p className="font-sans text-neutral-400 leading-relaxed">Yes, under the Studio Professional and Enterprise Foundry tiers, full commercial broadcast and embedding rights are granted.</p>
          </div>
          <div className="border-t border-neutral-800 pt-6">
            <h3 className="font-bold text-white mb-2">Q: How do I verify authenticity of downloaded specimens?</h3>
            <p className="font-sans text-neutral-400 leading-relaxed">Each font binary includes embedded metadata matching the vault catalog ID and cryptographic checksum issued by the Basel curator.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
