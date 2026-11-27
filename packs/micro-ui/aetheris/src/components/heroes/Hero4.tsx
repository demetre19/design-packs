import React from 'react';

export function Hero4() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10 flex flex-col gap-10">
      <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">VAULT INFRASTRUCTURE // 04</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#ece8e1]">Subterranean Security & Custody</h1>
        </div>
        <div className="text-right font-mono text-xs text-[#7a8494]">
          <p>COORDINATES: N 51°30' W 0°05'</p>
          <p>CLASSIFICATION: TIER-1 MAXIMUM</p>
        </div>
      </div>

      {/* Full-width dark image band with gold reference line */}
      <div className="w-full bg-[#13171c] border-y border-white/10 py-24 px-6 relative flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl flex items-center justify-between absolute top-4 px-6 text-[10px] font-mono text-[#7a8494]">
          <span>REF // VAULT-ALPHA-09</span>
          <span className="text-[#d4b06a]">SECURE ATMOSPHERE: 45% RH // 18°C</span>
        </div>
        
        <div className="text-center max-w-xl">
          <span className="text-[#d4b06a] text-lg font-serif">◆</span>
          <h2 className="font-serif text-3xl text-[#ece8e1] mt-4 mb-3">Impenetrable Biometric Vaults</h2>
          <p className="font-sans text-sm text-[#7a8494] mb-8">Protected by multi-factor quantum encryption and absolute physical isolation beneath the financial district.</p>
          <button className="px-6 py-2.5 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-wider hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
            REQUEST CUSTODY DOSSIER
          </button>
        </div>

        <div className="w-full max-w-6xl flex items-center justify-between absolute bottom-4 px-6 text-[10px] font-mono text-[#7a8494]">
          <span>STATUS: ARMED & MONITORED</span>
          <span>AETHERIS VAULT DIVISION</span>
        </div>
      </div>
    </section>
  );
}
