import React, { useState } from 'react';
import { ArrowRight, Zap, Check } from 'lucide-react';

export function Modal2() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-[#16181d] border border-[#272a33] p-8 clip-corner">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">// CONTROL BAR CONFIRMATION</span>
          <h3 className="font-display font-extrabold text-2xl text-white mb-4">FIRMWARE UPDATE v4.8.2 READY</h3>
          <p className="font-mono-spec text-xs text-neutral-400 mb-8">
            Optimizes torque vectoring curves and thermal cooling pump activation thresholds.
          </p>

          <div className="bg-[#101114] border border-[#272a33] p-4 clip-corner flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 border clip-corner flex items-center justify-center ${confirmed ? 'bg-[#ff5a1f] border-[#ff5a1f] text-black' : 'border-[#272a33]'}`}>
                {confirmed && <Check size={14} />}
              </div>
              <span className="font-mono-spec text-xs text-white">I confirm installation over 800V bus</span>
            </div>
            <button 
              onClick={() => setConfirmed(!confirmed)}
              className="font-mono-spec text-[10px] text-[#ff5a1f] hover:underline cursor-pointer"
            >
              {confirmed ? 'RESET' : 'SELECT'}
            </button>
          </div>

          <button 
            disabled={!confirmed}
            className={`w-full mt-6 font-extrabold text-xs py-4 clip-corner flex items-center justify-center gap-2 transition-colors ${confirmed ? 'bg-[#ff5a1f] text-black hover:bg-white cursor-pointer' : 'bg-[#272a33] text-neutral-500 cursor-not-allowed'}`}
          >
            <span>EXECUTE FIRMWARE INSTALL</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
