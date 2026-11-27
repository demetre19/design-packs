import React from 'react';

export function Footer2() {
  return (
    <footer className="bg-[#0c0d0f] text-white py-16 px-6 border-t border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
        <div>
          <span className="text-white font-bold block mb-3 uppercase">KERSHAW DYNAMICS</span>
          <p className="text-zinc-500 font-sans text-[11px]">Precision dynamometer engineering and propulsion telemetry.</p>
        </div>
        <div>
          <span className="text-[#ffd500] font-bold block mb-3 uppercase">CHANNELS</span>
          <ul className="space-y-2 text-zinc-400 font-sans">
            <li><a href="#" className="hover:text-white">CH-01 // RPM Rotor</a></li>
            <li><a href="#" className="hover:text-white">CH-02 // Torque NM</a></li>
            <li><a href="#" className="hover:text-white">CH-03 // Oil Temp</a></li>
          </ul>
        </div>
        <div>
          <span className="text-[#ffd500] font-bold block mb-3 uppercase">FACILITY</span>
          <ul className="space-y-2 text-zinc-400 font-sans">
            <li><a href="#" className="hover:text-white">Cell 04 Stage</a></li>
            <li><a href="#" className="hover:text-white">Laser Interferences</a></li>
            <li><a href="#" className="hover:text-white">Safety Protocols</a></li>
          </ul>
        </div>
        <div>
          <span className="text-[#ffd500] font-bold block mb-3 uppercase">STATUS</span>
          <span className="text-white font-bold block mb-1">RUN 07/40 ACTIVE</span>
          <span className="text-[10px] text-zinc-500 font-sans">All sensor arrays calibrated nominal.</span>
        </div>
      </div>
    </footer>
  );
}
