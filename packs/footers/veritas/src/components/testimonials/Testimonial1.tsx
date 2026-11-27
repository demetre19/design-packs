/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Testimonial1() {
  return (
    <section className="bg-[#f6f8fa] py-24 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-medium tracking-[0.25em] text-[#5b6b76] uppercase mb-6 block">
          Institutional Endorsement
        </span>
        <blockquote className="text-2xl md:text-4xl font-normal text-[#0a0e12] leading-relaxed tracking-tight mb-10">
          &ldquo;Veritas instrumentation has provided our central clearing house with absolute zero-drift synchronization that exceeds all international banking standards.&rdquo;
        </blockquote>
        <div>
          <div className="font-semibold text-[#0a0e12] text-sm">Dr. Alistair Vance</div>
          <div className="text-xs text-[#5b6b76] mt-1">Chief Technology Officer, Sovereign Monetary Authority</div>
        </div>
      </div>
    </section>
  );
}
