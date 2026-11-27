/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const FeatureGrid1: React.FC = () => {
  const schedule = [
    { time: '09:30', title: 'Grid Architecture', speaker: 'Dr. H. Keller' },
    { time: '11:15', title: 'Negative Space Dynamics', speaker: 'A. Hofmann' },
    { time: '14:00', title: 'Grotesque Typefaces', speaker: 'E. Ruder' },
    { time: '16:30', title: 'The Bleed Aesthetic', speaker: 'M. Bill' },
  ];

  return (
    <div className="w-full bg-black text-white border-b border-white/20 p-8">
      <div className="text-[11px] font-mono tracking-widest opacity-70 mb-4">[01 // PROGRAM SCHEDULE]</div>
      <div className="overflow-hidden mb-8">
        <h3 className="text-[10vw] font-black tracking-tighter leading-[0.8] uppercase whitespace-nowrap">
          SYMPOSIUM SESSIONS
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {schedule.map((item, idx) => (
          <div key={idx} className="border border-white/20 p-6 flex flex-col justify-between space-y-6">
            <div className="text-xs font-mono tracking-widest opacity-60">[{item.time} CET]</div>
            <div>
              <div className="text-lg font-bold tracking-tight mb-2 uppercase">{item.title}</div>
              <div className="text-xs font-mono tracking-wider opacity-80">{item.speaker}</div>
            </div>
            <div className="text-[10px] font-mono opacity-40">HALL {idx + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
