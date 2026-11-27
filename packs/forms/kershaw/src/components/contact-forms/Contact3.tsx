import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Contact3() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-4xl mx-auto bg-[#14161a] border border-[#262c36] p-8 md:p-12 text-center">
        <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-3">// 03. TELEMETRY BULLETIN</span>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter mb-4">
          SUBSCRIBE TO <span className="text-[#ffd500]">CELL 04 LOGS.</span>
        </h2>
        <p className="text-zinc-400 font-sans text-xs max-w-md mx-auto mb-8">
          Receive confidential dyno test reports, thermal analysis whitepapers, and new powertrain release bulletins.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 text-xs text-[#ffd500] bg-[#0c0d0f] border border-[#ffd500] px-6 py-3">
            <Check className="w-4 h-4" />
            <span>FREQUENCY LOCKED // BULLETIN SUBSCRIBED</span>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="engineer@domain.com"
              className="flex-1 bg-[#0c0d0f] border border-[#262c36] px-4 py-3 text-xs text-white focus:border-[#ffd500] outline-none"
            />
            <button
              type="submit"
              className="bg-[#ffd500] text-black font-extrabold text-xs px-6 py-3 uppercase tracking-widest hover:bg-[#ffdf33] transition-colors flex items-center justify-center gap-2"
            >
              <span>SUBSCRIBE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
