import React from 'react';
import { ArrowUpRight, Shield } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-20 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-4xl mx-auto bg-neutral-950 border border-neutral-800 p-10 text-center relative overflow-hidden">
        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3">TICKET ENERGY // READING ROOM ACCESS</div>
        <h2 className="text-4xl font-serif font-bold text-white mb-4">Visit the Basel Archive Reading Room</h2>
        <p className="text-xs text-neutral-400 font-sans max-w-xl mx-auto leading-relaxed mb-8">
          Examine original lead matrices and copperplate strikes in person under the supervision of our curatorial board.
        </p>
        <button className="bg-white text-neutral-900 px-8 py-4 font-bold text-xs hover:bg-neutral-200 transition-colors inline-flex items-center space-x-2">
          <span>REQUEST ADMISSION PASS</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
