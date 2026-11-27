/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Navbar2: React.FC = () => {
  return (
    <header className="w-full bg-black text-white border-b border-white/20 overflow-hidden relative">
      <div className="absolute top-2 right-4 text-[11px] font-mono tracking-widest opacity-70 z-10 hidden sm:block">
        VOL. 42 // OCT 14–18
      </div>
      <div className="w-full px-2 py-3">
        <h1 className="text-[14vw] sm:text-[12vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap overflow-hidden select-none">
          KONTURFOUNDRY
        </h1>
      </div>
    </header>
  );
};
