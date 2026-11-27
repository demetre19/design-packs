import React from 'react';
import { Cpu } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="bg-[#f5f4f0] text-black border-t-4 border-black font-sans select-none">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b-2 border-black">
          {/* Heavy wordmark block */}
          <div className="lg:col-span-5 bg-black text-white p-8 border-4 border-black flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Cpu className="w-6 h-6 text-[#f25c05]" />
                <span className="font-sans font-black text-xl tracking-tighter uppercase">TITAN FORGE // 02</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                ABSOLUTE INDUSTRIAL POWER.
              </h3>
              <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                Autonomous extraction systems and real-time neural mesh infrastructure.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800 font-mono text-[10px] text-[#f25c05]">
              STATUS: OPERATIONAL
            </div>
          </div>

          {/* Thin link columns */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-6 font-mono text-xs">
            <div className="space-y-3">
              <h4 className="font-bold uppercase text-black border-b border-black pb-2">Hardware</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><a href="#t1" className="hover:text-[#f25c05]">Excavator TF</a></li>
                <li><a href="#t2" className="hover:text-[#f25c05]">Diamond Drill</a></li>
                <li><a href="#t3" className="hover:text-[#f25c05]">Crusher Matrix</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold uppercase text-black border-b border-black pb-2">Telemetry</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><a href="#m1" className="hover:text-[#f25c05]">Edge Mesh</a></li>
                <li><a href="#m2" className="hover:text-[#f25c05]">Stress AI</a></li>
                <li><a href="#m3" className="hover:text-[#f25c05]">Satellite Feed</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold uppercase text-black border-b border-black pb-2">Enterprise</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><a href="#e1" className="hover:text-[#f25c05]">ISO-9001</a></li>
                <li><a href="#e2" className="hover:text-[#f25c05]">Global Sites</a></li>
                <li><a href="#e3" className="hover:text-[#f25c05]">Command Log</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-neutral-600">
          <span>TITAN FORGE INDUSTRIAL GROUP // 2026</span>
          <span className="text-[#f25c05] font-bold">ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
