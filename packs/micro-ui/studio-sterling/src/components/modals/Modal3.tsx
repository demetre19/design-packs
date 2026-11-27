import React from 'react';
import { Check, X } from 'lucide-react';

export function Modal3() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-xl mx-auto border border-black bg-white p-6 md:p-8">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-black text-white flex items-center justify-center text-xs font-bold">
              <Check className="w-3 h-3" />
            </span>
            <h3 className="font-black text-sm uppercase tracking-tighter">TRANSMISSION CONFIRMED</h3>
          </div>
          <button className="border border-black p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="border border-black p-4 bg-neutral-50 mb-6 space-y-2 text-xs uppercase tracking-wider">
          <div className="flex justify-between border-b border-black pb-2">
            <span className="text-neutral-500">DOSSIER REF</span>
            <span className="font-bold">ST-2026-9082</span>
          </div>
          <div className="flex justify-between border-b border-black pb-2">
            <span className="text-neutral-500">STATUS</span>
            <span className="font-bold">RECEIVED & QUEUED</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">RESPONSE SLA</span>
            <span className="font-bold">24 HOURS</span>
          </div>
        </div>
        <p className="text-[11px] uppercase tracking-wider text-neutral-700 mb-6 text-center">
          Your project inquiry has been securely routed to Studio Sterling partners in London and Zurich.
        </p>
        <button className="w-full border border-black py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
          Return to Archive
        </button>
      </div>
    </section>
  );
}
