/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer4: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white border-b border-white/20 p-8 overflow-hidden">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-2">[04 // BULLETIN REGISTRATION]</div>
      <div className="overflow-hidden my-4">
        <h2 className="text-[14vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          SUBSCRIBE
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-8 border-t border-white/20 pt-6">
        <p className="text-xs font-mono tracking-wider opacity-75 max-w-sm">
          Receive quarterly monographs and early access announcements directly to your designated terminal.
        </p>
        <div className="flex w-full md:w-auto">
          <input 
            type="email" 
            placeholder="ENTER EMAIL ADDRESS" 
            className="bg-black border border-white/40 px-4 py-3 text-xs font-mono tracking-widest text-white placeholder-white/40 focus:outline-none focus:border-white w-full md:w-80"
          />
          <button className="bg-white text-black px-6 py-3 text-xs font-mono font-bold tracking-widest hover:opacity-90 flex items-center gap-1">
            JOIN <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
