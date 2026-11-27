import React from 'react';
import { Zap, Activity, Cpu } from 'lucide-react';

export function FeatureGrid3() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// PRECISION METRICS</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">DYNAMICS & ARCHITECTURE</h2>
        </div>

        <div className="space-y-12">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#16181d] border border-[#272a33] p-8 clip-corner">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono-spec text-xs text-[#ff5a1f] block">STAGE 01 // BRAKING MATRIX</span>
              <h3 className="font-display font-extrabold text-3xl text-white">BREMBO GP4-RR MONOBLOC CALIPERS</h3>
              <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed">
                Titanium pistons coupled with 330mm carbon-ceramic ventilated discs. Integrated regenerative braking recaptures up to 34% of kinetic energy into the 800V pack.
              </p>
              <div className="pt-2 flex gap-6 font-mono-spec text-xs text-white">
                <div><span className="text-neutral-500 block">DISC DIA:</span> 330 MM</div>
                <div><span className="text-neutral-500 block">BITE TIME:</span> 12 MS</div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-[#101114] border border-[#272a33] p-8 clip-corner text-center">
              <Activity size={48} className="text-[#ff5a1f] mx-auto mb-3 animate-pulse" />
              <span className="font-mono-spec text-xs text-neutral-400">REGENERATIVE BRAKING EFFICIENCY</span>
              <div className="font-display font-extrabold text-4xl text-white mt-1">34.2% <span className="text-[#ff5a1f] text-sm">RECOVERY</span></div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#16181d] border border-[#272a33] p-8 clip-corner">
            <div className="lg:col-span-6 bg-[#101114] border border-[#272a33] p-8 clip-corner text-center order-2 lg:order-1">
              <Cpu size={48} className="text-[#ff5a1f] mx-auto mb-3" />
              <span className="font-mono-spec text-xs text-neutral-400">SUSPENSION DYNAMICS</span>
              <div className="font-display font-extrabold text-4xl text-white mt-1">ÖHLINS FGRT <span className="text-[#ff5a1f] text-sm">TTX36</span></div>
            </div>
            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <span className="font-mono-spec text-xs text-[#ff5a1f] block">STAGE 02 // SUSPENSION</span>
              <h3 className="font-display font-extrabold text-3xl text-white">SEMI-ACTIVE ELECTRONIC DAMPING</h3>
              <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed">
                Real-time accelerometer feedback adjusts compression and rebound damping every 10 milliseconds based on track surface inclination and G-load telemetry.
              </p>
              <div className="pt-2 flex gap-6 font-mono-spec text-xs text-white">
                <div><span className="text-neutral-500 block">ADJUSTMENT:</span> 10 MS</div>
                <div><span className="text-neutral-500 block">TRAVEL:</span> 120 MM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
