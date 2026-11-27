/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Pin } from 'lucide-react';

export const Content8: React.FC = () => {
  return (
    <section className="w-full bg-black text-white border-b border-white/20 px-6 py-12 md:px-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-white/20 pb-4 mb-8">
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] opacity-60 uppercase">
            CONTENT 08 // THE PINBOARD — LAYERED STUDIO PROOF COLLISION
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mt-1">
            PRESS WALL // BASEL
          </h2>
        </div>
        <div className="text-[10px] font-mono tracking-widest opacity-60 text-right hidden sm:block">
          5 LAYERED PROOFS<br />
          Z-STACKED DRAFTING TABLE
        </div>
      </div>

      {/* Desktop Layered Collision Board */}
      <div className="relative max-w-5xl mx-auto h-[540px] border border-white/15 bg-black overflow-hidden hidden lg:block">
        {/* Corner Registration Marks */}
        <span className="absolute top-3 left-3 text-[10px] font-mono opacity-35">+ 0,0</span>
        <span className="absolute bottom-3 right-3 text-[10px] font-mono opacity-35">+ 1000,540</span>

        {/* PIN 01: Large Black Visual Plate (back left, -2deg) */}
        <div className="absolute top-10 left-8 w-[430px] h-[270px] border border-white/35 bg-black p-5 -rotate-2 z-10 flex flex-col justify-between overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center text-[10px] font-mono tracking-widest opacity-70">
            <span className="flex items-center gap-1"><Pin className="w-3 h-3" /> PIN 01 // PROOF PLATE</span>
            <span>1962-A</span>
          </div>
          <div className="overflow-hidden -mx-5">
            <div className="text-[140px] font-black tracking-[-0.07em] leading-[0.8] uppercase whitespace-nowrap select-none">
              BASEL
            </div>
          </div>
          <div className="text-[10px] font-mono opacity-60">
            FIG. A — UNTRIMMED LITHOGRAPH SHEET
          </div>
        </div>

        {/* PIN 02: Inverted White Specimen Card (top right, +3deg) */}
        <div className="absolute top-8 right-12 w-[340px] bg-white text-black p-6 rotate-3 z-20 border border-black shadow-2xl">
          <div className="flex justify-between text-[10px] font-mono tracking-widest opacity-70 border-b border-black/20 pb-2 mb-3">
            <span className="flex items-center gap-1"><Pin className="w-3 h-3" /> PIN 02 // MANIFESTO</span>
            <span>HALL A</span>
          </div>
          <h3 className="text-2xl font-black tracking-tighter uppercase leading-none mb-2">
            NO DECORATION BEYOND INK
          </h3>
          <p className="text-[11px] font-mono leading-relaxed opacity-85">
            Approved galley text for October opening night lecture by Bruno Müller.
          </p>
        </div>

        {/* PIN 03: Overlapping Schedule Slip (center, -1deg) */}
        <div className="absolute top-[195px] left-[310px] w-[360px] border border-white/60 bg-black p-5 -rotate-1 z-30 shadow-2xl">
          <div className="flex justify-between text-[10px] font-mono tracking-widest opacity-70 border-b border-white/20 pb-2 mb-3">
            <span className="flex items-center gap-1"><Pin className="w-3 h-3" /> PIN 03 // PRESS SLIP</span>
            <span>OCT 14</span>
          </div>
          <div className="space-y-2 text-[11px] font-mono">
            <div className="flex justify-between">
              <span className="opacity-60">09:30</span>
              <span className="font-bold">GROTESQUE PROPORTIONS</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-60">14:00</span>
              <span className="font-bold">VOID &amp; GUILLOTINE</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-60">17:15</span>
              <span className="font-bold">FOLIO BINDING DEMO</span>
            </div>
          </div>
        </div>

        {/* PIN 04: Narrow Vertical Marker Tag (far left bottom, +2deg) */}
        <div className="absolute bottom-14 left-16 w-[250px] border border-white/40 bg-black p-4 rotate-2 z-40 shadow-2xl">
          <div className="text-[10px] font-mono tracking-widest opacity-65 mb-1 flex items-center gap-1">
            <Pin className="w-3 h-3" /> PIN 04 // INK NOTE
          </div>
          <div className="text-xs font-mono leading-relaxed opacity-90">
            Double-hit Schwarz 01 density verified at 1.92 Dmax on Munken Polar.
          </div>
        </div>

        {/* PIN 05: Bottom-Right Cropped Monumental Strip (-2deg) */}
        <div className="absolute bottom-10 right-8 w-[420px] h-[155px] border border-white/50 bg-black p-4 -rotate-2 z-50 overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="flex justify-between text-[10px] font-mono tracking-widest opacity-70">
            <span className="flex items-center gap-1"><Pin className="w-3 h-3" /> PIN 05 // FINAL BLEED</span>
            <span>APPROVED</span>
          </div>
          <div className="overflow-hidden -mx-4 -mb-4">
            <div className="text-[118px] font-black tracking-[-0.07em] leading-[0.76] uppercase whitespace-nowrap select-none">
              PROOF
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Mobile/Tablet Stacked Collision */}
      <div className="lg:hidden space-y-5">
        <div className="border border-white/35 bg-black p-5 -rotate-1 overflow-hidden">
          <div className="text-[10px] font-mono opacity-65 mb-2">PIN 01 // PROOF PLATE</div>
          <div className="text-6xl font-black tracking-tighter uppercase">BASEL</div>
        </div>
        <div className="bg-white text-black p-5 rotate-1">
          <div className="text-[10px] font-mono opacity-65 mb-2">PIN 02 // MANIFESTO</div>
          <div className="text-xl font-black uppercase">NO DECORATION BEYOND INK</div>
        </div>
        <div className="border border-white/50 bg-black p-5 -rotate-1">
          <div className="text-[10px] font-mono opacity-65 mb-2">PIN 03 // PRESS SLIP</div>
          <div className="text-xs font-mono">09:30 GROTESQUE PROPORTIONS · 14:00 VOID &amp; GUILLOTINE</div>
        </div>
        <div className="border border-white/40 bg-black p-5 rotate-1 overflow-hidden">
          <div className="text-[10px] font-mono opacity-65 mb-2">PIN 05 // FINAL BLEED</div>
          <div className="text-6xl font-black tracking-tighter uppercase">PROOF</div>
        </div>
      </div>
    </section>
  );
};
