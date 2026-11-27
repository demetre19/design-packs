import React from 'react';
import { Shield, Check, FileText } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">03. PATRON TIER SPOTLIGHT</h2>
          <span className="text-xs text-neutral-500">SPECIAL EDITION</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs text-neutral-500 uppercase tracking-widest mb-2 block">GRAND PATRONAGE // LIFE FELLOWSHIP</span>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">The Imprimerie Nationale Patron</h3>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
              Support the physical restoration of 18th-century lead type punches in our Basel preservation vaults. Includes physical specimen box, leather-bound manual, and permanent name inscription in the museum hall.
            </p>
            <div className="flex items-center space-x-6 text-xs text-neutral-300">
              <span>• Hand-Cast Lead Strike</span>
              <span>• Annual Curator Dinner</span>
              <span>• Lifetime All-Foundry Access</span>
            </div>
          </div>
          <div className="lg:col-span-4 border-l border-neutral-800 pl-8 text-center lg:text-right">
            <div className="text-4xl font-bold text-white mb-2">$1,200</div>
            <div className="text-xs text-neutral-500 mb-6">ONE-TIME CONTRIBUTION</div>
            <button className="bg-white text-neutral-900 px-6 py-3 text-xs font-bold hover:bg-neutral-200 transition-colors w-full">
              BECOME A PATRON
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
