/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Content5: React.FC = () => {
  return (
    <section className="w-full border-b border-white/20 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 relative">
        {/* Left Opposing Zone: Pure Black, Asymmetric Staggered Thesis (7 cols) */}
        <div className="lg:col-span-7 bg-black text-white p-8 md:p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden">
          <div className="flex justify-between items-start text-[10px] font-mono tracking-[0.22em] opacity-65">
            <span>CONTENT 05 // POLE A</span>
            <span>BASEL MODERNIST DOCTRINE</span>
          </div>

          <div className="my-10 space-y-6 max-w-md">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9]">
              ASYMMETRIC TENSION
            </h2>
            <div className="space-y-4 text-xs font-mono tracking-wide opacity-80 leading-relaxed pl-6 border-l border-white/25">
              <p>
                01. Dynamic equilibrium rejects dead-center inertia in favor of active negative space.
              </p>
              <p className="pl-6">
                02. Cropped type forces peripheral movement across the frame edge.
              </p>
              <p>
                03. Hierarchy is determined solely by scale delta—not ornamental framing.
              </p>
            </div>
          </div>

          {/* Bottom Cropped Word */}
          <div className="overflow-hidden -mx-8 -mb-12 pt-4 select-none pointer-events-none">
            <div className="text-[18vw] lg:text-[11vw] font-black tracking-[-0.07em] leading-[0.75] uppercase whitespace-nowrap">
              VOID
            </div>
          </div>
        </div>

        {/* Center Seam Collision Element */}
        <div
          className="hidden lg:flex absolute left-[58.3333%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none items-center"
          aria-hidden="true"
        >
          <div className="flex items-center border-2 border-white shadow-2xl">
            <span className="bg-black text-white px-4 py-2.5 text-5xl font-black tracking-tighter leading-none">
              V
            </span>
            <span className="bg-white text-black px-4 py-2.5 text-5xl font-black tracking-tighter leading-none border-l-2 border-black">
              S
            </span>
          </div>
        </div>

        {/* Mobile Seam Divider */}
        <div className="lg:hidden bg-white text-black py-2 px-6 flex justify-between items-center font-black tracking-tighter text-xl border-y border-black">
          <span>COLLISION</span>
          <span>VS</span>
        </div>

        {/* Right Opposing Zone: Inverted Pure White, Classical Axial Structure (5 cols) */}
        <div className="lg:col-span-5 bg-white text-black p-8 md:p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden">
          {/* Top Cropped Word */}
          <div className="overflow-hidden -mx-8 -mt-12 pb-6 select-none pointer-events-none text-right">
            <div className="text-[18vw] lg:text-[10vw] font-black tracking-[-0.07em] leading-[0.78] uppercase whitespace-nowrap">
              AXIS
            </div>
          </div>

          <div className="my-auto text-center space-y-5 max-w-xs mx-auto">
            <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
              POLE B // CLASSICAL COUNTER
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase">
              CENTRAL SYMMETRY
            </h3>
            <div className="w-12 h-px bg-black mx-auto" />
            <p className="text-xs font-mono tracking-wide opacity-80 leading-relaxed">
              The bilateral axis anchors contemplative reading: margins remain inviolate, proportions stay quiet, and every letterform sits wholly contained inside the paper bed.
            </p>
            <div className="pt-2 text-[10px] font-mono tracking-widest opacity-60">
              [CONTRAST ARGUMENT // ARCHIVE 1954]
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono tracking-widest opacity-60 border-t border-black/20 pt-3">
            <span>INVERTED SURFACE</span>
            <span>KONTUR DEBATE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
