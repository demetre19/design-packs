import React from 'react';
import { Shield } from 'lucide-react';

export function Footer3() {
  return (
    <footer className="bg-[#f5f4f0] text-black border-t-4 border-black font-sans select-none">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dense left column */}
          <div className="lg:col-span-8 bg-black text-white p-8 border-4 border-black space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-[#f25c05]" />
              <span className="font-sans font-black text-xl tracking-tighter uppercase">TITAN FORGE // ASYMMETRIC FOOTER</span>
            </div>
            <p className="font-mono text-xs text-neutral-400 leading-relaxed max-w-xl">
              Heavy extraction machinery and decentralized autonomous mesh infrastructure engineered for global scale and extreme environments.
            </p>
            <div className="pt-4 border-t border-neutral-800 font-mono text-[10px] text-neutral-500 flex justify-between">
              <span>LATITUDE: 34.0522° N</span>
              <span className="text-[#f25c05]">MESH SECURE</span>
            </div>
          </div>

          {/* Sparse right column */}
          <div className="lg:col-span-4 font-mono text-xs space-y-6 p-4 border-2 border-black bg-white">
            <div className="border-b border-black pb-3">
              <span className="text-[10px] text-neutral-500 uppercase block mb-1">QUICK LINKS</span>
              <div className="space-y-1 font-bold">
                <a href="#systems" className="block hover:text-[#f25c05]">01. SYSTEMS MANIFEST</a>
                <a href="#telemetry" className="block hover:text-[#f25c05]">02. TELEMETRY FEED</a>
                <a href="#compliance" className="block hover:text-[#f25c05]">03. ISO-9001 SPECS</a>
              </div>
            </div>
            <div className="text-[10px] text-neutral-500">
              © 2026 TITAN FORGE CORP.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
