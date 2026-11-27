import React from 'react';
import { Shield, ArrowUpRight } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="bg-black text-white border-t-4 border-[#f25c05] font-mono select-none">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-800">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-[#f25c05]" />
              <span className="font-sans font-black text-lg tracking-tighter uppercase text-white">TITAN FORGE</span>
            </div>
            <p className="text-xs text-neutral-400 uppercase leading-relaxed">
              Heavy extraction machinery and decentralized autonomous mesh infrastructure.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs text-[#f25c05] uppercase tracking-widest font-bold">01 // SYSTEMS</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#digger" className="hover:text-white transition-colors">Excavator TF-900</a></li>
              <li><a href="#drill" className="hover:text-white transition-colors">Diamond Core DX</a></li>
              <li><a href="#smelt" className="hover:text-white transition-colors">Smelting Cell-X</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs text-[#f25c05] uppercase tracking-widest font-bold">02 // TELEMETRY</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#mesh" className="hover:text-white transition-colors">Edge Mesh Control</a></li>
              <li><a href="#acoustic" className="hover:text-white transition-colors">Acoustic Stress AI</a></li>
              <li><a href="#satellite" className="hover:text-white transition-colors">Orbital Relay Feed</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs text-[#f25c05] uppercase tracking-widest font-bold">03 // COMPLIANCE</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#iso" className="hover:text-white transition-colors">ISO-9001 Standards</a></li>
              <li><a href="#safety" className="hover:text-white transition-colors">Safety Protocols</a></li>
              <li><a href="#legal" className="hover:text-white transition-colors">Enterprise Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-500 uppercase tracking-widest">
          <span>© 2026 TITAN FORGE INDUSTRIAL CORPORATION. ALL RIGHTS RESERVED.</span>
          <span className="text-[#f25c05] mt-2 md:mt-0">SECURE MESH ACTIVE // LATENCY 0.04MS</span>
        </div>
      </div>
    </footer>
  );
}
