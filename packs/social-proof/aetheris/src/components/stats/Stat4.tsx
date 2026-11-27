import React from 'react';

export function Stat4() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto bg-[#13171c] border border-white/10 p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="w-8 h-8 rounded-full border border-[#d4b06a] flex items-center justify-center text-[#d4b06a] font-serif">◆</span>
          <div>
            <span className="text-[10px] font-mono text-[#7a8494] block">READOUT STATUS</span>
            <span className="font-serif text-lg text-[#ece8e1]">Telemetry & Chronometer Metrics</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 text-xs font-mono">
          <div>
            <span className="text-[#7a8494] block">VPH:</span>
            <span className="text-[#ece8e1]">21,600</span>
          </div>
          <div>
            <span className="text-[#7a8494] block">JEWELS:</span>
            <span className="text-[#ece8e1]">42</span>
          </div>
          <div>
            <span className="text-[#7a8494] block">TEMP:</span>
            <span className="text-[#ece8e1]">18.4°C</span>
          </div>
          <div>
            <span className="text-[#7a8494] block">STATUS:</span>
            <span className="text-[#d4b06a]">OPTIMAL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
