import React from 'react';
import { AlertCircle } from 'lucide-react';

export function Modal2() {
  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-[#e8f0ec] rounded-[32px] p-8 md:p-10 shadow-xl text-center border border-[#122420]/10">
        <div className="w-12 h-12 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#2a7a6d] mx-auto mb-6 shadow-sm">
          <AlertCircle className="w-6 h-6" />
        </div>

        <h3 className="font-serif text-2xl text-[#122420] mb-3">Archive Clinical Report?</h3>
        <p className="text-sm text-[#122420]/80 font-light mb-8 leading-relaxed">
          This will move Patient Protocol #8492 to the secure long-term archive. You can restore it at any time from your dashboard.
        </p>

        <div className="flex gap-4">
          <button className="flex-1 py-3 rounded-full bg-[#faf6f0] text-[#122420] text-sm font-medium hover:bg-[#faf6f0]/80 transition-all border border-[#122420]/15">
            Cancel
          </button>
          <button className="flex-1 py-3 rounded-full bg-[#1d4f47] text-[#faf6f0] text-sm font-medium hover:bg-[#153b34] transition-all shadow-sm">
            Confirm Archive
          </button>
        </div>
      </div>
    </section>
  );
}
