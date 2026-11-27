import React, { useState } from 'react';
import { Menu, X, Zap, ArrowRight, Shield, Cpu, Activity } from 'lucide-react';

export function Navbar4() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#101114] border-b border-[#272a33] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ff5a1f] clip-corner flex items-center justify-center font-bold text-black">
            <Zap size={16} />
          </div>
          <span className="font-extrabold text-lg tracking-tighter text-white">APEX MOTIVE</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline font-mono-spec text-xs text-[#ff5a1f] bg-[#16181d] px-3 py-1 border border-[#272a33]">
            STATUS: ONLINE
          </span>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 bg-[#16181d] border border-[#272a33] clip-corner flex items-center justify-center text-white hover:border-[#ff5a1f] transition-colors cursor-pointer"
          >
            {menuOpen ? <X size={20} className="text-[#ff5a1f]" /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Full-screen grid menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 bg-[#101114] z-50 p-6 md:p-12 overflow-y-auto border-t border-[#272a33] animate-fadeIn">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12 border-b border-[#272a33] pb-6">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">DIRECTORY // INDEX</span>
                <h2 className="font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-1">COMMAND MATRIX</h2>
              </div>
              <button 
                onClick={() => setMenuOpen(false)}
                className="font-mono-spec text-xs text-neutral-400 hover:text-white flex items-center gap-2 cursor-pointer"
              >
                <span>[CLOSE]</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: '01 // MACHINES', desc: 'Explore APEX-V12, X-Series & Track Prototypes', icon: Zap },
                { title: '02 // TELEMETRY', desc: 'Real-time dyno charts, power curves & thermal logs', icon: Activity },
                { title: '03 // CONFIGURATOR', desc: 'Custom carbon weave, aero wings & caliper finishes', icon: Cpu },
                { title: '04 // SHOWROOMS', desc: 'Global flagship experience labs & test track slots', icon: Shield },
                { title: '05 // RACING', desc: 'MotoGP electric championship results & telemetry data', icon: Zap },
                { title: '06 // SUPPORT', desc: 'Over-the-air firmware, telemetry diagnostics & spares', icon: Cpu },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-[#16181d] border border-[#272a33] p-6 clip-corner hover:border-[#ff5a1f] transition-all group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="text-[#ff5a1f]" size={20} />
                      <span className="font-mono-spec text-xs text-neutral-500">0{idx+1}</span>
                    </div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-[#ff5a1f] transition-colors">{item.title}</h3>
                    <p className="font-mono-spec text-xs text-neutral-400 mt-2">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
