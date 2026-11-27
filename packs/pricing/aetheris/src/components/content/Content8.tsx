import React from 'react';

export function Content8() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-2">
              CURATOR’S DESK // ARTIFACT COLLISION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">
              Dossier Pinboard: Acquisition No. 884
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[#7a8494]">STACKED ARCHIVAL ARTIFACTS</span>
        </div>

        {/* Desktop Controlled Chaos Pinboard (No Shared Grid Alignment) */}
        <div className="hidden lg:block relative w-full h-[600px] border border-white/10 bg-[#0b0d10]">
          {/* Subtle Desk Crosshair Matrix */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/10" />
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10" />
          </div>

          {/* Artifact 1 (z-10): Large Dark Blueprint Plate */}
          <div className="absolute left-8 top-10 w-[420px] bg-[#13171c] border border-white/15 p-5 -rotate-2 z-10">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#d4b06a] mb-3">
              <span>◆ PIN 01 // CASE PROFILE</span>
              <span className="text-[#7a8494]">BLUEPRINT REV. C</span>
            </div>
            <div className="h-56 bg-[#0b0d10] border border-white/10 flex items-center justify-center relative">
              <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#d4b06a]" />
              <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#d4b06a]" />
              <svg viewBox="0 0 280 160" className="w-full h-full" aria-label="Case profile schematic">
                <rect x="45" y="30" width="190" height="100" rx="50" fill="none" stroke="rgba(236,232,225,0.28)" />
                <circle cx="140" cy="80" r="38" fill="none" stroke="#d4b06a" strokeOpacity="0.65" />
                <line x1="20" y1="80" x2="260" y2="80" stroke="rgba(236,232,225,0.12)" strokeDasharray="3 4" />
                <line x1="140" y1="10" x2="140" y2="150" stroke="rgba(236,232,225,0.12)" strokeDasharray="3 4" />
              </svg>
            </div>
            <div className="mt-3 text-[10px] font-mono text-[#7a8494]">
              CAPTION: 40.5MM GRADE-5 TITANIUM MONOBLOC CASEBAND
            </div>
          </div>

          {/* Artifact 2 (z-20): Archival Watchmaker's Note Overlapping Bottom-Right of Artifact 1 */}
          <div className="absolute left-[310px] top-[240px] w-[360px] bg-[#171c23] border border-[#d4b06a]/50 p-6 rotate-1 z-20">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#d4b06a] mb-3">
              <span>◆ PIN 02 // BENCH MEMORANDUM</span>
              <span>18 NOV 2026</span>
            </div>
            <h3 className="font-serif text-2xl text-[#ece8e1] mb-2">
              “Amplitude stabilized at 294° dial-up.”
            </h3>
            <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-4">
              Final adjustment of pallet stone lock completed after 72-hour run-in. Ready for parchment sealing and vault dispatch.
            </p>
            <div className="border-t border-white/10 pt-2 text-[10px] font-mono text-[#ece8e1]">
              SIGNED: L. MERCER — HEAD HOROLOGIST
            </div>
          </div>

          {/* Artifact 3 (z-30): Vertical Metallurgical Slip Overlapping Upper-Right */}
          <div className="absolute right-44 top-8 w-[240px] bg-[#0b0d10] border border-white/25 p-5 rotate-2 z-30">
            <div className="text-[10px] font-mono text-[#d4b06a] mb-3 flex justify-between">
              <span>◆ PIN 03</span>
              <span>ASSAY SLIP</span>
            </div>
            <div className="font-serif text-3xl text-[#ece8e1] mb-1">Au 750</div>
            <div className="text-[10px] font-mono text-[#7a8494] mb-4">HALLMARK: GENEVA KEY 18K</div>
            <div className="space-y-1.5 text-[10px] font-mono border-t border-white/10 pt-3">
              <div className="flex justify-between">
                <span className="text-[#7a8494]">DENSITY</span>
                <span className="text-[#ece8e1]">15.58 g/cm³</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7a8494]">INGOT NO.</span>
                <span className="text-[#ece8e1]">CH-4491</span>
              </div>
            </div>
            <div className="mt-4 text-[9px] font-mono text-[#7a8494]">
              CAPTION: DIAL PLATE BULLION CERTIFICATE
            </div>
          </div>

          {/* Artifact 4 (z-40): Circular Gold-Rimmed Wax/Brass Medallion Over Junction */}
          <div className="absolute left-[610px] top-[205px] w-24 h-24 rounded-full bg-[#13171c] border border-[#d4b06a] flex items-center justify-center -rotate-12 z-40">
            <div className="w-20 h-20 rounded-full border border-[#d4b06a]/35 flex flex-col items-center justify-center text-center">
              <span className="text-[#d4b06a] text-xs">◆</span>
              <span className="font-mono text-[8px] text-[#ece8e1] tracking-widest mt-0.5">SEALED</span>
              <span className="font-mono text-[8px] text-[#d4b06a]">NO. 884</span>
            </div>
          </div>

          {/* Artifact 5 (z-20): Bottom-Right Vault Transit Tag */}
          <div className="absolute right-8 bottom-8 w-[330px] bg-[#13171c] border border-white/15 p-5 -rotate-1 z-20">
            <div className="flex justify-between text-[10px] font-mono text-[#d4b06a] mb-2">
              <span>◆ PIN 04 // TRANSIT MANIFEST</span>
              <span>ARMORED COURIER</span>
            </div>
            <div className="font-mono text-xs text-[#ece8e1] mb-2">
              ORIGIN: GVA-01A → DEST: LDN-11A
            </div>
            <div className="text-[10px] font-mono text-[#7a8494]">
              CAPTION: DIPLOMATIC POUCH DISPATCH SLIP // INSURED $1.4M
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Overlapping Stack */}
        <div className="lg:hidden flex flex-col gap-6">
          <div className="bg-[#13171c] border border-white/15 p-5">
            <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">◆ PIN 01 // BLUEPRINT REV. C</span>
            <p className="font-serif text-lg text-[#ece8e1]">40.5mm Grade-5 Titanium Monobloc Caseband</p>
          </div>
          <div className="bg-[#171c23] border border-[#d4b06a]/50 p-5 ml-4 -mt-3">
            <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">◆ PIN 02 // BENCH MEMORANDUM</span>
            <p className="font-serif text-lg text-[#ece8e1]">“Amplitude stabilized at 294° dial-up.”</p>
          </div>
          <div className="bg-[#0b0d10] border border-white/25 p-5 mr-4 -mt-3">
            <span className="text-[10px] font-mono text-[#d4b06a] block mb-2">◆ PIN 03 // ASSAY SLIP</span>
            <p className="font-serif text-lg text-[#ece8e1]">Au 750 — Geneva Key 18K Bullion Certificate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
