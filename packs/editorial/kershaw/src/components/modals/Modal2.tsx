import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export function Modal2() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedChannel, setSelectedChannel] = useState('CH-01');

  if (!isOpen) {
    return (
      <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono text-center">
        <button onClick={() => setIsOpen(true)} className="bg-[#ffd500] text-black font-extrabold text-xs px-6 py-3 uppercase tracking-wider">
          OPEN CHANNEL CHOICE MODAL
        </button>
      </section>
    );
  }

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-md mx-auto bg-[#14161a] border border-[#262c36] p-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#22262f] mb-4">
          <span className="text-xs font-bold text-[#ffd500]">// SELECT TELEMETRY CHANNEL</span>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-4 h-4" /></button>
        </div>
        <div className="space-y-3 mb-6 font-sans">
          {['CH-01 // RPM ROTOR', 'CH-02 // TORQUE NM', 'CH-03 // OIL TEMP'].map((ch) => (
            <button
              key={ch}
              onClick={() => setSelectedChannel(ch)}
              className={`w-full text-left p-3 text-xs border font-mono flex items-center justify-between ${selectedChannel === ch ? 'border-[#ffd500] text-[#ffd500] bg-[#ffd500]/10' : 'border-[#262c36] text-zinc-300'}`}
            >
              <span>{ch}</span>
              {selectedChannel === ch && <Check className="w-3.5 h-3.5 text-[#ffd500]" />}
            </button>
          ))}
        </div>
        <button onClick={() => setIsOpen(false)} className="w-full bg-[#ffd500] text-black font-extrabold text-xs py-3 uppercase tracking-wider hover:bg-[#ffdf33]">
          CONFIRM CHANNEL SELECTION
        </button>
      </div>
    </section>
  );
}
