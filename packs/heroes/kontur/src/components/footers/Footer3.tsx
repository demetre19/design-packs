/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Footer3: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white border-b border-white/20 p-8 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[11px] font-mono tracking-widest opacity-70 mb-6">
        <span>SYS.REF // 8849-Z</span>
        <span>SWISS CONFEDERATION COMPLIANT</span>
      </div>
      <div className="overflow-hidden my-2">
        <h2 className="text-[15vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          KONTURSYSTEMS
        </h2>
      </div>
    </footer>
  );
};
