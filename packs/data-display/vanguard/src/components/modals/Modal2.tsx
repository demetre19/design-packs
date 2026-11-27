import React, { useState } from 'react';
import { Check, Radio } from 'lucide-react';

export function Modal2() {
  const [selectedOption, setSelectedOption] = useState('OPTION-A');

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35] flex justify-center">
      <div className="w-full max-w-md bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] space-y-6">
        <div className="flex items-center space-x-2 text-xs text-[#ff3d00] font-bold">
          <Radio className="w-4 h-4 animate-pulse" />
          <span>CONTROL-BAR CHOICE MODAL</span>
        </div>
        <h3 className="text-xl font-black uppercase font-sans">SELECT FLIGHT PROFILE</h3>
        
        <div className="space-y-3 text-xs">
          {['OPTION-A: MACH 3.2 CRUISE', 'OPTION-B: MACH 4.8 ACCELERATION', 'OPTION-C: VERTICAL STRESS TEST'].map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedOption(opt)}
              className={`w-full text-left p-4 border transition-colors flex items-center justify-between ${
                selectedOption === opt
                  ? 'bg-[#ff3d00]/10 border-[#ff3d00] text-[#ff3d00] font-bold'
                  : 'bg-[#16181d] border-[#3a3e4c] text-zinc-300 hover:bg-[#282c35]'
              } [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]`}
            >
              <span>{opt}</span>
              {selectedOption === opt && <Check className="w-4 h-4 text-[#ff3d00]" />}
            </button>
          ))}
        </div>

        <button className="w-full bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest py-3.5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
          EXECUTE PROFILE
        </button>
      </div>
    </section>
  );
}
