/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BlogCard3 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">BLOG 03 // FEATURED ARTICLE WITH B/W PLATE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 border border-[#0a0a0a]">
          <div className="md:col-span-6 bg-[#0a0a0a] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#0a0a0a]">
            <div className="w-full h-64 bg-[#ffffff] grayscale overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" 
                alt="Featured Article" 
                className="w-full h-full object-cover filter grayscale contrast-150"
              />
            </div>
          </div>

          <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[9px] font-mono uppercase">
                <span className="text-[#e30613] font-bold">01. FEATURED ESSAY</span>
                <span className="text-[#0a0a0a]/60">24.11.2026</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                THE EXACT SCIENCE OF RATIONAL TYPOGRAPHY AND GRID GEOMETRY.
              </h2>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">
                An in-depth examination of Swiss design principles applied to high-end digital architecture and institutional publishing.
              </p>
            </div>

            <div className="pt-6 border-t border-[#0a0a0a]/20 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-[#0a0a0a]/60">AUTHOR: H. WEBER</span>
              <a href="#read" className="px-4 py-2 bg-[#0a0a0a] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] transition-colors flex items-center space-x-2">
                <span>Read Full Paper</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
