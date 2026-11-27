import React, { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

export function Navbar4() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="w-full bg-[#f5f4f0] border-b-4 border-black font-mono select-none">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Cpu className="w-6 h-6 text-[#f25c05]" />
            <span className="font-sans font-black text-lg tracking-tighter uppercase">TITAN FORGE // 04</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[10px] text-neutral-600 hidden sm:inline uppercase">SYSTEM OVERRIDE READY</span>
            <button 
              onClick={() => setOpenMenu(true)}
              className="bg-black text-white px-4 py-2 hover:bg-[#f25c05] hover:text-black transition-colors text-xs font-black uppercase flex items-center space-x-2"
            >
              <Menu className="w-4 h-4" />
              <span>Full Manifest</span>
            </button>
          </div>
        </div>
      </header>

      {openMenu && (
        <div className="fixed inset-0 z-50 bg-black text-white p-6 font-mono flex flex-col justify-between animate-fadeIn">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-8">
              <span className="text-xs text-[#f25c05] uppercase tracking-widest">FULL MANIFEST // INDEX 04</span>
              <button 
                onClick={() => setOpenMenu(false)}
                className="bg-neutral-900 border border-neutral-700 p-2 hover:bg-[#f25c05] hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
              <div className="space-y-4">
                <h3 className="text-xs text-neutral-500 uppercase tracking-widest border-b border-neutral-800 pb-2">01. Extraction Units</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#digger" onClick={() => setOpenMenu(false)} className="hover:text-[#f25c05] block py-1">HEAVY EXCAVATOR TF-900</a></li>
                  <li><a href="#drill" onClick={() => setOpenMenu(false)} className="hover:text-[#f25c05] block py-1">DIAMOND CORE DRILL DX-4</a></li>
                  <li><a href="#crusher" onClick={() => setOpenMenu(false)} className="hover:text-[#f25c05] block py-1">HYDRAULIC ORE CRUSHER</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs text-neutral-500 uppercase tracking-widest border-b border-neutral-800 pb-2">02. Automation & AI</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#autonomous" onClick={() => setOpenMenu(false)} className="hover:text-[#f25c05] block py-1">AUTONOMOUS FLEET MESH</a></li>
                  <li><a href="#telemetry" onClick={() => setOpenMenu(false)} className="hover:text-[#f25c05] block py-1">REAL-TIME ORE TELEMETRY</a></li>
                  <li><a href="#predictive" onClick={() => setOpenMenu(false)} className="hover:text-[#f25c05] block py-1">PREDICTIVE STRESS MAPPING</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs text-neutral-500 uppercase tracking-widest border-b border-neutral-800 pb-2">03. Enterprise & Compliance</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#safety" onClick={() => setOpenMenu(false)} className="hover:text-[#f25c05] block py-1">ISO-9001 INDUSTRIAL SPECS</a></li>
                  <li><a href="#global" onClick={() => setOpenMenu(false)} className="hover:text-[#f25c05] block py-1">GLOBAL EXTRACTION HUBS</a></li>
                  <li><a href="#support" onClick={() => setOpenMenu(false)} className="hover:text-[#f25c05] block py-1">DIRECT TACTICAL SUPPORT</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto w-full border-t border-neutral-800 pt-4 flex justify-between items-center text-[10px] text-neutral-500">
            <span>TITAN FORGE CORPORATION // ALL RIGHTS RESERVED</span>
            <span className="text-[#f25c05]">SECURE MESH ACTIVE</span>
          </div>
        </div>
      )}
    </>
  );
}
