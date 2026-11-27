import React, { useState } from 'react';
import { Compass } from 'lucide-react';

export function ContactForm3() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="bg-[#1c2128] text-white p-8 md:p-16 border border-[#2e5e8e]/40 relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 bg-geneva-stripe opacity-30" />
        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">CONTACT 03 · NEWSLETTER UNDERLINE INPUT</div>
          <h2 className="text-3xl font-light tracking-wide">The Geneva Gazette</h2>
          <p className="font-mono text-xs text-white/70 tracking-wider">
            Receive private monograph dispatches and annual caliber release notifications directly.
          </p>
          {subscribed ? (
            <div className="font-mono text-xs text-[#2e5e8e] tracking-widest pt-4">
              SUBSCRIBED TO ATELIER DISPATCHES.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex flex-col sm:flex-row gap-4 pt-4 max-w-md mx-auto">
              <input required type="email" placeholder="Enter collector email..." className="flex-1 bg-transparent border-b border-white/50 text-white pb-2 font-mono text-xs outline-none focus:border-[#2e5e8e]" />
              <button type="submit" className="bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] px-6 py-2.5 hover:bg-white hover:text-[#232a30] transition-colors">
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
