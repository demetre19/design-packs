import React from 'react';

export function Footer3() {
  return (
    <footer className="w-full bg-white text-black py-16 border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Heavy left */}
        <div className="lg:col-span-8">
          <div className="font-mono text-xs text-[#ff2e00] font-bold mb-3 uppercase">// ASYMMETRIC FOOTER STRUCTURE</div>
          <div className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            VELOX APEX <span className="text-[#ff2e00]">SYSTEMS</span>
          </div>
          <p className="font-mono text-xs text-neutral-600 max-w-md">
            Uncompromising high-performance electric hyper-motorcycles engineered for circuit dominance and precision telemetry.
          </p>
        </div>

        {/* Sparse right */}
        <div className="lg:col-span-4 font-mono text-xs space-y-3 flex flex-col justify-end">
          <div className="text-neutral-500">// DIRECT DISPATCH</div>
          <div className="font-bold text-black text-sm">TOKYO TEST LABS</div>
          <div className="text-[#ff2e00]">SYS.REF // 2026.V999</div>
          <div className="text-neutral-500 pt-4 border-t border-black">© 2026 VELOX APEX. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
}
