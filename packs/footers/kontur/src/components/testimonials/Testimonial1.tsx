/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Testimonial1: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between">
      <div className="flex justify-between items-start text-[11px] font-mono tracking-widest opacity-70">
        <span>[01 // CRITIQUE]</span>
        <span>TYPOGRAPHY REVIEW</span>
      </div>

      <div className="my-auto overflow-hidden text-center">
        <h3 className="text-[15vw] font-black tracking-[-0.07em] leading-[0.8] uppercase whitespace-nowrap">
          RADICAL
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/20 pt-4 gap-4">
        <div className="text-xs font-mono tracking-wider opacity-80 max-w-md">
          &ldquo;The most uncompromising typographic gathering in Europe. A masterclass in negative space and brutalist reduction.&rdquo;
        </div>
        <div className="text-[11px] font-mono tracking-widest opacity-60 text-right">
          DR. EMIL RÄTZ<br />DESIGN QUARTERLY
        </div>
      </div>
    </div>
  );
};
