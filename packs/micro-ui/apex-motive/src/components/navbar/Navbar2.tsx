import React, { useState } from 'react';
import { ChevronDown, Zap, Gauge } from 'lucide-react';

export function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('APEX-V12 R');

  const models = ['APEX-V12 R', 'APEX-X SUPERSTOCK', 'VORTEX GT-9', 'TYPHOON-ZERO'];

  return (
    <header className="w-full bg-[#101114] border-b border-[#272a33] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-extrabold text-xl tracking-tighter text-white">APEX<span className="text-[#ff5a1f]">.</span>MOTO</span>
          
          {/* Model Selector Dropdown in Clipped Panel */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#16181d] border border-[#272a33] px-4 py-2 clip-corner flex items-center gap-3 text-xs font-mono-spec text-white hover:border-[#ff5a1f] transition-colors cursor-pointer"
            >
              <Gauge size={14} className="text-[#ff5a1f]" />
              <span>MODEL: <strong className="text-white">{selectedModel}</strong></span>
              <ChevronDown size={14} className={`text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-[#16181d] border border-[#272a33] clip-corner shadow-2xl z-50">
                <div className="p-2 border-b border-[#272a33] text-[10px] font-mono-spec text-neutral-400">
                  SELECT SPECIFICATION PLATFORM
                </div>
                {models.map((model) => (
                  <button
                    key={model}
                    onClick={() => { setSelectedModel(model); setIsOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-xs font-mono-spec flex items-center justify-between hover:bg-[#ff5a1f] hover:text-black transition-colors ${selectedModel === model ? 'text-[#ff5a1f] bg-[#1c1f26]' : 'text-neutral-300'}`}
                  >
                    <span>{model}</span>
                    {selectedModel === model && <span className="w-1.5 h-1.5 bg-[#ff5a1f] clip-corner" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 font-display text-xs text-neutral-300">
          <a href="#specs" className="hover:text-[#ff5a1f]">SPECIFICATIONS</a>
          <a href="#telemetry" className="hover:text-[#ff5a1f]">TELEMETRY</a>
          <a href="#dealers" className="hover:text-[#ff5a1f]">SHOWROOMS</a>
        </div>

        <button className="bg-transparent border border-[#ff5a1f] text-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-black font-extrabold text-xs px-5 py-2.5 clip-corner transition-colors">
          BOOK TEST RUN
        </button>
      </div>
    </header>
  );
}
