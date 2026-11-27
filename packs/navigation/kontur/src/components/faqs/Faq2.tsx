/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Faq2: React.FC = () => {
  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-2">[02 // DENSE Q&amp;A]</div>
      <div className="overflow-hidden mb-8">
        <h3 className="text-[12vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          QUESTIONS
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/20 pt-8 text-xs font-mono tracking-wider opacity-80 leading-relaxed">
        <div className="space-y-6">
          <div>
            <div className="text-white font-bold mb-1">[01. LOCATION ACCESS]</div>
            All venues are within walking distance in central Basel and Zürich. Special transit passes provided at registration desk.
          </div>
          <div>
            <div className="text-white font-bold mb-1">[02. RECORDING POLICY]</div>
            Audio and video recording of keynotes is restricted to accredited press and fellowship ticket holders.
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <div className="text-white font-bold mb-1">[03. EXHIBITION ENTRY]</div>
            Exhibition halls open at 08:30 CET daily. Badge presentation required at all security checkpoints.
          </div>
          <div>
            <div className="text-white font-bold mb-1">[04. WORKSHOP MATERIALS]</div>
            All participants must bring their own digital typesetting workstations loaded with grotesque font sets.
          </div>
        </div>
      </div>
    </div>
  );
};
